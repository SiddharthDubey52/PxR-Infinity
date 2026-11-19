'use client'

import { useEffect, useRef } from 'react'

/**
 * Lightweight canvas particle glow (no libraries).
 * - Desktop only (the CSS gradient mesh carries the look on phones)
 * - Glow is pre-rendered once into sprites; each frame is just drawImage calls
 * - Starts when the browser is idle, ~30fps, pauses off-screen / in hidden tabs
 * - Disabled for prefers-reduced-motion
 */
export function HeroParticles() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (
      !canvas ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !window.matchMedia('(min-width: 768px) and (pointer: fine)').matches
    )
      return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const makeSprite = (rgb: string) => {
      const s = document.createElement('canvas')
      s.width = s.height = 32
      const g = s.getContext('2d')!
      const grad = g.createRadialGradient(16, 16, 0, 16, 16, 16)
      grad.addColorStop(0, `rgba(${rgb},1)`)
      grad.addColorStop(0.25, `rgba(${rgb},0.6)`)
      grad.addColorStop(1, `rgba(${rgb},0)`)
      g.fillStyle = grad
      g.fillRect(0, 0, 32, 32)
      return s
    }
    const sprites = [makeSprite('167,139,250'), makeSprite('96,165,250')]

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0,
      h = 0,
      raf = 0,
      last = 0,
      running = false
    const pts = Array.from({ length: 46 }, () => ({
      x: Math.random(),
      y: Math.random(),
      s: Math.random() * 10 + 6,
      vx: (Math.random() - 0.5) * 0.0005,
      vy: -Math.random() * 0.0008 - 0.0002,
      a: Math.random() * 0.5 + 0.25,
      sp: sprites[Math.random() > 0.5 ? 0 : 1],
    }))

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const frame = (t: number) => {
      raf = requestAnimationFrame(frame)
      if (t - last < 33) return // ~30fps is plenty for ambient motion
      last = t
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        p.x += p.vx
        p.y += p.vy
        if (p.y < -0.03) p.y = 1.03
        if (p.x < -0.03) p.x = 1.03
        if (p.x > 1.03) p.x = -0.03
        ctx.globalAlpha = p.a
        ctx.drawImage(p.sp, p.x * w - p.s / 2, p.y * h - p.s / 2, p.s, p.s)
      }
    }
    const start = () => {
      if (running) return
      running = true
      raf = requestAnimationFrame(frame)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    let onScreen = true
    const io = new IntersectionObserver(([e]) => {
      onScreen = e.isIntersecting
      if (onScreen && !document.hidden) start()
      else stop()
    })
    const onVis = () => (document.hidden || !onScreen ? stop() : start())

    const begin = () => {
      resize()
      io.observe(canvas)
      window.addEventListener('resize', resize)
      document.addEventListener('visibilitychange', onVis)
    }
    const hasIdle = typeof window.requestIdleCallback === 'function'
    const idle = hasIdle ? window.requestIdleCallback(begin, { timeout: 2500 }) : setTimeout(begin, 1500)

    return () => {
      if (hasIdle) window.cancelIdleCallback(idle as number)
      else clearTimeout(idle)
      stop()
      io.disconnect()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 hidden size-full md:block" />
}
