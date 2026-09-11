import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

export const FinalCTASection = () => {
  return (
    <section className="final-cta-section" id="contact">
      <div className="container">
        <Reveal className="final-cta-card" delay={0.1}>
          <div>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.6rem, 4.5vw, 3.8rem)', marginBottom: '16px' }}>
              Ready to Take Your Business <span className="highlight-orange">Higher?</span>
            </h2>
            <p className="section-subtitle">Tell us where you are today. We'll help you figure out where to go next.</p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Start Your Project →</Link>
            <a href="tel:+919160368468" className="btn btn-secondary">Talk to HigherIT</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
