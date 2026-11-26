import type { Metadata } from 'next'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { Check } from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/ui/PageHero'
import { ButtonLink, WhatsAppButton } from '@/components/ui/Buttons'
import { ServiceCard } from '@/components/sections/HomeSections'
import { WorkCard } from '@/components/sections/WorkCard'
import { Faq } from '@/components/sections/Faq'
import { CtaSection } from '@/components/sections/CtaSection'
import { getAudience } from '@/lib/data/audiences'
import { getService } from '@/lib/data/services'
import { publishedCaseStudies } from '@/lib/data/work'
import { getAllPosts } from '@/lib/blog'
import { pageMetadata } from '@/lib/seo'

const d = (i: number) => ({ '--d': `${(i % 3) * 80}ms` }) as CSSProperties

export function audienceMetadata(slug: string): Metadata {
  const a = getAudience(slug)!
  return pageMetadata({ title: a.metaTitle, absoluteTitle: true, description: a.metaDescription, path: `/${a.slug}` })
}

/** "Who we work with" page (e.g. /pr-for-tv-actors). Content lives in lib/data/audiences.ts. */
export async function AudiencePage({ slug }: { slug: string }) {
  const a = getAudience(slug)!
  const services = a.services.map(getService).filter((s) => s !== undefined)
  // Only published, indexable case studies
  const work = a.caseStudies.map((c) => publishedCaseStudies.find((x) => x.slug === c && !x.noindex)).filter((c) => c !== undefined)
  const all = await getAllPosts()
  const posts = a.posts.map((p) => all.find((x) => x.slug === p)).filter((p) => p !== undefined)

  return (
    <>
      <PageHero crumbs={[{ name: a.eyebrow.replace(/^For /, ''), path: `/${a.slug}` }]} eyebrow={a.eyebrow} title={a.h1} intro={<p>{a.intro[0]}</p>}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#proposal">Get Free Proposal</ButtonLink>
          <WhatsAppButton message={`Hi PXR Infinity! I'm interested in ${a.mainKeyword}.`} />
        </div>
      </PageHero>

      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div className="space-y-6 text-lg leading-relaxed text-[#d4d4e2]">
            {a.intro.slice(1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="card h-fit p-7" data-reveal aria-labelledby="challenges-title">
            <h2 id="challenges-title" className="text-lg font-semibold">
              Where it usually gets hard
            </h2>
            <ul className="mt-5 space-y-4">
              {a.challenges.map((c) => (
                <li key={c.title} className="flex gap-3">
                  <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent-light" />
                  <span>
                    <strong className="block font-semibold text-white">{c.title}</strong>
                    <span className="text-muted">{c.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-y border-line bg-bg-2 py-24 sm:py-28" aria-labelledby="help-title">
        <div className="container-x">
          <SectionHeading eyebrow="How we help" title={<span id="help-title">What we do for you</span>} />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {a.howWeHelp.map((x, i) => (
              <li key={x.title} className="card p-7" data-reveal style={d(i)}>
                <span className="font-display text-sm text-accent-light">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-lg font-semibold">{x.title}</h3>
                <p className="mt-3 text-muted">{x.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {a.sections.map((s, i) => (
        <section key={s.title} className="py-20 sm:py-24" aria-labelledby={`s-${i}`}>
          <div className="container-x max-w-4xl">
            <h2 id={`s-${i}`} className="text-[clamp(1.6rem,4vw,2.5rem)] leading-[1.1] font-bold" data-reveal>
              {s.title}
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-[#d4d4e2]">
              {s.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

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

      <section className="border-t border-line py-24" aria-labelledby="services-title">
        <div className="container-x">
          <SectionHeading eyebrow="Services" title={<span id="services-title">Services that fit</span>} />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} s={s} i={i} />
            ))}
          </ul>
        </div>
      </section>

      <Faq faqs={a.faqs} title={`${a.mainKeyword.charAt(0).toUpperCase()}${a.mainKeyword.slice(1)}: FAQs`} />

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

      <CtaSection title={<>Chalo, let’s plan it together.</>} />
    </>
  )
}
