import { Eyebrow, ArrowIcon } from './ui.jsx';
import { PLATFORM_POINTS } from '../data/content.js';

const WATCHLIST = [
  { sym: 'BTC', name: 'Bitcoin', change: '+1.4%', up: true },
  { sym: 'ETH', name: 'Ethereum', change: '+0.6%', up: true },
  { sym: 'SOL', name: 'Solana', change: '-0.3%', up: false },
];

export default function Platform() {
  return (
    <section className="platform" id="platform" aria-labelledby="platform-heading">
      <div className="container">
        <div className="platform__grid">
          <div className="platform__copy" data-reveal>
            <Eyebrow>The Platform</Eyebrow>
            <h2 className="h2" id="platform-heading">Everything You Need to Research Crypto Markets</h2>
            <p className="section-sub">
              Ausie Trader AI brings crypto market data, AI-assisted analysis and charting into
              one easy-to-use interface, so you can stop juggling scattered exchanges, news feeds
              and spreadsheets.
            </p>
            <ul className="platform__list">
              {PLATFORM_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a href="#features" className="text-link">
              Explore the features
              <ArrowIcon />
            </a>
          </div>

          <div className="platform__visual" data-reveal aria-hidden="true">
            <div className="platform__card">
              <div className="platform__card-head">
                <span>Watchlist</span>
                <span className="platform__live"><i /> Live</span>
              </div>
              <div className="platform__chart">
                <svg viewBox="0 0 320 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="pl-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#1868d9" stopOpacity="0.28" />
                      <stop offset="1" stopColor="#1868d9" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,92 C24,84 40,96 60,74 C80,52 92,66 112,50 C132,34 148,58 168,42 C188,26 200,40 220,30 C244,18 260,26 286,12 L286,120 L0,120 Z" fill="url(#pl-area)" />
                  <path d="M0,92 C24,84 40,96 60,74 C80,52 92,66 112,50 C132,34 148,58 168,42 C188,26 200,40 220,30 C244,18 260,26 286,12" fill="none" stroke="#1868d9" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </div>
              <div className="platform__rows">
                {WATCHLIST.map((row) => (
                  <div className="platform__row" key={row.sym}>
                    <span className="platform__asset"><i className={`pl-${row.sym}`}>{row.sym.charAt(0)}</i>{row.name}</span>
                    <span className={row.up ? 'up' : 'down'}>{row.change}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="platform__badge">
              <span>60+ assets</span>
              <b>Scanned daily</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
