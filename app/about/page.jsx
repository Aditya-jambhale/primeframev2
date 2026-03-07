'use client'

import { useRef, useEffect, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

// ─── Data ─────────────────────────────────────────────────────────────────────
const timeline = [
  {
    year: "2019",
    title: "The Beginning",
    img: ["/begg/beg1.jpeg", "/begg/beg3.jpeg"],
    body: "This didn’t start in a studio. It started in a college room. During lockdown, while everything felt uncertain, I wasn’t waiting for clarity — I was searching for direction. Placements were unclear and traditional paths didn’t feel aligned, so instead of waiting I started learning. Freelancing platforms, editing tools, and digital skills became my focus. Most early attempts failed, but failure didn’t stop the curiosity — it sharpened it."
  },
  {
    year: "2020",
    title: "Discovering Podcast Editing",
    img: ["/podcast/pod1.png", "/podcast/pod2.png", "/podcast/pod3.png"],
    body: "I didn’t chase trends, I studied them. Long-form conversations were quietly rising and podcasts weren’t mainstream yet, but they were powerful. Instead of outsourcing the skill, I decided to master it myself. YouTube tutorials at 2AM, re-editing the same clip five times, learning pacing, silence and emotional rhythm. For nearly two years, I focused on one thing — structured, high-retention podcast editing."
  },
  {
    year: "2021",
    title: "The First Clients",
    img: ["/client/fclient1.jpg", "/client/fclient2.jpeg"],
    body: "The first order changes everything. A small opportunity from an online community turned into weekly collaboration, and those collaborations became long-term client relationships. Deadlines were met, quality was delivered, and trust was earned. Slowly, uncertainty started turning into consistency."
  },
  {
    year: "2022",
    title: "Expanding Through Platforms",
    img: ["/expand/exp1.jpeg", "/expand/exp4.png", "/expand/exp5.jpeg"],
    body: "This is where things started scaling. From my first order on Fiverr, momentum kept building. Today I have completed 437 podcast editing orders with consistent 5-star feedback, eventually earning the Top Rated badge on Fiverr. One podcast I edited and structured moved from Top 10 to Top 1 globally in its category. Podcast editing was no longer freelance work — it became production-level execution."
  },
  {
    year: "2024",
    title: "Transition into Videography",
    img: ["/trans/trans1.jpeg", "/trans/trans6.jpeg", "/trans/trans7.jpg"],
    body: "Editing taught me control, but videography taught me vision. The first documentary shoot changed everything. Handling the camera, framing emotion, and designing light meant storytelling began before post-production. It wasn’t just about cutting footage anymore — it became about creating the story from the moment the camera started recording."
  },
  {
    year: "2025",
    title: "Building Skylume Productions",
    img: ["/build/build3.png", "/build/build1.jpg", "/build/build8.png"],
    body: "At some point freelancing stops being enough. As client work expanded, responsibility grew as well. Instead of remaining a solo editor, I started building a structured team including developers, designers, editors and management support. Skylume Productions stopped being an experiment and evolved into a full production house combining podcast mastery with cinematic execution."
  }
];

const team = [
  {
    name: "Yusuf",
    role: "Founder & Creative Director",
    img: "/team/yusuf.png",
    note: "Leading vision, strategy and international productions."
  },
  {
    name: "Ankit ",
    role: "Lead Post-Production Specialist",
    img: "/team/ankit.png",
    note: "Delivering refined cinematic edits and advanced VFX integration."
  },
  {
    name: "Rajan",
    role: "Lead Cinematographer",
    img: "/team/rajan.jpg",
    note: "Crafting cinematic visuals with precision and storytelling depth."
  },
  {
    name: "Abhimanyu",
    role: "Motion Graphics & VFX Artist",
    img: "/team/abhi.jpeg",
    note: "Designing dynamic visuals and motion systems for modern storytelling."
  },
  {
    name: "Saima",
    role: "Project & Client Manager",
    img: "/team/saima.jpg",
    note: "Managing production workflows and ensuring seamless client experience."
  },
  {
    name: "Anu",
    role: "Creative Designer",
    img: "/team/anu.jpg",
    note: "Shaping brand aesthetics and visual systems for modern productions"
  }
]


// ─── Animation Helper ────────────────────────────────────────────────────────
function Reveal({ children, className = "", delay = 0 }) {
  return (
    <ScrollReveal
      animation="fade-up"
      delay={delay}
      className={className}
    >
      {children}
    </ScrollReveal>
  )
}

// FilmGrain removed (now global via CSS)

// ─── Progress Line ────────────────────────────────────────────────────────────
function TimelineProgressLine({ progress }) {
  const height = useTransform(progress, [0, 1], ['0%', '100%'])
  return (
    <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5">
      <motion.div
        className="w-full bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 origin-top"
        style={{ height }}
      />
    </div>
  )
}

// ─── Timeline Dot ─────────────────────────────────────────────────────────────
function TimelineDot({ isActive, onClick, year }) {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center justify-center w-8 h-8 pointer-events-auto cursor-pointer"
    >
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="ring"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.8, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
            className="absolute w-3 h-3 rounded-full bg-yellow-400"
          />
        )}
      </AnimatePresence>
      <motion.div
        animate={{
          scale: isActive ? 1.5 : 0.8,
          backgroundColor: isActive ? '#facc15' : 'rgba(255,255,255,0.15)',
          boxShadow: isActive ? '0 0 20px rgba(250,204,21,0.6)' : '0 0 0px transparent',
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-3 h-3 rounded-full border border-black/50 z-10"
      />

      {/* Label Tooltip */}
      <span
        className={`absolute left-10 font-inter font-bold text-[0.65rem] tracking-[0.2em] transition-all duration-300 whitespace-nowrap
          ${isActive ? 'text-yellow-400 opacity-100 translate-x-0' : 'text-white/20 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}
        `}
      >
        {year}
      </span>
    </button>
  )
}

