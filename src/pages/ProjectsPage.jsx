import React from 'react'
import SelectedWorkSection from '../sections/SelectedWorkSection'
import StatsSection from '../sections/StatsSection'
import FinalCTASection from '../sections/FinalCTASection'
import { Reveal } from '../components/Reveal'

export function ProjectsPage({ onOpenTalk }) {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section section-theme-dark">
        <div className="container">
          <Reveal>
            <div className="eyebrow eyebrow-blue">FEATURED PROJECTS</div>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 900, lineHeight: 1.1 }}>
              REAL PROJECTS.<br />
              <span className="highlight-orange">REAL EXECUTION.</span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '780px', fontSize: '1.2rem' }}>
              Explore how we turn complex business challenges into sleek web applications, high-converting digital campaigns, and distinct brand authority.
            </p>
          </Reveal>
        </div>
      </section>

      <SelectedWorkSection onOpenTalk={onOpenTalk} />
      <StatsSection />
      <FinalCTASection onOpenTalk={onOpenTalk} />
    </div>
  )
}

export default ProjectsPage
