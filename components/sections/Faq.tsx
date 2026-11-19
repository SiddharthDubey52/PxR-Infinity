import type { CSSProperties } from 'react'
import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/ui/PageHero'
import { JsonLd } from '@/components/ui/JsonLd'
import { faqLd } from '@/lib/seo'
import type { Faq as FaqItem } from '@/lib/data/services'

/** Accessible FAQ built on native <details>, with FAQPage JSON-LD. */
export function Faq({
  faqs,
  title = 'Questions, answered.',
  eyebrow = 'FAQ',
  intro,
}: {
  faqs: FaqItem[]
  title?: string
  eyebrow?: string
  intro?: string
}) {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="faq-title">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading eyebrow={eyebrow} title={<span id="faq-title">{title}</span>} intro={intro} />
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f, i) => (
            <details key={f.q} className="faq group" data-reveal style={{ '--d': `${(i % 4) * 60}ms` } as CSSProperties}>
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-left font-display text-base font-medium transition hover:text-accent-light sm:text-lg">
                <h3 className="font-[inherit] text-[length:inherit] tracking-normal">{f.q}</h3>
                <span className="faq-icon grid size-9 shrink-0 place-items-center rounded-full border border-line-strong transition-transform duration-300">
                  <Plus aria-hidden="true" className="size-4" />
                </span>
              </summary>
              <p className="pb-7 pr-12 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqLd(faqs)} />
    </section>
  )
}
