'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

// High-quality cinematic camera/production background from Unsplash
const BG_IMAGE = 'https://images.unsplash.com/photo-1574717024453-354056afd6fc?q=80&w=2070&auto=format&fit=crop'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactItems = [
    { icon: MapPin, label: 'Operating Regions', value: 'India  |  Dubai, UAE' },
    { icon: Phone, label: 'Phone', value: '+971 XX XXX XXXX' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+971 XX XXX XXXX' },
    { icon: Mail, label: 'Email', value: 'info@primeframe.com' },
    { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
  ]

  return (
    <div style={{ backgroundColor: 'var(--navy)', color: 'var(--off-white)', fontFamily: "'Barlow', sans-serif" }}>

      {/* ── HERO WITH FULL-BLEED BACKGROUND IMAGE ── */}
      <section
        style={{
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',

          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${BG_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'brightness(0.35) saturate(0.7)',
            zIndex: 0,
          }}
        />

        {/* Gradient overlay — navy fade at bottom */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(
                to bottom,
                rgba(7, 11, 22, 0.1) 0%,
                rgba(7, 11, 22, 0.4) 45%,
                var(--navy) 100%
              )
            `,
            zIndex: 1,
          }}
        />

        {/* Orange-tinted vignette from the left */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 80% at 10% 60%, rgba(249,115,22,0.08) 0%, transparent 65%)',
            zIndex: 2,
          }}
        />

        {/* Diagonal grid lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(135deg, rgba(249,115,22,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            zIndex: 2,
          }}
        />

        {/* Hero text content */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            padding: '6rem 2rem 5rem',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
          }}
        >
          <motion.div {...fadeIn}>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Start Your Project</p>
            <h1
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(3.5rem, 9vw, 7rem)',
                letterSpacing: '0.04em',
                lineHeight: 0.92,
                color: 'var(--white)',
                marginBottom: '1.5rem',
              }}
            >
              Let's Discuss<br />
              <span style={{ color: 'var(--orange)' }}>Your Project</span>
            </h1>
            <p style={{ color: 'var(--off-white)', opacity: 0.7, fontSize: '1.05rem', lineHeight: 1.7 }}>
              We respond within 24 hours. Let's create something exceptional together.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '2.5rem',
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            style={{
              width: '1px',
              height: '48px',
              background: 'linear-gradient(to bottom, var(--orange), transparent)',
            }}
          />
        </div>
      </section>

      {/* ── CONTACT FORM & INFO ── */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--navy)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3.5rem',
              alignItems: 'start',
            }}
          >

            {/* LEFT — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Reach Out</p>
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  letterSpacing: '0.04em',
                  color: 'var(--white)',
                  marginBottom: '1rem',
                  lineHeight: 0.95,
                }}
              >
                Get in Touch
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
                Whether you're in India or Dubai, we're ready to bring your vision to life
                with professional cinematic production.
              </p>

              {/* Contact items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {contactItems.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                    }}
                  >
                    <div
                      className="icon-wrap"
                      style={{ flexShrink: 0 }}
                    >
                      <Icon size={18} style={{ color: 'var(--orange)' }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 700,
                          fontSize: '0.78rem',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--off-white)',
                          marginBottom: '2px',
                        }}
                      >
                        {label}
                      </p>
                      <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: 'var(--border)', marginBottom: '2rem' }} />

              {/* Direct contact buttons */}
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize: '0.78rem',
                  color: 'var(--off-white)',
                  marginBottom: '1rem',
                }}
              >
                Prefer Direct Contact?
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href="https://wa.me/971XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '13px 28px',
                    backgroundColor: 'rgba(37, 211, 102, 0.1)',
                    border: '1px solid rgba(37, 211, 102, 0.35)',
                    color: '#25D366',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                    transition: 'background 0.25s, border-color 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.18)'
                    e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.6)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.1)'
                    e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.35)'
                  }}
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+971XXXXXXXXX"
                  className="btn-outline"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none' }}
                >
                  <Phone size={15} />
                  Call Now
                </a>
              </div>
            </motion.div>

            {/* RIGHT — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                style={{
                  backgroundColor: 'var(--navy-mid)',
                  border: '1px solid var(--border)',
                  padding: '2.5rem',
                  position: 'relative',
                  clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)',
                }}
              >
                {/* Corner accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '50px',
                    height: '50px',
                    borderBottom: '1px solid var(--border-accent)',
                    borderLeft: '1px solid var(--border-accent)',
                    pointerEvents: 'none',
                  }}
                />

                <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>Project Enquiry</p>
                <h2
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '2rem',
                    letterSpacing: '0.04em',
                    color: 'var(--white)',
                    marginBottom: '2rem',
                    lineHeight: 0.95,
                  }}
                >
                  Send Us a Message
                </h2>

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <div
                    style={{
                      padding: '1rem 1.25rem',
                      marginBottom: '1.5rem',
                      border: '1px solid rgba(37,211,102,0.4)',
                      backgroundColor: 'rgba(37,211,102,0.07)',
                      color: '#4ade80',
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: '0.9rem',
                    }}
                  >
                    ✓ Thank you! We'll get back to you within 24 hours.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div
                    style={{
                      padding: '1rem 1.25rem',
                      marginBottom: '1.5rem',
                      border: '1px solid rgba(239,68,68,0.4)',
                      backgroundColor: 'rgba(239,68,68,0.07)',
                      color: '#f87171',
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: '0.9rem',
                    }}
                  >
                    ✕ Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Name */}
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input
                      className="input-dark"
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        className="input-dark"
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <input
                        className="input-dark"
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label style={labelStyle}>Project Type *</label>
                    <input
                      className="input-dark"
                      id="projectType"
                      name="projectType"
                      type="text"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      placeholder="e.g., Corporate Film, Event Coverage, Wedding"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Project Details *</label>
                    <textarea
                      className="input-dark"
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      style={{ resize: 'vertical', minHeight: '120px' }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      opacity: isSubmitting ? 0.6 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      marginTop: '0.5rem',
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FREE CONSULTATION CTA ── */}
      <section
        style={{
          position: 'relative',
          padding: '6rem 1.5rem',
          overflow: 'hidden',
          backgroundColor: 'var(--navy-mid)',
        }}
      >
        {/* Faint image strip behind CTA */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${BG_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            filter: 'brightness(0.12) saturate(0.5)',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 70% 100% at 50% 50%, rgba(249,115,22,0.06) 0%, transparent 80%)',
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <motion.div {...fadeIn}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Free Consultation</p>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                letterSpacing: '0.04em',
                lineHeight: 0.95,
                color: 'var(--white)',
                marginBottom: '1.25rem',
              }}
            >
              Not Sure Where<br />
              <span style={{ color: 'var(--orange)' }}>To Start?</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              Book a free consultation call and we'll help you define your vision,
              understand your requirements, and provide a structured production plan.
            </p>
            <button className="btn-primary">Book Free Consultation</button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

/* ── Shared label style ── */
const labelStyle = {
  display: 'block',
  fontFamily: "'Barlow Condensed', sans-serif",
  fontWeight: 600,
  fontSize: '0.72rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--off-white)',
  marginBottom: '0.5rem',
  opacity: 0.85,
}