'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Play } from 'lucide-react'

// ─── Reusable scroll reveal ───────────────────────────────────────────────────
function Reveal({ children, delay = 0, x = 0, y = 32, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

// ─── Services data ────────────────────────────────────────────────────────────
const services = [
  // ── Corporate & Brand Production
  {
    id: 'trade-show',
    category: 'Corporate & Brand Production',
    title: 'Exhibitions, Conference & Trade Show Filming',
    overview: 'Large-scale events require structured coverage. We deliver cinematic multi-camera production, professional audio capture, and strategic event storytelling that captures both scale and impact.',
    image: 'https://images.pexels.com/photos/8355407/pexels-photo-8355407.jpeg?auto=compress&cs=tinysrgb&w=1200',
    deliverables: ['Multi-camera coverage', 'Stage + audience capture', 'Speaker highlights', 'On-ground interviews', 'Same-day edits (if required)', 'Post-event promotional cuts'],
    process: 'Planning → Setup → Live Capture → Structured Edit → Final Delivery',
  },
  {
    id: 'corporate-films',
    category: 'Corporate & Brand Production',
    title: 'Corporate Films That Build Authority',
    overview: 'Corporate films define how your brand is perceived. We craft structured narratives that communicate vision, credibility, and long-term positioning.',
    image: 'https://images.pexels.com/photos/6883811/pexels-photo-6883811.jpeg?auto=compress&cs=tinysrgb&w=1200',
    deliverables: ['Company profile films', 'Brand vision videos', 'Leadership messages', 'Internal communication films'],
    whyItMatters: 'Professional visuals increase brand trust and investor confidence.',
  },
  {
    id: 'brand-videos',
    category: 'Corporate & Brand Production',
    title: 'Promotional Brand Videos',
    overview: 'Strategic promotional videos designed to elevate brand perception, launch campaigns, and drive audience engagement across digital platforms.',
    image: 'https://images.unsplash.com/photo-1567443024551-f3e3a7b9e8b9?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Product promotions', 'Campaign launches', 'Social ad creatives', 'Commercial productions'],
  },
  {
    id: 'executive-interviews',
    category: 'Corporate & Brand Production',
    title: 'Executive Interviews',
    overview: 'Cinematic executive interviews that reflect leadership confidence and brand authority.',
    image: 'https://images.pexels.com/photos/4793163/pexels-photo-4793163.jpeg?auto=compress&cs=tinysrgb&w=1200',
    deliverables: ['CEO interviews', 'Founder stories', 'Thought leadership videos', 'Investor communications'],
  },
  {
    id: 'real-estate',
    category: 'Corporate & Brand Production',
    title: 'Real Estate Videography',
    overview: 'High-end real estate visuals crafted to attract serious buyers and elevate property positioning.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Property walkthroughs', 'Aerial drone coverage', 'Interior cinematic shots', 'Agent feature segments'],
  },
  {
    id: 'trailers',
    category: 'Corporate & Brand Production',
    title: 'Teaser / Trailer Videos',
    overview: 'Short-form cinematic trailers designed to create anticipation and audience excitement.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Launch teasers', 'Event previews', 'Product reveal trailers'],
  },
  {
    id: 'bts',
    category: 'Corporate & Brand Production',
    title: 'Behind The Scenes Videos',
    overview: 'Authentic behind-the-scenes storytelling that builds transparency and brand connection.',
    image: 'https://images.unsplash.com/photo-1627736619924-ce6c159dedca?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Shoot coverage', 'Production highlights', 'Social media BTS edits'],
  },

  // ── Events & Celebrations
  {
    id: 'event-filming',
    category: 'Events & Celebrations',
    title: 'Event Filming',
    overview: 'Full-scale event production for corporate, political, and business gatherings.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200',
    deliverables: ['Multi-camera coverage', 'Stage + audience capture', 'Highlight films', 'Social cutdowns'],
  },
  {
    id: 'wedding',
    category: 'Events & Celebrations',
    title: 'Wedding Videography',
    overview: 'Cinematic wedding films crafted with emotional storytelling and elegance.',
    image: 'https://images.pexels.com/photos/29860958/pexels-photo-29860958.jpeg?auto=compress&cs=tinysrgb&w=1200',
    deliverables: ['Full wedding film', 'Highlight trailer', 'Couple interviews'],
  },
  {
    id: 'save-the-date',
    category: 'Events & Celebrations',
    title: 'Save The Date',
    overview: 'Creative cinematic invitations designed for digital sharing.',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200',
    deliverables: ['Pre-wedding shoots', 'Short invitation film', 'Social-ready format'],
  },
  // {
  //   id: 'graduation',
  //   category: 'Events & Celebrations',
  //   title: 'Graduation Videos',
  //   overview: 'Professional academic milestone coverage.',
  //   image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
  //   deliverables: ['Ceremony coverage', 'Graduate interviews', 'Highlight reels'],
  // },
  // {
  //   id: 'live-av',
  //   category: 'Events & Celebrations',
  //   title: 'Event AV Setup with Live Feed',
  //   overview: 'Complete AV solutions with real-time broadcasting and technical management.',
  //   image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
  //   deliverables: ['LED screen setup', 'Live streaming', 'Audio management'],
  // },

  // ── Digital & Creative Media
  {
    id: 'reels',
    category: 'Digital & Creative Media',
    title: 'Social Media Reels',
    overview: 'Scroll-optimized short-form vertical content built for engagement and reach.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Reels production', 'YouTube Shorts', 'Ad creatives'],
  },
  {
    id: '2d-animation',
    category: 'Digital & Creative Media',
    title: '2D Animation Videos',
    overview: 'Custom 2D explainer and corporate messaging animations.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Explainer videos', 'Corporate animations', 'Campaign graphics'],
  },
  {
    id: '3d-animation',
    category: 'Digital & Creative Media',
    title: '3D Animation Videos',
    overview: 'High-end 3D visual production for immersive storytelling.',
    image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['3D product visualization', 'Architectural renders', 'Brand storytelling'],
  },
  {
    id: 'aerial',
    category: 'Digital & Creative Media',
    title: 'Aerial / Drone Cinematography',
    overview: 'Professional aerial cinematography for real estate, events, and landscape productions.',
    image: 'https://images.unsplash.com/photo-1547619292-e9ffd95a4de7?auto=format&fit=crop&w=1200&q=80',
    deliverables: ['Drone cinematography', 'Aerial real estate shots', 'Landscape coverage', 'Event aerial views'],
  },
  // {
  //   id: 'vr',
  //   category: 'Digital & Creative Media',
  //   title: '360° / VR Videos',
  //   overview: 'Immersive digital experiences designed for interactive engagement.',
  //   image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
  //   deliverables: ['360° video production', 'Virtual tours', 'Interactive experiences'],
  // },
]

