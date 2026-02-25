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
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        syne: ['var(--font-syne)', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },

      colors: {
        // PrimeFrame Standard Palette (Yellow/Black/White)
        pf: {
          black: '#000000',
          dark: '#050505',
          card: '#0a0a0a',
          navy: '#000000',
          navyMid: '#050505',
          navyLight: '#0a0a0a',
          textMuted: '#CBD5E1',
          yellow: '#EAB308',
        },

        // Accent
        accent: {
          DEFAULT: '#EAB308',
          foreground: '#000000',
        },

        secondary: {
          DEFAULT: '#111111',
          foreground: '#FFFFFF',
        },

        // Theme compatibility
        border: 'rgba(255, 255, 255, 0.08)',
        input: 'rgba(255, 255, 255, 0.05)',
        ring: '#EAB308',
        background: '#000000',
        foreground: '#F8FAFC',
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 35s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}