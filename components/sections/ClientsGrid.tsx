import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ClientPhoto } from '@/components/ui/ClientPhoto'
import { Tilt } from '@/components/motion/Tilt'
import { Marquee } from './Marquee'
import { clients, featuredIn, featuredInHeading, platforms, trustedHeading, type Client } from '@/lib/data/home'

function ClientCard({ c, i }: { c: Client; i: number }) {
  const alt = `${c.name} — PXR Infinity client, ${c.altNote}`
  const inner = (
    <>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
        <ClientPhoto
          src={c.photo}
          name={c.name}
          alt={alt}
          sizes="(min-width: 1024px) 280px, (min-width: 768px) 33vw, 50vw"
          className="transition-transform duration-700 ease-out group-hover:scale-105 group-focus-within:scale-105"
        />
        {/* gold overlay slides up on hover / tap (focus) */}
        <div className="client-overlay absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0">
          <p className="text-xs font-bold tracking-[0.14em] text-[#1a1203] uppercase">{c.show}</p>
        </div>
      </div>
      <div className="px-1 pt-4 pb-1">
        <h3 className="font-display text-lg leading-tight font-semibold sm:text-xl">{c.name}</h3>
        <p className="mt-1 text-sm text-muted">{c.show}</p>
      </div>
    </>
  )
  return (
    <li data-reveal style={{ '--d': `${(i % 4) * 80}ms` } as CSSProperties}>
      <Tilt max={7} className="rounded-[1.5rem]">
        {c.caseStudy ? (
          <Link
            href={`/work/${c.caseStudy}`}
            data-cursor="view"
            className="group relative z-10 block rounded-[1.5rem] border border-line bg-surface/60 p-2.5 transition hover:border-gold/50"
          >
            {inner}
            <span className="sr-only">Read the {c.name} case study</span>
          </Link>
        ) : (
          // tabIndex lets a tap (mobile) or keyboard focus reveal the overlay
          <div tabIndex={0} className="group relative z-10 rounded-[1.5rem] border border-line bg-surface/60 p-2.5 transition outline-none hover:border-gold/50 focus-visible:border-gold">
            {inner}
          </div>
        )}
      </Tilt>
    </li>
  )
}

/** "Trusted by" — client photo grid + press row + platforms marquee */
export function ClientsGrid() {
  return (
    <section aria-labelledby="clients-title" className="border-y border-line bg-bg-2 py-20 sm:py-28">
      <div className="container-x">
        <p className="eyebrow mb-5 justify-center" data-reveal>
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          Campaigns we’ve delivered
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
        </p>
        <h2 id="clients-title" className="section-title mx-auto max-w-4xl text-center" data-reveal>
          {trustedHeading}
        </h2>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {clients.map((c, i) => (
            <ClientCard key={c.name} c={c} i={i} />
          ))}
        </ul>

        <div className="mt-16" data-reveal>
          <p className="eyebrow mb-6 justify-center">{featuredInHeading}</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {featuredIn.map((m) => (
              <li key={m} className="font-display text-xl font-semibold tracking-[-0.01em] text-white/70 transition hover:text-white sm:text-2xl">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-14">
        <Marquee items={platforms} label="Platforms we work on" duration={50} />
      </div>
    </section>
  )
}
