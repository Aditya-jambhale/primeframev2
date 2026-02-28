'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const videos = [
  {
    url: 'https://youtube.com/shorts/vOHPMhu_r9c?si=M2HvczBXiTM5wCZv',
    name: 'Dr Eric Weiss',
    company: 'Clamp Time',
  },
  {
    url: 'https://youtube.com/shorts/0oQ2103A6H8?si=z1TuS7S9yqN8Mnte',
    name: 'Dr Brenda',
    company: 'TedX Speaker',
  },
  {
    url: 'https://youtu.be/WecJOuguoRA?si=SrnICxGV0kHbvdsb',
    name: 'Lynne B',
    company: 'Podcast Host',
  }
]

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

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-end flex-wrap gap-8 mb-16">
          <div>
            <span className="font-outfit text-[0.72rem] font-bold tracking-[0.22em] uppercase text-yellow-500 block mb-4">Client Feedback</span>
            <h2 className="font-montserrat font-black text-[clamp(2.2rem,4.5vw,4rem)] leading-[0.95] tracking-tight text-white uppercase">
              REAL CLIENT<br />
              <span className="text-yellow-500">EXPERIENCE</span>
            </h2>
          </div>

          <Link href="/testimonials">
            <button className="bg-transparent text-white font-outfit text-[0.82rem] font-bold tracking-[0.18em] uppercase px-[30px] py-[11px] border border-yellow/50 cursor-pointer transition-all duration-250 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:border-yellow hover:text-yellow-500 hover:bg-yellow-500/5">
              View All
            </button>
          </Link>
        </div>

        {/* Vertical Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">

          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Video Frame */}
              <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-xl overflow-hidden border border-white/10 shadow-2xl">

                <iframe
                  src={getYoutubeEmbedUrl(video.url)}
                  title={`Testimonial from ${video.name}`}
                  className="w-full h-full object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Caption */}
              <div className="mt-6 text-center text-white">
                <p className="font-montserrat font-black text-lg tracking-wide uppercase">
                  {video.name}
                </p>
                <p className="font-outfit text-[0.65rem] font-bold tracking-[0.18em] uppercase text-yellow-500/60 mt-1">
                  {video.company}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}