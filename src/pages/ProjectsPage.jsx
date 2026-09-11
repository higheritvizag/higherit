import React from 'react';
import { SelectedWorkSection } from '../sections/SelectedWorkSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { FinalCTASection } from '../sections/FinalCTASection';
import { Reveal } from '../components/Reveal';

export const ProjectsPage = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section" style={{ background: 'var(--bg-dark)' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">FEATURED PROJECTS</div>
            <h1 className="section-title">
              Work That Speaks <span className="highlight-blue">For Us.</span>
            </h1>
            <p className="section-subtitle">
              Explore how we turn complex business challenges into sleek web applications, high-converting digital campaigns, and distinct brand identities.
            </p>
          </Reveal>
        </div>
      </section>

      <SelectedWorkSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
};
