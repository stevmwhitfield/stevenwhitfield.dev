'use client';

import MoonIcon from '@heroicons/react/24/outline/MoonIcon';
import SunIcon from '@heroicons/react/24/outline/SunIcon';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>(document.body.dataset.theme!);
  // const nextTheme = theme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className='flex gap-6'>
      <button
        type='button'
        onClick={() => setTheme('dark')}
        className={`w-6 h-6 ${theme === 'dark' ? 'text-text' : 'text-subtext'}`}
      >
        <MoonIcon />
      </button>
      <button
        type='button'
        onClick={() => setTheme('light')}
        className={`w-6 h-6 ${theme === 'light' ? 'text-text' : 'text-subtext'}`}
      >
        <SunIcon />
      </button>
    </div>
  );
};

export default ThemeToggle;
