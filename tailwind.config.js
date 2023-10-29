/** @type {import('tailwindcss').Config} */

const catppuccin = require('@catppuccin/tailwindcss');

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Hacker', 'monospace'],
    },
    extend: {
      colors: {
        background: 'rgb(var(--clr-background), <alpha-value>)',
        text: 'rgb(var(--clr-text), <alpha-value>)',
        subtext: 'rgb(var(--clr-subtext), <alpha-value>)',
        primary: 'rgb(var(--clr-primary), <alpha-value>)',
        accent: 'rgb(var(--clr-accent), <alpha-value>)',
        border: 'rgb(var(--clr-border), <alpha-value>)',
        card: 'rgb(var(--clr-card), <alpha-value>)',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [
    catppuccin({
      prefix: 'ctp',
    }),
  ],
};
