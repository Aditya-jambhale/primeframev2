'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Play } from 'lucide-react'

// ─── Services Data ────────────────────────────────────────────────────────────
const serviceCategories = [
  {
    name: "Brand & Corporate Films",
    eyebrow: "Professional Storytelling",
    description: "High-end cinematic narratives designed to build authority and drive global brand presence.",
    services: [
      {
        id: "corporate-films",
        title: "Corporate Films",
        valueProp: "Defining your brand's authority through cinematic clarity.",
        outcome: "A high-end company profile that signals global scale and precision.",
        overview: "Our corporate films are more than just videos—they are strategic assets. We capture the core values, scale, and vision of your organization using cinema-grade tools and performance-driven storytelling.",
        deliverables: ["Company Profile Film", "Mission & Vision Highlights", "Internal Culture Assets", "Investor Presentation Video"],
        process: "Discovery Call → Scripting & Storyboarding → Multi-cam On-site Shoot → Cinematic Grading → Sound Design → Final Review"
      },
      {
        id: "promo-videos",
        title: "Promotional Brand Videos",
        valueProp: "Strategic visuals that demand attention and drive action.",
        outcome: "A compelling launch asset that increases market engagement and trust.",
        overview: "We construct high-energy promotional content that cuts through digital noise. Every frame is engineered to signal quality and premium positioning for your products or services.",
        deliverables: ["Product Launch Film", "Brand Campaign Video", "Ad Creatives for Digital Media", "High-Energy Hype Reels"],
        process: "Campaign Strategy → Creative Concept → High-Production Shoot → Visual Effects & Motion Graphics → Final Optimization"
      },
      {
        id: "executive-interviews",
        title: "Executive Interviews",
        valueProp: "Reflecting leadership confidence through structured interviews.",
        outcome: "A clean, professional communication asset that humanizes your leadership.",
        overview: "We produce executive interviews that go beyond simple recording. We focus on structured lighting, crisp professional audio, and interview techniques that bring out authentic leadership insights.",
        deliverables: ["CEO Thought Leadership Videos", "Founder Story Segment", "Stakeholder Communications", "Industry Insight Interviews"],
        process: "Topic Scouting → Professional Lighting Setup → Directed Interview Session → Structured Narrative Edit → Final Polish"
      },
      {
        id: "documentary-shoot",
        title: "Documentary Shoot",
        valueProp: "Humanizing complex narratives through authentic documentation.",
        outcome: "An emotional, resonant story that builds deep brand connection.",
        overview: "Our documentary services focus on authentic storytelling. We dive deep into subjects to capture the raw, real, and resonant moments that define human experience and brand history.",
        deliverables: ["Full-length Documentary Film", "Social Highlight Clips", "Raw Archive Footage", "Behind-the-scenes Coverage"],
        process: "Subject Research → Long-term Documentation → Story Mining → Narrative Edit → Cinematic Soundscape"
      },
      {
        id: "long-form-video",
        title: "Long-Form Video",
        valueProp: "In-depth content strategy for high-retention education and entertainment.",
        outcome: "A detailed authority-building asset for your channel or platform.",
        overview: "We produce extended content that maintains engagement. Ideal for educational courses, detailed industry breakdowns, or entertainment series that require high production value.",
        deliverables: ["Educational Video Series", "In-depth Industry Analysis", "Long-form Entertainment Content", "Masterclass Production"],
        process: "Structure Development → Scripting Support → Batch Production Shoot → Retention-focused Editing → Final Delivery"
      },
      {
        id: "short-form-video",
        title: "Short-Form Video",
        valueProp: "Rapid-fire cinematic content built for high-speed engagement.",
        outcome: "A concise, impactful asset optimized for fast consumption.",
        overview: "We specialize in condensing complex messages into short, high-production videos that hit hard and stick in the viewer's memory.",
        deliverables: ["Product Teasers", "Fast-paced Brand Snippets", "Intro/Outro Assets", "Concise Service Explainers"],
        process: "Hook Development → High-Energy Shoot → Fast-cut Editing → Sound Design Snaps → Ready-to-Post Files"
      },
      {
        id: "social-reels",
        title: "Social Media Reels",
        valueProp: "Engineering viral potential through platform-optimized visuals.",
        outcome: "Increased reach, engagement, and follower growth across social platforms.",
        overview: "Reels are today's most powerful growth tool. We produce vertical content that stops the scroll, using cinematic techniques to elevate the standard of social media production.",
        deliverables: ["Vertical Cinematic Reels", "YouTube Shorts Production", "TikTok Brand Content", "Engagement Snippets"],
        process: "Trend Research → Vertical Cinema Shoot → Native-platform Editing → Captions & Effects → Delivery"
      },
      {
        id: "podcast-mgmt",
        title: "Podcast Management",
        valueProp: "Elevating the podcast experience with multi-camera cinematic production.",
        outcome: "A professional video-first podcast that signals structure and authority.",
        overview: "We handle the technical complexity of modern podcasting. From multi-cam video setups to professional audio mixing, we make your podcast look like a prime-time broadcast.",
        deliverables: ["Multi-cam Video Podcast", "Social Media Cutdowns", "Audio-optimized Distribution Files", "Intro/Outro Branding"],
        process: "Room Setup & Accoustics → Multi-cam Live Direction → Multi-track Audio Mix → Visual Overlay & Branding → Weekly Delivery"
      },
      {
        id: "youtube-mgmt",
        title: "Youtube Management",
        valueProp: "Building a consistent channel presence through high-end production.",
        outcome: "A structured YouTube channel with consistent, cinematic content flow.",
        overview: "We become your YouTube production department. We handle the filming, editing, and thumbnail strategy to ensure your message reaches a global audience with clarity.",
        deliverables: ["Full Video Production", "Thumbnail Strategy Support", "Community Post Assets", "Channel Growth Consultation"],
        process: "Content Calendar → Batch Production Sessions → Strategic Editing → Milestone Analysis → Scaling Support"
      }
    ]
  },
  {
    name: "Events & Live Productions",
    eyebrow: "Full-Scale Coverage",
    description: "Capturing the scale, energy, and impact of your most significant live milestones.",
    services: [
      {
        id: "event-coverage",
        title: "Event Coverage",
        valueProp: "Documenting the energy and scale of your global events.",
        outcome: "A comprehensive video archive and a high-impact event highlight film.",
        overview: "From global conferences to intimate industry gatherings, we capture the atmosphere and key moments without disrupting the flow of your event.",
        deliverables: ["Event Highlight Aftermovie", "Full Session Recordings", "Speaker Highlight Reels", "Attendee Interview Compliations"],
        process: "Site Survey → Multi-cam Live Capture → On-site Same-day Edits → Post-event Full Cut → Archival Delivery"
      },
      {
        id: "burj-projection",
        title: "Burj Khalifa Projection",
        valueProp: "Producing content for the world's most iconic canvas.",
        outcome: "A world-class visual spectacle that dominates global social media.",
        overview: "Executing a Burj Khalifa projection requires technical precision. We produce the specific visual content and document the final projection for a global digital audience.",
        deliverables: ["Projection Content Design", "Cinematic Documentation of the Event", "Press Release Video Assets", "Global Social Cutdowns"],
        process: "Technical Grid Mapping → Visual Assets Production → Event Night Documentation → Viral Cut Editing → Final Global Release"
      }
    ]
  },
  {
    name: "Real Estate & Personal Stories",
    eyebrow: "Personalized Excellence",
    description: "Elegant visuals for luxury properties and life's most significant personal milestones.",
    services: [
      {
        id: "real-estate",
        title: "Real Estate Product Demo",
        valueProp: "Selling a lifestyle, not just a property.",
        outcome: "A premium property walkthrough that attracts high-net-worth investors.",
        overview: "We use cinematic techniques—gimbals, sliders, and drone shots—to showcase luxury real estate for global markets, especially India and Dubai.",
        deliverables: ["Cinematic Property Walkthrough", "Agent-led Narrative Video", "Social Media Property Reels", "Interior Detail Featurettes"],
        process: "Staging Support → Sunrise/Sunset Shoot → Interior Cinematic Flow → Color Grading for Luxury → Fast Delivery"
      },
      {
        id: "drone-cinematography",
        title: "Drone Cinematography",
        valueProp: "Scale from a higher perspective.",
        outcome: "Breath-taking aerial visuals that signal premium production value.",
        overview: "Professional drone cinematography adds a layer of grandeur to any production. FPV and cinematic drone shots provide a dynamic look that standard cameras cannot reach.",
        deliverables: ["4K High-DR Aerial Footage", "FPV Flythroughs", "Landscape Dynamic Shots", "Event Scale Coverage"],
        process: "Permission & Flight Planning → On-site Aerial Shoot → Shot Selection → Post-production Stabilization → Final Color Match"
      },
      {
        id: "wedding-videos",
        title: "Wedding Videos",
        valueProp: "Preserving your legacy through cinematic emotion.",
        outcome: "A timeless wedding film that captures the soul of your celebration.",
        overview: "We approach weddings like cinema. Our focus is on the emotional nuances, the family legacy, and the grandeur of the celebration, delivered in a film you'll watch for decades.",
        deliverables: ["Cinematic Wedding Film", "High-Energy Wedding Trailer", "Family Legacy Interviews", "Full Documentation of Rituals"],
        process: "Couple Pre-consultation → Multi-location Shoot → Emotional Story Mining → Narrative Edit → Custom Soundtrack Mix"
      },
      {
        id: "tour-videography",
        title: "Tour Videography",
        valueProp: "Dynamic documentation for travel and tourism leadership.",
        outcome: "Enchanting travel content that inspires and moves global audiences.",
        overview: "We follow the journey. Whether it's a luxury tour, a destination-based campaign, or a personal travel story, we capture the spirit of exploration with high-end visuals.",
        deliverables: ["Destination Highlight Film", "Journey Documentary", "Travel Brand Promos", "Point-of-view Travel Snippets"],
        process: "Travel Itinerary Sync → Dynamic Multi-loc Shoot → Visual Storytelling edit → Color Matching to Destination → Delivery"
      }
    ]
  }
]

