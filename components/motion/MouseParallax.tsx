'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/**
 * Sets --mx / --my (-1…1) on its element from the mouse position, smoothed with rAF.
 * Children use them in CSS transforms (e.g. translate3d(calc(var(--mx) * 30px), …)).
 * Desktop with motion allowed only.
 */
export function MouseParallax({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return
    let tx = 0,
      ty = 0,
      x = 0,
      y = 0,
      raf = 0
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth) * 2 - 1
      ty = (e.clientY / window.innerHeight) * 2 - 1
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const tick = () => {
      x += (tx - x) * 0.06
      y += (ty - y) * 0.06
      el.style.setProperty('--mx', x.toFixed(3))
      el.style.setProperty('--my', y.toFixed(3))
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.002 ? requestAnimationFrame(tick) : 0
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} className={className} style={{ ['--mx' as string]: 0, ['--my' as string]: 0 }}>
      {children}
    </div>
  )
}
