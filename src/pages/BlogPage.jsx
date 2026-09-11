import React from 'react';
import { InsightsSection } from '../sections/InsightsSection';
import { FinalCTASection } from '../sections/FinalCTASection';
import { Reveal } from '../components/Reveal';

export const BlogPage = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section" style={{ background: 'var(--bg-dark)' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">HIGHERIT INSIGHTS</div>
            <h1 className="section-title">
              Ideas That Help Businesses <span className="highlight-orange">Go Higher.</span>
            </h1>
            <p className="section-subtitle">
              Strategic articles and technical insights on digital growth, AI automation, branding, and web performance.
            </p>
          </Reveal>
        </div>
      </section>

      <InsightsSection />
      <FinalCTASection />
    </div>
  );
};
