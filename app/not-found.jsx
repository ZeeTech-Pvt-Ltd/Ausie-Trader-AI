import { pageMetadata } from '@/lib/metadata.js'
import NotFoundPage from '@/components/NotFoundPage.jsx'

// Next injects <meta name="robots" content="noindex"> for 404 responses on
// its own. Setting robots here as well would emit a second tag, so only the
// title, description and Open Graph block is taken from the shared config.
const base = pageMetadata('404')
const { robots: _robots, ...metadata } = base
export { metadata }

export default function NotFound() {
  return <NotFoundPage />
}
