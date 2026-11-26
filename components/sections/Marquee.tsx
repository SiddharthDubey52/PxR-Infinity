import type { CSSProperties } from 'react'
import { InfinityMark } from '@/components/ui/Logo'

/**
 * Infinite marquee (pure CSS). The list is rendered twice for a seamless loop;
 * the duplicate is hidden from screen readers.
 */
export function Marquee({
  items,
  reverse,
  duration = 40,
  label,
  variant = 'pill',
}: {
  items: readonly string[]
  reverse?: boolean
  duration?: number
  label: string
  variant?: 'pill' | 'text' | 'press'
}) {
  const row = (hidden: boolean) =>
    items.map((it, i) => (
      <li key={`${hidden}-${i}`} aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
        {variant === 'pill' ? (
          <span className="flex h-16 min-w-44 items-center justify-center rounded-2xl border border-line bg-surface px-7 font-display text-base font-bold tracking-tight whitespace-nowrap text-muted">
            {it}
          </span>
        ) : variant === 'press' ? (
          <span className="flex items-center gap-12 px-6 font-display text-xl font-semibold tracking-[-0.01em] whitespace-nowrap text-white/70 transition hover:text-white sm:text-2xl">
            {it}
            <span aria-hidden="true" className="size-1.5 rounded-full bg-gold/60" />
          </span>
        ) : (
          <span className="flex items-center gap-8 font-display text-[clamp(2rem,6vw,4.5rem)] font-bold tracking-tight text-white/90">
            {it}
            <InfinityMark className="h-[0.5em] w-[1em]" strokeWidth={10} />
          </span>
        )}
      </li>
    ))

  return (
    <div className="marquee marquee-mask overflow-hidden" role="region" aria-label={label}>
      <ul
        className={`animate-marquee flex w-max gap-4 ${variant === 'text' ? 'gap-8' : ''} ${reverse ? '[animation-direction:reverse]' : ''}`}
        style={{ '--marquee-duration': `${duration}s` } as CSSProperties}
      >
        {row(false)}
        {row(true)}
      </ul>
    </div>
  )
}
