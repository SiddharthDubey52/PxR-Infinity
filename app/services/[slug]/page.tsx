import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { CSSProperties } from 'react'
import { Check } from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/ui/PageHero'
import { ButtonLink, WhatsAppButton } from '@/components/ui/Buttons'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { ServiceCard } from '@/components/sections/HomeSections'
import { WorkCard } from '@/components/sections/WorkCard'
import { Faq } from '@/components/sections/Faq'
import { CtaSection } from '@/components/sections/CtaSection'
import { getService, services } from '@/lib/data/services'
import { publishedCaseStudies } from '@/lib/data/work'
import { getAllPosts } from '@/lib/blog'
import { pageMetadata, serviceLd } from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug)
  if (!s) return {}
  return pageMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/services/${s.slug}`,
  })
}

const d = (i: number) => ({ '--d': `${(i % 3) * 80}ms` }) as CSSProperties

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug)
  if (!s) notFound()

  const related = s.related.map(getService).filter((x) => x !== undefined)
  // Only real, published case studies; ones where this service was the lead come first
  const work = publishedCaseStudies
    .filter((c) => c.services.includes(s.slug))
    .sort((a, b) => a.services.indexOf(s.slug) - b.services.indexOf(s.slug))
    .slice(0, 3)
  const allPosts = await getAllPosts()
  const posts = s.relatedPosts.map((slug) => allPosts.find((p) => p.slug === slug)).filter((p) => p !== undefined)
  const path = `/services/${s.slug}`

  return (
    <>
      <JsonLd data={serviceLd({ name: s.name, description: s.metaDescription, path, serviceType: s.serviceType })} />

      <PageHero
        crumbs={[
          { name: 'Services', path: '/services' },
          { name: s.name, path },
        ]}
        eyebrow={s.name}
        title={s.h1}
        intro={<p>{s.short}</p>}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#proposal">Get Free Proposal</ButtonLink>
          <WhatsAppButton message={`Hi PXR Infinity! I'm interested in ${s.name}.`} />
        </div>
      </PageHero>

      {/* Intro */}
      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div className="space-y-6 text-lg leading-relaxed text-[#d4d4e2]">
            {s.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {s.introLinks?.map((l) => (
              <p key={l.href}>
                <Link href={l.href} className="font-semibold text-accent-light underline-offset-4 hover:underline">
                  Read: {l.label} →
                </Link>
              </p>
            ))}
          </div>
          <aside className="card h-fit p-7" data-reveal style={d(1)} aria-labelledby="ideal-title">
            <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-accent/30 to-blue/25">
              <Icon name={s.icon} className="size-5" />
            </div>
            <h2 id="ideal-title" className="text-lg font-semibold">
              Ideal for
            </h2>
            <ul className="mt-5 space-y-3">
              {s.idealFor.map((x) => (
                <li key={x} className="flex gap-3 text-muted">
                  <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent-light" />
                  {x}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-y border-line bg-bg-2 py-24 sm:py-28" aria-labelledby="deliver-title">
        <div className="container-x">
          <SectionHeading eyebrow="What you get" title={<span id="deliver-title">What’s included in {s.name.toLowerCase()}</span>} />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.deliverables.map((x, i) => (
              <li key={x.title} className="card p-7" data-reveal style={d(i)}>
                <span className="font-display text-sm text-accent-light">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-lg font-semibold">{x.title}</h3>
                <p className="mt-3 text-muted">{x.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 sm:py-28" aria-labelledby="process-title">
        <div className="container-x">
          <SectionHeading eyebrow="How we run it" title={<span id="process-title">Our process</span>} />
          <ol className="grid gap-4 md:grid-cols-4">
            {s.process.map((p, i) => (
              <li key={p.title} className="relative border-t border-accent/40 pt-6" data-reveal style={d(i)}>
                <span className="font-display text-4xl font-bold text-white/10">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-muted">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related work */}
      {work.length > 0 && (
        <section className="pb-24" aria-labelledby="work-title">
          <div className="container-x">
            <SectionHeading eyebrow="Proof" title={<span id="work-title">Related case studies</span>} />
            <div className={`grid gap-6 md:grid-cols-2 ${work.length > 2 ? 'lg:grid-cols-3' : ''}`}>
              {work.map((c, i) => (
                <WorkCard key={c.slug} c={c} i={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Faq faqs={s.faqs} title={`${s.name} FAQs`} />

      {/* Further reading */}
      {posts.length > 0 && (
        <section className="border-t border-line py-24" aria-labelledby="reading-title">
          <div className="container-x">
            <SectionHeading eyebrow="Guides" title={<span id="reading-title">Further reading</span>} />
            <ul className="grid gap-4 md:grid-cols-3">
              {posts.map((p, i) => (
                <li key={p.slug} data-reveal style={d(i)}>
                  <Link href={`/blog/${p.slug}`} className="card spotlight group flex h-full min-h-44 flex-col p-7 transition hover:border-accent/50">
                    <span className="text-sm text-accent-light">{p.category}</span>
                    <span className="mt-3 font-display text-lg leading-snug font-semibold group-hover:text-accent-light">{p.title}</span>
                    <span className="mt-auto pt-6 text-sm font-semibold text-muted transition group-hover:text-gold">Read the guide →</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related services */}
      <section className="border-t border-line py-24" aria-labelledby="related-title">
        <div className="container-x">
          <SectionHeading eyebrow="Works well with" title={<span id="related-title">Related services</span>} />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <ServiceCard key={r.slug} s={r} i={i} />
            ))}
          </ul>
        </div>
      </section>

      <CtaSection defaultService={s.name} title={<>Let’s plan your {s.name.toLowerCase()} campaign.</>} />
    </>
  )
}
