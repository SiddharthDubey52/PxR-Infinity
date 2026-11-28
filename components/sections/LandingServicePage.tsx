import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'
import { Check } from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/ui/PageHero'
import { ButtonLink, WhatsAppButton } from '@/components/ui/Buttons'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { WorkCard } from '@/components/sections/WorkCard'
import { Faq } from '@/components/sections/Faq'
import { CtaSection } from '@/components/sections/CtaSection'
import { publishedCaseStudies } from '@/lib/data/work'
import type { LandingPage, LandingSection } from '@/lib/data/landing-pages'
import { absoluteUrl } from '@/lib/site'
import { orgRef } from '@/lib/seo'

/**
 * Layout for the new service and sub-service pages in lib/data/landing-pages.ts.
 * Only imports shared components; it changes nothing used by existing pages.
 */

const d = (i: number) => ({ '--d': `${(i % 3) * 80}ms` }) as CSSProperties
const linkCls = 'font-semibold text-accent-light underline-offset-4 hover:underline'

/** Renders [text](/path) links and **bold** inside a data string. */
export function Rich({ text }: { text: string }) {
  const parts: ReactNode[] = []
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    if (m[1]) {
      parts.push(
        <Link key={m.index} href={m[2]} className={linkCls}>
          {m[1]}
        </Link>,
      )
    } else {
      parts.push(
        <strong key={m.index} className="font-semibold text-white">
          {m[3]}
        </strong>,
      )
    }
    last = re.lastIndex
  }
  if (last < text.length) parts.push(text.slice(last))
  return <>{parts}</>
}

const strip = (t: string) => t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1')

