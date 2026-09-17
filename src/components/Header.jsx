import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Logo, Button } from './ui.jsx';
import { NAV_LINKS } from '../data/content.js';

export default function Header() {
  const { pathname } = useLocation();
  const hasDarkHero = ['/', '/about', '/faq', '/contact'].includes(pathname);
  const [scrolled, setScrolled] = useState(!hasDarkHero);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!hasDarkHero) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hasDarkHero]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Logo />

        <nav className="nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <Button variant="primary" size="sm" to="/contact">
            Get Started
          </Button>
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="mobile-menu" id="mobileMenu" hidden={!menuOpen}>
        <nav className="mobile-menu__nav" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={closeMenu} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
          <Button variant="primary" to="/contact" onClick={closeMenu}>
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}
