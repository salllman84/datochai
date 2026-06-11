import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom colors as requested
        forest: {
          900: '#006400',
          800: '#1a7a1a',
          700: '#2d8a2d'
        },
        gold: {
          600: '#b8960f',
          500: '#D4AF37',
          400: '#e0c84a'
        },
        crimson: {
          700: '#a00e25',
          600: '#C8102E',
          500: '#d4213f'
        },
        nvidia: {
          green: '#76B900'
        },
        slate: {
          900: '#0F172A',
          800: '#1e293b'
        },
        neutral: {
          50: '#F8F9FA'
        }
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1.0' }
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
export default config;