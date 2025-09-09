import { ArrowDown } from 'lucide-react';
import React from 'react'

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-1"
    >
      <div className="container max-w-4wl text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Thowfiq
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Nizaath
            </span>
          </h1>

          <p className='text-lg max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
            MERN Stack Developer skilled in MongoDB, Express.js, React.js, and
            Node.js. Proficient in building responsive interfaces with Tailwind
            CSS and GSAP animations. Experienced in app deployment, GitHub
            version control.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className='cosmic-button'>
                View My Work
            </a>
          </div>
        </div>
      </div>

      <div
    //   className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce'
    className='absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center flex-col animate-bounce'
      >
        <a href="#about" className="text-sm text-foreground mb-2">Scroll</a>
        <span className="">
            <ArrowDown className="w-5 h-5 text-primary"/>
        </span>
      </div>
    </section>
  );
}

export default HeroSection