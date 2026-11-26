'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { INFINITY_PATH } from '@/lib/brand'

// three.js + R3F are only downloaded on capable desktops, after the page has loaded.
const InfinityScene = dynamic(() => import('./InfinityScene'), { ssr: false })

/** Can this device run the 3D scene comfortably? Otherwise the static ∞ image stays. */
function canRun3D() {
  if (!window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return false
  const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } }
  if ((nav.hardwareConcurrency ?? 8) < 4 || (nav.deviceMemory ?? 8) < 4 || nav.connection?.saveData) return false
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

/** Static ∞ mark (same shape and purple → blue → gold gradient). Shown until / instead of 3D. */
function StaticMark() {
  return (
    <svg viewBox="-6 -6 112 62" className="hero-static-mark absolute inset-[14%] size-[72%] transition-opacity duration-700" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="hero-inf-g" x1="0" x2="1">
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset="0.5" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#F5C451" />
        </linearGradient>
        <filter id="hero-inf-blur" x="-20%" y="-40%" width="140%" height="180%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
      </defs>
      <path d={INFINITY_PATH} stroke="url(#hero-inf-g)" strokeWidth="9" strokeLinecap="round" filter="url(#hero-inf-blur)" opacity="0.55" />
      <path d={INFINITY_PATH} stroke="url(#hero-inf-g)" strokeWidth="6.5" strokeLinecap="round" />
    </svg>
  )
}

/**
 * Two glass cards floating above the mark, clear of the ∞ (which fills roughly the middle 30–70%
 * of the box) and of the hero buttons/stats below it, so nothing overlaps.
 * Generic sample text only (no clients, handles or live numbers).
 */
function OrbitCards() {
  return (
    <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
      <div className="orbit-card top-[2%] right-[2%] w-52 p-4" style={{ ['--od' as string]: '0s' }}>
        <div className="flex items-center gap-2 text-xs text-muted">
          <span className="grid size-6 place-items-center rounded-full bg-white font-bold text-bg">X</span>
          Trends for you
        </div>
        <span className="block mt-2 font-display text-base font-semibold text-white">#1 Trending in India</span>
        <span className="block mt-0.5 text-sm text-accent-light">#YourHashtag</span>
      </div>
      <div className="orbit-card top-[9%] left-[6%] w-52 p-4" style={{ ['--od' as string]: '-4s' }}>
        <span className="rounded bg-gold px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-[#1a1203]">NEWS</span>
        <span className="block mt-2 text-sm leading-snug font-semibold text-white">The campaign everyone is talking about</span>
      </div>
    </div>
  )
}

/**
 * Hero visual in a fixed-size box (no layout shift). Shows the static ∞ image first;
 * on capable desktops the 3D scene loads after the page has painted and fades in.
 * The render loop pauses when the hero is off screen or the tab is hidden.
 */
export function Hero3D({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [mount, setMount] = useState(false)
  const [active, setActive] = useState(true)
  const [live, setLive] = useState(false)

  useEffect(() => {
    if (!canRun3D()) return
    // Load three.js only once the visitor interacts (mouse move, scroll, key, touch), or after a
    // long fallback — so it never competes with first paint, LCP or the first interaction.
    let done = false
    const events = ['pointermove', 'scroll', 'keydown', 'pointerdown'] as const
    const go = () => {
      if (done) return
      done = true
      events.forEach((e) => window.removeEventListener(e, go))
      clearTimeout(timer)
      const idle = window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 200))
      idle(() => setMount(true))
    }
    const timer = setTimeout(go, 9000)
    events.forEach((e) => window.addEventListener(e, go, { once: true, passive: true }))
    return () => {
      events.forEach((e) => window.removeEventListener(e, go))
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!mount || !el) return
    let onScreen = true
    const update = () => setActive(onScreen && !document.hidden)
    const io = new IntersectionObserver(([e]) => {
      onScreen = e.isIntersecting
      update()
    })
    io.observe(el)
    document.addEventListener('visibilitychange', update)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', update)
    }
  }, [mount])

  return (
    <div ref={ref} aria-hidden="true" className={`hero-3d pointer-events-none ${live ? 'is-live' : ''} ${className}`}>
      <div className="hero-glow absolute inset-0" />
      <StaticMark />
      {mount && <InfinityScene active={active} onReady={() => setLive(true)} />}
      <OrbitCards />
    </div>
  )
}
