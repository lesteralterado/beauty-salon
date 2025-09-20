/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Core System */
        background: 'var(--color-background)', /* Pure canvas */
        foreground: 'var(--color-foreground)', /* Extended reading */
        border: 'var(--color-border)', /* Glassmorphism borders */
        input: 'var(--color-input)', /* Subtle depth */
        ring: 'var(--color-ring)', /* Rose gold focus */
        
        /* Card System */
        card: {
          DEFAULT: 'var(--color-card)', /* Subtle depth */
          foreground: 'var(--color-card-foreground)' /* Extended reading */
        },
        
        /* Popover System */
        popover: {
          DEFAULT: 'var(--color-popover)', /* Pure canvas */
          foreground: 'var(--color-popover-foreground)' /* Extended reading */
        },
        
        /* Muted System */
        muted: {
          DEFAULT: 'var(--color-muted)', /* Pearl luminosity */
          foreground: 'var(--color-muted-foreground)' /* Clear hierarchy */
        },
        
        /* Primary Brand */
        primary: {
          DEFAULT: 'var(--color-primary)', /* Rose gold warmth */
          foreground: 'var(--color-primary-foreground)' /* White */
        },
        
        /* Secondary Brand */
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* Pearl luminosity */
          foreground: 'var(--color-secondary-foreground)' /* Extended reading */
        },
        
        /* Accent System */
        accent: {
          DEFAULT: 'var(--color-accent)', /* Deep plum */
          foreground: 'var(--color-accent-foreground)' /* White */
        },
        
        /* Status Colors */
        success: {
          DEFAULT: 'var(--color-success)', /* Natural confidence */
          foreground: 'var(--color-success-foreground)' /* White */
        },
        
        warning: {
          DEFAULT: 'var(--color-warning)', /* Gentle urgency */
          foreground: 'var(--color-warning-foreground)' /* Extended reading */
        },
        
        error: {
          DEFAULT: 'var(--color-error)', /* Helpful concern */
          foreground: 'var(--color-error-foreground)' /* White */
        },
        
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* Helpful concern */
          foreground: 'var(--color-destructive-foreground)' /* White */
        },
        
        /* Custom Brand Colors */
        'rose-gold': '#E8B4A0', /* Rose gold warmth */
        'pearl': '#F5F0F6', /* Pearl luminosity */
        'deep-plum': '#8B5A8C', /* Deep plum */
        'pure-canvas': '#FEFEFE', /* Pure canvas */
        'subtle-depth': '#F9F7F8', /* Subtle depth */
        'extended-reading': '#2D2D2D', /* Extended reading */
        'clear-hierarchy': '#6B6B6B', /* Clear hierarchy */
        'natural-confidence': '#7FB069', /* Natural confidence */
        'gentle-urgency': '#E8B86D', /* Gentle urgency */
        'helpful-concern': '#D67B7B', /* Helpful concern */
        'vibrant-rose': '#FF6B9D', /* Vibrant rose */
        'deep-graphite': '#1A202C', /* Deep graphite */
        'refined-slate': '#718096', /* Refined slate */
        'deep-amethyst': '#8B5FBF', /* Deep amethyst */
        'rose-morphism': '#E8B4CB', /* Rose gold morphism */
        'pearl-luminescence': '#F5F0FF', /* Pearl luminescence */
        'charcoal-authority': '#2D3748' /* Charcoal authority */
      },
      fontFamily: {
        'headline': ['Playfair Display', 'serif'], /* Luxury headlines */
        'body': ['Inter', 'sans-serif'], /* Body content */
        'cta': ['Montserrat', 'sans-serif'], /* Call-to-action */
        'accent': ['Cormorant Garamond', 'serif'], /* Accent text */
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }]
      },
      spacing: {
        '18': '4.5rem', /* 72px */
        '88': '22rem', /* 352px */
        '128': '32rem', /* 512px */
        '144': '36rem' /* 576px */
      },
      borderRadius: {
        'lg': '16px', /* Brand cards */
        'xl': '20px', /* Hero elements */
        '2xl': '24px', /* Major sections */
        '3xl': '32px' /* Dramatic elements */
      },
      boxShadow: {
        'subtle': '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.06)',
        'floating': '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
        'glassmorphism': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'morph': '0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.08)'
      },
      backdropBlur: {
        'glass': '15px',
        'strong': '25px'
      },
      animation: {
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        'float-bubble': 'floatBubble 8s ease-in-out infinite',
        'text-morph': 'textMorph 2.5s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'morph-3d': 'morph3d 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      },
      keyframes: {
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        floatBubble: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(20px, -15px) rotate(120deg)' },
          '66%': { transform: 'translate(-15px, -20px) rotate(240deg)' }
        },
        textMorph: {
          '0%, 100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
          '50%': { clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0 100%)' }
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' }
        },
        morph3d: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) translateZ(0px)' },
          '100%': { transform: 'rotateX(15deg) rotateY(5deg) translateZ(50px)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms'
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ]
}