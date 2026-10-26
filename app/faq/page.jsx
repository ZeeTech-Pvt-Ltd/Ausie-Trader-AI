import { pageMetadata } from '@/lib/metadata.js'
import FaqPage from '@/components/FaqPage.jsx'
import { FAQS } from '@/data/content.js'

export const metadata = pageMetadata('/faq')

// The accordion is the same content the visitor reads, so the FAQPage schema
// is built from the one source of truth rather than duplicated by hand.
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <FaqPage />
    </>
  )
}
