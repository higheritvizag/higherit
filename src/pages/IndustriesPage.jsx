import React from 'react'
import IndustryExplorerSection from '../sections/IndustryExplorerSection'
import FinalCTASection from '../sections/FinalCTASection'
import { Reveal } from '../components/Reveal'

export function IndustriesPage({ onOpenTalk }) {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section section-theme-dark">
        <div className="container">
          <Reveal>
            <div className="eyebrow eyebrow-blue">INDUSTRIES WE SERVE</div>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 900, lineHeight: 1.1 }}>
              Different Sectors.<br />
              <span className="highlight-orange">ONE DIGITAL MINDSET.</span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '780px', fontSize: '1.2rem' }}>
              We build specialized digital ecosystems, high-converting lead funnels, and custom software tools tailored to specific industry dynamics.
            </p>
          </Reveal>
        </div>
      </section>

      <IndustryExplorerSection onOpenTalk={onOpenTalk} />
      <FinalCTASection onOpenTalk={onOpenTalk} />
    </div>
  )
}

export default IndustriesPage
