/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#242424",
        foreground: "#e3e3e3",
        red: "#ff8585",
        green: "#8fff85",
        blue: "#ade4ff",
        text: "#dbdbdb",
        textDark: "#121212"
      }
    }
  },
  plugins: []
};
