import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f8f7f4',
          100: '#f0ede6',
          200: '#e1dbc9',
          300: '#cfc4a4',
          400: '#bba67f',
          500: '#a08862',
          600: '#8b7355',
          700: '#735f47',
          800: '#5e4e3d',
          900: '#4d4133',
          950: '#2a2218',
        },
        secondary: {
          50: '#f9f9f9',
          100: '#f2f2f2',
          200: '#e8e8e8',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
          950: '#2c2c2c',
        },
        accent: {
          50: '#fdfcfa',
          100: '#faf8f3',
          200: '#f4f0e6',
          300: '#ebe4d4',
          400: '#dfd4bf',
          500: '#d1c2a5',
          600: '#c0ab8a',
          700: '#a08862',
          800: '#8b7355',
          900: '#735f47',
          950: '#3d3225',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
    },
  },
  plugins: [],
};

export default config;