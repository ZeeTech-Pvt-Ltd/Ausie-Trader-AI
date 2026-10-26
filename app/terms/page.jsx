import { pageMetadata } from '@/lib/metadata.js'
import TermsPage from '@/components/TermsPage.jsx'

export const metadata = pageMetadata('/terms')

export default function Page() {
  return <TermsPage />
}
