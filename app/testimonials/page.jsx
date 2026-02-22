'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { PlayCircle, Quote } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Testimonials() {
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'podcast', 'commercial', 'events', 'social media']

  const testimonials = [
    {
      category: 'commercial',
      clientName: 'Sarah Johnson',
      company: 'TechVision Inc.',
      testimonial: 'Working with PrimeFrame Productions transformed our brand presence. The attention to detail and cinematic quality exceeded our expectations.',
      video: true,
      size: 'large' // tall card
    },
    {
      category: 'events',
      clientName: 'Mohammed Al-Rashid',
      company: 'Dubai Events Co.',
      testimonial: 'Their event coverage was exceptional. They captured every important moment with professional precision and delivered ahead of schedule.',
      video: true,
      size: 'normal'
    },
    {
      category: 'podcast',
      clientName: 'Priya Sharma',
      company: 'The Growth Podcast',
      testimonial: 'The editing quality and turnaround time are unmatched. Our podcast production has never been better.',
      video: false,
      size: 'accent' // wide accent card
    },
    {
      category: 'commercial',
      clientName: 'David Chen',
      company: 'Luxury Real Estate',
      testimonial: 'The property walkthroughs they created helped us sell premium listings faster. Absolutely world-class work.',
      video: true,
      size: 'normal'
    },
    {
      category: 'social media',
      clientName: 'Aisha Khan',
      company: 'Fashion Brand',
      testimonial: 'Our Instagram engagement tripled after working with PrimeFrame. Their understanding of social media content is exceptional.',
      video: false,
      size: 'normal'
    },
    {
      category: 'events',
      clientName: 'Robert Martinez',
      company: 'Corporate Solutions',
      testimonial: 'They covered our annual conference with multiple camera setups and delivered a highlight reel that captured the energy perfectly.',
      video: true,
      size: 'large'
    }
  ]

  const filteredTestimonials = filter === 'all'
    ? testimonials
    : testimonials.filter(t => t.category === filter)

  return (
    <div style={{ backgroundColor: 'var(--navy)', color: 'var(--off-white)' }}>

      {/* Hero Section */}
      <section className="py-28 px-4 text-center relative overflow-hidden">
        {/* Decorative diagonal line */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(249,115,22,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        <div className="container mx-auto max-w-4xl relative">
          <motion.div {...fadeIn}>
            <p className="eyebrow mb-4">Client Stories</p>
            <h1
              className="mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                letterSpacing: '0.04em',
                lineHeight: 0.95,
                color: 'var(--white)'
              }}
            >
              Work That Speaks<br />
              <span style={{ color: 'var(--orange)' }}>Before We Do</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontFamily: "'Barlow', sans-serif", fontSize: '1.1rem' }}>
              Hear from brands and creators we've worked with across India, Dubai, and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="px-4 pb-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={filter === category ? 'btn-primary' : 'btn-outline'}
                style={{ fontSize: '0.75rem' }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Testimonials Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {/*
            Creative grid layout:
            Row 1: [Large tall card (spans 2 rows)] + [Normal] + [Normal]
            Row 2: [Wide accent card (spans 2 cols)] + [Large tall card (spans 2 rows)]
            Row 3: [Normal] + [Normal]
          */}
          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridAutoRows: '260px'
            }}
          >
            {filteredTestimonials.map((testimonial, index) => {
              // Assign creative grid positions cyclically
              const positions = [
                { gridRow: 'span 2' },   // large tall
                { gridRow: 'span 1' },   // normal
                { gridRow: 'span 1' },   // normal
                { gridColumn: 'span 2', gridRow: 'span 1' }, // wide accent
                { gridRow: 'span 1' },   // normal
                { gridRow: 'span 2' },   // large tall
              ]
              const pos = positions[index % positions.length]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  style={{
                    backgroundColor: 'var(--navy-mid)',
                    border: '1px solid var(--border)',
                    borderRadius: '2px',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'border-color 0.3s, background 0.3s',
                    cursor: 'default',
                    ...pos
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--border-accent)'
                    e.currentTarget.style.backgroundColor = 'var(--navy-light)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.backgroundColor = 'var(--navy-mid)'
                  }}
                >
                  {/* Orange sweep line at bottom */}
                  <div
                    className="about-card-sweep"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'var(--orange)'
                    }}
                  />

                  {/* Corner accent */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '40px',
                      height: '40px',
                      borderBottom: '1px solid var(--border-accent)',
                      borderLeft: '1px solid var(--border-accent)',
                    }}
                  />

                  {/* Video thumbnail for video testimonials */}
                  {testimonial.video && pos.gridRow === 'span 2' && (
                    <div
                      style={{
                        aspectRatio: '16/9',
                        backgroundColor: 'var(--navy-card)',
                        border: '1px solid var(--border)',
                        borderRadius: '1px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem',
                        cursor: 'pointer',
                        flex: '0 0 auto',
                        transition: 'background 0.3s'
                      }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--navy-light)'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--navy-card)'}
                    >
                      <PlayCircle size={52} style={{ color: 'var(--orange)', opacity: 0.85 }} />
                    </div>
                  )}

                  {/* Small play icon badge for non-tall video cards */}
                  {testimonial.video && pos.gridRow !== 'span 2' && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        marginBottom: '0.75rem'
                      }}
                    >
                      <PlayCircle size={14} style={{ color: 'var(--orange)' }} />
                      <span className="eyebrow" style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}>
                        Watch Testimonial
                      </span>
                    </div>
                  )}

                  {/* Quote icon */}
                  <Quote size={24} style={{ color: 'var(--orange)', opacity: 0.5, marginBottom: '0.75rem' }} />

                  {/* Testimonial text */}
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontStyle: 'italic',
                      color: 'var(--off-white)',
                      lineHeight: 1.6,
                      fontSize: pos.gridColumn === 'span 2' ? '1.1rem' : '0.9rem',
                      flexGrow: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: pos.gridRow === 'span 2' ? 6 : 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    "{testimonial.testimonial}"
                  </p>

                  {/* Client info */}
                  <div
                    style={{
                      marginTop: '1.25rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 700,
                          color: 'var(--white)',
                          letterSpacing: '0.05em',
                          fontSize: '0.95rem'
                        }}
                      >
                        {testimonial.clientName}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          color: 'var(--muted)',
                          fontSize: '0.75rem',
                          marginTop: '2px'
                        }}
                      >
                        {testimonial.company}
                      </p>
                    </div>
                    <span
                      className="eyebrow"
                      style={{
                        fontSize: '0.55rem',
                        padding: '4px 8px',
                        border: '1px solid var(--border-accent)',
                        color: 'var(--orange)',
                        letterSpacing: '0.15em'
                      }}
                    >
                      {testimonial.category}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile fallback — single column */}
          <style>{`
            @media (max-width: 768px) {
              .testimonials-grid {
                grid-template-columns: 1fr !important;
              }
              .testimonials-grid > * {
                grid-row: span 1 !important;
                grid-column: span 1 !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 px-4" style={{ backgroundColor: 'var(--navy-mid)' }}>
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-12">
            <p className="eyebrow mb-3">Our Partners</p>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: '0.04em',
                color: 'var(--white)'
              }}
            >
              Trusted by Leading Brands
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                style={{
                  aspectRatio: '1',
                  backgroundColor: 'var(--navy-card)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'border-color 0.3s, background 0.3s',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--border-accent)'
                  e.currentTarget.style.backgroundColor = 'var(--navy-light)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.backgroundColor = 'var(--navy-card)'
                }}
              >
                <span
                  className="eyebrow"
                  style={{ fontSize: '0.5rem', color: 'var(--muted)', letterSpacing: '0.1em' }}
                >
                  LOGO
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(249,115,22,0.06) 0%, transparent 70%)'
          }}
        />
        <div className="container mx-auto max-w-3xl text-center relative">
          <motion.div {...fadeIn}>
            <p className="eyebrow mb-4">Let's Collaborate</p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                letterSpacing: '0.04em',
                lineHeight: 0.95,
                color: 'var(--white)'
              }}
            >
              Ready to Join Our<br />
              <span style={{ color: 'var(--orange)' }}>Success Stories?</span>
            </h2>
            <p
              className="mb-10"
              style={{ color: 'var(--muted)', fontFamily: "'Barlow', sans-serif", fontSize: '1rem' }}
            >
              Let's create something exceptional together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary">Start Your Project</button>
              <button className="btn-outline">View Our Work</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}