// ─── Individual Service Section ──────────────────────────────────────────────
function ServiceSection({ service, category }) {
  return (
    <section id={service.id} className="py-24 border-b border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Content Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-barlow-condensed text-[0.72rem] font-bold tracking-[0.22em] uppercase text-yellow-500 block mb-4">
                {category}
              </span>
              <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-widest leading-[0.9] mb-4">
                {service.title.toUpperCase()}
              </h2>
              <p className="font-barlow-condensed text-xl text-yellow-500/80 tracking-wide mb-2 italic">
                "{service.valueProp}"
              </p>
              <p className="font-barlow font-medium text-white mb-8 border-l-2 border-yellow-500 pl-4 py-1">
                {service.outcome}
              </p>

              <div className="flex gap-4 mb-12">
                <Link href="/contact">
                  <button className="bg-yellow-500 text-white font-barlow-condensed text-[0.82rem] font-bold tracking-[0.18em] uppercase px-[30px] py-[13px] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-yellow-600 transition-all">
                    Request Proposal
                  </button>
                </Link>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="font-bebas text-xl text-white tracking-widest mb-3">SERVICE OVERVIEW</h4>
                  <p className="font-barlow font-light text-textMuted leading-relaxed">
                    {service.overview}
                  </p>
                </div>

                <div>
                  <h4 className="font-bebas text-xl text-white tracking-widest mb-4">WHAT WE DELIVER</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle size={16} className="text-yellow-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-pf-card rounded-xl border border-white/5">
                  <h4 className="font-barlow-condensed text-[0.7rem] font-bold tracking-[0.2em] uppercase text-yellow-500 mb-2">Our Process</h4>
                  <p className="font-barlow font-light text-xs text-textMuted leading-relaxed">
                    {service.process}
                  </p>
                </div>

                <Link href="/contact">
                  <button className="flex items-center gap-2 group text-white font-barlow-condensed text-sm font-bold tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity">
                    Start Your Project
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Visual Column - Placeholder Decoration */}
          <div className="relative pt-10">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-yellow-500/20 group">
              <div className="absolute inset-0 bg-pf-card animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-bebas text-white/5 text-[10rem] select-none pointer-events-none">
                  {service.id.toUpperCase().charAt(0)}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10">
                <div className="w-12 h-1 bg-yellow-500 mb-4" />
                <h3 className="font-bebas text-3xl text-white tracking-widest leading-none">
                  {service.id.replace(/-/g, ' ').toUpperCase()}
                </h3>
              </div>
            </div>
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[120px] -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen text-slate-300">

      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black z-10" />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1800&q=80"
            alt="Services Hero"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-barlow-condensed text-sm font-bold tracking-[0.25em] uppercase text-yellow-500 block mb-6"
          >
            Our Production Suite
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-[clamp(3.5rem,10vw,8rem)] text-white tracking-widest leading-[0.9] mb-8"
          >
            THE <span className="text-yellow-500">SERVICES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-barlow font-light text-xl text-textMuted max-w-2xl mx-auto leading-relaxed"
          >
            Cinematic excellence across 3 core pillars. From brand storytelling to global events — every frame engineered for purpose.
          </motion.p>
        </div>
      </section>

      {/* CATEGORIES NAV */}
      <div className="sticky top-20 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 py-6">
        <div className="container mx-auto px-6 flex justify-center gap-10 overflow-x-auto no-scrollbar">
          {serviceCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => document.getElementById(cat.name.replace(/\s/g, '-'))?.scrollIntoView({ behavior: 'smooth' })}
              className="whitespace-nowrap font-barlow-condensed text-[0.75rem] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-yellow-500 transition-colors"
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT REEL */}
      {serviceCategories.map((category, i) => (
        <div key={i} id={category.name.replace(/\s/g, '-')}>
          {/* Category Intro */}
          <div className="py-32 bg-pf-card/30 border-b border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
              <span className="font-bebas text-[12rem] absolute top-1/2 -right-10 -translate-y-1/2 text-white/5 pointer-events-none select-none">
                0{i + 1}
              </span>
              <div className="relative z-10">
                <span className="font-barlow-condensed text-sm font-bold tracking-[0.25em] uppercase text-yellow-500 block mb-6">
                  {category.eyebrow}
                </span>
                <h2 className="font-bebas text-6xl md:text-8xl text-white tracking-widest leading-none mb-8">
                  {category.name.toUpperCase()}
                </h2>
                <p className="font-barlow font-light text-2xl text-textMuted max-w-2xl leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          </div>

          {/* Services Loop */}
          {category.services.map((service, j) => (
            <ServiceSection key={j} service={service} category={category.name} />
          ))}
        </div>
      ))}

      {/* FINAL CTA */}
      <section className="py-40 bg-black border-t border-white/5 text-center px-6 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-80 bg-yellow-500/10 blur-[150px] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-bebas text-5xl md:text-8xl text-white tracking-widest leading-[0.9] mb-10">
            READY TO CRAFT <br />
            YOUR NEXT <span className="text-yellow-500">MASTERPIECE?</span>
          </h2>
          <Link href="/contact">
            <button className="bg-yellow-500 text-white font-barlow-condensed text-[1rem] font-bold tracking-[0.2em] uppercase px-[60px] py-[20px] [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))] hover:bg-yellow-600 transition-all hover:scale-105 active:scale-95">
              Book a Consultation Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}