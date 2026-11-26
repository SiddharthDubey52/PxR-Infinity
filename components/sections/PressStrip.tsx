import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { hasPress, press } from '@/lib/data/press'

/** Homepage "In the news" strip. Renders nothing until lib/data/press.ts has an entry. */
export function PressStrip() {
  if (!hasPress) return null
  const latest = [...press].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4)
  return (
    <section className="border-y border-line py-12" aria-labelledby="press-strip-title">
      <div className="container-x flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <h2 id="press-strip-title" className="text-sm font-semibold tracking-[0.18em] text-faint uppercase">
          PXR Infinity in the news
        </h2>
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {latest.map((p) => (
            <li key={p.url}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="font-display text-lg font-semibold text-muted transition hover:text-white">
                {p.outlet}
              </a>
            </li>
          ))}
        </ul>
        <Link href="/press" className="inline-flex min-h-11 items-center gap-1.5 text-sm text-accent-light transition hover:text-white">
          All press <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  )
}
