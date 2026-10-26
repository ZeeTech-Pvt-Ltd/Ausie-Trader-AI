'use client'

import { useId } from 'react'
import Link from 'next/link'

export default function Logo({ light = false }) {
  const gradId = useId().replace(/:/g, '')
  return (
    <Link className={`brand${light ? ' brand--light' : ''}`} href="/" aria-label="Ausie Trader AI, home">
      <span className="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="30" height="30">
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#0369fb" />
              <stop offset="1" stopColor="#1868d9" />
            </linearGradient>
          </defs>
          <rect width="32" height="32" rx="9" fill={`url(#${gradId})`} />
          <path d="M6.5 21 L12.5 14 L16.5 17.5 L25.5 7.5" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="25.5" cy="7.5" r="2.6" fill="#fff" />
        </svg>
      </span>
      <span className="brand__text">
        Ausie Trader <em>AI</em>
      </span>
    </Link>
  )
}
