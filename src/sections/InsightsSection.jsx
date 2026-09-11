import React from 'react'

export default function InsightsSection() {
  return (
    <section className="section blog-section" id="blog">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="eyebrow" style={{ margin: '0 auto 24px' }}>HIGHERIT INSIGHTS</div>
          <h2 className="section-title">Ideas That Help Businesses <span className="highlight-blue">Go Higher.</span></h2>
        </div>

        <div className="blog-grid">
          <div className="blog-card" style={{ gridColumn: 'span 2' }}>
            <div className="blog-category" style={{ color: 'var(--brand-orange)' }}>FEATURED INSIGHT</div>
            <h3 className="blog-title" style={{ fontSize: '1.6rem', marginBottom: 16 }}>Why Your Website Isn't Converting Traffic Into Customers</h3>
            <p className="cap-desc">Discover the strategic friction points in modern UX design and copy that stop visitors from taking action.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="blog-card">
              <div className="blog-category">AI & AUTOMATION</div>
              <h4 className="blog-title">How Small Businesses Save 20 Hours a Week With AI</h4>
            </div>
            <div className="blog-card">
              <div className="blog-category" style={{ color: 'var(--brand-orange)' }}>BRANDING</div>
              <h4 className="blog-title">Building a High-Trust Brand Identity in 2026</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
