import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import Faq from '../components/Faq.jsx';
import { CONTACT_INFO } from '../data/content.js';

export default function FaqPage() {
  return (
    <>
      <PageHeader
        dark
        eyebrow="Help centre"
        title="Frequently asked questions"
        sub="Straight answers about Ausie Trader AI: what the platform is, who it's for, how registration works and how we look after your information."
      />
      <Faq heading={false} />

      <section className="faq-cta">
        <div className="container">
          <div className="faq-cta__card" data-reveal>
            <h2>Can't find your answer?</h2>
            <p>
              Send us a message and our team will get back to you during Australian business hours
              (Mon–Fri, 9am–5pm AEST). We're happy to help.
            </p>
            <div className="faq-cta__actions">
              <a className="btn btn--outline" href={`mailto:${CONTACT_INFO.email}`}>Email support</a>
              <Link className="btn btn--primary" to="/contact">Go to the contact page</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
