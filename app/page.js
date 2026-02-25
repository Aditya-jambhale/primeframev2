'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { PlayCircle } from 'lucide-react'
import ServicesSection from '@/components/homeservice'
import ProcessSection from '@/components/process'
import TestimonialSection from '@/components/testimonials'
import WhyVideography from '@/components/whyvideo'
import AgencyPillars from '@/components/aboutagency/page'
// ── Animation variants ──
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

// ── Data ──
const whyPoints = [
  { n: '01', title: 'Attention Is Shorter Than Ever', body: 'Your audience scrolls in seconds. Professional videography stops the scroll and signals authority before a single word is spoken.' },
  { n: '02', title: 'Trust Is Built Visually', body: 'Low-quality production subconsciously signals inexperience. Cinematic visuals signal structure, reliability, and premium positioning.' },
  { n: '03', title: 'Premium Visuals Attract Premium Clients', body: 'High-end videography tells your audience you operate at a higher standard — and premium clients are drawn to premium presentation.' },
  { n: '04', title: 'Editing Determines Performance', body: 'Retention-focused editing improves watch time and increases conversions. Good visuals impress — strategic editing performs.' },
  { n: '05', title: 'Video Works Across Every Platform', body: 'Website, Instagram, LinkedIn, YouTube, paid ads. One strong video becomes multiple strategic assets for growth.' },
]



const logos = [
  '/companies/Arise.png',
  '/companies/Fulcrum.png',
  '/companies/Hammad.png',
  '/companies/microsoft.png',
  '/companies/byjus.png',
  '/companies/balance.png',

  '/companies/edwise.png',
  '/companies/flind.png',
  '/companies/kundlas.png',
  '/companies/sarvam.svg',
  '/companies/jc.png',
]

const stats = [
  { val: '200+', label: 'Projects Delivered' },
  { val: '8+', label: 'Years Experience' },
  { val: '3', label: 'Countries Active' },
  { val: '50+', label: 'Brand Clients' },
]

const equipmentList = [
  {
    title: 'Sony FX3',
    desc: 'Full-frame cinema camera with 4K 120fps capability and S-Cinetone colour science.',
  },
  {
    title: 'Sony A7 IV',
    desc: 'Hybrid mirrorless system for high-resolution stills and cinematic video.',
  },
  {
    title: 'Sony A7 III',
    desc: 'Reliable full-frame performance for commercial and event productions.',
  },
  {
    title: '20mm Prime Lens',
    desc: 'Ultra-wide perspective ideal for immersive cinematic compositions.',
  },
  {
    title: '24mm Prime Lens',
    desc: 'Versatile focal length for dynamic storytelling and interior coverage.',
  },
  {
    title: '50mm Prime Lens',
    desc: 'Natural perspective with beautiful depth and subject separation.',
  },
]

