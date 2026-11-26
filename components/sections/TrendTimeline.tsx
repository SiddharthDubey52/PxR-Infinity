'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { TimelineEntry } from '@/lib/data/timeline'

const fmt = (d: string) =>
  d ? new Date(`${d}T00:00:00+05:30`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Date to be added'

/** Season-grouped timeline with show filter chips. Every entry is in the server HTML; filtering only hides. */
export function TrendTimeline({ entries }: { entries: TimelineEntry[] }) {
  const shows = [...new Set(entries.map((e) => e.show))]
  const [active, setActive] = useState('All')

  // newest season first; within a season, by date (undated last)
  const sorted = [...entries].sort((a, b) => b.year - a.year || (a.date && b.date ? b.date.localeCompare(a.date) : a.date ? -1 : b.date ? 1 : 0))
  const groups = sorted.reduce<{ key: string; label: string; items: TimelineEntry[] }[]>((acc, e) => {
    const key = `${e.show}-${e.season}`
    const g = acc.find((x) => x.key === key)
    if (g) g.items.push(e)
    else acc.push({ key, label: `${e.show} · ${e.season}`, items: [e] })
    return acc
  }, [])

  return (
    <>
      {shows.length > 1 && (
        <div className="mb-12 flex flex-wrap gap-2" role="group" aria-label="Filter by show">
          {['All', ...shows].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setActive(s)}
              aria-pressed={active === s}
              className={`min-h-11 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                active === s ? 'border-white bg-white text-bg' : 'border-line-strong text-muted hover:border-accent hover:text-white'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      )}
      <div className="space-y-14" aria-live="polite">
        {groups.map((g) => (
          <section key={g.key} hidden={active !== 'All' && !g.key.startsWith(`${active}-`)} aria-labelledby={`t-${g.key}`}>
            <h2 id={`t-${g.key}`} className="mb-6 font-display text-2xl font-semibold">
              {g.label}
            </h2>
            <ol className="relative space-y-6 border-l border-accent/40 pl-8">
              {g.items.map((e) => (
                <li key={e.title} className="relative">
                  <span aria-hidden="true" className="absolute top-2 -left-[2.3rem] size-3 rounded-full bg-gradient-to-br from-accent to-gold shadow-[0_0_14px_rgb(139_92_246/0.8)]" />
                  <p className="text-sm text-faint">
                    <time dateTime={e.date || undefined}>{fmt(e.date)}</time>
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">{e.title}</h3>
                  <p className="mt-2 max-w-2xl text-muted">{e.desc}</p>
                  <p className="mt-2 flex flex-wrap gap-4 text-sm">
                    {e.caseStudy && (
                      <Link href={`/work/${e.caseStudy}`} className="text-accent-light transition hover:text-white">
                        Read the case study →
                      </Link>
                    )}
                    {e.source && (
                      <a href={e.source} target="_blank" rel="noopener noreferrer" className="text-accent-light transition hover:text-white">
                        Source ↗
                      </a>
                    )}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </>
  )
}
