// Per-route SEO configuration for Trader AI.
// Single source of truth for titles, descriptions, canonicals and robots
// rules. src/lib/metadata.js maps it onto Next's Metadata API, so every head
// tag is baked into the prerendered HTML rather than patched in at runtime.
//
// Every description is under 155 characters and ends with a call to action.

export const SITE_URL = 'https://ausietraderai.com';
// The version query forces social crawlers to fetch the current artwork
// instead of serving a cached copy of the old "Australia" OG image.
export const OG_IMAGE = `${SITE_URL}/og-image.png?v=2`;

export const SEO = {
  '/': {
    title: 'Trader AI | AI Powered Trading Analysis Platform',
    description: 'Trader AI brings AI powered trading tools, chart analysis, strategy backtesting and paper trading together in one platform. Start exploring today.',
    keywords: 'Trader AI, AI trading analysis, trading tools, strategy backtesting, paper trading, market insights',
    canonical: `${SITE_URL}/`,
  },
  '/about': {
    title: 'About Us | Trader AI',
    description: 'Learn how Trader AI pairs AI assisted market analysis with practical trading education for a global audience. Read our story today.',
    canonical: `${SITE_URL}/about`,
  },
  '/how-it-works': {
    title: 'How It Works | Trader AI',
    description: 'See how Trader AI takes you from sign up to your first trading analysis session in three simple steps. Start exploring today.',
    canonical: `${SITE_URL}/how-it-works`,
  },
  '/reviews': {
    title: 'Reviews | Trader AI',
    description: 'Read reviews from Trader AI users, plus practical checks for any trading platform before you sign up. Get in touch today.',
    canonical: `${SITE_URL}/reviews`,
  },
  '/faq': {
    title: 'FAQ | Trader AI',
    description: 'Answers to common questions about Trader AI, its trading tools, paper trading, backtesting and how registration works. Find your answer now.',
    canonical: `${SITE_URL}/faq`,
  },
  '/contact': {
    title: 'Contact Us | Trader AI',
    description: 'Questions about Trader AI? Contact our support team for help with the platform, your account or the trading tools. Get in touch today.',
    canonical: `${SITE_URL}/contact`,
  },
  '/privacy': {
    title: 'Privacy Policy | Trader AI',
    description: 'See how Trader AI collects, uses and protects your personal information, and what we never ask for at sign up. Read the full policy.',
    canonical: `${SITE_URL}/privacy`,
  },
  '/terms': {
    title: 'Terms & Conditions | Trader AI',
    description: 'The terms that apply when you use the Trader AI website and platform, from registration to acceptable use. Review the terms before you register.',
    canonical: `${SITE_URL}/terms`,
  },
  '/risk-disclosure': {
    title: 'Risk Disclosure | Trader AI',
    description: 'Understand the risks of trading and using AI assisted research tools, including volatility and loss. Read the full risk disclosure.',
    canonical: `${SITE_URL}/risk-disclosure`,
  },
  '/thank-you': {
    title: 'Thank You | Trader AI',
    description: 'Your account request has been received. Thank you for choosing Trader AI. Check your inbox for the next steps.',
    noindex: true,
  },
  '404': {
    title: 'Page Not Found | Trader AI',
    description: 'That page could not be found. Head back to the homepage or contact our team for help. Find your way back now.',
    noindex: true,
  },
};
