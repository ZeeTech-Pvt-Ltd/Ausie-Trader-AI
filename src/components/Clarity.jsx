import { Eyebrow } from './ui.jsx';
import { CLARITY_POINTS } from '../data/content.js';

export default function Clarity() {
  return (
    <section className="clarity" id="clarity" aria-labelledby="clarity-heading">
      <div className="container">
        <div className="clarity__grid">
          <div className="clarity__copy" data-reveal>
            <Eyebrow>Why Ausie Trader AI</Eyebrow>
            <h2 className="h2" id="clarity-heading">Built for Clarity, Not Complexity</h2>
            <p>
              Financial markets are full of noise. We focus on presenting information in a way that
              is easy to scan, simple to understand and genuinely useful for your own research,
              without jargon, pressure or promises.
            </p>
            <p>
              Whether you're new to crypto or refining an existing routine, the goal is the same: a
              calmer, more informed way to explore market information.
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
