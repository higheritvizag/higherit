import React, { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export const GrowthTrajectory = ({
  className = '',
  style = {},
  variant = 'hero',
  animated = true
}) => {
  const containerRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  if (variant === 'process-line') {
    return (
      <div ref={containerRef} className={`process-trajectory-wrap ${className}`} style={style}>
        <svg viewBox="0 0 1200 80" fill="none" className="process-trajectory-svg">
          <motion.path
            d="M 20 40 Q 300 10, 600 40 T 1180 40"
            stroke="url(#processOrangeGlow)"
            strokeWidth="16"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />
          <motion.path
            d="M 20 40 Q 300 10, 600 40 T 1180 40"
            stroke="url(#processOrangeGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            style={shouldReduceMotion || !animated ? {} : { pathLength: smoothProgress }}
          />
          <defs>
            <linearGradient id="processOrangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="50%" stopColor="#FF9433" />
              <stop offset="100%" stopColor="#0B63F6" />
            </linearGradient>
            <linearGradient id="processOrangeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#0B63F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%', ...style }}>
      <svg
        className={`growth-trajectory-svg ${className}`}
        viewBox="0 0 800 600"
        fill="none"
        style={{ pointerEvents: 'none', width: '100%', height: '100%' }}
      >
        <motion.path
          d="M-100 550 C200 450, 350 250, 750 50"
          stroke="url(#trajectoryGlow)"
          strokeWidth="20"
          strokeOpacity="0.25"
          strokeLinecap="round"
        />
        <motion.path
          d="M-100 550 C200 450, 350 250, 750 50"
          stroke="url(#trajectoryGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          style={shouldReduceMotion || !animated ? {} : { pathLength: smoothProgress }}
        />
        <defs>
          <linearGradient id="trajectoryGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="#0B63F6" />
          </linearGradient>
          <linearGradient id="trajectoryGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="#0B63F6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default GrowthTrajectory
