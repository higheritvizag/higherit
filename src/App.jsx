import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import TrustSection from './sections/TrustSection'
import EcosystemSection from './sections/EcosystemSection'
import CapabilitiesSection from './sections/CapabilitiesSection'
import ProcessSection from './sections/ProcessSection'
import WhySection from './sections/WhySection'
import StatsSection from './sections/StatsSection'
import SelectedWorkSection from './sections/SelectedWorkSection'
import AISection from './sections/AISection'
import IndustryExplorerSection from './sections/IndustryExplorerSection'
import ProductsSection from './sections/ProductsSection'
import TestimonialsSection from './sections/TestimonialsSection'
import InsightsSection from './sections/InsightsSection'
import FinalCTASection from './sections/FinalCTASection'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

export default function App() {
  const [isTalkOpen, setIsTalkOpen] = useState(false)

  const handleOpenTalk = () => {
    setIsTalkOpen(true)
  }

  return (
    <div className="app-root">
      <Navbar onOpenTalk={handleOpenTalk} />
      <main>
        <HeroSection onOpenTalk={handleOpenTalk} />
        <TrustSection />
        <EcosystemSection />
        <CapabilitiesSection onOpenTalk={handleOpenTalk} />
        <ProcessSection />
        <WhySection />
        <StatsSection />
        <SelectedWorkSection onOpenTalk={handleOpenTalk} />
        <AISection />
        <IndustryExplorerSection onOpenTalk={handleOpenTalk} />
        <ProductsSection />
        <TestimonialsSection />
        <InsightsSection />
        <FinalCTASection onOpenTalk={handleOpenTalk} />
      </main>
      <Footer />
      <ContactModal isOpen={isTalkOpen} onClose={() => setIsTalkOpen(false)} />
    </div>
  )
}
