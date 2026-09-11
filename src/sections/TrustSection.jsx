import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Flame, Calendar, Cross, HeartPulse, Layers, GraduationCap, ShieldCheck } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const clients = [
  { name: 'Akshaya Hospital', tag: 'HEALTHCARE', icon: Building2, color: 'var(--brand-blue-light)' },
  { name: 'FlameX', tag: 'INDUSTRIAL', icon: Flame, color: 'var(--brand-orange)' },
  { name: 'Somarka Events', tag: 'HOSPITALITY', icon: Calendar, color: 'var(--brand-blue-light)' },
  { name: '4D Derma Den', tag: 'DERMATOLOGY', icon: Cross, color: 'var(--brand-orange)' },
  { name: 'Amma Hospital', tag: 'HEALTHCARE', icon: HeartPulse, color: 'var(--brand-blue-light)' },
  { name: 'Vesuvian', tag: 'MANUFACTURING', icon: Layers, color: 'var(--brand-orange)' },
  { name: 'Vriha School', tag: 'EDUCATION', icon: GraduationCap, color: 'var(--brand-blue-light)' }
]

export default function TrustSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-headline">
          <ShieldCheck style={{ width: 16, height: 16, color: 'var(--brand-orange)', display: 'inline', marginRight: 8 }} />
          Trusted by high-growth businesses building what comes next
        </div>

        <div className="ticker-wrapper-masked">
          <div className={`ticker-track-smooth ${shouldReduceMotion ? 'reduced' : ''}`}>
            {/* Loop array twice for seamless continuous marquee */}
            {[...clients, ...clients].map((client, idx) => {
              const Icon = client.icon
              return (
                <div key={idx} className="ticker-item-editorial">
                  <Icon style={{ color: client.color, width: 18, height: 18 }} />
                  <span className="ticker-item-name">{client.name}</span>
                  <span className="ticker-item-tag">{client.tag}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
