# PXR Infinity — website

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion · Lenis · MDX.
Every page is statically generated. Animated parts are small client components; everything else is server-rendered, so all text is in the HTML Google sees.

## Folder structure

```
app/
  layout.tsx              Root layout: fonts, global metadata, Organization JSON-LD, header/footer, boot script
  template.tsx            Page-transition curtain between routes
  page.tsx                Home
  about/ services/ services/[slug]/ work/ work/[slug]/ pricing/ blog/ blog/[slug]/ contact/
  */opengraph-image.tsx   Dynamic OG images (one per route)
  not-found.tsx           Custom 404
  sitemap.ts robots.ts manifest.ts icon.svg apple-icon.tsx
components/
  layout/                 Header, Footer, floating WhatsApp button
  motion/                 Preloader (CSS-only, 500ms), SmoothScroll (Lenis), Cursor, Spotlight, Magnetic,
                          Tilt, Counter, Parallax, StepsProgress, HeroParticles
  hero3d/                 3D ∞ hero (React Three Fiber, loaded on first interaction, desktop only) + static fallback
  sections/               Hero, Marquee, home sections, FeaturedStory (scroll story), WorkCard, WorkFilter,
                          BlogFilter, Testimonials, CaseGallery, Faq, ContactForm, CtaSection
  ui/                     Logo, Buttons, Icon, SocialIcons, PageHero/Breadcrumbs, JsonLd
content/blog/*.mdx        Blog posts
lib/
  site.ts                 ★ SITE CONFIG — URL (or NEXT_PUBLIC_SITE_URL), email, WhatsApp, socials, Search Console tag
  seo.ts                  Metadata + JSON-LD helpers
  og.tsx                  Shared OG image design
  blog.ts                 MDX loader
  data/services.ts        ★ All 13 services (each becomes /services/<slug>)
  data/work.ts            ★ Case studies (each becomes /work/<slug>); `pending` values stay hidden,
                          `draft` pages are noindex and unlisted, `noindex` pages stay out of the sitemap
  data/home.ts            ★ Stats, why-PXR, steps, FAQs, pricing, form options
  data/testimonials.ts    ★ Real client quotes only (section hidden while empty)
  data/pages.ts           ★ Static pages + the date each really changed (sitemap lastModified)
docs/seo-report.md        Page-by-page SEO table, TODO list, structured-data checks
```

## Before you go live — replace placeholders

1. `lib/site.ts`: `email`, `whatsapp` (digits only, e.g. `919876543210`), `whatsappDisplay`, `socials`, `city`.
2. `lib/data/home.ts`: every `[X]`, the testimonials and the pricing `[₹ PLACEHOLDER]`.
3. `lib/data/work.ts`: client names and `[RESULT]` values. Only publish real results.
4. Search the project for `TODO(Sid)` — every unverified number and missing detail is listed in `docs/seo-report.md`.

**Add content without touching components:**
- New service → add an object to `lib/data/services.ts`
- New case study → add an object to `lib/data/work.ts`
- New blog post → add `content/blog/my-post.mdx` with an `export const metadata = {…}` block (copy an existing post)

The sitemap, OG images and internal links update automatically.

---

## 1. Run locally

Needs Node.js 20.9+.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also type-checks)
npm start          # serve the production build
npm run lint
```

## 2. Push to GitHub and redeploy on Vercel

The repo is already connected (`origin` → GitHub, `main` branch). Your existing Vercel project redeploys on push.

```bash
git add -A
git commit -m "Rebuild site with Next.js"
git push origin main
```

`vercel.json` sets `"framework": "nextjs"`, so Vercel builds this as a Next.js app even though the project was first created with Vite.
If a build still fails, open **Vercel → Project → Settings → Build & Deployment** and check that:
- Framework Preset = **Next.js**
- Build Command, Output Directory and Install Command are **not overridden** (toggles off)
- Node.js version is **20.x or newer**

Then **Deployments → Redeploy**. Visit https://www.pxrinfinity.com to confirm.

## 3. Google Search Console

1. Go to https://search.google.com/search-console → **Add property** → choose **URL prefix** → enter `https://www.pxrinfinity.com/`.
2. Pick **HTML tag** as the verification method. Google shows something like
   `<meta name="google-site-verification" content="AbC123..." />`
3. Copy only the `content` value into `lib/site.ts`:
   ```ts
   googleSiteVerification: 'AbC123...',
   ```
4. Commit, push, and wait for the Vercel deploy to finish. Then click **Verify** in Search Console.
5. In Search Console, open **Sitemaps** → enter `sitemap.xml` → **Submit**.
6. Optional: use **URL Inspection** on the homepage and a few service pages → **Request indexing**.

## 4. Domain: www.pxrinfinity.com

The official address is `https://www.pxrinfinity.com`, set once in `SITE_URL` (`lib/site.ts`). Canonicals, Open Graph, the sitemap, robots.txt and JSON-LD all follow it.
Leave `NEXT_PUBLIC_SITE_URL` **unset** in Vercel production (or set it to `https://www.pxrinfinity.com`); an old value would bring back the wrong domain.

Redirect (308 permanent, same path and query) in `next.config.ts`: `pxrinfinity.com/*` → `https://www.pxrinfinity.com/*`.
Preview deployments are not redirected. The old `pxrinfinity.vercel.app` address has been retired.

In **Vercel → Project → Settings → Domains**: `www.pxrinfinity.com` is primary; `pxrinfinity.com` redirects to it (308). HTTP → HTTPS is automatic.

In Search Console, add the `https://www.pxrinfinity.com/` property, submit its sitemap.

---

## How the motion stays SEO-safe

- All text is server-rendered. An inline script adds `.js` to `<html>` before first paint; only then do elements start hidden for reveal animations. Crawlers and no-JS visitors see everything.
- Scroll reveals use one IntersectionObserver that starts as soon as the HTML is parsed. Content that's on screen at load appears immediately, so Largest Contentful Paint isn't delayed.
- The loading logo only shows on the first visit in a session, lasts 500ms (pure CSS, so it never waits for JavaScript) and is click-through; the hero text renders underneath straight away.
- The hero visual is a CSS glow with two decorative glass cards (desktop only, `aria-hidden`). There is no 3D or canvas on the site.
- The custom cursor, spotlight, Lenis, tilt, magnetic buttons and canvas particles only run on desktop with a fine pointer.
- `prefers-reduced-motion` turns off the loading logo, reveals, marquees, particles, 3D, parallax, tilt, pinned scroll story and smooth scroll.
