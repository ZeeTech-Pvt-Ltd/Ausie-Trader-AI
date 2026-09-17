import { Button, ArrowIcon } from './ui.jsx';

const META = [
  { value: '60+', label: 'Assets tracked' },
  { value: '24/7', label: 'Access' },
  { value: '6+', label: 'Core tools' },
];

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--light" data-hero="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Smart tools for modern markets
          </p>

          <h1 className="hero__title">
            <span className="hero__line" data-hero="line1">See the Market</span>
            <span className="hero__line hero__line--accent" data-hero="line2">With Clearer Context</span>
          </h1>

          <p className="hero__lead" data-hero="lead">
            AI-assisted market scanning, clear charts and honest education — everything Australians
            need to research Bitcoin, Ethereum and 60+ other cryptocurrencies with less guesswork
            and more confidence.
          </p>

          <div className="hero__cta" data-hero="cta">
            <Button variant="primary" size="lg" href="#platform">Explore the Platform</Button>
            <Button variant="ghost" size="lg" href="#how-it-works">
              How It Works
              <ArrowIcon />
            </Button>
          </div>

          <div className="hero__meta" data-hero="meta">
            {META.map((item) => (
              <div className="hero__meta-item" key={item.label}>
                <span className="hero__meta-value">{item.value}</span>
                <span className="hero__meta-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <img
            src="/herosection.webp"
            alt=""
            width="1448"
            height="1086"
            loading="eager"
            fetchpriority="high"
            data-hero="dash"
            className="hero__img"
          />
        </div>
      </div>

      <div className="hero__curve" aria-hidden="true" />
    </section>
  );
}
