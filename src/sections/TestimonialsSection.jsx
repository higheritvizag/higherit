import React from 'react';
import { Reveal } from '../components/Reveal';
import { testimonialsData } from '../data/testimonials';

export const TestimonialsSection = () => {
  const featured = testimonialsData.find(t => t.featured) || testimonialsData[0];
  const supporting = testimonialsData.filter(t => !t.featured);

  return (
    <section className="section testimonials-section">
      <div className="container">
        <Reveal className="testi-featured-box" delay={0.1}>
          <div style={{ color: '#FFC107', fontSize: '1.2rem', marginBottom: '16px' }}>
            {'★'.repeat(featured.stars)}
          </div>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-light-primary)', lineHeight: 1.6, marginBottom: '24px' }}>
            "{featured.text}"
          </p>
          <div style={{ fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
            {featured.author} — {featured.source}
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {supporting.map((item, index) => (
            <Reveal key={item.id} delay={0.1 * index} style={{ background: 'var(--bg-light-surface)', border: '1px solid var(--border-light)', padding: '28px', borderRadius: 'var(--border-radius-lg)' }}>
              <div style={{ color: '#FFC107', fontSize: '1rem', marginBottom: '12px' }}>
                {'★'.repeat(item.stars)}
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                "{item.text}"
              </p>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', fontFamily: 'var(--font-heading)' }}>
                {item.author} ({item.source})
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
