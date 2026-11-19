# PXR Infinity — website

Single-page site built with React + Vite.

## Run
```bash
npm install
npm run dev      # local dev server
npm run build    # production build in /dist (deploy this folder)
```

## Editing content
- **All text, numbers, client names, links, WhatsApp number:** `src/content.js`
- **Images:** drop files in `public/images/` and set the path in `src/content.js`
  (e.g. `image: '/images/case-1.jpg'`, `photo: '/images/sid.jpg'`, `logo: '/images/logos/brand.svg'`).
  Leave as `null` to show a styled placeholder.
- **SEO (title, description, keywords, domain, social preview):** `index.html`
- **Brand colour:** `--accent` at the top of `src/index.css`
# PxR-Infinity
