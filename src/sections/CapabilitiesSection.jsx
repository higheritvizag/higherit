import React from 'react'
import { TrendingUp, Users, Bot } from 'lucide-react'

export default function CapabilitiesSection({ onOpenTalk }) {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'left', maxWidth: '100%', marginBottom: 80 }}>
          <div className="eyebrow">WHAT WE DO</div>
          <h2 className="section-title">
            Everything You Need to <span className="highlight-blue">Grow Digitally.</span>
          </h2>
        </div>

        {/* BLOCK 1: GROW */}
        <div className="capability-block" style={{ marginBottom: 40 }}>
          <div className="cap-split-grid">
            <div>
              <div className="cap-num">01 / GROW</div>
              <h3 className="cap-title">Digital Marketing & Customer Acquisition</h3>
              <p className="cap-desc">Performance ads, search optimization, and automated lead funnels engineered to scale client revenue consistently.</p>
              <div className="cap-tags-flex" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24 }}>
                <span className="cap-tag-pill">Social Media Marketing</span>
                <span className="cap-tag-pill">Performance Marketing</span>
                <span className="cap-tag-pill">Meta Ads</span>
                <span className="cap-tag-pill">Google Ads</span>
                <span className="cap-tag-pill">SEO & Analytics</span>
                <span className="cap-tag-pill">Lead Generation</span>
              </div>
              <button type="button" onClick={onOpenTalk} className="btn btn-primary">Explore Digital Marketing →</button>
            </div>

            <div className="widget-ad-metrics">
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--brand-orange)', marginBottom: 20 }}>
                Live Performance Dashboard
              </div>
              <div className="widget-metric-row">
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dark-secondary)' }}>Return On Ad Spend (ROAS)</div>
                  <div className="widget-metric-val">+340%</div>
                </div>
                <TrendingUp style={{ color: 'var(--brand-orange)' }} />
              </div>
              <div className="widget-metric-row">
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dark-secondary)' }}>Qualified Enquiries / Month</div>
                  <div className="widget-metric-val" style={{ color: 'var(--brand-blue-light)' }}>12,450+</div>
                </div>
                <Users style={{ color: 'var(--brand-blue-light)' }} />
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 2: CREATE */}
        <div className="capability-block" style={{ marginBottom: 40 }}>
          <div className="cap-split-grid">
            <div style={{ background: 'var(--bg-light)', border: '1px solid var(--border-light)', borderRadius: 'var(--border-radius-xl)', padding: 40, color: 'var(--text-light-primary)' }}>
              <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand-orange)' }}></div>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand-blue)' }}></div>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#0F172A' }}></div>
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, marginBottom: 8 }}>Visual Identity & Brand System</div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-light-secondary)' }}>Crafting distinct visual language, typography systems, and CGI design assets that position companies as category leaders.</p>
            </div>

            <div>
              <div className="cap-num">02 / CREATE</div>
              <h3 className="cap-title">Brand & Creative Studio</h3>
              <p className="cap-desc">Positioning clarity, high-trust design systems, UI/UX aesthetics, and CGI creative campaigns that make brands unforgettable.</p>
              <div className="cap-tags-flex" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24 }}>
                <span className="cap-tag-pill">Brand Strategy</span>
                <span className="cap-tag-pill">Visual Identity</span>
                <span className="cap-tag-pill">Logo Design</span>
                <span className="cap-tag-pill">UI/UX Design</span>
                <span className="cap-tag-pill">Video & CGI</span>
                <span className="cap-tag-pill">AI Creative</span>
              </div>
              <button type="button" onClick={onOpenTalk} className="btn btn-secondary" style={{ color: 'var(--text-dark-primary)', borderColor: 'var(--border-dark)' }}>Explore Creative →</button>
            </div>
          </div>
        </div>

        {/* BLOCK 3: BUILD */}
        <div className="capability-block" style={{ marginBottom: 40 }}>
          <div className="cap-full-dark">
            <div className="cap-split-grid">
              <div>
                <div className="cap-num">03 / BUILD</div>
                <h3 className="cap-title" style={{ color: '#FFFFFF' }}>Web & Application Engineering</h3>
                <p className="cap-desc">High-performance business websites, web applications, e-commerce systems, and custom SaaS software platforms built to scale.</p>
                <div className="cap-tags-flex" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24 }}>
                  <span className="cap-tag-pill" style={{ background: 'rgba(255,255,255,0.06)', color: '#FFFFFF', borderColor: 'var(--border-dark)' }}>Business Websites</span>
                  <span className="cap-tag-pill" style={{ background: 'rgba(255,255,255,0.06)', color: '#FFFFFF', borderColor: 'var(--border-dark)' }}>Web Applications</span>
                  <span className="cap-tag-pill" style={{ background: 'rgba(255,255,255,0.06)', color: '#FFFFFF', borderColor: 'var(--border-dark)' }}>E-commerce</span>
                  <span className="cap-tag-pill" style={{ background: 'rgba(255,255,255,0.06)', color: '#FFFFFF', borderColor: 'var(--border-dark)' }}>SaaS Platforms</span>
                </div>
                <button type="button" onClick={onOpenTalk} className="btn btn-primary">Explore Development →</button>
              </div>

              <div className="code-snippet-box" style={{ background: 'rgba(0,0,0,0.5)', padding: 24, borderRadius: 16, fontFamily: 'var(--font-code)', fontSize: '0.85rem', color: '#3D85FF' }}>
                // HigherIT Tech Stack Architecture<br />
                const stack = &#123;<br />
                &nbsp;&nbsp;frontend: ['Vite', 'React 18', 'Vanilla CSS'],<br />
                &nbsp;&nbsp;backend: ['Node.js', 'REST & GraphQL API'],<br />
                &nbsp;&nbsp;performance: 'Lighthouse Score 98+'<br />
                &#125;;
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 4: INTELLIGENCE */}
        <div className="capability-block">
          <div className="cap-split-grid">
            <div>
              <div className="cap-num">04 / INTELLIGENCE</div>
              <h3 className="cap-title">AI & Business Automation</h3>
              <p className="cap-desc">Deploy intelligent AI chatbots, AI virtual employees, automated lead routing, and WhatsApp workflows to eliminate operational friction.</p>
              <button type="button" onClick={onOpenTalk} className="btn btn-primary" style={{ marginTop: 16 }}>Explore AI Solutions →</button>
            </div>

            <div style={{ background: 'var(--bg-dark-card)', border: '1px solid var(--border-dark-hover)', borderRadius: 'var(--border-radius-xl)', padding: 40, color: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <Bot style={{ color: 'var(--brand-orange)' }} />
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>AI Lead Assistant Active</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-secondary)' }}>"Hello! I answered 48 client enquiries and scheduled 12 strategy calls today while your team focused on execution."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
