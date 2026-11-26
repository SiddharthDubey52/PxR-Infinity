import type { Metadata } from 'next'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { CtaSection } from '@/components/sections/CtaSection'
import { BlogFilter } from '@/components/sections/BlogFilter'
import { blogCategories, formatDate, getAllPosts } from '@/lib/blog'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Blog: PR, Meme Marketing & Reality TV Guides',
  description:
    'Guides on PR costs, meme marketing in India, X trends, influencer marketing, Bigg Boss PR and reputation — in English and Hinglish, from the PXR Infinity team.',
  path: '/blog',
})

export default async function BlogPage() {
  const posts = await getAllPosts() // newest first
  const categories = blogCategories.filter((c) => posts.some((p) => p.category === c))

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
        intro="Practical guides on PR, memes, trends, influencers, reality-show PR and reputation — written by the team that runs these campaigns every week."
      />

      <section className="pb-24" aria-label="Articles">
        <div className="container-x">
          <BlogFilter categories={categories}>
            {posts.map((p, i) => {
              const lead = i === 0
              return (
                <article
                  key={p.slug}
                  data-category={p.category}
                  data-reveal
                  style={{ '--d': `${(i % 2) * 90}ms` } as CSSProperties}
                  className={`card spotlight group ${lead ? 'md:col-span-2' : ''}`}
                >
                  <Link
                    href={`/blog/${p.slug}`}
                    className={lead ? 'grid h-full gap-8 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-end' : 'flex h-full flex-col p-8'}
                  >
                    <div>
                      <p className="text-sm text-accent-light">
                        {p.category} · {p.readingMinutes} min read
                      </p>
                      <h2
                        className={`mt-4 font-bold transition group-hover:text-accent-light ${
                          lead ? 'text-[clamp(1.5rem,3.6vw,2.5rem)] leading-tight' : 'text-xl leading-snug'
                        }`}
                      >
                        {p.title}
                      </h2>
                      <p className={`text-muted ${lead ? 'mt-4 max-w-2xl text-lg' : 'mt-3'}`}>{p.description}</p>
                    </div>
                    {lead ? (
                      <div className="flex items-center justify-between lg:justify-end lg:gap-6">
                        <time dateTime={p.date} className="text-sm text-faint">
                          {formatDate(p.date)}
                        </time>
                        <span className="grid size-14 place-items-center rounded-full bg-white text-bg transition group-hover:rotate-45">
                          <ArrowUpRight aria-hidden="true" className="size-5" />
                        </span>
                      </div>
                    ) : (
                      <time dateTime={p.date} className="mt-auto pt-8 text-sm text-faint">
                        {formatDate(p.date)}
                      </time>
                    )}
                  </Link>
                </article>
              )
            })}
          </BlogFilter>
        </div>
      </section>
      <CtaSection />
    </>
  )
}
