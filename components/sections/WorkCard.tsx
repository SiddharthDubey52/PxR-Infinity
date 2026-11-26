import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { ClientPhoto } from '@/components/ui/ClientPhoto'
import { visible, type CaseStudy } from '@/lib/data/work'

/**
 * Case study card. `wide` = horizontal layout used in the desktop sticky stack.
 */
export function WorkCard({
  c,
  i = 0,
  headingLevel = 'h3',
  wide = false,
  priority = false,
  reveal = true,
}: {
  c: CaseStudy
  i?: number
  headingLevel?: 'h2' | 'h3'
  wide?: boolean
  /** eager-load the image (first card above the fold) */
  priority?: boolean
  reveal?: boolean
}) {
  const H = headingLevel
  return (
    <article
      {...(reveal ? { 'data-reveal': '' } : {})}
      style={{ '--d': `${(i % 3) * 90}ms` } as CSSProperties}
      className="card group h-full overflow-hidden bg-surface"
    >
      <Link href={`/work/${c.slug}`} data-cursor="view" className={`flex h-full flex-col ${wide ? 'lg:grid lg:grid-cols-[0.9fr_1.1fr]' : ''}`}>
        <div className={`relative overflow-hidden ${wide ? 'aspect-[4/5] lg:aspect-auto lg:min-h-[460px]' : 'aspect-[4/5] sm:aspect-[16/12]'}`}>
          <ClientPhoto
            src={c.cover}
            name={c.client}
            alt={c.coverAlt}
            priority={priority}
            sizes={wide ? '(min-width: 1024px) 560px, 85vw' : '(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw'}
            className="transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span className="absolute top-4 left-4 rounded-full border border-line-strong bg-bg/70 px-3 py-1 text-xs font-semibold backdrop-blur">
            {c.category}
          </span>
          <span className="absolute top-4 right-4 grid size-10 place-items-center rounded-full bg-white text-bg opacity-0 transition duration-300 group-hover:opacity-100">
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </span>
        </div>
        <div className={`flex flex-1 flex-col p-6 sm:p-7 ${wide ? 'lg:p-10' : ''}`}>
          <p className="text-sm text-faint">{c.client}</p>
          <H className={`mt-2 leading-snug font-semibold ${wide ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-lg sm:text-xl'}`}>{c.title}</H>
          <dl className="mt-5 space-y-3 text-[0.95rem]">
            <div>
              <dt className="text-xs font-semibold tracking-[0.14em] text-accent-light uppercase">Problem</dt>
              <dd className={`mt-1 text-muted ${wide ? '' : 'line-clamp-3'}`}>{c.problem}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.14em] text-accent-light uppercase">What we did</dt>
              <dd className={`mt-1 text-muted ${wide ? '' : 'line-clamp-3'}`}>{c.summary}</dd>
            </div>
          </dl>
          <ul className="mt-auto grid grid-cols-3 gap-2 pt-6">
            {visible(c.results).slice(0, 3).map((r) => (
              <li key={r.label} className="rounded-xl border border-gold/25 bg-gold/[0.06] p-3">
                <p className={`font-display font-semibold text-gold ${wide ? 'text-lg sm:text-2xl' : 'text-base'}`}>{r.value}</p>
                <p className="mt-1 text-xs leading-tight text-muted">{r.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  )
}
