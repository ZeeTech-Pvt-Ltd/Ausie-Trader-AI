import PageHeader from './PageHeader.jsx';

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        sub="The terms that apply when you use the Trader AI platform and website."
      />

      <section className="legal">
        <div className="container">
          <div className="legal__body" data-reveal>
            <h2>1. Acceptance</h2>
            <p>
              By registering for or using Trader AI, you agree to these terms. If you do not
              agree, please do not use the platform.
            </p>

            <h2>2. What Trader AI is</h2>
            <p>
              Trader AI is a market research and information platform. It provides market
              data, AI assisted analysis, charting and educational resources. It is not a brokerage,
              trading platform, wallet or investment service. It does not execute trades, place buy
              or sell orders, hold or manage funds, or run automated trading strategies. You decide
              whether and how to act on the research and information provided.
            </p>

            <h2>3. No financial advice</h2>
            <p>
              Information on the platform is general in nature and does not constitute personal
              financial advice. Trader AI does not provide personal financial product advice. You
              should consider your own circumstances and seek professional advice where appropriate.
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
              <a href="mailto:support@ausietraderai.com">Contact Support</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
