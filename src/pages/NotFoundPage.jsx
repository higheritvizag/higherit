import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Compass } from 'lucide-react'

export function NotFoundPage() {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Background Trajectory Line Visual */}
      <svg className="hero-trajectory-svg" viewBox="0 0 1000 600" fill="none" style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }}>
        <motion.path
          d="M-50 500 C300 400, 600 200, 1050 50"
          stroke="url(#notFoundOrangeGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <defs>
          <linearGradient id="notFoundOrangeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="#0B63F6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div className="eyebrow eyebrow-blue" style={{ marginBottom: '20px' }}>
          <Compass style={{ width: 14, height: 14, marginRight: 6 }} /> 404 PAGE NOT FOUND
        </div>
        
        <h1 className="section-title" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 900, marginBottom: '20px', lineHeight: 1.1 }}>
          Looks like you've gone off the <span className="highlight-orange">trajectory.</span>
        </h1>
        
        <p className="section-subtitle" style={{ margin: '0 auto 40px', maxWidth: '600px' }}>
          The page you are looking for doesn't exist or has moved. Let's get your business back on track.
        </p>

        <Link to="/" className="btn btn-primary" style={{ padding: '16px 36px' }}>
          Back Home <ArrowRight style={{ width: 16, height: 16, marginLeft: 6 }} />
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
