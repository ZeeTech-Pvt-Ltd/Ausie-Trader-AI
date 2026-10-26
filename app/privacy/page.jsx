import { pageMetadata } from '@/lib/metadata.js'
import PrivacyPage from '@/components/PrivacyPage.jsx'

export const metadata = pageMetadata('/privacy')

export default function Page() {
  return <PrivacyPage />
}
