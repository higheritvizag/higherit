import React from 'react'

export default function WhySection() {
  return (
    <section className="section why-section section-theme-light" id="about">
      <div className="container">
        <h2 className="why-statement" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, marginBottom: 48, textAlign: 'center' }}>
          One Team. One Strategy.<br />
          <span className="highlight-blue">One Digital Ecosystem.</span>
        </h2>

        <div className="why-list-rows" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="why-row-item">
            <div className="why-row-idx" style={{ color: 'var(--brand-orange)' }}>01</div>
            <div className="why-row-title">Business First</div>
            <div className="why-row-desc">We start by understanding your unit economics, offer, and business goals before writing code or running ads.</div>
          </div>
          <div className="why-row-item">
            <div className="why-row-idx" style={{ color: 'var(--brand-blue)' }}>02</div>
            <div className="why-row-title">One Connected Team</div>
            <div className="why-row-desc">Strategy, design, development, marketing and AI specialists work seamlessly together without agency friction.</div>
          </div>
          <div className="why-row-item">
            <div className="why-row-idx" style={{ color: 'var(--brand-orange)' }}>03</div>
            <div className="why-row-title">Built to Scale</div>
            <div className="why-row-desc">We engineer scalable digital infrastructure, design systems, and robust web applications built to evolve with your business.</div>
          </div>
          <div className="why-row-item">
            <div className="why-row-idx" style={{ color: 'var(--brand-blue)' }}>04</div>
            <div className="why-row-title">AI-First Thinking</div>
            <div className="why-row-desc">We identify repetitive friction points where AI and automation deliver massive operational leverage for your team.</div>
          </div>
          <div className="why-row-item">
            <div className="why-row-idx" style={{ color: 'var(--brand-orange)' }}>05</div>
            <div className="why-row-title">Transparent Collaboration</div>
            <div className="why-row-desc">No black boxes. You always have full visibility into our roadmaps, campaign performance, and project sprints.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
