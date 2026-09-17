import { Button, ArrowIcon } from './ui.jsx';

const META = [
  { value: '60+', label: 'Assets tracked' },
  { value: '24/7', label: 'Access' },
  { value: '6+', label: 'Core tools' },
];

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--light" data-hero="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Smart tools for modern markets
          </p>

          <h1 className="hero__title">
            <span className="hero__line" data-hero="line1">See the Market</span>
            <span className="hero__line hero__line--accent" data-hero="line2">With Clearer Context</span>
          </h1>

          <p className="hero__lead" data-hero="lead">
            AI-assisted market scanning, clear charts and honest education — everything Australians
            need to research Bitcoin, Ethereum and 60+ other cryptocurrencies with less guesswork
            and more confidence.
          </p>

          <div className="hero__cta" data-hero="cta">
            <Button variant="primary" size="lg" href="#platform">Explore the Platform</Button>
            <Button variant="ghost" size="lg" href="#how-it-works">
              How It Works
              <ArrowIcon />
            </Button>
          </div>

          <div className="hero__meta" data-hero="meta">
            {META.map((item) => (
              <div className="hero__meta-item" key={item.label}>
                <span className="hero__meta-value">{item.value}</span>
                <span className="hero__meta-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hv-stage">
            {/* central trading UI */}
            <div className="hv-dash" data-hero="dash">
              <div className="hv-dash__bar">
                <span className="hv-dash__dots"><i /><i /><i /></span>
                <span className="hv-dash__title">Ausie Trader AI</span>
                <span className="hv-dash__live"><i /> Live</span>
              </div>
              <div className="hv-dash__asset">
                <div>
                  <span className="hv-dash__symbol">BTC / USD</span>
                  <span className="hv-dash__name">Bitcoin</span>
                </div>
                <div className="hv-dash__price">
                  <strong>$61,240.80</strong>
                  <span className="hv-dash__delta">+2.41%</span>
                </div>
              </div>
              <div className="hv-dash__chart">
                <svg viewBox="0 0 320 120" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="hv-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#1868d9" stopOpacity="0.35" />
                      <stop offset="1" stopColor="#1868d9" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path className="hv-dash__area" d="M0,92 C24,84 40,96 60,78 C80,60 92,72 112,58 C132,44 148,62 168,48 C188,34 200,46 220,34 C244,20 260,32 286,18 L286,120 L0,120 Z" fill="url(#hv-area)" />
                  <path className="hv-dash__line" d="M0,92 C24,84 40,96 60,78 C80,60 92,72 112,58 C132,44 148,62 168,48 C188,34 200,46 220,34 C244,20 260,32 286,18" fill="none" stroke="#1868d9" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </div>
              <div className="hv-dash__foot">
                <span className="hv-dash__chip">AI Confidence · <b>High</b></span>
                <span className="hv-dash__chip">Trend · <b className="up">Bullish</b></span>
              </div>
            </div>

            {/* circular bitcoin */}
            <div className="hv-orbit hv-orbit--btc" data-hero="btc">
              <svg viewBox="0 0 120 120">
                <defs>
                  <linearGradient id="btc-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#f4d95b" />
                    <stop offset="1" stopColor="#d9ab08" />
                  </linearGradient>
                </defs>
                <circle cx="60" cy="60" r="58" fill="#0d0e0f" />
                <circle cx="60" cy="60" r="58" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                <circle cx="60" cy="60" r="47" fill="url(#btc-grad)" />
                <circle cx="60" cy="60" r="47" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                <text x="60" y="74" textAnchor="middle" fontSize="44" fontWeight="700" fill="#0d0e0f" fontFamily="Plus Jakarta Sans, sans-serif">₿</text>
              </svg>
            </div>

            {/* circular candlestick chart */}
            <div className="hv-orbit hv-orbit--candle" data-hero="candle">
              <svg viewBox="0 0 120 120">
                <rect width="120" height="120" rx="60" fill="#0d0e0f" />
                <rect width="120" height="120" rx="60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                <g strokeLinecap="round">
                  <line x1="38" y1="42" x2="38" y2="74" stroke="#6fb2fa" strokeWidth="2.5" />
                  <rect x="33" y="48" width="10" height="16" rx="2" fill="#6fb2fa" />
                  <line x1="58" y1="34" x2="58" y2="82" stroke="#e05252" strokeWidth="2.5" />
                  <rect x="53" y="42" width="10" height="24" rx="2" fill="#e05252" />
                  <line x1="78" y1="46" x2="78" y2="70" stroke="#6fb2fa" strokeWidth="2.5" />
                  <rect x="73" y="52" width="10" height="12" rx="2" fill="#6fb2fa" />
                </g>
              </svg>
            </div>

            {/* circular AI analytics */}
            <div className="hv-orbit hv-orbit--ai" data-hero="ai">
              <svg viewBox="0 0 120 120">
                <rect width="120" height="120" rx="60" fill="#0d0e0f" />
                <circle cx="60" cy="60" r="44" fill="none" stroke="rgba(111,178,250,0.25)" strokeWidth="3" />
                <circle cx="60" cy="60" r="44" fill="none" stroke="#6fb2fa" strokeWidth="3" strokeLinecap="round" strokeDasharray="170 106" transform="rotate(-90 60 60)" />
                <circle cx="60" cy="60" r="30" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <text x="60" y="64" textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff" fontFamily="Plus Jakarta Sans, sans-serif">AI</text>
              </svg>
            </div>

            {/* floating portfolio card */}
            <div className="hv-float hv-float--portfolio" data-hero="portfolio">
              <span className="hv-float__label">Portfolio Value</span>
              <strong className="hv-float__value">$128,540</strong>
              <span className="hv-float__delta up">+$2,310 today</span>
              <svg viewBox="0 0 120 34" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,26 C14,24 22,28 34,20 C46,12 56,18 68,14 C82,9 96,12 120,4" fill="none" stroke="#1868d9" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>

            {/* floating market trend card */}
            <div className="hv-float hv-float--trend" data-hero="trend">
              <div className="hv-float__row">
                <span className="hv-float__icon">ETH</span>
                <span className="hv-float__label">Ethereum</span>
                <span className="hv-float__delta up">+3.1%</span>
              </div>
            </div>

            {/* small crypto asset badge */}
            <div className="hv-float hv-float--badge" data-hero="badge">
              <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                <circle cx="10" cy="10" r="10" fill="#6fb2fa" />
                <path d="M10 4l4 10-4-2-4 2z" fill="#fff" />
              </svg>
              <span>Watchlist<br /><b>+12 assets</b></span>
            </div>

            {/* floating mini chart card */}
            <div className="hv-float hv-float--chart" data-hero="chartcard">
              <div className="hv-float__row">
                <span className="hv-float__label">AI Signal</span>
                <span className="hv-float__badge">New</span>
              </div>
              <svg viewBox="0 0 120 34" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,24 C14,26 22,10 34,18 C46,26 56,8 68,12 C80,16 92,8 120,10" fill="none" stroke="#1868d9" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__curve" aria-hidden="true" />
    </section>
  );
}
