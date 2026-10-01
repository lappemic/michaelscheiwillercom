// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-instrument-serif)', ...fontFamily.serif],
      },
      colors: {
        warm: {
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e8e0d4',
          300: '#d4c8b8',
          400: '#b0a08a',
          500: '#8a7a66',
          600: '#6b5d4d',
          700: '#4a3f33',
          800: '#2d2620',
          900: '#1a1512',
          950: '#0f0d0b',
        },
        accent: {
          400: '#e09f5c',
          500: '#c77d3a',
          600: '#a86428',
        },
        primary: {
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e8e0d4',
          300: '#d4c8b8',
          400: '#e09f5c',
          500: '#c77d3a',
          600: '#a86428',
          700: '#4a3f33',
          800: '#2d2620',
          900: '#1a1512',
          950: '#0f0d0b',
        },
        gray: {
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e8e0d4',
          300: '#d4c8b8',
          400: '#b0a08a',
          500: '#8a7a66',
          600: '#6b5d4d',
          700: '#4a3f33',
          800: '#2d2620',
          900: '#1a1512',
          950: '#0f0d0b',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.warm.700'),
            a: {
              color: theme('colors.warm.900'),
              textDecoration: 'underline',
              textDecorationColor: theme('colors.warm.300'),
              textUnderlineOffset: '4px',
              transition: 'color 200ms, text-decoration-color 200ms',
              '&:hover': {
                color: theme('colors.accent.500'),
                textDecorationColor: theme('colors.accent.500'),
              },
              code: { color: theme('colors.warm.800') },
            },
            'h1,h2,h3,h4': {
              fontFamily: 'var(--font-instrument-serif)',
              fontWeight: '400',
              letterSpacing: '-0.025em',
              color: theme('colors.warm.900'),
            },
            strong: {
              color: theme('colors.warm.900'),
            },
            blockquote: {
              borderLeftColor: theme('colors.accent.500'),
              color: theme('colors.warm.600'),
            },
            code: {
              color: theme('colors.warm.800'),
              backgroundColor: theme('colors.warm.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.warm.300'),
            a: {
              color: theme('colors.warm.100'),
              textDecorationColor: theme('colors.warm.700'),
              '&:hover': {
                color: theme('colors.accent.400'),
                textDecorationColor: theme('colors.accent.400'),
              },
              code: { color: theme('colors.warm.200') },
            },
            'h1,h2,h3,h4': {
              color: theme('colors.warm.100'),
            },
            strong: {
              color: theme('colors.warm.100'),
            },
            blockquote: {
              borderLeftColor: theme('colors.accent.500'),
              color: theme('colors.warm.400'),
            },
            code: {
              color: theme('colors.warm.200'),
              backgroundColor: theme('colors.warm.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
