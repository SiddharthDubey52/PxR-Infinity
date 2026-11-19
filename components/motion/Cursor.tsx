'use client'

import { useEffect, useRef, useState } from 'react'

/** Custom dot + ring cursor. Only on devices with a fine pointer and motion allowed. */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const ok =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // eslint-disable-next-line react-hooks/set-state-in-effect -- browser-only capability check
    setEnabled(ok)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const root = document.documentElement
    root.classList.add('has-cursor')
    let x = -100,
      y = -100,
      rx = -100,
      ry = -100,
      raf = 0

    const move = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      const t = e.target as Element | null
      ring.current?.classList.toggle('is-hover', !!t?.closest('a, button, [role="tab"], summary, label'))
    }
    const tick = () => {
      rx += (x - rx) * 0.18
      ry += (y - ry) * 0.18
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      raf = requestAnimationFrame(tick)
    }
    const hide = () => {
      x = y = -100
    }
    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerleave', hide)
    raf = requestAnimationFrame(tick)
    return () => {
      root.classList.remove('has-cursor')
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', hide)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
