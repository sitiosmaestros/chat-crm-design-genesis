
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import PricingSection from '@/components/PricingSection';
import ClosingSection from '@/components/ClosingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-4">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FaqSection />
        <PricingSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
