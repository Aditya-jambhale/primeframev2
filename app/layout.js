import { Inter, Syne, Outfit } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingActions from '@/components/FloatingActions'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata = {
  title: 'PrimeFrame Productions | Premium Video Production in Dubai & India',
  description: 'Premium cinematic video production services for brands scaling across India, Dubai, and UAE. From corporate films to event coverage, we deliver visuals that elevate brands.',
  keywords: 'video production dubai, cinematic videography, corporate films, event filming, dubai production house, premium video services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${syne.variable} ${outfit.variable} font-sans`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  )
}
