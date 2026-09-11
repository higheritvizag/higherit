import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { projectsData } from '../data/projects';

export const SelectedWorkSection = () => {
  const featured = projectsData.find(p => p.featured) || projectsData[0];
  const secondary = projectsData.filter(p => p.id !== featured.id);

  return (
    <section className="section work-section" id="work">
      <div className="container">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title={<>Real Projects. <span className="highlight-blue">Real Results.</span></>}
          align="left"
        />

        {/* Hero Featured Case Study */}
        <Reveal className="case-hero-card" delay={0.1}>
          <div className="case-hero-content">
            <span className="eyebrow eyebrow-blue" style={{ width: 'fit-content' }}>FEATURED CASE STUDY</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, marginBottom: '16px' }}>{featured.title}</h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-secondary)', marginBottom: '24px' }}>
              {featured.industry} • {featured.services.join(' • ')}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dark-muted)', marginBottom: '32px', lineHeight: 1.6 }}>
              {featured.description}
            </p>
            <Link to="/projects" className="btn btn-primary" style={{ width: 'fit-content' }}>View Case Study →</Link>
          </div>
          <img src={featured.image} alt={featured.title} className="case-hero-img" />
        </Reveal>

        {/* Secondary Grid */}
        <div className="case-secondary-grid">
          {secondary.slice(0, 2).map((item, index) => (
            <Reveal key={item.id} delay={0.2 * index} className="case-card">
              <img src={item.image} alt={item.title} className="case-card-img" />
              <div className="case-card-body">
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.85rem', color: index % 2 === 0 ? 'var(--brand-orange)' : 'var(--brand-blue)', fontWeight: 700, marginBottom: '12px' }}>
                  {item.services.join(' • ')}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light-secondary)' }}>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
