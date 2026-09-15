import React from 'react'
import { motion } from 'framer-motion'
import { Palette, Globe, TrendingUp, Users, Code2, Cpu, Bot, Rocket } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const ecosystemNodes = [
  { id: 'brand', label: 'Brand', icon: Palette, color: 'var(--brand-orange)', angle: 0 },
  { id: 'website', label: 'Website', icon: Globe, color: 'var(--brand-blue)', angle: 45 },
  { id: 'marketing', label: 'Marketing', icon: TrendingUp, color: 'var(--brand-orange)', angle: 90 },
  { id: 'leads', label: 'Leads', icon: Users, color: 'var(--brand-blue)', angle: 135 },
  { id: 'technology', label: 'Technology', icon: Code2, color: 'var(--brand-orange)', angle: 180 },
  { id: 'ai', label: 'AI', icon: Cpu, color: 'var(--brand-blue)', angle: 225 },
  { id: 'automation', label: 'Automation', icon: Bot, color: 'var(--brand-orange)', angle: 270 },
  { id: 'growth', label: 'Growth', icon: Rocket, color: 'var(--brand-blue)', angle: 315 }
]

export default function EcosystemSection() {
  return (
    <section className="section ecosystem-section section-theme-light" id="ecosystem">
      <div className="container">
        <div className="ecosystem-container">
          <Reveal delay={0.1}>
            <div>
              <div className="eyebrow eyebrow-blue">ONE CONNECTED TEAM</div>
              <h2 className="section-title">
                YOUR BUSINESS<br />
                DOESN'T NEED MORE VENDORS.<br />
                <span className="highlight-orange">IT NEEDS: ONE DIGITAL PARTNER.</span>
              </h2>
              <p className="section-subtitle" style={{ marginBottom: 20 }}>
                Your brand, website, marketing, technology, and AI operations shouldn't run in isolated silos. HigherIT unites every growth driver into a single cohesive system.
              </p>
              <p className="section-subtitle">
                We eliminate vendor fragmentation, align every strategy with unit economics, and accelerate speed to market.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="ecosystem-diagram-wrap">
              <svg viewBox="0 0 500 500" className="ecosystem-svg-lines">
                {/* Connecting SVG radial lines from center to 8 nodes */}
                <circle cx="250" cy="250" r="160" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <line x1="250" y1="250" x2="410" y2="250" stroke="var(--brand-orange)" strokeWidth="2" strokeOpacity="0.4" />
                <line x1="250" y1="250" x2="363" y2="363" stroke="var(--brand-blue)" strokeWidth="2" strokeOpacity="0.4" />
                <line x1="250" y1="250" x2="250" y2="410" stroke="var(--brand-orange)" strokeWidth="2" strokeOpacity="0.4" />
                <line x1="250" y1="250" x2="137" y2="363" stroke="var(--brand-blue)" strokeWidth="2" strokeOpacity="0.4" />
                <line x1="250" y1="250" x2="90" y2="250" stroke="var(--brand-orange)" strokeWidth="2" strokeOpacity="0.4" />
                <line x1="250" y1="250" x2="137" y2="137" stroke="var(--brand-blue)" strokeWidth="2" strokeOpacity="0.4" />
                <line x1="250" y1="250" x2="250" y2="90" stroke="var(--brand-orange)" strokeWidth="2" strokeOpacity="0.4" />
                <line x1="250" y1="250" x2="363" y2="137" stroke="var(--brand-blue)" strokeWidth="2" strokeOpacity="0.4" />
              </svg>

              {/* Central YOUR BUSINESS Node */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="ecosystem-center-node"
              >
                <div className="eco-center-sub">YOUR</div>
                <div className="eco-center-main">BUSINESS</div>
              </motion.div>

              {/* 8 Connected Nodes */}
              <div className="ecosystem-nodes-grid">
                {ecosystemNodes.map((node, i) => {
                  const Icon = node.icon
                  return (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * i, duration: 0.4 }}
                      whileHover={{ scale: 1.08 }}
                      className={`eco-node-pill eco-node-pos-${i + 1}`}
                    >
                      <div className="eco-node-icon" style={{ background: `rgba(255, 122, 0, 0.1)` }}>
                        <Icon style={{ width: 16, height: 16, color: node.color }} />
                      </div>
                      <span className="eco-node-label">{node.label}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
