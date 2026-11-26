import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { PageHero } from '@/components/ui/PageHero'
import { FindUsOn } from '@/components/ui/FindUsOn'
import { services } from '@/lib/data/services'
import { publishedCaseStudies, visible } from '@/lib/data/work'
import { stats } from '@/lib/data/home'
import { directoryLinks, site, SITE_URL } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'PXR Infinity Company Facts',
  absoluteTitle: true,
  description:
    'Quick facts about PXR Infinity: what the agency does, services, where it works, contact details, social profiles, shows worked on and key numbers.',
  path: '/about/facts',
})

function Row({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-line py-5 sm:grid-cols-[14rem_1fr] sm:gap-8">
      <dt className="font-semibold text-white">{term}</dt>
      <dd className="text-[#d4d4e2]">{children}</dd>
    </div>
  )
}

/**
 * Plain, short sentences that AI assistants and search engines can quote.
 * Everything here is read from the same data files as the rest of the site, so the
 * numbers and lists always match. Don't hard-code facts on this page.
 */
export default function FactsPage() {
  const shows = [
    ...new Set(
      publishedCaseStudies.map((c) => c.glance?.find((g) => g.label === 'Show' && !g.pending)?.value).filter((s): s is string => !!s),
    ),
  ]
  const socials = Object.entries(site.socials).filter(([, url]) => url)
  const socialName: Record<string, string> = { instagram: 'Instagram', x: 'X (Twitter)', linkedin: 'LinkedIn', youtube: 'YouTube' }

  return (
    <>
      <PageHero
        crumbs={[
          { name: 'About', path: '/about' },
          { name: 'Company facts', path: '/about/facts' },
        ]}
        eyebrow="Company facts"
        title="PXR Infinity company facts"
        intro="The short version: who we are, what we do and how to reach us, in plain sentences."
      />

      <section className="pb-24 sm:pb-32" aria-label="Company facts">
        <div className="container-x max-w-4xl">
          <dl>
            <Row term="Name">
              {site.name}. Also written as pxrinfinity. Website: <a href={SITE_URL} className="text-accent-light">{SITE_URL.replace('https://', '')}</a>.
            </Row>
            <Row term="What it is">
              {site.name} is a PR and meme marketing agency in India. It runs PR, meme marketing, X (Twitter) trends, influencer
              marketing and social media campaigns for brands, celebrities, creators, films, music and reality show contestants.
            </Row>
            <Row term="Tagline">{site.tagline}</Row>
            <Row term="Services">
              <ul className="list-disc space-y-1 pl-5">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="transition hover:text-white">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Row>
            <Row term="Where it works">India, pan-India and online. Campaigns run in English, Hindi and regional languages.</Row>
            <Row term="Who it works with">Brands and startups, OTT platforms and production houses, music labels and artists, celebrities, creators and reality show contestants.</Row>
            {shows.length > 0 && <Row term="Shows worked on">{shows.join(', ')}.</Row>}
            <Row term="Key numbers">
              <ul className="list-disc space-y-1 pl-5">
                {/* TODO(Sid): confirm each homepage stat with screenshots (same values everywhere on the site) */}
                {stats.map((s) => (
                  <li key={s.label}>
                    {s.label}: {s.value}
                    {s.suffix}
                  </li>
                ))}
              </ul>
            </Row>
            <Row term="Case studies">
              <ul className="list-disc space-y-1 pl-5">
                {publishedCaseStudies.map((c) => {
                  const r = visible(c.results).slice(0, 2)
                  return (
                    <li key={c.slug}>
                      <Link href={`/work/${c.slug}`} className="transition hover:text-white">
                        {c.client}
                      </Link>
                      {r.length > 0 && `: ${r.map((x) => `${x.value} ${x.label.toLowerCase()}`).join('; ')}`}
                    </li>
                  )
                })}
              </ul>
            </Row>
            <Row term="Contact">
              WhatsApp and phone: <a href={`https://wa.me/${site.whatsapp}`} className="text-accent-light">{site.whatsappDisplay}</a>. Email:{' '}
              <a href={`mailto:${site.email}`} className="text-accent-light">{site.email}</a>. Replies within 24 hours, 7 days a week.
            </Row>
            {socials.length > 0 && (
              <Row term="Social profiles">
                <ul className="space-y-1">
                  {socials.map(([k, url]) => (
                    <li key={k}>
                      {socialName[k] ?? k}: <a href={url} className="text-accent-light">{url.replace('https://', '')}</a>
                    </li>
                  ))}
                </ul>
              </Row>
            )}
            {directoryLinks.length > 0 && (
              <Row term="Listed on">
                <FindUsOn />
              </Row>
            )}
            <Row term="How it works">
              A brief, a written plan the client approves, a schedule the client can see, and one report at the end with every link,
              screenshot and number. Pricing is shared on WhatsApp after the brief.
            </Row>
            <Row term="What it doesn’t do">No fake accounts, no inflated numbers, no promises of a win or a fixed trend position, and no deleting news articles or reviews.</Row>
          </dl>
        </div>
      </section>
    </>
  )
}
