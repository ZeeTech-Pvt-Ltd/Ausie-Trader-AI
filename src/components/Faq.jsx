'use client'

import { useState } from 'react';
import Link from 'next/link';
import { SectionHead } from './ui.jsx';
import { FAQS } from '../data/content.js';

export default function Faq({ heading = true, limit, moreHref }) {
  const [open, setOpen] = useState(0);
  const items = typeof limit === 'number' ? FAQS.slice(0, limit) : FAQS;

  return (
    <section className={`faq${heading ? '' : ' faq--compact'}`} id="faq" aria-label="Frequently asked questions">
      <div className="container">
        {heading && <SectionHead eyebrow="FAQ" title="Questions, Answered" />}

        <div className="faq__list" data-reveal>
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item${isOpen ? ' open' : ''}`} key={item.q}>
                <button
                  type="button"
                  className="faq-item__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-item__icon" aria-hidden="true" />
                </button>
                <div className="faq-item__a" hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {moreHref && (
          <div className="faq__more">
            <Link className="btn btn--outline" href={moreHref}>Read All FAQs</Link>
          </div>
        )}
      </div>
    </section>
  );
}
