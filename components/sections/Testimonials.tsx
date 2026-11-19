'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data/home'

const AUTO_MS = 7000

/**
 * Testimonials slider. All quotes are also rendered in a visually-hidden list
 * so every testimonial is in the server HTML for search engines and screen readers.
 */
export function Testimonials() {
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

  const t = testimonials[index]

  return (
    <section className="py-24 sm:py-32" aria-labelledby="testimonials-title">
      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-5 justify-center" data-reveal>
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Testimonials
          </p>
          <h2 id="testimonials-title" className="text-[clamp(1.75rem,4.6vw,3.25rem)] leading-[1.08] font-bold" data-reveal>
            Clients kya kehte hain.
          </h2>
        </div>

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
                  <span aria-hidden="true" className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-accent to-blue font-bold">
                    {t.name.replace(/[^A-Za-z]/g, '').charAt(0) || 'P'}
                  </span>
                  <span className="text-left">
                    <strong className="block">{t.name}</strong>
                    <span className="text-sm text-muted">{t.role}</span>
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
          {testimonials.map((q, i) => (
            <li key={i}>
              “{q.quote}” — {q.name}, {q.role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