export default function Home() {
  return (
    <div className="bg-black text-slate-300 overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.9))' }}
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6 max-w-7xl mx-auto"
        >

          {/* Headline — tighter, more refined */}
          <h1 className="font-bebas text-[clamp(3rem,8vw,6rem)] leading-[0.92] tracking-[0.05em] text-white mb-2">
            PRIME<span className="text-yellow-500">FRAME</span>
          </h1>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-3.5 mb-6"
          >
            <span className="font-inter text-[12px] font-bold tracking-[0.22em] uppercase text-white">Production Company available in Dubai · India · Global</span>
          </motion.div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/services">
              <button className="px-7 uppercase tracking-wider py-3 bg-white text-black font-semibold text-xs transition-transform hover:scale-105">
                Explore Our Work
              </button>
            </Link>

          </div>
        </motion.div>

      </section>


      {/* ══════════════════════════════════════════
          CLIENT LOGOS
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-black  relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[100px] bg-yellow-500/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 mb-12">
          <div className="flex flex-col items-center">
            <span className="font-barlow-condensed text-[0.72rem] font-bold tracking-[0.25em] uppercase text-yellow-500 mb-4">Trusted By Builders</span>
            <h2 className="font-bebas text-3xl md:text-4xl text-white tracking-[0.06em]">
              BRANDS UNDER OUR ROOF
            </h2>
            <div className="w-12 h-0.5 bg-yellow-500 mt-4 opacity-50" />
          </div>
        </div>

        <div className="relative group">
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
              className="flex items-center gap-16 md:gap-24 whitespace-nowrap px-12"
            >
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-center transition-all duration-500"
                >
                  <div className="h-12 md:h-12 w-auto relative">
                    <img
                      src={logo}
                      alt={`Client ${i}`}
                      className="h-full w-auto object-contain max-w-[140px]"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-16 lg:gap-15 items-start">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="sticky "
            >
              <span className="font-barlow-condensed text-sm font-semibold tracking-[0.22em] uppercase text-yellow-500 block mb-4">
                About the Studio
              </span>
              <h2 className="font-bebas text-5xl md:text-5xl leading-[0.95] tracking-[0.05em] text-white mb-4">
                BUILT AROUND <span className="text-yellow-500">STORY,</span> EXECUTION AND DETAIL.
              </h2>
              <div className="w-6 h-px bg-yellow-500 mb-10" />
              <p className="font-barlow font-light text-[1.05rem] text-textMuted leading-[1.8] tracking-wide mb-10">
                PrimeFrame Productions was built on a simple belief — <span className=" font-semibold">Every frame must serve a purpose.</span>

                We don’t create content for attention. We create visuals that drive meaning, memory, and measurable impact.

                From concept to post-production, every detail is engineered with clarity, discipline, and cinematic precision.

                As we expand from India to Dubai, our philosophy remains unchanged

              </p>

              <Link href="/about">
                <button className="font-bebas text-[0.8rem] tracking-[0.2em] text-white border border-yellow-500 px-8 py-3 hover:bg-yellow-500 hover:text-black transition-all duration-300 uppercase [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]">
                  Our Journey →
                </button>
              </Link>
            </motion.div>

            {/* Right Pillars - 3 Column Grid */}
            <div className="relative">
              <div className="absolute -top-30 -right-20 w-64 h-64 bg-yellow-500/5 blur-[100px] pointer-events-none" />
              <AgencyPillars />

              {/* Added Tagline below the grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 flex items-center justify-end gap-6 group"
              >
                <div className="w-1 h-7 bg-yellow-500  transition-all duration-300 group-hover:h-9" />
                <p className="font-barlow-condensed text-[0.95rem] md:text-[1.1rem] tracking-[0.1em] text-white/50 uppercase text-right leading-tight">
                  Craft work that cuts through noise — <br className="md:hidden" />
                  <span className="text-yellow-500 font-medium">and elevates brands with intention.</span>
                </p>

              </motion.div>
            </div>


          </div>

        </div>
      </section>

      <WhyVideography />

      <ServicesSection />


      <section className="py-32 bg-black relative overflow-hidden">
        {/* Section Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg/equipment.jpg"
            alt="Equipment Background"
            fill
            className="object-cover  saturate-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-black/40" />

        </div>

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

          {/* ── Left: Image Composition ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
              <Image
                src="/equip/equipmentsmain.jpeg"
                alt="PrimeFrame Equipment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            {/* Floating Secondary Frame */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-28 md:w-40 aspect-square overflow-hidden rounded-md border border-yellow-500/30 shadow-2xl z-10">
              <Image
                src="/equip/equipmentsmain.jpeg"
                alt="Gear Detail"
                fill
                className="object-cover"
              />
            </div>

            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-yellow" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-yellow" />
          </motion.div>

          {/* ── Right: Content ── */}
          <div>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-barlow-condensed text-[0.72rem] font-bold tracking-[0.22em] uppercase text-yellow-500 block mb-6"
            >
              Our Equipment
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-bebas text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[0.95] tracking-[0.04em] text-white mb-8"
            >
              CINEMA-GRADE<br />
              <span className="text-yellow-500">TOOLS.</span><br />
              PROFESSIONAL OUTPUT.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-barlow font-light text-[0.9rem] text-textMuted leading-[1.85] mb-12 max-w-[480px]"
            >
              We operate with full-frame cinema cameras and professional prime lenses,
              ensuring colour accuracy, dynamic range, and cinematic depth in every production.
            </motion.p>

            {/* Equipment List */}
            <div className="space-y-6">
              {equipmentList.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.25 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  viewport={{ once: true }}
                  className="border-b border-white/5 pb-4 group"
                >
                  <h3 className="font-bebas text-lg tracking-[0.05em] text-white mb-2 group-hover:text-yellow-500 transition-colors">
                    {item.title.toUpperCase()}
                  </h3>
                  <p className="font-barlow font-light text-[0.8rem] text-textMuted leading-[1.8]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════ */}

      <ProcessSection />

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <TestimonialSection />

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/5 h-full pointer-events-none"
          style={{ background: 'linear-gradient(135deg, transparent, rgba(234,179,8,0.07))' }} />
        <motion.div {...fadeUp} viewport={{ once: true }} whileInView="animate" initial="initial"
          className="max-w-[720px] mx-auto px-6 text-center relative z-10">
          <span className="font-barlow-condensed text-[0.72rem] font-bold tracking-[0.22em] uppercase text-yellow-500 block mb-5">Start a Project</span>
          <h2 className="font-bebas text-[clamp(2rem,8vw,6.5rem)] tracking-[0.04em] text-white leading-[0.9] mb-5">
            READY TO<br />CREATE SOMETHING<br /><span className="text-yellow-500">WORTH WATCHING?</span>
          </h2>
          <p className="font-barlow font-light text-[0.95rem] text-textMuted leading-[1.85] max-w-[440px] mx-auto mb-10">
            Whether building a brand in Dubai or growing across India — let's produce visuals that represent your ambition.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact">
              <button className="bg-yellow-500 text-white font-barlow-condensed text-[0.82rem] font-bold tracking-[0.18em] uppercase px-[36px] py-[14px] border-none cursor-pointer transition-all duration-250 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-yellow-600 hover:-translate-y-0.5">
                Book a Consultation
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-transparent text-white font-barlow-condensed text-[0.82rem] font-bold tracking-[0.18em] uppercase px-[36px] py-[13px] border border-yellow/50 cursor-pointer transition-all duration-250 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:border-yellow hover:text-yellow-500 hover:bg-yellow-500/5">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT FORM
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-black">
        <div className="max-w-[780px] mx-auto px-6">
          <motion.div {...fadeUp} viewport={{ once: true }} whileInView="animate" initial="initial" className="mb-12">
            <span className="font-barlow-condensed text-[0.72rem] font-bold tracking-[0.22em] uppercase text-yellow-500 block mb-4">Get In Touch</span>
            <h2 className="font-bebas text-[clamp(2rem,5vw,3.8rem)] tracking-[0.04em] text-white leading-[0.95] mb-3">
              LET'S START A<br /><span className="text-yellow-500">CONVERSATION</span>
            </h2>
            <p className="font-barlow font-light text-[0.875rem] text-textMuted">
              Tell us about your project and we'll respond within 24 hours.
            </p>
          </motion.div>

          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 form-grid">
              {[
                { label: 'Full Name', type: 'text', placeholder: 'Your name' },
                { label: 'Email', type: 'email', placeholder: 'your@email.com' },
                { label: 'Phone', type: 'tel', placeholder: '+971 00 000 0000' },
                { label: 'Project Type', type: 'text', placeholder: 'e.g. Corporate Film' },
              ].map(({ label, type, placeholder }) => (
                <div key={label}>
                  <label className="font-barlow-condensed text-[0.62rem] tracking-[0.18em] uppercase text-yellow-500/70 block mb-2.5 font-bold">
                    {label}
                  </label>
                  <input type={type} placeholder={placeholder} className="bg-pf-card border border-white/10 text-slate-200 p-4 font-barlow text-sm w-full outline-none transition-all focus:border-yellow" />
                </div>
              ))}
            </div>

            <div>
              <label className="font-barlow-condensed text-[0.62rem] tracking-[0.18em] uppercase text-yellow-500/70 block mb-2.5 font-bold">
                Project Details
              </label>
              <textarea
                placeholder="Tell us about your project, timeline, and any references..."
                rows={5} className="bg-pf-card border border-white/10 text-slate-200 p-4 font-barlow text-sm w-full outline-none transition-all focus:border-yellow resize-y"
              />
            </div>

            <button type="submit" className="bg-yellow-500 text-white font-barlow-condensed text-[0.82rem] font-bold tracking-[0.18em] uppercase px-[36px] py-[16px] border-none cursor-pointer transition-all duration-250 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-yellow-600 hover:-translate-y-0.5 w-full">
              Send Message
            </button>
          </form>

          {/* Quick contact buttons */}
          <div className="grid grid-cols-2 gap-3 mt-5 contact-btns">
            <a href="https://wa.me/971XXXXXXXXX" target="_blank" rel="noopener noreferrer"
              className="no-underline block text-center py-4 font-barlow-condensed text-[0.68rem] tracking-[0.18em] uppercase font-bold transition-all duration-300
                         text-green-400 border border-green-400/25 bg-green-400/10
                         hover:bg-green-400/18 hover:border-green-400/50">
              WhatsApp Us
            </a>
            <a href="tel:+971XXXXXXXXX"
              className="no-underline block text-center py-4 font-barlow-condensed text-[0.68rem] tracking-[0.18em] uppercase font-bold transition-all duration-300
                         text-yellow-500 border border-yellow/30 bg-yellow-500/10
                         hover:bg-yellow-500/20">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}