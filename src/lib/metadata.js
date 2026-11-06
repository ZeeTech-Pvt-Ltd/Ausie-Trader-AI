// Maps the per-route SEO config onto Next's Metadata API, so the head is
// baked into the prerendered HTML at build time.
import { SEO, SITE_URL, OG_IMAGE } from '@/data/seo.js'

const BRAND = 'Trader AI'

export function pageMetadata(route) {
  const conf = SEO[route]
  if (!conf) throw new Error(`No SEO config for route "${route}"`)

  const meta = {
    // absolute: the root layout's title must not wrap this.
    title: { absolute: conf.title },
    description: conf.description,
    robots: conf.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      siteName: BRAND,
      title: conf.title,
      description: conf.description,
      url: conf.canonical || `${SITE_URL}/`,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${BRAND} trading analysis workspace`,
          type: 'image/png',
        },
      ],
      type: 'website',
      locale: 'en_AU',
    },
    twitter: {
      card: 'summary_large_image',
      title: conf.title,
      description: conf.description,
      images: [OG_IMAGE],
    },
  }

  if (conf.keywords) meta.keywords = conf.keywords
  // Noindex routes carry no canonical: the two are contradictory signals.
  if (conf.canonical) meta.alternates = { canonical: conf.canonical }

  return meta
}
