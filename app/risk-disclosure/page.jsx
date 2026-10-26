import { pageMetadata } from '@/lib/metadata.js'
import RiskDisclosurePage from '@/components/RiskDisclosurePage.jsx'

export const metadata = pageMetadata('/risk-disclosure')

export default function Page() {
  return <RiskDisclosurePage />
}
