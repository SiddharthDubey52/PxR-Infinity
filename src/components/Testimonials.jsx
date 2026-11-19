import { useEffect, useRef, useState } from 'react'
import { testimonials } from '../content'
import { prefersReducedMotion } from '../hooks'
import { IconChevron, Reveal, SectionHead } from './ui'

const AUTO_MS = 6000

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const startX = useRef(null)
  const count = testimonials.length

  const go = (i) => setIndex((i + count) % count)

  useEffect(() => {
    if (paused || prefersReducedMotion()) return
    const t = setTimeout(() => setIndex((i) => (i + 1) % count), AUTO_MS)
    return () => clearTimeout(t)
  }, [index, paused, count])

  const onPointerDown = (e) => (startX.current = e.clientX)
  const onPointerUp = (e) => {
    if (startX.current === null) return
    const dx = e.clientX - startX.current
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1))
    startX.current = null
  }

  return (
    <section className="section section-alt" aria-roledescription="carousel" aria-label="Testimonials">
      <div className="container">
        <SectionHead kicker="Testimonials" title="Clients kya kehte hain." center />

        <Reveal
          className="slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            className="slider-viewport"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => (startX.current = null)}
          >
            <ul className="slider-track" style={{ transform: `translateX(-${index * 100}%)` }}>
              {testimonials.map((t, i) => (
                <li
                  key={i}
                  className="slide"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${count}`}
                  aria-hidden={i !== index}
                >
                  <figure>
                    <span className="quote-mark" aria-hidden="true">“</span>
                    <blockquote>{t.quote}</blockquote>
                    <figcaption>
                      <span className="avatar" aria-hidden="true">
                        {t.name.charAt(0)}
                      </span>
                      <span>
                        <strong>{t.name}</strong>
                        <span>{t.role}</span>
                      </span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>

          <div className="slider-controls">
            <button className="icon-btn" onClick={() => go(index - 1)} aria-label="Previous testimonial">
              <IconChevron dir="left" />
            </button>
            <div className="dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === index ? 'is-active' : ''}`}
                  onClick={() => go(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                />
              ))}
            </div>
            <button className="icon-btn" onClick={() => go(index + 1)} aria-label="Next testimonial">
              <IconChevron />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
