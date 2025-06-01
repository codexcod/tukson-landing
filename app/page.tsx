import Hero from "./components/Hero"
import Services from "./components/Services"
import FeatureCarousel from "./components/FeatureCarousel"
import HowItWorks from "./components/HowItWorks"
import WhatsAppIntegration from "./components/WhatsAppIntegration"
import Pricing from "./components/Pricing"
import ContactForm from "./components/ContactForm"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <FeatureCarousel />
      <WhatsAppIntegration />
      <Pricing />
      <ContactForm />
    </>
  )
}
