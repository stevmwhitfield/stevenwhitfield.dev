import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Link from 'next/link';
import './globals.css';
import 'devicon/devicon.min.css';

import ThemeToggle from '@/components/theme-toggle';
import { ThemeProvider } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export const metadata = {
  title: 'Steven Whitfield',
  description: 'Software Engineer @ Cognizant'
} satisfies Metadata;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <header className='pt-6 mb-12'>
            <div className='flex'>
              <Button size={'icon'} asChild>
                <Link href='https://www.linkedin.com/in/stevenmwhitfield/'>
                  <i className='devicon-linkedin-plain' />
                </Link>
              </Button>
              <Button size={'icon'} asChild>
                <Link href='https://github.com/stevmwhitfield/'>
                  <i className='devicon-github-plain' />
                </Link>
              </Button>
              <ThemeToggle />
            </div>
          </header>
          <main>{children}</main>
          <footer className='pb-6 mt-12'>
            <div className='h-px bg-ctp-surface0 mb-6' />
            <div className='flex flex-col sm:flex-row sm:justify-between'>
              <p className='mb-2 sm:mb-0'>© 2024 Steven Whitfield</p>
              <Link
                href='https://github.com/stevmwhitfield/stevenwhitfield.dev'
                className='flex items-center'
              >
                <Github className='mr-2' />
                Source code
              </Link>
            </div>
          </footer>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
