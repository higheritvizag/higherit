import React from 'react'
import { Sparkles, PlayCircle } from 'lucide-react'

export default function HeroSection({ onOpenTalk }) {
  return (
    <section className="hero" id="home">
      {/* Continuous Upward Orange Vector Trajectory SVG Backdrop */}
      <svg className="hero-trajectory-svg" viewBox="0 0 800 600" fill="none">
        <path d="M-100 550 C200 450, 350 250, 750 50" stroke="url(#heroOrangeGradient)" strokeWidth="6" strokeLinecap="round" />
        <path d="M-100 550 C200 450, 350 250, 750 50" stroke="url(#heroOrangeGlow)" strokeWidth="20" strokeOpacity="0.3" strokeLinecap="round" />
        <defs>
          <linearGradient id="heroOrangeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="#FF9433" />
          </linearGradient>
          <linearGradient id="heroOrangeGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="#0B63F6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="eyebrow">
              <Sparkles style={{ width: 16, height: 16 }} />
              DIGITAL • TECHNOLOGY • AI
            </div>
            <h1 className="hero-headline">
              We Build. <span className="highlight-blue">We Grow.</span><br />
              We Take Businesses <span className="highlight-orange">Higher.</span>
            </h1>
            <p className="hero-subtext">
              HigherIT is a digital growth and technology company helping businesses build powerful brands, attract more customers and use technology to work smarter. From branding and digital marketing to websites, applications, AI and automation, we bring strategy, creativity and technology together under one roof.
            </p>
            <div className="hero-buttons">
              <button type="button" onClick={onOpenTalk} className="btn btn-primary">
                Start Your Project
                <span className="btn-arrow">→</span>
              </button>
              <a href="#work" className="btn btn-secondary">
                <PlayCircle style={{ width: 18, height: 18 }} />
                Explore Our Work
              </a>
            </div>
          </div>

          <div className="hero-visual-container">
            <div className="hero-main-card">
              <img src="/assets/images/hero_rocket.png" alt="HigherIT Digital Growth Rocket Visual" width="580" height="420" />
              
              {/* Floating Nodes */}
              <div className="hero-floating-node node-pos-1">
                <div className="hero-node-dot"></div>
                <div className="hero-node-text">STRATEGY <span>• You Dream</span></div>
              </div>
              <div className="hero-floating-node node-pos-2">
                <div className="hero-node-dot"></div>
                <div className="hero-node-text">DIGITAL <span>• We Build</span></div>
              </div>
              <div className="hero-floating-node node-pos-3">
                <div className="hero-node-dot"></div>
                <div className="hero-node-text">GROWTH <span>• We Scale</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Metrics Strip */}
        <div className="hero-metrics-strip">
          <div>
            <div className="hero-metric-val"><span className="highlight-orange">150+</span></div>
            <div className="hero-metric-lbl">Projects Delivered</div>
          </div>
          <div>
            <div className="hero-metric-val"><span className="highlight-blue">300+</span></div>
            <div className="hero-metric-lbl">Businesses Served</div>
          </div>
          <div>
            <div className="hero-metric-val"><span className="highlight-orange">50+</span></div>
            <div className="hero-metric-lbl">Active Clients</div>
          </div>
          <div>
            <div className="hero-metric-val"><span className="highlight-blue">4+</span></div>
            <div className="hero-metric-lbl">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
