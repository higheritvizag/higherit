import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { ArrowRight, Clock, BookOpen } from 'lucide-react'

export default function InsightsSection() {
  return (
    <section className="section blog-section section-theme-light" id="blog">
      <div className="container">
        <SectionHeading
          eyebrow="HIGHERIT INSIGHTS"
          title={<>IDEAS THAT HELP <br /><span className="highlight-orange">BUSINESSES GO HIGHER.</span></>}
          subtitle="Strategic perspectives on digital growth, technology, software engineering, and AI automation."
        />

        <div className="insights-editorial-grid">
          {/* 1 Large Featured Article */}
          <Reveal delay={0.1}>
            <div className="insight-featured-card">
              <div className="insight-meta-flex">
                <span className="insight-cat-tag cat-growth">DIGITAL GROWTH</span>
                <span className="insight-read-time"><Clock style={{ width: 14, height: 14 }} /> 5 min read</span>
              </div>
              <h3 className="insight-featured-title">Why Your Business Website Isn't Converting High-Intent Traffic into Customers</h3>
              <p className="insight-featured-excerpt">
                Discover the 5 strategic UX friction points, slow loading architectures, and weak value propositions that cause enterprise leads to bounce — and how to fix them.
              </p>
              <div className="insight-author-row">
                <div className="insight-author-avatar">HI</div>
                <div>
                  <div className="insight-author-name">HigherIT Growth Team</div>
                  <div className="insight-pub-date">Sep 2026 • Strategy Guide</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 2 Supporting Articles Column */}
          <div className="insights-supporting-col">
            <Reveal delay={0.2}>
              <div className="insight-secondary-card">
                <div className="insight-meta-flex">
                  <span className="insight-cat-tag cat-ai">AI & AUTOMATION</span>
                  <span className="insight-read-time"><Clock style={{ width: 14, height: 14 }} /> 4 min read</span>
                </div>
                <h4 className="insight-secondary-title">How Growing Companies Save 20 Hours a Week with Custom AI Workflows</h4>
                <p className="insight-secondary-desc">From WhatsApp lead qualification to automated CRM updates, see how AI virtual employees work 24/7.</p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="insight-secondary-card">
                <div className="insight-meta-flex">
                  <span className="insight-cat-tag cat-branding">BRANDING & TECH</span>
                  <span className="insight-read-time"><Clock style={{ width: 14, height: 14 }} /> 6 min read</span>
                </div>
                <h4 className="insight-secondary-title">Building a High-Trust Brand Identity and Scalable Web Architecture in 2026</h4>
                <p className="insight-secondary-desc">Why positioning clarity, cohesive design systems, and rapid web apps outperform legacy marketing agencies.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
