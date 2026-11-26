import type { Metadata } from 'next'
import { Clock, Mail, MapPin } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { ProposalTabs } from '@/components/sections/ProposalTabs'
import { SocialLinks, WhatsAppIcon } from '@/components/ui/SocialIcons'
import { services } from '@/lib/data/services'
import { site, waLink } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Contact PXR Infinity — Free Proposal on WhatsApp',
  absoluteTitle: true,
  description:
    'Contact PXR Infinity for PR, meme marketing, X trends, influencer marketing and reality show PR in India. WhatsApp us for a free proposal.',
  path: '/contact',
})

export default function ContactPage() {
  const rows = [
    { Icon: WhatsAppIcon, label: 'WhatsApp', value: site.whatsappDisplay, href: waLink(), external: true },
    { Icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { Icon: MapPin, label: 'Based in', value: 'India — working pan-India, online' },
    { Icon: Clock, label: 'Response time', value: 'Within 24 hours, 7 days a week' },
  ]

  return (
    <>
      <PageHero
        crumbs={[{ name: 'Contact', path: '/contact' }]}
        eyebrow="Contact"
        title={
          <>
            Trend karwana hai? <span className="text-gradient">Baat karte hain.</span>
          </>
        }
        intro="Share your brief and get a free proposal. The form opens WhatsApp with your details ready to send — or reach us directly below."
      />

      <section className="pb-24 sm:pb-32" aria-label="Contact details and form">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div data-reveal>
            <h2 className="sr-only">Contact details</h2>
            <ul className="space-y-3">
              {rows.map(({ Icon, label, value, href, external }) => {
                const inner = (
                  <>
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-accent/30 bg-accent/10 text-accent-light">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm text-faint">{label}</span>
                      <span className="block font-medium break-all">{value}</span>
                    </span>
                  </>
                )
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="card flex items-center gap-4 p-5 transition hover:border-accent/50"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="card flex items-center gap-4 p-5">{inner}</div>
                    )}
                  </li>
                )
              })}
            </ul>
            <p className="mt-10 mb-4 text-sm font-semibold tracking-[0.18em] text-faint uppercase">Follow PXR Infinity</p>
            <SocialLinks />
            <p className="mt-10 text-muted">
              Working on something confidential — a reality show entry, a crisis or an unannounced launch? Tell us on WhatsApp and
              we’ll sign an NDA before you share details.
            </p>
          </div>
          <div data-reveal>
            <h2 className="sr-only">Get a free proposal</h2>
            <ProposalTabs services={services.map((s) => s.name)} />
          </div>
        </div>
      </section>
    </>
  )
}