const categoryMeta = {
  'Corporate & Brand Production': {
    eyebrow: 'Professional Storytelling',
    description: 'Structured cinematic production that builds credibility and positions your brand at its highest standard.',
  },
  'Events & Celebrations': {
    eyebrow: 'Full-Scale Coverage',
    description: 'From intimate celebrations to large gatherings — captured with precision and emotional depth.',
  },
  'Digital & Creative Media': {
    eyebrow: 'Platform-Ready Content',
    description: 'Digital-first content designed to perform across social, broadcast, and immersive platforms.',
  },
}

export default function Services() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [])

  const grouped = services.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = []
    acc[s.category].push(s)
    return acc
  }, {})

  return (
    <div className="bg-[var(--navy)] text-[var(--off-white)] font-barlow">

      {/* ════════════════════════════════════
          HERO — video atmosphere
      ════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image with deep overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1800&q=80"
            alt="Cinematography background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
          {/* Extra navy tint for readability */}
          <div className="absolute inset-0 bg-[var(--navy)]/60" />
        </div>

        {/* Faint watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10">
          <span
            className="font-bebas tracking-[0.15em] text-[clamp(4rem,16vw,16rem)]"
            style={{ color: 'rgba(255,255,255,0.02)' }}
          >
            PRIMEFRAME
          </span>
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">What We Produce</span>
            <h1 className="font-bebas text-[clamp(3rem,7vw,7rem)] text-[var(--white)] leading-[0.93] tracking-[0.03em] mt-3 mb-6">
              Cinematic Production Services<br />
              <span className="text-[var(--orange)]">Built for Modern Brands</span>
            </h1>
            <div className="w-12 h-0.5 mx-auto mb-8" style={{ background: 'linear-gradient(90deg,transparent,var(--orange),transparent)' }} />
            <p className="text-[var(--off-white)] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              From corporate storytelling to large-scale event coverage and immersive digital media —
              we produce visuals designed to perform across every platform.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
             <Link href="/contact">
              <button className="btn-primary">Book a Consultation</button>
             </Link>
              {/* <button className="btn-outline flex items-center gap-2">
                <Play size={14} className="fill-current" />
                View Showreel
              </button> */}
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="eyebrow" style={{ fontSize: '0.65rem' }}>Scroll to explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-[var(--orange)] to-transparent" />
        </motion.div> */}
      </section>

      {/* ════════════════════════════════════
          CATEGORY SECTIONS
      ════════════════════════════════════ */}
      {Object.entries(grouped).map(([category, catServices], catIdx) => {
        const meta = categoryMeta[category]
        return (
          <div key={category}>

            {/* ── Category header ── */}
            <section className="py-16 px-4 bg-[var(--navy-mid)] relative overflow-hidden border-y border-[var(--border)]">
              {/* Faint number */}
              <div
                className="absolute right-8 top-1/2 -translate-y-1/2 font-bebas pointer-events-none select-none"
                style={{ fontSize: '8rem', color: 'rgba(249,115,22,0.05)', letterSpacing: '0.1em' }}
              >
                0{catIdx + 1}
              </div>
              <div className="container mx-auto relative z-10">
                <Reveal>
                  <span className="eyebrow">{meta.eyebrow}</span>
                  <h2 className="font-bebas text-[clamp(2rem,4vw,4rem)] text-[var(--white)] tracking-[0.04em] leading-[0.95] mt-1 mb-3">
                    {category}
                  </h2>
                  <p className="text-[var(--muted)] max-w-xl text-sm leading-relaxed">{meta.description}</p>
                </Reveal>
              </div>
            </section>

            {/* ── Service rows ── */}
            {catServices.map((service, idx) => {
              const flip = idx % 2 === 1
              return (
                <section
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-20 py-24 px-4 bg-[var(--navy)] border-b border-[var(--border)]"
                >
                  <div className="container mx-auto">
                    <div className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center`}>

                      {/* Image */}
                      <Reveal x={flip ? 30 : -30} className={flip ? 'md:order-2' : ''}>
                        <div className="relative group">
                          {/* Glow behind image */}
                          <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ background: 'radial-gradient(ellipse at center, var(--orange-dim) 0%, transparent 70%)' }}
                          />

                          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[var(--border-accent)]">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/70 via-transparent to-transparent" />

                            {/* Play icon overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="icon-wrap w-14 h-14">
                                <Play size={18} className="fill-[var(--orange)] text-[var(--orange)] ml-0.5" />
                              </div>
                            </div>

                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[var(--orange)] rounded-tl-2xl" />
                            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[var(--orange)] rounded-br-2xl" />
                          </div>
                        </div>
                      </Reveal>

                      {/* Content */}
                      <Reveal x={flip ? -30 : 30} delay={0.1} className={flip ? 'md:order-1' : ''}>
                        <span className="eyebrow">{category}</span>

                        <h3 className="font-bebas text-[clamp(2rem,3.5vw,3.5rem)] text-[var(--white)] tracking-[0.03em] leading-[0.95] mt-2 mb-4">
                          {service.title}
                        </h3>

                        {/* Orange underline */}
                        <div className="w-10 h-0.5 mb-5" style={{ background: 'linear-gradient(90deg,var(--orange),transparent)' }} />

                        <p className="text-[var(--off-white)] leading-[1.78] mb-6 text-base">
                          {service.overview}
                        </p>

                        {/* whyItMatters callout */}
                        {service.whyItMatters && (
                          <div className="mb-6 pl-4 py-3 border-l-2 border-[var(--orange)] bg-[var(--navy-mid)] rounded-r-lg">
                            <p className="text-[var(--off-white)] italic text-sm leading-relaxed">{service.whyItMatters}</p>
                          </div>
                        )}

                        {/* Deliverables */}
                        <div className="mb-8">
                          <h4 className="font-barlow-condensed text-xs font-bold tracking-[0.18em] uppercase text-[var(--orange)] mb-4">
                            What We Deliver
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.deliverables.map((item, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <CheckCircle
                                  size={15}
                                  className="mt-0.5 flex-shrink-0"
                                  style={{ color: 'var(--orange)' }}
                                />
                                <span className="text-[var(--off-white)] text-sm leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Process pill */}
                        {service.process && (
                          <div className="mb-8 px-4 py-3 rounded-lg border border-[var(--border-accent)] bg-[var(--navy-card)]">
                            <span className="eyebrow block mb-1" style={{ fontSize: '0.6rem' }}>Our Process</span>
                            <p className="text-[var(--muted)] text-xs leading-relaxed">{service.process}</p>
                          </div>
                        )}

                     <Link href="/contact">
                        <button className="btn-primary flex items-center gap-2 group">
                          Discuss This Project
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                     </Link>
                      </Reveal>
                    </div>
                  </div>
                </section>
              )
            })}
          </div>
        )
      })}

      {/* ════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════ */}
      <section className="py-28 px-4 bg-[var(--navy-mid)] relative overflow-hidden">
        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--orange-dim) 0%, transparent 70%)' }}
        />
        <Reveal>
          <div className="container mx-auto max-w-3xl text-center relative z-10">
            <span className="eyebrow">Work With Us</span>
            <h2 className="font-bebas text-[clamp(2.5rem,5vw,5rem)] text-[var(--white)] tracking-[0.04em] leading-[0.93] mt-2 mb-3">
              Ready to Produce<br />
              <span className="text-[var(--orange)]">Something Exceptional?</span>
            </h2>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: 'linear-gradient(90deg,transparent,var(--orange),transparent)' }} />
            <p className="text-[var(--muted)] max-w-xl mx-auto leading-relaxed mb-10">
              Whether you need corporate storytelling, event coverage, or immersive digital media —
              let's create visuals that represent your brand at its highest standard.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary">Book Consultation</button>
              <Link href="/contact">
                <button className="btn-outline">Contact Us</button>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}