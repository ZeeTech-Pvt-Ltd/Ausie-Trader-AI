// Per-route SEO configuration for Ausie Trader AI.
// Single source of truth for titles, descriptions, canonicals and robots
// rules. src/lib/metadata.js maps it onto Next's Metadata API, so every head
// tag is baked into the prerendered HTML rather than patched in at runtime.
//
// Every description is under 155 characters and ends with a call to action.

export const SITE_URL = 'https://ausietraderai.com';
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const SEO = {
  '/': {
    title: 'Ausie Trader AI | AI Crypto Research for Australia',
    description: 'AI assisted crypto research for Australians. Explore market data, charts and learning resources for Bitcoin, Ethereum and more. Start researching today.',
    keywords: 'Ausie Trader AI, AI crypto research, crypto analysis Australia, market insights, Bitcoin, Ethereum',
    canonical: `${SITE_URL}/`,
  },
  '/about': {
    title: 'About Us | Ausie Trader AI',
    description: 'See how Ausie Trader AI pairs AI assisted market scanning with plain English crypto education for Australians. Read our story today.',
    canonical: `${SITE_URL}/about`,
  },
  '/faq': {
    title: 'FAQ | Ausie Trader AI',
    description: 'Answers to common questions about Ausie Trader AI, who it is for, how registration works and how we protect your details. Find your answer now.',
    canonical: `${SITE_URL}/faq`,
  },
  '/contact': {
    title: 'Contact Us | Ausie Trader AI',
    description: 'Questions about Ausie Trader AI? Contact our Australian support team during business hours for platform or account help. Get in touch today.',
    canonical: `${SITE_URL}/contact`,
  },
  '/privacy': {
    title: 'Privacy Policy | Ausie Trader AI',
    description: 'See how Ausie Trader AI collects, uses and protects your personal information, and what we never ask for at sign up. Read the full policy.',
    canonical: `${SITE_URL}/privacy`,
  },
  '/terms': {
    title: 'Terms & Conditions | Ausie Trader AI',
    description: 'The terms that apply when you use the Ausie Trader AI website and platform, from registration to acceptable use. Review the terms before you register.',
    canonical: `${SITE_URL}/terms`,
  },
  '/risk-disclosure': {
    title: 'Risk Disclosure | Ausie Trader AI',
    description: 'Understand the risks of researching and trading digital assets, including volatility and loss, before you act. Read the full risk disclosure.',
    canonical: `${SITE_URL}/risk-disclosure`,
  },
  '/thank-you': {
    title: 'Thank You | Ausie Trader AI',
    description: 'Your account request has been received. Thank you for choosing Ausie Trader AI. Check your inbox for the next steps.',
    noindex: true,
  },
  '404': {
    title: 'Page Not Found | Ausie Trader AI',
    description: 'That page could not be found. Head back to the homepage or contact our team for help. Find your way back now.',
    noindex: true,
  },
};
