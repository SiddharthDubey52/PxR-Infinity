import { Fragment, type CSSProperties } from 'react'
import { HeroParticles } from '@/components/motion/HeroParticles'
import { MouseParallax } from '@/components/motion/MouseParallax'
import { Counter } from '@/components/motion/Counter'
import { ButtonLink, WhatsAppButton } from '@/components/ui/Buttons'
import { heroCopy, stats } from '@/lib/data/home'

/** Splits a line into words for the staggered reveal. *word* = gold highlight. */
function SplitLine({ text, start }: { text: string; start: number }) {
  return (
    <span className="split-line">
      {text.split(' ').map((raw, i) => {
        const accent = raw.startsWith('*') && raw.endsWith('*')
        const word = accent ? raw.slice(1, -1) : raw
        return (
          <Fragment key={i}>
            <span className="split-word">
              <span style={{ '--i': start + i } as CSSProperties} className={accent ? 'text-gold-grad pr-[0.06em] italic' : ''}>
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

const layer = (depth: number) =>
  ({ transform: `translate3d(calc(var(--mx) * ${depth}px), calc(var(--my) * ${depth}px), 0)` }) as CSSProperties

export function Hero() {
  return (
    <section className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-14 sm:pt-32">
      {/* Background: mouse-parallax gradient mesh + particles + grid */}
      <MouseParallax className="pointer-events-none absolute inset-0 -z-10">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0" style={layer(40)}>
            <div className="mesh mesh-a top-[-10%] left-[-10%] size-[60vw] max-w-[720px] bg-accent/50" />
          </div>
          <div className="absolute inset-0" style={layer(-60)}>
            <div className="mesh mesh-b top-[10%] right-[-15%] size-[55vw] max-w-[640px] bg-blue/35" />
          </div>
          <div className="absolute inset-0" style={layer(25)}>
            <div className="mesh mesh-c bottom-[-20%] left-[25%] size-[45vw] max-w-[560px] bg-gold/15" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_20%,transparent_75%)] bg-[size:64px_64px]" />
          <HeroParticles />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-bg" />
        </div>
      </MouseParallax>

      <div className="container-x">
        <h1>
          <span data-hero-fade style={{ '--d': '0ms' } as CSSProperties} className="eyebrow mb-7 flex flex-wrap">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-gold" />
            </span>
            <span className="text-white">PXR Infinity</span>
            <span aria-hidden="true" className="text-faint">
              —
            </span>
            PR, meme marketing & social media agency in India
          </span>
          <span className="hero-title block">
            {heroCopy.headline.map((line, i) => (
              <SplitLine key={line} text={line} start={lineStarts[i]} />
            ))}
          </span>
        </h1>

        <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <p className="max-w-xl text-lg text-muted sm:text-xl">{heroCopy.sub}</p>
          <div data-hero-fade style={{ '--d': '560ms' } as CSSProperties} className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <ButtonLink href="/contact">Get Free Proposal</ButtonLink>
            <WhatsAppButton label="WhatsApp Us" />
          </div>
        </div>

        <dl
          data-hero-fade
          style={{ '--d': '680ms' } as CSSProperties}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse bg-bg/80 p-5 backdrop-blur sm:p-7">
              <dt className="mt-1 text-sm text-muted sm:text-base">{s.label}</dt>
              <dd className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-none font-semibold tracking-[-0.03em]">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
