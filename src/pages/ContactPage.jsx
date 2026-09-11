import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FinalCTASection } from '../sections/FinalCTASection';
import { Reveal } from '../components/Reveal';

export const ContactPage = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section" style={{ background: 'var(--bg-dark)' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow eyebrow-blue">GET IN TOUCH</div>
            <h1 className="section-title">
              Let's Build Something <span className="highlight-orange">Extraordinary.</span>
            </h1>
            <p className="section-subtitle">
              Tell us about your business goals. We'll help you figure out the right digital path forward.
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginTop: '60px' }}>
            <Reveal delay={0.1}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>HigherIT Headquarters</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.05rem', color: 'var(--text-dark-secondary)' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <MapPin style={{ color: 'var(--brand-orange)', flexShrink: 0, width: 22 }} />
                  <span>Visakhapatnam, Andhra Pradesh, India — 530043</span>
                </div>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <Phone style={{ color: 'var(--brand-blue)', flexShrink: 0, width: 22 }} />
                  <a href="tel:+919160368468" style={{ color: '#FFF' }}>+91 916 036 8468</a>
                </div>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <Mail style={{ color: 'var(--brand-orange)', flexShrink: 0, width: 22 }} />
                  <a href="mailto:info@higheritvizag.com" style={{ color: '#FFF' }}>info@higheritvizag.com</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3} style={{ background: 'var(--bg-dark-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-xl)', padding: '40px' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '20px' }}>Send Us a Message</h4>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '14px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-md)', color: '#FFF' }} required />
                <input type="email" placeholder="Your Email Address" style={{ width: '100%', padding: '14px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-md)', color: '#FFF' }} required />
                <textarea rows="4" placeholder="Tell us about your project or goals..." style={{ width: '100%', padding: '14px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-md)', color: '#FFF' }} required></textarea>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '8px' }}>Send Enquiry →</button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </div>
  );
};
