'use client'

import { useEffect, useState } from 'react'
import { INFINITY_PATH } from '@/lib/brand'

const KEY = 'pxr-intro' // sessionStorage: intro plays once per browser session
const DRAW_MS = 750 // "PXR∞" draws in…
const WIPE_MS = 420 // …then wipes up. Total < 1.2s

/**
 * Intro overlay. It's in the server HTML but only displayed when JS runs and it's
 * the first visit this session (see the inline script in app/layout.tsx), so crawlers
 * and reduced-motion users always go straight to the content.
 * Adds `.is-ready` to <html> when done, which starts the hero animations.
 */
export function Preloader() {
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const finish = () => {
      root.classList.add('is-ready')
      try {
        sessionStorage.setItem(KEY, '1')
      } catch {}
    }
    if (root.classList.contains('skip-preload')) {
      finish()
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intro not needed this session
      setGone(true)
      return
    }
    const t1 = setTimeout(() => {
      setLeaving(true)
      finish()
    }, DRAW_MS)
    const t2 = setTimeout(() => setGone(true), DRAW_MS + WIPE_MS)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (gone) return null

  return (
    <div
      aria-hidden="true"
      style={{ transitionDuration: `${WIPE_MS}ms` }}
      className={`preloader fixed inset-0 z-[90] place-items-center bg-bg transition-[clip-path] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        leaving ? '[clip-path:inset(0_0_100%_0)]' : '[clip-path:inset(0_0_0_0)]'
      }`}
    >
      <div className="flex items-center gap-4">
        <span className="preloader-text font-display text-6xl font-bold tracking-[-0.04em] sm:text-8xl">
          PXR
        </span>
        <svg viewBox="0 0 100 50" className="w-24 sm:w-36" fill="none">
          <defs>
            <linearGradient id="pre-g" x1="0" x2="1">
              <stop offset="0" stopColor="#8B5CF6" />
              <stop offset="0.6" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#F5C451" />
            </linearGradient>
          </defs>
          <path d={INFINITY_PATH} stroke="rgb(255 255 255 / 0.08)" strokeWidth="7" />
          <path d={INFINITY_PATH} pathLength={1} className="preloader-path" stroke="url(#pre-g)" strokeWidth="7" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}
