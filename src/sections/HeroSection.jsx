import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Sparkles, PlayCircle, ArrowRight } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const defaultEase = [0.16, 1, 0.3, 1]

export default function HeroSection({ onOpenTalk }) {
  const shouldReduceMotion = useReducedMotion()

  // Mouse Parallax Physics
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const parallaxX = useSpring(mouseX, springConfig)
  const parallaxY = useSpring(mouseY, springConfig)

  useEffect(() => {
    if (shouldReduceMotion) return

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX - innerWidth / 2) / 35
      const y = (e.clientY - innerHeight / 2) / 35
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY, shouldReduceMotion])

  const headlineLines = [
    { text: 'We Build.', highlight: '' },
    { text: 'We Grow.', highlight: 'blue' },
    { text: 'We Take', highlight: '' },
    { text: 'Businesses Higher.', highlight: 'orange' }
  ]

  return (
    <section className="hero" id="home">
      {/* Background Grid & Glow Overlay */}
      <div className="hero-bg-grid" />

      {/* Signature Upward Orange Vector Trajectory SVG Backdrop */}
      <svg className="hero-trajectory-svg" viewBox="0 0 1000 700" fill="none">
        <motion.path
          d="M-50 620 C250 500, 450 300, 950 80"
          stroke="url(#heroOrangeGlow)"
          strokeWidth="24"
          strokeOpacity="0.25"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: defaultEase, delay: 0.2 }}
        />
        <motion.path
          d="M-50 620 C250 500, 450 300, 950 80"
          stroke="url(#heroOrangeGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: defaultEase, delay: 0.4 }}
        />
        <defs>
          <linearGradient id="heroOrangeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="50%" stopColor="#FF9433" />
            <stop offset="100%" stopColor="#0B63F6" />
          </linearGradient>
          <linearGradient id="heroOrangeGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="#0B63F6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: defaultEase }}
              className="eyebrow"
            >
              <Sparkles style={{ width: 14, height: 14 }} />
              DIGITAL • TECHNOLOGY • AI
            </motion.div>

            {/* Line-by-line progressive headline reveal */}
            <h1 className="hero-headline">
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: defaultEase }}
                style={{ display: 'block' }}
              >
                We Build. <span className="highlight-blue">We Grow.</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: defaultEase }}
                style={{ display: 'block' }}
              >
                We Take Businesses <span className="highlight-orange">Higher.</span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: defaultEase }}
              className="hero-subtext"
            >
              HigherIT is a digital growth and technology company helping businesses build powerful brands, attract more customers and use technology to work smarter. From branding and digital marketing to websites, applications, AI and automation, we bring strategy, creativity and technology together under one roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: defaultEase }}
              className="hero-buttons"
            >
              <button type="button" onClick={onOpenTalk} className="btn btn-primary">
                Start Your Project
                <span className="btn-arrow"><ArrowRight style={{ width: 16, height: 16 }} /></span>
              </button>
              <a href="#work" className="btn btn-secondary">
                <PlayCircle style={{ width: 18, height: 18 }} />
                Explore Our Work
              </a>
            </motion.div>
          </div>

          {/* Environmental Rocket Graphic with Mouse Parallax & Floating Nodes */}
          <div className="hero-visual-container">
            <motion.div
              style={shouldReduceMotion ? {} : { x: parallaxX, y: parallaxY }}
              className="hero-visual-wrapper"
            >
              <div className="hero-ambient-glow" />
              <img
                src="/assets/images/hero_rocket.png"
                alt="HigherIT Digital Growth Rocket Visual"
                className="hero-rocket-image"
              />

              {/* Floating Nodes with Micro-Parallax */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: defaultEase }}
                className="hero-floating-node node-pos-1"
                style={shouldReduceMotion ? {} : { x: useSpring(mouseX, { damping: 30, stiffness: 100 }) }}
              >
                <div className="hero-node-dot" />
                <div className="hero-node-text">STRATEGY <span>• You Dream</span></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.85, ease: defaultEase }}
                className="hero-floating-node node-pos-2"
                style={shouldReduceMotion ? {} : { y: useSpring(mouseY, { damping: 30, stiffness: 100 }) }}
              >
                <div className="hero-node-dot" />
                <div className="hero-node-text">DIGITAL <span>• We Build</span></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0, ease: defaultEase }}
                className="hero-floating-node node-pos-3"
                style={shouldReduceMotion ? {} : { x: useSpring(mouseX, { damping: 20, stiffness: 80 }) }}
              >
                <div className="hero-node-dot" />
                <div className="hero-node-text">GROWTH <span>• We Scale</span></div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Hero Metrics Strip with Viewport Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: defaultEase }}
          className="hero-metrics-strip"
        >
          <div>
            <div className="hero-metric-val"><span className="highlight-orange">150+</span></div>
            <div className="hero-metric-lbl">Projects Delivered</div>
          </div>
          <div>
            <div className="hero-metric-val"><span className="highlight-blue">300+</span></div>
            <div className="hero-metric-lbl">Businesses Served</div>
          </div>
          <div>
            <div className="hero-metric-val"><span className="highlight-orange">50+</span></div>
            <div className="hero-metric-lbl">Active Clients</div>
          </div>
          <div>
            <div className="hero-metric-val"><span className="highlight-blue">4+</span></div>
            <div className="hero-metric-lbl">Years of Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
