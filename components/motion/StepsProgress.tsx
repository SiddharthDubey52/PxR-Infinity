'use client'

import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { useRef, type ReactNode } from 'react'

/**
 * "How it works" progress line that draws between the steps as you scroll.
 * Vertical on mobile, horizontal on desktop. The steps are server-rendered children.
 */
export function StepsProgress({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 55%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  const scale = reduce ? 1 : progress

  return (
    <div ref={ref} className="relative">
      {/* track */}
      <span aria-hidden="true" className="absolute top-8 bottom-8 left-8 w-px bg-white/10 md:top-8 md:right-[10%] md:bottom-auto md:left-[10%] md:h-px md:w-auto" />
      {/* drawn line: vertical (mobile) */}
      <motion.span
        aria-hidden="true"
        style={{ scaleY: scale }}
        className="absolute top-8 bottom-8 left-[31px] w-0.5 origin-top bg-gradient-to-b from-accent via-blue to-gold shadow-[0_0_14px_rgb(139_92_246/0.9)] md:hidden"
      />
      {/* drawn line: horizontal (desktop) */}
      <motion.span
        aria-hidden="true"
        style={{ scaleX: scale }}
        className="absolute top-[31px] right-[10%] left-[10%] hidden h-0.5 origin-left bg-gradient-to-r from-accent via-blue to-gold shadow-[0_0_18px_2px_rgb(139_92_246/0.85)] md:block"
      />
      {children}
    </div>
  )
}
