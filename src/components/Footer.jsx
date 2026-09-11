import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/images/logo.png" alt="HigherIT Logo" width="160" height="38" style={{ marginBottom: 20 }} />
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dark-secondary)' }}>
              Digital Growth. Technology. AI.<br />Visakhapatnam, Andhra Pradesh, India
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Company</h4>
            <div className="footer-links">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About Us</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#work" className="footer-link">Projects</a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Services</h4>
            <div className="footer-links">
              <a href="#services" className="footer-link">Digital Marketing</a>
              <a href="#services" className="footer-link">Branding</a>
              <a href="#services" className="footer-link">Web Apps</a>
              <a href="#services" className="footer-link">AI Solutions</a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Products</h4>
            <div className="footer-links">
              <a href="#products" className="footer-link">Jewellery E-commerce</a>
              <a href="#products" className="footer-link">Photographer CRM</a>
              <a href="#products" className="footer-link">Real Estate CRM</a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Contact</h4>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-dark-secondary)' }}>
              +91 916 036 8468<br />info@higheritvizag.com
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 HigherIT. All Rights Reserved.</div>
          <div>Privacy Policy • Terms & Conditions</div>
        </div>
      </div>
    </footer>
  )
}
