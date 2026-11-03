'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo.jsx'
import { Button } from './ui.jsx'
import { NAV_LINKS } from '../data/content.js'

// These pages open with a dark hero, so the header starts transparent and
// only picks up its solid background once the page is scrolled.
const DARK_HERO_ROUTES = ['/', '/about', '/faq', '/contact', '/how-it-works', '/reviews']

export default function Header() {
  const pathname = (usePathname() || '/').replace(/\/+$/, '') || '/'
  const hasDarkHero = DARK_HERO_ROUTES.includes(pathname)
  const [scrolled, setScrolled] = useState(!hasDarkHero)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!hasDarkHero) {
      setScrolled(true)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [hasDarkHero])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const isActive = (to) => (to === '/' ? pathname === '/' : pathname === to)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Logo />

        <nav className="nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`nav__link${isActive(link.to) ? ' is-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <Button variant="primary" size="sm" href="/contact">
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
            <Link
              key={link.to}
              href={link.to}
              onClick={closeMenu}
              className={isActive(link.to) ? 'is-active' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" href="/contact" onClick={closeMenu}>
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  )
}
