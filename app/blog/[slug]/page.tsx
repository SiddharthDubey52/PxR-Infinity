import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/ui/PageHero'
import { JsonLd } from '@/components/ui/JsonLd'
import { ServiceCard } from '@/components/sections/HomeSections'
import { CtaSection } from '@/components/sections/CtaSection'
import { Faq } from '@/components/sections/Faq'
import { formatDate, getAllPosts, getPost, getPostSlugs } from '@/lib/blog'
import { getService } from '@/lib/data/services'
import { AUTHOR_NAME, articleLd, pageMetadata } from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost((await params).slug)
  if (!post) return {}
  return pageMetadata({
    title: post.seoTitle ?? post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
    index: !post.draft,
  })
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost((await params).slug)
  if (!post) notFound()
  const { Content } = post
  const path = `/blog/${post.slug}`
  const related = post.relatedServices.map(getService).filter((s) => s !== undefined)
  const all = (await getAllPosts()).filter((p) => p.slug !== post.slug)
  const picked = (post.relatedPosts ?? []).map((slug) => all.find((p) => p.slug === slug)).filter((p) => p !== undefined)
  const others = [...picked, ...all.filter((p) => !picked.includes(p) && p.category === post.category), ...all]
    .filter((p, i, arr) => arr.indexOf(p) === i)
    .slice(0, 3)

  return (
    <>
      <JsonLd
        data={articleLd({
          title: post.title,
          description: post.description,
          path,
          datePublished: post.date,
          dateModified: post.updated,
          type: 'BlogPosting',
        })}
      />

      <article>
        <header className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="mesh mesh-a -top-40 left-[20%] size-[520px] bg-accent/35" />
          </div>
          <div className="container-x max-w-3xl">
            <Breadcrumbs
              items={[
                { name: 'Blog', path: '/blog' },
                { name: post.title, path },
              ]}
            />
            <p className="eyebrow">{post.category}</p>
            <h1 className="mt-5 text-[clamp(1.9rem,5vw,3.25rem)] leading-[1.1] font-bold" data-hero-fade style={{ '--d': '80ms' } as CSSProperties}>{post.title}</h1>
            <p className="mt-6 text-lg text-muted">{post.description}</p>
            <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-faint">
              <span>By {AUTHOR_NAME}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.updated && post.updated !== post.date && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>
                    Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                  </span>
                </>
              )}
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
            </p>
          </div>
        </header>

        <div className="container-x max-w-3xl pb-20">
          <div className="prose-pxr">
            <Content />
          </div>
        </div>
      </article>

      {post.faqs && post.faqs.length > 0 && <Faq faqs={post.faqs} title="Quick answers" />}

      {related.length > 0 && (
        <section className="border-t border-line py-20" aria-labelledby="rel-svc">
          <div className="container-x">
            <h2 id="rel-svc" className="mb-10 text-2xl font-bold sm:text-3xl">
              Services related to this article
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s, i) => (
                <ServiceCard key={s.slug} s={s} i={i} />
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="border-t border-line py-20" aria-labelledby="more-posts">
        <div className="container-x">
          <h2 id="more-posts" className="mb-10 text-2xl font-bold sm:text-3xl">
            Keep reading
          </h2>
          <ul className="grid gap-4 md:grid-cols-3">
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="card group flex h-full flex-col p-7 transition hover:border-accent/50">
                  <span className="text-sm text-accent-light">{p.category}</span>
                  <span className="mt-3 font-display text-lg leading-snug font-semibold group-hover:text-accent-light">{p.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
