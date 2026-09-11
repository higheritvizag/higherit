import React from 'react'

export default function FinalCTASection({ onOpenTalk }) {
  return (
    <section className="section final-cta-section section-theme-dark" id="contact" style={{ paddingBottom: 80 }}>
      <div className="container">
        <div className="cta-banner" style={{ background: 'linear-gradient(135deg, rgba(11,99,246,0.15) 0%, rgba(255,122,0,0.15) 100%)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-xl)', padding: '80px 40px', textAlign: 'center' }}>
          <div>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.6rem, 4.5vw, 3.8rem)', marginBottom: 16 }}>
              Ready to Take Your Business <span className="highlight-orange">Higher?</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
              Tell us where you are today. We'll help you figure out where to go next.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button type="button" onClick={onOpenTalk} className="btn btn-primary">Start a Project →</button>
            <a href="tel:+919160368468" className="btn btn-secondary">Talk to HigherIT</a>
          </div>
        </div>
      </div>
    </section>
  )
}
