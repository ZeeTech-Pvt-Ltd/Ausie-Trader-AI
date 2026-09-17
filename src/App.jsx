import { useLayoutEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import FaqPage from './pages/FaqPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import TermsPage from './pages/TermsPage.jsx';
import ThankYouPage from './pages/ThankYouPage.jsx';

export default function App() {
  const root = useRef(null);
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      gsap.set('[data-reveal], [data-hero]', { autoAlpha: 1, y: 0, x: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const isHome = !!document.querySelector('.hero');

      if (isHome) {
        /* ---------- HERO LOAD timeline ---------- */
        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        heroTl
          .fromTo('[data-hero="eyebrow"]', { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, 0.05)
          .fromTo('[data-hero="line1"]', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.85 }, 0.2)
          .fromTo('[data-hero="line2"]', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.85 }, 0.3)
          .fromTo('[data-hero="lead"]', { y: 26, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8 }, 0.42)
          .fromTo('[data-hero="cta"]', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, 0.54)
          .fromTo('[data-hero="cta"] > *', { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1 }, 0.54)
          .fromTo('[data-hero="meta"]', { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, 0.66)
          .fromTo('[data-hero="dash"]', { scale: 0.92, y: 26, autoAlpha: 0 }, { scale: 1, y: 0, autoAlpha: 1, duration: 0.9 }, 0.25)
          .fromTo('[data-hero="btc"]', { x: 60, y: -40, autoAlpha: 0, scale: 0.7 }, { x: 0, y: 0, autoAlpha: 1, scale: 1, duration: 0.9 }, 0.5)
          .fromTo('[data-hero="candle"]', { x: -50, y: 30, autoAlpha: 0, scale: 0.7 }, { x: 0, y: 0, autoAlpha: 1, scale: 1, duration: 0.9 }, 0.55)
          .fromTo('[data-hero="ai"]', { x: -40, y: 40, autoAlpha: 0, scale: 0.7 }, { x: 0, y: 0, autoAlpha: 1, scale: 1, duration: 0.9 }, 0.6)
          .fromTo('[data-hero="portfolio"]', { x: -50, y: -20, autoAlpha: 0 }, { x: 0, y: 0, autoAlpha: 1, duration: 0.8 }, 0.68)
          .fromTo('[data-hero="trend"]', { x: 40, y: 30, autoAlpha: 0 }, { x: 0, y: 0, autoAlpha: 1, duration: 0.8 }, 0.72)
          .fromTo('[data-hero="badge"]', { x: 30, y: 30, autoAlpha: 0 }, { x: 0, y: 0, autoAlpha: 1, duration: 0.8 }, 0.76)
          .fromTo('[data-hero="chartcard"]', { x: 50, y: 30, autoAlpha: 0 }, { x: 0, y: 0, autoAlpha: 1, duration: 0.8 }, 0.8);

        /* ---------- Gentle floating loops ---------- */
        gsap.to('[data-hero="btc"]', { y: -12, duration: 3.4, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        gsap.to('[data-hero="candle"]', { y: 12, duration: 3.8, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        gsap.to('[data-hero="ai"]', { y: -10, duration: 4.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        gsap.to('[data-hero="portfolio"]', { y: 10, duration: 4.6, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        gsap.to('[data-hero="chartcard"]', { y: -8, duration: 4, yoyo: true, repeat: -1, ease: 'sine.inOut' });

        /* ---------- CTA orbs drift ---------- */
        gsap.to('.cta__orb--1', { y: 22, x: -14, duration: 6, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        gsap.to('.cta__orb--2', { y: -18, x: 14, duration: 7, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      }
    }, root);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div ref={root}>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
