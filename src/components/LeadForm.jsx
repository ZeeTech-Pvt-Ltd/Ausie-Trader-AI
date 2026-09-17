import { Eyebrow } from './ui.jsx';
import SignupForm from './SignupForm.jsx';
import { SIGNUP_POINTS } from '../data/content.js';

export default function LeadForm() {
  return (
    <section className="join" id="join" aria-labelledby="join-heading">
      <div className="container">
        <div className="join__grid">
          <div className="join__copy" data-reveal>
            <Eyebrow>Get started</Eyebrow>
            <h2 className="h2" id="join-heading">Join Ausie Trader AI in just a few minutes</h2>
            <p className="section-sub">
              Registration is quick and secure. Tell us who you are and we'll set up a workspace
              where you can explore market insights, analytics and learning resources.
            </p>
            <ul className="join__points">
              {SIGNUP_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="join__privacy">
              Your privacy matters. We only collect what we need to run your account, and we never
              ask for sensitive financial information during registration.
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
