import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/PageHero'
import { Icon } from '@/components/ui/Icon'
import { StepsProgress } from '@/components/motion/StepsProgress'
import { WorkCard } from './WorkCard'
import { howItWorks, whyPxr } from '@/lib/data/home'
import { services, type Service } from '@/lib/data/services'
import { featuredWork } from '@/lib/data/work'
import { ButtonLink } from '@/components/ui/Buttons'

const delay = (i: number, step = 70) => ({ '--d': `${i * step}ms` }) as CSSProperties

/* ------------------------------ Why PXR ------------------------------ */
export function WhyPxr() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="why-title">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why PXR"
          title={
            <span id="why-title">
              Hype that’s <span className="text-gold-grad italic">real</span>. Results you can see.
            </span>
          }
          intro="We live on the internet so your brand doesn’t have to guess. Here’s what makes PXR Infinity different."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyPxr.map((w, i) => (
            <li key={w.title} data-reveal style={delay(i)} className="card sweep-card group relative overflow-hidden p-7 transition-transform duration-500">
              <div className="sweep-icon mb-6 grid size-12 place-items-center rounded-2xl border border-accent/30 bg-accent/10 text-accent-light">
                <Icon name={w.icon} className="size-5" />
              </div>
              <h3 className="text-xl font-semibold">{w.title}</h3>
              <p className="mt-3 text-muted">{w.desc}</p>
              <span aria-hidden="true" className="absolute top-6 right-7 font-display text-sm text-white/15">
                0{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------ Services grid ------------------------------ */
export function ServiceCard({ s, i = 0 }: { s: Service; i?: number }) {
  return (
    <li data-reveal style={delay(i % 6, 60)} className="h-full">
      <Link
        href={`/services/${s.slug}`}
        className="card sweep-card group flex h-full flex-col p-7 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      >
        <div className="flex items-start justify-between">
          <div className="sweep-icon grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-accent/30 to-blue/25 text-white">
            <Icon name={s.icon} className="size-5" />
          </div>
          <ArrowUpRight aria-hidden="true" className="size-5 text-faint transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
        </div>
        <h3 className="mt-8 text-xl font-semibold">{s.name}</h3>
        <p className="mt-3 text-muted">{s.short}</p>
        <span className="mt-auto pt-6 text-sm font-semibold text-accent-light transition group-hover:text-gold">Learn more →</span>
      </Link>
    </li>
  )
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services
  return (
    <section className="py-24 sm:py-32" aria-labelledby="services-title">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Services"
            title={<span id="services-title">Everything you need to get noticed.</span>}
            intro="PR, memes, trends, influencers and media — under one roof, planned as one campaign."
          />
          <div className="mb-12 sm:mb-16" data-reveal>
            <ButtonLink href="/services" variant="ghost">
              All services
            </ButtonLink>
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <ServiceCard key={s.slug} s={s} i={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------ Featured work ------------------------------ */
/**
 * Mobile/tablet: horizontal scroll-snap carousel.
 * Desktop: cards pin and stack on top of each other while scrolling (CSS sticky).
 */
export function FeaturedWork() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="work-title">
      <div className="container-x flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Featured work"
          title={<span id="work-title">Problem → plan → proof.</span>}
          intro="Winners, finalists and a Prime Video original. Here’s what we did and what changed."
        />
        <div className="mb-12 sm:mb-16" data-reveal>
          <ButtonLink href="/work" variant="ghost">
            View all work
          </ButtonLink>
        </div>
      </div>

      <div className="snap-row flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:mx-auto lg:block lg:max-w-[1240px] lg:overflow-visible lg:px-8 lg:pb-0">
        {featuredWork.map((c, i) => (
          <div
            key={c.slug}
            className="w-[85%] max-w-[420px] shrink-0 sm:w-[60%] lg:sticky lg:mb-10 lg:w-auto lg:max-w-none"
            style={{ top: `${112 + i * 28}px` } as CSSProperties}
          >
            <div className="h-full rounded-[1.5rem] lg:shadow-[0_-30px_60px_-30px_rgb(0_0_0/0.9)]">
              <WorkCard c={c} i={i} wide />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------ How it works ------------------------------ */
export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="how-title">
      <div className="container-x">
        <SectionHeading
          eyebrow="How it works"
          title={<span id="how-title">From brief to buzz in 5 steps.</span>}
          intro="Simple, transparent and fast. You always know what’s happening and what comes next."
          center
        />
        <StepsProgress>
          <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">
            {howItWorks.map((s, i) => (
              <li key={s.title} data-reveal style={delay(i, 90)} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
                <span className="relative z-10 grid size-16 shrink-0 place-items-center rounded-full border border-accent/40 bg-bg font-display text-lg font-semibold text-white shadow-[0_0_0_8px_rgb(139_92_246/0.08)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-semibold md:mt-5">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </StepsProgress>
      </div>
    </section>
  )
}
