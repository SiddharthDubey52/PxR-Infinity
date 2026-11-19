import Link from 'next/link'
import { useId } from 'react'
import { INFINITY_PATH } from '@/lib/brand'

export { INFINITY_PATH }

export function InfinityMark({ className = '', strokeWidth = 9 }: { className?: string; strokeWidth?: number }) {
  const id = `inf-${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  return (
    <svg viewBox="0 0 100 50" className={className} aria-hidden="true" fill="none">
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <path d={INFINITY_PATH} stroke={`url(#${id})`} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

/**
 * Text logo "P∞R INFINITY" — the X in PXR is drawn as an infinity sign.
 * Swap this component's contents for your final logo SVG later.
 */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 font-display font-bold leading-none tracking-tight ${className}`}
    >
      <span className="sr-only">PXR Infinity — home</span>
      <span className="inline-flex items-center text-[1.35rem]" aria-hidden="true">
        P
        <InfinityMark className="mx-[1px] h-[0.72em] w-[1.35em] transition-transform duration-500 group-hover:rotate-180" />
        R
      </span>
      <span className="text-[0.62rem] font-medium tracking-[0.32em] text-muted" aria-hidden="true">
        INFINITY
      </span>
    </Link>
  )
}
