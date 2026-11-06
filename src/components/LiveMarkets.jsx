'use client'

import { useEffect, useRef } from 'react'

const WIDGET_CONFIG = {
  symbolsGroups: [
    {
      name: 'Crypto',
      originalName: 'Crypto',
      symbols: [
        { name: 'COINBASE:BTCUSD', displayName: 'Bitcoin' },
        { name: 'COINBASE:ETHUSD', displayName: 'Ethereum' },
        { name: 'COINBASE:SOLUSD', displayName: 'Solana' },
        { name: 'COINBASE:XRPUSD', displayName: 'XRP' },
      ],
    },
  ],
  width: '100%',
  height: 300,
  locale: 'en',
  colorTheme: 'light',
  isTransparent: true,
  showSymbolLogo: true,
}

export default function LiveMarkets() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.innerHTML = ''

    const widget = document.createElement('div')
    widget.className = 'tradingview-widget-container__widget'
    container.appendChild(widget)

    const script = document.createElement('script')
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify(WIDGET_CONFIG)
    container.appendChild(script)

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return (
    <div className="showcase__live">
      <div className="showcase__live-head">
        <span className="showcase__live-badge">
          <i aria-hidden="true" />
          Live Market Prices
        </span>
        <span className="showcase__live-source">Source: TradingView</span>
      </div>

      <div className="showcase__live-widget" ref={containerRef} />

      <p className="showcase__live-note">
        Reference prices only. Not a trading signal or financial advice.
      </p>
    </div>
  )
}
