'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageSquare } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const videos = [
  {
    url: 'https://youtu.be/47jzFqDFlCE',
    name: 'Betsy',
    company: 'Author',
  },
  {
    url: 'https://youtube.com/shorts/5OSjGFWSeuw?feature=share',
    name: 'Arabella',
    company: 'Author',
  },
  {
    url: 'https://youtube.com/shorts/vOHPMhu_r9c?feature=share',
    name: 'Dr Eric Weiss',
    company: 'Clamp Time',
  },
  {
    url: 'https://youtube.com/shorts/0oQ2103A6H8?feature=share',
    name: 'Dr Brenda',
    company: 'TedX Speaker',
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
        <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:items-end lg:text-left flex-wrap gap-8 mb-16">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-yellow-500 mb-6 group transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(234,179,8,0.35)]">
                <MessageSquare size={14} className="text-white fill-white/20" />
                <span className="font-inter text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white">
                  Client Feedback
                </span>
              </div>
              <h2 className="font-inter font-black text-[clamp(2rem,4vw,3rem)] leading-[0.95] tracking-tight text-white uppercase">
                REAL CLIENT<br />
                <span className="text-yellow-500">EXPERIENCE</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <Link href="/testimonials">
              <button className="bg-transparent text-white font-inter text-[0.82rem] font-bold tracking-[0.18em] uppercase px-[30px] py-[11px] border border-yellow/50 cursor-pointer transition-all duration-250 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:border-yellow hover:text-yellow-500 hover:bg-yellow-500/5">
                View All
              </button>
            </Link>
          </ScrollReveal>
        </div>

        {/* Video Grid */}
        <div className="flex flex-col gap-16">
          {/* First Video - Horizontal */}
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.01] bg-[#050505]">
                <iframe
                  src={getYoutubeEmbedUrl(videos[0].url)}
                  title={`Testimonial from ${videos[0].name}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-8 text-center text-white">
                <p className="font-inter font-black text-xl tracking-wider uppercase">
                  {videos[0].name}
                </p>
                <p className="font-inter text-[0.7rem] font-bold tracking-[0.2em] uppercase text-yellow-500 mt-2">
                  {videos[0].company}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Remaining Videos - Vertical */}
          <ScrollReveal animation="stagger-list" stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {videos.slice(1).map((video, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02] bg-[#050505]">
                    <iframe
                      src={getYoutubeEmbedUrl(video.url)}
                      title={`Testimonial from ${video.name}`}
                      className="w-full h-full object-cover"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="mt-6 text-center text-white">
                    <p className="font-inter font-black text-lg tracking-wide uppercase">
                      {video.name}
                    </p>
                    <p className="font-inter text-[0.65rem] font-bold tracking-[0.18em] uppercase text-yellow-500/60 mt-1">
                      {video.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}