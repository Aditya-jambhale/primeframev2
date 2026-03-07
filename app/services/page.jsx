'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Play } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

// ─── Services Data ────────────────────────────────────────────────────────────
const allServices = [
  {
    id: "viral-shorts",
    title: "Viral social media Shorts",
    src: "/services/reel.png",
    valueProp: "Rapid-fire cinematic content built for high-speed engagement.",
    outcome: "Increased reach, engagement, and follower growth across social platforms.",
    overview: "We specialize in condensing complex messages into short, high-production videos that hit hard and stick in the viewer's memory. Optimized for Instagram Reels, YouTube Shorts, and TikTok.",
    deliverables: ["Vertical Cinematic Shorts", "High-Energy Hype Clips", "Trend-Aligned Content", "Engagement-Driven Snippets"],
    process: "Hook Analysis → High-Energy Production → Fast-cut Edit → Sound Design → Final Delivery"
  },
  {
    id: "event-production",
    title: "Event photography & videography",
    src: "/services/eventfilm.png",
    valueProp: "Capturing the scale and energy of your most significant live milestones.",
    outcome: "A comprehensive video archive and a high-impact event highlight film.",
    overview: "From global conferences to intimate industry gatherings, we capture the atmosphere and key moments without disrupting the flow of your event. Full-scale coverage with professional stills and video.",
    deliverables: ["Event Highlight Aftermovie", "Professional Photography Suite", "Speaker Keynotes", "Attendee Interview Compliations"],
    process: "Site Survey → Multi-cam Live Capture → On-site Same-day Edits → Post-event Full Cut → Archival Delivery"
  },
  {
    id: "wedding-coverage",
    title: "Wedding Coverage",
    src: "/services/wedding.png",
    valueProp: "Preserving your legacy through cinematic emotion.",
    outcome: "A timeless wedding film that captures the soul of your celebration.",
    overview: "We approach weddings like cinema. Our focus is on the emotional nuances, the family legacy, and the grandeur of the celebration, delivered in a film you'll watch for decades.",
    deliverables: ["Cinematic Wedding Film", "High-Energy Wedding Trailer", "Family Legacy Interviews", "Full Documentation of Rituals"],
    process: "Couple Pre-consultation → Multi-location Shoot → Emotional Story Mining → Narrative Edit → Custom Soundtrack Mix"
  },
  {
    id: "documentary-shoot",
    title: "Documentary Shoot",
    src: "/services/bts.png",
    valueProp: "Humanizing complex narratives through authentic documentation.",
    outcome: "An emotional, resonant story that builds deep brand connection.",
    overview: "Our documentary services focus on authentic storytelling. We dive deep into subjects to capture the raw, real, and resonant moments that define human experience and brand history.",
    deliverables: ["Full-length Documentary Film", "Social Highlight Clips", "Raw Archive Footage", "Behind-the-scenes Coverage"],
    process: "Subject Research → Long-term Documentation → Story Mining → Narrative Edit → Cinematic Soundscape"
  },
  {
    id: "long-form-youtube",
    title: "Long form YouTube Videos",
    src: "/services/promotional brand.png",
    valueProp: "In-depth content strategy for high-retention education and entertainment.",
    outcome: "A detailed authority-building asset for your channel or platform.",
    overview: "We produce extended content that maintains engagement. Ideal for educational courses, detailed industry breakdowns, or entertainment series that require high production value.",
    deliverables: ["Educational Video Series", "In-depth Industry Analysis", "Long-form Entertainment Content", "Masterclass Production"],
    process: "Structure Development → Scripting Support → Batch Production Shoot → Retention-focused Editing → Final Delivery"
  },
  {
    id: "podcast-production",
    title: "Podcast Production",
    src: "/services/interview.png",
    valueProp: "Elevating the podcast experience with multi-camera cinematic production.",
    outcome: "A professional video-first podcast that signals structure and authority.",
    overview: "We handle the technical complexity of modern podcasting. From multi-cam video setups to professional audio mixing, we make your podcast look like a Skylume-time broadcast.",
    deliverables: ["Multi-cam Video Podcast", "Social Media Cutdowns", "Audio-optimized Distribution Files", "Intro/Outro Branding"],
    process: "Room Setup & Accoustics → Multi-cam Live Direction → Multi-track Audio Mix → Visual Overlay & Branding → Weekly Delivery"
  },
  {
    id: "drone-shoot",
    title: "Drone Shoot",
    src: "/services/drone.png",
    valueProp: "Scale from a higher perspective.",
    outcome: "Breath-taking aerial visuals that signal premium production value.",
    overview: "Professional drone cinematography adds a layer of grandeur to any production. FPV and cinematic drone shots provide a dynamic look that standard cameras cannot reach.",
    deliverables: ["4K High-DR Aerial Footage", "FPV Flythroughs", "Landscape Dynamic Shots", "Event Scale Coverage"],
    process: "Permission & Flight Planning → On-site Aerial Shoot → Shot Selection → Post-production Stabilization → Final Color Match"
  },
  {
    id: "tour-videography",
    title: "Tour Videography",
    src: "/services/corporate.png",
    valueProp: "Dynamic documentation for travel and tourism leadership.",
    outcome: "Enchanting travel content that inspires and moves global audiences.",
    overview: "We follow the journey. Whether it's a luxury tour, a destination-based campaign, or a personal travel story, we capture the spirit of exploration with high-end visuals.",
    deliverables: ["Destination Highlight Film", "Journey Documentary", "Travel Brand Promos", "Point-of-view Travel Snippets"],
    process: "Travel Itinerary Sync → Dynamic Multi-loc Shoot → Visual Storytelling edit → Color Matching to Destination → Delivery"
  },
  {
    id: "dubai-sightseeing",
    title: "Dubai Sightseeing Shoot",
    src: "/services/realestate.png",
    valueProp: "Exclusive cinematic production capturing the grandeur of Dubai.",
    outcome: "World-class visual assets that dominate global social media and travel platforms.",
    overview: "Capturing Dubai's iconic landmarks requires technical precision and creative vision. We produce high-end sightseeing content specifically tailored for global digital audiences.",
    deliverables: ["Landmark Feature Films", "Sightseeing Highlight Reels", "Press Release Video Assets", "Global Social Cutdowns"],
    process: "Permit Acquisition → Landmark Selection → Cinematic Production → Viral Cut Editing → Final Global Release"
  },
  {
    id: "real-estate-videography",
    title: "Real Estate Videography",
    src: "/services/realestate.png",
    valueProp: "Cinematic production capturing the grandeur of real estate.",
    outcome: "World-class visual assets that dominate global social media and travel platforms.",
    overview: "Capturing real estate requires technical precision and creative vision. We produce high-end real estate content specifically tailored for global digital audiences.",
    deliverables: ["Landmark Feature Films", "Sightseeing Highlight Reels", "Press Release Video Assets", "Global Social Cutdowns"],
    process: "Property Walkthrough → Cinematic Production → Viral Cut Editing → Final Global Release"
  }
]

