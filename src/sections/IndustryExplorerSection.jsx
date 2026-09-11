import React, { useState } from 'react'

const industryData = {
  healthcare: {
    title: 'Healthcare Digital Solutions',
    challenge: 'Challenge: Patient trust, fragmented booking systems, and low online visibility for specialized medical treatments.',
    solution: 'HigherIT Solution: High-trust hospital portals, online appointment scheduling, SEO for medical treatments, and AI receptionist automation.'
  },
  realestate: {
    title: 'Real Estate & Property Tech',
    challenge: 'Challenge: Lead leaks, unorganized plot inventory, and slow lead follow-ups across sales teams.',
    solution: 'HigherIT Solution: Interactive land layout maps, plot management CRMs, Meta ad funnels, and automated WhatsApp lead distribution.'
  },
  education: {
    title: 'Education & Schools',
    challenge: 'Challenge: Student enrolment drop-off and lack of digital reputation during admission cycles.',
    solution: 'HigherIT Solution: High-conversion admission web pages, digital campaigns, fee payment portals, and parent enquiry bots.'
  },
  retail: {
    title: 'Retail & E-commerce',
    challenge: 'Challenge: Inventory sync issues between offline stores and online channels, low repeat purchases.',
    solution: 'HigherIT Solution: Custom e-commerce portals, Jewellery POS integration, automated abandoned cart recovery, and gold rate billing software.'
  },
  hospitality: {
    title: 'Hospitality & Events',
    challenge: 'Challenge: Reliance on third-party aggregators with high commission fees.',
    solution: 'HigherIT Solution: Direct booking web applications, event photography portfolios, automated quotes, and Google local SEO dominance.'
  },
  services: {
    title: 'Professional Services',
    challenge: 'Challenge: Positioning authority and acquiring high-ticket corporate accounts.',
    solution: 'HigherIT Solution: Editorial brand strategy, LinkedIn & Google B2B lead generation, pitch decks, and client portal CRMs.'
  },
  startups: {
    title: 'Startups & Technology Companies',
    challenge: 'Challenge: Need for rapid MVP prototype development, pitch presentation, and scalable cloud architecture.',
    solution: 'HigherIT Solution: Full-stack React + Node web apps, AI integration, SaaS design systems, and rapid go-to-market execution.'
  }
}

export default function IndustryExplorerSection({ onOpenTalk }) {
  const [activeTab, setActiveTab] = useState('healthcare')
  const current = industryData[activeTab] || industryData.healthcare

  return (
    <section className="section industries-section" id="industries">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="eyebrow" style={{ margin: '0 auto 24px' }}>INDUSTRIES WE SERVE</div>
          <h2 className="section-title">Solutions for <span className="highlight-blue">Every Industry.</span></h2>
        </div>

        <div className="ind-tabs">
          {Object.keys(industryData).map(key => (
            <button
              key={key}
              type="button"
              className={`ind-tab-btn ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {key === 'healthcare' && 'Healthcare'}
              {key === 'realestate' && 'Real Estate'}
              {key === 'education' && 'Education'}
              {key === 'retail' && 'Retail & E-commerce'}
              {key === 'hospitality' && 'Hospitality'}
              {key === 'services' && 'Professional Services'}
              {key === 'startups' && 'Startups & Tech'}
            </button>
          ))}
        </div>

        <div className="ind-content-box" style={{ background: 'var(--bg-dark-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-xl)', padding: 48 }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, marginBottom: 16, color: 'var(--brand-blue)' }}>{current.title}</h3>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-secondary)', marginBottom: 24 }}>{current.challenge}</p>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-dark)', padding: 24, borderRadius: 'var(--border-radius-md)', marginBottom: 24 }}>
            <div style={{ fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--text-dark-primary)' }}>{current.solution}</div>
          </div>
          <button type="button" onClick={onOpenTalk} className="btn btn-primary">Explore Industry Solution →</button>
        </div>
      </div>
    </section>
  )
}
