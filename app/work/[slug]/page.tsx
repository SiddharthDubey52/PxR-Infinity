import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { CSSProperties } from 'react'
import { Quote } from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/ui/PageHero'
import { ServiceCard } from '@/components/sections/HomeSections'
import { WorkCard } from '@/components/sections/WorkCard'
import { CtaSection } from '@/components/sections/CtaSection'
import { Parallax } from '@/components/motion/Parallax'
import { caseStudies, getCaseStudy } from '@/lib/data/work'
import { getService } from '@/lib/data/services'
import { pageMetadata } from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCaseStudy((await params).slug)
  if (!c) return {}
  return pageMetadata({
    title: c.title,
    description: `${c.summary} A ${c.category.toLowerCase()} case study by PXR Infinity.`,
    path: `/work/${c.slug}`,
  })
}

export default async function CaseStudyPage({ params }: Props) {
  const c = getCaseStudy((await params).slug)
  if (!c) notFound()

  const services = c.services.map(getService).filter((s) => s !== undefined)
  const more = caseStudies.filter((x) => x.slug !== c.slug && x.category === c.category).concat(caseStudies.filter((x) => x.slug !== c.slug && x.category !== c.category)).slice(0, 2)

  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Work', path: '/work' },
          { name: c.title, path: `/work/${c.slug}` },
        ]}
        eyebrow={`${c.category} · ${c.client}`}
        title={c.title}
        intro={<p>{c.summary}</p>}
      />

      <div className="container-x">
        <Parallax className="relative aspect-[16/9] rounded-3xl border border-line sm:aspect-[21/9]">
          <Image src={c.cover} alt={c.coverAlt} fill preload loading="eager" fetchPriority="high" sizes="(min-width: 1240px) 1240px, 100vw" className="object-cover" />
        </Parallax>
      </div>

      {/* Results strip */}
      <section className="py-16" aria-labelledby="results-title">
        <div className="container-x">
          <h2 id="results-title" className="sr-only">
            Results
          </h2>
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
            {c.results.map((r, i) => (
              <li key={r.label} className="bg-bg p-8" data-reveal style={{ '--d': `${i * 80}ms` } as CSSProperties}>
                <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">{r.value}</p>
                <p className="mt-2 text-muted">{r.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-24" aria-label="Case study">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div data-reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">The challenge</h2>
            <p className="mt-5 text-lg text-[#d4d4e2]">{c.problem}</p>
          </div>
          <div data-reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">What we did</h2>
            <ol className="mt-6 space-y-4">
              {c.approach.map((a, i) => (
                <li key={i} className="card flex gap-5 p-5">
                  <span className="font-display text-sm font-bold text-accent-light">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[#d4d4e2]">{a}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {c.quote && (
          <figure className="container-x mt-20" data-reveal>
            <div className="card mx-auto max-w-4xl p-10 sm:p-14">
              <Quote aria-hidden="true" className="size-9 text-accent" />
              <blockquote className="mt-6 font-display text-xl leading-snug sm:text-2xl">“{c.quote.text}”</blockquote>
              <figcaption className="mt-6 text-muted">
                <strong className="text-white">{c.quote.name}</strong> · {c.quote.role}
              </figcaption>
            </div>
          </figure>
        )}
      </section>

      <section className="border-t border-line py-24" aria-labelledby="svc-title">
        <div className="container-x">
          <SectionHeading eyebrow="Services used" title={<span id="svc-title">How we did it</span>} />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} s={s} i={i} />
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-24" aria-labelledby="more-title">
        <div className="container-x">
          <SectionHeading eyebrow="More work" title={<span id="more-title">Keep exploring</span>} />
          <div className="grid gap-6 md:grid-cols-2">
            {more.map((m, i) => (
              <WorkCard key={m.slug} c={m} i={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
