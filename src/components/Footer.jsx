import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/">
              <img src="/assets/images/logo.png" alt="HigherIT Logo" width="160" height="38" style={{ marginBottom: '20px', background: '#FFFFFF', padding: '6px 14px', borderRadius: '9999px' }} />
            </Link>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dark-secondary)', lineHeight: 1.6 }}>
              Digital Growth. Technology. AI.<br />
              We help businesses build powerful brands, attract more customers and automate the way they work.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', color: '#FFF', marginBottom: '16px' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/products">Products</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', color: '#FFF', marginBottom: '16px' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <Link to="/services#grow">Digital Marketing</Link>
              <Link to="/services#create">Branding & Creative</Link>
              <Link to="/services#build">Web & App Engineering</Link>
              <Link to="/services#intelligence">AI & Automation</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', color: '#FFF', marginBottom: '16px' }}>Products</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <Link to="/products/jewellery">Jewellery POS & Store</Link>
              <Link to="/products/photographer-crm">Photographer CRM</Link>
              <Link to="/products/real-estate">Real Estate Plot CRM</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', color: '#FFF', marginBottom: '16px' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: 'var(--text-dark-secondary)' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin style={{ color: 'var(--brand-orange)', flexShrink: 0, width: 18 }} />
                <span>Visakhapatnam, Andhra Pradesh, India — 530043</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone style={{ color: 'var(--brand-blue)', flexShrink: 0, width: 18 }} />
                <a href="tel:+919160368468">+91 916 036 8468</a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail style={{ color: 'var(--brand-orange)', flexShrink: 0, width: 18 }} />
                <a href="mailto:info@higheritvizag.com">info@higheritvizag.com</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-dark-muted)' }}>
          <div>© 2026 HigherIT. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
