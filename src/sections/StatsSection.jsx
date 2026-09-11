import React from 'react'

export default function StatsSection() {
  return (
    <section className="stats-band" id="numbers" style={{ padding: '60px 0', borderTop: '1px solid var(--border-dark)', borderBottom: '1px solid var(--border-dark)', background: 'var(--bg-dark-surface)' }}>
      <div className="container">
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 30, textAlign: 'center' }}>
          <div>
            <div className="stat-giant" style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, color: 'var(--brand-orange)' }}>300+</div>
            <div className="stat-lbl" style={{ color: 'var(--text-dark-secondary)', fontSize: '0.95rem' }}>Businesses Served</div>
          </div>
          <div>
            <div className="stat-giant" style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, color: 'var(--brand-blue)' }}>150+</div>
            <div className="stat-lbl" style={{ color: 'var(--text-dark-secondary)', fontSize: '0.95rem' }}>Projects Delivered</div>
          </div>
          <div>
            <div className="stat-giant" style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, color: 'var(--brand-orange)' }}>50+</div>
            <div className="stat-lbl" style={{ color: 'var(--text-dark-secondary)', fontSize: '0.95rem' }}>Active Clients</div>
          </div>
          <div>
            <div className="stat-giant" style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, color: 'var(--brand-blue)' }}>4+</div>
            <div className="stat-lbl" style={{ color: 'var(--text-dark-secondary)', fontSize: '0.95rem' }}>Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
