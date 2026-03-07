'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ArrowUpRight, Instagram, Youtube, Linkedin } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/services#viral-shorts', label: 'Viral Shorts' },
  { href: '/services#event-production', label: 'Event Production' },
  { href: '/services#wedding-coverage', label: 'Wedding Coverage' },
  { href: '/services#documentary-shoot', label: 'Documentary Films' },
  { href: '/services#long-form-youtube', label: 'YouTube Production' },
  { href: '/services#podcast-production', label: 'Podcast Production' },
  { href: '/services#drone-shoot', label: 'Drone Shoots' },
]

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/skylumeproduction/', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/@SkylumeProduction', label: 'YouTube' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/digitallyusuf/', label: 'LinkedIn' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bgfooter.png"
          alt="Footer Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />
      </div>

      <div className="relative z-10">

        {/* ── Top CTA band ── */}
        {/* <div className="border-b border-white/5">
        <div className="max-w-[1300px] mx-auto px-6 py-8 flex items-center justify-between flex-wrap gap-6">
          <div>
            <p className="font-inter text-xs font-bold tracking-[0.22em] uppercase text-yellow-500 mb-2">
              Ready to Start?
            </p>
            <h3 className="font-inter font-black text-[clamp(1.75rem,4vw,3rem)] tracking-tight text-white leading-none uppercase">
              LET'S BUILD SOMETHING <span className="text-yellow-500">EXCEPTIONAL.</span>
            </h3>
          </div>
          <Link href="/contact" className="no-underline flex-shrink-0">
            <button className="bg-yellow-500 text-white font-inter text-[0.82rem] font-bold tracking-[0.18em] uppercase px-[30px] py-[12px] border-none cursor-pointer transition-all duration-250 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:bg-yellow-600 hover:-translate-y-0.5">
              Book a Consultation
            </button>
          </Link>
        </div>
      </div> */}

        {/* ── Main footer grid ── */}
        <div className="max-w-[1300px] mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1.2fr_1.2fr] gap-x-8 gap-y-10">

            {/* ── Brand column ── */}
            <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
              {/* Logo */}
              <Link href="/" className="no-underline flex items-center gap-2 group mb-4 w-fit mx-auto md:mx-0">
                <Image
                  src="/about/logow.png"
                  alt="Skylume Logo"
                  width={32}
                  height={32}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="flex flex-col text-white">
                  <span className="font-inter font-bold uppercase text-lg lg:text-xl tracking-[0.06em] leading-[0.9]">
                    Skylume
                  </span>
                  <span className="font-inter font-semibold uppercase text-[8px] lg:text-[9px] tracking-[0.3em] leading-none mt-1 opacity-90">
                    Production
                  </span>
                </div>
              </Link>

              <p className="font-inter font-light text-sm text-white/80 leading-relaxed mb-5 max-w-[260px] mx-auto md:mx-0">
                Premium cinematic production for brands across India, Dubai, and the UAE. Every frame with purpose.
              </p>

              {/* Social icons */}
              <div className="flex gap-2.5 justify-center md:justify-start">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/70 hover:border-yellow hover:text-yellow-500 transition-all duration-200"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))' }}
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Quick Links ── */}
            <div className="col-span-1 text-center md:text-left">
              <h4 className="font-inter font-bold text-[0.65rem] tracking-[0.2em] uppercase text-yellow-500 mb-4">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2.5">
                {quickLinks.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="no-underline font-inter font-light text-[0.8rem] text-white/80 hover:text-white transition-colors duration-200 flex items-center justify-center md:justify-start gap-2 group"
                    >
                      <span className="w-0 h-px bg-yellow-500 group-hover:w-3 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Services ── */}
            <div className="col-span-1 text-center md:text-left">
              <h4 className="font-inter font-bold text-[0.65rem] tracking-[0.2em] uppercase text-yellow-500 mb-4">
                Services
              </h4>
              <ul className="flex flex-col gap-2.5">
                {serviceLinks.slice(0, 5).map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="no-underline font-inter font-light text-[0.8rem] text-white/80 hover:text-white transition-colors duration-200 flex items-center justify-center md:justify-start gap-2 group"
                    >
                      <span className="w-0 h-px bg-yellow-500 group-hover:w-3 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Contact ── */}
            <div className="col-span-2 md:col-span-1 text-center md:text-left flex flex-col items-center md:items-start">
              <h4 className="font-inter font-bold text-[0.65rem] tracking-[0.2em] uppercase text-yellow-500 mb-4">
                Contact
              </h4>
              <ul className="flex flex-col gap-3 mb-5 items-center md:items-start">
                <li className="flex items-start gap-3">
                  <MapPin size={14} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="font-inter font-light text-[0.8rem] text-white/80 leading-relaxed">
                    India &bull; Dubai &bull; UAE
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={14} className="text-yellow-500 flex-shrink-0" />
                  <a
                    href="tel:+919792347498"
                    className="no-underline font-inter font-light text-[0.8rem] text-white/80 hover:text-white transition-colors duration-200"
                  >
                    +91 9792347498
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={14} className="text-yellow-500 flex-shrink-0" />
                  <a
                    href="mailto:info@skylumeproduction.com"
                    className="no-underline font-inter font-light text-[0.8rem] text-white/80 hover:text-white transition-colors duration-200"
                  >
                    info@skylumeproduction.com
                  </a>
                </li>
              </ul>

              {/* WhatsApp quick link */}
              <a
                href="https://wa.me/971XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline inline-flex items-center gap-2 font-inter text-[0.6rem] font-bold tracking-[0.15em] uppercase text-green-400 border border-green-400/25 px-3 py-2 hover:bg-green-400/10 transition-all duration-200"
                style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/5">
          <div className="max-w-[1300px] mx-auto px-6 py-4 flex items-center justify-center md:justify-between flex-wrap gap-4 text-center">
            <p className="font-inter font-light text-xs text-white/90 w-full md:w-auto">
              © {year} Skylume Production. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-6 w-full md:w-auto">
              {['Privacy Policy', 'Terms of Service'].map(item => (
                <Link
                  key={item}
                  href="/contact"
                  className="no-underline font-inter font-light text-xs text-white/90 hover:text-yellow-500 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}