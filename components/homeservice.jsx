'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  FileText, Film, Smartphone, Users, Sparkles, Briefcase, TrendingUp,
  MessageSquare, Zap, Radio, Home, Plane, Heart, Youtube, Globe, ArrowRight
} from 'lucide-react'

const allServices = [
  {
    id: 'documentary-shoot',
    title: 'Documentary shoot',
    description: 'Deep-dive storytelling that captures authentic human experiences and cultural narratives.',
    icon: FileText
  },
  {
    id: 'long-form-video',
    title: 'Long-Form Video',
    description: 'Comprehensive video productions for in-depth educational or entertainment content.',
    icon: Film
  },
  {
    id: 'short-form-video',
    title: 'Short-Form Video',
    description: 'High-impact, concise content designed for rapid consumption and high retention.',
    icon: Smartphone
  },
  {
    id: 'event-coverage',
    title: 'Event Coverage',
    description: 'Full-scale documentation of exhibitions, conferences, and large-scale gatherings.',
    icon: Users
  },
  {
    id: 'burj-projection',
    title: 'Burj Khalifa Projection',
    description: 'Exclusive production services for landmark projections on the world\'s tallest building.',
    icon: Sparkles
  },
  {
    id: 'corporate-films',
    title: 'Corporate Films',
    description: 'Professional brand stories that build authority and communicate global vision.',
    icon: Briefcase
  },
  {
    id: 'promo-videos',
    title: 'Promotional Brand Videos',
    description: 'Strategic campaign videos built to drive engagement and market presence.',
    icon: TrendingUp
  },
  {
    id: 'executive-interviews',
    title: 'Executive Interviews',
    description: 'Cinematic interview setups with structured lighting and professional audio capture.',
    icon: MessageSquare
  },
  {
    id: 'social-reels',
    title: 'Social Media Reels',
    description: 'Platform-optimized vertical content engineered for reach and viral potential.',
    icon: Zap
  },
  {
    id: 'podcast-mgmt',
    title: 'Podcast Management',
    description: 'End-to-end podcast production, from multi-cam recording to final distribution.',
    icon: Radio
  },
  {
    id: 'real-estate',
    title: 'Real Estate Product Demo',
    description: 'Luxury property walkthroughs designed to attract high-end global buyers.',
    icon: Home
  },
  {
    id: 'drone-cinematography',
    title: 'Drone Cinematography',
    description: 'Cinema-grade aerial perspectives that capture scale and cinematic grandeur.',
    icon: Plane
  },
  {
    id: 'wedding-videos',
    title: 'Wedding Videos',
    description: 'Elegant personal storytelling that preserves your most significant milestones.',
    icon: Heart
  },
  {
    id: 'youtube-mgmt',
    title: 'Youtube Management',
    description: 'Strategic channel growth through consistent high-quality content production.',
    icon: Youtube
  },
  {
    id: 'tour-videography',
    title: 'Tour Videography',
    description: 'Dynamic coverage for travel, tourism, and destination-based brand stories.',
    icon: Globe
  },
]

export default function ServicesSection() {
  return (
    <section className="py-32 bg-black overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="font-barlow-condensed text-xs font-bold tracking-[0.25em] uppercase text-yellow-500 mb-2 block">
              Specialized Production
            </span>
            <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-widest leading-none m-0">
              OUR <span className="text-yellow-500">EXPERTISE</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-barlow font-light text-textMuted text-lg max-w-2xl leading-relaxed"
          >
            15 specialized services engineered for authority, impact, and cinematic excellence.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {allServices.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-pf-card border border-white/5 p-8 rounded-xl transition-all duration-500 hover:border-yellow-500/30 hover:bg-yellow-500/5 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[50px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 transition-colors group-hover:bg-yellow-500/10">
                    <Icon className="text-yellow-500" size={24} />
                  </div>

                  <h3 className="font-bebas text-2xl text-white tracking-widest mb-3 transition-colors group-hover:text-yellow-500">
                    {service.title.toUpperCase()}
                  </h3>

                  <p className="font-barlow font-light text-sm text-textMuted leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  <Link href={`/services#${service.id}`}>
                    <button className="flex items-center gap-2 font-barlow-condensed text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/50 group-hover:text-yellow-500 transition-all">
                      Explore More
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 p-12 bg-pf-card border border-white/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-left">
            <h4 className="font-bebas text-3xl text-white tracking-[0.05em] mb-2">
              READY TO <span className="text-yellow-500">START?</span>
            </h4>
            <p className="font-barlow font-light text-textMuted">Book a session with our directors to discuss your requirements.</p>
          </div>
          <Link href="/contact">
            <button className="bg-yellow-500 text-white font-barlow-condensed text-[0.82rem] font-bold tracking-[0.18em] uppercase px-[40px] py-[16px] transition-all duration-300 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-yellow-600 hover:-translate-y-0.5">
              Book Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
