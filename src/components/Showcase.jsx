import { Eyebrow } from './ui.jsx';
import LiveMarkets from './LiveMarkets.jsx';

export default function Showcase() {
  return (
    <section className="showcase" aria-labelledby="showcase-heading">
      <div className="container">
        <div className="showcase__grid">
          <div className="showcase__copy" data-reveal>
            <Eyebrow>Market Workspace</Eyebrow>
            <h2 className="h2" id="showcase-heading">Live Market Data</h2>
            <p className="section-sub">
              Live reference prices from TradingView for four major assets.
            </p>
          </div>

          <figure className="showcase__shot" data-reveal>
            <img
              src="/images/showcase-workspace-1200.webp"
              srcSet="/images/showcase-workspace-800.webp 800w, /images/showcase-workspace-1200.webp 1200w"
              sizes="(max-width: 900px) calc(100vw - 40px), 600px"
              alt="Trading analysis workspace with portfolio value, AI confidence, watchlist and a market chart"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <LiveMarkets />
      </div>
    </section>
  );
}
