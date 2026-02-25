'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { PlayCircle, Quote } from 'lucide-react'
import Link from 'next/link'

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
    <div className="bg-black text-slate-300">

      {/* Hero Section */}
      <section className="py-28 px-4 text-center relative overflow-hidden">
        {/* Decorative diagonal line */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(234,179,8,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        <div className="container mx-auto max-w-7xl relative">
          <motion.div {...fadeIn}>
            <p className="font-barlow-condensed text-[0.72rem] font-bold tracking-[0.22em] uppercase text-yellow-500 mb-4">Client Stories</p>
            <h1 className="font-bebas text-[clamp(3rem,8vw,6rem)] tracking-[0.04em] leading-[0.95] text-white mb-6">
              Work That Speaks<br />
              <span className="text-yellow-500">Before We Do</span>
            </h1>
            <p className="text-textMuted font-barlow text-lg">
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
                className={`font-barlow-condensed text-[0.75rem] font-bold tracking-[0.18em] uppercase px-[24px] py-[10px] border cursor-pointer transition-all duration-250 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] ${filter === category
                  ? 'bg-yellow-500 text-white border-yellow'
                  : 'bg-transparent text-white border-yellow/50 hover:border-yellow hover:text-yellow-500 hover:bg-yellow-500/5'
                  }`}
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
                  className="bg-pf-card border border-white/5 p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 cursor-default group hover:border-yellow/30 hover:bg-pf-dark"
                  style={pos}
                >
                  {/* yellow-500 sweep line at bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-10 h-10 border-b border-l border-yellow/30" />

                  {/* Video thumbnail for video testimonials */}
                  {testimonial.video && pos.gridRow === 'span 2' && (
                    <div className="aspect-video bg-black border border-white/10 rounded overflow-hidden flex items-center justify-center mb-6 cursor-pointer group/vid transition-all">
                      <PlayCircle size={52} className="text-yellow-500 opacity-85 group-hover/vid:scale-110 transition-transform" />
                    </div>
                  )}

                  {/* Small play icon badge for non-tall video cards */}
                  {testimonial.video && pos.gridRow !== 'span 2' && (
                    <div className="flex items-center gap-1.5 mb-3">
                      <PlayCircle size={14} className="text-yellow-500" />
                      <span className="font-barlow-condensed text-[0.6rem] font-bold tracking-[0.18em] uppercase text-yellow-500">
                        Watch Testimonial
                      </span>
                    </div>
                  )}

                  {/* Quote icon */}
                  <Quote size={24} className="text-yellow-500/50 mb-3" />

                  {/* Testimonial text */}
                  <p
                    className={`font-barlow italic text-slate-200 leading-relaxed flex-grow overflow-hidden ${pos.gridColumn === 'span 2' ? 'text-lg' : 'text-sm'
                      }`}
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: pos.gridRow === 'span 2' ? 6 : 4,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    "{testimonial.testimonial}"
                  </p>

                  {/* Client info */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <p className="font-barlow-condensed font-bold text-white tracking-[0.05em] text-[0.95rem]">
                        {testimonial.clientName}
                      </p>
                      <p className="font-barlow text-textMuted text-[0.75rem] mt-0.5">
                        {testimonial.company}
                      </p>
                    </div>
                    <span className="font-barlow-condensed text-[0.55rem] font-bold tracking-[0.15em] uppercase text-yellow-500 px-2 py-1 border border-yellow/30 bg-yellow-500/5">
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
      <section className="py-24 px-4 bg-black border-y border-white/5 overflow-hidden">
        <div className="container mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <p className="font-barlow-condensed text-[0.72rem] font-bold tracking-[0.22em] uppercase text-yellow-500 mb-3">Our Partners</p>
            <h2 className="font-bebas text-[clamp(2rem,5vw,3.5rem)] tracking-[0.04em] text-white">
              Trusted by Leading Brands
            </h2>
            <div className="w-12 h-0.5 mx-auto bg-yellow-500 mt-4 opacity-50" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              '/companies/microsoft.png',
              '/companies/byjus.png',
              '/companies/Arise.png',
              '/companies/Fulcrum.png',
              '/companies/Hammad.png',
              '/companies/sarvam.svg',
              '/companies/edwise.png',
              '/companies/flind.png',
              '/companies/ashis.png',
              '/companies/kundlas.png',
              '/companies/jc.png',
              '/companies/balance.png'
            ].map((logo, i) => (
              <div
                key={i}
                className="aspect-square bg-pf-card border border-white/5 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 p-8 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%-8px))]"
              >
                <img src={logo} alt="Partner Logo" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(234,179,8,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-3xl text-center relative">
          <motion.div {...fadeIn}>
            <p className="font-barlow-condensed text-[0.72rem] font-bold tracking-[0.22em] uppercase text-yellow-500 mb-4">Let's Collaborate</p>
            <h2 className="font-bebas text-[clamp(2.5rem,6vw,5rem)] tracking-[0.04em] leading-[0.95] text-white mb-6">
              Ready to Join Our<br />
              <span className="text-yellow-500">Success Stories?</span>
            </h2>
            <p className="text-textMuted font-barlow text-lg mb-10">
              Let's create something exceptional together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="bg-yellow-500 text-white font-barlow-condensed text-[0.82rem] font-bold tracking-[0.18em] uppercase px-[36px] py-[14px] border-none cursor-pointer transition-all duration-250 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-yellow-600 hover:-translate-y-0.5">
                  Start Your Project
                </button>
              </Link>
              <Link href="/services">
                <button className="bg-transparent text-white font-barlow-condensed text-[0.82rem] font-bold tracking-[0.18em] uppercase px-[36px] py-[13px] border border-yellow/50 cursor-pointer transition-all duration-250 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:border-yellow hover:text-yellow-500 hover:bg-yellow-500/5">
                  View Our Work
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}