import PageHeader from '../components/PageHeader.jsx';

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        sub="How we collect, use and protect your personal information when you use Ausie Trader AI."
      />

      <section className="legal">
        <div className="container">
          <div className="legal__body" data-reveal>
            <p className="legal__updated">Last updated: September 2026</p>

            <h2>1. Information we collect</h2>
            <p>
              When you register, we ask for basic contact details only: your first name, last name,
              email address and phone number. We do not ask for passwords, credit card details or
              other sensitive financial information during sign-up.
            </p>

            <h2>2. How we use your information</h2>
            <p>
              We use your details to set up and run your account, to communicate with you about the
              platform, and to provide the market research tools and educational resources you have
              requested.
            </p>

            <h2>3. What we do not do</h2>
            <p>
              We do not sell your personal information, and we do not use your details for purposes
              unrelated to the platform without your consent.
            </p>

            <h2>4. Security</h2>
            <p>
              We follow modern security and privacy practices to keep your information protected,
              and we only retain data for as long as it is reasonably needed to provide the service.
            </p>

            <h2>5. Your rights</h2>
            <p>
              You may request access to, or correction of, the personal information we hold about
              you at any time by contacting our team. We will respond during Australian business
              hours.
            </p>

            <h2>6. Contact</h2>
            <p>
              Questions about this policy? Reach us at{' '}
              <a href="mailto:support@ausietraderai.com">support@ausietraderai.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
