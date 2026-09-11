import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { industriesData } from '../data/industries';

export const IndustryExplorerSection = () => {
  const [activeTab, setActiveTab] = useState('healthcare');
  const activeData = industriesData[activeTab] || industriesData.healthcare;

  const tabs = [
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'realestate', label: 'Real Estate' },
    { key: 'education', label: 'Education' },
    { key: 'retail', label: 'Retail & E-commerce' },
    { key: 'hospitality', label: 'Hospitality' },
    { key: 'services', label: 'Professional Services' },
    { key: 'startups', label: 'Startups & Tech' }
  ];

  return (
    <section className="section industries-section" id="industries">
      <div className="container">
        <SectionHeading
          eyebrow="INDUSTRIES WE SERVE"
          title={<>Solutions for <span className="highlight-blue">Every Industry.</span></>}
        />

        <div className="ind-explorer-grid">
          <div className="ind-tab-list">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`ind-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <Reveal key={activeData.id} className="ind-detail-panel" delay={0.1}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, marginBottom: '16px', color: 'var(--brand-blue)' }}>
              {activeData.title}
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-light-secondary)', marginBottom: '24px' }}>
              {activeData.challenge}
            </p>
            <div style={{ background: 'var(--bg-light)', border: '1px solid var(--border-light)', padding: '24px', borderRadius: 'var(--border-radius-md)', marginBottom: '24px' }}>
              <div style={{ fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>
                {activeData.solution}
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary">Explore Industry Solution →</Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
