import React from 'react'
import WhySection from '../sections/WhySection'
import StatsSection from '../sections/StatsSection'
import EcosystemSection from '../sections/EcosystemSection'
import FinalCTASection from '../sections/FinalCTASection'
import { Reveal } from '../components/Reveal'

export function AboutPage({ onOpenTalk }) {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section section-theme-dark">
        <div className="container">
          <Reveal>
            <div className="eyebrow eyebrow-blue">ABOUT HIGHERIT</div>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 900, lineHeight: 1.1 }}>
              We Believe Every Business Can <span className="highlight-orange">Go Higher.</span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '800px', fontSize: '1.2rem' }}>
              HigherIT is a digital growth and technology company helping businesses build powerful brands, attract more customers, build web applications, and automate with AI under one strategic roof.
            </p>
          </Reveal>
        </div>
      </section>

      <EcosystemSection />
      <WhySection />
      <StatsSection />
      <FinalCTASection onOpenTalk={onOpenTalk} />
    </div>
  )
}

export default AboutPage
