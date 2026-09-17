# Ausie Trader AI — ausietraderai.com

A premium, modern AI crypto research platform landing page for the Australian market.
Built with **React + Vite + GSAP**.

## Stack

- **React 18** — reusable component architecture
- **Vite 5** — fast dev server and optimized production build
- **GSAP + ScrollTrigger** — premium entrance and scroll animations
- **Vanilla CSS** — custom design system (CSS variables, responsive, reduced-motion support)
- **Inline SVG** — lightweight custom trading graphics (no stock imagery)

## Getting started

```bash
npm install
npm run dev        # start dev server
npm run build      # production build to /dist
npm run preview    # preview the production build
```

## Folder structure

```
index.html              Vite entry (SEO meta, fonts, structured data)
public/                 favicon, og-image, robots.txt, sitemap.xml, site.webmanifest
src/
  main.jsx              React entry + reduced-motion detection
  App.jsx               Page composition + GSAP animation orchestration
  styles/main.css       Design system
  data/content.js       All copy in one place (nav, features, steps, FAQs, form, footer)
  components/
    ui.jsx              Shared primitives (Logo, Button, Eyebrow, SectionHead, ArrowIcon)
    Header.jsx          Sticky nav + mobile menu
    Hero.jsx            Dark hero + floating market visual
    Why.jsx             "Why people use" — 4 cards
    LeadForm.jsx        Signup form (first/last name, email, phone + country code, agree)
    Platform.jsx        "Everything you need to research crypto markets"
    Features.jsx        Core features + stats
    Steps.jsx           How It Works (3 steps)
    Showcase.jsx        Dark dashboard workspace mockup
    Clarity.jsx         "Built for clarity, not complexity"
    Testimonials.jsx    Illustrative experience quotes
    Faq.jsx             Accordion
    Cta.jsx             Final call-to-action
    Footer.jsx          Footer + disclaimer
```

## Notes

- GSAP animations are set up in `App.jsx` using `gsap.context()` for automatic cleanup on unmount.
- The signup form is client-side only (validates + shows a success state); wire it to your backend/CRM when ready.
- Content positions the platform as a **research and information tool** — no financial advice, no profit claims.
- Respects `prefers-reduced-motion`.
- `reference-image.webp` is the design reference provided at the start of the project; it is not used by the site.
