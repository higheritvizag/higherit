import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { StaggerContainer, StaggerItem } from '../components/Reveal'
import { useReducedMotion } from '../hooks/useReducedMotion'

function CountUpNumber({ targetNumber, suffix = '+', color = 'var(--brand-orange)' }) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true, margin: '-40px' })
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!isInView) return

    if (shouldReduceMotion) {
      setCount(targetNumber)
      return
    }

    const controls = animate(0, targetNumber, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setCount(Math.floor(latest))
      }
    })

    return () => controls.stop()
  }, [isInView, targetNumber, shouldReduceMotion])

  return (
    <span ref={nodeRef} style={{ color }}>
      {count}{suffix}
    </span>
  )
}

const statsData = [
  { val: 300, suffix: '+', lbl: 'Businesses Served', color: 'var(--brand-orange)' },
  { val: 150, suffix: '+', lbl: 'Projects Delivered', color: 'var(--brand-blue-light)' },
  { val: 50, suffix: '+', lbl: 'Active Clients', color: 'var(--brand-orange)' },
  { val: 4, suffix: '+', lbl: 'Years of Experience', color: 'var(--brand-blue-light)' }
]

export default function StatsSection() {
  return (
    <section className="stats-band section-theme-dark" id="numbers">
      <div className="container">
        <StaggerContainer staggerDelay={0.1} className="stats-grid-editorial">
          {statsData.map((stat, idx) => (
            <StaggerItem key={idx} className="stat-card-editorial">
              <div className="stat-giant-editorial">
                <CountUpNumber targetNumber={stat.val} suffix={stat.suffix} color={stat.color} />
              </div>
              <div className="stat-lbl-editorial">{stat.lbl}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
