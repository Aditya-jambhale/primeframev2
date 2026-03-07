'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  FileText, Film, Smartphone, Users, Sparkles, Briefcase, TrendingUp,
  MessageSquare, Zap, Radio, Home, Plane, Heart, Youtube, Globe, ArrowRight, ChevronDown
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

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
    <section className="py-24 bg-black/70 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-20">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-yellow-500 mb-6 group transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(234,179,8,0.35)]">
              <Sparkles size={14} className="text-white fill-white" />
              <span className="font-inter text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white">
                Specialized Production
              </span>
            </div>
            <h2 className="font-inter font-black text-4xl md:text-6xl text-white tracking-tight leading-none m-0 uppercase">
              OUR <span className="text-yellow-500">EXPERTISE</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="font-inter font-light text-white/90 text-lg max-w-2xl leading-relaxed mt-4">
              {allServices.length} specialized services engineered for authority, impact, and cinematic excellence.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <ScrollReveal animation="stagger-list" stagger={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {visibleServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.id}
                    layout
                    className="group bg-black/95 border border-white/20 p-8 rounded-xl transition-all duration-500 hover:border-yellow-500/30 hover:bg-yellow-500/5 hover:-translate-y-1 relative overflow-hidden h-full"
                  >
                    {/* Decorative Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[50px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 h-full flex flex-col items-center text-center lg:items-start lg:text-left">
                      <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center text-center justify-center mb-6 transition-colors group-hover:bg-yellow-500/10 border border-white/10 ">
                        <Icon className="text-white-500" size={24} />
                      </div>

                      <h3 className="font-inter font-bold text-2xl text-white tracking-wide mb-3 transition-colors group-hover:text-yellow-500 uppercase">
                        {service.title}
                      </h3>

                      <p className="font-inter font-light text-sm text-white/90 leading-relaxed mb-8 flex-grow">
                        {service.description}
                      </p>

                      <Link href={`/services#${service.id}`}>
                        <button className="flex items-center gap-2 font-inter text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white/50 group-hover:text-yellow-500 transition-all ">
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
        </ScrollReveal>

        {/* See More Button */}
        <div className="mt-12 flex justify-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 font-inter text-[0.7rem] font-bold tracking-[0.1em] uppercase text-yellow-500 bg-white/5 border border-white/10 px-6 py-3 rounded-full transition-all hover:bg-yellow-500/10 hover:border-yellow-500/30"
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
        <div className="mt-20 p-10 bg-pf-card border border-white/5 rounded-xl flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="font-inter font-black text-2xl text-white tracking-tight mb-2 uppercase">
              READY TO <span className="text-yellow-500">START?</span>
            </h4>
            <p className="font-inter font-light text-white/90">Book a session with our directors to discuss your requirements.</p>
          </div>
          <Link href="/contact">
            <button className="bg-yellow-500 text-white font-inter text-[0.82rem] font-bold tracking-[0.12em] uppercase px-[36px] py-[14px] transition-all duration-300 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-yellow-600 hover:-translate-y-0.5">
              Book Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
