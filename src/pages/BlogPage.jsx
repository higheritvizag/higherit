import React from 'react'
import InsightsSection from '../sections/InsightsSection'
import FinalCTASection from '../sections/FinalCTASection'
import { Reveal } from '../components/Reveal'

export function BlogPage({ onOpenTalk }) {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section section-theme-dark">
        <div className="container">
          <Reveal>
            <div className="eyebrow eyebrow-blue">HIGHERIT INSIGHTS</div>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 900, lineHeight: 1.1 }}>
              IDEAS THAT HELP<br />
              <span className="highlight-orange">BUSINESSES GO HIGHER.</span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '780px', fontSize: '1.2rem' }}>
              Strategic perspectives and technical guides on digital growth, AI automation, branding, and web application performance.
            </p>
          </Reveal>
        </div>
      </section>

      <InsightsSection />
      <FinalCTASection onOpenTalk={onOpenTalk} />
    </div>
  )
}

export default BlogPage