// ─── Section Image with Horizontal Scroll Loop ───────────────────────────────
function CinematicImageLoop({ images = [], alt, inView }) {
  const [scratchPos, setScratchPos] = useState(0)
  const [currentIdx, setCurrentIdx] = useState(0)

  useEffect(() => {
    setScratchPos(35 + Math.random() * 30)
  }, [])

  useEffect(() => {
    if (!inView || images.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIdx(prev => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [inView, images.length])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full overflow-hidden rounded-sm group shadow-2xl shadow-black/50"
      style={{ aspectRatio: '16/9' }}
    >
      {/* Sliding Track */}
      <motion.div
        animate={{ x: `-${currentIdx * 100}%` }}
        transition={{ duration: 1.4, ease: [0.32, 0.72, 0, 1] }}
        className="flex h-full w-full"
      >
        {images.map((src, i) => (
          <div key={i} className="relative h-full w-full shrink-0 overflow-hidden">
            <motion.div
              animate={inView && currentIdx === i ? { scale: [1.05, 1.15] } : { scale: 1.05 }}
              transition={{ duration: 8, ease: "linear" }}
              className="absolute inset-0"
            >
              <Image
                src={src}
                alt={`${alt} frame ${i}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 55vw"
                priority={i === 0}
              />
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Progress indicators for loop */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-6 z-30 flex gap-2">
          {images.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: i === currentIdx ? 24 : 8,
                backgroundColor: i === currentIdx ? 'rgba(250,204,21,1)' : 'rgba(255,255,255,0.2)'
              }}
              className="h-[2px] rounded-full transition-colors duration-500"
            />
          ))}
        </div>
      )}

      {/* Vignette & Overlays */}
      {/* <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 z-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" /> */}

      {/* Film scratch line */}
      {scratchPos > 0 && inView && (
        <motion.div
          animate={{ opacity: [0, 0.1, 0, 0.05, 0] }}
          transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2, times: [0, 0.2, 0.4, 0.7, 1] }}
          className="absolute top-0 bottom-0 w-px bg-white z-30 pointer-events-none"
          style={{ left: `${scratchPos}%` }}
        />
      )}
    </motion.div>
  )
}

// ─── Single Timeline Section ───────────────────────────────────────────────────
function TimelineSection({
  item,
  index,
  onActiveChange,
}) {
  const ref = useRef(null)

  // Use scroll progress for awareness of scroll direction and position
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const inView = useInView(ref, {
    margin: '-45% 0px -45% 0px',
    amount: 'some'
  })

  // Dynamic transforms based on scroll (aware of up vs down)
  // When scrolling down, things move from bottom to center. 
  // When scrolling up, things move from top to center.
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0])

  // Parallax for bg year text
  const yearY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])
  const yearOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.08, 0.08, 0])

  useEffect(() => {
    onActiveChange(index, inView)
  }, [inView, index, onActiveChange])

  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      id={`section-${item.year}`}
      className="relative min-h-[60vh] lg:min-h-[75vh] flex items-center py-10 lg:py-16 overflow-hidden"
    >
      {/* Watermark year */}
      <motion.div
        style={{ y: yearY, opacity: yearOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <span
          className="font-black text-white leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(8rem, 24vw, 24rem)',
            letterSpacing: '-0.04em',
          }}
        >
          {item.year}
        </span>
      </motion.div>

      {/* Content grid with directional scroll animation */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10 w-full"
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
        >
          {/* Image column */}
          <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <CinematicImageLoop images={item.img} alt={item.title} inView={inView} />
          </div>

          {/* Text column */}
          <div className={`lg:col-span-12 xl:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col items-center text-center lg:items-start lg:text-left`}>
            {/* Year chip */}
            <div className="mb-8">
              <span
                className="inline-flex items-center gap-2 font-inter text-[0.65rem] tracking-[0.4em] uppercase text-yellow-400 border border-yellow-400/20 bg-yellow-400/5 px-4 py-2"
                style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                {item.year}
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-white leading-[0.9] mb-6 font-black font-inter font-semibold"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                letterSpacing: '-0.02em',
              }}
            >
              {item.title}
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-6 mb-5">
              <div className="h-px w-16 bg-yellow-400" />

            </div>

            {/* Body paragraphs */}
            <div>
              <p
                className="leading-relaxed tracking-wide font-inter text-justify "
                style={{
                  color: "rgba(228, 223, 223, 0.95)",
                  fontSize: "1.05rem",
                  fontWeight: "500",
                }}
              >
                {item.body}
              </p>
            </div>

            {/* Index counter */}
            <div className="mt-14 flex items-center gap-4">
              <div className="flex items-baseline gap-1">
                <span className="font-inter text-yellow-400 text-4xl font-black leading-none italic">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-inter text-white/20 text-xl">/</span>
                <span className="font-inter text-white/20 text-xl">
                  {String(timeline.length).padStart(2, '0')}
                </span>
              </div>

            </div>
          </div>
        </div>
      </motion.div>

      {/* Section bottom separator - Simplified */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" /> */}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function About() {
  const wrapperRef = useRef(null)
  const timelineEntriesRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress: journeyProgress } = useScroll({
    target: timelineEntriesRef,
    offset: ['start center', 'end center']
  })

  const smoothJourneyProgress = useSpring(journeyProgress, { stiffness: 100, damping: 30 })

  const quoteRef = useRef(null)
  const { scrollYProgress: quoteProgress } = useScroll({
    target: quoteRef,
    offset: ['start end', 'end start']
  })

  const quoteBgY = useTransform(quoteProgress, [0, 1], ['25%', '-25%'])
  const quoteTextY = useTransform(quoteProgress, [0, 1], ['100px', '-100px'])

  const handleActiveChange = (index, active) => {
    if (active) setActiveIndex(index)
  }

  return (
    <>
      <section
        ref={wrapperRef}
        className="relative bg-background"
      >
        {/* Left timeline rail - Hidden on mobile, shown on lg+ for a clean experience */}
        <div className="hidden lg:flex fixed left-12 top-0 bottom-0 z-40 flex flex-col items-center py-32 pointer-events-none">
          <div className="relative flex flex-col items-center h-[60vh] my-auto w-px bg-white/5">
            <TimelineProgressLine progress={smoothJourneyProgress} />

            {/* Year dots - Distributed strictly across the scrollable journey height */}
            <div className="absolute inset-y-0 flex flex-col justify-between items-center py-4">
              {timeline.map((item, i) => (
                <div key={i} className="flex items-center -translate-x-[15px]">
                  <TimelineDot
                    isActive={activeIndex === i}
                    year={item.year}
                    onClick={() => {
                      const el = document.getElementById(`section-${item.year}`)
                      if (el) {
                        const offset = el.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (el.offsetHeight / 2)
                        window.scrollTo({ top: offset, behavior: 'smooth' })
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section header - Full Screen */}
        <div className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          {/* Video Background - Self-hosted for performance */}
          <div className="absolute inset-0 z-0 opacity-60">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
            >
              <source src="https://ewxi2xhm73cm53ki.public.blob.vercel-storage.com/bts4.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
          </div>

          <ScrollReveal animation="fade-up" duration={1.5} className="relative z-10 max-w-5xl">
            <p className="font-inter font-semibold text-[0.68rem] tracking-[0.5em] uppercase text-yellow-400 mb-8 font-black">
              The Evolution
            </p>
            <h1
              className="text-section-title text-white mb-10 uppercase"
            >
              A Story of
              <br />
              <span className="text-yellow-400 italic">Consistent Growth.</span>
            </h1>
            <p className="text-white/60 text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed font-inter">
              Every milestone was earned. Every phase was a deliberate step toward building a legacy in motion.
            </p>
          </ScrollReveal>

        </div>

        {/* Timeline entries container - Remove excessive left padding on mobile */}
        <div ref={timelineEntriesRef} className="pl-0 lg:pl-32">
          {timeline.map((item, i) => (
            <TimelineSection
              key={i}
              item={item}
              index={i}
              onActiveChange={handleActiveChange}
            />
          ))}
        </div>

        {/* End cap */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 py-24 px-6 lg:pl-28 flex flex-col gap-2"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_24px_rgba(250,204,21,0.8)]" />
            <div className="h-px w-24 bg-yellow-400/40" />
          </div>
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-yellow-400/60">
            Chapter Continues
          </p>
          <p
            className="text-white font-black"
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              letterSpacing: '-0.02em',
              fontFamily: '"Playfair Display", "Georgia", serif',
            }}
          >
            The Frame is Still Rolling.
          </p>
        </motion.div> */}

        <section className="bg-background py-32 relative overflow-hidden border-y border-white/5">

          {/* Background Image & Cinematic Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/vision.jpg"
              alt="Vision Background"
              fill
              className="object-cover opacity-20 lg:opacity-30 grayscale saturate-0"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
          </div>

          <div
            className="about-vision-watermark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     font-bebas tracking-[0.15em] pointer-events-none select-none whitespace-nowrap
                     text-[clamp(4rem,14vw,13rem)] text-white/[0.03] z-0"
          >
            VISION
          </div>

          <div className="container mx-auto px-6 max-w-5xl text-center lg:text-left relative z-10">
            <Reveal>
              <span className="font-inter text-[0.72rem] font-bold tracking-[0.22em] uppercase text-yellow-400">The Vision</span>
              <h2 className="text-section-title text-white mt-4 uppercase">
                The Vision Behind <span className="text-yellow-500">Skylume</span>
              </h2>
              <div
                className="w-12 h-0.5 mx-auto lg:mx-0 my-5 bg-yellow-500"
              />
            </Reveal>

            <div className="grid md:grid-cols-3 gap-5 mt-10">
              {[
                { icon: '🎬', title: 'Global Standard', body: 'Build a production agency that competes globally while staying grounded in storytelling and execution.' },
                { icon: '⚙️', title: 'Precision First', body: 'Combine editing precision with cinematic production. Every frame serves purpose — not just aesthetics.' },
                { icon: '🏗️', title: 'Built on Structure', body: 'Skylume is built on structure, consistency, and creative clarity — not hype, not shortcuts.' },
              ].map((v, i) => (
                <Reveal key={i} delay={0.1 * i}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="about-vision-card group relative rounded-xl p-7 text-justify border border-white/5
                             bg-pf-card overflow-hidden transition-colors duration-300
                             hover:border-yellow/30"
                  >
                    <div className="text-3xl mb-4">{v.icon}</div>
                    <h3 className="font-inter font-bold text-xl text-white tracking-[0.05em] mb-3 uppercase">{v.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed font-inter">{v.body}</p>
                    <div className="about-card-sweep absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500" />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
          TEAM
      ════════════════════════════════════ */}
        <section className="bg-background py-28">
          <div className="container mx-auto px-6 max-w-6xl text-center lg:text-left">
            <Reveal className="mb-12">
              <span className="font-inter text-[0.72rem] font-bold tracking-[0.22em] uppercase text-yellow-400">The People</span>
              <h2 className="text-section-title text-white mt-4 mb-3 uppercase text-center lg:text-left">
                Meet the Team
              </h2>
              <div className="w-10 h-0.5 mb-4 bg-yellow-500 mx-auto lg:mx-0" />
              <p className="text-white/90 text-sm max-w-md leading-relaxed font-inter text-center lg:text-left">
                Every great production is a collective. Skylume is built by individuals who care deeply about their craft.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {team.map((member, i) => (
                <Reveal key={i} delay={0.07 * i}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="about-team-card group hover-lift rounded-2xl overflow-hidden border border-white/5
                             bg-background transition-colors duration-300
                             hover:border-yellow/30"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-inter font-black text-xl text-white tracking-[0.05em] leading-none mb-1 uppercase">
                        {member.name}
                      </h3>
                      <p className="font-inter text-[0.6rem] font-bold tracking-[0.11em] uppercase text-yellow-400 mb-1.5">
                        {member.role}
                      </p>
                      <p className="text-white/90 text-xs leading-relaxed font-inter">{member.note}</p>
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
        <section ref={quoteRef} className="bg-background py-60 relative overflow-hidden">
          {/* Background Image with Aggressive Cinematic Parallax */}
          <motion.div
            style={{ y: quoteBgY }}
            className="absolute inset-0 z-0 opacity-60 h-[150%] -top-[25%]"
          >
            <Image
              src="/team/yusuf4.jpg"
              alt="Founder Background"
              fill
              className="object-cover brightness-25 contrast-110"
              style={{ objectPosition: 'center 20%' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black/90" />
          </motion.div>

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-10"
          />
          <Reveal>
            <motion.div
              style={{ y: quoteTextY }}
              className="container mx-auto px-6 max-w-3xl text-center relative z-20"
            >
              <div className="font-inter text-[5rem] leading-none mb-[-1.25rem] text-yellow-500 opacity-20">"</div>
              <blockquote className="font-inter font-black italic text-[clamp(1.5rem,2.8vw,2.4rem)] text-white
                                   tracking-[0.03em] leading-[1.2] mb-10">
                Every camera I picked up, every project I delivered - it was never about the equipment.
                It was always about the story.
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-yellow/30 flex-shrink-0 font-inter">
                  <Image
                    src="/team/yusuf.png"
                    alt="Yusuf"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left font-inter">
                  <div className="text-white font-black text-sm uppercase tracking-wider font-inter">Yusuf</div>
                  <div className="font-inter text-[0.66rem] font-bold tracking-[0.12em] uppercase text-white/90">
                    Founder, Skylume Productions
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </section>

        {/* ════════════════════════════════════
          CTA
      ════════════════════════════════════ */}
        <section className="bg-background py-24 text-center">
          <Reveal>
            <div className="container mx-auto px-6 max-w-lg">
              <span className="font-inter text-[0.72rem] font-bold tracking-[0.22em] uppercase text-yellow-500">Work With Us</span>
              <h2 className="text-section-title text-white mt-4 mb-4 uppercase">
                Ready to Tell Your Story?
              </h2>
              <p className="text-white/90 text-sm leading-relaxed mb-8 font-inter">
                If your brand deserves production that is deliberate and cinematic, let's build it together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <button className="bg-yellow-500 text-white font-inter text-[0.82rem] font-bold tracking-[0.18em] uppercase px-[36px] py-[14px] border-none cursor-pointer transition-all duration-250 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-yellow-600 hover:-translate-y-0.5">
                    Get In Touch
                  </button>
                </Link>
                <Link href="/services">
                  <button className="bg-transparent text-white font-inter text-[0.82rem] font-bold tracking-[0.18em] uppercase px-[36px] py-[13px] border border-yellow/50 cursor-pointer transition-all duration-250 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:border-yellow hover:text-yellow-500 hover:bg-yellow-500/5">
                    View Our Work
                  </button>
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </section >
    </>
  )
}
