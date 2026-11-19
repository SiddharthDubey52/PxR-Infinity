import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/PageHero'
import { Icon } from '@/components/ui/Icon'
import { Tilt } from '@/components/motion/Tilt'
import { HorizontalScroll } from '@/components/motion/HorizontalScroll'
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
              Hype that’s <span className="text-gradient">real</span>. Results you can see.
            </span>
          }
          intro="We live on the internet so your brand doesn’t have to guess. Here’s what makes PXR Infinity different."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyPxr.map((w, i) => (
            <li key={w.title} data-reveal style={delay(i)} className="card group relative overflow-hidden p-7">
              <div className="mb-6 grid size-12 place-items-center rounded-2xl border border-accent/30 bg-accent/10 text-accent-light transition group-hover:scale-110 group-hover:bg-accent/20">
                <Icon name={w.icon} className="size-5" />
              </div>
              <h3 className="text-lg font-semibold">{w.title}</h3>
              <p className="mt-3 text-muted">{w.desc}</p>
              <span aria-hidden="true" className="absolute top-6 right-7 font-display text-sm text-white/10">
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
      <Tilt className="card h-full">
        <Link href={`/services/${s.slug}`} className="group relative z-10 flex h-full flex-col p-7">
          <div className="flex items-start justify-between">
            <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-accent/25 to-blue/20 text-white">
              <Icon name={s.icon} className="size-5" />
            </div>
            <ArrowUpRight aria-hidden="true" className="size-5 text-faint transition group-hover:text-white" />
          </div>
          <h3 className="mt-8 text-lg font-semibold">{s.name}</h3>
          <p className="mt-3 text-[0.95rem] text-muted">{s.short}</p>
          <span className="mt-auto pt-6 text-sm font-semibold text-accent-light">Learn more →</span>
        </Link>
      </Tilt>
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
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((s, i) => (
            <ServiceCard key={s.slug} s={s} i={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------ Featured work ------------------------------ */
export function FeaturedWork() {
  return (
    <section className="py-24 sm:py-32 lg:py-0" aria-labelledby="work-title">
      <HorizontalScroll
        header={
          <div className="container-x mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow mb-5" data-reveal>
                <span className="h-px w-8 bg-accent" aria-hidden="true" />
                Featured work
              </p>
              <h2 id="work-title" className="text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.08] font-bold" data-reveal>
                Problem → plan → proof.
              </h2>
              <p className="mt-4 text-lg text-muted lg:hidden" data-reveal>
                A few campaigns from brands, entertainment and reality TV — what we did and what changed.
              </p>
            </div>
            <div data-reveal>
              <ButtonLink href="/work" variant="ghost">
                View all work
              </ButtonLink>
            </div>
          </div>
        }
      >
        {featuredWork.map((c, i) => (
          <div key={c.slug} className="lg:w-[min(440px,34vw)] lg:shrink-0">
            <WorkCard c={c} i={i} compact />
          </div>
        ))}
      </HorizontalScroll>
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
        <ol className="relative grid gap-4 md:grid-cols-5">
          <span aria-hidden="true" className="absolute top-8 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-accent via-blue to-accent opacity-40 md:block" />
          {howItWorks.map((s, i) => (
            <li key={s.title} data-reveal style={delay(i, 90)} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
              <span className="relative z-10 grid size-16 shrink-0 place-items-center rounded-full border border-accent/40 bg-bg font-display text-lg font-bold text-white shadow-[0_0_0_8px_rgb(139_92_246/0.08)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-base font-semibold md:mt-5">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] text-muted">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
