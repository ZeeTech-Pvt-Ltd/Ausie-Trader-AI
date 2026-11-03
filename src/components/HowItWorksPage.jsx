import Link from 'next/link';
import PageHeader from './PageHeader.jsx';
import { Eyebrow, SectionHead } from './ui.jsx';

const STAGES = [
  {
    num: '01',
    title: 'Create Your Account',
    desc: "Tell us who you are and confirm the Privacy Policy and Terms. There's no card, no password and no wallet key at this stage.",
    points: ['Name, email and phone.', 'No card details or wallet keys.', 'A few minutes to complete.'],
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5 20c.8-3.2 3.4-5 7-5s6.2 1.8 7 5" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Set Up Your Workspace',
    desc: "Once you're in, choose the assets you want to follow and arrange the research tools you use most.",
    points: ['Build a watchlist.', 'Open charts and market summaries.', 'Keep everything in one organised workspace.'],
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <rect x="4" y="4" width="7" height="7" rx="1.6" />
        <rect x="13" y="4" width="7" height="7" rx="1.6" />
        <rect x="4" y="13" width="7" height="7" rx="1.6" />
        <rect x="13" y="13" width="7" height="7" rx="1.6" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Research at Your Own Pace',
    desc: 'Use the workspace to scan market data, read summaries and learn more about the assets you follow. Nothing trades for you.',
    points: ['Review the information in your own time.', 'Use the learning resources when you want more context.', 'You decide whether and how to act on the information.'],
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V5M4 19h16" />
        <path d="M7 15l4-4 3 2 4-6" />
      </svg>
    ),
  },
];

const START_ITEMS = [
  {
    title: 'An email address',
    desc: 'We use it to confirm your request and send the next steps.',
  },
  {
    title: 'A phone number',
    desc: 'So our team can reach you if there is a question about your account.',
  },
  {
    title: 'A few minutes',
    desc: 'The form is short. No passwords, card details or wallet keys.',
  },
];

const SETUP_ROWS = [
  { title: 'Contact Details', desc: 'Name, email and phone' },
  { title: 'Country Code', desc: 'Selected beside the phone field' },
  { title: 'Your Consent', desc: 'Privacy Policy and Terms' },
];

