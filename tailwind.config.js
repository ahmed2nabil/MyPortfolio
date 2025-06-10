/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0a192f',
        'secondary': '#64ffda',
        'text-primary': '#ccd6f6',
        'text-secondary': '#8892b0',
        'background': '#0a192f',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}