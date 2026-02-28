'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const pillars = [
    {
        title: 'Story',
        description:
            'We craft cinematic narratives that connect emotionally and elevate brands.',
        gif: '/gif/clapper.gif'
    },
    {
        title: 'Execution',
        description:
            'From pre-production to on-set direction, we deliver flawless shoots.',
        gif: '/gif/filmshooting.gif'
    },
    {
        title: 'Detail',
        description:
            'Editing, grading, sound design — precision in every final frame.',
        gif: '/gif/videoeditor.gif'
    }
]

export default function AgencyPillars() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-0 border border-yellow-500 shadow-2xl shadow-yellow-500/20 rounded-2xl mt-32 overflow-hidden">
            {pillars.map((pillar, index) => {
                return (
                    <motion.div
                        key={pillar.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex flex-row sm:flex-col items-center sm:items-start gap-5 sm:gap-2 text-left p-6 sm:p-8 xl:p-9 border-b sm:border-b-0 sm:border-r border-white/5 last:border-b-0 sm:[&:nth-child(2)]:border-r-0 xl:[&:nth-child(2)]:border-r border-white/5 transition-all duration-500 h-full hover:bg-white/5"
                    >
                        {/* GIF Container */}
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 xl:w-20 xl:h-20 flex-shrink-0 flex items-center justify-center overflow-hidden">
                            <Image
                                src={pillar.gif}
                                alt={pillar.title}
                                width={80}
                                height={80}
                                className="object-cover transition-all duration-700"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col flex-1 mt-0 sm:mt-2">
                            <h3 className="font-montserrat font-bold text-lg sm:text-xl text-white tracking-widest mb-1 sm:mb-2 transition-colors duration-300 group-hover:text-yellow-500 uppercase">
                                {pillar.title}
                            </h3>
                            <p className="font-outfit font-light text-[0.85rem] sm:text-[0.95rem] xl:text-[1rem] text-textMuted leading-relaxed transition-colors duration-300 group-hover:text-slate-200 line-clamp-2 sm:line-clamp-none">
                                {pillar.description}
                            </p>
                        </div>

                    </motion.div>
                )
            })}
        </div>
    )
}
