'use client'

import { useEffect } from 'react'

/**
 * Marquees run forward while scrolling down and reverse when scrolling up.
 * Uses the Web Animations API playbackRate, so the direction flips smoothly without jumping.
 */
export function MarqueeDirection() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let lastY = window.scrollY
    let dir = 1
    const onScroll = () => {
      const y = window.scrollY
      const next = y < lastY - 2 ? -1 : y > lastY + 2 ? 1 : dir
      lastY = y
      if (next === dir) return
      dir = next
      for (const el of document.querySelectorAll('.animate-marquee')) {
        for (const anim of el.getAnimations()) anim.updatePlaybackRate(dir)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return null
}
