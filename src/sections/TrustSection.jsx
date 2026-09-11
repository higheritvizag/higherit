import React from 'react';
import { Building2, Flame, Calendar, Cross, HeartPulse, Layers, GraduationCap } from 'lucide-react';

export const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-headline">Trusted by businesses building what comes next</div>
        
        <div className="ticker-wrapper">
          <div className="ticker-track">
            <div className="ticker-item"><Building2 style={{ color: 'var(--brand-blue)' }} /> Akshaya Hospital</div>
            <div className="ticker-item"><Flame style={{ color: 'var(--brand-orange)' }} /> FlameX</div>
            <div className="ticker-item"><Calendar style={{ color: 'var(--brand-blue)' }} /> Somarka Events</div>
            <div className="ticker-item"><Cross style={{ color: 'var(--brand-orange)' }} /> 4D Derma Den</div>
            <div className="ticker-item"><HeartPulse style={{ color: 'var(--brand-blue)' }} /> Amma Hospital</div>
            <div className="ticker-item"><Layers style={{ color: 'var(--brand-orange)' }} /> Vesuvian</div>
            <div className="ticker-item"><GraduationCap style={{ color: 'var(--brand-blue)' }} /> Vriha School</div>
            {/* Duplicated for continuous infinite ticker */}
            <div className="ticker-item"><Building2 style={{ color: 'var(--brand-blue)' }} /> Akshaya Hospital</div>
            <div className="ticker-item"><Flame style={{ color: 'var(--brand-orange)' }} /> FlameX</div>
            <div className="ticker-item"><Calendar style={{ color: 'var(--brand-blue)' }} /> Somarka Events</div>
            <div className="ticker-item"><Cross style={{ color: 'var(--brand-orange)' }} /> 4D Derma Den</div>
          </div>
        </div>
      </div>
    </section>
  );
};
