import Link from 'next/link';
import { Eyebrow } from './ui.jsx';

const POINTS = [
  'Digital asset prices can fall as well as rise, sometimes quickly.',
  'You can lose some or all of the money you put at risk.',
  'We provide research and education, not personal financial advice.',
  'Past performance does not predict future results.',
];

export default function RiskBand() {
  return (
    <section className="risk-band" id="risk" aria-labelledby="risk-heading">
      <div className="container">
        <div className="risk-band__card" data-reveal>
          <div className="risk-band__copy">
            <Eyebrow light>Before You Register</Eyebrow>
            <h2 className="h2" id="risk-heading">Understand the Risk First</h2>
            <p className="risk-band__lead">
              Crypto markets move fast, and not always in your favour. Before you share your details,
              take a moment to read what that means.
            </p>
            <ul className="risk-band__list">
              {POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link className="btn btn--outline risk-band__link" href="/risk-disclosure">
              Read the Full Risk Disclosure
            </Link>
          </div>

          <div className="risk-band__visual" aria-hidden="true">
            <div className="risk-chart">
              <span className="risk-chart__label">Illustrative example, not live market data</span>
              <svg viewBox="0 0 420 220" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="risk-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#6FB2FA" stopOpacity="0.26" />
                    <stop offset="1" stopColor="#6FB2FA" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <g stroke="rgba(255,255,255,0.10)">
                  <line x1="0" y1="55" x2="420" y2="55" />
                  <line x1="0" y1="110" x2="420" y2="110" />
                  <line x1="0" y1="165" x2="420" y2="165" />
                </g>
                <path
                  d="M0,150 C40,140 60,118 100,116 C140,114 160,74 200,80 C240,86 260,152 300,162 C340,172 370,136 420,146 L420,220 L0,220 Z"
                  fill="url(#risk-area)"
                />
                <path
                  d="M0,150 C40,140 60,118 100,116 C140,114 160,74 200,80 C240,86 260,152 300,162 C340,172 370,136 420,146"
                  fill="none"
                  stroke="#6FB2FA"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="300" cy="162" r="6" fill="#0D0E0F" stroke="#FCC910" strokeWidth="3" />
              </svg>
              <div className="risk-chart__legend">
                <span>Value over time</span>
                <span className="risk-chart__down">A fall can happen quickly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
