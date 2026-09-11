import React from 'react'

export default function ProcessSection() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="eyebrow" style={{ margin: '0 auto 24px' }}>THE HIGHERIT WAY</div>
          <h2 className="section-title">
            Strategy First. Technology Second. <span className="highlight-orange">Growth Always.</span>
          </h2>
        </div>

        <div className="process-trajectory-container">
          <svg className="process-curve-svg" viewBox="0 0 1200 60" fill="none" style={{ width: '100%', height: 40, marginBottom: 20 }}>
            <path d="M0 30 Q 300 0, 600 30 T 1200 30" stroke="var(--brand-orange)" strokeWidth="3" strokeDasharray="8" />
          </svg>

          <div className="process-grid">
            <div className="p-step-card">
              <div className="p-step-num">01</div>
              <div className="p-step-title">Discover</div>
              <div className="p-step-desc">Business model & goals</div>
            </div>
            <div className="p-step-card">
              <div className="p-step-num">02</div>
              <div className="p-step-title">Define</div>
              <div className="p-step-desc">Target audience analysis</div>
            </div>
            <div className="p-step-card">
              <div className="p-step-num">03</div>
              <div className="p-step-title">Strategize</div>
              <div className="p-step-desc">Growth & tech roadmap</div>
            </div>
            <div className="p-step-card">
              <div className="p-step-num">04</div>
              <div className="p-step-title">Create</div>
              <div className="p-step-desc">Design & engineering</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
