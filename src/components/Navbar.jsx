import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Products', path: '/products' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div class="container nav-container">
          <Link to="/" class="brand-logo" id="nav-brand-logo">
            <img src="/assets/images/logo.png" alt="HigherIT Logo" width="140" height="36" />
          </Link>
          
          <nav className="nav-menu" id="desktopNav">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="nav-cta">
            <Link to="/contact" className="btn-nav-talk" id="header-cta-talk">
              Let's Talk
              <span className="btn-arrow">→</span>
            </Link>
          </div>

          <button 
            className={`mobile-toggle ${mobileOpen ? 'active' : ''}`} 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} id="mobileMenu">
        {navLinks.map((link) => (
          <NavLink 
            key={link.name} 
            to={link.path} 
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
        <Link 
          to="/contact" 
          className="btn-nav-talk" 
          style={{ marginTop: '12px' }}
          onClick={() => setMobileOpen(false)}
        >
          Let's Talk →
        </Link>
      </div>
    </>
  );
};
