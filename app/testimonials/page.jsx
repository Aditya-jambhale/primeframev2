'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { PlayCircle, Quote, Star, MessageSquare } from 'lucide-react'
import Link from 'next/link'

function getYoutubeEmbedUrl(url) {
  if (!url) return ''
  let id = ''
  if (url.includes('shorts/')) {
    id = url.split('shorts/')[1].split('?')[0]
  } else if (url.includes('youtu.be/')) {
    id = url.split('youtu.be/')[1].split('?')[0]
  } else if (url.includes('v=')) {
    id = url.split('v=')[1].split('&')[0]
  }
  return `https://www.youtube.com/embed/${id}`
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const videos = [
  {
    url: 'https://youtube.com/shorts/vOHPMhu_r9c?si=M2HvczBXiTM5wCZv',
    name: 'Dr Eric Weiss',
    role: 'Founder, Clamp Time',
    desc: 'On transforming complex medical concepts into viral digital content.'
  },
  {
    url: 'https://youtube.com/shorts/0oQ2103A6H8?si=z1TuS7S9yqN8Mnte',
    name: 'Dr Brenda',
    role: 'TedX Speaker',
    desc: 'Impact of cinematic storytelling on public speaker branding.'
  },
  {
    url: 'https://youtu.be/WecJOuguoRA?si=SrnICxGV0kHbvdsb',
    name: 'Lynne B',
    role: 'Podcast Host',
    desc: 'How professional production scaled my podcast to global rankings.'
  }
]

const testimonials = [
  {
    category: 'commercial',
    clientName: 'Arabella',
    company: 'TechVision Inc.',
    testimonial: 'Working with Skylume Productions transformed our brand presence. The attention to detail and cinematic quality exceeded our expectations.',
    size: 'accent',
    videoUrl: 'https://www.youtube.com/shorts/5OSjGFWSeuw'
  },
  {
    category: 'events',
    clientName: 'Betsy',
    company: '',
    testimonial: 'Their event coverage was exceptional. They captured every important moment with professional precision and delivered ahead of schedule.',
    size: 'normal',
    videoUrl: 'https://www.youtube.com/watch?v=rXeCVB18UZM'
  },
  {
    category: 'podcast',
    clientName: 'Priya Sharma',
    company: 'The Growth Podcast',
    testimonial: 'The editing quality and turnaround time are unmatched. Our podcast production has never been better.',
    size: 'normal',
    videoUrl: 'https://youtu.be/9ssG-MtEE6A'
  },
  {
    category: 'commercial',
    clientName: 'David Chen',
    company: 'Luxury Real Estate',
    testimonial: 'The property walkthroughs they created helped us sell premium listings faster. Absolutely world-class work.',
    size: 'normal',
    videoUrl: 'https://youtu.be/iY63uEVqZv4'
  },
  {
    category: 'social media',
    clientName: 'Aisha Khan',
    company: 'Fashion Brand',
    testimonial: 'Our Instagram engagement tripled after working with Skylume. Their understanding of social media content is exceptional.',
    size: 'normal',
    videoUrl: 'https://youtu.be/u4KWT8DkHRk'
  },
  {
    category: 'events',
    clientName: 'Robert Martinez',
    company: 'Corporate Solutions',
    testimonial: 'They covered our annual conference with multiple camera setups and delivered a highlight reel that captured the energy perfectly.',
    size: 'normal',
    videoUrl: 'https://youtu.be/kUBlif8qHfs'
  }
]

export default function Testimonials() {
  const [filter, setFilter] = useState('all')
  const categories = ['all', 'podcast', 'commercial', 'events', 'social media']

  const filteredTestimonials = filter === 'all'
    ? testimonials
    : testimonials.filter(t => t.category === filter)

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-24 px-6 text-center relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div {...fadeIn}>
            <span className="font-outfit text-[10px] font-bold tracking-[0.4em] uppercase text-yellow-500 mb-6 block border border-yellow-500/20 w-fit mx-auto px-5 py-1.5 rounded-full bg-black/40 backdrop-blur-md">
              The Voice of Excellence
            </span>
            <h1 className="font-montserrat font-semibold text-[clamp(2rem,6vw,4.2rem)] leading-[0.9] tracking-tight text-white mb-6 uppercase">
              WORK THAT SPEAKS<br />
              <span className="text-yellow-500">BEFORE WE DO.</span>
            </h1>
            <p className="text-white/60 italic font-outfit font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Real results for brands and creators across India, Dubai, and beyond. Every frame engineered for impact.
            </p>
          </motion.div>
        </div>

        {/* Subtle Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full -z-10" />
      </section>

      {/* Video Content Grid */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="font-montserrat font-black text-xl text-white tracking-[0.2em] uppercase flex items-center gap-6">
              <span className="w-12 h-px bg-yellow-500" />
              Featured Video Journeys
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/5 bg-[#0a0a0a] mb-8 shadow-2xl hover:border-yellow-500/40 transition-colors duration-500">
                  <iframe
                    src={getYoutubeEmbedUrl(video.url)}
                    className="absolute inset-0 w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-[2rem]" />
                </div>
                <div className="px-4">
                  <h3 className="font-montserrat font-black text-xl text-white uppercase tracking-tight mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                    {video.name}
                  </h3>
                  <p className="font-outfit text-[10px] font-bold text-yellow-500 uppercase tracking-widest mb-3 border-b border-yellow-500/20 pb-3">
                    {video.role}
                  </p>
                  <p className="font-outfit font-light text-sm text-white/50 leading-relaxed italic">
                    "{video.desc}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filterable Text Testimonials */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
            <div className="max-w-xl">
              <span className="font-outfit text-[10px] font-bold tracking-[0.4em] uppercase text-yellow-500 mb-4 block">The Archive</span>
              <h2 className="font-montserrat font-black text-[clamp(1.8rem,4vw,3rem)] leading-[0.95] tracking-tight text-white uppercase">
                Client <span className="text-yellow-500">Stories.</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2.5 font-outfit text-[0.7rem] font-bold tracking-[0.2em] uppercase transition-all duration-300 border
                    ${filter === category
                      ? 'bg-yellow-500 text-black border-yellow-500'
                      : 'border-white/10 text-white/40 hover:border-yellow-500/50 hover:text-white'}`}
                  style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredTestimonials.map((testimonial, index) => {
                const isTall = testimonial.size === 'large'
                const isWide = testimonial.size === 'accent'

                return (
                  <motion.div
                    key={testimonial.clientName}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className={`bg-[#0a0a0a] border border-white/5 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500 group hover:border-yellow-500/30 rounded-[1.5rem]
                      ${isTall ? 'row-span-2' : ''} ${isWide ? 'md:col-span-2' : ''}`}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/[0.02] -mr-10 -mt-10 rounded-full blur-2xl group-hover:bg-yellow-500/10 transition-all duration-700" />

                    <div>
                      {testimonial.videoUrl && (
                        <div className="relative aspect-video rounded-xl overflow-hidden mb-6 border border-white/10 bg-black">
                          <iframe
                            src={getYoutubeEmbedUrl(testimonial.videoUrl)}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      )}
                      <Quote size={32} className="text-yellow-500/20 mb-6 group-hover:text-yellow-500/40 transition-colors duration-500" />
                      <p className={`font-outfit font-light italic text-white/80 leading-relaxed mb-6 ${isWide ? 'text-xl' : 'text-base'}`}>
                        "{testimonial.testimonial}"
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                      <p className="font-montserrat font-bold text-base text-white uppercase tracking-tight mb-1">
                        {testimonial.clientName}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="font-outfit text-white/40 text-[0.75rem]">
                          {testimonial.company}
                        </p>
                        <span className="font-outfit text-[0.55rem] font-bold tracking-[0.2em] uppercase text-yellow-500/60 bg-yellow-500/5 px-2.5 py-0.5 rounded-full border border-yellow-500/10">
                          {testimonial.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 px-6 bg-black border-b border-white/5 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="font-outfit text-[10px] font-bold tracking-[0.3em] uppercase text-yellow-500 mb-6 block">Our Global Partners</span>
            <h2 className="font-montserrat font-black text-[clamp(1.8rem,4vw,3rem)] leading-[0.95] tracking-tight text-white uppercase">
              TRUSTED BY<br />
              <span className="text-yellow-500">INDUSTRY LEADERS.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              '/companies/microsoft.png', '/companies/byjus.png', '/companies/Arise.png',
              '/companies/Fulcrum.png', '/companies/Hammad.png', '/companies/sarvam.svg',
              '/companies/edwise.png', '/companies/flind.png', '/companies/ashis.png',
              '/companies/kundlas.png', '/companies/jc.png', '/companies/balance.png'
            ].map((logo, i) => (
              <div
                key={i}
                className="aspect-square bg-[#0a0a0a] border border-white/5 flex items-center justify-center transition-all duration-700 p-8 rounded-2xl group hover:border-yellow-500/30 shadow-xl"
              >
                <img src={logo} alt="Partner Logo" className="w-full h-full object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#050505]">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-montserrat font-black text-[clamp(1.8rem,5vw,3.5rem)] leading-[0.9] tracking-tight text-white mb-8 uppercase">
              READY TO BE OUR NEXT<br />
              <span className="text-yellow-500 italic">SUCCESS STORY?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-5">
              <Link href="/contact">
                <button className="bg-yellow-500 text-black font-outfit text-[0.8rem] font-bold tracking-[0.2em] uppercase px-10 py-4 transition-all duration-500 hover:bg-white hover:-translate-y-1" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
                  Start Your Project
                </button>
              </Link>
              <Link href="/services">
                <button className="bg-transparent text-white border border-white/20 font-outfit text-[0.8rem] font-bold tracking-[0.2em] uppercase px-10 py-4 transition-all duration-500 hover:border-yellow-500 hover:text-yellow-500" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
                  Our Expertise
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Cinematic Flare */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
      </section>
    </div>
  )
}