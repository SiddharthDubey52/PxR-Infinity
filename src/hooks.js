import { useEffect, useRef, useState } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Returns [ref, isVisible]. Becomes true once the element scrolls into view. */
export function useInView(options = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, options)
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, inView]
}

/** Animates a number from 0 to `target` once `start` is true. */
export function useCountUp(target, start, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    const ms = prefersReducedMotion() ? 0 : duration
    let raf
    const t0 = performance.now()
    const tick = (now) => {
      const p = ms ? Math.min((now - t0) / ms, 1) : 1
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start, duration])

  return value
}