// ─── Individual Service Section ──────────────────────────────────────────────
function ServiceSection({ service }) {
  return (
    <section id={service.id} className="py-24 border-b border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-8xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Content Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-yellow-500 mb-6 group transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(234,179,8,0.35)] mx-auto lg:mx-0">
                <Play size={12} className="text-white fill-white" />
                <span className="font-inter text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white">
                  Specialized Service
                </span>
              </div>
              <h2 className="text-section-title text-white text-2xl mb-4 uppercase">
                {service.title}
              </h2>
              <p className="font-inter text-lg text-yellow-500/80 tracking-wide mb-2 italic">
                "{service.valueProp}"
              </p>
              <p className="font-inter font-medium text-white mb-8 border-l-2 border-yellow-500 lg:border-l-2 lg:border-y-0 border-y-0 pl-4 py-1">
                {service.outcome}
              </p>

              <div className="flex justify-center lg:justify-start gap-4 mb-12">
                <Link href="/contact">
                  <button className="bg-yellow-500 text-white font-inter text-[0.82rem] font-semibold tracking-[0.18em] uppercase px-[30px] py-[13px] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-yellow-600 transition-all">
                    Request Proposal
                  </button>
                </Link>
              </div>

              <div className="space-y-8 flex flex-col items-center lg:items-start">
                <div>
                  <h4 className="font-inter font-black text-lg text-white tracking-tight mb-3 uppercase">SERVICE OVERVIEW</h4>
                  <p className="font-inter font-light text-white/90 leading-relaxed max-w-2xl">
                    {service.overview}
                  </p>
                </div>

                <div className="w-full">
                  <h4 className="font-inter font-black text-xl text-white tracking-tight mb-4 uppercase text-center lg:text-left">WHAT WE DELIVER</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 justify-items-center lg:justify-items-start">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-foreground font-inter">
                        <CheckCircle size={16} className="text-yellow-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-xl border border-white/5 w-full">
                  <h4 className="font-inter text-[0.6rem] font-bold tracking-[0.2em] uppercase text-yellow-500 mb-2">Our Process</h4>
                  <p className="font-inter font-light text-xs text-white/90 leading-relaxed">
                    {service.process}
                  </p>
                </div>

                <Link href="/contact">
                  <button className="flex items-center mt-6 gap-2 group text-white font-inter text-sm font-bold tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity">
                    Start Your Project
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Column - Actual Image Display */}
          <div className="relative pt-10">
            <ScrollReveal animation="fade-in" delay={0.2}>
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-yellow-500/20 group hover-lift shadow-2xl">
                <Image
                  src={service.src}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <div className="w-12 h-1 bg-yellow-500 mb-4" />
                  <h3 className="font-inter font-black text-3xl text-white tracking-tight leading-none uppercase">
                    {service.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen text-foreground">

      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1800&q=80"
            alt="Services Hero"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 text-center px-6">
          <ScrollReveal animation="fade-up" delay={0.1}>
            <span className="font-inter text-sm font-bold tracking-[0.25em] uppercase text-yellow-500 block mb-6">
              Our Production Suite
            </span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.3}>
            <h1 className="text-hero text-white mb-8 uppercase">
              THE <span className="text-yellow-500">SERVICES</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.5}>
            <p className="font-inter font-light text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Exploring the bounds of cinema and story. From rapid-fire social content to global event milestones — every frame engineered for purpose.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVICES NAV - Infinite Marquee with Hover Pause */}
      <div className="!sticky top-[64px] z-[40] bg-background/95 backdrop-blur-xl border-y border-white/5">
        <div className="relative overflow-hidden py-4 group">
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background via-background/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background via-background/40 to-transparent z-10 pointer-events-none" />

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 35,
              ease: 'linear',
              repeat: Infinity,
            }}
            className="flex items-center gap-12 md:gap-24 whitespace-nowrap px-10 hover:[animation-play-state:paused]"
          >
            {[...allServices, ...allServices].map((service, i) => (
              <button
                key={`${service.id}-${i}`}
                onClick={() => {
                  const el = document.getElementById(service.id);
                  if (el) {
                    const yOffset = -140;
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="font-inter text-[0.6rem] md:text-[0.75rem] font-bold tracking-[0.25em] uppercase text-white/40 hover:text-yellow-500 transition-all duration-300"
              >
                {service.title}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CONTENT REEL */}
      <div className="bg-background">
        {allServices.map((service, j) => (
          <ServiceSection key={j} service={service} />
        ))}
      </div>

      {/* FINAL CTA */}
      <section className="py-40 bg-background border-t border-white/5 text-center px-6 overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-section-title text-white leading-[0.9] mb-10 uppercase">
            READY TO CRAFT <br />
            YOUR NEXT <span className="text-yellow-500">MASTERPIECE?</span>
          </h2>
          <Link href="/contact">
            <button className="bg-yellow-500 text-white font-inter text-sm font-bold tracking-[0.2em] uppercase px-[50px] py-[15px] [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))] hover:bg-yellow-600 transition-all hover:scale-105 active:scale-95">
              Book a Consultation Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}