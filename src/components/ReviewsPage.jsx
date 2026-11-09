import Link from 'next/link';
import PageHeader from './PageHeader.jsx';
import { SectionHead } from './ui.jsx';
import ReviewsSlider from './ReviewsSlider.jsx';
import { REVIEWS } from '../data/reviews.js';
import { CONTACT_INFO } from '../data/content.js';

const REVIEW_TOPICS = [
  {
    title: 'Market Data',
    desc: 'Was the information clear, current and easy to find?',
  },
  {
    title: 'Charts and Watchlists',
    desc: 'Did the visuals help you follow the assets you care about?',
  },
  {
    title: 'Learning Resources',
    desc: 'Were the guides useful for your level of experience?',
  },
  {
    title: 'Support',
    desc: 'Did our team answer your question clearly and on time?',
  },
];

const CHECKS = [
  {
    title: 'Ownership and Contact',
    desc: 'Find a real company name, a registered address and a support email you can check.',
  },
  {
    title: 'Terms and Fees',
    desc: 'Read the terms before you deposit. Understand the fees, custody and how withdrawals work.',
  },
  {
    title: 'Guarantees',
    desc: 'Treat promised returns as a warning sign. No platform can guarantee market outcomes.',
  },
  {
    title: 'Negative Feedback',
    desc: 'Read the critical reviews first. See whether the team answers the problem or removes it.',
  },
  {
    title: 'Repeated Reviews',
    desc: 'Identical wording, stock photos or a burst of five star reviews can mean paid feedback.',
  },
  {
    title: 'Payment Details',
    desc: 'Check where a deposit actually goes. Never send money to an individual.',
  },
];

const REVIEW_QUESTIONS = [
  {
    q: 'How Do You Choose Which Reviews to Publish?',
    a: "We publish a review with the reviewer's permission. We don't edit it to make it sound better.",
  },
  {
    q: 'Do You Pay for Reviews?',
    a: "No. We don't pay for reviews or reward people for leaving them.",
  },
  {
    q: 'Will You Publish Critical Feedback?',
    a: "Yes. A page of only positive quotes isn't useful to anyone.",
  },
  {
    q: 'How Can I Send Feedback?',
    a: "Use the contact page or email our support team. Tell us what worked and what didn't.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        dark
        center
        eyebrow="Reviews"
        title="Reviews, Then Your Own Checks"
        sub="Reviews can help you shortlist a platform. They can't replace your own checks. Here's how we handle reviews, and how to check any platform before you sign up."
      />

      <section className="reviews-list" aria-label="In Their Own Words">
        <div className="container">
          <div className="reviews-list__grid">
            <div className="reviews-list__copy">
              <SectionHead
                eyebrow="What People Say"
                title="In Their Own Words"
                sub="What people told us about the workspace, the research and the support they received."
              />
            </div>
            <div className="reviews-list__slider">
              <ReviewsSlider reviews={REVIEWS} />
            </div>
          </div>
        </div>
      </section>

      <section className="why" aria-label="What You Can Review">
        <div className="container">
          <SectionHead eyebrow="Review Topics" title="What You Can Review" />
          <div className="why__grid">
            {REVIEW_TOPICS.map((topic, i) => (
              <article className="why-card" data-reveal key={topic.title}>
                <span className="why-card__num">0{i + 1}</span>
                <h3 className="why-card__title">{topic.title}</h3>
                <p className="why-card__desc">{topic.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="checks" aria-label="How to Check Any Platform Before You Sign Up">
        <div className="container">
          <SectionHead
            eyebrow="Before You Sign Up"
            title="How to Check Any Platform Before You Sign Up"
            sub="A review describes someone else's experience. These checks help you form your own view."
          />
          <div className="checks__grid">
            {CHECKS.map((check, i) => (
              <article className="check-card" data-reveal key={check.title}>
                <span className="check-card__num">0{i + 1}</span>
                <h3 className="check-card__title">{check.title}</h3>
                <p className="check-card__desc">{check.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="review-questions" aria-label="Questions About Reviews">
        <div className="container">
          <SectionHead eyebrow="Straight Answers" title="Questions About Reviews" />
          <div className="review-questions__grid">
            {REVIEW_QUESTIONS.map((item) => (
              <article className="review-question" data-reveal key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-cta" aria-labelledby="share-heading">
        <div className="container">
          <div className="faq-cta__card faq-cta__card--brand" data-reveal>
            <h2 id="share-heading">Share Your Experience</h2>
            <p>
              Used the platform? Tell us what worked and what didn't. Your feedback helps us decide
              what to improve next.
            </p>
            <div className="faq-cta__actions">
              <a className="btn btn--outline" href={`mailto:${CONTACT_INFO.email}`}>Email Support</a>
              <Link className="btn btn--primary" href="/contact">Go to Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
