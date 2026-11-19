import type { CSSProperties, ReactNode } from 'react'
import { Mail } from 'lucide-react'
import { ContactForm } from './ContactForm'
import { WhatsAppButton } from '@/components/ui/Buttons'
import { services } from '@/lib/data/services'
import { site } from '@/lib/site'

/** Big closing CTA with the WhatsApp contact form. */
export function CtaSection({
  title = (
    <>
      Ready to go viral? <span className="text-gradient">Chalo shuru karte hain.</span>
    </>
  ),
  intro = 'Tell us what you’re launching, releasing or building. You’ll get a free, no-obligation proposal within [X] hours.',
  defaultService,
}: {
  title?: ReactNode
  intro?: string
  defaultService?: string
}) {
  return (
    <section id="proposal" className="relative overflow-hidden py-24 sm:py-32" aria-labelledby="cta-title">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="mesh mesh-a bottom-0 left-[-10%] size-[600px] bg-accent/35" />
        <div className="mesh mesh-b top-0 right-[-10%] size-[500px] bg-blue/25" />
      </div>
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-5" data-reveal>
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Free proposal
          </p>
          <h2 id="cta-title" className="text-[clamp(2rem,5.5vw,4rem)] leading-[1.05] font-bold" data-reveal>
            {title}
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted" data-reveal>
            {intro}
          </p>
          <div className="mt-10 flex flex-col gap-4" data-reveal>
            <WhatsAppButton label="Prefer chat? WhatsApp us" className="self-start" />
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 self-start text-muted transition hover:text-white">
              <Mail aria-hidden="true" className="size-4 text-accent-light" /> {site.email}
            </a>
          </div>
        </div>
        <div data-reveal style={{ '--d': '120ms' } as CSSProperties}>
          <ContactForm services={services.map((s) => s.name)} defaultService={defaultService} />
        </div>
      </div>
    </section>
  )
}
