import { Button } from './ui.jsx';

export default function Cta() {
  return (
    <section className="cta" id="get-started" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta__card" data-reveal>
          <div className="cta__orb cta__orb--1" aria-hidden="true" />
          <div className="cta__orb cta__orb--2" aria-hidden="true" />
          <div className="cta__chip cta__chip--1" aria-hidden="true">▲ Market</div>
          <div className="cta__chip cta__chip--2" aria-hidden="true">AI · On</div>

          <h2 className="cta__title" id="cta-heading">Start Your Research With Trader AI</h2>
          <p className="cta__lead">
            Open your workspace and start with the chart you want to understand.
          </p>
          <Button variant="yellow" size="lg" href="#register">Get Started</Button>
          <p className="cta__note">No financial advice. No guaranteed returns. Research tools only.</p>
        </div>
      </div>
    </section>
  );
}
