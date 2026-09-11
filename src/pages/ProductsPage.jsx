import React from 'react';
import { ProductsSection } from '../sections/ProductsSection';
import { FinalCTASection } from '../sections/FinalCTASection';
import { Reveal } from '../components/Reveal';

export const ProductsPage = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section" style={{ background: 'var(--bg-dark)' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow eyebrow-blue">OUR SOFTWARE PRODUCTS</div>
            <h1 className="section-title">
              We Don't Just Build For Businesses. <span className="highlight-orange">We Build Products For Them.</span>
            </h1>
            <p className="section-subtitle">
              HigherIT engineers proprietary software platforms, CRMs, and retail POS engines designed for specialized industry verticals.
            </p>
          </Reveal>
        </div>
      </section>

      <ProductsSection />
      <FinalCTASection />
    </div>
  );
};
