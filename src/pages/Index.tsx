import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ExpertReviewsSection from "@/components/ExpertReviewsSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import WhyProofSection from "@/components/WhyProofSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExpertReviewsSection />
        <MissionVisionSection />
        <WhyProofSection />
        <TargetAudienceSection />
        <TrustSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
