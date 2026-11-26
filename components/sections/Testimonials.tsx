'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonialGroups, type Testimonial } from '@/lib/data/testimonials'

const AUTO_MS = 7000

/**
 * Reusable testimonials slider (homepage + case studies). Renders nothing until real
 * quotes are added to lib/data/testimonials.ts. All quotes are also rendered in a
 * visually-hidden list so every testimonial is in the server HTML.
 */
export function Testimonials({ items, title = 'Clients kya kehte hain.' }: { items: Testimonial[]; title?: string }) {
  if (items.length === 0) return null
  return <TestimonialsSlider testimonials={items} title={title} />
}

const byline = (t: Testimonial) => [t.role, t.company].filter(Boolean).join(', ')

function TestimonialsSlider({ testimonials: all, title }: { testimonials: Testimonial[]; title: string }) {
  // Filter tabs (Celebrity / Contestant / Brand/OTT / Media partner) only when 2+ groups have quotes
  const groups = testimonialGroups.filter((g) => all.some((t) => t.group === g))
  const [group, setGroup] = useState<string>('All')
  const testimonials = group === 'All' ? all : all.filter((t) => t.group === group)
  const [[index, dir], setState] = useState<[number, number]>([0, 1])
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()
  const n = testimonials.length
  const go = (d: number) => setState(([i]) => [(i + d + n) % n, d])

  useEffect(() => {
    if (paused || reduce) return
    const t = setTimeout(() => setState(([i]) => [(i + 1) % n, 1]), AUTO_MS)
    return () => clearTimeout(t)
  }, [index, paused, reduce, n])

  const t = testimonials[Math.min(index, n - 1)]

  return (
    <section className="py-24 sm:py-32" aria-labelledby="testimonials-title">
      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-5 justify-center" data-reveal>
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Testimonials
          </p>
          <h2 id="testimonials-title" className="text-[clamp(1.75rem,4.6vw,3.25rem)] leading-[1.08] font-bold" data-reveal>
            {title}
          </h2>
        </div>

        {groups.length > 1 && (
          <div className="mt-10 flex justify-center gap-2 overflow-x-auto pb-2 [scrollbar-width:none]" role="group" aria-label="Filter testimonials">
            {['All', ...groups].map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => {
                  setGroup(g)
                  setState([0, 1])
                }}
                aria-pressed={group === g}
                className={`min-h-11 shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  group === g ? 'border-white bg-white text-bg' : 'border-line-strong text-muted hover:border-accent hover:text-white'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        )}

        <div
          className="card relative mx-auto mt-14 max-w-4xl overflow-hidden p-8 sm:p-14"
          data-reveal
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <Quote aria-hidden="true" className="size-10 text-accent" />
          <div className="relative mt-6 min-h-[220px] sm:min-h-[180px]" aria-live="polite">
            <AnimatePresence mode="wait" custom={dir} initial={false}>
              <motion.figure
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                drag={reduce ? false : 'x'}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) go(1)
                  else if (info.offset.x > 60) go(-1)
                }}
                className="cursor-grab active:cursor-grabbing"
              >
                <blockquote className="font-display text-[clamp(1.15rem,2.8vw,1.75rem)] leading-snug font-medium">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  {t.photo ? (
                    <Image src={t.photo} alt={`${t.name}, ${byline(t)}`} width={48} height={48} className="size-12 rounded-full object-cover" />
                  ) : (
                    <span aria-hidden="true" className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-accent to-blue font-bold">
                      {t.name.replace(/[^A-Za-z]/g, '').charAt(0) || 'P'}
                    </span>
                  )}
                  <span className="text-left">
                    <strong className="block">{t.name}</strong>
                    <span className="text-sm text-muted">{byline(t)}</span>
                    {t.link && (
                      <a
                        href={t.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1 text-sm text-accent-light transition hover:text-white"
                      >
                        View profile <ArrowUpRight aria-hidden="true" className="size-3.5" />
                      </a>
                    )}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-1" role="group" aria-label="Choose testimonial">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setState([i, i > index ? 1 : -1])}
                  aria-label={`Show testimonial ${i + 1} of ${n}`}
                  aria-current={i === index}
                  className="grid size-8 place-items-center"
                >
                  <span className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-accent' : 'w-1.5 bg-white/25'}`} />
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="grid size-11 place-items-center rounded-full border border-line-strong transition hover:border-accent hover:bg-accent/10">
                <ChevronLeft aria-hidden="true" className="size-5" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="grid size-11 place-items-center rounded-full border border-line-strong transition hover:border-accent hover:bg-accent/10">
                <ChevronRight aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Full list for SEO / assistive tech */}
        <ul className="sr-only">
          {all.map((q, i) => (
            <li key={i}>
              “{q.quote}” — {q.name}, {byline(q)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
