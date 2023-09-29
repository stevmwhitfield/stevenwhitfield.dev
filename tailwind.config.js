/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "[data-theme='dark'"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "background": "rgb(var(--clr-background) / <alpha-value>)",
        "text": "rgb(var(--clr-text) / <alpha-value>)",
        "text-alt": "rgb(var(--clr-text-alt) / <alpha-value>)",
        "primary": "rgb(var(--clr-primary) / <alpha-value>)",
        "border": "rgb(var(--clr-border) / <alpha-value>)"
      }
    }
  },
  plugins: []
};
