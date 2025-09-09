import React, { useEffect, useState } from 'react'
import { Sun, Moon } from "lucide-react"
import { cn } from '../lib/utils';
import { userAppContext } from '../context/AppContext';

const ThemeToggle = () => {
    const { isDarkMode, setIsDarkMode, toggleTheme } = userAppContext();

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if(storedTheme === "dark"){
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        }else{
            setIsDarkMode(false);
            localStorage.setItem("theme", "light");
        }
    },[])

    
  return (
    <button className={cn(
      "z-50 p-2 rounded-full transition-colors duration-300",
      "focus:outline-hidden cursor-pointer"
    )} onClick={toggleTheme}>
        {
            isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className='h-6 w-6 text-blue-900'/>
        }
    </button>
  )
}

// fixed max-sm:hidden top-5

export default ThemeToggle