import type { Metadata } from 'next'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { PageHero, SectionHeading } from '@/components/ui/PageHero'
import { ButtonLink, WhatsAppButton } from '@/components/ui/Buttons'
import { Icon } from '@/components/ui/Icon'
import { Faq } from '@/components/sections/Faq'
import { CtaSection } from '@/components/sections/CtaSection'
import { NetworkPartners } from '@/components/sections/NetworkPartners'
import { networkCategories, networkPartners } from '@/lib/data/network'
import { pageMetadata } from '@/lib/seo'

const memeCount = networkCategories[0].count

export const metadata: Metadata = pageMetadata({
  title: 'Meme Page Network India | PXR Infinity',
  absoluteTitle: true,
  description: `Our meme page network in India: ${memeCount} meme pages plus reality TV media, entertainment news, paparazzi, fan clubs, creators and X accounts.`,
  path: '/network',
})

const howWeUse = [
  {
    title: 'One message, many voices',
    desc: 'Every campaign starts with one clear idea. Meme pages, media pages and creators each tell it in their own format, so it feels like a conversation, not an ad.',
  },
  {
    title: 'Scheduled posting',
    desc: 'Pages post in planned waves around a launch, an episode or a trailer drop, so your campaign reaches audiences together instead of trickling out over weeks.',
  },
  {
    title: 'Right niche, right language',
    desc: 'A cricket meme page, a Bigg Boss update page and a Punjabi humour page reach very different people. We match pages to your audience, not just to follower counts.',
  },
  {
    title: 'Proof at the end',
    desc: 'You get every post link and screenshot in one report, so you can see exactly where your campaign ran.',
  },
]

const howWePick = [
  'Real engagement: comments and shares that match the follower count.',
  'Audience fit: the people following the page are the people you want to reach.',
  'Past performance: how the page’s earlier campaign posts actually did.',
  'Brand safety: no hate, no political attacks, nothing you wouldn’t want next to your name.',
  'Reliability: admins who post on time, in the agreed format.',
]

const faqs = [
  {
    q: 'How big is the PXR Infinity meme page network?',
    a: `Our meme page network in India has ${memeCount} pages, alongside reality TV media pages, entertainment news portals, paparazzi pages, fan clubs, creators and X accounts. We pick the right mix for each campaign rather than using every page.`,
  },
  {
    q: 'Can I choose which meme pages post for my brand?',
    a: 'Yes. We share a page plan before anything goes live, with each page’s niche and audience, and you can approve or swap pages.',
  },
  {
    q: 'Do you work with regional meme pages?',
    a: 'Yes. Our network includes regional pages, and we have run campaigns with Punjabi meme pages. Tell us the languages and states you want to reach.',
  },
  {
    q: 'How do you check that a page has real followers?',
    a: 'We look at engagement against follower count, comment quality and how the page’s earlier campaign posts performed. Pages that don’t pass are left out.',
  },
  {
    q: 'I run a meme page. Can I join the network?',
    a: 'Yes. Fill in the form on our Join the network page with your page link and niche, and our team will get back to you on WhatsApp.',
  },
]

export default function NetworkPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Our network', path: '/network' }]}
        eyebrow="Our network"
        title={
          <>
            Our meme page network in India: <span className="text-gradient">{memeCount} pages</span> and counting.
          </>
        }
        intro="Meme pages, reality TV media, entertainment news, paparazzi, fan clubs, creators and X accounts. One network, planned as one campaign."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">Plan a campaign</ButtonLink>
          <ButtonLink href="/join-network" variant="ghost">
            Join the network
          </ButtonLink>
        </div>
      </PageHero>

      <section className="pb-24 sm:pb-32" aria-labelledby="categories-title">
        <div className="container-x">
          <SectionHeading eyebrow="What’s in the network" title={<span id="categories-title">Seven kinds of pages, one plan.</span>} />
          {/* 4 columns with the meme pages card two wide → 7 cards fill two even rows */}
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {networkCategories.map((c, i) => (
              <li
                key={c.id}
                className={`card spotlight sweep-card flex flex-col p-7 ${i === 0 ? 'sm:col-span-2' : ''}`}
                data-reveal
                style={{ '--d': `${(i % 4) * 80}ms` } as CSSProperties}
              >
                <div className="sweep-icon mb-6 grid size-12 place-items-center rounded-2xl border border-accent/30 bg-accent/10 text-accent-light">
                  <Icon name={c.icon} className="size-5" />
                </div>
                <h3 className="text-xl font-semibold">{c.name}</h3>
                {c.count && <p className="mt-2 font-display text-3xl font-semibold text-gold">{c.count}</p>}
                <p className="mt-3 text-muted">{c.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-bg-2 py-24 sm:py-32" aria-labelledby="use-title">
        <div className="container-x">
          <SectionHeading
            eyebrow="How campaigns use it"
            title={<span id="use-title">Network ka kamaal: how one idea reaches millions.</span>}
            intro="A meme page network only works when it’s planned. Here is how we use ours."
          />
          <ol className="grid gap-4 md:grid-cols-2">
            {howWeUse.map((s, i) => (
              <li key={s.title} className="card p-8" data-reveal style={{ '--d': `${(i % 2) * 80}ms` } as CSSProperties}>
                <span className="font-display text-sm font-bold text-accent-light">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-muted">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 sm:py-32" aria-labelledby="pick-title">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow mb-5">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Quality over count
            </p>
            <h2 id="pick-title" className="text-[clamp(1.75rem,4.6vw,3rem)] leading-[1.1] font-bold">
              How we pick pages for your campaign.
            </h2>
            <p className="mt-5 text-lg text-muted">
              A big network is only useful if the right pages post. For every campaign we shortlist pages against five checks.
            </p>
          </div>
          <ul className="space-y-3" data-reveal>
            {howWePick.map((p) => (
              <li key={p} className="card p-5 text-[#d4d4e2]">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {networkPartners.length > 0 && (
        <section className="pb-24 sm:pb-32" aria-labelledby="partners-title">
          <div className="container-x">
            <SectionHeading eyebrow="Partner pages" title={<span id="partners-title">Some of the pages we work with.</span>} />
            <NetworkPartners partners={networkPartners} />
          </div>
        </section>
      )}

      <section className="pb-8" aria-labelledby="join-title">
        <div className="container-x">
          <div className="card flex flex-col gap-6 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between" data-reveal>
            <div className="max-w-2xl">
              <h2 id="join-title" className="text-2xl font-semibold sm:text-3xl">
                Page chalate ho? Join the network.
              </h2>
              <p className="mt-3 text-muted">
                Meme page admins, creators and fan club leads: get paid campaigns from brands, films, music and shows that fit your
                page. Read more on our <Link href="/join-network" className="text-accent-light underline underline-offset-4">meme page collaboration</Link> page.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/join-network">Join the network</ButtonLink>
              <WhatsAppButton label="WhatsApp us" message="Hi PXR Infinity! I run a page and want to join your network." />
            </div>
          </div>
        </div>
      </section>

      <Faq faqs={faqs} title="Network ke baare mein questions." />
      <CtaSection
        title={
          <>
            Want your launch on these pages? <span className="text-gradient">Chalo plan karte hain.</span>
          </>
        }
        defaultService="Meme Marketing"
      />
    </>
  )
}
