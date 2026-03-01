'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  FileText, Film, Smartphone, Users, Sparkles, Briefcase, TrendingUp,
  MessageSquare, Zap, Radio, Home, Plane, Heart, Youtube, Globe, ArrowRight, ChevronDown
} from 'lucide-react'

const allServices = [
  {
    id: 'viral-shorts',
    title: 'Viral social media Shorts',
    description: 'High-impact, concise content engineered for rapid reach and algorithmic amplification.',
    icon: Zap
  },
  {
    id: 'event-production',
    title: 'Event photography & videography',
    description: 'Full-scale documentation of exhibitions, conferences, and large-scale gatherings with cinematic precision.',
    icon: Users
  },
  {
    id: 'wedding-coverage',
    title: 'Wedding Coverage',
    description: 'Timeless, emotional storytelling that preserves your most significant life milestones.',
    icon: Heart
  },
  {
    id: 'documentary-shoot',
    title: 'Documentary Shoot',
    description: 'Deep-dive storytelling that captures authentic human experiences and powerful narratives.',
    icon: FileText
  },
  {
    id: 'long-form-youtube',
    title: 'Long form YouTube Videos',
    description: 'Comprehensive video productions optimized for high-retention and digital authority.',
    icon: Youtube
  },
  {
    id: 'podcast-production',
    title: 'Podcast Production',
    description: 'Professional multi-cam recordings and end-to-end management for global distribution.',
    icon: Radio
  },
  {
    id: 'drone-shoot',
    title: 'Drone Shoot',
    description: 'Cinema-grade aerial perspectives capturing cinematic scale and dynamic motion.',
    icon: Plane
  },
  {
    id: 'tour-videography',
    title: 'Tour Videography',
    description: 'Dynamic coverage for travel, tourism, and destination-based brand narratives.',
    icon: Globe
  },
  {
    id: 'dubai-sightseeing',
    title: 'Dubai Sightseeing Shoot',
    description: 'Exclusive cinematic production capturing the grandeur of Dubai landmarks.',
    icon: Sparkles
  },
  {
    id: 'Real Estate Videography',
    title: 'Real Estate Videography',
    description: 'Showcase properties with cinematic drone and interior shots that drive faster sales.',
    icon: Home
  },
]

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false)
  const visibleServices = showAll ? allServices : allServices.slice(0, 8)

  return (
    <section className="py-24 bg-black overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="font-outfit text-xs font-bold tracking-[0.25em] uppercase text-yellow-500 mb-2 block">
              Specialized Production
            </span>
            <h2 className="font-montserrat font-semibold font-black text-5xl md:text-7xl text-white tracking-tight leading-none m-0 uppercase">
              OUR <span className="text-yellow-500">EXPERTISE</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-outfit font-light text-textMuted text-lg max-w-2xl leading-relaxed"
          >
            {allServices.length} specialized services engineered for authority, impact, and cinematic excellence.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {visibleServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  transition={{
                    duration: 0.5,
                    delay: showAll && index >= 8 ? (index - 8) * 0.05 : index * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  viewport={{ once: true }}
                  className="group bg-pf-card border border-white/5 p-8 rounded-xl transition-all duration-500 hover:border-yellow-500/30 hover:bg-yellow-500/5 hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Decorative Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[50px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 transition-colors group-hover:bg-yellow-500/10">
                      <Icon className="text-yellow-500" size={24} />
                    </div>

                    <h3 className="font-montserrat font-bold text-2xl text-white tracking-wide mb-3 transition-colors group-hover:text-yellow-500 uppercase">
                      {service.title}
                    </h3>

                    <p className="font-outfit font-light text-sm text-textMuted leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>

                    <Link href={`/services#${service.id}`}>
                      <button className="flex items-center gap-2 font-outfit text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/50 group-hover:text-yellow-500 transition-all">
                        Explore More
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* See More Button */}
        <div className="mt-12 flex justify-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 font-outfit text-[0.8rem] font-bold tracking-[0.3em] uppercase text-yellow-500 bg-white/5 border border-white/10 px-8 py-4 rounded-full transition-all hover:bg-yellow-500/10 hover:border-yellow-500/30"
          >
            {showAll ? 'See Less' : 'See More Services'}
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={18} />
            </motion.div>
          </motion.button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 p-12 bg-pf-card border border-white/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-left">
            <h4 className="font-montserrat font-black text-3xl text-white tracking-tight mb-2 uppercase">
              READY TO <span className="text-yellow-500">START?</span>
            </h4>
            <p className="font-outfit font-light text-textMuted">Book a session with our directors to discuss your requirements.</p>
          </div>
          <Link href="/contact">
            <button className="bg-yellow-500 text-white font-outfit text-[0.82rem] font-bold tracking-[0.18em] uppercase px-[40px] py-[16px] transition-all duration-300 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-yellow-600 hover:-translate-y-0.5">
              Book Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
