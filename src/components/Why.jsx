import { Eyebrow } from './ui.jsx';
import { WHY_POINTS } from '../data/content.js';

export default function Why() {
  return (
    <section className="why" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-head" data-reveal>
          <Eyebrow>Why Ausie Trader AI</Eyebrow>
          <h2 className="h2" id="why-heading">Why people use Ausie Trader AI</h2>
        </div>

        <div className="why__grid">
          {WHY_POINTS.map((point, i) => (
            <article className="why-card" data-reveal key={point.title}>
              <span className="why-card__num">0{i + 1}</span>
              <h3 className="why-card__title">{point.title}</h3>
              <p className="why-card__desc">{point.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
