import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import { CONTACT_INFO } from '../data/content.js';

export default function ThankYouPage() {
  return (
    <>
      <PageHeader
        center
        eyebrow="Registration received"
        title="Thanks — you're all set!"
        sub="Your account request has been received. Keep an eye on your inbox for next steps."
      />

      <section className="thankyou">
        <div className="container">
          <div className="thankyou__card" data-reveal>
            <span className="thankyou__icon" aria-hidden="true">✓</span>
            <h2>What happens next?</h2>
            <p>
              Our team is reviewing your request. We'll email you shortly with everything you need
              to start exploring the platform.
            </p>
            <ul className="thankyou__list">
              <li>Check your inbox (and spam folder) for a confirmation email.</li>
              <li>We'll set up your workspace and guide you through the basics.</li>
              <li>No passwords or card details were requested — just basic contact info.</li>
            </ul>
            <div className="thankyou__actions">
              <Link className="btn btn--primary" to="/">Back to home</Link>
              <a className="btn btn--outline" href={`mailto:${CONTACT_INFO.email}`}>Email support</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
