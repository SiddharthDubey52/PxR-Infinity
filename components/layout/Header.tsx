'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Logo } from '@/components/ui/Logo'
import { mainNav } from '@/lib/site'
import { Magnetic } from '@/components/motion/Magnetic'

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  // Close the menu on route change
  const [prevPath, setPrevPath] = useState(pathname)
  if (prevPath !== pathname) {
    setPrevPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 16)
      setHidden(y > 400 && y > last)
      last = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${hidden && !open ? '-translate-y-full' : ''}`}
    >
      <div className="container-x pt-3">
        <div
          className={`flex h-16 items-center justify-between rounded-full border px-5 transition-all duration-500 ${
            scrolled || open ? 'border-line bg-bg/75 backdrop-blur-xl' : 'border-transparent'
          }`}
        >
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive(item.href) ? 'bg-white/[0.07] text-white' : 'text-muted hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Magnetic>
              <Link
                href="/contact"
                className="hidden rounded-full bg-accent-strong px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6d28d9] sm:inline-flex"
              >
                Get Free Proposal
              </Link>
            </Magnetic>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative grid size-11 place-items-center rounded-full lg:hidden"
            >
              <span className={`absolute h-0.5 w-5 bg-white transition ${open ? 'rotate-45' : '-translate-y-1'}`} />
              <span className={`absolute h-0.5 w-5 bg-white transition ${open ? '-rotate-45' : 'translate-y-1'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 -z-10 bg-bg/97 backdrop-blur-xl transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="container-x flex h-full flex-col pt-28 pb-10">
          <ul className="flex flex-col">
            {[{ label: 'Home', href: '/' }, ...mainNav, { label: 'Contact', href: '/contact' }].map((item, i) => (
              <li
                key={item.href}
                className={`border-b border-line transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
              >
                <Link href={item.href} className="block py-4 font-display text-3xl font-semibold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-auto inline-flex min-h-12 items-center justify-center rounded-full bg-accent-strong px-6 font-semibold text-white"
          >
            Get Free Proposal
          </Link>
        </nav>
      </div>
    </header>
  )
}
