
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import LawyerSection from '@/components/LawyerSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <LawyerSection />
        <DifferentialsSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
