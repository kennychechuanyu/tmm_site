/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#f2f7ff',
          100: '#e3edff',
          200: '#c8daf9',
          300: '#a2bdec',
          400: '#7c9cd5',
          500: '#5c7ebb',
          600: '#4667a2',
          700: '#33528c',
          800: '#264275',
          900: '#1b325e',
          950: '#0e2145',
        },
      },
      fontFamily: {
        serif: ['"Brygada 1918"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.125rem',
        md: '0.1875rem',
        lg: '0.25rem',
        xl: '0.3125rem',
        '2xl': '0.375rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
