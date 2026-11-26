import type { Metadata } from 'next'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { PageHero, SectionHeading } from '@/components/ui/PageHero'
import { CtaSection } from '@/components/sections/CtaSection'
import { blogCategories, getAllPosts } from '@/lib/blog'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'PR Guides for Contestants, Actors & Brands',
  description:
    'Practical PR guides from PXR Infinity: preparing for a reality show, running fan clubs, planning X trends, media kits for actors, crisis PR and launches.',
  path: '/guides',
})

/** Guides hub: every blog post with `guide: true`, grouped by category. */
export default async function GuidesPage() {
  const guides = (await getAllPosts()).filter((p) => p.guide)
  const groups = blogCategories.map((c) => ({ category: c, posts: guides.filter((p) => p.category === c) })).filter((g) => g.posts.length > 0)

  return (
    <>
      <PageHero
        crumbs={[{ name: 'Guides', path: '/guides' }]}
        eyebrow="PR guides"
        title={
          <>
            Practical PR guides, <span className="text-gradient">step by step</span>.
          </>
        }
        intro="Checklists and playbooks from our team for contestants, actors, creators, brands and film teams. Seekho, phir plan karo."
      />

      {groups.map((g) => (
        <section key={g.category} className="pb-20 sm:pb-24" aria-labelledby={`g-${g.category}`}>
          <div className="container-x">
            <SectionHeading eyebrow={`${g.posts.length} guide${g.posts.length > 1 ? 's' : ''}`} title={<span id={`g-${g.category}`}>{g.category}</span>} />
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {g.posts.map((p, i) => (
                <li key={p.slug} data-reveal style={{ '--d': `${(i % 3) * 80}ms` } as CSSProperties}>
                  <Link href={`/blog/${p.slug}`} className="card spotlight group flex h-full min-h-52 flex-col p-7 transition hover:border-accent/50">
                    <span className="text-sm text-faint">{p.readingMinutes} min read</span>
                    <span className="mt-3 font-display text-lg leading-snug font-semibold group-hover:text-accent-light">{p.title}</span>
                    <span className="mt-3 line-clamp-3 text-muted">{p.description}</span>
                    <span className="mt-auto pt-6 text-sm font-semibold text-muted transition group-hover:text-gold">Read the guide →</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="pb-8">
        <div className="container-x">
          <p className="text-muted">
            Looking for more? Browse every article on the <Link href="/blog" className="text-accent-light underline underline-offset-4">PXR Infinity blog</Link>.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
