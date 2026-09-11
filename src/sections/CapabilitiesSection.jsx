import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Bot } from 'lucide-react';
import { servicesData } from '../data/services';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

export const CapabilitiesSection = () => {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title={<>Everything You Need to <span className="highlight-blue">Grow Digitally.</span></>}
          align="left"
          className="style-header-override"
        />

        {/* BLOCK 1: GROW */}
        <Reveal className="capability-block" delay={0.1}>
          <div className="cap-split-grid">
            <div>
              <div className="cap-num">01 / GROW</div>
              <h3 className="cap-title">Digital Marketing & Customer Acquisition</h3>
              <p className="cap-desc">Performance ads, search optimization, and automated lead funnels engineered to scale client revenue consistently.</p>
              <div className="cap-tags-flex">
                {['Social Media Marketing', 'Performance Marketing', 'Meta Ads', 'Google Ads', 'SEO & Analytics', 'Lead Generation'].map(tag => (
                  <span key={tag} className="cap-tag-pill">{tag}</span>
                ))}
              </div>
              <Link to="/services#grow" className="btn btn-primary">Explore Digital Marketing →</Link>
            </div>

            <div className="widget-ad-metrics">
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--brand-orange)', marginBottom: '20px' }}>
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
        </Reveal>

        {/* BLOCK 2: CREATE */}
        <Reveal className="capability-block" delay={0.2}>
          <div className="cap-split-grid">
            <div style={{ background: 'var(--bg-light)', border: '1px solid var(--border-light)', borderRadius: 'var(--border-radius-xl)', padding: '40px' }}>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand-orange)' }}></div>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand-blue)' }}></div>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#0F172A' }}></div>
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Visual Identity & Brand System</div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-light-secondary)' }}>Crafting distinct visual language, typography systems, and CGI design assets that position companies as category leaders.</p>
            </div>

            <div>
              <div className="cap-num">02 / CREATE</div>
              <h3 className="cap-title">Brand & Creative Studio</h3>
              <p className="cap-desc">Positioning clarity, high-trust design systems, UI/UX aesthetics, and CGI creative campaigns that make brands unforgettable.</p>
              <div className="cap-tags-flex">
                {['Brand Strategy', 'Visual Identity', 'Logo Design', 'UI/UX Design', 'Video & CGI', 'AI Creative'].map(tag => (
                  <span key={tag} className="cap-tag-pill">{tag}</span>
                ))}
              </div>
              <Link to="/services#create" className="btn btn-secondary" style={{ color: 'var(--text-light-primary)', borderColor: 'var(--border-light)' }}>Explore Creative →</Link>
            </div>
          </div>
        </Reveal>

        {/* BLOCK 3: BUILD */}
        <Reveal className="capability-block" delay={0.3}>
          <div className="cap-full-dark">
            <div className="cap-split-grid">
              <div>
                <div className="cap-num">03 / BUILD</div>
                <h3 className="cap-title" style={{ color: '#FFFFFF' }}>Web & Application Engineering</h3>
                <p className="cap-desc">High-performance business websites, web applications, e-commerce systems, and custom SaaS software platforms built to scale.</p>
                <div className="cap-tags-flex">
                  {['Business Websites', 'Web Applications', 'E-commerce', 'SaaS Platforms'].map(tag => (
                    <span key={tag} className="cap-tag-pill" style={{ background: 'rgba(255,255,255,0.06)', color: '#FFFFFF', borderColor: 'var(--border-dark)' }}>{tag}</span>
                  ))}
                </div>
                <Link to="/services#build" className="btn btn-blue">Explore Development →</Link>
              </div>

              <div className="code-snippet-box">
                {`// HigherIT Tech Stack Architecture\nconst stack = {\n  frontend: ['Vite', 'React 18', 'Vanilla CSS'],\n  backend: ['Node.js', 'REST & GraphQL API'],\n  performance: 'Lighthouse Score 98+'\n};`}
              </div>
            </div>
          </div>
        </Reveal>

        {/* BLOCK 4: INTELLIGENCE */}
        <Reveal className="capability-block" delay={0.4}>
          <div className="cap-split-grid">
            <div>
              <div className="cap-num">04 / INTELLIGENCE</div>
              <h3 className="cap-title">AI & Business Automation</h3>
              <p className="cap-desc">Deploy intelligent AI chatbots, AI virtual employees, automated lead routing, and WhatsApp workflows to eliminate operational friction.</p>
              <Link to="/services#intelligence" className="btn btn-primary">Explore AI Solutions →</Link>
            </div>

            <div style={{ background: 'var(--bg-dark-card)', border: '1px solid var(--border-dark-hover)', borderRadius: 'var(--border-radius-xl)', padding: '40px', color: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Bot style={{ color: 'var(--brand-orange)' }} />
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>AI Lead Assistant Active</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-secondary)' }}>"Hello! I answered 48 client enquiries and scheduled 12 strategy calls today while your team focused on execution."</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
