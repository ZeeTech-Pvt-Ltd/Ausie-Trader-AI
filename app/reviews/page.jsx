import { pageMetadata } from '@/lib/metadata.js'
import ReviewsPage from '@/components/ReviewsPage.jsx'

export const metadata = pageMetadata('/reviews')

export default function Page() {
  return <ReviewsPage />
}
