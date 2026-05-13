'use client'

import { useState, useRef, ChangeEvent } from 'react'
import Image from 'next/image'
import { validateFileClient, UPLOAD_CONFIG } from '@/lib/fileValidation'

interface ImageUploadProps {
  label?: string
  onSuccess?: (filename: string) => void
}

export default function ImageUpload({ label = 'Upload Image', onSuccess }: ImageUploadProps) {
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success'>('idle')
  const [preview, setPreview] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    setError(null)
    setStatus('idle')
    const file = e.target.files?.[0]
    if (!file) return

    // Client-side pre-check (UX only — real validation is on the server)
    const check = validateFileClient(file)
    if (!check.valid) {
      setError(check.error ?? 'Invalid file.')
      e.target.value = ''
      return
    }

    setPreview(URL.createObjectURL(file))
  }

  async function handleUpload() {
    const file = inputRef.current?.files?.[0]
    if (!file) return

    setError(null)
    setStatus('uploading')

    const form = new FormData()
    form.append('file', file)

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: form })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Upload failed.')
        setStatus('idle')
        return
      }

      setStatus('success')
      onSuccess?.(data.filename)
    } catch {
      setError('Network error. Please try again.')
      setStatus('idle')
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-medium text-gray-300">{label}</label>

      <input
        ref={inputRef}
        type="file"
        // Accept attribute is UX-only — server enforces the real rule
        accept=".jpg,.jpeg,.png,.gif,.webp"
        className="block text-sm text-gray-400 file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0 file:text-sm file:font-semibold
                   file:bg-blue-500/20 file:text-blue-400 hover:file:bg-blue-500/30
                   cursor-pointer"
        onChange={handleFileChange}
      />

      <p className="text-xs text-gray-500">
        Allowed: JPG, PNG, GIF, WebP — max {UPLOAD_CONFIG.maxSizeMB} MB
      </p>

      {preview && (
        <Image
          src={preview}
          alt="Preview"
          width={128}
          height={128}
          className="w-32 h-32 object-cover rounded-lg border border-white/10"
          unoptimized
        />
      )}

      {error && (
        <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded px-3 py-2">
          {error}
        </p>
      )}

      {status === 'success' && (
        <p className="text-sm text-green-400 bg-green-500/10 border border-green-500/30 rounded px-3 py-2">
          File uploaded successfully.
        </p>
      )}

      <button
        onClick={handleUpload}
        disabled={!preview || status === 'uploading'}
        className="self-start px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold
                   hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        {status === 'uploading' ? 'Uploading…' : 'Upload'}
      </button>
    </div>
  )
}
