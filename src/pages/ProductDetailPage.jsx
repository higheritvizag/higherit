import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import FinalCTASection from '../sections/FinalCTASection'

const productDetails = {
  jewellery: {
    title: 'Jewellery Showroom POS & Billing Suite',
    tag: 'JEWELLERY RETAIL POS',
    desc: 'Omnichannel billing, live gold/silver rate sync, stock Karat tagging, customer savings ledger, and instant WhatsApp invoices.',
    features: ['Gold/Silver Live Rate Billing', 'Stock & Karat Tagging', 'Omnichannel E-commerce Sync', 'Customer Advance Savings Scheme', 'Multi-Store Inventory Ledger', 'Automated GST Invoicing']
  },
  'photographer-crm': {
    title: 'Photographer CRM & Studio Suite',
    tag: 'STUDIO & EVENT CRM',
    desc: 'Automated shoot quotes, client proofing galleries, contract signing, advance collections, and shoot reminders.',
    features: ['Instant Shoot Quote Generator', 'Online Client Proofing Gallery', 'Automated Advance Payments', 'Equipment & Team Schedule', 'Contract E-signatures', 'WhatsApp Client Reminders']
  },
  'real-estate': {
    title: 'Real Estate Plot & Layout CRM',
    tag: 'REAL ESTATE PLOT CRM',
    desc: 'Interactive land layout maps, real-time availability tracking, buyer payment schedules, and automated lead distribution.',
    features: ['Interactive Plot Availability Map', 'Agent Commission Tracker', 'Buyer Payment Installments', 'Meta Lead WhatsApp Routing', 'Venture Layout Management', 'Document Vault']
  }
}

export function ProductDetailPage({ onOpenTalk }) {
  const { id } = useParams()
  const product = productDetails[id] || {
    title: 'Enterprise Software Product Suite',
    tag: 'SOFTWARE PRODUCT',
    desc: 'Bespoke software platforms built to solve complex industry workflow bottlenecks.',
    features: ['Custom Workflow Automation', 'Real-time Analytics', 'Role-based Access Control', 'API Integration Engine']
  }

  return (
    <div style={{ paddingTop: '120px' }}>
      <section className="section section-theme-dark">
        <div className="container">
          <div className="eyebrow eyebrow-blue">{product.tag}</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', marginBottom: '20px' }}>
            {product.title}
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '720px', marginBottom: '40px' }}>
            {product.desc}
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button type="button" onClick={onOpenTalk} className="btn btn-primary">
              Schedule Live Product Demo <ArrowRight style={{ width: 16, height: 16 }} />
            </button>
            <Link to="/products" className="btn btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-theme-light">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '32px' }}>
            Core Platform <span className="highlight-orange">Capabilities</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {product.features.map((feat, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--border-color)', display: 'flex', gap: '14px', alignItems: 'center' }}>
                <CheckCircle2 style={{ color: 'var(--brand-orange)', width: 22, height: 22, flexShrink: 0 }} />
                <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection onOpenTalk={onOpenTalk} />
    </div>
  )
}

export default ProductDetailPage
