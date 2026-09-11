import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { productsData } from '../data/products';

export const ProductsSection = () => {
  return (
    <section className="section products-section" id="products">
      <div className="container">
        <SectionHeading
          eyebrow="OUR PRODUCTS"
          eyebrowColor="blue"
          title={<>We Don't Just Build For Businesses.<br /><span className="highlight-orange">We Build Products For Them.</span></>}
        />

        <div className="products-grid">
          {productsData.map((prod, index) => (
            <Reveal key={prod.id} delay={0.1 * index} className="product-saas-card">
              <div className="saas-ui-preview">
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 800, color: prod.tagColor, marginBottom: '8px' }}>
                  {prod.category}
                </div>
                <div style={{ height: 8, width: '75%', background: 'rgba(255,255,255,0.1)', borderRadius: 4, marginBottom: 6 }}></div>
                <div style={{ height: 8, width: '45%', background: 'rgba(255,255,255,0.1)', borderRadius: 4 }}></div>
                <div style={{ marginTop: 'auto', fontSize: '0.75rem', color: 'var(--text-dark-muted)' }}>
                  {prod.dashboardStats.label}: <span style={{ color: '#FFF', fontWeight: 700 }}>{prod.dashboardStats.value}</span>
                </div>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                {prod.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-secondary)', marginBottom: '20px' }}>
                {prod.description}
              </p>
              <Link to={`/products/${prod.slug}`} style={{ color: 'var(--brand-orange)', fontWeight: 700, fontSize: '0.9rem' }}>
                Explore Product Architecture →
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
