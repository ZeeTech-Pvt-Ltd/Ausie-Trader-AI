import { Eyebrow } from './ui.jsx';
import { FEATURES, STATS } from '../data/content.js';

const ICONS = {
  monitor: (
    <svg viewBox="0 0 24 24">
      <path d="M3 17l5-5 3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="19" cy="8" r="2" fill="currentColor" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="4" width="8" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="12" width="8" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="4" width="8" height="4" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="14" width="8" height="4" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  insights: (
    <svg viewBox="0 0 24 24">
      <path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  portfolio: (
    <svg viewBox="0 0 24 24">
      <rect x="4" y="3" width="16" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  alerts: (
    <svg viewBox="0 0 24 24">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  ),
};

const SIZE_CLASS = {
  wide: 'feature--wide',
  tall: 'feature--tall',
  half: 'feature--half',
};

export default function Features() {
  return (
    <section className="features" id="features" aria-labelledby="features-heading">
      <div className="container">
        <div className="section-head section-head--split" data-reveal>
          <div>
            <Eyebrow>Core Features</Eyebrow>
            <h2 className="h2" id="features-heading">Designed to make market research clearer</h2>
          </div>
          <p className="section-sub">
            Every feature exists for one reason: to help you access, understand and use market
            information with less effort.
          </p>
        </div>

        <div className="features__grid">
          {FEATURES.map((feature) => (
            <article className={`feature ${SIZE_CLASS[feature.size]}`} data-reveal key={feature.title}>
              <span className={`feature__icon fi-${feature.tone}`} aria-hidden="true">
                {ICONS[feature.icon]}
              </span>
              <h3 className="feature__title">{feature.title}</h3>
              <p className="feature__desc">{feature.desc}</p>
              {feature.size === 'tall' && (
                <div className="feature__mini" aria-hidden="true">
                  <svg viewBox="0 0 200 60" preserveAspectRatio="none">
                    <path d="M0,46 C30,50 44,22 70,34 C96,46 108,16 132,24 C156,32 172,12 200,18" fill="none" stroke="#1868d9" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="stats" data-reveal>
          {STATS.map((stat) => (
            <div className="stat-chip" key={stat.label}>
              <span className="stat-chip__value">{stat.value}</span>
              <span className="stat-chip__label">{stat.label}</span>
            </div>
          ))}
        </div>
        <p className="features__note">
          Figures describe the platform itself rather than trading outcomes. Market results vary
          and are never guaranteed.
        </p>
      </div>
    </section>
  );
}
