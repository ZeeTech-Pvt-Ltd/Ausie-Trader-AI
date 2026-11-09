import Link from 'next/link';
import PageHeader from './PageHeader.jsx';
import Faq from './Faq.jsx';
import { CONTACT_INFO } from '../data/content.js';

export default function FaqPage() {
  return (
    <>
      <PageHeader
        dark
        center
        eyebrow="Help centre"
        title="Frequently Asked Questions"
        sub="Straight answers about Trader AI: what the platform is, who it's for, how registration works and how we look after your information."
      />
      <Faq heading={false} />

      <section className="faq-cta">
        <div className="container">
          <div className="faq-cta__card faq-cta__card--brand" data-reveal>
            <h2>Can't Find Your Answer?</h2>
            <p>
              Send us a message and our team will get back to you during business hours
              (Monday to Friday). We're happy to help.
            </p>
            <div className="faq-cta__actions">
              <a className="btn btn--outline" href={`mailto:${CONTACT_INFO.email}`}>Email support</a>
              <Link className="btn btn--primary" href="/contact">Go to the contact page</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
