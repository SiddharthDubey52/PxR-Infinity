import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { CaseStudy } from '@/lib/data/work'

export function WorkCard({
  c,
  i = 0,
  headingLevel = 'h3',
  compact = false,
  priority = false,
}: {
  c: CaseStudy
  i?: number
  headingLevel?: 'h2' | 'h3'
  /** shorter image — used in the pinned horizontal scroller */
  compact?: boolean
  /** eager-load the image (use for the first card above the fold) */
  priority?: boolean
}) {
  const H = headingLevel
  return (
    <article data-reveal style={{ '--d': `${(i % 3) * 90}ms` } as CSSProperties} className="card group h-full overflow-hidden">
      <Link href={`/work/${c.slug}`} className="flex h-full flex-col">
        <div className={`relative overflow-hidden ${compact ? 'aspect-[16/10] lg:aspect-[2/1]' : 'aspect-[16/10]'}`}>
          <Image
            src={c.cover}
            alt={c.coverAlt}
            fill
            preload={priority}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span className="absolute top-4 left-4 rounded-full border border-line-strong bg-bg/70 px-3 py-1 text-xs font-semibold backdrop-blur">
            {c.category}
          </span>
          <span className="absolute top-4 right-4 grid size-10 place-items-center rounded-full bg-white text-bg opacity-0 transition duration-300 group-hover:opacity-100">
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-sm text-faint">{c.client}</p>
          <H className="mt-2 text-lg leading-snug font-semibold sm:text-xl">{c.title}</H>
          <dl className="mt-5 space-y-3 text-[0.95rem]">
            <div>
              <dt className="text-xs font-semibold tracking-[0.14em] text-accent-light uppercase">Problem</dt>
              <dd className="mt-1 line-clamp-2 text-muted">{c.problem}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.14em] text-accent-light uppercase">What we did</dt>
              <dd className="mt-1 line-clamp-2 text-muted">{c.summary}</dd>
            </div>
          </dl>
          <ul className="mt-auto grid grid-cols-3 gap-2 pt-6">
            {c.results.map((r) => (
              <li key={r.label} className="rounded-xl border border-accent/20 bg-accent/[0.07] p-3">
                <p className="font-display text-sm font-bold">{r.value}</p>
                <p className="mt-1 text-[0.7rem] leading-tight text-muted">{r.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  )
}
