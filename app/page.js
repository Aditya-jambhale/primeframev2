'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { PlayCircle } from 'lucide-react'
import ServicesSection from '@/components/homeservice'
import ProcessSection from '@/components/process'
import TestimonialSection from '@/components/testimonials'
import WhyVideography from '@/components/whyvideo'
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



const logos = ['/clients/client1.jpeg', '/clients/client2.png', '/clients/client3.jpeg', '/clients/client4.jpeg', '/clients/client5.jpeg']

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
    <div className="bg-[var(--navy)] text-[var(--off-white)] overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1597421568622-6ce6c2713887?w=1920"
            alt="Cinematic production"
            fill priority
            className="object-cover"
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(7,11,22,0.55), rgba(7,11,22,0.9))' }}
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-3.5 mb-6"
          >
            <span className="w-8 h-px bg-orange-500" />
            <span className="eyebrow">Dubai · India · Global</span>
            <span className="w-8 h-px bg-orange-500" />
          </motion.div>

          {/* Headline — tighter, more refined */}
          <h1 className="font-bebas text-[clamp(3rem,8vw,6rem)] leading-[0.92] tracking-[0.05em] text-white mb-5"
            style={{ textShadow: '0 4px 40px rgba(0,0,0,0.6)' }}>
            PRIME<span className="text-orange-500">FRAME</span><br />PRODUCTIONS
          </h1>

          {/* Subheadline */}
          <p className="font-barlow font-normal text-[clamp(0.95rem,1.8vw,1.15rem)] text-slate-300 leading-relaxed max-w-2xl mx-auto mb-2.5">
            Strategic visual production for brands that demand precision, clarity, and measurable impact.
          </p>
          <p className="font-barlow font-light text-sm text-slate-400 mb-10">
            Working across India, UAE, and the United States.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/work"><button className="btn-primary">Explore Our Work</button></Link>
            <Link href="/contact"><button className="btn-outline">Book Consultation</button></Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="font-barlow-condensed text-[0.6rem] tracking-[0.22em] uppercase text-orange-500/60">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-px h-10"
            style={{ background: 'linear-gradient(to bottom, #F97316, transparent)' }}
          />
        </div> */}
      </section>

      {/* ══════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════ */}
      {/* <section className="bg-orange-500">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 stats-bar">
          {stats.map((s, i) => (
            <div key={i}
              className={`py-6 px-8 text-center ${i < 3 ? 'border-r border-white/20' : ''}`}
            >
              <p className="font-bebas text-4xl leading-none text-white tracking-[0.04em]">{s.val}</p>
              <p className="font-barlow-condensed text-[0.65rem] tracking-[0.18em] uppercase text-white/75 mt-1.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* ══════════════════════════════════════════
          CLIENT LOGOS
      ══════════════════════════════════════════ */}
      <section className="py-16 bg-[var(--navy-mid)] border-b border-white/5 overflow-hidden">
        <div className="text-center mb-10">
          <span className="eyebrow block mb-2">Trusted By</span>
          <h2 className="font-bebas text-[clamp(1.6rem,3.5vw,2.5rem)] tracking-[0.06em] text-white">
            BRANDS UNDER OUR ROOF
          </h2>
        </div>
        <div className="relative">
          <div className="animate-marquee flex gap-20 items-center">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="min-w-[120px] flex items-center justify-center">
                <Image src={logo} alt={`Client ${i}`} width={110} height={36}
                  className="object-contain opacity-35 grayscale brightness-200 transition-all duration-400
                             hover:opacity-90 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
        ABOUT
