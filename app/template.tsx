'use client'

import { motion } from 'motion/react'
import { useEffect, useState, type ReactNode } from 'react'

// Module-level flag: false during SSR and the very first client render,
// true for every client-side navigation after that.
let hasNavigated = false

/**
 * Route transition: the new page fades and slides up (0.45s).
 * Skipped on the initial load (so it never hides server-rendered content or hurts LCP)
 * and for reduced-motion users.
 */
export default function Template({ children }: { children: ReactNode }) {
  // Decided once per mount; false on SSR + first hydration so markup matches.
  const [animate] = useState(
    () =>
      hasNavigated &&
      typeof window !== 'undefined' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    hasNavigated = true
  }, [])

  if (!animate) return <>{children}</>
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      // motion sets transform to "none" at y: 0, so sticky sections work after the transition
    >
      {children}
    </motion.div>
  )
}
