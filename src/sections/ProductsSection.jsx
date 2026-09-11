import React from 'react'

export default function ProductsSection() {
  return (
    <section className="section products-section" id="products">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="eyebrow eyebrow-blue" style={{ margin: '0 auto 24px' }}>OUR PRODUCTS</div>
          <h2 className="section-title">
            We Don't Just Build For Businesses.<br />
            <span className="highlight-orange">We Build Products For Them.</span>
          </h2>
        </div>

        <div className="products-grid">
          <div className="product-card">
            <span className="product-tag">JEWELLERY POS & STORE</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginBottom: 12 }}>Jewellery E-commerce & Billing</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dark-secondary)', marginBottom: 20 }}>Omnichannel retail, inventory management, gold rate billing, and online store platform.</p>
            <div style={{ background: 'rgba(255,122,0,0.05)', border: '1px solid rgba(255,122,0,0.2)', padding: 16, borderRadius: 'var(--border-radius-md)', fontSize: '0.85rem', color: 'var(--brand-orange)' }}>
              Built for Jewellery Showrooms & Retailers
            </div>
          </div>

          <div className="product-card">
            <span className="product-tag" style={{ color: 'var(--brand-blue)', background: 'rgba(11,99,246,0.1)' }}>PHOTOGRAPHER CRM</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginBottom: 12 }}>Photographer CRM</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dark-secondary)', marginBottom: 20 }}>Booking, event scheduling, gallery delivery, contract signing, and payment automation.</p>
            <div style={{ background: 'rgba(11,99,246,0.05)', border: '1px solid rgba(11,99,246,0.2)', padding: 16, borderRadius: 'var(--border-radius-md)', fontSize: '0.85rem', color: 'var(--brand-blue-light)' }}>
              Built for Creative Studios & Event Photographers
            </div>
          </div>

          <div className="product-card" style={{ gridColumn: 'span 2' }}>
            <span className="product-tag">REAL ESTATE PLOT CRM</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginBottom: 12 }}>Real Estate Plot Management</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dark-secondary)', marginBottom: 20 }}>Interactive land layout mapping, plot tracking, buyer CRM, and automated lead assignment.</p>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-dark)', padding: 16, borderRadius: 'var(--border-radius-md)', fontSize: '0.85rem', color: 'var(--text-dark-primary)' }}>
              Built for Real Estate Developers & Venture Promoters
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
