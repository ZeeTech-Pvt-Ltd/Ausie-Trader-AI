import { Button, ArrowIcon } from './ui.jsx';
import { HeroPreload } from './PreloadResources.jsx';

const META = [
  { value: '60+', label: 'Assets Tracked' },
  { value: '24/7', label: 'Access' },
  { value: '6+', label: 'Core Tools' },
];

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <HeroPreload />

      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--light" data-hero="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            AI Powered Market Research
          </p>

          <h1 className="hero__title">
            <span className="hero__line" data-hero="line1">Trader AI:</span>{' '}
            <span className="hero__line hero__line--accent" data-hero="line2">AI Powered Trading Analysis Platform</span>
          </h1>

          <p className="hero__lead" data-hero="lead">
            Trader AI brings market information and AI powered analysis together in one platform,
            helping you understand market trends and evaluate opportunities with greater clarity.
          </p>

          <div className="hero__cta" data-hero="cta">
            <Button variant="primary" size="lg" href="#register">Start Researching</Button>
            <Button variant="ghost" size="lg" href="#features">
              Explore Features
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
            srcSet="/herosection-480.webp 480w, /herosection-720.webp 720w, /herosection.webp 1448w"
            sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1080px) calc(100vw - 56px), 1374px"
            alt=""
            width="1448"
            height="1086"
            loading="eager"
            fetchPriority="high"
            data-hero="dash"
            className="hero__img"
          />
        </div>
      </div>
    </section>
  );
}
