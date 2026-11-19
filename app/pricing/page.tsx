import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Check } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { ButtonLink } from '@/components/ui/Buttons'
import { Tilt } from '@/components/motion/Tilt'
import { Faq } from '@/components/sections/Faq'
import { CtaSection } from '@/components/sections/CtaSection'
import { pricingFaqs, pricingPlans } from '@/lib/data/home'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Pricing — PR & Meme Marketing Packages',
  description:
    'PR, meme marketing and social media packages from PXR Infinity: Starter, Growth and Premium plans for brands, celebrities, films and reality-show contestants. Get a custom quote.',
  path: '/pricing',
})

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Pricing', path: '/pricing' }]}
        eyebrow="Pricing"
        title={
          <>
            Simple packages. <span className="text-gradient">Custom quotes.</span>
          </>
        }
        intro="Every campaign is different, so every quote is itemised. Pick the closest package and we’ll tailor it to your goal and budget — no hidden charges."
      />

      <section className="pb-24" aria-label="Packages">
        <div className="container-x grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((p, i) => (
            <div key={p.name} data-reveal style={{ '--d': `${i * 90}ms` } as CSSProperties}>
              <Tilt
                max={5}
                className={`card flex h-full flex-col p-8 sm:p-10 ${
                  p.highlight ? 'border-accent/60 bg-gradient-to-b from-accent/15 to-transparent shadow-[0_30px_80px_-30px_rgb(139_92_246/0.6)]' : ''
                }`}
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">{p.name}</h2>
                    {p.highlight && (
                      <span className="rounded-full bg-accent-strong px-3 py-1 text-xs font-semibold text-white">Most popular</span>
                    )}
                  </div>
                  <p className="mt-3 text-muted">{p.desc}</p>
                  <p className="mt-8 font-display text-3xl font-bold">
                    {p.price} <span className="font-sans text-base font-normal text-muted">{p.period}</span>
                  </p>
                  <ul className="mt-8 space-y-3.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3 text-[#d4d4e2]">
                        <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent-light" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-10">
                    <ButtonLink href="/contact" variant={p.highlight ? 'primary' : 'ghost'} className="w-full">
                      {p.cta}
                      <span className="sr-only"> for the {p.name} package</span>
                    </ButtonLink>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
        <p className="container-x mt-8 text-center text-sm text-faint">
          Prices exclude GST. Final cost depends on pages, creators and media selected for your campaign.
        </p>
      </section>

      <Faq faqs={pricingFaqs} title="Pricing questions" />
      <CtaSection title={<>Budget batao, plan hum banayenge.</>} />
    </>
  )
}
