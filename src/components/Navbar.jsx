import React, { useState, useEffect } from 'react'

export default function Navbar({ onOpenTalk }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container nav-container">
          <a href="#home" className="brand-logo" id="nav-brand-logo">
            <img src="/assets/images/logo.png" alt="HigherIT Logo" width="140" height="36" />
          </a>
          
          <nav className="nav-menu" id="desktopNav">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#industries" className="nav-link">Industries</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#work" className="nav-link">Projects</a>
            <a href="#blog" className="nav-link">Blog</a>
          </nav>

          <div className="nav-cta">
            <button type="button" onClick={onOpenTalk} className="btn-nav-talk" id="header-cta-talk">
              Let's Talk
              <span className="btn-arrow">→</span>
            </button>
          </div>

          <button 
            className="mobile-toggle" 
            id="mobileToggle" 
            aria-label="Toggle Navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} id="mobileMenu">
          <a href="#home" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#about" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>About Us</a>
          <a href="#services" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#industries" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Industries</a>
          <a href="#products" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Products</a>
          <a href="#work" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Projects</a>
          <a href="#blog" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Blog</a>
          <button 
            type="button" 
            className="btn-nav-talk" 
            style={{ marginTop: '12px', width: 'fit-content' }} 
            onClick={() => { setMobileOpen(false); onOpenTalk(); }}
          >
            Let's Talk →
          </button>
        </div>
      </header>
    </>
  )
}
