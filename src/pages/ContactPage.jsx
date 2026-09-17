import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import SignupForm from '../components/SignupForm.jsx';
import { CONTACT_INFO } from '../data/content.js';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        dark
        eyebrow="Contact Us"
        title="We're here to help"
        sub="Questions about the platform, your account or our research tools? Our team is available during Australian business hours and happy to point you in the right direction."
      />

      <section className="contact">
        <div className="container">
          <div className="contact__grid">
            <div className="contact__info" data-reveal>
              <h2 className="h3">Reach us directly</h2>
              <p>
                Choose whichever channel suits you. For account or platform questions, the form on
                this page is the fastest way to get started.
              </p>
              <ul className="contact__list">
                <li>
                  <span>Email us</span>
                  <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                </li>
                <li>
                  <span>Based in</span>
                  <b>{CONTACT_INFO.location}</b>
                </li>
                <li>
                  <span>Support hours</span>
                  <b>{CONTACT_INFO.hours}</b>
                </li>
              </ul>
              <p className="contact__note">
                If you're after a quick answer, our <Link to="/faq">FAQ page</Link> covers the most
                common questions.
              </p>

              <div className="contact__risk" data-reveal>
                <h3>Risk disclosure</h3>
                <p>
                  Financial markets involve risk. Information on this website is general in nature
                  and does not constitute personal financial advice. All examples shown are
                  illustrative only.
                </p>
              </div>
            </div>

            <div className="contact__form" data-reveal>
              <SignupForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
