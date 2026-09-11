import React from 'react'
import { Building2, Flame, Calendar, Cross, HeartPulse, Layers, GraduationCap } from 'lucide-react'

export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-headline">Trusted by businesses building what comes next</div>
        
        <div className="ticker-wrapper">
          <div className="ticker-track">
            <div className="ticker-item"><Building2 style={{ color: 'var(--brand-blue)', width: 18, height: 18 }} /> Akshaya Hospital</div>
            <div className="ticker-item"><Flame style={{ color: 'var(--brand-orange)', width: 18, height: 18 }} /> FlameX</div>
            <div className="ticker-item"><Calendar style={{ color: 'var(--brand-blue)', width: 18, height: 18 }} /> Somarka Events</div>
            <div className="ticker-item"><Cross style={{ color: 'var(--brand-orange)', width: 18, height: 18 }} /> 4D Derma Den</div>
            <div className="ticker-item"><HeartPulse style={{ color: 'var(--brand-blue)', width: 18, height: 18 }} /> Amma Hospital</div>
            <div className="ticker-item"><Layers style={{ color: 'var(--brand-orange)', width: 18, height: 18 }} /> Vesuvian</div>
            <div className="ticker-item"><GraduationCap style={{ color: 'var(--brand-blue)', width: 18, height: 18 }} /> Vriha School</div>
            {/* Duplicated for infinite scroll */}
            <div className="ticker-item"><Building2 style={{ color: 'var(--brand-blue)', width: 18, height: 18 }} /> Akshaya Hospital</div>
            <div className="ticker-item"><Flame style={{ color: 'var(--brand-orange)', width: 18, height: 18 }} /> FlameX</div>
            <div className="ticker-item"><Calendar style={{ color: 'var(--brand-blue)', width: 18, height: 18 }} /> Somarka Events</div>
            <div className="ticker-item"><Cross style={{ color: 'var(--brand-orange)', width: 18, height: 18 }} /> 4D Derma Den</div>
          </div>
        </div>
      </div>
    </section>
  )
}
