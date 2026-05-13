/**
 * File upload security validator
 *
 * Layers of defense:
 * 1. Extension whitelist  — rejects .sh, .js, .exe, .php, etc.
 * 2. MIME-type check       — rejects mismatched Content-Type
 * 3. Magic-byte inspection — detects disguised executables (e.g. "image.jpg" that is actually a PHP script)
 * 4. File size limit       — prevents DoS via huge uploads
 * 5. Filename sanitisation — strips path traversal and special chars
 */

// ─── Allowed types ────────────────────────────────────────────────────────────

const ALLOWED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp'])

const ALLOWED_MIME_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
])

/**
 * Magic-byte signatures for each allowed image format.
 * These are the actual first bytes of a valid file, regardless of its name.
 */
const MAGIC_SIGNATURES: Array<{ mime: string; bytes: number[]; offset?: number }> = [
  // JPEG: FF D8 FF
  { mime: 'image/jpeg', bytes: [0xff, 0xd8, 0xff] },
  // PNG: 89 50 4E 47 0D 0A 1A 0A
  { mime: 'image/png', bytes: [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a] },
  // GIF87a / GIF89a
  { mime: 'image/gif', bytes: [0x47, 0x49, 0x46, 0x38, 0x37, 0x61] },
  { mime: 'image/gif', bytes: [0x47, 0x49, 0x46, 0x38, 0x39, 0x61] },
  // WebP: RIFF????WEBP  (bytes 0-3 = RIFF, bytes 8-11 = WEBP)
  { mime: 'image/webp', bytes: [0x52, 0x49, 0x46, 0x46], offset: 0 },
]

// WebP needs a secondary check at offset 8
function isWebP(buf: Uint8Array): boolean {
  if (buf.length < 12) return false
  return (
    buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x46 &&
    buf[8] === 0x57 && buf[9] === 0x45 && buf[10] === 0x42 && buf[11] === 0x50
  )
}

// ─── Dangerous patterns (belt-and-suspenders) ─────────────────────────────────

/** Extensions that must never be accepted, even if MIME looks fine. */
const BLOCKED_EXTENSIONS = new Set([
  '.sh', '.bash', '.zsh', '.fish',
  '.js', '.mjs', '.cjs', '.ts', '.tsx',
  '.php', '.php3', '.php4', '.php5', '.phtml',
  '.py', '.rb', '.pl', '.perl',
  '.exe', '.dll', '.so', '.dylib',
  '.bat', '.cmd', '.ps1', '.psm1',
  '.jar', '.war', '.class',
  '.svg',  // SVG can embed JS — only allow if your renderer sanitises it
  '.html', '.htm', '.xhtml',
  '.xml',  // can embed scripts
  '.json', // can be exploited depending on consumer
])

// ─── Config ───────────────────────────────────────────────────────────────────

export const UPLOAD_CONFIG = {
  maxSizeBytes: 5 * 1024 * 1024, // 5 MB
  maxSizeMB: 5,
}

// ─── Result type ──────────────────────────────────────────────────────────────