/** Visible table, matching the existing service-page table style. */
function DataTable({ caption, head, rows }: { caption: string; head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-line">
      <table className="w-full min-w-[640px] text-left text-[0.95rem]">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-bg-2 text-sm text-faint">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-5 py-4 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-line">
              {r.map((c, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="px-5 py-4 font-semibold text-white">
                    {c}
                  </th>
                ) : (
                  <td key={j} className="px-5 py-4 text-muted">
                    {c}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Section({ sec }: { sec: LandingSection }) {
  return (
    <section id={sec.id} className="border-t border-line py-24 sm:py-28" aria-labelledby={`${sec.id}-title`}>
      <div className="container-x">
        <SectionHeading eyebrow={sec.eyebrow} title={<span id={`${sec.id}-title`}>{sec.title}</span>} />
        <div className="space-y-12">
          {sec.paragraphs && (
            <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-[#d4d4e2]">
              {sec.paragraphs.map((p, i) => (
                <p key={i}>
                  <Rich text={p} />
                </p>
              ))}
            </div>
          )}
          {sec.items && (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sec.items.map((it, i) => (
                <li key={it.title} data-reveal style={d(i)}>
                  {it.href ? (
                    <Link href={it.href} className="card spotlight group flex h-full flex-col p-7 transition hover:border-accent/50">
                      <span className="text-lg font-semibold group-hover:text-accent-light">{it.title}</span>
                      <span className="mt-3 text-muted">{it.desc}</span>
                    </Link>
                  ) : (
                    <div className="card flex h-full flex-col p-7">
                      <h3 className="text-lg font-semibold">{it.title}</h3>
                      <p className="mt-3 text-muted">{it.desc}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
          {sec.checklist && (
            <ul className="card max-w-3xl space-y-4 p-7 sm:p-9">
              {sec.checklist.map((x) => (
                <li key={x} className="flex gap-3 text-[#d4d4e2]">
                  <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent-light" />
                  <span>
                    <Rich text={x} />
                  </span>
                </li>
              ))}
            </ul>
          )}
          {sec.table && <DataTable {...sec.table} />}
          {sec.note && <p className="max-w-3xl text-sm text-faint">{sec.note}</p>}
        </div>
      </div>
    </section>
  )
}

export function LandingServicePage({ page }: { page: LandingPage }) {
  const crumbs = [
    { name: 'Services', path: '/services' },
    ...(page.parent ? [page.parent] : []),
    { name: page.name, path: page.path },
  ]
  const work = page.proof.caseStudies
    .map((slug) => publishedCaseStudies.find((c) => c.slug === slug))
    .filter((c) => c !== undefined)

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.name,
    serviceType: page.serviceType,
    description: page.metaDescription,
    url: absoluteUrl(page.path),
    provider: orgRef(),
    areaServed: { '@type': 'Country', name: 'India' },
    ...(page.parent ? { isRelatedTo: { '@type': 'Service', url: absoluteUrl(page.parent.path), name: page.parent.name } } : {}),
  }

  return (
    <>
      <JsonLd data={serviceLd} />

      <PageHero crumbs={crumbs} eyebrow={page.parent ? `${page.parent.name} · ${page.name}` : page.name} title={page.h1} intro={<p>{page.promise}</p>}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#proposal">Get Free Proposal</ButtonLink>
          <WhatsAppButton message={`Hi PXR Infinity! I'm interested in ${page.name}.`} />
        </div>
      </PageHero>

      {/* What is … */}
      <section className="pb-20 sm:pb-28" aria-labelledby="what-is-title">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <h2 id="what-is-title" className="mb-6 text-2xl font-bold sm:text-3xl">
              {page.whatIs.title}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-[#d4d4e2]">
              {page.whatIs.paragraphs.map((p, i) => (
                <p key={i}>
                  <Rich text={p} />
                </p>
              ))}
            </div>
          </div>
          <aside className="card h-fit p-7" data-reveal style={d(1)} aria-labelledby="who-for-title">
            <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-accent/30 to-blue/25">
              <Icon name={page.icon} className="size-5" />
            </div>
            <h2 id="who-for-title" className="text-lg font-semibold">
              {page.whoFor.title}
            </h2>
            {page.whoFor.intro && <p className="mt-3 text-muted">{page.whoFor.intro}</p>}
            <ul className="mt-5 space-y-3">
              {page.whoFor.items.map((x) => (
                <li key={x} className="flex gap-3 text-muted">
                  <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent-light" />
                  {x}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* What's included */}
      <section className="border-y border-line bg-bg-2 py-24 sm:py-28" aria-labelledby="included-title">
        <div className="container-x">
          <SectionHeading eyebrow="What you get" title={<span id="included-title">What’s included</span>} />
          <ul className={`grid gap-4 sm:grid-cols-2 ${page.included.length % 4 === 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            {page.included.map((x, i) => (
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
          <SectionHeading eyebrow="How we run it" title={<span id="process-title">Our process, in {page.process.length} steps</span>} />
          <ol className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {page.process.map((p, i) => (
              <li key={p.title} className="relative border-t border-accent/40 pt-6" data-reveal style={d(i)}>
                <span className="font-display text-4xl font-bold text-white/10">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-muted">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {page.sections.map((sec) => (
        <Section key={sec.id} sec={sec} />
      ))}

      {/* Real examples */}
      <section className="border-t border-line py-24 sm:py-28" aria-labelledby="proof-title">
        <div className="container-x">
          <SectionHeading eyebrow="Real examples" title={<span id="proof-title">{page.proof.title}</span>} />
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-[#d4d4e2]">
            {page.proof.paragraphs.map((p, i) => (
              <p key={i}>
                <Rich text={p} />
              </p>
            ))}
          </div>
          {work.length > 0 ? (
            <div className={`mt-12 grid gap-6 md:grid-cols-2 ${work.length > 2 ? 'lg:grid-cols-3' : ''}`}>
              {work.map((c, i) => (
                <WorkCard key={c.slug} c={c} i={i} />
              ))}
            </div>
          ) : (
            <p className="mt-8">
              <Link href="/work" className={linkCls}>
                See all our case studies →
              </Link>
            </p>
          )}
        </div>
      </section>

      {/* Pricing guide */}
      <section className="border-t border-line py-24 sm:py-28" aria-labelledby="pricing-title">
        <div className="container-x">
          <SectionHeading eyebrow="Pricing guide" title={<span id="pricing-title">{page.pricing.title}</span>} />
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-[#d4d4e2]">
            {page.pricing.paragraphs.map((p, i) => (
              <p key={i}>
                <Rich text={p} />
              </p>
            ))}
          </div>
          <div className="mt-12">
            <DataTable
              caption={`${page.name} pricing guide`}
              head={['Scope', 'What it usually includes', 'Budget']}
              rows={page.pricing.rows.map((r) => [r.scope, r.includes, r.range || 'Shared after the brief'])}
            />
          </div>
        </div>
      </section>

      <Faq faqs={page.faqs.map((f) => ({ ...f, a: strip(f.a) }))} title={`${page.name} FAQs`} />

      {/* Related services */}
      <section className="border-t border-line py-24" aria-labelledby="related-title">
        <div className="container-x">
          <SectionHeading eyebrow="Works well with" title={<span id="related-title">Related services</span>} />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.related.map((r, i) => (
              <li key={r.href} data-reveal style={d(i)}>
                <Link href={r.href} className="card spotlight group flex h-full flex-col p-7 transition hover:border-accent/50">
                  <span className="text-lg font-semibold group-hover:text-accent-light">{r.title}</span>
                  <span className="mt-3 text-muted">{r.desc}</span>
                  <span className="mt-auto pt-6 text-sm font-semibold text-muted transition group-hover:text-gold">Explore →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection defaultService={page.parent?.name} title={<>Let’s plan your {page.name.toLowerCase()} campaign.</>} />
    </>
  )
}
