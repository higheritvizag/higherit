import React from 'react'

export default function AISection() {
  return (
    <section className="section ai-section" id="ai">
      <div className="container">
        <div className="ai-core-layout">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="eyebrow" style={{ margin: '0 auto 24px' }}>THE FUTURE IS INTELLIGENT</div>
            <h2 className="section-title">
              What If Your Business <span className="highlight-orange">Had an AI Team?</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              AI isn't just about generating text or images. Used correctly, custom AI agents and workflow automation handle repetitive operations, qualify leads 24/7, and multiply team productivity.
            </p>
          </div>

          <div className="ai-grid">
            <div className="ai-card">
              <h4 className="ai-title">AI Customer Support</h4>
              <p className="cap-desc" style={{ fontSize: '0.9rem' }}>24/7 instant customer enquiry response across web and WhatsApp.</p>
            </div>
            <div className="ai-card">
              <h4 className="ai-title">AI Lead Assistant</h4>
              <p className="cap-desc" style={{ fontSize: '0.9rem' }}>Qualify, rank, and assign incoming high-intent leads automatically.</p>
            </div>
            <div className="ai-card">
              <h4 className="ai-title">AI Content Engine</h4>
              <p className="cap-desc" style={{ fontSize: '0.9rem' }}>Generate localized marketing assets 10x faster with AI workflows.</p>
            </div>
            <div className="ai-card">
              <h4 className="ai-title">AI Employees</h4>
              <p className="cap-desc" style={{ fontSize: '0.9rem' }}>Virtual team members trained on proprietary business datasets.</p>
            </div>
            <div className="ai-card">
              <h4 className="ai-title">Workflow Automation</h4>
              <p className="cap-desc" style={{ fontSize: '0.9rem' }}>Connect CRM, email, and internal databases to eliminate manual work.</p>
            </div>
            <div className="ai-card">
              <h4 className="ai-title">Custom AI Solutions</h4>
              <p className="cap-desc" style={{ fontSize: '0.9rem' }}>Bespoke machine learning models tailored to company datasets.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
