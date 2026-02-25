'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { PlayCircle, ArrowRight, Smartphone, MessageSquare } from 'lucide-react'
import dynamic from 'next/dynamic'

const ServicesSection = dynamic(() => import('@/components/homeservice'), { ssr: false })
const ProcessSection = dynamic(() => import('@/components/process'), { ssr: false })
const TestimonialSection = dynamic(() => import('@/components/testimonials'), { ssr: false })
const WhyVideography = dynamic(() => import('@/components/whyvideo'), { ssr: false })
const AgencyPillars = dynamic(() => import('@/components/aboutagency/page'), { ssr: false })

// ── Animation variants ──
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

// ── Data ──
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

const equipmentList = [
  {
    title: 'Sony FX3',
    desc: 'Full-frame cinema camera with 4K 120fps capability and S-Cinetone colour science.',
    image: '/equip/sonyfx3.png'
  },
  {
    title: 'Sony A7 IV',
    desc: 'Hybrid mirrorless system for high-resolution stills and cinematic video.',
    image: '/equip/sonyaz.png'
  },
  {
    title: 'Sony A7 III',
    desc: 'Reliable full-frame performance for commercial and event productions.',
    image: '/equip/sonya73.png'
  },
  {
    title: '20mm Prime Lens',
    desc: 'Ultra-wide perspective ideal for immersive cinematic compositions.',
    image: '/equip/20mmrb.png'
  },
  {
    title: '24mm Prime Lens',
    desc: 'Versatile focal length for dynamic storytelling and interior coverage.',
    image: '/equip/24mmrb.png'
  },
  {
    title: '50mm Prime Lens',
    desc: 'Natural perspective with beautiful depth and subject separation.',
    image: '/equip/50mmrb.png'
  },
]

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', projectType: '', details: '' })
  const [status, setStatus] = useState({ loading: false, success: false, error: null })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: null })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus({ loading: false, success: true, error: null })
        setFormData({ name: '', email: '', phone: '', projectType: '', details: '' })
      } else {
        const error = await res.json()
        throw new Error(error.message || 'Something went wrong')
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message })
    }
  }

  return (
    <div className="bg-black text-slate-300 overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          {/* Mobile Background Image - Shown only on small screens */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src="/hero/hero-mobile.jpg"
              alt="PrimeFrame Hero"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Video Background - Hidden on mobile, shown on md+ */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero/hero-poster.jpg"
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
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
          <h1 className="font-bebas text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.88] tracking-[0.05em] text-white mb-2">
            PRIME<span className="text-yellow-500">FRAME</span>
          </h1>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-3.5 mb-8"
          >
            <span className="font-barlow-condensed text-[13px] font-bold tracking-[0.25em] uppercase text-white/90">Production Company · Dubai · India · Global</span>
          </motion.div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/services">
              <button className="px-8 uppercase tracking-[0.2em] py-4 bg-yellow-500 text-white font-bold text-[0.7rem] transition-all hover:bg-yellow-600 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] shadow-2xl hover:-translate-y-0.5">
                Explore Our Work
              </button>
            </Link>
          </div>
        </motion.div>
      </section>


      {/* ══════════════════════════════════════════
          CLIENT LOGOS
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-black relative overflow-hidden border-b border-white/5">
        {/* Cinematic Watermark Text - Refined Scale & Visibility */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <motion.h2
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 0.08, scale: 1 }}
            transition={{ duration: 2 }}
            className="font-syne text-[12vw] font-black text-white/90 uppercase tracking-[-0.05em] leading-none text-center"
            style={{
              WebkitTextStroke: "1px rgba(250, 250, 250, 0.98)",
              textShadow: "0 0 40px rgba(250, 250, 250, 0.89)"
            }}
          >
            THE JOURNEY
          </motion.h2>
        </div>


        <div className="container mx-auto px-6 mb-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-outfit text-[0.7rem] font-bold tracking-[0.4em] uppercase text-yellow-500/80 mb-4 block">
              GLOBAL PARTNERS
            </span>
            <h2 className="font-syne text-3xl md:text-5xl text-white tracking-tight leading-none mb-4">
              BRANDS UNDER <span className="text-yellow-500">OUR ROOF</span>
            </h2>
            <div className="w-12 h-px bg-yellow-500/30 mx-auto" />
          </motion.div>
        </div>

        <div className="relative z-10">
          {/* Edge Masking */}
          {/* <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black via-black/60 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black via-black/60 to-transparent z-20 pointer-events-none" /> */}

          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
              className="flex items-center gap-16 md:gap-32 whitespace-nowrap px-12"
            >
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-center group"
                >
                  <div className="relative h-24 md:h-32 w-48 md:w-64 transition-all duration-500 scale-90 group-hover:scale-110 opacity-90 group-hover:opacity-100">
                    <Image
                      src={logo}
                      alt={`Client Logo ${i}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 128px, 192px"
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

      <motion.section
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-32 bg-black relative overflow-hidden rounded-[2.5rem] md:rounded-[4.5rem] mx-4 md:mx-8"
      >
        {/* Section Background Image with a slight scale effect */}
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0 opacity-40"
        >
          <Image
            src="/equip/equipmentsmain.jpeg"
            alt="Equipment Background"
            fill
            className="object-cover saturate-0 brightness-110"
          />
          <div className="absolute inset-0" />
        </motion.div>

        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-outfit text-[0.8rem] font-bold tracking-[0.4em] uppercase text-yellow-500 block mb-6 px-6 py-2 border border-yellow-500/20 rounded-full w-fit mx-auto bg-black/40 backdrop-blur-md"
            >
              Our Arsenal
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="font-syne text-[clamp(2rem,5vw,4rem)] leading-[0.9] tracking-tight text-white mb-8"
            >
              CINEMA-GRADE <span className="text-yellow-500 italic">TOOLS.</span><br />
              PROFESSIONAL OUTPUT.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-outfit font-light text-[1.1rem] text-white/70 leading-relaxed max-w-2xl mx-auto"
            >
              We operate with high-performance cinema systems and professional optics,
              ensuring every frame delivers uncompromising quality and cinematic depth.
            </motion.p>
          </div>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {equipmentList.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 * i + 0.4,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true }}
                className="group relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 p-10 rounded-[2rem] hover:border-yellow-500/40 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
              >
                {/* Image Wrap */}
                <div className="relative h-64 w-full mb-10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-yellow-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-1000 ease-out"
                    />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="font-syne text-[1.8rem] font-bold tracking-tight text-white mb-4 group-hover:text-yellow-500 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="font-outfit font-light text-[1rem] text-white/40 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle Number Accent */}
                {/* <div className="absolute top-8 right-8 text-white/[0.02] font-syne text-8xl font-black select-none pointer-events-none group-hover:text-yellow-500/10 transition-colors duration-700">
                  0{i + 1}
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <ProcessSection />

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
      <section className="py-32 bg-black relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

        <div className="max-w-[840px] mx-auto px-6">
          <motion.div {...fadeUp} viewport={{ once: true }} whileInView="animate" initial="initial" className="mb-16 text-center">
            <span className="font-barlow-condensed text-[0.8rem] font-bold tracking-[0.3em] uppercase text-yellow-500 block mb-6">Connect with Us</span>
            <h2 className="font-bebas text-[clamp(2.5rem,6vw,4.5rem)] tracking-[0.05em] text-white leading-[0.9] mb-6">
              LET'S FUEL YOUR<br /><span className="text-yellow-500">NEXT VISION</span>
            </h2>
            <p className="font-barlow font-light text-[1rem] text-textMuted max-w-lg mx-auto leading-relaxed">
              Drop us a line about your production requirements. Our directors will review and get back within 24 business hours.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="bg-pf-card/30 border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {[
                { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe' },
                { label: 'Work Email', name: 'email', type: 'email', placeholder: 'john@company.com' },
                { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+971 50 000 0000' },
                { label: 'Project Type', name: 'projectType', type: 'text', placeholder: 'e.g. Brand Film, Social Campaign' },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name}>
                  <label className="font-barlow-condensed text-[0.7rem] tracking-[0.2em] uppercase text-yellow-500 font-bold block mb-3">
                    {label}
                  </label>
                  <input
                    required
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                    placeholder={placeholder}
                    className="bg-white/5 border border-white/10 text-white p-5 rounded-xl font-barlow text-[0.9rem] w-full outline-none transition-all focus:border-yellow-500 focus:bg-white/10"
                  />
                </div>
              ))}
            </div>

            <div className="mb-10">
              <label className="font-barlow-condensed text-[0.7rem] tracking-[0.2em] uppercase text-yellow-500 font-bold block mb-3">
                Brief Overview
              </label>
              <textarea
                required
                name="details"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Tell us about your objectives, timeline, and any creative references..."
                rows={5}
                className="bg-white/5 border border-white/10 text-white p-5 rounded-xl font-barlow text-[0.9rem] w-full outline-none transition-all focus:border-yellow-500 focus:bg-white/10 resize-none"
              />
            </div>

            <button
              disabled={status.loading}
              type="submit"
              className="group relative w-full overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 transition-transform group-hover:scale-105" />
              <div className="relative font-barlow-condensed text-[0.9rem] font-bold tracking-[0.25em] uppercase text-white py-5 flex items-center justify-center gap-3">
                {status.loading ? 'Transmitting...' : 'Initiate Briefing'}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {status.success && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 font-barlow text-center mt-6 text-sm">
                Briefing received. Our team will contact you shortly.
              </motion.p>
            )}
            {status.error && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 font-barlow text-center mt-6 text-sm">
                {status.error}
              </motion.p>
            )}
          </form>

          {/* Direct Contact CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <motion.a
              whileHover={{ y: -4 }}
              href="https://wa.me/971XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 py-6 rounded-2xl bg-green-500/5 border border-green-500/20 group hover:border-green-500/40 transition-all shadow-[0_0_30px_rgba(34,197,94,0.05)]"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                <Smartphone size={20} />
              </div>
              <div className="text-left">
                <span className="block font-barlow-condensed text-[0.6rem] tracking-[0.25em] uppercase text-green-500/60 font-bold mb-0.5">Instant Chat</span>
                <span className="block font-bebas text-xl tracking-wider text-white">WHATSAPP US</span>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ y: -4 }}
              href="tel:+971XXXXXXXXX"
              className="flex items-center justify-center gap-4 py-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/20 group hover:border-yellow-500/40 transition-all shadow-[0_0_30px_rgba(234,179,8,0.05)]"
            >
              <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                <MessageSquare size={20} />
              </div>
              <div className="text-left">
                <span className="block font-barlow-condensed text-[0.6rem] tracking-[0.25em] uppercase text-yellow-500/60 font-bold mb-0.5">Speak with a Director</span>
                <span className="block font-bebas text-xl tracking-wider text-white">CALL US NOW</span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
}