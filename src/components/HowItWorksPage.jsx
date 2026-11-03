import PageHeader from './PageHeader.jsx';
import Steps from './Steps.jsx';
import Platform from './Platform.jsx';
import Features from './Features.jsx';
import Showcase from './Showcase.jsx';
import RiskBand from './RiskBand.jsx';
import LeadForm from './LeadForm.jsx';
import Cta from './Cta.jsx';
import { Eyebrow } from './ui.jsx';

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

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        dark
        center
        eyebrow="How It Works"
        title="From Sign Up to Your First Research Session"
        sub="A clear look at what happens after you register, and how the workspace fits into your research routine."
      />

      <Steps heading={false} />

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

      <Platform />
      <Features />
      <Showcase />
      <RiskBand />
      <LeadForm />
      <Cta />
    </>
  );
}
