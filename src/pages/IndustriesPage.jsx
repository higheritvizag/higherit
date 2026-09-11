import React from 'react';
import { IndustryExplorerSection } from '../sections/IndustryExplorerSection';
import { FinalCTASection } from '../sections/FinalCTASection';
import { Reveal } from '../components/Reveal';

export const IndustriesPage = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section" style={{ background: 'var(--bg-dark)' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">INDUSTRIES WE SERVE</div>
            <h1 className="section-title">
              Different Industries. <span className="highlight-blue">One Digital Mindset.</span>
            </h1>
            <p className="section-subtitle">
              We build specialized digital ecosystems and growth funnels tailored to specific sector dynamics.
            </p>
          </Reveal>
        </div>
      </section>

      <IndustryExplorerSection />
      <FinalCTASection />
    </div>
  );
};