const PROCESS_QUESTIONS = [
  {
    q: 'How Long Does Registration Take?',
    a: 'A few minutes. We ask for your name, email and phone, and you confirm the Privacy Policy and Terms.',
  },
  {
    q: 'Do I Need to Add Funds?',
    a: "No. Ausie Trader AI is a research platform, not a brokerage. We don't ask for card details or wallet keys, and we don't hold or manage funds.",
  },
  {
    q: 'Do I Need Trading Experience?',
    a: 'No. The workspace is built to be approachable, with learning resources for every level.',
  },
  {
    q: 'Does the AI Trade for Me?',
    a: 'No. It provides research, analysis and insights. You decide whether and how to trade.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        dark
        center
        eyebrow="How It Works"
        title="From Sign Up to Your First Research Session"
        sub="Three clear stages, a workspace that keeps your research organised, and no surprises about what the platform does."
      />

      <section className="hiw-stages" aria-label="The Three Stages">
        <div className="container">
          <SectionHead
            eyebrow="The Three Stages"
            title="What Happens at Each One"
            sub="Registration is short. The workspace is yours to shape. Every decision after that stays with you."
          />
          <div className="hiw-stages__grid">
            {STAGES.map((stage) => (
              <article className="hiw-stage" data-reveal key={stage.title}>
                <div className="hiw-stage__head">
                  <span className="hiw-stage__num">{stage.num}</span>
                  <span className="hiw-stage__visual" aria-hidden="true">{stage.icon}</span>
                </div>
                <h3 className="hiw-stage__title">{stage.title}</h3>
                <p className="hiw-stage__desc">{stage.desc}</p>
                <ul className="hiw-stage__list">
                  {stage.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="start-kit" aria-labelledby="start-kit-heading">
        <div className="container">
          <div className="start-kit__grid">
            <div className="start-kit__copy" data-reveal>
              <Eyebrow>What You Need</Eyebrow>
              <h2 className="h2" id="start-kit-heading">Three Things, Nothing More</h2>
              <p className="section-sub">
                You don't need a card, a wallet key or a password to start. Just the basics, so we
                can set up your workspace and reach you if there's a question.
              </p>
              <ul className="start-kit__list">
                {START_ITEMS.map((item) => (
                  <li key={item.title}>
                    <b>{item.title}</b>
                    <span>{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="start-kit__visual" data-reveal aria-hidden="true">
              <div className="start-kit__card">
                <div className="start-kit__card-head">
                  <span>Your Setup</span>
                  <span className="start-kit__pill">Ready When You Are</span>
                </div>
                <ul className="setup-list">
                  {SETUP_ROWS.map((row) => (
                    <li key={row.title}>
                      <span className="setup-check">✓</span>
                      <div>
                        <b>{row.title}</b>
                        <span>{row.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="setup-note">No card details. No wallet keys. No passwords at sign up.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hiw-ai" aria-labelledby="hiw-ai-heading">
        <div className="container">
          <div className="hiw-ai__grid">
            <div className="hiw-ai__copy" data-reveal>
              <Eyebrow>How the AI Helps</Eyebrow>
              <h2 className="h2" id="hiw-ai-heading">It Scans the Market. You Make the Call.</h2>
              <p className="section-sub">
                The platform scans market data and puts the changes worth noticing in front of you.
                It provides research, analysis and insights, not trade execution. It doesn't decide
                for you, doesn't place trades or move money, and you decide whether and how to act
                on what you read.
              </p>

              <div className="hiw-ai__split">
                <div>
                  <h3>What It Does</h3>
                  <ul className="hiw-ai__list">
                    <li>Scans market data across the assets you follow.</li>
                    <li>Shows charts, summaries and watchlists in one workspace.</li>
                    <li>Points you to learning resources for more context.</li>
                  </ul>
                </div>
                <div>
                  <h3>What It Doesn't Do</h3>
                  <ul className="hiw-ai__list hiw-ai__list--no">
                    <li>It doesn't place trades, move money or hold funds.</li>
                    <li>It doesn't give personal financial advice.</li>
                    <li>It doesn't promise returns.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="hiw-flow" aria-hidden="true" data-reveal>
              <div className="hiw-flow__step">
                <span className="hiw-flow__icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19V5M4 19h16" />
                    <path d="M7 15l3-3 3 2 4-6" />
                  </svg>
                </span>
                <div>
                  <b>Market Data</b>
                  <span>Prices, charts and market information.</span>
                </div>
              </div>
              <span className="hiw-flow__arrow">↓</span>
              <div className="hiw-flow__step">
                <span className="hiw-flow__icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M17.7 6.3l-2.1 2.1M8.4 15.6l-2.1 2.1" />
                  </svg>
                </span>
                <div>
                  <b>AI Scan</b>
                  <span>The platform looks for changes worth noticing.</span>
                </div>
              </div>
              <span className="hiw-flow__arrow">↓</span>
              <div className="hiw-flow__step">
                <span className="hiw-flow__icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="8" />
                    <path d="m8.5 12 2.3 2.3 4.7-5" />
                  </svg>
                </span>
                <div>
                  <b>Your Decision</b>
                  <span>You review the context and decide what to do next.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hiw-questions" aria-label="Questions About the Process">
        <div className="container">
          <SectionHead eyebrow="Straight Answers" title="Questions About the Process" />
          <div className="hiw-questions__grid">
            {PROCESS_QUESTIONS.map((item) => (
              <article className="hiw-question" data-reveal key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" aria-labelledby="hiw-cta-heading">
        <div className="container">
          <div className="hiw-cta__card" data-reveal>
            <h2 className="hiw-cta__title" id="hiw-cta-heading">Ready to Start Researching?</h2>
            <p className="hiw-cta__lead">
              Registration takes a few minutes. Read the risk disclosure first, then set up your
              workspace.
            </p>
            <div className="hiw-cta__actions">
              <Link className="btn btn--yellow" href="/contact">Create an Account</Link>
              <Link className="btn btn--ghost" href="/risk-disclosure">Read the Risk Disclosure</Link>
            </div>
            <p className="hiw-cta__note">No financial advice. No guaranteed returns. Just clearer context.</p>
          </div>
        </div>
      </section>
    </>
  );
}
