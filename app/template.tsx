'use client'

import { motion } from 'motion/react'
import { useEffect, useState, type ReactNode } from 'react'

// Module-level flag: false during SSR and the very first client render,
// true for every client-side navigation after that.
let hasNavigated = false

/**
 * Route transition: an accent-coloured curtain wipes away to reveal the new page.
 * Skipped on the initial load so it never hides server-rendered content or hurts LCP.
 */
export default function Template({ children }: { children: ReactNode }) {
  // Decided once per mount; false on SSR + first hydration so markup matches.
  const [show] = useState(
    () =>
      hasNavigated &&
      typeof window !== 'undefined' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    hasNavigated = true
  }, [])

  return (
    <>
      {show && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[80] origin-top bg-accent-strong"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[79] origin-top bg-bg"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.76, 0, 0.24, 1] }}
          />
        </>
      )}
      {children}
    </>
  )
}
