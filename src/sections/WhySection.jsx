import React from 'react'

export default function WhySection() {
  return (
    <section className="section why-section" id="about">
      <div className="container">
        <h2 className="why-statement" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, marginBottom: 60, textAlign: 'center' }}>
          One Team. One Strategy.<br />
          <span className="highlight-blue">One Digital Ecosystem.</span>
        </h2>

        <div className="why-list-rows" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div className="why-row-item" style={{ background: 'var(--bg-dark-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-lg)', padding: '24px 32px', display: 'grid', gridTemplateColumns: '80px 240px 1fr', alignItems: 'center', gap: 20 }}>
            <div className="why-row-idx" style={{ fontFamily: 'var(--font-code)', fontSize: '1.2rem', color: 'var(--brand-orange)', fontWeight: 700 }}>01</div>
            <div className="why-row-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800 }}>Business First</div>
            <div className="why-row-desc" style={{ color: 'var(--text-dark-secondary)', fontSize: '0.95rem' }}>We start by understanding your unit economics, offer, and business goals before writing code or running ads.</div>
          </div>
          <div className="why-row-item" style={{ background: 'var(--bg-dark-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-lg)', padding: '24px 32px', display: 'grid', gridTemplateColumns: '80px 240px 1fr', alignItems: 'center', gap: 20 }}>
            <div className="why-row-idx" style={{ fontFamily: 'var(--font-code)', fontSize: '1.2rem', color: 'var(--brand-blue)', fontWeight: 700 }}>02</div>
            <div className="why-row-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800 }}>One Connected Team</div>
            <div className="why-row-desc" style={{ color: 'var(--text-dark-secondary)', fontSize: '0.95rem' }}>Strategy, design, development, marketing and AI specialists work seamlessly together without agency friction.</div>
          </div>
          <div className="why-row-item" style={{ background: 'var(--bg-dark-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-lg)', padding: '24px 32px', display: 'grid', gridTemplateColumns: '80px 240px 1fr', alignItems: 'center', gap: 20 }}>
            <div className="why-row-idx" style={{ fontFamily: 'var(--font-code)', fontSize: '1.2rem', color: 'var(--brand-orange)', fontWeight: 700 }}>03</div>
            <div className="why-row-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800 }}>Built to Scale</div>
            <div className="why-row-desc" style={{ color: 'var(--text-dark-secondary)', fontSize: '0.95rem' }}>We engineer scalable digital infrastructure, design systems, and robust web applications built to evolve with your business.</div>
          </div>
          <div className="why-row-item" style={{ background: 'var(--bg-dark-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-lg)', padding: '24px 32px', display: 'grid', gridTemplateColumns: '80px 240px 1fr', alignItems: 'center', gap: 20 }}>
            <div className="why-row-idx" style={{ fontFamily: 'var(--font-code)', fontSize: '1.2rem', color: 'var(--brand-blue)', fontWeight: 700 }}>04</div>
            <div className="why-row-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800 }}>AI-First Thinking</div>
            <div className="why-row-desc" style={{ color: 'var(--text-dark-secondary)', fontSize: '0.95rem' }}>We identify repetitive friction points where AI and automation deliver massive operational leverage for your team.</div>
          </div>
          <div className="why-row-item" style={{ background: 'var(--bg-dark-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-lg)', padding: '24px 32px', display: 'grid', gridTemplateColumns: '80px 240px 1fr', alignItems: 'center', gap: 20 }}>
            <div className="why-row-idx" style={{ fontFamily: 'var(--font-code)', fontSize: '1.2rem', color: 'var(--brand-orange)', fontWeight: 700 }}>05</div>
            <div className="why-row-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800 }}>Transparent Collaboration</div>
            <div className="why-row-desc" style={{ color: 'var(--text-dark-secondary)', fontSize: '0.95rem' }}>No black boxes. You always have full visibility into our roadmaps, campaign performance, and project sprints.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
