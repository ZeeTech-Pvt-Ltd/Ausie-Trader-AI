const ITEMS = [
  'AI Powered Analysis',
  'Paper Trading Included',
  'Learning Resources',
];

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Why people choose Trader AI">
      <div className="container trust-strip__inner">
        {ITEMS.map((item) => (
          <span className="trust-strip__item" key={item}>
            <span className="trust-strip__icon" aria-hidden="true">
              <svg viewBox="0 0 16 16" width="12" height="12">
                <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
