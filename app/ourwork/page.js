'use client'

import { motion } from 'framer-motion'
import OurWork from '@/components/ourwork'
import Link from 'next/link'

export default function PortfolioPage() {
    return (
        <main className="bg-black min-h-screen pt-10">
            {/* Portfolio Hero */}
            <section className="py-28 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-0" />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="font-outfit text-[0.8rem] font-bold tracking-[0.5em] uppercase text-yellow-500 mb-6 block">
                            Portfolio
                        </span>
                        <h1 className="font-montserrat font-black text-[clamp(2.5rem,8vw,5.5rem)] text-white tracking-tighter leading-[0.85] uppercase mb-8">
                            A LEGACY OF<br />
                            <span className="text-yellow-500">EXCEPTIONAL FRAMES.</span>
                        </h1>
                        <p className="font-outfit font-light text-xl text-white/50 max-w-2xl mx-auto leading-relaxed italic">
                            "We don't just capture light. We capture movement, emotion, and the heartbeat of your brand."
                        </p>
                    </motion.div>
                </div>

                {/* Flare */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent blur-sm" />
            </section>

            {/* Main Grid Component */}
            <OurWork hideHeading hideButton />

            {/* Final Call to Action */}
            <section className="py-32 px-6 border-t border-white/5 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-montserrat font-black text-4xl md:text-6xl text-white uppercase tracking-tight mb-12">
                        READY TO BE THE NEXT<br />
                        <span className="text-yellow-500 italic">SUCCESS STORY?</span>
                    </h2>
                    <Link href="/contact">
                        <button className="bg-yellow-500 text-black font-outfit text-[1rem] font-bold tracking-[0.2em] uppercase px-16 py-6 transition-all duration-500 hover:bg-white hover:-translate-y-2 shadow-2xl" style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}>
                            Start Your Project
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
