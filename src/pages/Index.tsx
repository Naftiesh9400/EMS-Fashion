import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyFashionTech from "@/components/WhyFashionTech";
import ProgramsSection from "@/components/ProgramsSection";
import MentorsSection from "@/components/MentorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyFashionTech />
      <ProgramsSection />
      <MentorsSection />
      <TestimonialsSection />
      <DifferentiatorsSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
