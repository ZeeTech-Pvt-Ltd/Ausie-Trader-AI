import { SectionHead } from './ui.jsx';
import { STEPS } from '../data/content.js';

const VISUALS = {
  explore: (
    <svg viewBox="0 0 80 56">
      <circle cx="40" cy="28" r="24" fill="rgba(3,105,251,0.10)" />
      <path d="M18 36a24 24 0 0 1 44-16" fill="none" stroke="#1868d9" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="34" r="3.4" fill="#1868d9" />
      <circle cx="62" cy="12" r="3.4" fill="#fcc910" />
    </svg>
  ),
  review: (
    <svg viewBox="0 0 80 56">
      <rect x="16" y="12" width="48" height="32" rx="8" fill="rgba(252,201,16,0.24)" />
      <path d="M24 34l9-9 6 6 11-14" fill="none" stroke="#fcc910" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="17" r="3" fill="#fcc910" />
    </svg>
  ),
  decide: (
    <svg viewBox="0 0 80 56">
      <circle cx="40" cy="28" r="22" fill="rgba(3,105,251,0.10)" />
      <path d="M28 28l8 8 16-16" fill="none" stroke="#1868d9" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function Steps() {
  return (
    <section className="steps" id="how-it-works" aria-labelledby="steps-heading">
      <div className="container">
        <SectionHead
          eyebrow="How It Works"
          title="Up and running in three simple steps"
          sub="No steep learning curve, just a clear path from sign-up to smarter research."
        />

        <div className="steps__grid">
          {STEPS.map((step, i) => (
            <article className={`step step--${i + 1}`} data-reveal key={step.num}>
              <span className="step__num">{step.num}</span>
              <div className="step__visual" aria-hidden="true">{VISUALS[step.visual]}</div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__desc">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
