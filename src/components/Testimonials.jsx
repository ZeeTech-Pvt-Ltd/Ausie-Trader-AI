import { SectionHead } from './ui.jsx';
import ReviewsSlider from './ReviewsSlider.jsx';
import { REVIEWS } from '../data/reviews.js';

export default function Testimonials() {
  return (
    <section className="reviews-list" aria-label="What Traders Say">
      <div className="container">
        <div className="reviews-list__grid">
          <div className="reviews-list__copy">
            <SectionHead
              eyebrow="Reviews"
              title="What Traders Say"
              sub="What users told us about the trading workspace, the research tools and the support they received."
            />
          </div>
          <div className="reviews-list__slider">
            <ReviewsSlider reviews={REVIEWS} />
          </div>
        </div>
      </div>
    </section>
  );
}
