'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Check, Copy, Download, Info } from 'lucide-react'
import { useState } from 'react'

const colors = [
    {
        name: 'Skylume Yellow',
        hex: '#EAB308',
        description: 'The core brand color representing energy, creativity, and light.',
        usage: 'Primary accents, CTA buttons, and key focus elements.',
        text: 'text-black'
    },
    {
        name: 'Cinematic Black',
        hex: '#000000',
        description: 'The foundation of our visual identity, providing depth and contrast.',
        usage: 'Main backgrounds, deep shadows, and cinematic framing.',
        text: 'text-white'
    },
    {
        name: 'Pure White',
        hex: '#FFFFFF',
        description: 'Used for clarity and readability against dark backgrounds.',
        usage: 'Primary typography, secondary backgrounds, and highlights.',
        text: 'text-black'
    },
    {
        name: 'Muted Grey',
        hex: '#404040',
        description: 'Providing subtle separation and supporting hierarchy.',
        usage: 'Secondary text, borders, and UI backgrounds.',
        text: 'text-white'
    }
]

const typography = [
    {
        font: 'Montserrat',
        usage: 'Headings & Lead Text',
        description: 'Strong, geometric, and modern. Montserrat conveys authority and creative precision.',
        example: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',
        styles: ['Black (900)', 'Bold (700)', 'SemiBold (600)']
    },
    {
        font: 'Outfit',
        usage: 'Body Copy & Micro-copy',
        description: 'Human-centric, clean, and highly readable. Outfit balances the strength of Montserrat.',
        example: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',
        styles: ['Medium (500)', 'Regular (400)', 'Light (300)']
    },
    {
        font: 'Bebas Neue',
        usage: 'Accents & Watermarks',
        description: 'Impactful, condensed, and cinematic. Used for big background elements.',
        example: 'AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ',
        styles: ['Regular (400)']
    }
]

