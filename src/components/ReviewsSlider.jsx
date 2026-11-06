'use client'

import { useState } from 'react'

function Stars({ rating }) {
  return (
    <span className="stars" role="img" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((step) => {
        const state = rating >= step ? 'full' : rating >= step - 0.5 ? 'half' : 'empty'
        return (
          <span key={step} className={`star${state === 'full' ? '' : ` star--${state}`}`} aria-hidden="true">
            ★
          </span>
        )
      })}
    </span>
  )
}

export default function ReviewsSlider({ reviews }) {
  const [index, setIndex] = useState(0)
  const count = reviews.length

  const goTo = (next) => setIndex(((next % count) + count) % count)

  return (
    <div className="slider" role="region" aria-roledescription="carousel" aria-label="Reviews from Trader AI users">
      <div className="slider__viewport" aria-live="polite">
        <div className="slider__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {reviews.map((review, i) => (
            <div
              className="slider__slide"
              key={review.name}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== index}
            >
              <article className="review-slide">
                <Stars rating={review.rating} />
                <blockquote>{review.quote}</blockquote>
                <div className="review-slide__who">
                  <img
                    className="review-slide__avatar"
                    src={review.avatar}
                    alt=""
                    width="48"
                    height="48"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <b>{review.name}</b>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="slider__controls">
        <button type="button" className="slider__arrow" onClick={() => goTo(index - 1)} aria-label="Previous review">
          <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12.5 4.5 7 10l5.5 5.5" />
          </svg>
        </button>

        <div className="slider__dots">
          {reviews.map((review, i) => (
            <button
              key={review.name}
              type="button"
              className={`slider__dot${i === index ? ' is-active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
            />
          ))}
        </div>

        <button type="button" className="slider__arrow" onClick={() => goTo(index + 1)} aria-label="Next review">
          <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7.5 4.5 13 10l-5.5 5.5" />
          </svg>
        </button>
      </div>
    </div>
  )
}
