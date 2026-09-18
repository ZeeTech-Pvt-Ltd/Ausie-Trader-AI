import PageHeader from '../components/PageHeader.jsx';

export default function RiskDisclosurePage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Risk Disclosure"
        sub="Important information about the risks involved in researching and trading digital assets."
      />

      <section className="legal">
        <div className="container">
          <div className="legal__body" data-reveal>
            <p className="legal__updated">Last updated: September 2026</p>

            <h2>1. General risk warning</h2>
            <p>
              Trading and investing in digital assets involves significant risk. The value of
              cryptocurrencies and other digital assets can be highly volatile, and you may lose some
              or all of the money you invest. Past performance is not a reliable indicator of future
              results.
            </p>

            <h2>2. No financial advice</h2>
            <p>
              Ausie Trader AI is a research and information platform. Nothing on this website is
              intended as personal financial advice, and we do not provide personal financial product
              advice under the Corporations Act 2001 (Cth). All information is general in nature and
              may not suit your individual circumstances.
            </p>

            <h2>3. No guarantees</h2>
            <p>
              We do not guarantee any returns, profits or outcomes. Any figures, examples or signals
              shown on the platform are illustrative only and are not a promise or prediction of what
              you will achieve.
            </p>

            <h2>4. Market volatility</h2>
            <p>
              Digital asset markets can move quickly and unexpectedly. Prices can change by large
              amounts in a short time, and markets may also experience periods of low liquidity,
              which can make it harder to buy or sell at your desired price.
            </p>

            <h2>5. Your responsibility</h2>
            <p>
              You are solely responsible for your own decisions. Before trading or investing, you
              should consider your own financial situation, objectives and risk tolerance, and
              conduct your own research.
            </p>

            <h2>6. Seek professional advice</h2>
            <p>
              If you are unsure about whether any product or strategy is suitable for you, we
              encourage you to seek independent advice from a licensed financial adviser or other
              qualified professional.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
