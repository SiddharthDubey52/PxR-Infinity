import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { WhyPxr, ServicesGrid, FeaturedWork, HowItWorks } from '@/components/sections/HomeSections'
import { Testimonials } from '@/components/sections/Testimonials'
import { Faq } from '@/components/sections/Faq'
import { CtaSection } from '@/components/sections/CtaSection'
import { homeFaqs, marqueeItems, platforms } from '@/lib/data/home'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'PXR Infinity — PR, Meme Marketing & Social Media Agency in India',
  absoluteTitle: true,
  description:
    'PR agency in India for brands, celebrities, creators, movies, music and reality-show contestants. Meme marketing, X/Twitter trends, influencer marketing, media coverage and Bigg Boss PR.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <Hero />

      <section aria-label="Clients and platforms" className="space-y-6 border-y border-line bg-bg-2 py-10">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-faint uppercase">
          Trusted by brands, talent & production houses
        </p>
        <Marquee items={marqueeItems} label="Client logos" duration={45} />
        <Marquee items={platforms} label="Platforms we work on" duration={50} reverse />
      </section>

      <WhyPxr />
      <ServicesGrid />

      <section aria-hidden="true" className="border-y border-line py-10">
        <Marquee items={['Infinite reach', 'Real hype', 'Memes', 'Trends', 'PR']} label="PXR Infinity" variant="text" duration={30} />
      </section>

      <FeaturedWork />
      <HowItWorks />
      <Testimonials />
      <Faq
        faqs={homeFaqs}
        title="Sab kuch poocho. We’ll answer."
        intro="Pricing, timelines, reporting, reality-show PR and confidentiality — the questions we get most."
      />
      <CtaSection />
    </>
  )
}
