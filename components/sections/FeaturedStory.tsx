'use client'

import Link from 'next/link'
import { animate, useMotionValueEvent, useScroll } from 'motion/react'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

type StoryCase = {
  slug: string
  client: string
  category: string
  title: string
  problem: string
  summary: string
  results: { value: string; label: string }[]
}

/** Counts a result up from 0 the first time `run` becomes true. Final value is server-rendered. */
function StoryNumber({ value, run }: { value: string; run: boolean }) {
  const m = value.match(/^([\d,]+)(\.\d+)?(.*)$/)
  const target = m && !m[2] ? Number(m[1].replace(/,/g, '')) : NaN
  const [shown, setShown] = useState(value)
  const done = useRef(false)
  useEffect(() => {
    if (!run || done.current || !Number.isFinite(target)) return
    done.current = true
    const c = animate(0, target, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setShown(`${Math.round(v).toLocaleString('en-IN')}${m![3]}`),
      onComplete: () => setShown(value),
    })
    return () => c.stop()
  }, [run, target, value, m])
  return <>{shown}</>
}

/**
 * One featured case study as a scroll story. Desktop (motion allowed): the card pins
 * (CSS sticky, see .story in globals.css) while Problem → What we did → Results reveal
 * one by one as you scroll. Mobile / reduced motion: a normal stacked card, all visible.
 */
export function FeaturedStory({ c, photo, index }: { c: StoryCase; photo: ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [step, setStep] = useState(2)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)')
    const update = () => {
      setEnabled(mq.matches)
      if (mq.matches) setStep(scrollYProgress.get() < 0.28 ? 0 : scrollYProgress.get() < 0.58 ? 1 : 2)
      else setStep(2)
    }
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [scrollYProgress])

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    if (!enabled) return
    setStep(p < 0.28 ? 0 : p < 0.58 ? 1 : 2)
  })

  return (
    <div ref={ref} className="story" {...(enabled ? { 'data-step': String(step) } : {})}>
      <div className="story-pin">
        <article className="card group grid w-full overflow-hidden bg-surface lg:grid-cols-[0.85fr_1.15fr]">
          <Link
            href={`/work/${c.slug}`}
            data-cursor="view"
            tabIndex={-1}
            aria-hidden="true"
            className="relative block aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:aspect-auto lg:h-[min(74vh,640px)]"
          >
            {photo}
            <span className="absolute top-4 left-4 rounded-full border border-line-strong bg-bg/70 px-3 py-1 text-xs font-semibold backdrop-blur">
              {c.category}
            </span>
          </Link>
          <div className="flex flex-col p-6 sm:p-8 lg:p-10">
            <p className="text-sm text-faint">
              <span className="font-display text-accent-light">{String(index + 1).padStart(2, '0')}</span> · {c.client}
            </p>
            <h3 className="mt-2 text-xl leading-snug font-semibold sm:text-2xl lg:text-3xl">
              <Link href={`/work/${c.slug}`} className="transition hover:text-accent-light">
                {c.title}
              </Link>
            </h3>
            <div className="mt-6 space-y-5">
              <div className="story-step">
                <p className="text-xs font-semibold tracking-[0.14em] text-accent-light uppercase">Problem</p>
                <p className="mt-1.5 text-muted">{c.problem}</p>
              </div>
              <div className="story-step">
                <p className="text-xs font-semibold tracking-[0.14em] text-accent-light uppercase">What we did</p>
                <p className="mt-1.5 text-muted">{c.summary}</p>
              </div>
              <div className="story-step">
                <p className="text-xs font-semibold tracking-[0.14em] text-accent-light uppercase">Results</p>
                <ul className="mt-2.5 grid grid-cols-3 gap-2">
                  {c.results.map((r) => (
                    <li key={r.label} className="rounded-xl border border-gold/25 bg-gold/[0.06] p-3">
                      <p className="font-display text-lg font-semibold text-gold tabular-nums sm:text-2xl">
                        <StoryNumber value={r.value} run={enabled && step >= 2} />
                      </p>
                      <p className="mt-1 text-xs leading-tight text-muted">{r.label}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link
              href={`/work/${c.slug}`}
              className="mt-8 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-white transition hover:text-gold"
            >
              Read the case study <ArrowUpRight aria-hidden="true" className="size-4" />
              <span className="sr-only">: {c.client}</span>
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
