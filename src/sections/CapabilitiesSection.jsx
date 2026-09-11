import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { TrendingUp, Users, Bot, Code2, Sparkles, CheckCircle2, ArrowRight, Zap, Layers } from 'lucide-react'

export default function CapabilitiesSection({ onOpenTalk }) {
  const [activeBrandTab, setActiveBrandTab] = useState('palette')

  return (
    <section className="section services-section section-theme-light" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title={<>Everything You Need to <span className="highlight-blue">Grow Digitally.</span></>}
          subtitle="Four core capabilities integrated under one strategic roof — eliminating vendor friction and driving enterprise growth."
          align="left"
        />

        <div className="capabilities-vertical-stack">
          {/* BLOCK 1: GROW */}
          <Reveal delay={0.1}>
            <div className="cap-editorial-card cap-grow-card">
              <div className="cap-editorial-grid">
                <div className="cap-editorial-info">
                  <div className="cap-editorial-num">01 / GROW</div>
                  <h3 className="cap-editorial-title">Digital Marketing & Customer Acquisition</h3>
                  <p className="cap-editorial-desc">
                    Performance marketing, Google & Meta ads, search optimization, and automated conversion funnels engineered to acquire high-intent clients at scale.
                  </p>
                  <div className="cap-tags-flex">
                    <span className="cap-tag-pill">Meta & Google Ads</span>
                    <span className="cap-tag-pill">Performance Marketing</span>
                    <span className="cap-tag-pill">SEO & Search Dominance</span>
                    <span className="cap-tag-pill">Lead Funnel Automation</span>
                    <span className="cap-tag-pill">ROAS Optimization</span>
                  </div>
                  <button type="button" onClick={onOpenTalk} className="btn btn-primary">
                    Explore Digital Marketing <ArrowRight style={{ width: 16, height: 16 }} />
                  </button>
                </div>

                {/* GROW Visual Dashboard Interface Widget */}
                <div className="cap-widget-container cap-widget-grow">
                  <div className="cap-widget-header">
                    <div className="cap-widget-badge">
                      <span className="live-dot" /> LIVE AD PERFORMANCE DASHBOARD
                    </div>
                  </div>
                  <div className="cap-widget-metrics-grid">
                    <div className="cap-metric-box">
                      <div className="cap-metric-lbl">Return On Ad Spend (ROAS)</div>
                      <div className="cap-metric-val highlight-orange">+340%</div>
                      <div className="cap-metric-trend"><TrendingUp style={{ width: 14, height: 14 }} /> 24% higher vs Q2</div>
                    </div>
                    <div className="cap-metric-box">
                      <div className="cap-metric-lbl">Monthly Enquiries</div>
                      <div className="cap-metric-val highlight-blue">12,450+</div>
                      <div className="cap-metric-trend"><Users style={{ width: 14, height: 14 }} /> Qualified Leads</div>
                    </div>
                  </div>
                  {/* Simulated Campaign Performance Bar Chart */}
                  <div className="cap-chart-wrap">
                    <div className="cap-chart-bar-col">
                      <div className="cap-chart-bar" style={{ height: '40%' }} />
                      <span>MAY</span>
                    </div>
                    <div className="cap-chart-bar-col">
                      <div className="cap-chart-bar" style={{ height: '60%' }} />
                      <span>JUN</span>
                    </div>
                    <div className="cap-chart-bar-col">
                      <div className="cap-chart-bar" style={{ height: '80%' }} />
                      <span>JUL</span>
                    </div>
                    <div className="cap-chart-bar-col">
                      <div className="cap-chart-bar active-bar" style={{ height: '100%' }} />
                      <span>AUG</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* BLOCK 2: CREATE */}
          <Reveal delay={0.15}>
            <div className="cap-editorial-card cap-create-card">
              <div className="cap-editorial-grid reverse-grid">
                {/* CREATE Visual Brand System Composition Widget */}
                <div className="cap-widget-container cap-widget-create">
                  <div className="brand-preview-card">
                    <div className="brand-header-flex">
                      <div className="brand-title-lbl">HIGHERIT BRAND SYSTEM</div>
                      <div className="brand-tabs">
                        <button
                          type="button"
                          className={`brand-tab-btn ${activeBrandTab === 'palette' ? 'active' : ''}`}
                          onClick={() => setActiveBrandTab('palette')}
                        >
                          Palette
                        </button>
                        <button
                          type="button"
                          className={`brand-tab-btn ${activeBrandTab === 'typography' ? 'active' : ''}`}
                          onClick={() => setActiveBrandTab('typography')}
                        >
                          Fonts
                        </button>
                      </div>
                    </div>

                    {activeBrandTab === 'palette' ? (
                      <div className="brand-swatch-grid">
                        <div className="swatch-item" style={{ background: '#FF7A00' }}>
                          <span>#FF7A00</span>
                          <small>GROWTH ORANGE</small>
                        </div>
                        <div className="swatch-item" style={{ background: '#0B63F6' }}>
                          <span>#0B63F6</span>
                          <small>TECH BLUE</small>
                        </div>
                        <div className="swatch-item" style={{ background: '#02050E', border: '1px solid var(--border-dark)' }}>
                          <span>#02050E</span>
                          <small>DEEP NAVY</small>
                        </div>
                      </div>
                    ) : (
                      <div className="brand-typo-preview">
                        <div className="typo-row">
                          <span className="typo-lbl">HEADINGS</span>
                          <div className="typo-sample font-heading">Outfit Bold 800</div>
                        </div>
                        <div className="typo-row">
                          <span className="typo-lbl">BODY</span>
                          <div className="typo-sample font-body">Plus Jakarta Sans 500</div>
                        </div>
                        <div className="typo-row">
                          <span className="typo-lbl">DATA & CODE</span>
                          <div className="typo-sample font-code">JetBrains Mono 700</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="cap-editorial-info">
                  <div className="cap-editorial-num" style={{ color: 'var(--brand-blue)' }}>02 / CREATE</div>
                  <h3 className="cap-editorial-title">Brand & Creative Studio</h3>
                  <p className="cap-editorial-desc">
                    Positioning clarity, premium design systems, UI/UX aesthetics, and CGI creative campaigns that make companies unforgettable.
                  </p>
                  <div className="cap-tags-flex">
                    <span className="cap-tag-pill">Brand Strategy</span>
                    <span className="cap-tag-pill">Visual Identity</span>
                    <span className="cap-tag-pill">UI/UX Design</span>
                    <span className="cap-tag-pill">Video & CGI</span>
                    <span className="cap-tag-pill">Design Systems</span>
                  </div>
                  <button type="button" onClick={onOpenTalk} className="btn btn-secondary">
                    Explore Creative <ArrowRight style={{ width: 16, height: 16 }} />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* BLOCK 3: BUILD */}
          <Reveal delay={0.2}>
            <div className="cap-editorial-card cap-build-card">
              <div className="cap-editorial-grid">
                <div className="cap-editorial-info">
                  <div className="cap-editorial-num">03 / BUILD</div>
                  <h3 className="cap-editorial-title">Web & Application Engineering</h3>
                  <p className="cap-editorial-desc">
                    High-performance business websites, web applications, e-commerce systems, and custom SaaS software platforms engineered for speed, conversion, and scale.
                  </p>
                  <div className="cap-tags-flex">
                    <span className="cap-tag-pill">Business Websites</span>
                    <span className="cap-tag-pill">React & Vite Web Apps</span>
                    <span className="cap-tag-pill">E-commerce Systems</span>
                    <span className="cap-tag-pill">SaaS Platforms</span>
                    <span className="cap-tag-pill">Lighthouse 98+ Score</span>
                  </div>
                  <button type="button" onClick={onOpenTalk} className="btn btn-primary">
                    Explore Engineering <ArrowRight style={{ width: 16, height: 16 }} />
                  </button>
                </div>

                {/* BUILD Code Architecture Panel Widget */}
                <div className="cap-widget-container cap-widget-build">
                  <div className="code-window">
                    <div className="code-window-header">
                      <span className="code-dot red" />
                      <span className="code-dot yellow" />
                      <span className="code-dot green" />
                      <span className="code-title">architecture.config.js</span>
                    </div>
                    <pre className="code-body">
                      <code>
                        <span className="code-keyword">const</span> HigherITStack = &#123;<br />
                        &nbsp;&nbsp;frontend: [<span className="code-str">'Vite 5'</span>, <span className="code-str">'React 18'</span>, <span className="code-str">'Framer Motion'</span>],<br />
                        &nbsp;&nbsp;architecture: <span className="code-str">'Modular SaaS UI'</span>,<br />
                        &nbsp;&nbsp;performance: &#123;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;lighthouse: <span className="code-num">99</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;loadTime: <span className="code-str">'&lt; 0.4s'</span><br />
                        &nbsp;&nbsp;&#125;<br />
                        &#125;;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* BLOCK 4: INTELLIGENCE */}
          <Reveal delay={0.25}>
            <div className="cap-editorial-card cap-intelligence-card">
              <div className="cap-editorial-grid reverse-grid">
                {/* INTELLIGENCE AI Assistant Panel Widget */}
                <div className="cap-widget-container cap-widget-ai">
                  <div className="ai-status-card">
                    <div className="ai-status-header">
                      <div className="ai-status-indicator">
                        <Bot style={{ width: 20, height: 20, color: 'var(--brand-orange)' }} />
                        <span>AI Workflow Assistant Active</span>
                      </div>
                      <span className="ai-badge-online">ONLINE 24/7</span>
                    </div>
                    <div className="ai-chat-bubble">
                      <p>"I qualified 48 new high-intent leads and scheduled 12 strategy calls automatically today while your team executed client projects."</p>
                    </div>
                    <div className="ai-workflow-tags">
                      <div className="ai-flow-chip"><Zap style={{ width: 12, height: 12, color: 'var(--brand-orange)' }} /> Lead Qualified</div>
                      <div className="ai-flow-chip"><CheckCircle2 style={{ width: 12, height: 12, color: 'var(--brand-blue)' }} /> CRM Updated</div>
                      <div className="ai-flow-chip"><Layers style={{ width: 12, height: 12, color: 'var(--brand-orange)' }} /> WhatsApp Sent</div>
                    </div>
                  </div>
                </div>

                <div className="cap-editorial-info">
                  <div className="cap-editorial-num" style={{ color: 'var(--brand-blue)' }}>04 / INTELLIGENCE</div>
                  <h3 className="cap-editorial-title">AI & Business Automation</h3>
                  <p className="cap-editorial-desc">
                    Deploy intelligent AI chatbots, AI virtual employees, automated lead routing, and WhatsApp workflows to eliminate operational friction and scale productivity.
                  </p>
                  <div className="cap-tags-flex">
                    <span className="cap-tag-pill">AI Lead Assistants</span>
                    <span className="cap-tag-pill">24/7 WhatsApp Chatbots</span>
                    <span className="cap-tag-pill">CRM Workflow Automation</span>
                    <span className="cap-tag-pill">AI Content Engines</span>
                    <span className="cap-tag-pill">Custom ML Models</span>
                  </div>
                  <button type="button" onClick={onOpenTalk} className="btn btn-primary" style={{ background: 'linear-gradient(135deg, var(--brand-blue) 0%, #0047B8 100%)' }}>
                    Explore AI Solutions <ArrowRight style={{ width: 16, height: 16 }} />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
