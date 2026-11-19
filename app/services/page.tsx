import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { ServiceCard } from '@/components/sections/HomeSections'
import { CtaSection } from '@/components/sections/CtaSection'
import { WhatsAppButton, ButtonLink } from '@/components/ui/Buttons'
import { services } from '@/lib/data/services'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Services — PR, Meme Marketing, X Trends & Influencer Marketing',
  description:
    'Explore PXR Infinity services: PR & media coverage, meme marketing, X/Twitter trends, influencer marketing, celebrity PR, Bigg Boss & reality show PR, movie and music promotion.',
  path: '/services',
})

const groups = [
  { id: 'Brands', title: 'For brands & startups', intro: 'Launch loud, stay relevant and protect your reputation.' },
  { id: 'Entertainment', title: 'For films, OTT & music', intro: 'Release-week buzz that turns into footfalls, watch-time and streams.' },
  { id: 'Talent', title: 'For celebrities, creators & contestants', intro: 'Image, fandom and visibility — managed with full confidentiality.' },
] as const

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Services', path: '/services' }]}
        eyebrow="Services"
        title={
          <>
            Full-service PR, memes & trends — <span className="text-gradient">one team</span>.
          </>
        }
        intro="Whether you’re launching a D2C brand, releasing a film, dropping a single or entering the Bigg Boss house, we plan PR, meme marketing, X trends, influencers and media as one campaign."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">Get Free Proposal</ButtonLink>
          <WhatsAppButton label="Trend karwana hai? Baat karte hain." />
        </div>
      </PageHero>

      {groups.map((g) => {
        const list = services.filter((s) => s.group === g.id)
        return (
          <section key={g.id} className="py-14 sm:py-20" aria-labelledby={`g-${g.id}`}>
            <div className="container-x">
              <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between" data-reveal>
                <h2 id={`g-${g.id}`} className="text-2xl font-bold sm:text-3xl">
                  {g.title}
                </h2>
                <p className="max-w-md text-muted">{g.intro}</p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((s, i) => (
                  <ServiceCard key={s.slug} s={s} i={i} />
                ))}
              </ul>
            </div>
          </section>
        )
      })}

      <CtaSection />
    </>
  )
}
