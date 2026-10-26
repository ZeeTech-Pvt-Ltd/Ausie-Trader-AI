import Link from 'next/link';
import PageHeader from './PageHeader.jsx';

export default function NotFoundPage() {
  return (
    <>
      <PageHeader
        center
        eyebrow="404"
        title="Page Not Found"
        sub="The page you were looking for has moved or no longer exists. Here are a couple of places to pick up from."
      />

      <section className="thankyou">
        <div className="container">
          <div className="thankyou__card" data-reveal>
            <span className="thankyou__icon" aria-hidden="true">?</span>
            <h2>Let's Get You Back on Track</h2>
            <p>
              Check the address for a typo, or use one of the links below. If you followed a link
              from another site, let us know so we can fix it.
            </p>
            <div className="thankyou__actions">
              <Link className="btn btn--primary" href="/">Back to Home</Link>
              <Link className="btn btn--outline" href="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
