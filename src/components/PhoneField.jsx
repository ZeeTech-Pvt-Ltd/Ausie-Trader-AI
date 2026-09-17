import { useEffect, useMemo, useRef, useState } from 'react';
import { COUNTRIES } from '../data/content.js';

// Same flag CDN used by the reference site (flagcdn.com).
const flagUrl = (iso, w = 40) => `https://flagcdn.com/w${w}/${iso.toLowerCase()}.png`;

export default function PhoneField({
  id = 'phone',
  name = 'phone',
  iso,
  onIsoChange,
  value,
  onChange,
  placeholder,
  invalid = false,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(-1);
  const rootRef = useRef(null);
  const searchRef = useRef(null);

  const selected = COUNTRIES.find((c) => c.iso === iso) || COUNTRIES[0];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.iso.toLowerCase().includes(q) ||
        String(c.dial).includes(q.replace(/^\+/, ''))
    );
  }, [query]);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Focus search on open and jump the active item to the current selection.
  useEffect(() => {
    if (!open) return;
    if (searchRef.current) searchRef.current.focus();
    const i = results.findIndex((c) => c.iso === iso);
    setActive(i >= 0 ? i : results.length ? 0 : -1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const select = (nextIso) => {
    onIsoChange(nextIso);
    setOpen(false);
    setQuery('');
    setActive(-1);
  };

  const onSearchKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => (a === -1 ? 0 : Math.min(results.length - 1, a + 1)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => (a <= 0 ? -1 : a - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = results[active] || results[0];
      if (target) select(target.iso);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActive(results.length ? 0 : -1);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActive(results.length ? results.length - 1 : -1);
    }
  };

  return (
    <div className="pf" ref={rootRef}>
      <div className={`pf__box${invalid ? ' pf__box--invalid' : ''}`}>
        <button
          type="button"
          className="pf__trigger"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={`Country: ${selected.name} (+${selected.dial})`}
        >
          <img src={flagUrl(selected.iso)} alt="" width="24" height="16" loading="lazy" />
          <span className="pf__code">+{selected.dial}</span>
          <svg
            className={`pf__chev${open ? ' open' : ''}`}
            viewBox="0 0 16 16"
            width="14"
            height="14"
            aria-hidden="true"
          >
            <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <input
          id={id}
          name={name}
          type="tel"
          autoComplete="tel"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          aria-invalid={invalid}
          className="pf__input"
        />
      </div>

      {open && (
        <div className="pf__menu">
          <div className="pf__search">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path d="m21 21-4.34-4.34" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <input
              ref={searchRef}
              type="search"
              placeholder="Search country or code"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onSearchKey}
              className="pf__search-input"
            />
          </div>
          <ul className="pf__list" role="listbox" aria-label="Countries">
            {results.map((c, i) => {
              const isSelected = c.iso === iso;
              const isActive = i === active;
              return (
                <li
                  key={c.iso}
                  role="option"
                  aria-selected={isSelected}
                  className={`pf__item${isActive ? ' active' : ''}${isSelected ? ' selected' : ''}`}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => select(c.iso)}
                >
                  <img src={flagUrl(c.iso)} alt="" width="24" height="16" loading="lazy" />
                  <span className="pf__name">{c.name}</span>
                  <span className="pf__dial">+{c.dial}</span>
                  {isSelected && (
                    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </li>
              );
            })}
            {results.length === 0 && <li className="pf__empty">No countries found</li>}
          </ul>
        </div>
      )}
    </div>
  );
}
