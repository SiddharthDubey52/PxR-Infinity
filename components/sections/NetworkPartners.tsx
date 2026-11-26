'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { networkNiches, type NetworkPartner } from '@/lib/data/network'

/** Named partner pages with niche filter chips. Rendered by /network only when the list has entries. */
export function NetworkPartners({ partners }: { partners: NetworkPartner[] }) {
  const niches = networkNiches.filter((n) => partners.some((p) => p.niche === n))
  const [active, setActive] = useState<string>('All')
  const shown = active === 'All' ? partners : partners.filter((p) => p.niche === active)
  return (
    <>
      {niches.length > 1 && (
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]" role="group" aria-label="Filter pages by niche">
          {['All', ...niches].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setActive(n)}
              aria-pressed={active === n}
              className={`min-h-11 shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                active === n ? 'border-white bg-white text-bg' : 'border-line-strong text-muted hover:border-accent hover:text-white'
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      )}
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {shown.map((p) => (
          <li key={p.url}>
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="card flex h-full flex-col p-6 transition hover:border-accent/50">
              <span className="flex items-start justify-between gap-3">
                <span>
                  <strong className="block">{p.name}</strong>
                  <span className="text-sm text-muted">
                    {p.handle} · {p.platform}
                  </span>
                </span>
                <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-accent-light" />
              </span>
              <span className="mt-6 flex items-end justify-between">
                <span>
                  <span className="font-display text-2xl font-semibold">{p.followers}</span>
                  <span className="block text-xs text-faint">followers, checked {p.checkedOn}</span>
                </span>
                <span className="rounded-full border border-line-strong px-3 py-1 text-xs text-muted">{p.niche}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
