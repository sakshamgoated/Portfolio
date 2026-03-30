/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cy-red': 'var(--cy-red)',
        'cy-dark': 'var(--cy-dark)',
        'cy-light': 'var(--cy-light)',
      },
      fontFamily: {
        sans: ['"Space Mono"', 'monospace'],
        heading: ['Oswald', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '6px 6px 0px var(--cy-dark)',
        'brutal-hover': '8px 8px 0px var(--cy-dark)',
      }
    },
  },
  plugins: [],
};
