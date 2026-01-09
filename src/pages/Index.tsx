import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { WhyGo1Section } from "@/components/sections/WhyGo1Section";
import { CoursesInternshipsSection } from "@/components/sections/CoursesInternshipsSection";
import { AIIconsSection } from "@/components/sections/AIIconsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ExperienceSection />
        <WhyGo1Section />
        <CoursesInternshipsSection />
        <AIIconsSection />
        <CaseStudiesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
