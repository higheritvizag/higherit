import React from 'react'
import CapabilitiesSection from '../sections/CapabilitiesSection'
import ProcessSection from '../sections/ProcessSection'
import FinalCTASection from '../sections/FinalCTASection'
import { Reveal } from '../components/Reveal'

export function ServicesPage({ onOpenTalk }) {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section section-theme-dark">
        <div className="container">
          <Reveal>
            <div className="eyebrow eyebrow-blue">OUR SERVICES</div>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 900, lineHeight: 1.1 }}>
              Complete Digital Growth & Tech.<br />
              <span className="highlight-orange">ONE CONNECTED PARTNER.</span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '780px', fontSize: '1.2rem' }}>
              From performance digital marketing and brand identity design to custom web applications and AI workflow automation — explore our capabilities.
            </p>
          </Reveal>
        </div>
      </section>

      <CapabilitiesSection onOpenTalk={onOpenTalk} />
      <ProcessSection />
      <FinalCTASection onOpenTalk={onOpenTalk} />
    </div>
  )
}

export default ServicesPage
