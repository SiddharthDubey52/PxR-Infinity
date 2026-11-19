import type { Metadata } from 'next'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { CtaSection } from '@/components/sections/CtaSection'
import { formatDate, getAllPosts } from '@/lib/blog'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Blog — PR, Meme Marketing & Reality Show PR Insights',
  description:
    'Guides on meme marketing in India, X/Twitter trends, influencer marketing, Bigg Boss PR and crisis PR — from the PXR Infinity team.',
  path: '/blog',
})

export default async function BlogPage() {
  const posts = await getAllPosts()
  const [lead, ...rest] = posts

  return (
    <>
      <PageHero
        crumbs={[{ name: 'Blog', path: '/blog' }]}
        eyebrow="Blog"
        title={
          <>
            Notes from the <span className="text-gradient">timeline</span>.
          </>
        }
        intro="Practical guides on memes, trends, influencers, reality-show PR and reputation — written by people who run these campaigns every week."
      />

      <section className="pb-24" aria-label="Articles">
        <div className="container-x">
          {lead && (
            <article data-reveal className="card group mb-6 overflow-hidden">
              <Link href={`/blog/${lead.slug}`} className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
                <div>
                  <p className="text-sm text-accent-light">
                    {lead.category} · {lead.readingMinutes} min read
                  </p>
                  <h2 className="mt-4 text-[clamp(1.5rem,3.6vw,2.5rem)] leading-tight font-bold transition group-hover:text-accent-light">
                    {lead.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg text-muted">{lead.description}</p>
                </div>
                <div className="flex items-center justify-between lg:justify-end lg:gap-6">
                  <time dateTime={lead.date} className="text-sm text-faint">
                    {formatDate(lead.date)}
                  </time>
                  <span className="grid size-14 place-items-center rounded-full bg-white text-bg transition group-hover:rotate-45">
                    <ArrowUpRight aria-hidden="true" className="size-5" />
                  </span>
                </div>
              </Link>
            </article>
          )}
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((p, i) => (
              <article key={p.slug} data-reveal style={{ '--d': `${(i % 2) * 90}ms` } as CSSProperties} className="card group">
                <Link href={`/blog/${p.slug}`} className="flex h-full flex-col p-8">
                  <p className="text-sm text-accent-light">
                    {p.category} · {p.readingMinutes} min read
                  </p>
                  <h2 className="mt-4 text-xl leading-snug font-bold transition group-hover:text-accent-light">{p.title}</h2>
                  <p className="mt-3 text-muted">{p.description}</p>
                  <time dateTime={p.date} className="mt-auto pt-8 text-sm text-faint">
                    {formatDate(p.date)}
                  </time>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  )
}
