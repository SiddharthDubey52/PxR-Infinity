'use client'

import Link from 'next/link'
import { useId, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { ContactForm } from './ContactForm'
import { WhatsAppButton } from '@/components/ui/Buttons'

/**
 * Three paths, one per audience: brands/OTT and celebrities/contestants get the proposal form
 * (with their own "Who are you?" options); creators and meme pages go to /join-network.
 * Every tab panel is in the server HTML; only the active one is shown.
 */
const tabs = [
  { id: 'brands', label: 'Brands & OTT', who: ['Brand', 'Startup', 'Production house / OTT', 'Music label', 'Other'] },
  { id: 'talent', label: 'Celebrities & Contestants', who: ['Celebrity', 'Contestant', 'Creator / YouTuber', 'Artist', 'Manager / team', 'Other'] },
  { id: 'network', label: 'Creators & Meme Pages', who: [] },
] as const

export function ProposalTabs({ services, defaultService }: { services: string[]; defaultService?: string }) {
  const [active, setActive] = useState<(typeof tabs)[number]['id']>('brands')
  const base = useId().replace(/:/g, '')

  return (
    <div>
      <div role="tablist" aria-label="Who is this for?" className="mb-5 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            id={`${base}-tab-${t.id}`}
            type="button"
            role="tab"
            aria-selected={active === t.id}
            aria-controls={`${base}-panel-${t.id}`}
            onClick={() => setActive(t.id)}
            className={`min-h-11 shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
              active === t.id ? 'border-white bg-white text-bg' : 'border-line-strong text-muted hover:border-accent hover:text-white'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tabs.map((t) => (
        <div key={t.id} id={`${base}-panel-${t.id}`} role="tabpanel" aria-labelledby={`${base}-tab-${t.id}`} hidden={active !== t.id}>
          {t.id === 'network' ? (
            <div className="card p-6 sm:p-9">
              <h3 className="text-2xl font-semibold">Run a meme page or create content?</h3>
              <p className="mt-3 text-muted">
                Join the PXR Infinity network and get paid campaigns from brands, films, music labels and shows that fit your page.
                Tell us about your page and we’ll get back to you on WhatsApp.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/join-network"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-accent-strong px-7 font-semibold text-white transition hover:bg-[#6d28d9]"
                >
                  Join our network
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <WhatsAppButton label="Ask on WhatsApp" message="Hi PXR Infinity! I run a page / create content and want to join your network." />
              </div>
            </div>
          ) : (
            <ContactForm services={services} defaultService={defaultService} who={t.who} idPrefix={`${base}-${t.id}`} />
          )}
        </div>
      ))}
    </div>
  )
}
