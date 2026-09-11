import React from 'react'

export default function TestimonialsSection() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="test-grid">
          <div className="test-card">
            <div style={{ color: '#FFC107', fontSize: '1.2rem', marginBottom: 16 }}>★★★★★</div>
            <p className="test-text">
              "HigherIT has been instrumental in our digital growth. Their strategic digital marketing solutions have positioned us as a trusted brand in our industry."
            </p>
            <div className="test-author">Shopping Lovers</div>
            <div className="test-role">Verified Google Review</div>
          </div>

          <div className="test-card">
            <div style={{ color: '#FFC107', fontSize: '1.2rem', marginBottom: 16 }}>★★★★★</div>
            <p className="test-text">
              "Working with HigherIT transformed how our patients find and book appointments online. Professional, responsive, and truly results-oriented."
            </p>
            <div className="test-author">Akshaya Hospital</div>
            <div className="test-role">Healthcare Client</div>
          </div>
        </div>
      </div>
    </section>
  )
}
