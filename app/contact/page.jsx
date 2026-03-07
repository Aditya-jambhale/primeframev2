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
const BG_IMAGE = '/contact/contact.png'

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
    { icon: Mail, label: 'Email', value: 'info@Skylume.com' },
    { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
  ]

  return (
    <div className="bg-background text-foreground font-inter font-light">

      {/* ── HERO WITH FULL-BLEED BACKGROUND IMAGE ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center brightness-[0.35] saturate-[0.7]"
          style={{ backgroundImage: `url(${BG_IMAGE})` }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-black/70" />

        {/* Hero text content */}
        <div className="relative z-30 px-6 py-32 max-w-[800px] mx-auto text-center mb-12">
          <motion.div {...fadeIn}>
            <span className="font-inter text-[0.72rem] font-bold tracking-[0.22em] uppercase text-yellow-500 mb-4 block">Start Your Project</span>
            <h1 className="text-hero text-white mb-6 uppercase">
              Let's Discuss<br />
              <span className="text-yellow-500">Your Project</span>
            </h1>
            <p className="text-slate-200 opacity-70 text-lg leading-relaxed max-w-xl mx-auto font-inter font-light">
              We respond within 24 hours. Let's create something exceptional together.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-30 flex justify-center pb-10">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="w-px h-12 bg-gradient-to-b from-yellow to-transparent"
          />
        </div>
      </section>

      {/* ── CONTACT FORM & INFO ── */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-20 items-start">

            {/* LEFT — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-inter text-[0.72rem] font-bold tracking-[0.22em] uppercase text-yellow-500 mb-3 block">Reach Out</span>
              <h2 className="text-section-title text-white mb-6 uppercase">
                Get in Touch
              </h2>
              <p className="font-inter font-light text-white/90 text-base leading-relaxed mb-10 max-w-md">
                Whether you're in India or Dubai, we're ready to bring your vision to life
                with professional cinematic production.
              </p>

              {/* Contact items */}
              <div className="space-y-6 mb-10">
                {contactItems.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-yellow-500" />
                    </div>
                    <div>
                      <p className="font-inter text-[0.6rem] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-0.5">
                        {label}
                      </p>
                      <p className="font-inter font-light text-white/90 text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/5 mb-8" />

              {/* Direct contact buttons */}
              <p className="font-inter text-[0.75rem] font-bold tracking-[0.12em] uppercase text-white mb-4">
                Prefer Direct Contact?
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/+919792347498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-7 py-3.5 bg-green-500/10 border border-green-500/30 text-green-500 font-inter font-bold text-[0.8rem] tracking-[0.18em] uppercase transition-all duration-300 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-green-500/20 hover:border-green-500/50"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+919792347498"
                  className="flex items-center justify-center gap-2.5 px-7 py-3 bg-transparent border border-yellow/40 text-white font-inter font-bold text-[0.8rem] tracking-[0.18em] uppercase transition-all duration-300 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:border-yellow hover:text-yellow-500 hover:bg-yellow-500/5"
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
              <div className="bg-card border border-white/5 p-8 md:p-10 relative overflow-hidden [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,0_100%)]">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-b border-l border-yellow/30 pointer-events-none" />

                <span className="font-inter text-[0.72rem] font-bold tracking-[0.22em] uppercase text-yellow-500 mb-2 block">Project Enquiry</span>
                <h2 className="font-inter font-black text-3xl tracking-tight text-white mb-8 leading-none uppercase">
                  Send Us a Message
                </h2>

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 mb-6 border border-green-500/30 bg-green-500/5 text-green-400 font-inter text-sm">
                    ✓ Thank you! We'll get back to you within 24 hours.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 mb-6 border border-red-500/30 bg-red-500/5 text-red-400 font-inter text-sm">
                    ✕ Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name */}
                  <div>
                    <label className="block font-inter text-[0.6rem] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-2">Your Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full bg-background border border-white/10 px-5 py-3.5 text-white font-inter font-light text-sm focus:border-yellow/50 focus:outline-none transition-colors"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-inter text-[0.6rem] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-2">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full bg-background border border-white/10 px-5 py-3.5 text-white font-inter font-light text-sm focus:border-yellow/50 focus:outline-none transition-colors"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-[0.6rem] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-2">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full bg-background border border-white/10 px-5 py-3.5 text-white font-inter font-light text-sm focus:border-yellow/50 focus:outline-none transition-colors"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block font-inter text-[0.6rem] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-2">Project Type *</label>
                    <input
                      id="projectType"
                      name="projectType"
                      type="text"
                      className="w-full bg-background border border-white/10 px-5 py-3.5 text-white font-inter font-light text-sm focus:border-yellow/50 focus:outline-none transition-colors"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      placeholder="e.g., Corporate Film, Event Coverage, Wedding"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-inter text-[0.6rem] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-2">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-background border border-white/10 px-5 py-3.5 text-white font-inter font-light text-sm focus:border-yellow/50 focus:outline-none transition-colors resize-none min-h-[140px]"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-500 text-white font-inter text-[0.85rem] font-bold tracking-[0.2em] uppercase py-4 transition-all duration-300 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))] hover:bg-yellow-600 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
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
      <section className="relative py-32 px-6 bg-background overflow-hidden">
        {/* Background image strip */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.12] saturate-[0.5]"
          style={{ backgroundImage: `url(${BG_IMAGE})` }}
        />
        <div className="absolute inset-0 z-10 bg-black/80 pointer-events-none" />

        <div className="relative z-20 max-w-3xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <span className="font-inter text-[0.72rem] font-bold tracking-[0.22em] uppercase text-yellow-500 mb-3 block">Free Consultation</span>
            <h2 className="text-section-title text-white mb-6 uppercase">
              Not Sure Where<br />
              <span className="text-yellow-500">To Start?</span>
            </h2>
            <p className="font-inter font-light text-white/90 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Book a free consultation call and we'll help you define your vision,
              understand your requirements, and provide a structured production plan.
            </p>
            <button className="bg-yellow-500 text-white font-inter text-[0.82rem] font-bold tracking-[0.18em] uppercase px-[42px] py-[16px] border-none cursor-pointer transition-all duration-250 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-yellow-600 hover:-translate-y-0.5">
              Book Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

/* ── Shared label style ── */
const labelStyle = {
  display: 'block',
  fontFamily: "var(--font-inter), sans-serif",
  fontWeight: 700,
  fontSize: '0.72rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--off-white)',
  marginBottom: '0.5rem',
  opacity: 0.85,
}