// Small reusable UI primitives shared across sections.
import { useId } from 'react';
import { Link } from 'react-router-dom';

export function Logo({ light = false }) {
  const gradId = useId().replace(/:/g, '');
  return (
    <Link className={`brand${light ? ' brand--light' : ''}`} to="/" aria-label="Ausie Trader AI, home">
      <span className="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="30" height="30">
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#0369fb" />
              <stop offset="1" stopColor="#1868d9" />
            </linearGradient>
          </defs>
          <rect width="32" height="32" rx="9" fill={`url(#${gradId})`} />
          <path d="M6.5 21 L12.5 14 L16.5 17.5 L25.5 7.5" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="25.5" cy="7.5" r="2.6" fill="#fff" />
        </svg>
      </span>
      <span className="brand__text">
        Ausie Trader <em>AI</em>
      </span>
    </Link>
  );
}

export function Eyebrow({ light = false, children }) {
  return (
    <p className={`eyebrow${light ? ' eyebrow--light' : ' eyebrow--dark'}`}>
      <span className="eyebrow__dot" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHead({ eyebrow, title, sub, split = false }) {
  if (split) {
    return (
      <div className="section-head section-head--split" data-reveal>
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="h2">{title}</h2>
        </div>
        {sub && <p className="section-sub">{sub}</p>}
      </div>
    );
  }
  return (
    <div className="section-head" data-reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="h2">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}

export function Button({ variant = 'primary', size, href, to, children, ...rest }) {
  const cls = ['btn', `btn--${variant}`];
  if (size) cls.push(`btn--${size}`);
  if (to) {
    return (
      <Link to={to} className={cls.join(' ')} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls.join(' ')} {...rest}>
      {children}
    </a>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
