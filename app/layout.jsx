import localFont from 'next/font/local'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header.jsx'
import Footer from '@/components/Footer.jsx'
import { SitePreloads } from '@/components/PreloadResources.jsx'

// Self-hosted at build time, so the font files ship from this origin and
// there is no render-blocking request to a third party.
const manrope = localFont({
  src: './fonts/manrope-latin.woff2',
  weight: '200 800',
  style: 'normal',
  variable: '--font-manrope',
  display: 'swap',
})

const jakarta = localFont({
  src: './fonts/jakarta-latin.woff2',
  weight: '200 800',
  style: 'normal',
  variable: '--font-jakarta',
  display: 'swap',
})

const SITE = 'https://ausietraderai.com'

export const metadata = {
  metadataBase: new URL(SITE),
  applicationName: 'Ausie Trader AI',
  title: 'Ausie Trader AI | AI Crypto Research for Australia',
  description:
    'AI assisted crypto research for Australians. Explore market data, charts and learning resources for Bitcoin, Ethereum and more. Start researching today.',
  verification: {
    google: 'nItyJQ-yY2lZBlCUtV14XAJ7vCMA-XTRjQ8qecyaYG4',
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

// Site-level structured data. Per-page schemas are not needed for this site.
const SITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Ausie Trader AI',
      url: `${SITE}/`,
      description:
        'AI assisted crypto research for Australians, market data, charts, watchlists and learning resources in one clear workspace.',
    },
    {
      '@type': 'Organization',
      name: 'Ausie Trader AI',
      url: `${SITE}/`,
      logo: `${SITE}/favicon.svg`,
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${manrope.variable} ${jakarta.variable}`}>
      <body>
        <SitePreloads />
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_SCHEMA) }}
        />

        {/* Analytics is fetched once the page is idle so the tag never competes
            with the document for bandwidth or main-thread time. */}
        <Script
          id="ga-lib"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZLBTPP0HF3"
          strategy="lazyOnload"
        />
        <Script id="ga-init" strategy="lazyOnload">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZLBTPP0HF3');
        `}</Script>
      </body>
    </html>
  )
}
