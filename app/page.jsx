import { pageMetadata } from '@/lib/metadata.js'
import HomePage from '@/components/HomePage.jsx'

export const metadata = pageMetadata('/')

export default function Page() {
  return <HomePage />
}
