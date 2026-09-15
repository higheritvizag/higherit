import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react'

const industryData = {
  healthcare: {
    title: 'Healthcare & Medical Tech Solutions',
    challenge: 'Patient trust, fragmented booking systems, and low online visibility for specialized medical treatments.',
    solution: 'High-trust hospital portals, online appointment scheduling, SEO for medical treatments, and AI receptionist automation.'
  },
  realestate: {
    title: 'Real Estate & Property Tech',
    challenge: 'Lead leaks, unorganized plot inventory, and slow lead follow-ups across sales teams.',
    solution: 'Interactive land layout maps, plot management CRMs, Meta ad funnels, and automated WhatsApp lead distribution.'
  },
  education: {
    title: 'Education & Schools',
    challenge: 'Student enrolment drop-off and lack of digital reputation during admission cycles.',
    solution: 'High-conversion admission web pages, digital campaigns, fee payment portals, and parent enquiry bots.'
  },
  retail: {
    title: 'Retail & E-commerce',
    challenge: 'Inventory sync issues between offline stores and online channels, low repeat purchases.',
    solution: 'Custom e-commerce portals, Jewellery POS integration, automated abandoned cart recovery, and gold rate billing software.'
  },
  hospitality: {
    title: 'Hospitality & Events',
    challenge: 'Reliance on third-party aggregators with high commission fees.',
    solution: 'Direct booking web applications, event photography portfolios, automated quotes, and Google local SEO dominance.'
  },
  services: {
    title: 'Professional Services',
    challenge: 'Positioning authority and acquiring high-ticket corporate accounts.',
    solution: 'Editorial brand strategy, LinkedIn & Google B2B lead generation, pitch decks, and client portal CRMs.'
  },
  startups: {
    title: 'Startups & Technology Companies',
    challenge: 'Need for rapid MVP prototype development, pitch presentation, and scalable cloud architecture.',
    solution: 'Full-stack React + Node web apps, AI integration, SaaS design systems, and rapid go-to-market execution.'
  },
  localbus: {
    title: 'Local Businesses & Showrooms',
    challenge: 'Low local Google map discoverability and reliance on traditional offline footfall alone.',
    solution: 'Google Business Profile dominance, hyper-local search campaigns, customer review engines, and WhatsApp engagement.'
  }
}

export default function IndustryExplorerSection({ onOpenTalk }) {
  const [activeTab, setActiveTab] = useState('healthcare')
  const current = industryData[activeTab] || industryData.healthcare

  return (
    <section className="section industries-section section-theme-light" id="industries">
      <div className="container">
        <SectionHeading
          eyebrow="INDUSTRIES WE SERVE"
          title={<>SOLUTIONS TAILORED <br /><span className="highlight-blue">FOR EVERY INDUSTRY.</span></>}
          subtitle="Deep domain expertise across high-growth business categories."
        />

        {/* Tab Navigation Controls */}
        <Reveal delay={0.15}>
          <div className="ind-tabs">
            {Object.keys(industryData).map(key => (
              <button
                key={key}
                type="button"
                className={`ind-tab-btn ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {key === 'healthcare' && 'Healthcare'}
                {key === 'realestate' && 'Real Estate'}
                {key === 'education' && 'Education'}
                {key === 'retail' && 'Retail & E-commerce'}
                {key === 'hospitality' && 'Hospitality'}
                {key === 'services' && 'Professional Services'}
                {key === 'startups' && 'Startups & Technology'}
                {key === 'localbus' && 'Local Businesses'}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Dynamic Industry Solution Card with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="ind-content-box"
          >
            <h3 className="ind-title">{current.title}</h3>

            <div className="ind-split-grid">
              <div className="ind-block challenge-block">
                <div className="ind-block-header">
                  <AlertCircle style={{ width: 18, height: 18, color: 'var(--brand-orange)' }} />
                  <span>INDUSTRY CHALLENGE</span>
                </div>
                <p className="ind-block-text">{current.challenge}</p>
              </div>

              <div className="ind-block solution-block">
                <div className="ind-block-header">
                  <CheckCircle2 style={{ width: 18, height: 18, color: 'var(--brand-blue-light)' }} />
                  <span>HIGHERIT STRATEGIC SOLUTION</span>
                </div>
                <p className="ind-block-text">{current.solution}</p>
              </div>
            </div>

            <button type="button" onClick={onOpenTalk} className="btn btn-primary" style={{ marginTop: 32 }}>
              Explore Industry Solution <ArrowRight style={{ width: 16, height: 16 }} />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
