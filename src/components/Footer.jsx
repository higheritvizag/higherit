import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer section-theme-dark">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/">
              <img src="/assets/images/logo.png" alt="HigherIT Logo" width="160" height="38" style={{ marginBottom: 20 }} />
            </Link>
            <p style={{ fontSize: '0.95rem', color: '#98A4B7', lineHeight: 1.6 }}>
              Digital Growth • Technology • AI • Software Products<br />
              HigherIT Digital Growth & Tech Company<br />
              Visakhapatnam, Andhra Pradesh, India
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/projects" className="footer-link">Projects</Link>
              <Link to="/blog" className="footer-link">Blog</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Services</h4>
            <div className="footer-links">
              <Link to="/services" className="footer-link">Digital Growth</Link>
              <Link to="/services" className="footer-link">Brand & Creative</Link>
              <Link to="/services" className="footer-link">Web & App Development</Link>
              <Link to="/services" className="footer-link">AI & Automation</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Products</h4>
            <div className="footer-links">
              <Link to="/products/jewellery" className="footer-link">Jewellery POS & E-commerce</Link>
              <Link to="/products/photographer-crm" className="footer-link">Photographer CRM</Link>
              <Link to="/products/real-estate" className="footer-link">Real Estate Plot CRM</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Industries</h4>
            <div className="footer-links">
              <Link to="/industries" className="footer-link">Healthcare</Link>
              <Link to="/industries" className="footer-link">Real Estate</Link>
              <Link to="/industries" className="footer-link">Retail & E-commerce</Link>
              <Link to="/industries" className="footer-link">Hospitality</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Contact</h4>
            <div style={{ fontSize: '0.9rem', color: '#98A4B7', lineHeight: 1.7 }}>
              Phone: +91 916 036 8468<br />
              Email: info@higheritvizag.com<br />
              Location: Visakhapatnam, AP
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 HigherIT. All Rights Reserved.</div>
          <div>Privacy Policy • Terms of Service</div>
        </div>
      </div>
    </footer>
  )
}
