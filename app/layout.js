import { Inter, Syne } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingActions from '@/components/FloatingActions'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })

export const metadata = {
  metadataBase: new URL('https://skylumeproduction.com'),
  title: 'Skylume Productions | Cinematic Video Production Dubai & India',
  description: 'Expert cinematic video production house in Dubai & India. Specialized in brand films, high-end real estate videography, wedding films, and podcast production. Scale your brand with precision.',
  keywords: 'video production dubai, cinematic videography india, real estate videography dubai, brand films, podcast production, commercial film house',
  alternates: {
    canonical: 'https://skylumeproduction.com/',
  },
  openGraph: {
    title: 'Skylume Productions | World-Class Cinematic Visuals',
    description: 'Transforming brand narratives into high-end cinematic experiences across Dubai and India.',
    url: 'https://skylumeproduction.com/',
    siteName: 'Skylume Productions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Skylume Productions Cinematic Video Rendering',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skylume Productions | Premium Cinematic Content',
    description: 'High-end production for modern brands in Dubai and India.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://skylumeproduction.com//#organization",
      "name": "Skylume Productions",
      "url": "https://skylumeproduction.com/",
      "logo": "https://skylumeproduction.com//logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971-XXXXXXX",
        "contactType": "sales",
        "availableLanguage": ["en", "Hindi", "Arabic"]
      }
    },
    {
      "@type": "VideoProductionCompany",
      "@id": "https://skylumeproduction.com//#production",
      "name": "Skylume Productions",
      "description": "High-end cinematic video production for brands, real estate, and events in Dubai and India.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Production Services",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Cinematic Video Production",
            "description": "Premium brand storytelling and cinematic content."
          },
          {
            "@type": "Service",
            "name": "Real Estate Videography",
            "description": "Luxury property walkthroughs and drone cinematography."
          },
          {
            "@type": "Service",
            "name": "Podcast Production",
            "description": "Multi-cam cinematic podcast recording and editing."
          }
        ]
      }
    }
  ]
}

import SmoothScroll from '@/components/SmoothScroll'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${syne.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  )
}
