import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, PlayCircle } from 'lucide-react';
import { GrowthTrajectory } from '../components/GrowthTrajectory';
import { Reveal } from '../components/Reveal';

export const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <GrowthTrajectory className="hero-trajectory-svg" />

      <div className="container">
        <div className="hero-grid">
          <Reveal className="hero-content" delay={0.1}>
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
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
                <span className="btn-arrow">→</span>
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                <PlayCircle style={{ width: 18, height: 18 }} />
                Explore Our Work
              </Link>
            </div>
          </Reveal>

          <Reveal className="hero-visual-container" delay={0.3}>
            <div className="hero-main-card">
              <img src="/assets/images/hero_rocket.png" alt="HigherIT Digital Growth Rocket Visual" width="580" height="420" />
              
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
          </Reveal>
        </div>

        <Reveal className="hero-metrics-strip" delay={0.5}>
          <div>
            <div className="hero-metric-val"><span className="highlight-orange">150+</span></div>
            <div className="hero-metric-lbl">Projects Delivered</div>
          </div>
          <div>
            <div className="hero-metric-val"><span className="highlight-blue">300+</span></div>
            <div className="hero-metric-lbl">Businesses Served</div>
          </div>
          <div>
            <div className="hero-metric-val"><span class="highlight-orange">50+</span></div>
            <div className="hero-metric-lbl">Active Clients</div>
          </div>
          <div>
            <div className="hero-metric-val"><span className="highlight-blue">4+</span></div>
            <div className="hero-metric-lbl">Years of Experience</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
