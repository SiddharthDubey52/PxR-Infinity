'use client'

import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

/**
 * Animated number. The final value is server-rendered (good for SEO / no-JS);
 * the count-up only runs for numeric values that scroll into view after hydration.
 * Non-numeric values (e.g. "Top 6") are rendered as-is.
 */
export function Counter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduce = useReducedMotion()
  const target = Number(value.replace(/,/g, ''))
  const numeric = value.trim() !== '' && Number.isFinite(target)
  const [display, setDisplay] = useState(value)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!numeric || reduce || !inView) return
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString('en-IN')),
      onComplete: () => setDone(true),
    })
    return () => controls.stop()
  }, [inView, numeric, reduce, target])

  return (
    <span ref={ref} className={`tabular-nums ${done ? 'count-done' : ''}`}>
      {display}
      <span className="text-accent-light">{suffix}</span>
    </span>
  )
}
