'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
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
            <Link href="/" className="no-underline flex items-center gap-0 group">
              <span className="w-1 h-10 bg-yellow-500 mr-3 transition-all duration-300 group-hover:h-10" />
              <span className={`font-bebas text-2xl tracking-[0.08em] leading-none transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>
                PRIME<span className="text-yellow-500">FRAME</span>
              </span>
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
                      'no-underline font-barlow-condensed text-sm font-semibold tracking-[0.14em] uppercase transition-colors duration-300',
                      'relative pb-0.5',
                      isActive
                        ? 'text-yellow-500'
                        : scrolled
                          ? 'text-slate-600 hover:text-black'
                          : 'text-slate-300 hover:text-white',
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
          <div className="bg-black/95 backdrop-blur-lg border-t border-white/5 px-6 py-6 flex flex-col gap-1">
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
                    'no-underline font-barlow-condensed text-sm font-semibold tracking-[0.14em] uppercase',
                    'py-3 border-b border-white/5 transition-colors duration-200 flex items-center gap-3',
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