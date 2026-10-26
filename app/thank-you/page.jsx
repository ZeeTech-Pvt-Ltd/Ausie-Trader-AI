import { pageMetadata } from '@/lib/metadata.js'
import ThankYouPage from '@/components/ThankYouPage.jsx'

export const metadata = pageMetadata('/thank-you')

export default function Page() {
  return <ThankYouPage />
}
