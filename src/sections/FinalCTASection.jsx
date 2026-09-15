import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Reveal } from '../components/Reveal'

export default function FinalCTASection({ onOpenTalk }) {
  return (
    <section className="section final-cta-section section-theme-dark" id="contact" style={{ paddingBottom: 100, position: 'relative', overflow: 'hidden' }}>
      {/* Upward Trajectory Vector completing the journey */}
      <svg className="cta-trajectory-svg" viewBox="0 0 1000 400" fill="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.35 }}>
        <motion.path
          d="M-50 350 C300 280, 600 120, 1050 30"
          stroke="url(#ctaOrangeGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <defs>
          <linearGradient id="ctaOrangeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="50%" stopColor="#FF9433" />
            <stop offset="100%" stopColor="#0B63F6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <Reveal delay={0.1}>
          <div className="cta-banner">
            <div className="eyebrow" style={{ margin: '0 auto 20px', background: 'rgba(255, 122, 0, 0.15)', borderColor: 'rgba(255, 122, 0, 0.3)' }}>
              <Sparkles style={{ width: 14, height: 14 }} /> TAKE THE NEXT STEP
            </div>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', fontWeight: 900, marginBottom: 20, lineHeight: 1.1 }}>
              READY TO TAKE YOUR<br />
              BUSINESS <span className="highlight-orange">HIGHER?</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto 40px', maxWidth: 640 }}>
              Tell us where your business is today. We will craft the brand, web technology, digital marketing, and AI roadmap to reach your next growth benchmark.
            </p>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button type="button" onClick={onOpenTalk} className="btn btn-primary" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>
                Let's Talk
                <span className="btn-arrow"><ArrowRight style={{ width: 18, height: 18 }} /></span>
              </button>
              <button type="button" onClick={onOpenTalk} className="btn btn-secondary" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>
                Start Your Project
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
