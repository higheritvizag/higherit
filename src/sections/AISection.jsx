import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

export const AISection = () => {
  const aiCapabilities = [
    { title: 'AI Customer Support', desc: '24/7 instant customer enquiry response across web and WhatsApp.' },
    { title: 'AI Lead Assistant', desc: 'Qualify, rank, and assign incoming high-intent leads automatically.' },
    { title: 'AI Content Engine', desc: 'Generate localized marketing assets 10x faster with AI workflows.' },
    { title: 'AI Employees', desc: 'Virtual team members trained on proprietary business datasets.' },
    { title: 'Workflow Automation', desc: 'Connect CRM, email, and internal databases to eliminate manual work.' },
    { title: 'Custom AI Solutions', desc: 'Bespoke machine learning models tailored to company datasets.' }
  ];

  return (
    <section className="section ai-section" id="ai">
      <div className="container">
        <div className="ai-core-layout">
          <SectionHeading
            eyebrow="THE FUTURE IS INTELLIGENT"
            title={<>What If Your Business <span className="highlight-orange">Had an AI Team?</span></>}
            subtitle="AI isn't just about generating text or images. Used correctly, custom AI agents and workflow automation handle repetitive operations, qualify leads 24/7, and multiply team productivity."
          />

          <div className="ai-satellites-grid">
            {aiCapabilities.map((item, index) => (
              <Reveal key={item.title} delay={0.1 * index} className="ai-sat-card">
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dark-secondary)' }}>{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