*/}
      <section className="py-32 bg-[var(--navy)]">
        <div className="max-w-[850px] mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >

            {/* Eyebrow */}
            <span className="eyebrow block mb-6">
              About the Studio
            </span>

            {/* Headline */}
            <h2 className="font-bebas text-[clamp(2.4rem,4vw,3.6rem)] leading-[1] tracking-[0.05em] text-white mb-10">
              BUILT AROUND <span className="text-orange-500">STORY,</span><br />
              EXECUTION AND DETAIL.
            </h2>

            {/* Accent Divider */}
            <div className="w-12 h-px bg-orange-500 mx-auto mb-10" />

            {/* Body Copy */}
            <div className="space-y-6 max-w-[620px] mx-auto">

              <p className="font-barlow font-light text-[0.95rem] text-[var(--muted)] leading-[1.9]">
                PrimeFrame Productions was built on a simple belief —
                <span className="text-white font-medium"> every frame should serve a purpose.</span>
                We combine cinematic production with performance strategy,
                handling every step from planning to post-production with clarity and precision.
              </p>

              <p className="font-barlow font-light text-[0.92rem] text-[var(--muted)] leading-[1.9]">
                As we expand from India to Dubai and beyond, our mission remains unchanged:
                deliver visuals that elevate brands above the noise.
              </p>

            </div>

            {/* CTA */}
            <div className="mt-12">
              <Link href="/about">
                <button className="btn-outline">
                  Our Journey →
                </button>
              </Link>
            </div>

          </motion.div>

        </div>
      </section>
      {/* ══════════════════════════════════════════
    WHY VIDEOGRAPHY
══════════════════════════════════════════ */}
      <WhyVideography />
      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <ServicesSection />

      {/* ══════════════════════════════════════════
          EQUIPMENT
      ══════════════════════════════════════════ */}

      <section className="py-32 bg-[var(--navy-mid)] relative overflow-hidden">

        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
          style={{ background: 'linear-gradient(135deg, transparent, rgba(249,115,22,0.06))' }} />

        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

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
            <div className="absolute -bottom-10 -right-10 w-40 aspect-square overflow-hidden rounded-md border border-orange-500/30 shadow-xl">
              <Image
                src="/equip/equipmentsmain.jpeg"
                alt="Gear Detail"
                fill
                className="object-cover"
              />
            </div>

            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-orange-500" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-orange-500" />
          </motion.div>

          {/* ── Right: Content ── */}
          <div>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="eyebrow block mb-6"
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
              <span className="text-orange-500">TOOLS.</span><br />
              PROFESSIONAL OUTPUT.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-barlow font-light text-[0.9rem] text-[var(--muted)] leading-[1.85] mb-12 max-w-[480px]"
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
                  <h3 className="font-bebas text-lg tracking-[0.05em] text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {item.title.toUpperCase()}
                  </h3>
                  <p className="font-barlow font-light text-[0.8rem] text-[var(--muted)] leading-[1.8]">
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
      <section className="py-24 bg-[var(--navy)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/5 h-full pointer-events-none"
          style={{ background: 'linear-gradient(135deg, transparent, rgba(249,115,22,0.07))' }} />
        <motion.div {...fadeUp} viewport={{ once: true }} whileInView="animate" initial="initial"
          className="max-w-[720px] mx-auto px-6 text-center relative z-10">
          <span className="eyebrow block mb-5">Start a Project</span>
          <h2 className="font-bebas text-[clamp(3rem,8vw,6.5rem)] tracking-[0.04em] text-white leading-[0.9] mb-5">
            READY TO<br />CREATE SOMETHING<br /><span className="text-orange-500">WORTH WATCHING?</span>
          </h2>
          <p className="font-barlow font-light text-[0.95rem] text-[var(--muted)] leading-[1.85] max-w-[440px] mx-auto mb-10">
            Whether building a brand in Dubai or growing across India — let's produce visuals that represent your ambition.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact"><button className="btn-primary">Book a Consultation</button></Link>
            <Link href="/contact"><button className="btn-outline">Contact Us</button></Link>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT FORM
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[var(--navy-mid)]">
        <div className="max-w-[780px] mx-auto px-6">
          <motion.div {...fadeUp} viewport={{ once: true }} whileInView="animate" initial="initial" className="mb-12">
            <span className="eyebrow block mb-4">Get In Touch</span>
            <h2 className="font-bebas text-[clamp(2rem,5vw,3.8rem)] tracking-[0.04em] text-white leading-[0.95] mb-3">
              LET'S START A<br /><span className="text-orange-500">CONVERSATION</span>
            </h2>
            <p className="font-barlow font-light text-[0.875rem] text-[var(--muted)]">
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
                  <label className="font-barlow-condensed text-[0.62rem] tracking-[0.18em] uppercase text-orange-500/70 block mb-2.5 font-bold">
                    {label}
                  </label>
                  <input type={type} placeholder={placeholder} className="input-dark" />
                </div>
              ))}
            </div>

            <div>
              <label className="font-barlow-condensed text-[0.62rem] tracking-[0.18em] uppercase text-orange-500/70 block mb-2.5 font-bold">
                Project Details
              </label>
              <textarea
                placeholder="Tell us about your project, timeline, and any references..."
                rows={5} className="input-dark font-barlow resize-y"
              />
            </div>

            <button type="submit" className="btn-primary w-full" style={{ padding: '16px 32px', fontSize: '0.82rem' }}>
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
                         text-orange-500 border border-orange-500/30 bg-orange-500/10
                         hover:bg-orange-500/20">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}