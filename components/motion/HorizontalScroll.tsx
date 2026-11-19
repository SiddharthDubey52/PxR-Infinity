'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Desktop: the section pins and its track scrolls sideways as you scroll down.
 * Mobile / reduced motion: a normal vertical stack (the server-rendered layout).
 */
export function HorizontalScroll({ children, header }: { children: ReactNode; header?: ReactNode }) {
  const section = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [distance, setDistance] = useState(0)

  // 1) decide whether the pinned layout should be used
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (min-height: 800px) and (prefers-reduced-motion: no-preference)')
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // 2) measure the horizontal track once it's in its horizontal layout
  useEffect(() => {
    if (!enabled) return
    const measure = () => {
      if (track.current) setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth + 64))
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (track.current) ro.observe(track.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [enabled])

  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])

  return (
    <div ref={section} style={enabled ? { height: `calc(100vh + ${distance}px)` } : undefined} className="relative">
      <div className={enabled ? 'sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-16' : ''}>
        {header}
        <motion.div
          ref={track}
          style={enabled ? { x } : undefined}
          className={
            enabled
              ? 'flex w-max gap-6 pr-[8vw] pl-[max(2rem,calc((100vw-1240px)/2+2rem))]'
              : 'container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3'
          }
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}
