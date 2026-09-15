import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ onOpenTalk }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileNav = (path) => {
    setMobileOpen(false)
    navigate(path)
  }

  const handleTalkClick = () => {
    setMobileOpen(false)
    navigate('/contact')
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <Link to="/" className="brand-logo" id="nav-brand-logo" onClick={() => setMobileOpen(false)}>
          <img src="/assets/images/logo.png" alt="HigherIT Logo" width="140" height="36" />
        </Link>
        
        <nav className="nav-menu" id="desktopNav">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About Us
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Services
          </NavLink>
          <NavLink to="/industries" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Industries
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Products
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Projects
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Blog
          </NavLink>
        </nav>

        <div className="nav-right-actions">
          <ThemeToggle compact={true} />

          <div className="nav-cta">
            <button type="button" onClick={handleTalkClick} className="btn-nav-talk" id="header-cta-talk">
              Let's Talk
              <span className="btn-arrow">→</span>
            </button>
          </div>
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
        <NavLink to="/" end className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          About Us
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          Services
        </NavLink>
        <NavLink to="/industries" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          Industries
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          Products
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          Projects
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          Blog
        </NavLink>
        
        <div className="mobile-theme-row">
          <span style={{ fontSize: '0.85rem', color: 'var(--nav-text-muted)' }}>Theme:</span>
          <ThemeToggle compact={false} />
        </div>

        <button 
          type="button" 
          className="btn-nav-talk" 
          style={{ marginTop: '12px', width: 'fit-content' }} 
          onClick={handleTalkClick}
        >
          Let's Talk →
        </button>
      </div>
    </header>
  )
}
