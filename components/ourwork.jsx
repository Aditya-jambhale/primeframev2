'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, ArrowUpRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

// ─── YouTube ID Extractor ─────────────────────────────────────────────────────
// Handles all YouTube URL formats:
// - https://www.youtube.com/watch?v=VIDEO_ID
// - https://youtu.be/VIDEO_ID
// - https://www.youtube.com/embed/VIDEO_ID
// - https://www.youtube.com/shorts/VIDEO_ID
// - Raw ID (11 chars)
function extractYouTubeId(input) {
    if (!input) return ''
    const trimmed = input.trim()

    // Already a raw video ID (11 alphanumeric/dash/underscore chars)
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed

    try {
        const url = new URL(trimmed)
        // youtu.be/ID
        if (url.hostname === 'youtu.be') return url.pathname.slice(1).split('?')[0]
        // youtube.com/shorts/ID
        if (url.pathname.startsWith('/shorts/')) return url.pathname.split('/shorts/')[1].split('?')[0]
        // youtube.com/embed/ID
        if (url.pathname.startsWith('/embed/')) return url.pathname.split('/embed/')[1].split('?')[0]
        // youtube.com/watch?v=ID
        const v = url.searchParams.get('v')
        if (v) return v
    } catch {
        // fallback: try regex
        const match = trimmed.match(/(?:v=|\/embed\/|\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
        if (match) return match[1]
    }

    return trimmed
}

// ─── Data — swap youtubeUrl with any format ───────────────────────────────────
const works = [

    // ───────── TOP 6 (Homepage Priority) ─────────
    {
        id: 1,
        title: 'Assam Shoot',
        category: 'Cinematic Event',
        youtubeUrl: 'https://youtu.be/kUBlif8qHfs',
    },
    {
        id: 2,
        title: 'Banaras Shoot',
        category: 'Cinematic Event',
        youtubeUrl: 'https://youtu.be/q26hmHa1CmM',
    },
    {
        id: 21,
        title: 'Wedding Cinematic (Fiverr)',
        category: 'Cinematic Event',
        youtubeUrl: 'https://youtu.be/A8CiBHvhvI4',
    },
    {
        id: 25,
        title: 'Podcast Video Editing (Fiverr)',
        category: 'Talking Head',
        youtubeUrl: 'https://youtu.be/iY63uEVqZv4',
    },
    {
        id: 4,
        title: 'Podcast Highlight 01',
        category: 'Podcast Highlight',
        youtubeUrl: 'https://youtu.be/u4KWT8DkHRk',
    },
    {
        id: 5,
        title: 'Teaser 01',
        category: 'Teaser',
        youtubeUrl: 'https://youtu.be/9ssG-MtEE6A',
    },
    {
        id: 8,
        title: 'Cinematic Drone Shoot',
        category: ' Drone Shoot',
        youtubeUrl: 'https://youtu.be/R9ifqDe2dF0',
    },

    // ───────── Cinematic Events ─────────
    {
        id: 17,
        title: 'Banaras Shoot',
        category: 'Cinematic Event',
        youtubeUrl: 'https://youtu.be/q26hmHa1CmM',
    },
    {
        id: 10,
        title: 'Cinematic Event Film 01',
        category: 'Cinematic Event',
        youtubeUrl: 'https://youtu.be/7M_OefKamys',
    },
    {
        id: 9,
        title: 'Cinematic Event Film 02',
        category: 'Cinematic Event',
        youtubeUrl: 'https://youtu.be/LuMMDt9q-yY',
    },
    {
        id: 11,
        title: 'Cinematic Film 03',
        category: 'Cinematic Event',
        youtubeUrl: 'https://youtu.be/4OhRJYVYR4g',
    },
    {
        id: 12,
        title: 'Cinematic Film 04',
        category: 'Cinematic Event',
        youtubeUrl: 'https://youtu.be/Gh41UDTDZjU',
    },
    {
        id: 13,
        title: 'Cinematic Short 01',
        category: 'Cinematic Event',
        youtubeUrl: 'https://youtube.com/shorts/5RB1Y0V6bx0',
    },
    {
        id: 14,
        title: 'Cinematic Short 02',
        category: 'Cinematic Event',
        youtubeUrl: 'https://youtube.com/shorts/G8IbSWVY63A',
    },

    // ───────── Teasers ─────────
    {
        id: 15,
        title: 'Teaser 02',
        category: 'Teaser',
        youtubeUrl: 'https://youtu.be/LuMMDt9q-yY?si=hTKudK2TDeX4ES0R',
    },
    {
        id: 16,
        title: 'Podcast Teaser',
        category: 'Teaser',
        youtubeUrl: 'https://youtu.be/ioGZz97KM3g',
    },
    {
        id: 7,
        title: 'Teaser 03',
        category: 'Teaser',
        youtubeUrl: 'https://youtu.be/z_nv6uan9aw',
    },

    // ───────── Talking Head ─────────
    {
        id: 18,
        title: 'Talking Head 01',
        category: 'Talking Head',
        youtubeUrl: 'https://youtu.be/_HCVxpLZ04A',
    },
    {
        id: 19,
        title: 'Talking Head 02',
        category: 'Talking Head',
        youtubeUrl: 'https://youtu.be/XQoDR4XROaM',
    },

    // ───────── Podcast Highlights ─────────
    {
        id: 20,
        title: 'Podcast Highlight 02',
        category: 'Podcast Highlight',
        youtubeUrl: 'https://youtu.be/Y53-xv-XsiU',
    },
    {
        id: 6,
        title: 'Podcast Highlight 03',
        category: 'Podcast Highlight',
        youtubeUrl: 'https://youtu.be/0bVpcr1YYRE',
    },
    {
        id: 22,
        title: 'Podcast Highlight 04',
        category: 'Podcast Highlight',
        youtubeUrl: 'https://youtu.be/wsyOcy5p04k',
    },
    {
        id: 23,
        title: 'Podcast Highlight 05',
        category: 'Podcast Highlight',
        youtubeUrl: 'https://youtu.be/0tpZrqOvLrk',
    },
    {
        id: 24,
        title: 'Podcast Highlight 06',
        category: 'Podcast Highlight',
        youtubeUrl: 'https://youtu.be/dAV4T9p8qSM',
    },

    // ───────── Wedding Production ─────────
    {
        id: 3,
        title: 'Wedding Production',
        category: 'Wedding',
        youtubeUrl: 'https://youtu.be/_withIfYaxc',
    },

    // ───────── Real Estate ─────────
    {
        id: 26,
        title: 'Real Estate Film 02',
        category: 'Real Estate',
        youtubeUrl: 'https://youtu.be/W3lnzB-ES_4',
    },

    // ───────── Short Form ─────────
    {
        id: 27,
        title: 'Banaras Short',
        category: 'Short Form',
        youtubeUrl: 'https://youtube.com/shorts/2a9e4BsQBw0',
    },
    {
        id: 28,
        title: 'Short Form 02',
        category: 'Short Form',
        youtubeUrl: 'https://youtube.com/shorts/K1boQewZU7g',
    },
];

// ─── Work Card ────────────────────────────────────────────────────────────────
function WorkCard({ item, onPlay }) {
    const videoId = extractYouTubeId(item.youtubeUrl)
    const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`)

    return (
        <div
            onClick={() => onPlay(item)}
            className="group relative aspect-video cursor-pointer overflow-hidden grayscale hover:grayscale-0 bg-[#0a0a0a]"
            style={{ borderRadius: '2px' }}
        >
            {/* Thumbnail */}
            <Image
                src={imgSrc}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onError={() => setImgSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`)}
            />

            {/* Base dark scrim — always visible at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            {/* Play button — center */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    whileHover={{ scale: 1 }}
                    className="w-14 h-14 rounded-full flex items-center justify-center
                     opacity-100 group-hover:scale-110 transition-all duration-300
                     shadow-[0_0_40px_rgba(250,204,21,0.35)] bg-yellow-400"
                >
                    <Play fill="black" size={20} className="ml-0.5" />
                </motion.div>
            </div>

            {/* Category chip — top left, only on hover */}
            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                <span className="font-inter text-[0.6rem] tracking-[0.25em] uppercase text-yellow-400 bg-black/60 backdrop-blur-sm px-2.5 py-1 border border-yellow-400/20">
                    {item.category}
                </span>
            </div>

            {/* Title — bottom, slides up on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400 ease-out text-center lg:text-left">
                <h3
                    className="text-white font-black leading-tight uppercase font-inter"
                    style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                        letterSpacing: '-0.01em',
                    }}
                >
                    {item.title}
                </h3>
            </div>
        </div>
    )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function OurWork({ hideHeading = false, hideButton = false }) {
    const [active, setActive] = useState(null)

    // Sort works by ID numerically
    const sortedWorks = [...works].sort((a, b) => a.id - b.id);

    // On the homepage (when hideButton is false), we only show the first 6 projects
    const visibleWorks = hideButton ? sortedWorks : sortedWorks.slice(0, 9)

    const open = useCallback((item) => {
        setActive(item)
        document.body.style.overflow = 'hidden'
    }, [])

    const close = useCallback(() => {
        setActive(null)
        document.body.style.overflow = ''
    }, [])

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') close() }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [close])

    return (
        <section id='ourwork' className="relative bg-black overflow-hidden py-24">

            {/* ── Header ── */}
            <div className="container mx-auto px-6 max-w-[1300px] mb-16">
                <ScrollReveal animation="fade-up">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-full">
                            <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-yellow-500 mb-6 group transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(234,179,8,0.35)]">
                                <Play size={12} className="text-white fill-white" />
                                <span className="font-inter text-[0.6rem] font-bold tracking-[0.3em] uppercase text-white">
                                    Selected Works
                                </span>
                            </div>
                            {!hideHeading && (
                                <h2 className="text-white font-inter text-[clamp(1.5rem,6vw,2.5rem)] font-black leading-[1.1] uppercase tracking-[0.1em] md:tracking-[0.2em] mt-4">
                                    Stories We <span className="text-yellow-500 ">Have Told</span>
                                </h2>
                            )}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Thin divider */}
                <div className="mt-8 h-px bg-white/8" />
            </div>

            {/* ── Grid ── */}
            <div className="container mx-auto px-4 max-w-9xl">
                <ScrollReveal animation="stagger-list" stagger={0.08}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {visibleWorks.map((item) => (
                            <WorkCard key={item.id} item={item} onPlay={open} />
                        ))}
                    </div>
                </ScrollReveal>
            </div>

            {!hideButton && (
                <div className="container mx-auto px-6 max-w-[1300px] mt-16 flex justify-center">
                    <ScrollReveal animation="fade-up" delay={0.3}>
                        <Link href="/ourwork">
                            <button
                                className="flex items-center gap-2 font-inter text-[0.75rem] tracking-[0.25em] uppercase
                             text-white/50 hover:text-yellow-400 transition-colors duration-300 whitespace-nowrap font-bold"
                            >
                                View All Projects
                                <ArrowUpRight size={14} />
                            </button>
                        </Link>
                    </ScrollReveal>
                </div>
            )}

            {/* ── Modal ── */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        key="modal-bg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl"
                        onClick={close}
                    >
                        <motion.div
                            key="modal-content"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close */}
                            <button
                                onClick={close}
                                aria-label="Close"
                                className="absolute -top-12 right-0 w-9 h-9 flex items-center justify-center
                           text-white/40 hover:text-white transition-colors duration-200"
                            >
                                <X size={20} />
                            </button>

                            {/* Player */}
                            <div className="aspect-video w-full overflow-hidden bg-[#050505]" style={{ borderRadius: '2px' }}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${extractYouTubeId(active.youtubeUrl)}?autoplay=1&modestbranding=1&rel=0&color=white`}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>

                            {/* Below player info */}
                            <div className="mt-5 flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left sm:justify-between gap-5">
                                <div>
                                    <h4
                                        className="text-white font-black uppercase font-inter"
                                        style={{
                                            fontSize: '1.25rem',
                                            letterSpacing: '-0.01em',
                                        }}
                                    >
                                        {active.title}
                                    </h4>
                                    <p className="font-inter text-[0.6rem] tracking-[0.2em] uppercase text-yellow-500 font-bold mt-2">
                                        {active.category}
                                    </p>
                                </div>
                                <a
                                    href={`https://www.youtube.com/watch?v=${extractYouTubeId(active.youtubeUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 font-inter text-[0.65rem] tracking-[0.2em] uppercase
                             text-white/40 hover:text-yellow-400 transition-colors duration-200 font-bold"
                                >
                                    Watch on YouTube
                                    <ArrowUpRight size={12} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}