import { pageMetadata } from '@/lib/metadata.js'
import AboutPage from '@/components/AboutPage.jsx'

export const metadata = pageMetadata('/about')

export default function Page() {
  return <AboutPage />
}
