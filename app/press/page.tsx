import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { CtaSection } from '@/components/sections/CtaSection'
import { awards, hasPress, press } from '@/lib/data/press'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'PXR Infinity in the News: Press and Awards',
  absoluteTitle: true,
  description: 'Articles written about PXR Infinity and awards the agency has won, with links to every original piece.',
  path: '/press',
  index: hasPress,
})

const fmt = (d: string) => new Date(`${d}T00:00:00+05:30`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

/** 404 until lib/data/press.ts has at least one real entry. */
export default function PressPage() {
  if (!hasPress) notFound()
  const items = [...press].sort((a, b) => b.date.localeCompare(a.date))
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Press', path: '/press' }]}
        eyebrow="Press"
        title={
          <>
            PXR Infinity <span className="text-gradient">in the news</span>.
          </>
        }
        intro="Articles written about PXR Infinity and awards we’ve received. Coverage our clients earned lives on their case studies, not here."
      />
      <section className="pb-24 sm:pb-32" aria-label="Press and awards">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          {items.length > 0 && (
            <div>
              <h2 className="mb-6 text-2xl font-semibold">Articles</h2>
              <ul className="space-y-3">
                {items.map((p) => (
                  <li key={p.url}>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="card flex items-start justify-between gap-4 p-6 transition hover:border-accent/50">
                      <span>
                        <span className="block text-sm text-faint">
                          {p.outlet} · <time dateTime={p.date}>{fmt(p.date)}</time>
                        </span>
                        <span className="mt-1 block font-semibold">{p.title}</span>
                      </span>
                      <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-accent-light" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {awards.length > 0 && (
            <div>
              <h2 className="mb-6 text-2xl font-semibold">Awards</h2>
              <ul className="space-y-3">
                {awards.map((a) => (
                  <li key={`${a.name}-${a.year}`} className="card p-6">
                    <span className="block text-sm text-faint">
                      {a.by} · {a.year}
                    </span>
                    {a.url ? (
                      <a href={a.url} target="_blank" rel="noopener noreferrer" className="mt-1 block font-semibold transition hover:text-accent-light">
                        {a.name}
                      </a>
                    ) : (
                      <span className="mt-1 block font-semibold">{a.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      <CtaSection />
    </>
  )
}
