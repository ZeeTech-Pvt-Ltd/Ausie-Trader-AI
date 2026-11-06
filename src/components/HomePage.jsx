import Hero from './Hero.jsx';
import Platform from './Platform.jsx';
import Features from './Features.jsx';
import Steps from './Steps.jsx';
import RiskBand from './RiskBand.jsx';
import LeadForm from './LeadForm.jsx';
import Showcase from './Showcase.jsx';
import Why from './Why.jsx';
import Clarity from './Clarity.jsx';
import Testimonials from './Testimonials.jsx';
import Faq from './Faq.jsx';
import Cta from './Cta.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Platform />
      <Features />
      <Steps />
      {/* The risk band stays immediately before the registration form. */}
      <RiskBand />
      <LeadForm />
      <Showcase />
      <Why />
      <Clarity />
      <Testimonials />
      <Faq heading limit={4} moreHref="/faq" />
      <Cta />
    </>
  );
}
