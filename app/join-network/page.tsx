import type { Metadata } from 'next'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { PageHero, SectionHeading } from '@/components/ui/PageHero'
import { Faq } from '@/components/sections/Faq'
import { JoinNetworkForm } from '@/components/sections/JoinNetworkForm'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Meme Page Collaboration: Join Our Network | PXR Infinity',
  absoluteTitle: true,
  description:
    'Meme page collaboration with PXR Infinity: page admins, creators, media pages and fan clubs can join our network for paid brand, film, music and show campaigns.',
  path: '/join-network',
})

const perks = [
  { title: 'Paid campaigns', desc: 'Brand launches, film and OTT releases, music drops and reality shows, matched to your niche.' },
  { title: 'Clear briefs', desc: 'The idea, format, timing and deadline, in writing, before you post anything.' },
  { title: 'Your style', desc: 'We want the post to sound like your page. Your followers can tell when it doesn’t.' },
  { title: 'Payment agreed upfront', desc: 'We agree payment terms before the campaign starts, so you’re not chasing anyone later.' },
]

const steps = [
  'Send us your page details with the form on this page.',
  'Our team checks your page: niche, engagement and audience.',
  'You’re added to our network list for matching campaigns.',
  'When a campaign fits, we send you a brief and rate on WhatsApp.',
]

const faqs = [
  {
    q: 'Who can join the PXR Infinity network?',
    a: 'Meme page admins, entertainment and news page admins, creators, paparazzi pages, fan club leads and X accounts. Any size can apply. We look at engagement and niche more than follower count.',
  },
  {
    q: 'How does meme page collaboration with PXR Infinity work?',
    a: 'When a brand, film, label or show campaign fits your page, we send you a brief with the idea, format, posting time and rate. You make the post in your style, send it for a quick check if the brief asks, and post on time.',
  },
  {
    q: 'Do I have to post everything you send?',
    a: 'No. Every campaign is an offer. You can say no to anything that doesn’t fit your page.',
  },
  {
    // TODO(Sid): confirm joining is free and payment terms are agreed up front (also in the perks list)
    q: 'Is there any fee to join?',
    a: 'No. Joining the network is free.',
  },
  {
    q: 'Do you accept regional pages?',
    a: 'Yes. Add your language and region in the form. Regional films, music and brands often want exactly those pages.',
  },
]

export default function JoinNetworkPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Our network', path: '/network' },
          { name: 'Join', path: '/join-network' },
        ]}
        eyebrow="For page admins & creators"
        title={
          <>
            Meme page collaboration: <span className="text-gradient">join our network</span>.
          </>
        }
        intro="Run a meme page, a media page or a fan club, or create content? Get paid campaigns from brands, films, music and shows that fit your page."
      />

      <section className="pb-24 sm:pb-32" aria-label="Join the network form and benefits">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl" data-reveal>
              Why pages work with us
            </h2>
            <ul className="mt-6 grid gap-3">
              {perks.map((p, i) => (
                <li key={p.title} className="card p-6" data-reveal style={{ '--d': `${i * 60}ms` } as CSSProperties}>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-muted">{p.desc}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-muted" data-reveal>
              Want to see the kind of pages we work with? Visit <Link href="/network" className="text-accent-light underline underline-offset-4">our meme page network</Link>.
            </p>
          </div>
          <div data-reveal>
            <JoinNetworkForm />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-bg-2 py-24 sm:py-32" aria-labelledby="join-steps-title">
        <div className="container-x">
          <SectionHeading eyebrow="How it works" title={<span id="join-steps-title">Four steps, no fee.</span>} />
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s} className="card p-7" data-reveal style={{ '--d': `${i * 70}ms` } as CSSProperties}>
                <span className="font-display text-sm font-bold text-accent-light">{String(i + 1).padStart(2, '0')}</span>
                <p className="mt-4 text-[#d4d4e2]">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq faqs={faqs} title="Network join karne se pehle." />
    </>
  )
}
