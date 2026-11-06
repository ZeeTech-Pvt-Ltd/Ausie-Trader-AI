import Link from 'next/link';
import Logo from './Logo.jsx';
import { FOOTER_COLS, CONTACT_INFO } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo />
            <p className="footer__tag">
              Research tools for market study.
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div className="footer__col" key={col.heading}>
              <h3 className="footer__heading">{col.heading}</h3>
              {col.links.map((link) =>
                link.to ? (
                  <Link href={link.to} key={link.label}>{link.label}</Link>
                ) : (
                  <a href={link.href} key={link.label}>{link.label}</a>
                )
              )}
            </div>
          ))}

          <div className="footer__col">
            <h3 className="footer__heading">Get In Touch</h3>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
            <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
            <span className="footer__line">{CONTACT_INFO.location}</span>
            <span className="footer__line">{CONTACT_INFO.hours}</span>
          </div>
        </div>

        <div className="footer__disclaimer">
          <p>
            Risk warning: Trading and investing involve risk. Information provided on this website
            is general in nature and does not constitute personal financial advice. Consider your
            circumstances and seek professional advice where appropriate.
          </p>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Trader AI. All rights reserved.</span>
          <span>AI Powered Market Research</span>
        </div>
      </div>
    </footer>
  );
}
