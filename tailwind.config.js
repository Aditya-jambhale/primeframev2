/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'outfit': ['var(--font-outfit)', 'Inter', 'sans-serif'],
        'sans': ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        'syne': ['var(--font-syne)', 'sans-serif'],
      },
      colors: {
        // HSL Dynamic Tokens
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },

        // PrimeFrame Specific Keepers
        pf: {
          black: '#000000',
          dark: '#050505',
          card: '#0a0a0a',
          navy: '#000000',
          navyMid: '#050505',
          navyLight: '#0a0a0a',
          textMuted: '#CBD5E1',
          yellow: '#EAB308',
        }
      },
      backgroundImage: {
        'hero-gradient': 'var(--hero-gradient)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
      },
      fontSize: {
        'hero': ['clamp(2rem, 6vw, 6.5rem)', { lineHeight: '1.1', fontWeight: '800' }],
        'section-title': ['clamp(1.75rem, 4vw, 3.5rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'card-title': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }]
      },
      boxShadow: {
        'subtle': '0 1px 2px rgba(0,0,0,0.05)',
        'card': '0 10px 15px -3px rgba(0,0,0,0.05)',
        'card-hover': '0 20px 25px -5px rgba(0,0,0,0.1)',
        'glow': '0 0 15px rgba(234, 179, 8, 0.15)'
      },
      transitionProperty: {
        'smooth': 'var(--transition)',
        'fast': 'var(--transition-fast)',
        'height': 'height',
        'spacing': 'margin, padding',
        'width': 'width',
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke'
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '5000': '5000ms'
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      backdropBlur: {
        'xs': '2px'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },

        // Enhanced entrance animations
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.8) rotate(-5deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' }
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },

        // Premium animations
        'bounce-in': {
          '0%': { opacity: '0', transform: 'scale(0.3) rotate(-10deg)' },
          '25%': { opacity: '0.7', transform: 'scale(0.7) rotate(-5deg)' },
          '50%': { opacity: '1', transform: 'scale(1.1) rotate(2deg)' },
          '75%': { transform: 'scale(0.95) rotate(-1deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' }
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.5) rotate(-15deg)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05) rotate(5deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' }
        },
        'slide-in-bottom': {
          '0%': { opacity: '0', transform: 'translateY(100%) scale(0.8)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        },
        'slide-in-top': {
          '0%': { opacity: '0', transform: 'translateY(-100%) scale(0.8)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-100%) rotateY(-90deg)' },
          '100%': { opacity: '1', transform: 'translateX(0) rotateY(0deg)' }
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(100%) rotateY(90deg)' },
          '100%': { opacity: '1', transform: 'translateX(0) rotateY(0deg)' }
        },

        // Cosmic background animations
        'cosmic-float': {
          '0%, 100%': { transform: 'translateY(0px) rotateZ(0deg)' },
          '25%': { transform: 'translateY(-20px) rotateZ(1deg)' },
          '50%': { transform: 'translateY(-10px) rotateZ(-1deg)' },
          '75%': { transform: 'translateY(-15px) rotateZ(0.5deg)' }
        },
        'cosmic-drift': {
          '0%': { transform: 'translateX(0px) translateY(0px) scale(1)' },
          '33%': { transform: 'translateX(30px) translateY(-20px) scale(1.1)' },
          '66%': { transform: 'translateX(-20px) translateY(15px) scale(0.9)' },
          '100%': { transform: 'translateX(0px) translateY(0px) scale(1)' }
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' }
        },
        'aurora': {
          '0%, 100%': { opacity: '0.3', transform: 'translateX(-10px) scale(1)' },
          '25%': { opacity: '0.8', transform: 'translateX(10px) scale(1.05)' },
          '50%': { opacity: '0.6', transform: 'translateX(5px) scale(0.95)' },
          '75%': { opacity: '0.9', transform: 'translateX(-5px) scale(1.02)' }
        },
        'nebula-pulse': {
          '0%, 100%': { opacity: '0.1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(1.1)' }
        },

        // Interactive animations
        'rotate-in': {
          '0%': { opacity: '0', transform: 'rotate(-360deg) scale(0.2)' },
          '100%': { opacity: '1', transform: 'rotate(0deg) scale(1)' }
        },
        'flip-in-x': {
          '0%': { opacity: '0', transform: 'perspective(400px) rotateX(90deg) scale(0.8)' },
          '40%': { transform: 'perspective(400px) rotateX(-15deg) scale(1.05)' },
          '70%': { transform: 'perspective(400px) rotateX(15deg) scale(0.95)' },
          '100%': { opacity: '1', transform: 'perspective(400px) rotateX(0deg) scale(1)' }
        },
        'flip-in-y': {
          '0%': { opacity: '0', transform: 'perspective(400px) rotateY(90deg) scale(0.8)' },
          '40%': { transform: 'perspective(400px) rotateY(-15deg) scale(1.05)' },
          '70%': { transform: 'perspective(400px) rotateY(15deg) scale(0.95)' },
          '100%': { opacity: '1', transform: 'perspective(400px) rotateY(0deg) scale(1)' }
        },

        // Glow and effect animations
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(234, 179, 8, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(234, 179, 8, 0.8)' }
        },
        'multi-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(234, 179, 8, 0.5), 0 0 40px rgba(147, 51, 234, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(234, 179, 8, 0.8), 0 0 60px rgba(147, 51, 234, 0.6)'
          }
        },
        'rainbow-glow': {
          '0%': { boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)' },
          '16%': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.5)' },
          '33%': { boxShadow: '0 0 20px rgba(234, 179, 8, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)' },
          '66%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '83%': { boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)' }
        },

        // Text and content animations
        'shimmer': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' }
        },
        'typewriter': {
          '0%': { width: '0', borderRight: '2px solid' },
          '99%': { borderRight: '2px solid' },
          '100%': { width: '100%', borderRight: 'none' }
        },
        'text-reveal': {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' }
        },

        // Micro-interactions
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-2deg) scale(1)' },
          '50%': { transform: 'rotate(2deg) scale(1.05)' }
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-8px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(8px)' }
        },
        'heartbeat': {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '40%': { transform: 'scale(1)' },
          '60%': { transform: 'scale(1.1)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1deg)' }
        },
        'swing': {
          '20%': { transform: 'rotate(15deg) scale(1.1)' },
          '40%': { transform: 'rotate(-10deg) scale(0.95)' },
          '60%': { transform: 'rotate(5deg) scale(1.05)' },
          '80%': { transform: 'rotate(-5deg) scale(0.98)' },
          '100%': { transform: 'rotate(0deg) scale(1)' }
        },

        // Background effects
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        'gradient-x': {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(100%)' }
        },
        'border-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'morph': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' }
        }
      },
      animation: {
        // Basic animations
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'marquee': 'marquee 35s linear infinite',

        // Enhanced entrance animations
        'fade-in': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slide-up 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fade-in-down': 'fade-in-down 0.8s ease-out',
        'fade-in-left': 'fade-in-left 0.8s ease-out',
        'fade-in-right': 'fade-in-right 0.8s ease-out',

        // Premium entrance animations
        'bounce-in': 'bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'zoom-in': 'zoom-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-in-bottom': 'slide-in-bottom 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-top': 'slide-in-top 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-left': 'slide-in-left 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-right': 'slide-in-right 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
        'rotate-in': 'rotate-in 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'flip-in-x': 'flip-in-x 1s cubic-bezier(0.4, 0, 0.2, 1)',
        'flip-in-y': 'flip-in-y 1s cubic-bezier(0.4, 0, 0.2, 1)',

        // Cosmic background animations
        'cosmic-float': 'cosmic-float 8s ease-in-out infinite',
        'cosmic-drift': 'cosmic-drift 12s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'aurora': 'aurora 6s ease-in-out infinite',
        'nebula-pulse': 'nebula-pulse 4s ease-in-out infinite',

        // Glow effects
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'multi-glow': 'multi-glow 3s ease-in-out infinite',
        'rainbow-glow': 'rainbow-glow 4s linear infinite',

        // Interactive animations
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(40) forwards',
        'text-reveal': 'text-reveal 1.5s ease-out forwards',
        'wiggle': 'wiggle 0.8s ease-in-out infinite',
        'shake': 'shake 0.6s ease-in-out',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'swing': 'swing 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',

        // Background effects
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'border-spin': 'border-spin 1s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',

        // Stagger animations with cosmic timing
        'fade-in-stagger-1': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s both',
        'fade-in-stagger-2': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both',
        'fade-in-stagger-3': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both',
        'fade-in-stagger-4': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both',
        'fade-in-stagger-5': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both',

        // Cosmic stagger variations
        'cosmic-stagger-1': 'cosmic-float 8s ease-in-out infinite 0s',
        'cosmic-stagger-2': 'cosmic-float 8s ease-in-out infinite 1s',
        'cosmic-stagger-3': 'cosmic-float 8s ease-in-out infinite 2s',
        'cosmic-stagger-4': 'cosmic-float 8s ease-in-out infinite 3s',
        'cosmic-stagger-5': 'cosmic-float 8s ease-in-out infinite 4s',

        // Utility animations with better timing
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 8s linear infinite',
        'ping-slow': 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',

        // Button and interaction animations
        'button-press': 'scale-in 0.15s ease-out',
        'button-hover': 'float 2s ease-in-out infinite',
        'card-hover': 'zoom-in 0.3s ease-out',
        'link-hover': 'wiggle 0.5s ease-in-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')],
}