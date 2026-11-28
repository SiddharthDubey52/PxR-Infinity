import type { Metadata } from 'next'
import { CONTACT_EMAIL } from '@/lib/site'

/**
 * Disclaimer: kept out of search on purpose (noindex, nofollow, noarchive), not in the sitemap,
 * and not blocked in robots.txt so crawlers can read the noindex tag.
 * No canonical, Open Graph, Twitter or JSON-LD. Plain markup instead of PageHero, because
 * PageHero's breadcrumbs output BreadcrumbList JSON-LD.
 */
export const metadata: Metadata = {
  title: 'Disclaimer',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    googleBot: { index: false, follow: false, noarchive: true, noimageindex: true, 'max-snippet': 0, 'max-image-preview': 'none' },
  },
  openGraph: null,
  twitter: null,
}

export default function DisclaimerPage() {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="container-x max-w-3xl">
        <h1 className="section-title">Disclaimer</h1>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-[#d4d4e2]">
          <p>
            This website is currently the portfolio of the PXR Infinity team. It shows the work the team has done and the services
            the team offers. PXR Infinity plans to register as a company in the future; until then, the points below apply.
          </p>
          <p>
            PXR Infinity is a brand name. It is not yet a registered company (not a private limited company, LLP or partnership
            firm).
          </p>
          <p>
            All services under the PXR Infinity brand are provided by an individual service provider. Every project is covered by a
            written agreement signed between the client and that individual. The individual’s full name, address and tax details
            (where applicable) are shared in the agreement and on the invoice.
          </p>
          <p>
            About the work shown on this website: the campaigns, case studies and names shown on this website are projects that the
            PXR Infinity team worked on. Each came to the team in one of two ways:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>directly from the celebrity, contestant, brand or show, or</li>
            <li>through another agency that brought in the PXR Infinity team for the work.</li>
          </ul>
          <p>
            Where a project came through another agency, the PXR Infinity team worked as part of that agency’s campaign, and the
            client’s own agreement was with that agency.
          </p>
          <p>
            Names, shows and brands are mentioned only to describe work the team did. This does not mean that they endorse PXR
            Infinity. All trademarks and names belong to their respective owners.
          </p>
          <p>This disclaimer will be updated once PXR Infinity is registered as a company.</p>
          <p>
            Questions:{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-accent-light underline-offset-4 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
