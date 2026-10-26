import Hero from './Hero.jsx';
import TrustStrip from './TrustStrip.jsx';
import Why from './Why.jsx';
import Steps from './Steps.jsx';
import Platform from './Platform.jsx';
import Features from './Features.jsx';
import Showcase from './Showcase.jsx';
import RiskBand from './RiskBand.jsx';
import Faq from './Faq.jsx';
import LeadForm from './LeadForm.jsx';
import Cta from './Cta.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Why />
      <Steps />
      <Platform />
      <Features />
      <Showcase />
      {/* The risk band sits above the form so a reader meets the downside
          before being asked for a phone number. */}
      <RiskBand />
      <Faq heading limit={4} moreHref="/faq" />
      <LeadForm />
      <Cta />
    </>
  );
}
