import { useEffect } from 'react';
import { SEO, SITE_URL } from '../data/seo.js';

// Applies per-route <title>, meta description, canonical and Open Graph tags.
export default function Seo({ path }) {
  useEffect(() => {
    const meta = SEO[path] || SEO['/'];
    const url = `${SITE_URL}${path === '/' ? '/' : path}`;

    document.title = meta.title;

    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', meta.description);
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Noindex for utility pages (e.g. thank-you)
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', meta.noindex ? 'noindex, nofollow' : 'index, follow');
  }, [path]);

  return null;
}
