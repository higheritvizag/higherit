import React from 'react';
import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

export const AboutSection = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '60px', alignItems: 'center' }}>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="WHO WE ARE"
              title={<>Every Business Has a <span className="highlight-blue">Higher Version.</span></>}
              subtitle="HigherIT was built with a simple belief: Technology should make business better. Not more complicated. Not more expensive. Better."
              align="left"
            />
            <p style={{ fontSize: '1.05rem', color: 'var(--text-light-secondary)', lineHeight: 1.8, marginBottom: '28px' }}>
              We combine creativity, technology, digital marketing and emerging AI to help businesses move from where they are today to where they want to be tomorrow.
            </p>
            <Link to="/about" className="btn btn-primary">More About HigherIT →</Link>
          </Reveal>

          <Reveal delay={0.3} style={{ background: 'linear-gradient(135deg, #0A0F1D 0%, #030712 100%)', borderRadius: 'var(--border-radius-xl)', padding: '48px', border: '1px solid var(--border-dark)', boxShadow: 'var(--shadow-lg)' }}>
            <Quote style={{ width: 48, height: 48, color: 'var(--brand-orange)', marginBottom: '24px' }} />
            <p style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.6 }}>
              "Our goal isn't just to deliver a project. It's to construct an enduring digital engine that drives client revenue, automated leverage, and industry dominance."
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
