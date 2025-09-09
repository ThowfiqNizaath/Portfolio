import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import {Menu, Moon, Sun, X} from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { userAppContext } from '../context/AppContext'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const { isDarkMode, toggleTheme } = userAppContext();

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setIsScrolled(window.screenY > 10)
    //         console.log(window.screenY)
    //     }

    //     window.addEventListener("scroll", handleScroll)
    //     return () => window.removeEventListener("scroll", handleScroll)
    // },[])

    const navItems = [
        {name: "Home", href: "#hero"},
        {name: "About", href: "#about"},
        {name: "Skills", href: "#skills"},
        // {name: "Certificates", href: "#certificates"},
        {name: "Projects", href: "#projects"},
        {name: "Contact", href: "#contact"},
    ]
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        "py-3 shadow-xs",
        "py-5 bg-header-bg/10"
      )}
    >
      <div className="container flex items-center justify-between border bg-primary/10 py-1 rounded-full backdrop-blur-lg">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Thowfiq</span>
            Portfolio
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center space-x-8">
          {navItems.map((value, key) => (
            <a
              href={value.href}
              key={key}
              className="text-foreground/50 hover:text-foreground transition-colors duration-300 capitalize"
            >
              {value.name.toUpperCase()}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <button
          className={cn("md:hidden z-50 p-2 text-foreground cursor-pointer", isMenuOpen && "opacity-0")}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <Menu size={24} />
        </button>
      </div>
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <button
          className="md:hidden z-50 p-2 text-foreground cursor-pointer absolute top-5 right-5"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <X size={24} /> 
        </button>
        <div className="flex flex-col items-center space-y-8 text-xl">
          {navItems.map((value, key) => (
            <a
              href={value.href}
              key={key}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {value.name.toUpperCase()}
            </a>
          ))}
          <button
            className={cn(
              "text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
            )}
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <div className="flex gap-2 items-center">
                <Sun className="h-6 w-6 text-yellow-300" />
                <span> Light</span>
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <Moon className="h-6 w-6 text-blue-900" />
                Dark
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar