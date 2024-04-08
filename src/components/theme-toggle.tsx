'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <Button size={'icon'} className='ml-auto' onClick={toggleTheme}>
      <Sun className='scale-100 transition-all dark:scale-0' />
      <Moon className='absolute scale-0 transition-all dark:scale-100' />
    </Button>
  );
}
