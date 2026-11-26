import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { FindUsOn } from '@/components/ui/FindUsOn'
import { SocialLinks, WhatsAppIcon } from '@/components/ui/SocialIcons'
import { services } from '@/lib/data/services'
import { mainNav, site, waLink } from '@/lib/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden border-t border-line pt-20 pb-28 sm:pb-12">
      {/* Giant wordmark */}
      <div
        aria-hidden="true"
        data-text="PXR∞"
        className="pointer-events-none absolute -bottom-[0.18em] left-1/2 -translate-x-1/2 font-display text-[22vw] leading-none font-bold whitespace-nowrap text-white/[0.025] select-none before:content-[attr(data-text)]"
      />

      <div className="container-x relative grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.4fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-muted">
            <strong className="font-semibold text-white">PXR Infinity (pxrinfinity)</strong> — {site.tagline} PR, meme marketing and
            social media for brands, celebrities and creators across India.
          </p>
          <SocialLinks className="mt-6" />
          <FindUsOn className="mt-8" />
        </div>

        <nav aria-label="Company">
          <h2 className="mb-5 font-sans text-xs font-semibold tracking-[0.18em] text-faint uppercase">Company</h2>
          <ul className="space-y-3">
            {[...mainNav, { label: 'Guides', href: '/guides' }, { label: 'Our network', href: '/network' }, { label: 'Contact', href: '/contact' }, { label: 'Company facts', href: '/about/facts' }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-muted transition hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="mb-5 font-sans text-xs font-semibold tracking-[0.18em] text-faint uppercase">Services</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-muted transition hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-accent-light transition hover:text-white">
                All services →
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-5 font-sans text-xs font-semibold tracking-[0.18em] text-faint uppercase">Contact</h2>
          <ul className="space-y-4 text-muted">
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition hover:text-white">
                <WhatsAppIcon className="size-4 text-wa" /> {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all transition hover:text-white">
                <Mail aria-hidden="true" className="size-4 shrink-0 text-accent-light" /> {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin aria-hidden="true" className="size-4 text-accent-light" /> India · Working pan-India
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x relative mt-16 flex flex-col gap-3 border-t border-line pt-8 text-sm text-faint sm:flex-row sm:justify-between">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p>PR agency India · Meme marketing · Celebrity & reality show PR</p>
      </div>
    </footer>
  )
}
