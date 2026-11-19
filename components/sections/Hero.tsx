import { Fragment, type CSSProperties } from 'react'
import { HeroParticles } from '@/components/motion/HeroParticles'
import { Counter } from '@/components/motion/Counter'
import { ButtonLink, WhatsAppButton } from '@/components/ui/Buttons'
import { heroCopy, stats } from '@/lib/data/home'

/** Splits a line into words for the staggered reveal. *word* = gradient accent. */
function SplitLine({ text, start }: { text: string; start: number }) {
  return (
    <span className="split-line">
      {text.split(' ').map((raw, i) => {
        const accent = raw.startsWith('*') && raw.endsWith('*')
        const word = accent ? raw.slice(1, -1) : raw
        return (
          <Fragment key={i}>
            <span className="split-word">
              <span style={{ '--i': start + i } as CSSProperties} className={accent ? 'text-gradient' : ''}>
                {word}
              </span>
            </span>{' '}
          </Fragment>
        )
      })}
    </span>
  )
}

// Index of the first word on each line, so the stagger continues across lines
const lineStarts = heroCopy.headline.map((_, i) =>
  heroCopy.headline.slice(0, i).reduce((n, l) => n + l.split(' ').length, 0),
)

export function Hero() {
  return (
    <section className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-14 sm:pt-32">
      {/* Background: gradient mesh + particles + grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="mesh mesh-a top-[-10%] left-[-10%] size-[60vw] max-w-[720px] bg-accent/50" />
        <div className="mesh mesh-b top-[10%] right-[-15%] size-[55vw] max-w-[640px] bg-blue/35" />
        <div className="mesh mesh-c bottom-[-20%] left-[25%] size-[45vw] max-w-[560px] bg-[#c026d3]/25" />
        <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_20%,transparent_75%)] bg-[size:64px_64px]" />
        <HeroParticles />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="container-x">
        <h1 className="font-display font-bold">
          <span data-hero-fade style={{ '--d': '0ms' } as CSSProperties} className="eyebrow mb-7 flex font-sans">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-light" />
            </span>
            PR, meme marketing & social media agency in India
          </span>
          <span className="block text-[clamp(2.9rem,11.5vw,9rem)] leading-[0.95] tracking-[-0.02em]">
            {heroCopy.headline.map((line, i) => (
              <SplitLine key={line} text={line} start={lineStarts[i]} />
            ))}
          </span>
        </h1>

        <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <p className="max-w-xl text-lg text-muted sm:text-xl">
              {heroCopy.sub}
            </p>
            <div data-hero-fade style={{ '--d': '560ms' } as CSSProperties} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Get Free Proposal</ButtonLink>
              <WhatsAppButton label="WhatsApp Us" />
            </div>
          </div>

          <dl
            data-hero-fade
            style={{ '--d': '680ms' } as CSSProperties}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-bg/80 p-5 backdrop-blur sm:p-6">
                <dt className="text-sm text-muted">{s.label}</dt>
                <dd className="mt-1 font-display text-3xl font-bold sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
