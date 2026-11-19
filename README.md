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
  motion/                 Preloader, SmoothScroll (Lenis), Cursor, Magnetic, Tilt, Counter, Parallax,
                          HorizontalScroll, HeroParticles
  sections/               Hero, Marquee, home sections, WorkCard, WorkFilter, Testimonials, Faq,
                          ContactForm, CtaSection
  ui/                     Logo, Buttons, Icon, SocialIcons, PageHero/Breadcrumbs, JsonLd
content/blog/*.mdx        Blog posts
lib/
  site.ts                 ★ SITE CONFIG — URL, email, WhatsApp, socials, Search Console tag
  seo.ts                  Metadata + JSON-LD helpers
  og.tsx                  Shared OG image design
  blog.ts                 MDX loader
  data/services.ts        ★ All 12 services (each becomes /services/<slug>)
  data/work.ts            ★ Case studies (each becomes /work/<slug>)
  data/home.ts            ★ Stats, why-PXR, steps, testimonials, FAQs, pricing, form options
public/images/            Placeholder images (replace with real ones)
```

## Before you go live — replace placeholders

1. `lib/site.ts`: `email`, `whatsapp` (digits only, e.g. `919876543210`), `whatsappDisplay`, `socials`, `city`.
2. `lib/data/home.ts`: every `[X]`, the testimonials and the pricing `[₹ PLACEHOLDER]`.
3. `lib/data/work.ts`: client names and `[RESULT]` values. Only publish real results.
4. `public/images/work/*.svg` and `public/images/founder-placeholder.svg`: swap for real images (JPG/PNG/WebP work too) and update the paths.
5. Search the project for `[` to find any remaining placeholders.

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

Then **Deployments → Redeploy**. Visit https://pxrinfinity.vercel.app to confirm.

## 3. Google Search Console

1. Go to https://search.google.com/search-console → **Add property** → choose **URL prefix** → enter `https://pxrinfinity.vercel.app/`.
2. Pick **HTML tag** as the verification method. Google shows something like
   `<meta name="google-site-verification" content="AbC123..." />`
3. Copy only the `content` value into `lib/site.ts`:
   ```ts
   googleSiteVerification: 'AbC123...',
   ```
4. Commit, push, and wait for the Vercel deploy to finish. Then click **Verify** in Search Console.
5. In Search Console, open **Sitemaps** → enter `sitemap.xml` → **Submit**.
6. Optional: use **URL Inspection** on the homepage and a few service pages → **Request indexing**.

## 4. Later: connect a custom domain

1. Buy a domain (e.g. `pxrinfinity.in`).
2. **Vercel → Project → Settings → Domains** → add `pxrinfinity.in` and `www.pxrinfinity.in`. Set the DNS records Vercel shows at your registrar, and pick one domain as primary (the other redirects).
3. In `lib/site.ts` change:
   ```ts
   export const SITE_URL = 'https://pxrinfinity.in'
   ```
   Commit and push. Canonicals, OG tags, the sitemap, robots.txt and JSON-LD all update automatically.
4. In Search Console, add a **new** property for the new domain, verify it, and submit its sitemap.
   Then use **Settings → Change of address** on the old `.vercel.app` property to tell Google you've moved.

---

## How the motion stays SEO-safe

- All text is server-rendered. An inline script adds `.js` to `<html>` before first paint; only then do elements start hidden for reveal animations. Crawlers and no-JS visitors see everything.
- Scroll reveals use one IntersectionObserver that starts as soon as the HTML is parsed. Content that's on screen at load appears immediately, so Largest Contentful Paint isn't delayed.
- The preloader only shows on the first visit. The custom cursor, Lenis and the canvas particles only run on desktop with a fine pointer.
- `prefers-reduced-motion` turns off the preloader, reveals, marquees, particles, parallax, tilt and smooth scroll.
