import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { blogData } from '../data/blog';

export const InsightsSection = () => {
  const featured = blogData.find(b => b.featured) || blogData[0];
  const sideArticles = blogData.filter(b => !b.featured);

  return (
    <section className="section blog-section" id="blog">
      <div className="container">
        <SectionHeading
          eyebrow="HIGHERIT INSIGHTS"
          title={<>Ideas That Help Businesses <span className="highlight-blue">Go Higher.</span></>}
        />

        <div className="blog-editorial-grid">
          <Reveal delay={0.1} style={{ background: 'var(--bg-light-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--border-radius-xl)', padding: '48px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-orange)', textTransform: 'uppercase', marginBottom: '12px' }}>
              {featured.category}
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px' }}>
              {featured.title}
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-light-secondary)', lineHeight: 1.6 }}>
              {featured.excerpt}
            </p>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {sideArticles.map((art, index) => (
              <Reveal key={art.id} delay={0.1 * index} style={{ background: 'var(--bg-light-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--border-radius-lg)', padding: '28px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: index % 2 === 0 ? 'var(--brand-blue)' : 'var(--brand-orange)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {art.category}
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800 }}>
                  {art.title}
                </h4>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
