import { ArrowDown } from 'lucide-react';
import React from 'react'

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 snap-center"
    >
      <div className="container max-w-4xl text-center z-10">
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

          <div className="opacity-0 animate-fade-in-delay-2">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/50 bg-white text-primary dark:bg-primary/10 text-sm md:text-base font-medium shadow-xs">
              Junior MERN Full Stack Developer | Freshworks App Developer
            </span>
          </div>

          <p className="text-base md:text-lg max-w-2xl mx-auto text-muted-foreground opacity-0 animate-fade-in-delay-3">
            Experienced in building React 18 & Node.js applications for Freshdesk,
            Freshservice, Freshsales, and Freshchat using the Freshworks Developer Kit (FDK).
            Specialized in serverless event handlers, REST & GraphQL integrations, and MongoDB multi-tenant services.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="#about"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-medium"
            >
              Experience & Bio
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center flex-col animate-bounce">
        <a href="#about" className="text-sm text-foreground mb-2">Scroll</a>
        <span>
          <ArrowDown className="w-5 h-5 text-primary"/>
        </span>
      </div>
    </section>
  );
}

export default HeroSection
