'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

/* ─────────────────────────────────────────
   Step Data
───────────────────────────────────────── */
const steps = [
  {
    n: '01',
    title: 'Discovery & Briefing',
    desc: 'We understand your brand\'s mission, goals, target audience, and visual tone to define a clear creative direction.',
    img: '/process/discovery.png',
  },
  {
    n: '02',
    title: 'Script & Concept',
    desc: 'Our writers craft a compelling story and structured script tailored to your message and audience.',
    img: '/process/script.png',
  },
  {
    n: '03',
    title: 'Pre-Production',
    desc: 'We handle location scouting, casting, production design, and scheduling for a smooth shoot day.',
    img: '/process/preprod.png',
  },
  {
    n: '04',
    title: 'Production',
    desc: 'Our crew brings the vision to life using industry-grade cameras and professional on-set direction.',
    img: '/process/prod.jpg',
  },
  {
    n: '05',
    title: 'Post-Production',
    desc: 'Editing, colour grading, sound design and motion graphics refined for maximum engagement.',
    img: '/process/postprod.png',
  },
  {
    n: '06',
    title: 'Delivery & Deploy',
    desc: 'Final formats optimised for web, social, and broadcast — with publishing support if needed.',
    img: '/process/delivery.png',
  },
]

/* ─────────────────────────────────────────
   Main Component
───────────────────────────────────────── */
export default function ProcessSection() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-outfit text-[0.72rem] font-bold tracking-[0.22em] uppercase text-yellow-500 block mb-4">How We Work</span>
          <h2 className="font-montserrat font-black text-[clamp(2.4rem,6vw,4.5rem)] tracking-tight text-white leading-[0.95] uppercase">
            OUR <span className="text-yellow-500">PRODUCTION</span><br />PROCESS
          </h2>
        </motion.div>

        {/* ── Steps Grid ── */}
        <div className="relative">

          {/* Horizontal connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-[80px] left-0 right-0 h-px bg-white/[0.08] z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -6 }}
                className="relative group flex flex-col transition-all duration-500"
              >

                {/* ── Image card ── */}
                <div className="relative overflow-hidden rounded-xl mb-5"
                  style={{ aspectRatio: '4/3' }}>

                  {/* Image */}
                  <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-110">
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16vw"
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* pf-yellow left accent bar — animated glow */}
                  <motion.div
                    className="absolute top-0 left-0 w-[3px] h-full bg-yellow-500"
                    whileHover={{
                      boxShadow: '0 0 15px rgba(234,179,8,0.6)'
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Ghost step number */}
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 0.18, y: 0 }}
                    transition={{ delay: i * 0.12 + 0.3 }}
                    className="absolute bottom-1 left-3 font-montserrat font-black text-[4rem] sm:text-[3.5rem] leading-none text-white select-none uppercase"
                  >
                    {step.n}
                  </motion.span>


                  {/* Timeline connector */}
                  <div className="hidden xl:flex absolute -bottom-[2.6rem] left-1/2 -translate-x-1/2 flex-col items-center gap-1 z-10">
                    <motion.div
                      className="w-px h-5 bg-white/20"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.6, delay: i * 0.12 }}
                      style={{ originY: 0 }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-yellow-500 ring-4 ring-yellow/20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: i * 0.12 + 0.2 }}
                    />
                  </div>
                </div>

                {/* ── Text ── */}
                <div className="xl:pt-8 transition-all duration-300 group-hover:translate-y-1">

                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-montserrat font-black text-yellow-500 text-sm tracking-widest uppercase">
                      {step.n}
                    </span>
                    <motion.div
                      className="flex-1 h-px bg-yellow-500/25"
                      whileHover={{ scaleX: 1.1 }}
                      transition={{ duration: 0.4 }}
                      style={{ originX: 0 }}
                    />
                  </div>

                  <h3 className="font-montserrat font-bold text-[1.25rem] tracking-wide text-white mb-2 uppercase leading-tight transition-colors duration-300 group-hover:text-yellow-500">
                    {step.title}
                  </h3>

                  <p className="font-outfit font-light text-[1rem] text-textMuted leading-[1.75] transition-colors duration-300 group-hover:text-white/70">
                    {step.desc}
                  </p>
                </div>


              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}