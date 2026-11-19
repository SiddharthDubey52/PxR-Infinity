'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

function ScrollToTopOnRoute() {
  const pathname = usePathname()
  const lenis = useLenis()
  useEffect(() => {
    if (!window.location.hash) lenis?.scrollTo(0, { immediate: true, force: true })
  }, [pathname, lenis])
  return null
}

/**
 * Lenis smooth scrolling (root mode, so it never wraps or remounts the page).
 * Desktop only; touch devices and reduced-motion users keep native scrolling.
 */
export function SmoothScroll() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const ok =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // eslint-disable-next-line react-hooks/set-state-in-effect -- browser-only media query after mount
    setEnabled(ok)
  }, [])

  if (!enabled) return null
  return (
    <ReactLenis root options={{ lerp: 0.1, anchors: { offset: -96 } }}>
      <ScrollToTopOnRoute />
    </ReactLenis>
  )
}