export interface ValidationResult {
  valid: boolean
  error?: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getExtension(filename: string): string {
  const lower = filename.toLowerCase()
  // Handle double extensions like "evil.php.jpg"
  const parts = lower.split('.')
  // If there are more than two parts, check every non-first segment
  if (parts.length > 2) {
    for (let i = 1; i < parts.length - 1; i++) {
      if (BLOCKED_EXTENSIONS.has(`.${parts[i]}`)) return `.${parts[i]}`
    }
  }
  return `.${parts[parts.length - 1]}`
}

function matchesMagicBytes(buf: Uint8Array, signature: number[]): boolean {
  if (buf.length < signature.length) return false
  return signature.every((byte, i) => buf[i] === byte)
}

function detectMimeFromBytes(buf: Uint8Array): string | null {
  if (isWebP(buf)) return 'image/webp'
  for (const sig of MAGIC_SIGNATURES) {
    if (sig.mime === 'image/webp') continue // handled above
    if (matchesMagicBytes(buf, sig.bytes)) return sig.mime
  }
  return null
}

// ─── Storage helpers ──────────────────────────────────────────────────────────

/**
 * Generates a UUID-based storage filename, replacing the original name entirely.
 * Use this when saving to disk/S3 to prevent polyglot file attacks and path traversal.
 *
 * Example: "evil.php.jpg" → "550e8400-e29b-41d4-a716-446655440000.jpg"
 */
export function generateStorageFilename(originalFilename: string): string {
  const ext = getExtension(originalFilename)
  // Only use extensions we've already validated as safe
  const safeExt = ALLOWED_EXTENSIONS.has(ext) ? ext : '.bin'
  const uuid = crypto.randomUUID()
  return `${uuid}${safeExt}`
}

// ─── Sanitise filename ────────────────────────────────────────────────────────

/** Returns a safe filename: no path separators, no null bytes, max 100 chars. */
export function sanitiseFilename(filename: string): string {
  return filename
    .replace(/[/\\?%*:|"<>]/g, '_')  // path traversal and shell-special chars
    .replace(/\0/g, '')               // null bytes
    .replace(/\.{2,}/g, '.')          // collapse ".." path segments
    .slice(0, 100)
}

// ─── Main validator ───────────────────────────────────────────────────────────

/**
 * Validates an uploaded file on the **server side**.
 *
 * @param file     - The File / Blob received from the multipart form
 * @param filename - Original filename as reported by the client (untrusted)
 */
export async function validateUploadedFile(
  file: File | Blob,
  filename: string
): Promise<ValidationResult> {
  // 1. File size
  if (file.size > UPLOAD_CONFIG.maxSizeBytes) {
    return {
      valid: false,
      error: `File too large. Maximum size is ${UPLOAD_CONFIG.maxSizeMB} MB.`,
    }
  }

  if (file.size === 0) {
    return { valid: false, error: 'File is empty.' }
  }

  // 2. Extension check (double-extension attack included)
  const ext = getExtension(filename)
  if (BLOCKED_EXTENSIONS.has(ext)) {
    return { valid: false, error: `File type "${ext}" is not allowed.` }
  }
  if (!ALLOWED_EXTENSIONS.has(ext)) {
    return {
      valid: false,
      error: `Unsupported file type "${ext}". Allowed: ${[...ALLOWED_EXTENSIONS].join(', ')}`,
    }
  }

  // 3. Declared MIME type
  const declaredMime = file.type.toLowerCase().split(';')[0].trim()
  if (!ALLOWED_MIME_TYPES.has(declaredMime)) {
    return {
      valid: false,
      error: `MIME type "${declaredMime}" is not allowed.`,
    }
  }

  // 4. Magic-byte inspection (read first 16 bytes — enough for all signatures)
  const headerSlice = file.slice(0, 16)
  const headerBuf = new Uint8Array(await headerSlice.arrayBuffer())
  const detectedMime = detectMimeFromBytes(headerBuf)

  if (!detectedMime) {
    return {
      valid: false,
      error: 'File content does not match any allowed image format.',
    }
  }

  // 5. Declared MIME must match actual content
  if (detectedMime !== declaredMime) {
    return {
      valid: false,
      error: 'File content does not match its declared type. Upload rejected.',
    }
  }

  return { valid: true }
}

// ─── Client-side pre-check (lightweight, NOT a security boundary) ─────────────

/**
 * Quick client-side check to give early feedback before uploading.
 * This is UX-only — the real security check always happens server-side.
 */
export function validateFileClient(file: File): ValidationResult {
  if (file.size > UPLOAD_CONFIG.maxSizeBytes) {
    return {
      valid: false,
      error: `File too large. Maximum size is ${UPLOAD_CONFIG.maxSizeMB} MB.`,
    }
  }

  const ext = getExtension(file.name)
  if (BLOCKED_EXTENSIONS.has(ext) || !ALLOWED_EXTENSIONS.has(ext)) {
    return { valid: false, error: `File type "${ext}" is not allowed.` }
  }

  if (!ALLOWED_MIME_TYPES.has(file.type)) {
    return { valid: false, error: `MIME type "${file.type}" is not allowed.` }
  }

  return { valid: true }
}
