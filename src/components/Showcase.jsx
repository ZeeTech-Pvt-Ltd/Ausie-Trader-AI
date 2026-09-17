import { SectionHead } from './ui.jsx';

const ROWS = [
  { icon: 'btc', name: 'Bitcoin', price: '$61,240', change: '+2.4%', tone: 'up', pill: 'Bullish', pillTone: 'up' },
  { icon: 'eth', name: 'Ethereum', price: '$3,118', change: '+3.1%', tone: 'up', pill: 'Bullish', pillTone: 'up' },
  { icon: 'gold', name: 'Gold', price: '$2,402', change: '+0.8%', tone: 'up', pill: 'Neutral', pillTone: 'neutral' },
];

const SYMBOLS = { btc: '₿', eth: '◆', gold: '●' };

export default function Showcase() {
  return (
    <section className="showcase" aria-labelledby="showcase-heading">
      <div className="container">
        <SectionHead
          eyebrow="Inside the workspace"
          title="Everything you research, in one clear view"
          sub="Market scanning, watchlists, charts and daily summaries — arranged so the important stuff is always a click away."
        />

        <div className="showcase__frame" data-reveal>
          <div className="showcase__dash">
            <div className="sd-sidebar">
              <span className="sd-logo">ATA</span>
              <nav className="sd-nav" aria-hidden="true">
                <i className="on" /><i /><i /><i /><i />
              </nav>
              <span className="sd-avatar">JD</span>
            </div>
            <div className="sd-main">
              <div className="sd-top">
                <div>
                  <h3>My research workspace</h3>
                  <p>Illustrative sample — here's your market snapshot</p>
                </div>
                <div className="sd-range">
                  <button type="button">1D</button>
                  <button type="button" className="on">1W</button>
                  <button type="button">1M</button>
                  <button type="button">1Y</button>
                </div>
              </div>
              <div className="sd-cards">
                <div className="sd-kpi">
                  <span>Total Value</span>
                  <strong>$128,540.00</strong>
                  <b className="up">+$2,310 (1.8%)</b>
                </div>
                <div className="sd-kpi">
                  <span>AI Confidence</span>
                  <strong>High</strong>
                  <b>Across 6 of 8 signals</b>
                </div>
                <div className="sd-kpi">
                  <span>Watchlist</span>
                  <strong>12 assets</strong>
                  <b>3 trending up</b>
                </div>
              </div>
              <div className="sd-chart">
                <svg viewBox="0 0 640 220" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="sd-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#1868d9" stopOpacity="0.3" />
                      <stop offset="1" stopColor="#1868d9" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g stroke="rgba(255,255,255,0.06)">
                    <line x1="0" y1="55" x2="640" y2="55" />
                    <line x1="0" y1="110" x2="640" y2="110" />
                    <line x1="0" y1="165" x2="640" y2="165" />
                  </g>
                  <path d="M0,180 C60,170 90,190 140,150 C190,110 220,140 280,116 C340,92 370,120 430,88 C490,56 520,80 580,52 C600,42 620,46 640,30 L640,220 L0,220 Z" fill="url(#sd-area)" />
                  <path d="M0,180 C60,170 90,190 140,150 C190,110 220,140 280,116 C340,92 370,120 430,88 C490,56 520,80 580,52 C600,42 620,46 640,30" fill="none" stroke="#1868d9" strokeWidth="2.6" strokeLinecap="round" />
                  <circle cx="580" cy="52" r="5" fill="#0d0e0f" stroke="#6fb2fa" strokeWidth="3" />
                </svg>
              </div>
              <div className="sd-table">
                <div className="sd-row sd-row--head">
                  <span>Asset</span><span>Price</span><span>24h</span><span>Signal</span>
                </div>
                {ROWS.map((row) => (
                  <div className="sd-row" key={row.name}>
                    <span className="sd-asset"><i className={`c-${row.icon}`}>{SYMBOLS[row.icon]}</i>{row.name}</span>
                    <span>{row.price}</span>
                    <span className={row.tone}>{row.change}</span>
                    <span className={`sd-pill ${row.pillTone}`}>{row.pill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* floating circular visuals */}
          <div className="showcase__orbit showcase__orbit--btc" aria-hidden="true">
            <svg viewBox="0 0 96 96">
              <defs>
                <linearGradient id="s-btc" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#f4d95b" />
                  <stop offset="1" stopColor="#d9ab08" />
                </linearGradient>
              </defs>
              <circle cx="48" cy="48" r="46" fill="url(#s-btc)" />
              <text x="48" y="60" textAnchor="middle" fontSize="30" fontWeight="700" fill="#0d0e0f" fontFamily="Plus Jakarta Sans, sans-serif">₿</text>
            </svg>
          </div>
          <div className="showcase__orbit showcase__orbit--chart" aria-hidden="true">
            <svg viewBox="0 0 96 96">
              <rect width="96" height="96" rx="48" fill="#0d0e0f" />
              <circle cx="48" cy="48" r="36" fill="none" stroke="#3f3f3f" strokeWidth="2" />
              <path d="M22 58 C34 52 42 62 54 48 C64 37 70 44 76 34" fill="none" stroke="#1868d9" strokeWidth="2.4" strokeLinecap="round" />
              <circle cx="76" cy="34" r="3.4" fill="#6fb2fa" />
            </svg>
          </div>
          <div className="showcase__float showcase__float--trend" aria-hidden="true">
            <span className="sf-icon">▲</span>
            <div><span>Trend Indicator</span><b className="up">Strong upward</b></div>
          </div>
          <div className="showcase__float showcase__float--value" aria-hidden="true">
            <span>Portfolio Value</span>
            <strong>$128,540</strong>
            <b className="up">▲ 1.8% this week</b>
          </div>
        </div>
      </div>
    </section>
  );
}
