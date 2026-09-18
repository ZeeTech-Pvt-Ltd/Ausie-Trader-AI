import { Button, Eyebrow } from '../components/ui.jsx';

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  story: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  focus: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80',
};

const BADGES = ['Made in Australia', 'No credit card to start', 'Education included'];

const PILLARS = [
  {
    title: 'AI-assisted scanning',
    desc: 'Tools that watch price action across exchanges and flag unusual moves and gaps, so you always know where to look closer.',
  },
  {
    title: 'Education, not promises',
    desc: 'Guides written for real beginners, from your first wallet to advanced research. We teach how markets work; we never guarantee outcomes.',
  },
  {
    title: 'Security by design',
    desc: 'Sign-up only asks for basic contact details. No credit card, no wallet keys and no passwords, that stays between you and your providers.',
  },
];

const VALUES = [
  { num: '01', title: 'Clarity over complexity', desc: 'If an explanation needs an explanation, we rewrite it. Markets are complicated enough.' },
  { num: '02', title: 'Evidence over hype', desc: 'We show the data and the reasoning, and we clearly label what is opinion versus fact.' },
  { num: '03', title: 'Education first', desc: 'We’d rather you learn to fish than be handed a fish, especially when money is involved.' },
  { num: '04', title: 'Honesty & accountability', desc: 'No guaranteed returns, no pressure tactics, and clear risk disclosure on every example we show.' },
];

export default function AboutPage() {
  return (
    <>
      {/* About hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__grid">
            <div className="about-hero__copy" data-reveal>
              <Eyebrow light>About Us</Eyebrow>
              <h1 className="about-hero__title">Research that helps you decide, not guess.</h1>
              <p className="about-hero__sub">
                Ausie Trader AI is an Australian platform that pairs AI-assisted market scanning
                with plain-English education. We help everyday people research Bitcoin, Ethereum and
                60+ other cryptocurrencies with clearer context, no hype, no noise, no shortcuts.
              </p>
              <ul className="about-hero__badges">
                {BADGES.map((badge) => (
                  <li key={badge}>{badge}</li>
                ))}
              </ul>
              <div className="about-hero__cta">
                <Button variant="primary" size="lg" to="/contact">Create your account</Button>
                <Button variant="ghost" size="lg" to="/">Explore the platform</Button>
              </div>
            </div>
            <div className="about-hero__media" data-reveal>
              <img
                src={IMAGES.hero}
                alt="Two people collaborating around a laptop at a shared table"
                width={1200}
                height={800}
                fetchpriority="high"
              />
              <span className="about-hero__tag">Evidence over hype</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="about-story">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__media" data-reveal>
              <img
                src={IMAGES.story}
                alt="Laptop screen showing market analytics charts"
                width={900}
                height={600}
                loading="lazy"
              />
            </div>
            <div className="about-story__copy" data-reveal>
              <Eyebrow>Our story</Eyebrow>
              <h2 className="h2">We got tired of guessing.</h2>
              <p>
                Ausie Trader AI started with a simple observation: most people don't have a crypto
                problem, they have an information problem. Between jargon, hype and contradictory
                advice, finding a straight answer about a digital asset can feel like a second job.
              </p>
              <p>
                So we set out to build the research layer we wished existed: a single workspace that
                scans the market for you, explains what changed in plain language, and points you to
                the education to go deeper, at your own pace, on your own terms.
              </p>
              <ul className="about-story__bullets">
                <li>Market scanning, alerts and guides in one calm workspace.</li>
                <li>Built for Australians, with Australian support hours.</li>
                <li>No advice robots, no guaranteed returns, just clearer information.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Three things */}
      <section className="about-focus">
        <div className="container">
          <div className="section-head" data-reveal>
            <Eyebrow>What we focus on</Eyebrow>
            <h2 className="h2">Three things, done properly.</h2>
          </div>

          <div className="about-focus__grid">
            <div className="about-focus__pillars">
              {PILLARS.map((pillar, i) => (
                <article className="about-pillar" data-reveal key={pillar.title}>
                  <span className="about-pillar__num">0{i + 1}</span>
                  <h3 className="about-pillar__title">{pillar.title}</h3>
                  <p className="about-pillar__desc">{pillar.desc}</p>
                </article>
              ))}
            </div>
            <div className="about-focus__media" data-reveal>
              <img
                src={IMAGES.focus}
                alt="Colleagues reviewing charts together in a boardroom"
                width={1000}
                height={750}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The way we work */}
      <section className="about-values">
        <div className="container">
          <div className="section-head" data-reveal>
            <Eyebrow>What we value</Eyebrow>
            <h2 className="h2">The way we work</h2>
          </div>

          <div className="about-values__grid">
            {VALUES.map((value) => (
              <article className="about-value" data-reveal key={value.num}>
                <span className="about-value__num">{value.num}</span>
                <h3 className="about-value__title">{value.title}</h3>
                <p className="about-value__desc">{value.desc}</p>
              </article>
            ))}
          </div>

          <p className="about-values__closing" data-reveal>
            We can't promise returns. Markets don't work that way. We promise clearer information,
            honest disclaimers, and the education to make your own calls with more confidence.
          </p>
        </div>
      </section>
    </>
  );
}
