'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Filter chips for the /work grid. Cards are server-rendered children with
 * `data-category`; filtering just toggles `hidden`, so every case study stays in the HTML.
 */
export function WorkFilter({ categories, children }: { categories: readonly string[]; children: ReactNode }) {
  const [active, setActive] = useState('All')
  const grid = useRef<HTMLDivElement>(null)

  useEffect(() => {
    grid.current?.querySelectorAll<HTMLElement>('[data-category]').forEach((el) => {
      el.hidden = !(active === 'All' || el.dataset.category === active)
    })
  }, [active])

  return (
    <>
      <div className="mb-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]" role="group" aria-label="Filter case studies">
        {['All', ...categories].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`min-h-11 shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
              active === c ? 'border-white bg-white text-bg' : 'border-line-strong text-muted hover:border-accent hover:text-white'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div ref={grid} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {children}
      </div>
    </>
  )
}
