import { pageMetadata } from '@/lib/metadata.js'
import ContactPage from '@/components/ContactPage.jsx'

export const metadata = pageMetadata('/contact')

export default function Page() {
  return <ContactPage />
}
