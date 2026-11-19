'use client'

import { useEffect, useState } from 'react'
import { INFINITY_PATH } from '@/lib/brand'

const KEY = 'pxr-visited'
const DURATION = 1300 // ms — the infinity draws, then the curtain lifts

/**
 * First-visit preloader. It's in the server HTML but only displayed when JS runs
 * (see the inline script in app/layout.tsx), so crawlers always see the content.
 * Adds `.is-ready` to <html> when done, which starts the hero animations.
 */
export function Preloader() {
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const skip = root.classList.contains('skip-preload')
    const finish = () => {
      root.classList.add('is-ready')
      try {
        localStorage.setItem(KEY, '1')
      } catch {}
    }
    if (skip) {
      finish()
      // eslint-disable-next-line react-hooks/set-state-in-effect -- preloader not needed on repeat visits
      setGone(true)
      return
    }
    const t1 = setTimeout(() => {
      setLeaving(true)
      finish()
    }, DURATION)
    const t2 = setTimeout(() => setGone(true), DURATION + 700)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (gone) return null

  return (
    <div
      aria-hidden="true"
      className={`preloader fixed inset-0 z-[90] place-items-center bg-bg transition-[clip-path] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        leaving ? '[clip-path:inset(0_0_100%_0)]' : '[clip-path:inset(0_0_0_0)]'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <svg viewBox="0 0 100 50" className="w-36 sm:w-44" fill="none">
          <defs>
            <linearGradient id="pre-g" x1="0" x2="1">
              <stop offset="0" stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <path d={INFINITY_PATH} stroke="rgb(255 255 255 / 0.08)" strokeWidth="6" />
          <path d={INFINITY_PATH} pathLength={1} className="preloader-path" stroke="url(#pre-g)" strokeWidth="6" strokeLinecap="round" />
        </svg>
        <p className="font-display text-xs tracking-[0.5em] text-muted">PXR INFINITY</p>
      </div>
    </div>
  )
}
