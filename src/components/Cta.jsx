import { Button } from './ui.jsx';

export default function Cta() {
  return (
    <section className="cta" id="get-started" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta__card" data-reveal>
          <div className="cta__orb cta__orb--1" aria-hidden="true" />
          <div className="cta__orb cta__orb--2" aria-hidden="true" />
          <div className="cta__chip cta__chip--1" aria-hidden="true">▲ Bullish</div>
          <div className="cta__chip cta__chip--2" aria-hidden="true">AI · On</div>

          <h2 className="cta__title" id="cta-heading">Start Exploring Smarter Market Tools</h2>
          <p className="cta__lead">See what the market is doing, and understand why it matters. Join Ausie Trader AI today.</p>
          <Button variant="yellow" size="lg" href="#join">Get Started</Button>
          <p className="cta__note">No financial advice. No guaranteed returns. Just clearer context.</p>
        </div>
      </div>
    </section>
  );
}
