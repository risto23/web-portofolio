import { NextRequest, NextResponse } from 'next/server'
import { validateUploadedFile, sanitiseFilename } from '@/lib/fileValidation'

// App Router size limit — set in next.config.ts via `serverExternalPackages` or vercel.json
// The `api.bodyParser` config is Pages Router only and is ignored here.

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') ?? ''
    if (!contentType.startsWith('multipart/form-data')) {
      return NextResponse.json(
        { error: 'Request must be multipart/form-data.' },
        { status: 400 }
      )
    }

    const formData = await req.formData()
    const file = formData.get('file')

    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'No file provided.' }, { status: 400 })
    }

    // ── Security validation (all checks run server-side) ──────────────────
    const result = await validateUploadedFile(file, file.name)
    if (!result.valid) {
      return NextResponse.json({ error: result.error }, { status: 422 })
    }

    const originalSafeName = sanitiseFilename(file.name)

    // ── TODO: save to storage (disk / S3 / Cloudinary / etc.) ─────────────
    // Use generateStorageFilename(file.name) for a UUID-based name to prevent
    // polyglot attacks. Store the mapping { originalSafeName, storageFilename }
    // in your database. Serve via proxy with Content-Disposition: attachment.
    // Example: const url = await saveToStorage(file, generateStorageFilename(file.name))

    return NextResponse.json(
      { message: 'File uploaded successfully.', filename: originalSafeName },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Internal server error during upload.' },
      { status: 500 }
    )
  }
}

// Reject all other HTTP methods
export function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 })
}
