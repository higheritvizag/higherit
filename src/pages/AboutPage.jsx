import React from 'react';
import { AboutSection } from '../sections/AboutSection';
import { WhySection } from '../sections/WhySection';
import { StatsSection } from '../sections/StatsSection';
import { FinalCTASection } from '../sections/FinalCTASection';
import { Reveal } from '../components/Reveal';

export const AboutPage = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section" style={{ background: 'var(--bg-dark)' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">ABOUT HIGHERIT</div>
            <h1 className="section-title">
              We Believe Every Business Can <span className="highlight-blue">Go Higher.</span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '800px' }}>
              HigherIT was founded with a singular conviction: technology, AI, and strategic digital execution should simplify business growth, multiply productivity, and create market dominance.
            </p>
          </Reveal>
        </div>
      </section>

      <AboutSection />
      <WhySection />
      <StatsSection />
      <FinalCTASection />
    </div>
  );
};
