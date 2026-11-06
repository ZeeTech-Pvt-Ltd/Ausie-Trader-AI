import { Eyebrow } from './ui.jsx';
import { CLARITY_POINTS } from '../data/content.js';

export default function Clarity() {
  return (
    <section className="clarity" id="security" aria-labelledby="security-heading">
      <div className="container">
        <div className="clarity__grid">
          <div className="clarity__copy" data-reveal>
            <Eyebrow>Trust and Safety</Eyebrow>
            <h2 className="h2" id="security-heading">Security & Trust</h2>
            <p>
              We keep the platform transparent about what it does. Your account details are handled
              with care, and our privacy policy explains what we collect and how it is used.
            </p>
            <p>
              No platform can remove market risk. The tools support your research, testing and
              practice; they do not promise outcomes.
            </p>
          </div>

          <div className="clarity__points">
            {CLARITY_POINTS.map((point) => (
              <div className="clarity-point" data-reveal key={point.title}>
                <span className="clarity-point__dot" aria-hidden="true" />
                <div>
                  <h3 className="clarity-point__title">{point.title}</h3>
                  <p className="clarity-point__desc">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
