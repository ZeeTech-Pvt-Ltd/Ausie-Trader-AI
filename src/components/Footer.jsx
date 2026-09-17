import { Link } from 'react-router-dom';
import { Logo } from './ui.jsx';
import { FOOTER_COLS, CONTACT_INFO } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo />
            <p className="footer__tag">
              An Australian crypto research platform, built to help you understand digital-asset
              markets and make more informed decisions with AI-assisted scanning, charts and education.
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div className="footer__col" key={col.heading}>
              <h4 className="footer__heading">{col.heading}</h4>
              {col.links.map((link) =>
                link.to ? (
                  <Link to={link.to} key={link.label}>{link.label}</Link>
                ) : (
                  <a href={link.href} key={link.label}>{link.label}</a>
                )
              )}
            </div>
          ))}

          <div className="footer__col">
            <h4 className="footer__heading">Get in touch</h4>
            <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
            <span className="footer__line">{CONTACT_INFO.location}</span>
            <span className="footer__line">{CONTACT_INFO.hours}</span>
          </div>
        </div>

        <div className="footer__disclaimer">
          <p>
            Risk warning: Financial markets involve risk. Information provided on this website is
            general in nature and does not constitute personal financial advice. Consider your
            circumstances and seek professional advice where appropriate. Ausie Trader AI does not
            provide personal financial product advice under the Corporations Act 2001 (Cth). All
            examples shown are illustrative only.
          </p>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Ausie Trader AI. All rights reserved.</span>
          <span>ausietraderai.com</span>
        </div>
      </div>
    </footer>
  );
}
