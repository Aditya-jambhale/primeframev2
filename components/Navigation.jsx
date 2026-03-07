'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },

]

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <nav
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          scrolled
            ? 'bg-white border-b border-slate-200 py-3 shadow-sm'
            : 'bg-transparent py-6',
        ].join(' ')}
      >
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="no-underline flex items-center gap-2 group">
              <Image
                src={scrolled ? "/about/logo.png" : "/about/logow.png"}
                alt="Skylume Logo"
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:scale-110"
                style={{ height: 'auto' }}
              />
              <div className={`flex flex-col transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>
                <span className="font-inter font-bold uppercase text-xl lg:text-2xl tracking-[0.06em] leading-[0.9]">
                  Skylume
                </span>
                {/* <span className="font-inter font-semibold uppercase text-[9px] lg:text-[10px] tracking-[0.3em] leading-none mt-1 opacity-90">
                  Production
                </span> */}
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href)

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      'no-underline font-inter text-sm font-semibold tracking-[0.14em] uppercase transition-colors duration-300',
                      'relative pb-0.5',
                      isActive
                        ? 'text-yellow-500'
                        : scrolled
                          ? 'text-black hover:text-black'
                          : 'text-white hover:text-white',
                    ].join(' ')}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-px bg-yellow-500" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Mobile Hamburger */}
            <button
              className={`md:hidden flex items-center justify-center w-10 h-10 transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'} hover:text-yellow-500`}
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={[
            'md:hidden overflow-hidden transition-all duration-300',
            mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0',
          ].join(' ')}
        >
          <div className="bg-black/95 backdrop-blur-lg border-t border-white/5 px-6 py-6 flex flex-col items-center gap-1">
            {navLinks.map(link => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    'no-underline font-inter text-sm font-bold tracking-[0.14em] uppercase',
                    'py-3 border-b border-white/5 transition-colors duration-200 flex items-center justify-center gap-3 w-full',
                    isActive
                      ? 'text-yellow-500'
                      : 'text-slate-300 hover:text-white',
                  ].join(' ')}
                >
                  <span
                    className={`w-1 h-4 flex-shrink-0 transition-all duration-200 ${isActive ? 'bg-yellow-500' : 'bg-transparent'}`}
                  />
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}