import type { Config } from 'tailwindcss';
import ctp from '@catppuccin/tailwindcss';

const config = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: ['class'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Atkinson Hyperlegible', 'sans-serif'],
            },
            fontSize: {
                xs: ['0.625rem', '0.75rem'],
                base: ['1.125rem', '1.5rem'],
                lg: ['1.25rem', '1.75rem'],
                xl: ['1.5rem', '2rem'],
                '2xl': ['2rem', '2.5rem'],
            },
            borderRadius: {
                lg: '0.5rem',
                md: 'calc(0.5rem - 2px)',
                sm: 'calc(0.5rem - 4px)',
            },
        },
    },
    plugins: [ctp({ prefix: 'ctp' })],
} satisfies Config;

export default config;
