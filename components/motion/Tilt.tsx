'use client'

import { motion, useMotionTemplate, useMotionValue, useSpring, useReducedMotion } from 'motion/react'
import type { ReactNode, PointerEvent } from 'react'

/**
 * 3D hover tilt (max 8°) with a cursor-following glow. Also exposes --px / --py (-1…1)
 * so children can add a light parallax (e.g. the photo in client cards).
 * Mouse only — no effect on touch, pen or reduced motion.
 */
export function Tilt({ children, className = '', max = 8 }: { children: ReactNode; className?: string; max?: number }) {
  const reduce = useReducedMotion()
  const limit = Math.min(max, 8)
  const rx = useSpring(0, { stiffness: 200, damping: 20 })
  const ry = useSpring(0, { stiffness: 200, damping: 20 })
  const px = useSpring(0, { stiffness: 160, damping: 22 })
  const py = useSpring(0, { stiffness: 160, damping: 22 })
  const gx = useMotionValue(50)
  const gy = useMotionValue(50)
  const glow = useMotionTemplate`radial-gradient(420px circle at ${gx}% ${gy}%, rgb(139 92 246 / 0.18), transparent 60%)`

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    ry.set((x - 0.5) * limit * 2)
    rx.set(-(y - 0.5) * limit * 2)
    px.set((x - 0.5) * 2)
    py.set((y - 0.5) * 2)
    gx.set(x * 100)
    gy.set(y * 100)
  }
  const reset = () => {
    rx.set(0)
    ry.set(0)
    px.set(0)
    py.set(0)
  }

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900, ['--px' as string]: px, ['--py' as string]: py }}
      className={`relative ${className}`}
    >
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]" style={{ background: glow }} />
      {children}
    </motion.div>
  )
}
