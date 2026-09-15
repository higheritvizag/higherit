import React from 'react'
import ProductsSection from '../sections/ProductsSection'
import FinalCTASection from '../sections/FinalCTASection'
import { Reveal } from '../components/Reveal'

export function ProductsPage({ onOpenTalk }) {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section section-theme-dark">
        <div className="container">
          <Reveal>
            <div className="eyebrow eyebrow-blue">SOFTWARE PRODUCTS</div>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 900, lineHeight: 1.1 }}>
              WE DON'T JUST BUILD FOR BUSINESSES.<br />
              <span className="highlight-orange">WE BUILD PRODUCTS FOR THEM.</span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '780px', fontSize: '1.2rem' }}>
              HigherIT engineers proprietary software platforms, CRMs, and retail POS engines designed for specialized industry verticals.
            </p>
          </Reveal>
        </div>
      </section>

      <ProductsSection />
      <FinalCTASection onOpenTalk={onOpenTalk} />
    </div>
  )
}

export default ProductsPage
