import React from 'react';
import { LanguageProvider } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import VisionMission from '@/components/VisionMission';
import Services from '@/components/Services';
import FreeAddons from '@/components/FreeAddons';
import AdditionalServices from '@/components/AdditionalServices';
import WorkSchedule from '@/components/WorkSchedule';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <FreeAddons />
        <AdditionalServices />
        <WorkSchedule />
        <WhyChooseUs />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
