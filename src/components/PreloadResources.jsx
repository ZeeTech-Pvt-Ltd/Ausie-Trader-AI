'use client'

import ReactDOM from 'react-dom'

// The country picker loads small flag images from flagcdn.com. Connecting
// while the rest of the page is still parsing saves a round trip when the
// visitor reaches the form.
export function SitePreloads() {
  ReactDOM.preconnect('https://flagcdn.com', { crossOrigin: 'anonymous' })
  return null
}

// The hero shot is the LCP element on the homepage. Preload it with the same
// responsive candidates the <img> uses, so the browser starts the right file
// before the document has been fully parsed.
export function HeroPreload() {
  ReactDOM.preload('/herosection-720.webp', {
    as: 'image',
    type: 'image/webp',
    fetchPriority: 'high',
    imageSrcSet:
      '/herosection-480.webp 480w, /herosection-720.webp 720w, /herosection.webp 1448w',
    imageSizes:
      '(max-width: 640px) calc(100vw - 40px), (max-width: 1080px) calc(100vw - 56px), 1374px',
  })
  return null
}
