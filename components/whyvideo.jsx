'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const whyPoints = [
  {
    n: '01',
    stat: '80%',
    label: 'Higher Conversion',
    title: 'Video Converts Better Than Any Other Format',
    body: 'Landing pages with video convert up to 80% more than those without. Viewers retain 95% of a message from video vs. 10% from text — the numbers make the case.',
  },
  {
    n: '02',
    stat: '3×',
    label: 'More Engagement',
    title: 'Algorithms Reward Video Above Everything',
    body: 'Every major platform — Instagram, LinkedIn, YouTube, Google — actively amplifies video content. Brands that invest in video get 3x more organic reach.',
  },
  {
    n: '03',
    stat: '90%',
    label: 'Trust Uplift',
    title: 'Trust Is Built in the First 8 Seconds',
    body: '90% of customers say video directly influences purchasing decisions. A well-crafted brand film signals credibility before a single word is read.',
  },
  {
    n: '04',
    stat: '∞',
    label: 'Compound Value',
    title: 'A Single Film Works Across Every Channel',
    body: 'One production — cut into ads, reels, testimonials, and more. Video is the highest-ROI asset a brand can create.',
  },
]

export default function WhyVideography() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const videoY = useTransform(scrollYProgress, [0, 1], ['-2%', '2%'])

  return (
    <section ref={containerRef} className="relative bg-black overflow-hidden py-32">

      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg/equipment.jpg"
          alt="Background"
          fill
          className="object-cover  saturate-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
       
      </div>

      {/* ───────────── TOP STRIP ───────────── */}
      <div className="absolute top-0 left-0 right-0 border-y border-white/[0.05] overflow-hidden py-3 bg-white/[0.02] z-10">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {[...Array(2)].map((_, ri) => (
            <span key={ri} className="flex items-center">
              {['80% higher conversion', '3× organic reach', 'Trust built in 8 seconds', 'Highest ROI asset', 'Cinematic Precision', 'Brand Storytelling'].map((t, ti) => (
                <span key={ti} className="inline-flex items-center gap-4 px-12">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" />
                  <span className="font-barlow-condensed text-[0.75rem] font-medium tracking-[0.2em] uppercase text-white/40">{t}</span>
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">

        {/* ───────────── HEADER ───────────── */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="font-barlow-condensed text-sm font-semibold tracking-[0.3em] uppercase text-yellow-500 block mb-4">The Impact of Video</span>
            <h2 className="font-bebas text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.9] tracking-[0.04em] text-white">
              WHY BRANDS INVEST<br />
              IN <span className="text-yellow-500">DIGITAL VIDEO</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mt-8" />
          </motion.div>
        </div>

        {/* ───────────── MAIN GRID ───────────── */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-12">
            {whyPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="flex gap-8">
                  {/* Stat Card */}
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-pf-card border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-yellow group-hover:bg-yellow-500/5 shadow-2xl">
                      <span className="font-bebas text-3xl text-yellow-500">
                        {item.stat}
                      </span>
                    </div>
                    <span className="block mt-3 font-barlow-condensed text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white/40 text-center">
                      {item.label}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="pt-2">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-bebas text-sm tracking-widest text-yellow-500/40">{item.n}</span>
                      <div className="h-px w-8 bg-yellow-500/20" />
                    </div>

                    <h3 className="font-bebas text-xl lg:text-2xl tracking-wide text-white mb-4 group-hover:text-yellow-500 transition-colors duration-300">
                      {item.title.toUpperCase()}
                    </h3>

                    <p className="font-barlow font-light text-[0.95rem] text-textMuted leading-[1.7] max-w-[520px] transition-colors duration-300 group-hover:text-slate-200">
                      {item.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-10"
            >
              <button className="bg-yellow-500 text-white font-barlow-condensed text-[0.9rem] font-bold tracking-[0.2em] uppercase px-[48px] py-[18px] border-none cursor-pointer transition-all duration-250 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))] hover:bg-yellow-600 hover:-translate-y-1 shadow-xl">
                Scale Your Brand With Video
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Video Mute Loop */}
          <div className="relative lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)]"
            >
              {/* Loop Video */}
              <motion.div style={{ y: videoY }} className="absolute inset-[-5%]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/hero/hero-poster.jpg"
                  className="w-full h-full object-cover grayscale-[0.3] brightness-[0.8]"
                >
                  <source src="/hero/hero-bg.mp4" type="video/mp4" />
                </video>
              </motion.div>

              {/* Overlays */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" /> */}
              {/* <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" /> */}

              {/* Content on Video */}
              <div className="absolute bottom-10 left-10 right-10 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-12 h-1 bg-yellow-500" />
                  <p className="font-bebas text-2xl lg:text-3xl tracking-wider text-white leading-[1.1]">
                    VIDEO IS A <span className="text-yellow-500">COMPOUNDING</span><br />
                    BRAND ASSET.
                  </p>
                  <p className="font-barlow-condensed text-xs font-bold tracking-[0.2em] uppercase text-white/50">
                    Cinema-grade production for modern brands
                  </p>
                </motion.div>
              </div>

              {/* Subtle Ambient Light */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[100px] -z-10" />
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  )
}