import React, { useState } from 'react'
import { X, Send, CheckCircle } from 'lucide-react'

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'Digital Growth & Marketing', message: '' })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2500)
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(2, 5, 14, 0.85)',
      backdropFilter: 'blur(12px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'var(--bg-dark-card)',
        border: '1px solid var(--border-dark)',
        borderRadius: 'var(--border-radius-xl)',
        padding: '36px',
        maxWidth: '520px',
        width: '100%',
        position: 'relative',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            color: 'var(--text-dark-secondary)',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-dark)',
            borderRadius: '50%',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X style={{ width: 18, height: 18 }} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 0' }}>
            <CheckCircle style={{ width: 56, height: 56, color: 'var(--brand-orange)', margin: '0 auto 16px' }} />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginBottom: 8 }}>Message Sent!</h3>
            <p style={{ color: 'var(--text-dark-secondary)' }}>Thank you for reaching out to HigherIT. Our team will contact you within 2 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="eyebrow eyebrow-blue" style={{ marginBottom: 12 }}>LET'S TALK</div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: 8 }}>Start Your Project</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dark-secondary)', marginBottom: 24 }}>Tell us about your business goals and we will craft a strategy for you.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-dark-secondary)', marginBottom: 6, fontWeight: 600 }}>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--border-radius-md)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-dark)',
                    color: '#FFFFFF',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-dark-secondary)', marginBottom: 6, fontWeight: 600 }}>Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--border-radius-md)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-dark)',
                      color: '#FFFFFF',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-dark-secondary)', marginBottom: 6, fontWeight: 600 }}>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--border-radius-md)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-dark)',
                      color: '#FFFFFF',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-dark-secondary)', marginBottom: 6, fontWeight: 600 }}>Primary Interest</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--border-radius-md)',
                    background: '#080D1A',
                    border: '1px solid var(--border-dark)',
                    color: '#FFFFFF',
                    fontFamily: 'inherit'
                  }}
                >
                  <option value="Digital Growth & Marketing">Digital Growth & Marketing</option>
                  <option value="Branding & Creative Studio">Branding & Creative Studio</option>
                  <option value="Web & Application Engineering">Web & Application Engineering</option>
                  <option value="AI & Automation Solutions">AI & Automation Solutions</option>
                  <option value="SaaS Products">SaaS Products</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-dark-secondary)', marginBottom: 6, fontWeight: 600 }}>Project Details</label>
                <textarea
                  rows="3"
                  placeholder="Describe your goals or project requirement..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--border-radius-md)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-dark)',
                    color: '#FFFFFF',
                    fontFamily: 'inherit',
                    resize: 'none'
                  }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 8 }}>
                Submit Enquiry <Send style={{ width: 16, height: 16 }} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
