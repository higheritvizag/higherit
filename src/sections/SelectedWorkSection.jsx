import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react'

const projectsData = [
  {
    id: 'akshaya',
    title: 'Akshaya Hospital',
    industry: 'HEALTHCARE & MEDICAL TECH',
    img: '/assets/images/case_akshaya.png',
    challenge: 'Legacy web portal with high patient bounce rates, fragmented appointment bookings, and low online visibility for specialized treatments.',
    strategy: 'Build a high-trust patient portal, streamline appointment scheduling UI, and launch localized Google Search campaigns for key medical specialties.',
    execution: 'Full-stack React web application development, SEO content architecture, and automated WhatsApp patient appointment reminder integration.',
    result: 'Established market authority as a top regional hospital portal, increasing online appointment enquiries significantly.',
    featured: true
  },
  {
    id: 'flamex',
    title: 'FlameX',
    industry: 'INDUSTRIAL & E-COMMERCE',
    img: '/assets/images/case_flamex.png',
    challenge: 'Inconsistent brand identity and generic digital presence limiting corporate B2B distributor growth.',
    strategy: 'Design a bold high-trust visual brand identity, modern web catalog, and targeted digital marketing campaigns.',
    execution: 'Visual brand system design, product catalog engineering, and Meta performance marketing funnels.',
    result: 'Scaled market brand recognition and expanded corporate B2B buyer inquiries across regional markets.',
    featured: false
  },
  {
    id: 'somarka',
    title: 'Somarka Events',
    industry: 'HOSPITALITY & EVENTS',
    img: '/assets/images/case_flamex.png', // high quality asset
    challenge: 'Dependence on word-of-mouth with low digital reach among premium corporate event planners.',
    strategy: 'Editorial brand positioning, event portfolio showcase, and Google Local SEO dominance.',
    execution: 'High-aesthetic portfolio web application, targeted event marketing campaigns, and lead qualification forms.',
    result: 'Positioned as a premier event management partner with consistent corporate booking inquiries.',
    featured: false
  },
  {
    id: 'dermaden',
    title: '4D Derma Den',
    industry: 'DERMATOLOGY & CLINICAL BEAUTY',
    img: '/assets/images/case_akshaya.png',
    challenge: 'High competition in clinical dermatology with unorganized appointment booking follow-ups.',
    strategy: 'Premium clinical branding, high-converting consultation web pages, and Meta ad campaign funnels.',
    execution: 'Sleek UI/UX web portal, Meta performance ad campaign management, and automated lead routing.',
    result: 'Streamlined clinic consultation bookings and established high patient trust online.',
    featured: false
  }
]

export default function SelectedWorkSection({ onOpenTalk }) {
  const featured = projectsData[0]
  const listProjects = projectsData.slice(1)

  return (
    <section className="section work-section" id="work">
      <div className="container">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title={<>Real Projects. <span className="highlight-blue">Real Results.</span></>}
          subtitle="Discover how we turn business goals into scalable digital assets, brand authority, and measurable revenue growth."
          align="left"
        />

        {/* Featured Case Study Hero Block */}
        <Reveal delay={0.15}>
          <div className="case-editorial-hero">
            <div className="case-hero-img-wrap">
              <img src={featured.img} alt={featured.title} className="case-hero-img" />
              <div className="case-img-badge">{featured.industry}</div>
            </div>

            <div className="case-hero-details">
              <span className="case-eyebrow-tag">FEATURED CASE STUDY</span>
              <h3 className="case-hero-title">{featured.title}</h3>

              <div className="case-phases-grid">
                <div className="case-phase-item">
                  <div className="phase-lbl">01 / CHALLENGE</div>
                  <p className="phase-desc">{featured.challenge}</p>
                </div>
                <div className="case-phase-item">
                  <div className="phase-lbl">02 / STRATEGY</div>
                  <p className="phase-desc">{featured.strategy}</p>
                </div>
                <div className="case-phase-item">
                  <div className="phase-lbl">03 / EXECUTION</div>
                  <p className="phase-desc">{featured.execution}</p>
                </div>
                <div className="case-phase-item result-item">
                  <div className="phase-lbl highlight-orange">04 / OUTCOME & RESULT</div>
                  <p className="phase-desc result-desc">{featured.result}</p>
                </div>
              </div>

              <button type="button" onClick={onOpenTalk} className="btn btn-primary" style={{ marginTop: 24 }}>
                Start Similar Project <ArrowRight style={{ width: 16, height: 16 }} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Secondary Case Studies Grid */}
        <div className="case-editorial-grid">
          {listProjects.map((p, idx) => (
            <Reveal key={p.id} delay={0.15 * (idx + 1)}>
              <div className="case-editorial-card">
                <div className="case-card-img-wrap">
                  <img src={p.img} alt={p.title} className="case-card-img" />
                  <div className="case-card-industry">{p.industry}</div>
                </div>

                <div className="case-card-body">
                  <h4 className="case-card-title">{p.title}</h4>

                  <div className="case-card-sections">
                    <div className="cs-row">
                      <strong>Challenge:</strong> <span>{p.challenge}</span>
                    </div>
                    <div className="cs-row">
                      <strong>Strategy:</strong> <span>{p.strategy}</span>
                    </div>
                    <div className="cs-row result-row">
                      <strong>Result:</strong> <span>{p.result}</span>
                    </div>
                  </div>

                  <button type="button" onClick={onOpenTalk} className="btn-case-link">
                    Explore Case Details <ArrowRight style={{ width: 14, height: 14 }} />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
