import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Check } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { WhatsAppButton } from '@/components/ui/Buttons'
import { WhatsAppIcon } from '@/components/ui/SocialIcons'
import { Magnetic } from '@/components/motion/Magnetic'
import { Tilt } from '@/components/motion/Tilt'
import { Faq } from '@/components/sections/Faq'
import { CtaSection } from '@/components/sections/CtaSection'
import { pricingFaqs, pricingPlans } from '@/lib/data/home'
import { waLink } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Packages — PR & Meme Marketing Plans',
  description:
    'PR, meme marketing and social media packages from PXR Infinity: Starter, Growth and Premium plans for brands, celebrities, OTT shows and reality-show contestants. Get pricing on WhatsApp.',
  path: '/pricing',
})

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Packages', path: '/pricing' }]}
        eyebrow="Packages"
        title={
          <>
            Pick a plan. <span className="text-gradient">Get pricing on WhatsApp.</span>
          </>
        }
        intro="Every campaign is custom, so we share pricing directly on WhatsApp — along with a free proposal within 24 hours."
      >
        <WhatsAppButton label="Get pricing on WhatsApp" message="Hi PXR Infinity, I’d like to know your pricing." />
      </PageHero>

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
                  <ul className="mt-8 space-y-3.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3 text-[#d4d4e2]">
                        <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent-light" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-10">
                    <Magnetic>
                      <a
                        href={waLink(`Hi PXR Infinity, I’d like to know pricing for the ${p.name} package.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors ${
                          p.highlight
                            ? 'bg-accent-strong text-white shadow-[0_10px_40px_-10px_rgb(139_92_246/0.8)] hover:bg-[#6d28d9]'
                            : 'border border-line-strong bg-white/[0.03] text-white hover:border-accent hover:bg-accent/10'
                        }`}
                      >
                        <WhatsAppIcon className={`size-5 ${p.highlight ? 'text-white' : 'text-wa'}`} />
                        Get pricing on WhatsApp
                        <span className="sr-only"> for the {p.name} package</span>
                      </a>
                    </Magnetic>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
        <p className="container-x mt-8 text-center text-sm text-faint">
          Pricing is shared only on WhatsApp, based on your goal and the pages, creators and media your campaign needs.
        </p>
      </section>

      <Faq faqs={pricingFaqs} title="Package questions" />
      <CtaSection title={<>Goal batao, plan hum banayenge.</>} />
    </>
  )
}
