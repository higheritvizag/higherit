import React from 'react'

export default function Footer() {
  return (
    <footer className="footer section-theme-dark">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/images/logo.png" alt="HigherIT Logo" width="160" height="38" style={{ marginBottom: 20 }} />
            <p style={{ fontSize: '0.95rem', color: '#98A4B7', lineHeight: 1.6 }}>
              Digital Growth • Technology • AI • Software Products<br />
              HigherIT Digital Growth & Tech Company<br />
              Visakhapatnam, Andhra Pradesh, India
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About Us</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#work" className="footer-link">Projects</a>
              <a href="#blog" className="footer-link">Blog</a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Services</h4>
            <div className="footer-links">
              <a href="#services" className="footer-link">Digital Growth</a>
              <a href="#services" className="footer-link">Brand & Creative</a>
              <a href="#services" className="footer-link">Web & App Development</a>
              <a href="#services" className="footer-link">AI & Automation</a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Products</h4>
            <div className="footer-links">
              <a href="#products" className="footer-link">Jewellery POS & E-commerce</a>
              <a href="#products" className="footer-link">Photographer CRM</a>
              <a href="#products" className="footer-link">Real Estate Plot CRM</a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Industries</h4>
            <div className="footer-links">
              <a href="#industries" className="footer-link">Healthcare</a>
              <a href="#industries" className="footer-link">Real Estate</a>
              <a href="#industries" className="footer-link">Retail & E-commerce</a>
              <a href="#industries" className="footer-link">Hospitality</a>
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
