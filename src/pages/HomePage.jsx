import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { TrustSection } from '../sections/TrustSection';
import { EcosystemSection } from '../sections/EcosystemSection';
import { CapabilitiesSection } from '../sections/CapabilitiesSection';
import { ProcessSection } from '../sections/ProcessSection';
import { WhySection } from '../sections/WhySection';
import { StatsSection } from '../sections/StatsSection';
import { SelectedWorkSection } from '../sections/SelectedWorkSection';
import { AISection } from '../sections/AISection';
import { IndustryExplorerSection } from '../sections/IndustryExplorerSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { ProductsSection } from '../sections/ProductsSection';
import { InsightsSection } from '../sections/InsightsSection';
import { AboutSection } from '../sections/AboutSection';
import { FinalCTASection } from '../sections/FinalCTASection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <EcosystemSection />
      <CapabilitiesSection />
      <ProcessSection />
      <WhySection />
      <StatsSection />
      <SelectedWorkSection />
      <AISection />
      <IndustryExplorerSection />
      <TestimonialsSection />
      <ProductsSection />
      <InsightsSection />
      <AboutSection />
      <FinalCTASection />
    </>
  );
};
