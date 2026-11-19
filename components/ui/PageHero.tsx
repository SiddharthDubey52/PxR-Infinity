import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { CSSProperties, ReactNode } from 'react'
import { JsonLd } from './JsonLd'
import { breadcrumbLd } from '@/lib/seo'

type Crumb = { name: string; path: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: 'Home', path: '/' }, ...items]
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-faint">
          {all.map((c, i) => (
            <li key={c.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight aria-hidden="true" className="size-3.5" />}
              {i === all.length - 1 ? (
                <span aria-current="page" className="text-muted">
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="transition hover:text-white">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbLd(items)} />
    </>
  )
}

/** Inner-page hero with breadcrumbs and the page's single <h1>. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  intro,
  children,
}: {
  crumbs: Crumb[]
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="mesh mesh-a -top-40 left-[10%] size-[520px] bg-accent/40" />
        <div className="mesh mesh-b -top-20 right-[5%] size-[420px] bg-blue/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
      </div>
      <div className="container-x">
        <Breadcrumbs items={crumbs} />
        {eyebrow && (
          <p className="eyebrow mb-5" data-hero-fade style={{ '--d': '0ms' } as CSSProperties}>
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl text-[clamp(2rem,6vw,4.25rem)] leading-[1.05] font-bold">
          {title}
        </h1>
        {intro && (
          <div className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            {intro}
          </div>
        )}
        {children && (
          <div className="mt-9" data-hero-fade style={{ '--d': '200ms' } as CSSProperties}>
            {children}
          </div>
        )}
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center,
  as: Tag = 'h2',
}: {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  center?: boolean
  as?: 'h2' | 'h1'
}) {
  return (
    <div className={`mb-12 max-w-3xl sm:mb-16 ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`eyebrow mb-5 ${center ? 'justify-center' : ''}`} data-reveal>
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <Tag className="text-[clamp(1.75rem,4.6vw,3.25rem)] leading-[1.08] font-bold" data-reveal style={{ '--d': '80ms' } as CSSProperties}>
        {title}
      </Tag>
      {intro && (
        <p className="mt-5 text-lg text-muted" data-reveal style={{ '--d': '160ms' } as CSSProperties}>
          {intro}
        </p>
      )}
    </div>
  )
}
