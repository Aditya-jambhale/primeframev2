# PrimeFrame Productions Website

A premium, production-ready multi-page website for PrimeFrame Productions - a Dubai-based cinematic video production agency.

## 🎬 Overview

PrimeFrame Productions is a premium video production house serving clients across India, Dubai, and UAE. This website showcases their comprehensive services, from corporate films to event coverage and immersive digital media.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings), Inter (body)

## 🎨 Design System

### Colors
- **Primary Background**: #000000 (Pure Black)
- **Secondary Sections**: #111111 / #1A1A1A (Gray)
- **Accent Gray**: #2A2A2A
- **Text Primary**: #FFFFFF
- **Text Secondary**: #A1A1AA
- **Accent Gold**: #C6A55C (optional highlights)

### Typography
- **Headings**: Playfair Display
- **Body**: Inter

## 📄 Pages

1. **Home** (`/`)
   - Hero section with cinematic background
   - Client logo marquee
   - About the agency
   - Why videography matters (detailed explanation)
   - Services grid (18 services)
   - Equipment showcase
   - Process timeline (5 steps)
   - Testimonial preview
   - Contact form

2. **About** (`/about`)
   - Founder story and journey
   - Timeline from 2019-2025
   - Vision statement

3. **Services** (`/services`)
   - Comprehensive service listings
   - Anchor navigation (#service-id)
   - Categorized by:
     - Corporate & Brand Production
     - Events & Celebrations
     - Digital & Creative Media

4. **Testimonials** (`/testimonials`)
   - Client testimonials with filtering
   - Video testimonials
   - Client logos

5. **Contact** (`/contact`)
   - Contact form
   - Direct contact options (WhatsApp, Phone)
   - Operating regions display

## 🛠️ Features

- **Sticky Navigation**: Responsive navbar with mobile hamburger menu
- **Smooth Scroll**: Anchor-based navigation with smooth scrolling
- **Framer Motion Animations**: Subtle, professional animations throughout
- **Floating Action Buttons**: WhatsApp and Call buttons
- **Responsive Design**: Mobile-first, fully responsive
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Anchor Navigation**: Services link to specific sections (e.g., `/services#trade-show`)

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn package manager

### Installation

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
/app
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js          # Contact form API
│   ├── about/
│   │   └── page.jsx              # About page
│   ├── services/
│   │   └── page.jsx              # Services page
│   ├── testimonials/
│   │   └── page.jsx              # Testimonials page
│   ├── contact/
│   │   └── page.jsx              # Contact page
│   ├── layout.js                 # Root layout
│   ├── page.js                   # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── ui/                       # shadcn components
│   ├── Navigation.jsx            # Main navigation
│   ├── Footer.jsx                # Footer component
│   └── FloatingActions.jsx       # Floating WhatsApp/Call buttons
├── lib/
│   └── utils.js                  # Utility functions
├── tailwind.config.js            # Tailwind configuration
└── package.json
```

## 🎯 Key Components

### Navigation
- Sticky header with blur effect on scroll
- Mobile-responsive hamburger menu
- "Book Consultation" CTA button

### Services
- 18 comprehensive service offerings
- Anchor-based navigation
- Category organization
- Detailed service pages with deliverables

### Process Timeline
- 5-step production process
- Zig-zag desktop layout
- Vertical mobile timeline
- Animated on scroll

## 🖼️ Image Placeholders

All images are currently high-quality placeholders from Unsplash and Pexels. Replace with actual:
- Client footage
- Equipment photos
- Behind-the-scenes shots
- Founder portraits
- Project screenshots

Look for comments like:
```javascript
/* Replace with actual equipment image provided by client */
```

## 📧 Contact Form

The contact form currently logs submissions to console. In production, integrate with:
- SendGrid
- Resend
- Nodemailer
- Your preferred email service

See `/app/api/contact/route.js` for implementation.

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js` and `globals.css`

### Fonts
Fonts are loaded from Google Fonts in `globals.css`. Change imports to use different fonts.

### Content
All content is directly in page files for easy editing. Update:
- Service descriptions
- Timeline content
- Testimonials
- Contact information

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔗 Important Links

- Contact WhatsApp: Update in `FloatingActions.jsx` and contact page
- Contact Phone: Update in `FloatingActions.jsx` and contact page
- Email: Update in footer and contact page

## 📝 TODO for Production

- [ ] Replace all image placeholders with actual client images
- [ ] Update contact information (phone, email, WhatsApp)
- [ ] Integrate contact form with email service
- [ ] Add client logos to logo marquee
- [ ] Add actual testimonial videos
- [ ] Replace video background in hero (if desired)
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Configure SEO meta tags with actual keywords
- [ ] Add favicon and app icons
- [ ] Test all anchor navigation links
- [ ] Optimize images for production
- [ ] Add SSL certificate

## 🚀 Deployment

This Next.js app can be deployed to:
- Vercel (recommended)
- Netlify
- AWS
- Any Node.js hosting platform

## 📄 License

Prorietary - PrimeFrame Productions

## 🤝 Support

For support or questions, contact PrimeFrame Productions.

---

**Built with precision and attention to detail** - just like PrimeFrame's production philosophy.
