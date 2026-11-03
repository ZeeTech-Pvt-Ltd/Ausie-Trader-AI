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

          <figure className="risk-band__visual risk-band__shot">
            <img
              src="/images/risk-understand-first-1200.webp"
              srcSet="/images/risk-understand-first-800.webp 800w, /images/risk-understand-first-1200.webp 1200w"
              sizes="(max-width: 900px) calc(100vw - 40px), 520px"
              alt="Illustration of an investor reviewing market risk on a laptop"
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
