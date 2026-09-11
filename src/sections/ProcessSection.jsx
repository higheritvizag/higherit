import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

export const ProcessSection = () => {
  const steps = [
    { num: '01', name: 'Discover', desc: 'Business model & goals' },
    { num: '02', name: 'Define', desc: 'Target audience analysis' },
    { num: '03', name: 'Strategize', desc: 'Growth & tech roadmap' },
    { num: '04', name: 'Create', desc: 'Design & engineering' },
    { num: '05', name: 'Launch', desc: 'Full QA & activation' },
    { num: '06', name: 'Optimize', desc: 'Data-driven iteration' },
    { num: '07', name: 'Scale', desc: 'AI & process leverage' }
  ];

  return (
    <section className="section process-section" id="process">
      <div className="container">
        <SectionHeading
          eyebrow="THE HIGHERIT WAY"
          title={<>Strategy First. Technology Second. <span className="highlight-orange">Growth Always.</span></>}
        />

        <div className="process-trajectory-container">
          <svg className="process-curve-svg" viewBox="0 0 1200 60" fill="none">
            <path d="M0 30 Q 300 0, 600 30 T 1200 30" stroke="var(--brand-orange)" strokeWidth="3" strokeDasharray="8" />
          </svg>

          <Reveal className="process-steps-7" delay={0.2}>
            {steps.map((step) => (
              <div key={step.num} className="p-step-card">
                <div className="p-step-num">{step.num}</div>
                <div className="p-step-name">{step.name}</div>
                <div className="p-step-desc">{step.desc}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
};
