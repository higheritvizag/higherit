import React from 'react'

export default function SelectedWorkSection({ onOpenTalk }) {
  return (
    <section className="section work-section" id="work">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'left', maxWidth: '100%', marginBottom: 60 }}>
          <div className="eyebrow">SELECTED WORK</div>
          <h2 className="section-title">Real Projects. <span className="highlight-blue">Real Results.</span></h2>
        </div>

        {/* Hero Featured Case Study */}
        <div className="case-hero-card" style={{ background: 'var(--bg-dark-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-xl)', padding: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', marginBottom: 60 }}>
          <div className="case-hero-content">
            <span className="eyebrow eyebrow-blue" style={{ width: 'fit-content', marginBottom: 16 }}>FEATURED CASE STUDY</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, marginBottom: 16 }}>Akshaya Hospital</h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-secondary)', marginBottom: 24 }}>Healthcare • Web Development • Digital Growth</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dark-muted)', marginBottom: 32, lineHeight: 1.6 }}>
              Transformed digital presence with a modern patient-first web application and performance campaigns that increased online appointment enquiries significantly.
            </p>
            <button type="button" onClick={onOpenTalk} className="btn btn-primary" style={{ width: 'fit-content' }}>View Case Study →</button>
          </div>
          <img src="/assets/images/case_akshaya.png" alt="Akshaya Hospital Website Preview" className="case-hero-img" style={{ width: '100%', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--border-dark)' }} />
        </div>

        {/* Secondary 2-Column Grid */}
        <div className="case-secondary-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40 }}>
          <div className="case-card">
            <div className="case-img-wrap">
              <img src="/assets/images/case_flamex.png" alt="FlameX Preview" className="case-card-img" />
            </div>
            <div className="case-content">
              <div className="case-client">FlameX</div>
              <h4 className="case-title">Branding • Website • Creative</h4>
              <p className="case-result">A bold visual brand identity and digital e-commerce experience engineered to establish market authority.</p>
            </div>
          </div>

          <div className="case-card">
            <div className="case-img-wrap">
              <img src="/assets/images/hero_rocket.png" alt="Somarka Events Preview" className="case-card-img" />
            </div>
            <div className="case-content">
              <div className="case-client" style={{ color: 'var(--brand-blue)' }}>Somarka Events</div>
              <h4 className="case-title">Branding • Digital Marketing</h4>
              <p className="case-result">Creative branding and performance digital marketing that helped them reach corporate event organizers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
