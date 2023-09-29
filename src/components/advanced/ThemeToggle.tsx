"use client";

import MoonIcon from "@heroicons/react/24/solid/MoonIcon";
import SunIcon from "@heroicons/react/24/solid/SunIcon";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>(document.body.dataset.theme!);
  const nextTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={() => setTheme(nextTheme)} className="w-6 h-6 hover:text-primary hover:pointer">
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
