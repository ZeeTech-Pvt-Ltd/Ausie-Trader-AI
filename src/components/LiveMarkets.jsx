'use client'

import { useEffect, useState } from 'react'

const ASSETS = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin' },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum' },
  { id: 'solana', symbol: 'SOL', name: 'Solana' },
  { id: 'ripple', symbol: 'XRP', name: 'XRP' },
]

const ENDPOINT =
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,ripple&vs_currencies=usd&include_24hr_change=true'

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
})

const smallUsd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 4,
})

const formatPrice = (value) => (value >= 1 ? usd.format(value) : smallUsd.format(value))

export default function LiveMarkets() {
  const [status, setStatus] = useState('loading')
  const [rows, setRows] = useState([])
  const [updatedAt, setUpdatedAt] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10000)
    let cancelled = false

    async function load() {
      try {
        const response = await fetch(ENDPOINT, { signal: controller.signal })
        if (!response.ok) throw new Error('Request failed')
        const data = await response.json()
        if (cancelled) return

        const nextRows = ASSETS.map((asset) => {
          const quote = data[asset.id]
          if (!quote || typeof quote.usd !== 'number') return null
          return {
            ...asset,
            price: quote.usd,
            change: typeof quote.usd_24h_change === 'number' ? quote.usd_24h_change : null,
          }
        }).filter(Boolean)

        if (!nextRows.length) throw new Error('No prices returned')

        setRows(nextRows)
        setUpdatedAt(
          new Date().toLocaleTimeString('en-AU', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'UTC',
          })
        )
        setStatus('ready')
      } catch {
        if (!cancelled) setStatus('error')
      } finally {
        clearTimeout(timeout)
      }
    }

    load()

    return () => {
      cancelled = true
      clearTimeout(timeout)
      controller.abort()
    }
  }, [])

  return (
    <div className="showcase__live" aria-live="polite">
      <div className="showcase__live-head">
        <span className={`showcase__live-badge${status === 'error' ? ' is-offline' : ''}`}>
          <i aria-hidden="true" />
          {status === 'ready'
            ? 'Live Reference Prices'
            : status === 'error'
              ? 'Live Prices Unavailable'
              : 'Loading Live Prices'}
        </span>
        <span className="showcase__live-source">
          {status === 'ready' && updatedAt
            ? `Source: CoinGecko, USD prices, updated ${updatedAt} UTC`
            : 'Source: CoinGecko'}
        </span>
      </div>

      {status === 'error' ? (
        <p className="showcase__live-error">
          Live prices are unavailable right now. Please try again later.
        </p>
      ) : (
        <ul className="showcase__live-list">
          {ASSETS.map((asset) => {
            const row = rows.find((item) => item.id === asset.id)
            return (
              <li className="showcase__live-item" key={asset.id}>
                <span className="showcase__live-symbol">
                  {asset.symbol}
                  <span className="showcase__live-name">{asset.name}</span>
                </span>
                {status === 'ready' && row ? (
                  <>
                    <span className="showcase__live-price">{formatPrice(row.price)}</span>
                    {row.change !== null && (
                      <span className={`showcase__live-change ${row.change >= 0 ? 'up' : 'down'}`}>
                        {row.change >= 0 ? '▲' : '▼'} {Math.abs(row.change).toFixed(2)}%
                      </span>
                    )}
                  </>
                ) : (
                  <span className="showcase__live-loading">Loading</span>
                )}
              </li>
            )
          })}
        </ul>
      )}

      <p className="showcase__live-note">
        Reference prices only. Not a trading signal or financial advice.
      </p>
    </div>
  )
}
