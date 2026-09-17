import PageHeader from '../components/PageHeader.jsx';

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        sub="The terms that apply when you use the Ausie Trader AI platform and website."
      />

      <section className="legal">
        <div className="container">
          <div className="legal__body" data-reveal>
            <p className="legal__updated">Last updated: September 2026</p>

            <h2>1. Acceptance</h2>
            <p>
              By registering for or using Ausie Trader AI, you agree to these terms. If you do not
              agree, please do not use the platform.
            </p>

            <h2>2. What Ausie Trader AI is</h2>
            <p>
              Ausie Trader AI is a market research and information platform. It provides market
              data, AI-assisted analysis, charting and educational resources. It is a research and
              education tool, not a brokerage, trading platform, wallet or investment service.
            </p>

            <h2>3. No financial advice</h2>
            <p>
              Information on the platform is general in nature and does not constitute personal
              financial advice. Ausie Trader AI does not provide personal financial product advice
              under the Corporations Act 2001 (Cth). You should consider your own circumstances and
              seek professional advice where appropriate.
            </p>

            <h2>4. Risk</h2>
            <p>
              Financial markets involve risk, and the value of digital assets can go down as well as
              up. Nothing on the platform guarantees returns or outcomes, and all examples shown are
              illustrative only.
            </p>

            <h2>5. Your account</h2>
            <p>
              You are responsible for the accuracy of the information you provide at registration and
              for keeping your account details up to date.
            </p>

            <h2>6. Changes</h2>
            <p>
              We may update these terms from time to time. Continued use of the platform after
              changes take effect means you accept the updated terms.
            </p>

            <h2>7. Contact</h2>
            <p>
              Questions about these terms? Reach us at{' '}
              <a href="mailto:support@ausietraderai.com">support@ausietraderai.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
