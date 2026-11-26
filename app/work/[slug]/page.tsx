import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { CSSProperties } from 'react'
import { Quote } from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/ui/PageHero'
import { ServiceCard } from '@/components/sections/HomeSections'
import { WorkCard } from '@/components/sections/WorkCard'
import { CtaSection } from '@/components/sections/CtaSection'
import { Faq } from '@/components/sections/Faq'
import { Testimonials } from '@/components/sections/Testimonials'
import { CaseGallery } from '@/components/sections/CaseGallery'
import { Parallax } from '@/components/motion/Parallax'
import { Counter } from '@/components/motion/Counter'
import { ClientPhoto, publicFileExists } from '@/components/ui/ClientPhoto'
import { JsonLd } from '@/components/ui/JsonLd'
import { WhatsAppButton } from '@/components/ui/Buttons'
import { caseStudies, getCaseStudy, publishedCaseStudies, visible } from '@/lib/data/work'
import { getService } from '@/lib/data/services'
import { testimonialsFor } from '@/lib/data/testimonials'
import { articleLd, pageMetadata } from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

const describe = (c: NonNullable<ReturnType<typeof getCaseStudy>>) =>
  c.metaDescription ?? `${c.summary} A ${c.category.toLowerCase()} case study by PXR Infinity.`

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCaseStudy((await params).slug)
  if (!c) return {}
  return pageMetadata({
    title: c.metaTitle,
    absoluteTitle: true,
    description: describe(c),
    path: `/work/${c.slug}`,
    type: 'article',
    publishedTime: c.datePublished,
    modifiedTime: c.updatedAt,
    index: !(c.noindex || c.draft),
  })
}

const d = (i: number) => ({ '--d': `${i * 80}ms` }) as CSSProperties

/** Splits "187.9K+" into a count-up number + suffix; anything else is shown as-is. */
function MetricValue({ value }: { value: string }) {
  const m = value.match(/^([\d,]+)(\.\d+)?(.*)$/)
  if (!m || m[2]) return <>{value}</>
  return <Counter value={m[1]} suffix={m[3]} />
}

