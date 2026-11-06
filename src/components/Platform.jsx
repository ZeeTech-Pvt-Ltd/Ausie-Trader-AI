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
              Trader AI is a research workspace for people who follow crypto markets. The
              watchlist, chart panel, strategy tester and paper trading mode share one screen, so
              you can move from a hunch to a tested idea. The preview shown here is illustrative
              demo data, not a live market feed.
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
