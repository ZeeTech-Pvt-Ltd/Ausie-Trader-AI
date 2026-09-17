import { Eyebrow } from './ui.jsx';
import { TESTIMONIALS } from '../data/content.js';

export default function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="section-head" data-reveal>
          <Eyebrow>What we aim for</Eyebrow>
          <h2 className="h2" id="testimonials-heading">The experience we're building toward</h2>
          <p className="section-sub">
            Three qualities at the heart of the platform — shown as illustrative examples, not
            real customer endorsements.
          </p>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((item) => (
            <figure className="testimonial" data-reveal key={item.label}>
              <blockquote className="testimonial__quote">“{item.quote}”</blockquote>
              <figcaption className="testimonial__meta">
                <span className="testimonial__label">{item.label}</span>
                <span className="testimonial__note">Illustrative example, not a real customer</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
