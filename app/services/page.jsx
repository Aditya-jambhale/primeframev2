'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Services() {
  useEffect(() => {
    // Handle smooth scroll to anchor on page load
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

  const services = [
    {
      id: 'trade-show',
      category: 'Corporate & Brand Production',
      title: 'Exhibitions, Conference & Trade Show Filming',
      overview: 'Large-scale events require structured coverage. We deliver cinematic multi-camera production, professional audio capture, and strategic event storytelling that captures both scale and impact.',
      image: 'https://images.pexels.com/photos/8355407/pexels-photo-8355407.jpeg?w=1200',
      deliverables: [
        'Multi-camera coverage',
        'Stage + audience capture',
        'Speaker highlights',
        'On-ground interviews',
        'Same-day edits (if required)',
        'Post-event promotional cuts'
      ],
      process: 'Planning → Setup → Live Capture → Structured Edit → Final Delivery'
    },
    {
      id: 'corporate-films',
      category: 'Corporate & Brand Production',
      title: 'Corporate Films That Build Authority',
      overview: 'Corporate films define how your brand is perceived. We craft structured narratives that communicate vision, credibility, and long-term positioning.',
      image: 'https://images.pexels.com/photos/6883811/pexels-photo-6883811.jpeg?w=1200',
      deliverables: [
        'Company profile films',
        'Brand vision videos',
        'Leadership messages',
        'Internal communication films'
      ],
      whyItMatters: 'Professional visuals increase brand trust and investor confidence.'
    },
    {
      id: 'brand-videos',
      category: 'Corporate & Brand Production',
      title: 'Promotional Brand Videos',
      overview: 'Strategic promotional videos designed to elevate brand perception, launch campaigns, and drive audience engagement across digital platforms.',
      image: 'https://images.unsplash.com/photo-1597421568622-6ce6c2713887?w=1200',
      deliverables: [
        'Product promotions',
        'Campaign launches',
        'Social ad creatives',
        'Commercial productions'
      ]
    },
    {
      id: 'executive-interviews',
      category: 'Corporate & Brand Production',
      title: 'Executive Interviews',
      overview: 'Cinematic executive interviews that reflect leadership confidence and brand authority.',
      image: 'https://images.pexels.com/photos/4793163/pexels-photo-4793163.jpeg?w=1200',
      deliverables: [
        'CEO interviews',
        'Founder stories',
        'Thought leadership videos',
        'Investor communications'
      ]
    },
    {
      id: 'real-estate',
      category: 'Corporate & Brand Production',
      title: 'Real Estate Product Demo',
      overview: 'High-end real estate visuals crafted to attract serious buyers and elevate property positioning.',
      image: 'https://images.unsplash.com/photo-1575959508154-1fab18d1338b?w=1200',
      deliverables: [
        'Property walkthroughs',
        'Aerial drone coverage',
        'Interior cinematic shots',
        'Agent feature segments'
      ]
    },
    {
      id: 'trailers',
      category: 'Corporate & Brand Production',
      title: 'Teaser / Trailer Videos',
      overview: 'Short-form cinematic trailers designed to create anticipation and audience excitement.',
      image: 'https://images.unsplash.com/photo-1580168500910-a57358352f14?w=1200',
      deliverables: [
        'Launch teasers',
        'Event previews',
        'Product reveal trailers'
      ]
    },
    {
      id: 'bts',
      category: 'Corporate & Brand Production',
      title: 'Behind The Scenes Videos',
      overview: 'Authentic behind-the-scenes storytelling that builds transparency and brand connection.',
      image: 'https://images.unsplash.com/photo-1627736619924-ce6c159dedca?w=1200',
      deliverables: [
        'Shoot coverage',
        'Production highlights',
        'Social media BTS edits'
      ]
    },
    {
      id: 'event-filming',
      category: 'Events & Celebrations',
      title: 'Event Filming',
      overview: 'Full-scale event production for corporate, political, and business gatherings.',
      image: 'https://images.pexels.com/photos/8355407/pexels-photo-8355407.jpeg?w=1200',
      deliverables: [
        'Multi-camera coverage',
        'Stage + audience capture',
        'Highlight films',
        'Social cutdowns'
      ]
    },
    {
      id: 'wedding',
      category: 'Events & Celebrations',
      title: 'Wedding Videos',
      overview: 'Cinematic wedding films crafted with emotional storytelling and elegance.',
      image: 'https://images.pexels.com/photos/29860958/pexels-photo-29860958.jpeg?w=1200',
      deliverables: [
        'Full wedding film',
        'Highlight trailer',
        'Couple interviews'
      ]
    },
    {
      id: 'save-the-date',
      category: 'Events & Celebrations',
      title: 'Save The Date',
      overview: 'Creative cinematic invitations designed for digital sharing.',
      image: 'https://images.pexels.com/photos/13832516/pexels-photo-13832516.jpeg?w=1200',
      deliverables: [
        'Pre-wedding shoots',
        'Short invitation film',
        'Social-ready format'
      ]
    },
    {
      id: 'graduation',
      category: 'Events & Celebrations',
      title: 'Graduation Videos',
      overview: 'Professional academic milestone coverage.',
      image: 'https://images.unsplash.com/photo-1597421568622-6ce6c2713887?w=1200',
      deliverables: [
        'Ceremony coverage',
        'Graduate interviews',
        'Highlight reels'
      ]
    },
    {
      id: 'live-av',
      category: 'Events & Celebrations',
      title: 'Event AV Setup with Live Feed',
      overview: 'Complete AV solutions with real-time broadcasting and technical management.',
      image: 'https://images.unsplash.com/photo-1548552554-ac8ad1b37d6b?w=1200',
      deliverables: [
        'LED screen setup',
        'Live streaming',
        'Audio management'
      ]
    },
    {
      id: 'burj-projection',
      category: 'Events & Celebrations',
      title: 'Burj Khalifa Projection',
      overview: 'Large-scale landmark projection production and execution.',
      image: 'https://images.unsplash.com/photo-1597421568622-6ce6c2713887?w=1200',
      deliverables: [
        'Projection planning',
        'Technical execution',
        'Live event management'
      ]
    },
    {
      id: 'reels',
      category: 'Digital & Creative Media',
      title: 'Social Media Reels',
      overview: 'Scroll-optimized short-form vertical content.',
      image: 'https://images.unsplash.com/photo-1627736619924-ce6c159dedca?w=1200',
      deliverables: [
        'Reels production',
        'YouTube Shorts',
        'Ad creatives'
      ]
    },
    {
      id: '2d-animation',
      category: 'Digital & Creative Media',
      title: '2D Animation Videos',
      overview: 'Custom 2D explainer and corporate messaging animations.',
      image: 'https://images.unsplash.com/photo-1599706747273-8e6caa20d436?w=1200',
      deliverables: [
        'Explainer videos',
        'Corporate animations',
        'Campaign graphics'
      ]
    },
    {
      id: '3d-animation',
      category: 'Digital & Creative Media',
      title: '3D Animation Videos',
      overview: 'High-end 3D visual production for immersive storytelling.',
      image: 'https://images.unsplash.com/photo-1705107958312-bd94ca0029bd?w=1200',
      deliverables: [
        '3D product visualization',
        'Architectural renders',
        'Brand storytelling'
      ]
    },
    {
      id: 'vr',
      category: 'Digital & Creative Media',
      title: '360 / VR Videos',
      overview: 'Immersive digital experiences designed for interactive engagement.',
      image: 'https://images.unsplash.com/photo-1552925766-63ab07391e02?w=1200',
      deliverables: [
        '360° video production',
        'Virtual tours',
        'Interactive experiences'
      ]
    },
    {
      id: 'aerial',
      category: 'Digital & Creative Media',
      title: 'Aerial / Drone / Chopper Cinematography',
      overview: 'Professional aerial cinematography for real estate, events, and landscape productions.',
      image: 'https://images.unsplash.com/photo-1547619292-e9ffd95a4de7?w=1200',
      deliverables: [
        'Drone cinematography',
        'Aerial real estate shots',
        'Landscape coverage',
        'Event aerial views'
      ]
    }
  ]

  // Group services by category
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = []
    }
    acc[service.category].push(service)
    return acc
  }, {})

  return (
    <div className="bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cinematic Production Services Built for Modern Brands
            </h1>
            <p className="text-xl text-neutral-400 mb-8">
              From corporate storytelling to large-scale event coverage and immersive digital media — 
              we produce visuals designed to perform across platforms.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
              Book a Consultation
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-neutral-500 text-sm"
        >
          Scroll to Services ↓
        </motion.div>
      </section>

      {/* Services by Category */}
      {Object.entries(groupedServices).map(([category, categoryServices], categoryIndex) => (
        <div key={category}>
          {/* Category Header */}
          <section className=\"py-12 px-4 bg-[#111111]\">
            <div className=\"container mx-auto\">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className=\"text-3xl md:text-4xl font-bold\"
              >
                {category}
              </motion.h2>
            </div>
          </section>

          {/* Services in Category */}
          {categoryServices.map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              className=\"py-24 px-4 scroll-mt-20\"
            >
              <div className=\"container mx-auto\">
                <div className={`grid md:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={index % 2 === 1 ? 'md:order-2' : ''}
                  >
                    <div className=\"relative aspect-video rounded-2xl overflow-hidden group\">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className=\"object-cover group-hover:scale-105 transition-transform duration-500\"
                      />
                      <div className=\"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent\" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={index % 2 === 1 ? 'md:order-1' : ''}
                  >
                    <h3 className=\"text-4xl md:text-5xl font-bold mb-6\">
                      {service.title}
                    </h3>
                    <p className=\"text-lg text-neutral-400 leading-relaxed mb-8\">
                      {service.overview}
                    </p>

                    {service.whyItMatters && (
                      <div className=\"bg-[#111111] border-l-4 border-white p-4 mb-8\">
                        <p className=\"text-neutral-300 italic\">{service.whyItMatters}</p>
                      </div>
                    )}

                    <div className=\"mb-8\">
                      <h4 className=\"text-xl font-semibold mb-4\">What We Deliver:</h4>
                      <ul className=\"space-y-3\">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className=\"flex items-start space-x-3\">
                            <CheckCircle className=\"text-white mt-1 flex-shrink-0\" size={20} />
                            <span className=\"text-neutral-300\">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {service.process && (
                      <div className=\"mb-8\">
                        <h4 className=\"text-xl font-semibold mb-3\">Process:</h4>
                        <p className=\"text-neutral-400\">{service.process}</p>
                      </div>
                    )}

                    <Button className=\"bg-white text-black hover:bg-neutral-200 group\">
                      Discuss Your {service.title.split(' ')[0]} Project
                      <ArrowRight className=\"ml-2 group-hover:translate-x-1 transition-transform\" size={16} />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </section>
          ))}
        </div>
      ))}

      {/* Final CTA Section */}
      <section className=\"py-24 px-4 bg-[#111111]\">
        <div className=\"container mx-auto max-w-4xl text-center\">
          <motion.div {...fadeIn}>
            <h2 className=\"text-4xl md:text-5xl font-bold mb-6\">
              Ready to Produce Something Exceptional?
            </h2>
            <p className=\"text-lg text-neutral-400 mb-8\">
              Whether you need corporate storytelling, event coverage, or immersive digital media — 
              let's create visuals that represent your brand at its highest standard.
            </p>
            <div className=\"flex flex-col sm:flex-row justify-center gap-4\">
              <Button size=\"lg\" className=\"bg-white text-black hover:bg-neutral-200\">
                Book Consultation
              </Button>
              <Link href=\"/contact\">
                <Button size=\"lg\" variant=\"outline\" className=\"border-white text-white hover:bg-white hover:text-black\">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
