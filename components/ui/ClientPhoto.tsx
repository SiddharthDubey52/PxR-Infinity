import 'server-only'
import fs from 'node:fs'
import path from 'node:path'
import Image from 'next/image'

/** True when the file exists in /public (checked at build time). */
export function publicFileExists(src: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', src))
  } catch {
    return false
  }
}

export const initialsOf = (name: string) =>
  name
    .replace(/\(.*?\)/g, '')
    .replace(/^The\s+/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('')

/**
 * Client photo with a graceful fallback. If the file in /public/clients/ is missing,
 * renders the client's initials on an animated brand-gradient tile instead of a broken image.
 */
export function ClientPhoto({
  src,
  name,
  alt,
  sizes,
  priority = false,
  className = '',
}: {
  src: string
  name: string
  alt: string
  sizes: string
  priority?: boolean
  className?: string
}) {
  if (publicFileExists(src)) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={priority}
        loading={priority ? 'eager' : 'lazy'}
        className={`object-cover ${className}`}
      />
    )
  }
  return (
    <div role="img" aria-label={alt} data-photo-fallback={src} className={`initials-tile absolute inset-0 grid place-items-center ${className}`}>
      <span aria-hidden="true" className="font-display text-[clamp(2.5rem,9vw,5rem)] font-semibold tracking-[-0.03em] text-white/95">
        {initialsOf(name)}
      </span>
    </div>
  )
}
