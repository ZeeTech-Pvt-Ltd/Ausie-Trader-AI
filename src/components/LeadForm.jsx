import { Eyebrow } from './ui.jsx';
import SignupForm from './SignupForm.jsx';
import { SIGNUP_POINTS } from '../data/content.js';

export default function LeadForm() {
  return (
    <section className="join" id="register" aria-labelledby="join-heading">
      <div className="container">
        <div className="join__grid">
          <div className="join__copy" data-reveal>
            <Eyebrow>Registration</Eyebrow>
            <h2 className="h2" id="join-heading">Your Research Account Starts Here</h2>
            <p className="section-sub">
              Tell us who you are and we'll set up your research workspace. Registration takes a few
              minutes.
            </p>
            <ul className="join__points">
              {SIGNUP_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="join__privacy">
              Trader AI is a research platform. Registering does not open a brokerage account or
              place you in any market.
            </p>
          </div>

          <div className="join__form-wrap" data-reveal>
            <SignupForm />
          </div>
        </div>
      </div>
    </section>
  );
}
