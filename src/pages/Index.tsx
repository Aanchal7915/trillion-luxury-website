import CountdownTimer from "@/components/CountdownTimer";
import Hero from "@/components/Hero";
import InvestmentSection from "@/components/InvestmentSection";
import VideoSection from "@/components/VideoSection";
import PaymentPlan from "@/components/PaymentPlan";
import PricingSection from "@/components/PricingSection";
import UnitSizes from "@/components/UnitSizes";
import LocationSection from "@/components/LocationSection";

import LeadForm from "@/components/LeadForm";
import LeadModal from "@/components/LeadModal";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => (
  <div className="min-h-screen bg-background">
    <LeadModal delay={3000} />
    <CountdownTimer />
    <Hero />
    <InvestmentSection />
    <VideoSection />
    <PaymentPlan />
    <PricingSection />
    <UnitSizes />
    <LocationSection />
    
    <LeadForm />
    <ContactSection />
    <FooterSection />
    <FloatingWhatsApp />
    <StickyMobileCTA />
  </div>
);

export default Index;
