import type { Config } from 'tailwindcss';
import ctp from '@catppuccin/tailwindcss';

const config = {
  content: [
    './src/components/**/*.{ts,tsx,mdx}',
    './src/app/**/*.{ts,tsx,mdx}'
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)']
      }
    }
  },
  plugins: [ctp({ prefix: 'ctp' })]
} satisfies Config;
export default config;
