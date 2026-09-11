import React from 'react';
import { CapabilitiesSection } from '../sections/CapabilitiesSection';
import { ProcessSection } from '../sections/ProcessSection';
import { FinalCTASection } from '../sections/FinalCTASection';
import { Reveal } from '../components/Reveal';

export const ServicesPage = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section" style={{ background: 'var(--bg-dark)' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">OUR CAPABILITIES</div>
            <h1 className="section-title">
              Complete Digital Solutions. <span class="highlight-orange">One Powerful Partner.</span>
            </h1>
            <p className="section-subtitle">
              From performance marketing and brand design to custom full-stack web applications and AI employees — explore our core capabilities.
            </p>
          </Reveal>
        </div>
      </section>

      <CapabilitiesSection />
      <ProcessSection />
      <FinalCTASection />
    </div>
  );
};
