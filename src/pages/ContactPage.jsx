import React, { useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react'
import FinalCTASection from '../sections/FinalCTASection'
import { Reveal } from '../components/Reveal'

export function ContactPage({ onOpenTalk }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'Digital Growth & Marketing', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section section-theme-dark">
        <div className="container">
          <Reveal>
            <div className="eyebrow eyebrow-blue">GET IN TOUCH</div>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 900, lineHeight: 1.1 }}>
              Let's Build Something <span className="highlight-orange">Extraordinary.</span>
            </h1>
            <p className="section-subtitle" style={{ maxWidth: '780px', fontSize: '1.2rem' }}>
              Tell us about your business goals and current bottlenecks. We'll help you craft the right digital growth and technology roadmap forward.
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', marginTop: '60px' }}>
            {/* Contact Details Column */}
            <Reveal delay={0.1}>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-xl)', padding: '40px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '28px', color: '#FFF' }}>
                  HigherIT Headquarters
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '1.05rem', color: 'var(--text-dark-secondary)' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(255, 122, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin style={{ color: 'var(--brand-orange)', width: 20, height: 20 }} />
                    </div>
                    <div>
                      <strong style={{ color: '#FFF', display: 'block', marginBottom: 2 }}>Office Location</strong>
                      <span>Visakhapatnam, Andhra Pradesh, India — 530043</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(11, 99, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone style={{ color: 'var(--brand-blue-light)', width: 20, height: 20 }} />
                    </div>
                    <div>
                      <strong style={{ color: '#FFF', display: 'block', marginBottom: 2 }}>Phone & WhatsApp</strong>
                      <a href="tel:+919160368468" style={{ color: '#F7F9FC' }}>+91 916 036 8468</a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(255, 122, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail style={{ color: 'var(--brand-orange)', width: 20, height: 20 }} />
                    </div>
                    <div>
                      <strong style={{ color: '#FFF', display: 'block', marginBottom: 2 }}>Direct Email</strong>
                      <a href="mailto:info@higheritvizag.com" style={{ color: '#F7F9FC' }}>info@higheritvizag.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Contact Form Column */}
            <Reveal delay={0.25}>
              <div style={{ background: 'var(--bg-dark-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-xl)', padding: '40px' }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <CheckCircle style={{ width: 64, height: 64, color: 'var(--brand-orange)', margin: '0 auto 20px' }} />
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: 12 }}>Message Received!</h3>
                    <p style={{ color: 'var(--text-dark-secondary)', fontSize: '1.1rem' }}>Thank you for reaching out to HigherIT. Our senior strategy team will get back to you within 2 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: '#FFF' }}>Send Us a Message</h4>
                    
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-dark-secondary)', marginBottom: 6, fontWeight: 600 }}>Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{ width: '100%', padding: '14px 18px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-md)', color: '#FFF', fontFamily: 'inherit' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-dark-secondary)', marginBottom: 6, fontWeight: 600 }}>Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{ width: '100%', padding: '14px 18px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-md)', color: '#FFF', fontFamily: 'inherit' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-dark-secondary)', marginBottom: 6, fontWeight: 600 }}>Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{ width: '100%', padding: '14px 18px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-md)', color: '#FFF', fontFamily: 'inherit' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-dark-secondary)', marginBottom: 6, fontWeight: 600 }}>Primary Interest</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        style={{ width: '100%', padding: '14px 18px', background: '#080D1A', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-md)', color: '#FFF', fontFamily: 'inherit' }}
                      >
                        <option value="Digital Growth & Marketing">Digital Growth & Marketing</option>
                        <option value="Branding & Creative Studio">Branding & Creative Studio</option>
                        <option value="Web & Application Engineering">Web & Application Engineering</option>
                        <option value="AI & Automation Solutions">AI & Automation Solutions</option>
                        <option value="SaaS Products">SaaS Software Products</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-dark-secondary)', marginBottom: 6, fontWeight: 600 }}>Project Details</label>
                      <textarea
                        rows="4"
                        placeholder="Tell us about your business goals or technical requirement..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{ width: '100%', padding: '14px 18px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-dark)', borderRadius: 'var(--border-radius-md)', color: '#FFF', fontFamily: 'inherit', resize: 'none' }}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop: '8px', padding: '16px' }}>
                      Submit Project Enquiry <Send style={{ width: 16, height: 16, marginLeft: 6 }} />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTASection onOpenTalk={onOpenTalk} />
    </div>
  )
}

export default ContactPage
