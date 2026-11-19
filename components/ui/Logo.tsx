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
 * Logo wordmark: "PxR" in Clash Display (gradient lowercase x) followed by the infinity mark → PxR∞
 * Swap this component's contents for your final logo SVG later.
 */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center font-display leading-none ${className}`}
    >
      <span className="sr-only">PXR Infinity — home</span>
      <span className="inline-flex items-center gap-1.5 text-[1.6rem] font-bold tracking-[-0.04em]" aria-hidden="true">
        <span>
          P
          <span className="logo-x inline-block px-[0.02em] text-[0.82em] italic">x</span>R
        </span>
        <InfinityMark className="h-[0.62em] w-[1.25em] translate-y-[0.02em] transition-transform duration-700 group-hover:rotate-180" strokeWidth={10} />
      </span>
    </Link>
  )
}
