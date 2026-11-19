'use client'

import { motion, useMotionTemplate, useMotionValue, useSpring, useReducedMotion } from 'motion/react'
import type { ReactNode, PointerEvent } from 'react'

/** 3D hover tilt with a cursor-following glow. No effect on touch or reduced motion. */
export function Tilt({ children, className = '', max = 8 }: { children: ReactNode; className?: string; max?: number }) {
  const reduce = useReducedMotion()
  const rx = useSpring(0, { stiffness: 200, damping: 20 })
  const ry = useSpring(0, { stiffness: 200, damping: 20 })
  const gx = useMotionValue(50)
  const gy = useMotionValue(50)
  const glow = useMotionTemplate`radial-gradient(420px circle at ${gx}% ${gy}%, rgb(139 92 246 / 0.18), transparent 60%)`

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    ry.set((px - 0.5) * max * 2)
    rx.set(-(py - 0.5) * max * 2)
    gx.set(px * 100)
    gy.set(py * 100)
  }
  const reset = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`relative ${className}`}
    >
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]" style={{ background: glow }} />
      {children}
    </motion.div>
  )
}
