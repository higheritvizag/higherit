import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { ShoppingBag, Camera, MapPin, CheckCircle, BarChart3, Users, DollarSign, Calendar, Layers, ShieldCheck, ArrowRight } from 'lucide-react'

const productSuite = {
  jewellery: {
    id: 'jewellery',
    tag: 'JEWELLERY POS & E-COMMERCE',
    title: 'Jewellery Showroom POS & Billing Suite',
    audience: 'Built for Jewellery Showrooms & Multi-Store Retailers',
    desc: 'Omnichannel POS, automatic gold rate billing, inventory tracking, Karat purity calculation, customer ledger, and direct WhatsApp invoice generation.',
    features: ['Gold/Silver Live Rate Billing', 'Stock & Karat Tagging', 'Omnichannel E-commerce Sync', 'Customer Advance Savings Scheme'],
    metrics: [
      { label: 'Daily Billing Revenue', val: '₹4,85,200', icon: DollarSign, color: 'var(--brand-orange)' },
      { label: 'Total Showroom Orders', val: '142 Orders', icon: ShoppingBag, color: 'var(--brand-blue-light)' },
      { label: 'Active Savings Schemes', val: '1,280 Members', icon: Users, color: 'var(--brand-orange)' }
    ],
    mockupUI: {
      type: 'jewellery',
      goldRate: '₹7,140 / g (22K)',
      silverRate: '₹86.5 / g',
      recentSales: [
        { item: '22K Gold Necklace 24.5g', buyer: 'Sita Ram', amount: '₹1,78,400', status: 'PAID' },
        { item: 'Diamond Ring 4.2g', buyer: 'Anand V.', amount: '₹64,500', status: 'PAID' },
        { item: 'Silver Bangle Set', buyer: 'Kavitha P.', amount: '₹12,800', status: 'PAID' }
      ]
    }
  },
  photographer: {
    id: 'photographer',
    tag: 'STUDIO & EVENT CRM',
    title: 'Photographer CRM & Studio Management',
    audience: 'Built for Creative Studios & Event Photographers',
    desc: 'Automated booking calendar, wedding photo package quotes, client proofing galleries, contract signing, advance payments, and WhatsApp shoot reminders.',
    features: ['Instant Shoot Quote Generator', 'Online Client Proofing Gallery', 'Automated Advance Payments', 'Equipment & Team Schedule'],
    metrics: [
      { label: 'Confirmed Weddings', val: '28 Shoots', icon: Camera, color: 'var(--brand-blue-light)' },
      { label: 'Pending Advance Collection', val: '₹3,40,000', icon: DollarSign, color: 'var(--brand-orange)' },
      { label: 'Client Gallery Views', val: '18.4k Views', icon: Users, color: 'var(--brand-blue-light)' }
    ],
    mockupUI: {
      type: 'photographer',
      upcomingShoots: [
        { client: 'Rahul & Ananya Wedding', date: '18 Oct 2026', pkg: 'Destination Platinum', status: 'CONFIRMED' },
        { client: 'Derma Den Corporate Event', date: '24 Oct 2026', pkg: 'Commercial Video', status: 'ADVANCE PAID' },
        { client: 'Somarka Gala Shoot', date: '02 Nov 2026', pkg: 'Full Event Coverage', status: 'INQUIRY' }
      ]
    }
  },
  realestate: {
    id: 'realestate',
    tag: 'REAL ESTATE PLOT CRM',
    title: 'Real Estate Plot & Layout CRM',
    audience: 'Built for Real Estate Developers & Venture Promoters',
    desc: 'Interactive color-coded land layout plot maps, real-time availability tracking, buyer payment schedules, agent commission calculation, and lead routing.',
    features: ['Interactive Plot Availability Map', 'Agent Commission Tracker', 'Buyer Payment Installments', 'Meta Lead WhatsApp Routing'],
    metrics: [
      { label: 'Total Layout Plots', val: '240 Plots', icon: MapPin, color: 'var(--brand-orange)' },
      { label: 'Plots Sold & Registered', val: '184 Sold (76%)', icon: CheckCircle, color: 'var(--brand-blue-light)' },
      { label: 'Active Property Inquiries', val: '310 Leads', icon: Users, color: 'var(--brand-orange)' }
    ],
    mockupUI: {
      type: 'realestate',
      ventureName: 'Green Valley Elite Layout — Phase 2',
      plotSummary: { available: 56, booked: 120, registered: 64 },
      recentBookings: [
        { plotNo: 'Plot #42 (200 Sq Yds)', buyer: 'Venkatesh K.', status: 'BOOKED', amount: '₹12.5L' },
        { plotNo: 'Plot #18 (300 Sq Yds)', buyer: 'Priya Verma', status: 'REGISTERED', amount: '₹18.8L' },
        { plotNo: 'Plot #89 (150 Sq Yds)', buyer: 'Ramesh Naidu', status: 'ADVANCE PAID', amount: '₹9.4L' }
      ]
    }
  }
}

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState('jewellery')
  const current = productSuite[selectedProduct]

  return (
    <section className="section products-section section-theme-light" id="products">
      <div className="container">
        <SectionHeading
          eyebrow="HIGHERIT PRODUCT SUITE"
          eyebrowColor="blue"
          title={<>WE DON'T JUST BUILD FOR BUSINESSES.<br /><span className="highlight-orange">WE BUILD PRODUCTS FOR THEM.</span></>}
          subtitle="Enterprise-grade software platforms tailored to solve specific industry workflow bottlenecks."
        />

        {/* Product Selector Navigation Tabs */}
        <Reveal delay={0.15}>
          <div className="product-selector-tabs">
            <button
              type="button"
              className={`product-tab-card ${selectedProduct === 'jewellery' ? 'active' : ''}`}
              onClick={() => setSelectedProduct('jewellery')}
            >
              <div className="product-tab-tag">SOFTWARE PRODUCT</div>
              <div className="product-tab-title">Jewellery E-commerce & Billing</div>
            </button>

            <button
              type="button"
              className={`product-tab-card ${selectedProduct === 'photographer' ? 'active' : ''}`}
              onClick={() => setSelectedProduct('photographer')}
            >
              <div className="product-tab-tag" style={{ color: 'var(--brand-blue-light)' }}>SOFTWARE PRODUCT</div>
              <div className="product-tab-title">Photographer CRM</div>
            </button>

            <button
              type="button"
              className={`product-tab-card ${selectedProduct === 'realestate' ? 'active' : ''}`}
              onClick={() => setSelectedProduct('realestate')}
            >
              <div className="product-tab-tag">SOFTWARE PRODUCT</div>
              <div className="product-tab-title">Real Estate CRM & Plot Management</div>
            </button>
          </div>
        </Reveal>

        {/* Dynamic SaaS Product Suite Showcase Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="product-showcase-container"
          >
            <div className="product-showcase-grid">
              {/* Left Column: Product Details & Key Features */}
              <div className="product-info-panel">
                <span className="product-tag-pill">{current.tag}</span>
                <h3 className="product-showcase-title">{current.title}</h3>
                <div className="product-audience-badge">{current.audience}</div>
                <p className="product-showcase-desc">{current.desc}</p>

                <div className="product-features-list">
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="product-feature-item">
                      <ShieldCheck style={{ width: 18, height: 18, color: 'var(--brand-orange)' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Metric Summary Cards */}
                <div className="product-metrics-strip">
                  {current.metrics.map((m, idx) => {
                    const Icon = m.icon
                    return (
                      <div key={idx} className="product-mini-metric">
                        <Icon style={{ width: 16, height: 16, color: m.color }} />
                        <div>
                          <div className="pm-val" style={{ color: m.color }}>{m.val}</div>
                          <div className="pm-lbl">{m.label}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Right Column: High-Fidelity Software Dashboard UI Preview */}
              <div className="product-dashboard-preview">
                <div className="mock-window">
                  <div className="mock-window-bar">
                    <div className="mock-dots">
                      <span className="dot red" />
                      <span className="dot yellow" />
                      <span className="dot green" />
                    </div>
                    <div className="mock-url-bar">https://app.higherit.com/{current.id}/dashboard</div>
                    <span className="mock-badge-live">SIMULATED LIVE UI</span>
                  </div>

                  {/* UI Render per Product Type */}
                  <div className="mock-window-content">
                    {current.mockupUI.type === 'jewellery' && (
                      <div className="ui-jewellery-dash">
                        <div className="rates-strip">
                          <div className="rate-badge">Gold Rate: <strong>{current.mockupUI.goldRate}</strong></div>
                          <div className="rate-badge">Silver Rate: <strong>{current.mockupUI.silverRate}</strong></div>
                        </div>
                        <div className="dash-table-title">Recent Showroom Billing Invoices</div>
                        <div className="dash-table">
                          {current.mockupUI.recentSales.map((sale, i) => (
                            <div key={i} className="dash-table-row">
                              <div>
                                <div className="dash-item-name">{sale.item}</div>
                                <div className="dash-item-sub">Buyer: {sale.buyer}</div>
                              </div>
                              <div style={{ textAlign: 'right' }}>
                                <div className="dash-amount">{sale.amount}</div>
                                <span className="dash-status-pill">{sale.status}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {current.mockupUI.type === 'photographer' && (
                      <div className="ui-photo-dash">
                        <div className="dash-table-title">Upcoming Studio & Wedding Shoots</div>
                        <div className="dash-table">
                          {current.mockupUI.upcomingShoots.map((shoot, i) => (
                            <div key={i} className="dash-table-row">
                              <div>
                                <div className="dash-item-name">{shoot.client}</div>
                                <div className="dash-item-sub">{shoot.pkg} • {shoot.date}</div>
                              </div>
                              <span className="dash-status-pill blue">{shoot.status}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {current.mockupUI.type === 'realestate' && (
                      <div className="ui-realestate-dash">
                        <div className="venture-title">{current.mockupUI.ventureName}</div>
                        <div className="plot-legend">
                          <div className="legend-item"><span className="dot-green" /> Available ({current.mockupUI.plotSummary.available})</div>
                          <div className="legend-item"><span className="dot-orange" /> Booked ({current.mockupUI.plotSummary.booked})</div>
                          <div className="legend-item"><span className="dot-blue" /> Registered ({current.mockupUI.plotSummary.registered})</div>
                        </div>
                        <div className="dash-table">
                          {current.mockupUI.recentBookings.map((b, i) => (
                            <div key={i} className="dash-table-row">
                              <div>
                                <div className="dash-item-name">{b.plotNo}</div>
                                <div className="dash-item-sub">Buyer: {b.buyer}</div>
                              </div>
                              <div style={{ textAlign: 'right' }}>
                                <div className="dash-amount">{b.amount}</div>
                                <span className="dash-status-pill">{b.status}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