export default function Branding() {
    const [copied, setCopied] = useState(null)

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        setCopied(text)
        setTimeout(() => setCopied(null), 2000)
    }

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-yellow-500/30">
            {/* Background grain is handled by globals.css */}

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(234,179,8,0.1)_0%,transparent_70%)]" />

                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="eyebrow mb-4 block">Visual Identity</span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
                            Brand <span className="text-yellow-500 italic">Guidelines</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-muted-foreground text-lg mb-10">
                            The visual language of Skylume Productions. A cohesive system designed for cinematic impact, creative clarity, and storytelling precision.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Logo Section */}
            <section className="py-20 bg-card/50 border-y border-white/5">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-black uppercase mb-2">The Logo</h2>
                            <p className="text-muted-foreground max-w-md">
                                Our logo is our mark of quality. It should be used consistently and with proper breathing room.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* White Logo on Dark */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="group relative"
                        >
                            <div className="aspect-[16/9] bg-black rounded-2xl border border-white/10 flex items-center justify-center p-12 overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
                                <div className="relative w-full h-full max-w-[300px] max-h-[150px]">
                                    <Image
                                        src="/about/logow.png"
                                        alt="Skylume Logo White"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="absolute top-4 right-4 text-[0.6rem] font-bold tracking-[0.2em] text-white/20 uppercase">Primary / Night</div>
                            </div>
                            <div className="mt-4 flex justify-between items-center px-2">
                                <div>
                                    <h3 className="font-bold text-white uppercase tracking-wider">Logo Inverse</h3>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">For dark backgrounds (Primary)</p>
                                </div>
                                <a href="/about/logow.png" download className="p-2 bg-white/5 rounded-full hover:bg-yellow-500/20 transition-colors group">
                                    <Download size={18} className="text-white group-hover:text-yellow-500" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Black Logo on Light */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="group relative"
                        >
                            <div className="aspect-[16/9] bg-white rounded-2xl border border-black/10 flex items-center justify-center p-12 overflow-hidden shadow-xl">
                                <div className="relative w-full h-full max-w-[300px] max-h-[150px]">
                                    <Image
                                        src="/about/logo.png"
                                        alt="Skylume Logo Black"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="absolute top-4 right-4 text-[0.6rem] font-bold tracking-[0.2em] text-black/20 uppercase">Secondary / Day</div>
                            </div>
                            <div className="mt-4 flex justify-between items-center px-2">
                                <div>
                                    <h3 className="font-bold text-white uppercase tracking-wider">Logo Standard</h3>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">For light backgrounds</p>
                                </div>
                                <a href="/about/logo.png" download className="p-2 bg-white/5 rounded-full hover:bg-yellow-500/20 transition-colors group">
                                    <Download size={18} className="text-white group-hover:text-yellow-500" />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Logo Rules */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                        <div className="glass-card p-8 rounded-2xl border-white/5">
                            <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6 border border-yellow-500/20">
                                <Info size={20} className="text-yellow-500" />
                            </div>
                            <h4 className="font-bold uppercase tracking-wider mb-3">Clearance</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Maintain a minimum clear space equal to the height of the 'S' icon around the logo to ensure visibility and impact.
                            </p>
                        </div>
                        <div className="glass-card p-8 rounded-2xl border-white/5">
                            <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6 border border-yellow-500/20">
                                <Info size={20} className="text-yellow-500" />
                            </div>
                            <h4 className="font-bold uppercase tracking-wider mb-3">Minimum Size</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                The logo should never be reproduced smaller than 32px in digital applications to maintain legibility.
                            </p>
                        </div>
                        <div className="glass-card p-8 rounded-2xl border-white/5">
                            <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6 border border-yellow-500/20">
                                <Info size={20} className="text-yellow-500" />
                            </div>
                            <h4 className="font-bold uppercase tracking-wider mb-3">Exclusion</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Do not distort, recolor, or modify the logo proportions. Use strictly only the provided assets.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Colors Section */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="mb-16">
                        <span className="eyebrow mb-2 block">Color Palette</span>
                        <h2 className="text-4xl font-black uppercase tracking-tight">The <span className="text-yellow-500">Aesthetic</span></h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {colors.map((color, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group flex flex-col"
                            >
                                <div
                                    className="h-48 rounded-t-2xl relative flex items-end p-6 overflow-hidden border border-white/5"
                                    style={{ backgroundColor: color.hex }}
                                >
                                    <div className={`absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity`}>
                                        <button
                                            onClick={() => copyToClipboard(color.hex)}
                                            className={`p-2 rounded-lg bg-black/10 backdrop-blur-sm border border-white/10 hover:bg-black/20 transition-all ${color.text}`}
                                        >
                                            {copied === color.hex ? <Check size={16} /> : <Copy size={16} />}
                                        </button>
                                    </div>
                                    <span className={`font-black tracking-tighter text-2xl ${color.text}`}>
                                        {color.hex}
                                    </span>
                                </div>
                                <div className="bg-white/5 p-6 rounded-b-2xl border-x border-b border-white/5 flex-grow">
                                    <h3 className="font-bold uppercase tracking-wider mb-2 text-white">{color.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-outfit">{color.description}</p>
                                    <div className="pt-4 border-t border-white/5">
                                        <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-yellow-500/70 block mb-1">Common usage</span>
                                        <p className="text-xs text-muted-foreground font-outfit">{color.usage}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Typography Section */}
            <section className="py-24 bg-card/30 border-y border-white/5">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
                        <div>
                            <span className="eyebrow mb-2 block">Typography</span>
                            <h2 className="text-4xl font-black uppercase tracking-tight">The <span className="text-yellow-500">Voice</span></h2>
                        </div>
                        <p className="text-muted-foreground max-w-md font-outfit">
                            We communicate with clarity and impact. Our typefaces are chosen to reflect our cinematic roots and modern execution.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {typography.map((type, idx) => (
                            <div key={idx} className="glass-card rounded-3xl p-8 md:p-12 border-white/5 relative overflow-hidden group">
                                <div
                                    className="absolute -right-20 -top-20 opacity-[0.03] text-[20rem] font-black group-hover:scale-110 transition-transform duration-1000 select-none pointer-events-none"
                                    style={{ fontFamily: type.font }}
                                >
                                    {type.font.charAt(0)}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
                                    <div className="lg:col-span-4">
                                        <h3 className="text-3xl font-black uppercase mb-4 text-white" style={{ fontFamily: type.font }}>{type.font}</h3>
                                        <p className="font-bold text-yellow-500 uppercase tracking-widest text-xs mb-6">{type.usage}</p>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-outfit">
                                            {type.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {type.styles.map((style, i) => (
                                                <span key={i} className="text-[0.6rem] px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white/60 uppercase tracking-widest">
                                                    {style}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="lg:col-span-8">
                                        <div className="space-y-8">
                                            <div className="border-b border-white/5 pb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
                                                <span className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight" style={{ fontFamily: type.font }}>
                                                    {type.example}
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                                    <span className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Sample Heading</span>
                                                    <h4 className="text-2xl uppercase font-black text-white" style={{ fontFamily: type.font }}>
                                                        Cinematic Storytelling
                                                    </h4>
                                                </div>
                                                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                                    <span className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Sample Paragraph</span>
                                                    <p className="text-sm leading-relaxed text-muted-foreground font-outfit" style={{ fontFamily: type.font }}>
                                                        Building a production agency that competes globally while staying grounded in storytelling and execution. Precision first.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA / Contact */}
            <section className="py-32 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.05)_0%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto px-6 max-w-2xl relative z-10">
                    <h2 className="text-3xl font-black uppercase mb-6">Need Project Assets?</h2>
                    <p className="text-muted-foreground mb-10 font-outfit">
                        If you're a partner or team member requiring high-resolution source files, please contact the creative department.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="btn-primary">Request Assets</button>
                        <button className="btn-outline">Internal Docs</button>
                    </div>
                </div>
            </section>

            {/* Sharp contrast footer for brand finish */}
            <div className="h-2 bg-yellow-500" />
        </div>
    )
}
