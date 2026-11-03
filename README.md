# Ausie Trader AI - ausietraderai.com

An AI-assisted crypto research platform landing site for the Australian market.
Built with **Next.js 16 (App Router)** and a static export, so every route is
prerendered to HTML at build time.

## Stack

- **Next.js 16** - App Router, `output: 'export'`
- **React 19**
- **Plain CSS** - one design system in `app/globals.css`, no component library
- **next/font/local** - the two variable fonts ship from this origin
- **Vercel** - serves the static `out/` directory

## Getting started

```bash
npm install
npm run dev        # dev server on http://localhost:3000
npm run build      # static export to /out
```

`next start` is not used because the site is a static export. To preview the
build, serve `out/` with any static server that maps `/about` to
`about.html` and serves `404.html` with a real 404 status.

## Folder structure

```
app/
  layout.jsx            Root shell: fonts, metadata, header/footer, JSON-LD, GA
  globals.css           The whole design system
  page.jsx              Home
  <route>/page.jsx      One directory per route
  not-found.jsx         Becomes out/404.html
src/
  components/           All UI, shared by the routes above
  data/content.js       Copy, country list, timezone map, FAQ content
  data/seo.js           Per-route title, description, canonical, robots rules
  lib/metadata.js       Maps seo.js onto Next's Metadata API
  lib/submitLead.js     Form submission, timeout, relay error parsing
public/                 favicon, OG image, robots.txt, sitemap.xml, manifest
```

## Notes

- **Metadata is baked in at build time.** Each page exports `metadata` from
  `src/lib/metadata.js`; there is no runtime `<Seo />` component.
- **`/thank-you` is noindex and carries no canonical.** The two signals are
  contradictory, so only `robots` is set.
- **`out/404.html` is a real 404.** There is no SPA rewrite; an unknown path
  returns the 404 page with a 404 status.
- **The form posts JSON, not form data.** `Content-Type: application/json` is
  required by the relay. `offerName` is `AusieTraderAI-Site`.
- **No third-party geolocation.** The country picker is preselected from the
  visitor's timezone only.
- **`/how-it-works` and `/reviews` are additional routes.** The Reviews page
  shows the five operator-supplied reviews in a slider, with avatar images and
  star ratings. New reviews, ratings or customer counts should only be added
  when they are real and permission-cleared.
- **Platform and Showcase use the operator's WebP renders** in
  `public/images/`. The original PNGs are kept in `design-assets/`, which is
  gitignored because it is not deployed.
- **Analytics** (GA4 `G-ZLBTPP0HF3`) loads on idle, after the page is
  interactive.
- `reference-image.webp` is the original design reference; it is not used by
  the site.
