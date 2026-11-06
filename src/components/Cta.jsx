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

          <h2 className="cta__title" id="cta-heading">Start Your Trading Journey With Trader AI</h2>
          <p className="cta__lead">
            Explore trading tools designed to support your research, strategy testing and practice.
            Get started with Trader AI today.
          </p>
          <Button variant="yellow" size="lg" href="#register">Get Started</Button>
          <p className="cta__note">No financial advice. No guaranteed returns. Just clearer context.</p>
        </div>
      </div>
    </section>
  );
}
