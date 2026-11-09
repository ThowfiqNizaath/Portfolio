import React from 'react'
import { Sun, Moon } from "lucide-react"
import { cn } from '../lib/utils';
import { useAppContext } from '../context/AppContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useAppContext();

  return (
    <button
      className={cn(
        "z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden cursor-pointer"
      )}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

export default ThemeToggle