export default async function CaseStudyPage({ params }: Props) {
  const c = getCaseStudy((await params).slug)
  if (!c) notFound()

  const path = `/work/${c.slug}`
  const services = c.services.map(getService).filter((s) => s !== undefined)
  const others = publishedCaseStudies.filter((x) => x.slug !== c.slug)
  const more = others.filter((x) => x.category === c.category).concat(others.filter((x) => x.category !== c.category)).slice(0, 2)
  const glance = visible(c.glance)
  const results = visible(c.results)
  const trends = visible(c.trends)
  const legacy = !c.deliverables // older layout keeps its original headings
  const quotes = testimonialsFor(c.slug)

  return (
    <>
      <JsonLd
        data={articleLd({
          title: c.metaTitle.replace(/\s*\|\s*PXR Infinity$/, ''),
          description: describe(c),
          path,
          datePublished: c.datePublished,
          dateModified: c.updatedAt,
          image: publicFileExists(c.cover) ? c.cover : undefined,
        })}
      />

      <PageHero
        crumbs={[
          { name: 'Work', path: '/work' },
          { name: c.title, path },
        ]}
        eyebrow={`${c.category} · ${c.client}`}
        title={c.title}
        intro={<p>{c.summary}</p>}
      >
        {c.draft && <WhatsAppButton label="Ask us on WhatsApp" message={`Hi PXR Infinity, I'd like to know about your work with ${c.client}.`} />}
      </PageHero>

      <div className="container-x">
        <Parallax className="relative mx-auto aspect-[4/5] max-w-md rounded-3xl border border-line sm:aspect-[16/10] sm:max-w-none">
          <ClientPhoto src={c.cover} name={c.client} alt={c.coverAlt} priority sizes="(min-width: 1240px) 1240px, 100vw" />
        </Parallax>
      </div>

      {/* At a glance */}
      {glance.length > 0 && (
        <section className="pt-16" aria-labelledby="glance-title">
          <div className="container-x">
            <div className="card p-7 sm:p-9" data-reveal>
              <h2 id="glance-title" className="text-sm font-semibold tracking-[0.18em] text-faint uppercase">
                At a glance
              </h2>
              <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                {glance.map((g) => (
                  <div key={g.label}>
                    <dt className="text-xs font-semibold tracking-[0.14em] text-accent-light uppercase">{g.label}</dt>
                    <dd className="mt-1.5 text-[#d4d4e2]">{g.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      )}

      {/* Results strip */}
      {results.length > 0 && (
        <section className="py-16" aria-labelledby="results-title">
          <div className="container-x">
            <h2 id="results-title" className="sr-only">
              Results
            </h2>
            <ul className={`grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3`}>
              {results.map((r, i) => (
                <li key={r.label} className="flex flex-col bg-bg p-8" data-reveal style={d(i)}>
                  <p className="font-display text-3xl leading-none font-semibold text-gold-grad sm:text-5xl">{legacy ? r.value : <MetricValue value={r.value} />}</p>
                  <p className="mt-3 text-muted">{r.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {!c.draft && (
        <section className={`${results.length ? '' : 'pt-16'} pb-24`} aria-label="Case study">
          <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.4fr]">
            <div className="min-w-0" data-reveal>
              <h2 className="text-2xl font-bold sm:text-3xl">The challenge</h2>
              <p className="mt-5 text-lg text-[#d4d4e2]">{c.problem}</p>
            </div>
            <div className="min-w-0" data-reveal>
              <h2 className="text-2xl font-bold sm:text-3xl">{legacy ? 'What we did' : 'Our strategy'}</h2>
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

          {c.deliverables && (
            <div className="container-x mt-20" data-reveal>
              <h2 className="text-2xl font-bold sm:text-3xl">What we delivered</h2>
              <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
                <table className="w-full border-collapse text-left sm:min-w-[480px]">
                  <thead className="bg-surface-2 text-sm text-white">
                    <tr>
                      <th scope="col" className="px-5 py-4 font-semibold">Deliverable</th>
                      <th scope="col" className="px-5 py-4 font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.deliverables.map((x) => (
                      <tr key={x.item} className="border-t border-line align-top">
                        <th scope="row" className="px-5 py-4 font-medium text-white">{x.item}</th>
                        <td className="px-5 py-4 text-muted">{x.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {(c.resultText || trends.length > 0) && (
            <div className="container-x mt-20 grid gap-10 lg:grid-cols-[1fr_1.4fr]" data-reveal>
              <h2 className="text-2xl font-bold sm:text-3xl">The result</h2>
              <div className="min-w-0 space-y-6">
                {c.resultText?.map((p, i) => (
                  <p key={i} className="text-lg text-[#d4d4e2]">
                    {p}
                  </p>
                ))}
                {trends.length > 0 && (
                  <div className="overflow-x-auto rounded-2xl border border-line">
                    <table className="w-full border-collapse text-left sm:min-w-[420px]">
                      <caption className="sr-only">X trends and results</caption>
                      <thead className="bg-surface-2 text-sm text-white">
                        <tr>
                          <th scope="col" className="px-5 py-4 font-semibold">Trend</th>
                          <th scope="col" className="px-5 py-4 font-semibold">Posts</th>
                          <th scope="col" className="px-5 py-4 font-semibold">Peak rank (India)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {trends.map((t) => (
                          <tr key={t.tag} className="border-t border-line">
                            <th scope="row" className="px-4 py-4 font-display font-semibold [overflow-wrap:anywhere] text-white sm:px-5">{t.tag}</th>
                            <td className="px-5 py-4 text-muted tabular-nums">{t.posts && !t.postsPending ? t.posts : '—'}</td>
                            <td className="px-5 py-4 font-semibold text-gold">{t.rank ?? '—'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

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
      )}

      <CaseGallery images={c.gallery ?? []} client={c.client} />
      <Testimonials items={quotes} title={`What the ${c.client} team said`} />
      {c.faqs && c.faqs.length > 0 && <Faq faqs={c.faqs} title={`${c.client} case study FAQs`} />}

      {services.length > 0 && !c.draft && (
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
      )}

      <section className={`pb-24 ${c.draft ? 'pt-24' : ''}`} aria-labelledby="more-title">
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
