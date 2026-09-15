import React from 'react'
import HeroSection from '../sections/HeroSection'
import TrustSection from '../sections/TrustSection'
import EcosystemSection from '../sections/EcosystemSection'
import CapabilitiesSection from '../sections/CapabilitiesSection'
import ProcessSection from '../sections/ProcessSection'
import WhySection from '../sections/WhySection'
import StatsSection from '../sections/StatsSection'
import SelectedWorkSection from '../sections/SelectedWorkSection'
import AISection from '../sections/AISection'
import IndustryExplorerSection from '../sections/IndustryExplorerSection'
import ProductsSection from '../sections/ProductsSection'
import InsightsSection from '../sections/InsightsSection'
import FinalCTASection from '../sections/FinalCTASection'

export function HomePage({ onOpenTalk }) {
  return (
    <>
      <HeroSection onOpenTalk={onOpenTalk} />
      <TrustSection />
      <EcosystemSection />
      <CapabilitiesSection onOpenTalk={onOpenTalk} />
      <ProcessSection />
      <WhySection />
      <StatsSection />
      <SelectedWorkSection onOpenTalk={onOpenTalk} />
      <AISection />
      <IndustryExplorerSection onOpenTalk={onOpenTalk} />
      <ProductsSection />
      <InsightsSection />
      <FinalCTASection onOpenTalk={onOpenTalk} />
    </>
  )
}

export default HomePage
