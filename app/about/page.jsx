'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

// ─── Reusable scroll reveal ───────────────────────────────────────────────────
function Reveal({ children, delay = 0, y = 28, x = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

// ─── Timeline data ────────────────────────────────────────────────────────────
const timeline = [
  {
    year: '2019',
    title: 'The Beginning',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
    body: [
      'During college, in the middle of uncertainty and lockdowns, Yusuf began exploring ways to earn independently.',
      'Without clarity on placements or traditional career paths, he turned to research — learning about freelancing platforms and digital opportunities.',
      'The first attempts were not successful. But the curiosity remained.',
    ],
  },
  {
    year: '2020',
    title: 'Discovering Podcast Editing',
    img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop&q=80',
    body: [
      'At a time when podcasts were just beginning to grow, Yusuf noticed a trend — long-form conversations were gaining attention.',
      'Instead of waiting for opportunity, he learned the craft himself. Through YouTube tutorials and constant experimentation, he built his foundation.',
      'For nearly two years, he focused on mastering one thing: structured, engaging podcast editing.',
    ],
  },
  {
    year: '2021',
    title: 'The First Clients',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    body: [
      'The first breakthrough came through online communities. A small opportunity turned into consistent work.',
      'One project became weekly collaborations. Weekly collaborations became long-term relationships.',
      'Consistency replaced uncertainty.',
    ],
  },
  {
    year: '2022',
    title: 'Expanding Through Platforms',
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop&q=80',
    body: [
      'With growing confidence, Yusuf expanded to platforms like Upwork and Fiverr.',
      'Clients from different countries began trusting his process.',
      'What started as freelance work slowly became a professional discipline.',
    ],
  },
  {
    year: '2024',
    title: 'Transition into Videography',
    img: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=800&auto=format&fit=crop&q=80',
    body: [
      'Editing built technical strength. But videography sparked something deeper.',
      'A documentary shoot marked a turning point — handling camera, composition, lighting, and storytelling on ground shifted perspective.',
      'It was no longer just post-production. It was full-scale production.',
    ],
  },
  {
    year: '2024',
    title: 'Real-World Shoots & Expansion',
    img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop&q=80',
    body: [
      'From documentary shoots to client productions across cities, the transition became permanent.',
      'The passion for visual storytelling met structured execution.',
      'Videography was no longer experimentation. It was direction.',
    ],
  },
  {
    year: '2025',
    title: 'Building PrimeFrame Productions',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80',
    body: [
      'As client work expanded, so did responsibility. Instead of remaining a solo freelancer, Yusuf began building a team.',
      'Developers. Designers. Editors. Management support.',
      'Today, PrimeFrame operates as a structured production house — combining editing expertise with cinematic production.',
    ],
  },
]

// ─── Team data ────────────────────────────────────────────────────────────────
const team = [
  { name: 'Yusuf', role: 'Founder & Creative Director', note: 'Podcast editing → Full production', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80' },
  { name: 'Arjun', role: 'Lead Videographer', note: 'Documentary & brand films', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80' },
  { name: 'Sana', role: 'Motion Designer', note: 'Post-production & VFX', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80' },
  { name: 'Dev', role: 'Project Manager', note: 'Workflow & client relations', img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&auto=format&fit=crop&q=80' },
  { name: 'Priya', role: 'Content Strategist', note: 'Narrative & brand voice', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80' },
  { name: 'Rahul', role: 'Audio Engineer', note: 'Sound design & podcast mastering', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80' },
]

// ─── Timeline Card ────────────────────────────────────────────────────────────
function TimelineCard({ item, side }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: side === 'left' ? -48 : 48 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="about-timeline-card group rounded-2xl overflow-hidden border border-[var(--border)]
                 bg-[var(--navy-card)] shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                 transition-colors duration-300 hover:border-[var(--border-accent)]"
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/7' }}>
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/20 to-transparent" />
        {/* Faint year stamp */}
        <div
          className="about-year-stamp absolute bottom-0 right-3 font-bebas leading-none select-none pointer-events-none"
          data-year={item.year}
        >
          {item.year}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 md:p-7">
        <span className="inline-block mb-3 px-2.5 py-0.5 rounded font-barlow-condensed
                         text-[0.68rem] font-bold tracking-[0.16em] uppercase
                         text-[var(--orange)] border border-[var(--border-accent)] bg-[var(--orange-dim)]">
          {item.year}
        </span>
        <h3 className="font-bebas text-[1.6rem] text-[var(--white)] tracking-[0.04em] leading-none mb-3">
          {item.title}
        </h3>
        <div className="flex flex-col gap-2">
          {item.body.map((p, i) => (
            <p
              key={i}
              className={`text-sm leading-relaxed ${i === 0 ? 'text-[var(--off-white)]' : 'text-[var(--muted)]'}`}
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Hover bottom sweep — handled via CSS in global.css (.about-timeline-card) */}
      <div className="about-card-sweep h-0.5 bg-[var(--orange)]" />
    </motion.div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function About() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const bgY      = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <div className="bg-[var(--navy)] text-[var(--off-white)] font-barlow overflow-x-hidden">

      {/* ════════════════════════════════════
          HERO — full-bleed founder bg
      ════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden ">

        {/* Parallax background */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 scale-110">
          <Image
            src="https://images.unsplash.com/photo-1615702669705-0d3002c6801c?w=1800&auto=format&fit=crop&q=80"
            alt="Yusuf — Founder of PrimeFrame"
            fill
            className="object-cover object-top"
            priority
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-10 hero-gradient" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[var(--navy)]/85 via-[var(--navy)]/50 to-transparent" />
        <div className="absolute inset-0 z-10 bg-[var(--navy)]/25" />

        {/* Faint watermark */}
        <div className="about-watermark absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none">
          <span className="font-bebas tracking-[0.15em] text-[clamp(4rem,14vw,14rem)]">
            PRIMEFRAME
          </span>
        </div>

        {/* Content */}
        <motion.div style={{ y: contentY }} className="relative z-20 w-full">
          <div className="container mx-auto px-6 pb-24 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="eyebrow">About PrimeFrame</span>

              <h1 className="font-bebas text-[clamp(2.6rem,5.5vw,5.5rem)] text-[var(--white)]
                             leading-[0.93] tracking-[0.03em] mt-2 mb-5 max-w-2xl">
                From Freelancing<br />
                <span className="text-[var(--orange)]">to Building</span> a<br />
                Production House
              </h1>

              <div
                className="w-12 h-0.5 mb-6"
                style={{ background: 'linear-gradient(90deg, var(--orange), transparent)' }}
              />

              <p className="text-[var(--off-white)] text-base leading-[1.78] max-w-lg mb-8">
                What began as curiosity during college turned into a structured journey of skill,
                discipline, and storytelling. PrimeFrame is not the result of overnight success —
                it is the result of years spent learning, adapting, and executing consistently.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                {[['50+', 'Global Clients'], ['200+', 'Projects Delivered'], ['4', 'Countries Served']].map(([val, lbl]) => (
                  <div
                    key={lbl}
                    className="bg-[var(--navy-card)] border border-[var(--border-accent)] rounded-xl px-5 py-3.5"
                  >
                    <div className="font-bebas text-3xl text-[var(--orange)] leading-none">{val}</div>
                    <div className="font-barlow-condensed text-[0.65rem] font-bold tracking-[0.14em] uppercase text-[var(--muted)] mt-0.5">
                      {lbl}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--navy)] to-transparent pointer-events-none z-20" />
      </section>

      {/* ════════════════════════════════════
          JOURNEY TIMELINE
      ════════════════════════════════════ */}
      <section className="bg-[var(--navy)] py-28 relative overflow-hidden">
        {/* Decorative camera SVG */}
        <svg
          className="absolute top-16 right-0 w-72 pointer-events-none"
          style={{ opacity: 0.025 }}
          viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="40" width="180" height="110" rx="12" stroke="white" strokeWidth="4" />
          <circle cx="100" cy="95" r="34" stroke="white" strokeWidth="4" />
          <circle cx="100" cy="95" r="17" stroke="white" strokeWidth="3" />
          <rect x="70" y="20" width="60" height="28" rx="6" stroke="white" strokeWidth="3" />
          <circle cx="162" cy="56" r="8" stroke="white" strokeWidth="3" />
        </svg>

        <div className="container mx-auto px-6 max-w-6xl">
          <Reveal className="text-center mb-20">
            <span className="eyebrow">The Journey</span>
            <h2 className="font-bebas text-[clamp(2rem,4vw,3.8rem)] text-[var(--white)]
                           tracking-[0.04em] leading-[0.95] mt-1">
              A Story of Consistent Growth
            </h2>
            <div
              className="w-12 h-0.5 mx-auto my-5"
              style={{ background: 'linear-gradient(90deg,transparent,var(--orange),transparent)' }}
            />
            <p className="text-[var(--muted)] text-sm max-w-xs mx-auto leading-relaxed">
              Every milestone was earned. Every phase was deliberate.
            </p>
          </Reveal>

          {/* Desktop zig-zag */}
          <div className="hidden md:block">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={i} className="grid grid-cols-[1fr_52px_1fr] items-start mb-12 last:mb-0">
                  <div className="pr-7">
                    {isLeft ? <TimelineCard item={item} side="left" /> : <div />}
                  </div>

                  {/* Spine */}
                  <div className="flex flex-col items-center pt-6">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.1 }}
                      className="w-3.5 h-3.5 rounded-full flex-shrink-0 z-10"
                      style={{
                        background: 'var(--orange)',
                        boxShadow: '0 0 0 5px var(--orange-dim), 0 0 18px rgba(249,115,22,0.28)',
                      }}
                    />
                    {i < timeline.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.25 }}
                        className="w-px flex-1 mt-1 origin-top"
                        style={{
                          minHeight: 80,
                          background: 'linear-gradient(var(--border-accent), transparent)',
                        }}
                      />
                    )}
                  </div>

                  <div className="pl-7">
                    {!isLeft ? <TimelineCard item={item} side="right" /> : <div />}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-8 border-l border-[var(--border-accent)]">
                <div
                  className="absolute -left-[7px] top-6 w-3.5 h-3.5 rounded-full"
                  style={{ background: 'var(--orange)', boxShadow: '0 0 0 4px var(--orange-dim)' }}
                />
                <TimelineCard item={item} side="left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          VISION
      ════════════════════════════════════ */}
      <section className="bg-[var(--navy-mid)] py-28 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--orange-dim) 0%, transparent 70%)' }}
        />
        <div
          className="about-vision-watermark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     font-bebas tracking-[0.15em] pointer-events-none select-none whitespace-nowrap
                     text-[clamp(4rem,14vw,13rem)]"
        >
          VISION
        </div>

        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <Reveal>
            <span className="eyebrow">The Vision</span>
            <h2 className="font-bebas text-[clamp(2rem,4vw,3.8rem)] text-[var(--white)]
                           tracking-[0.04em] leading-[0.95] mt-1">
              The Vision Behind <span className="text-[var(--orange)]">PrimeFrame</span>
            </h2>
            <div
              className="w-12 h-0.5 mx-auto my-5"
              style={{ background: 'linear-gradient(90deg,transparent,var(--orange),transparent)' }}
            />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {[
              { icon: '🎬', title: 'Global Standard', body: 'Build a production agency that competes globally while staying grounded in storytelling and execution.' },
              { icon: '⚙️', title: 'Precision First', body: 'Combine editing precision with cinematic production. Every frame serves purpose — not just aesthetics.' },
              { icon: '🏗️', title: 'Built on Structure', body: 'PrimeFrame is built on structure, consistency, and creative clarity — not hype, not shortcuts.' },
            ].map((v, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="about-vision-card group relative rounded-xl p-7 text-left border border-[var(--border)]
                             bg-[var(--navy-card)] overflow-hidden transition-colors duration-300
                             hover:border-[var(--border-accent)]"
                >
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="font-bebas text-xl text-[var(--white)] tracking-[0.05em] mb-2">{v.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{v.body}</p>
                  <div className="about-card-sweep absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--orange)]" />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          TEAM
      ════════════════════════════════════ */}
      <section className="bg-[var(--navy)] py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <Reveal className="mb-12">
            <span className="eyebrow">The People</span>
            <h2 className="font-bebas text-[clamp(2rem,4vw,3.8rem)] text-[var(--white)]
                           tracking-[0.04em] leading-[0.95] mt-1 mb-3">
              Meet the Team
            </h2>
            <div className="w-10 h-0.5 mb-4" style={{ background: 'linear-gradient(90deg,var(--orange),transparent)' }} />
            <p className="text-[var(--muted)] text-sm max-w-md leading-relaxed">
              Every great production is a collective. PrimeFrame is built by individuals who care deeply about their craft.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <Reveal key={i} delay={0.07 * i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="about-team-card group rounded-2xl overflow-hidden border border-[var(--border)]
                             bg-[var(--navy-card)] transition-colors duration-300
                             hover:border-[var(--border-accent)]"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-card)] via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bebas text-xl text-[var(--white)] tracking-[0.05em] leading-none mb-1">
                      {member.name}
                    </h3>
                    <p className="font-barlow-condensed text-[0.7rem] font-bold tracking-[0.11em] uppercase text-[var(--orange)] mb-1.5">
                      {member.role}
                    </p>
                    <p className="text-[var(--muted)] text-xs leading-relaxed">{member.note}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          FOUNDER QUOTE
      ════════════════════════════════════ */}
      <section className="bg-[var(--navy-mid)] py-28 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--orange-dim) 0%, transparent 70%)' }}
        />
        <Reveal>
          <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
            <div className="font-serif text-[5rem] leading-none mb-[-1.25rem] text-[var(--orange)] opacity-20">"</div>
            <blockquote className="font-bebas text-[clamp(1.5rem,2.8vw,2.4rem)] text-[var(--white)]
                                   tracking-[0.03em] leading-[1.2] mb-8">
              Every camera I picked up, every project I delivered — it was never about the equipment.
              It was always about the story.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[var(--border-accent)] flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Yusuf"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-[var(--white)] font-semibold text-sm">Yusuf</div>
                <div className="font-barlow-condensed text-[0.66rem] font-bold tracking-[0.12em] uppercase text-[var(--muted)]">
                  Founder, PrimeFrame Productions
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ════════════════════════════════════
          CTA
      ════════════════════════════════════ */}
      <section className="bg-[var(--navy)] py-24 text-center">
        <Reveal>
          <div className="container mx-auto px-6 max-w-lg">
            <span className="eyebrow">Work With Us</span>
            <h2 className="font-bebas text-[clamp(1.8rem,3.5vw,3.2rem)] text-[var(--white)]
                           tracking-[0.04em] leading-[0.93] mt-1 mb-4">
              Ready to Tell Your Story?
            </h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-8">
              If your brand deserves production that is deliberate and cinematic, let's build it together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary">Get In Touch</button>
              <button className="btn-outline">View Our Work</button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}