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
      <div className="relative aspect-[4/5] shrink-0 overflow-hidden rounded-[1.25rem]">
        {/* light parallax: the photo drifts against the tilt (driven by --px/--py from <Tilt>) */}
        <div className="client-parallax absolute -inset-3">
          <ClientPhoto
            src={c.photo}
            name={c.name}
            alt={alt}
            sizes="(min-width: 1024px) 280px, (min-width: 768px) 33vw, 50vw"
            className="transition-transform duration-700 ease-out group-hover:scale-105 group-focus-within:scale-105"
          />
        </div>
        {/* gold overlay slides up on hover / tap (focus) */}
        <div className="client-overlay absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0">
          <p className="text-xs font-bold tracking-[0.14em] text-[#1a1203] uppercase">{c.show}</p>
        </div>
      </div>
      {/* name block grows so every card in a row ends on the same line; show label sits at the bottom */}
      <div className="flex flex-1 flex-col px-1 pt-4 pb-1">
        <h3 className="font-display text-lg leading-tight font-semibold sm:text-xl">{c.name}</h3>
        <p className="mt-auto pt-1 text-sm text-muted">{c.show}</p>
      </div>
    </>
  )
  return (
    <li data-reveal style={{ '--d': `${(i % 4) * 80}ms` } as CSSProperties} className="h-full">
      <Tilt max={8} className="glow-border h-full rounded-[1.5rem]">
        {c.caseStudy ? (
          <Link
            href={`/work/${c.caseStudy}`}
            data-cursor="view"
            className="group relative z-10 flex h-full flex-col rounded-[1.5rem] border border-line bg-surface/60 p-2.5 transition hover:border-gold/50"
          >
            {inner}
            <span className="sr-only">Read the {c.name} case study</span>
          </Link>
        ) : (
          // tabIndex lets a tap (mobile) or keyboard focus reveal the overlay
          <div tabIndex={0} className="group relative z-10 flex h-full flex-col rounded-[1.5rem] border border-line bg-surface/60 p-2.5 transition outline-none hover:border-gold/50 focus-visible:border-gold">
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

        <p className="eyebrow mt-16 mb-6 flex justify-center" data-reveal>
          {featuredInHeading}
        </p>
      </div>
      <div data-reveal>
        <Marquee items={featuredIn} label={featuredInHeading} variant="press" duration={45} />
      </div>
      <div className="mt-14">
        <Marquee items={platforms} label="Platforms we work on" duration={50} />
      </div>
    </section>
  )
}

/** Every client with their show — used on /work (no press row / marquee) */
export function ClientList() {
  return (
    <section aria-labelledby="client-list-title" className="border-t border-line bg-bg-2 py-20 sm:py-24">
      <div className="container-x">
        <h2 id="client-list-title" className="section-title max-w-4xl" data-reveal>
          Clients we’ve worked with
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-muted" data-reveal>
          63+ campaigns across Bigg Boss 17, 18, 19 and 20, Rise &amp; Fall, Lock Upp and Prime Video’s The Alliance — X trends, meme
          pages, fan armies and voting campaigns.
        </p>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {clients.map((c, i) => (
            <ClientCard key={c.name} c={c} i={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
