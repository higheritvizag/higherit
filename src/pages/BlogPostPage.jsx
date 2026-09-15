import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react'
import FinalCTASection from '../sections/FinalCTASection'

export function BlogPostPage({ onOpenTalk }) {
  const { slug } = useParams()

  const title = slug
    ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    : 'Why Your Website Isn\'t Converting Traffic Into Customers'

  return (
    <div style={{ paddingTop: '120px' }}>
      <article className="section section-theme-light">
        <div className="container" style={{ maxWidth: '840px' }}>
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--brand-orange)', fontWeight: 700, marginBottom: '24px', fontSize: '0.9rem' }}>
            <ArrowLeft style={{ width: 16, height: 16 }} /> Back to Insights
          </Link>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
            <span className="insight-cat-tag cat-growth">DIGITAL GROWTH</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock style={{ width: 14, height: 14 }} /> 5 min read
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Calendar style={{ width: 14, height: 14 }} /> September 2026
            </span>
          </div>

          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15, marginBottom: '24px' }}>
            {title}
          </h1>

          <div style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              In today's digital landscape, driving visitors to your website is only half the battle. If your digital touchpoints fail to communicate value instantly, high-intent prospects will leave for competitors.
            </p>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '16px' }}>
              1. Positioning Clarity & The 3-Second Rule
            </h3>
            <p>
              When a prospective client lands on your homepage, they immediately evaluate three core questions: What do you build? Who is it for? Why should I trust you? Clear editorial typography and high-contrast headlines outperform dense technical jargon every single time.
            </p>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '16px' }}>
              2. Technical Speed & Core Web Vitals
            </h3>
            <p>
              Modern users expect instant web application performance. A 1-second delay in page load time reduces conversions by up to 20%. Modern tech stacks like React + Vite ensure ultra-fast sub-400ms page transitions.
            </p>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '16px' }}>
              3. AI & Instant Qualification
            </h3>
            <p>
              Speed-to-lead is the single biggest predictor of conversion success. Deploying 24/7 AI lead assistants and automated WhatsApp qualification ensures no enquiry goes cold.
            </p>
          </div>
        </div>
      </article>

      <FinalCTASection onOpenTalk={onOpenTalk} />
    </div>
  )
}

export default BlogPostPage
