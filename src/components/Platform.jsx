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
              Trader AI supports both manual and automated trading options, allowing users to
              choose their preferred trading approach. Trader AI provides flexible trading tools and
              AI powered insights to help users make informed trading decisions.
            </p>
            <ul className="platform__list">
              {PLATFORM_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a href="#features" className="text-link">
              See how the tools fit together
              <ArrowIcon />
            </a>
          </div>

          <figure className="platform__visual platform__shot" data-reveal>
            <img
              src="/images/platform-watchlist-1200.webp"
              srcSet="/images/platform-watchlist-800.webp 800w, /images/platform-watchlist-1200.webp 1200w"
              sizes="(max-width: 900px) calc(100vw - 40px), 560px"
              alt="Workspace preview with a watchlist, market chart and Bitcoin, Ethereum and Solana rows"
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
