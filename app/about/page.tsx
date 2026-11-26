import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { PageHero, SectionHeading } from '@/components/ui/PageHero'
import { Counter } from '@/components/motion/Counter'
import { Marquee } from '@/components/sections/Marquee'
import { CtaSection } from '@/components/sections/CtaSection'
import { Icon } from '@/components/ui/Icon'
import { stats, platforms } from '@/lib/data/home'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'About PXR Infinity | PR and Meme Marketing Agency',
  absoluteTitle: true,
  description:
    'About PXR Infinity: a PR and meme marketing agency working across India. What we do, how our team works, our values and the network behind 63+ campaigns.',
  path: '/about',
})

const howWeWork = [
  {
    title: 'What we do',
    desc: 'PR and media coverage, meme marketing, X trends, influencer campaigns and social media — planned together as one campaign, not five separate vendors.',
  },
  {
    title: 'How we work',
    desc: 'A clear brief, a written plan you approve, a schedule you can see, and one report at the end with every link, screenshot and number.',
  },
  {
    title: 'Our network',
    desc: 'Meme pages, entertainment and news media, paparazzi photographers, creators and fan communities across India, including regional pages.',
  },
]

const values = [
  { icon: 'Sparkles', title: 'Culture first', desc: 'We spend our days on meme pages, X and reels. We know what’s working this week — not last year.' },
  { icon: 'BadgeCheck', title: 'Never fake the hype', desc: 'Real audiences, real creators, real fans. No fake accounts, no inflated numbers, no promises we can’t keep.' },
  { icon: 'BarChart3', title: 'Numbers, not excuses', desc: 'Every campaign ends with links, screenshots and data. If something didn’t work, we say so.' },
  { icon: 'Zap', title: 'Fast by default', desc: 'Internet moments last hours. Our network and process are built to move at that speed.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'About', path: '/about' }]}
        eyebrow="About us"
        title={
          <>
            About PXR Infinity: we make the internet <span className="text-gradient">talk about you</span>.
          </>
        }
        intro="PXR Infinity is a PR and meme marketing agency working with brands, celebrities, creators, films, music and reality-show contestants across India."
      />

      {/* About the agency */}
      <section className="pb-24 sm:pb-32" aria-labelledby="agency-title">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow mb-5">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Who we are
            </p>
            <h2 id="agency-title" className="text-[clamp(1.75rem,4.6vw,3rem)] leading-[1.1] font-bold">
              A PR and meme marketing agency built for the internet.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-[#d4d4e2]" data-reveal>
            <p>
              We started PXR Infinity after watching too many good brands and talented people get ignored online — not because
              they weren’t good, but because nobody was telling their story in the internet’s language.
            </p>
            <p>
              Today our team runs PR, meme marketing, X trends, influencer campaigns and media coverage for brands, films, music
              and reality-show contestants — from Bigg Boss and Rise &amp; Fall to Prime Video’s The Alliance.
            </p>
            <p>
              Our rule is simple: <strong className="text-white">internet culture ko samjho, data pe chalo, and never fake the hype.</strong>{' '}
              Results bolte hain.
            </p>
          </div>
        </div>
      </section>

      {/* What we do + how we work */}
      <section className="pb-24 sm:pb-32" aria-labelledby="work-how-title">
        <div className="container-x">
          <SectionHeading eyebrow="How our team works" title={<span id="work-how-title">One team, one plan, one report.</span>} />
          <ul className="grid gap-4 md:grid-cols-3">
            {howWeWork.map((v, i) => (
              <li key={v.title} className="card spotlight p-8" data-reveal style={{ '--d': `${i * 80}ms` } as CSSProperties}>
                <span className="font-display text-sm font-bold text-accent-light">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-muted">{v.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-line bg-bg-2 py-16" aria-label="PXR Infinity in numbers">
        <dl className="container-x grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} data-reveal style={{ '--d': `${i * 80}ms` } as CSSProperties} className="flex flex-col-reverse justify-end">
              <dt className="mt-2 text-muted">{s.label}</dt>
              <dd className="font-display text-[clamp(1.6rem,8vw,3rem)] leading-none font-semibold tracking-[-0.03em]">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32" aria-labelledby="values-title">
        <div className="container-x">
          <SectionHeading eyebrow="Our values" title={<span id="values-title">What we believe.</span>} />
          <ul className="grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <li key={v.title} className="card spotlight sweep-card p-8" data-reveal style={{ '--d': `${(i % 2) * 80}ms` } as CSSProperties}>
                <div className="sweep-icon mb-6 grid size-12 place-items-center rounded-2xl border border-accent/30 bg-accent/10 text-accent-light">
                  <Icon name={v.icon} className="size-5" />
                </div>
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-muted">{v.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Platforms we work on" className="border-y border-line py-10">
        <Marquee items={platforms} label="Platforms we work on" />
      </section>

      <CtaSection title={<>Kaam dekhna hai? Let’s talk.</>} />
    </>
  )
}
