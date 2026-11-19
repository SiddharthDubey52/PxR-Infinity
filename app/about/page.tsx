import type { Metadata } from 'next'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import { PageHero, SectionHeading } from '@/components/ui/PageHero'
import { Counter } from '@/components/motion/Counter'
import { Parallax } from '@/components/motion/Parallax'
import { Marquee } from '@/components/sections/Marquee'
import { CtaSection } from '@/components/sections/CtaSection'
import { Icon } from '@/components/ui/Icon'
import { stats, platforms } from '@/lib/data/home'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'About Us — PR & Meme Marketing Agency Founded by Sid',
  description:
    'Meet PXR Infinity, the PR and meme marketing agency founded by Siddharth (Sid). Our story, values and how we help brands, celebrities and reality-show contestants across India.',
  path: '/about',
})

const values = [
  { icon: 'Sparkles', title: 'Culture first', desc: 'We spend our days on meme pages, X and reels. We know what’s working this week — not last year.' },
  { icon: 'BadgeCheck', title: 'Never fake the hype', desc: 'Real audiences, real creators, real fans. No bots, no inflated numbers, no promises we can’t keep.' },
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
            We make the internet <span className="text-gradient">talk about you</span>.
          </>
        }
        intro="PXR Infinity is a full-service PR, meme marketing and social media agency working with brands, celebrities, creators, films, music and reality-show contestants across India."
      />

      {/* Founder */}
      <section className="pb-24 sm:pb-32" aria-labelledby="founder-title">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative" data-reveal="scale">
            <Parallax offset={40} className="relative aspect-[4/5] rounded-[2rem] border border-line">
              <Image
                src="/images/founder-placeholder.svg"
                alt="Siddharth (Sid), founder of PXR Infinity"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </Parallax>
            <div className="absolute bottom-5 left-5 rounded-2xl border border-line-strong bg-bg/75 px-5 py-4 backdrop-blur">
              <p className="font-display font-bold">Siddharth (Sid)</p>
              <p className="text-sm text-muted">Founder, PXR Infinity</p>
            </div>
          </div>
          <div data-reveal>
            <p className="eyebrow mb-5">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              The founder
            </p>
            <h2 id="founder-title" className="text-[clamp(1.75rem,4.6vw,3rem)] leading-[1.1] font-bold">
              Hi, I’m Sid.
            </h2>
            <div className="mt-6 space-y-5 text-lg text-[#d4d4e2]">
              <p>
                I started PXR Infinity after watching too many good brands and talented people get ignored online — not because
                they weren’t good, but because nobody was telling their story in the internet’s language.
              </p>
              <p>
                What began with meme pages and late-night trend plans is now a full-service team running PR, meme marketing, X
                trends, influencer campaigns and media coverage for brands, films, music and reality-show contestants.
              </p>
              <p>
                Our rule is simple: <strong className="text-white">internet culture ko samjho, data pe chalo, and never fake the hype.</strong>{' '}
                Results bolte hain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-line bg-bg-2 py-16" aria-label="PXR Infinity in numbers">
        <dl className="container-x grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} data-reveal style={{ '--d': `${i * 80}ms` } as CSSProperties} className="flex flex-col-reverse">
              <dt className="mt-2 text-muted">{s.label}</dt>
              <dd className="font-display text-[clamp(1.6rem,8vw,3rem)] font-semibold tracking-[-0.03em]">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32" aria-labelledby="values-title">
        <div className="container-x">
          <SectionHeading eyebrow="How we work" title={<span id="values-title">What we believe.</span>} />
          <ul className="grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <li key={v.title} className="card p-8" data-reveal style={{ '--d': `${(i % 2) * 80}ms` } as CSSProperties}>
                <div className="mb-6 grid size-12 place-items-center rounded-2xl border border-accent/30 bg-accent/10 text-accent-light">
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
