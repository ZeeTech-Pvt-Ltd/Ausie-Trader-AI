// Small reusable UI primitives shared across sections.
import Link from 'next/link';

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

export function Button({ variant = 'primary', size, href, children, ...rest }) {
  const cls = ['btn', `btn--${variant}`];
  if (size) cls.push(`btn--${size}`);

  // Internal paths use the router; hash links and external URLs stay anchors.
  if (href && href.startsWith('/') && !href.startsWith('//')) {
    return (
      <Link href={href} className={cls.join(' ')} {...rest}>
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
