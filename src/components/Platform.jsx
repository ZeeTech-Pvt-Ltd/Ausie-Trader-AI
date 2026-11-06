import { Eyebrow, ArrowIcon } from './ui.jsx';
import { PLATFORM_POINTS } from '../data/content.js';

export default function Platform() {
  return (
    <section className="platform" id="platform" aria-labelledby="platform-heading">
      <div className="container">
        <div className="platform__grid">
          <div className="platform__copy" data-reveal>
            <Eyebrow>The Platform</Eyebrow>
            <h2 className="h2" id="platform-heading">What Is Trader AI?</h2>
            <p className="section-sub">
              Trader AI is an AI powered trading analysis platform that brings market research,
              chart analysis, strategy testing, simulated trading and market monitoring tools
              together in one workspace. Use it to understand market conditions, explore trading
              ideas and evaluate strategies before making your own decisions. The watchlist preview
              shown here is illustrative demo data, not a live market feed.
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

          <figure className="platform__visual platform__shot" data-reveal>
            <img
              src="/images/platform-watchlist-1200.webp"
              srcSet="/images/platform-watchlist-800.webp 800w, /images/platform-watchlist-1200.webp 1200w"
              sizes="(max-width: 900px) calc(100vw - 40px), 560px"
              alt="Watchlist with a market chart and Bitcoin, Ethereum and Solana rows"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
