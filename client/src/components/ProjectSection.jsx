import React, { useEffect, useRef, useState } from "react";
import { projects } from "../assets/assert";
import { ArrowRight, ExternalLink, Lock, ShieldCheck, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub, FaYoutube } from "react-icons/fa";

const ProjectSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const scrollToIndex = (index) => {
    const target = Math.max(0, Math.min(projects.length - 1, index));
    const cardEl = cardRefs.current[target];
    if (cardEl && containerRef.current) {
      containerRef.current.scrollTo({
        left: cardEl.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(target);
    }
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    let closestIndex = 0;
    let minDiff = Infinity;
    cardRefs.current.forEach((el, idx) => {
      if (!el) return;
      const diff = Math.abs(el.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });
    setActiveIndex(closestIndex);
  };

  // Re-align active card on window resize
  useEffect(() => {
    const handleResize = () => {
      const cardEl = cardRefs.current[activeIndex];
      if (cardEl && containerRef.current) {
        containerRef.current.scrollTo({
          left: cardEl.offsetLeft,
          behavior: "auto",
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  return (
    <section id="projects" className="py-24 px-4 relative snap-center">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Production Freshworks apps, enterprise workflow automation systems, and full-stack MERN platforms built with strict performance, scalability, and security standards.
        </p>

        {/* Row Flex Container: Exactly Same max-w-4xl Width & Structure as Certificate Section */}
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex flex-row overflow-x-hidden w-full max-w-4xl mx-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project, index) => {
              const cardNumber = String(index + 1).padStart(2, "0");
              const totalCards = String(projects.length).padStart(2, "0");

              return (
                <div
                  key={project.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="w-full min-w-full max-w-full shrink-0 flex-none snap-center px-1"
                >
                  {/* Cosmic Glassmorphic Card (Exact Same Width & Height as Certificate Card) */}
                  <div className="w-full max-w-full rounded-3xl border border-primary/40 bg-slate-950/90 backdrop-blur-2xl shadow-[0_15px_45px_rgba(139,92,246,0.22)] overflow-hidden transition-all duration-500 hover:border-primary/80 hover:shadow-[0_20px_55px_rgba(139,92,246,0.32)] flex flex-col justify-between">
                    {/* Top Metadata Ribbon */}
                    <div className="px-6 py-4 bg-primary/5 border-b border-border/50 flex flex-wrap items-center justify-between gap-3 w-full min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-primary/20 text-primary border border-primary/30 flex items-center gap-1.5 shadow-sm">
                          <Sparkles size={12} />
                          {cardNumber} / {totalCards}
                        </span>
                        {project.subtitle && (
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary/80 text-foreground/90 border border-border/60">
                            {project.subtitle}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {project.isEnterprise && (
                          <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-medium flex items-center gap-1.5 shadow-sm">
                            <ShieldCheck size={13} />
                            Internal Enterprise App
                          </span>
                        )}
                        {project.youtubeUrl && (
                          <span className="px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-medium flex items-center gap-1.5 shadow-sm">
                            <FaYoutube size={13} />
                            Video Demo
                          </span>
                        )}
                        {project.demoUrl && !project.youtubeUrl && (
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 text-xs font-medium flex items-center gap-1.5 shadow-sm">
                            <ExternalLink size={13} />
                            Live Web App
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Project Visual / Image Stage (Exact Same Height h-72 sm:h-80 md:h-[350px] as Certificate) */}
                    <div className="relative w-full max-w-full h-72 sm:h-80 md:h-[350px] bg-black/60 flex items-center justify-center p-4 sm:p-6 group overflow-hidden">
                      <div className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent pointer-events-none" />

                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="max-h-full max-w-full object-contain rounded-xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 border border-white/5 relative z-10"
                        />
                      ) : (
                        <div className="text-center space-y-3 relative z-10 p-6 max-w-md">
                          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-semibold border border-primary/30">
                            <Sparkles size={14} />
                            Freshworks Production Architecture
                          </div>
                          <h4 className="text-2xl md:text-3xl font-bold text-foreground">
                            {project.title}
                          </h4>
                          {project.isEnterprise && (
                            <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-background/50 px-3 py-1 rounded-md border border-border/50">
                              <Lock size={12} className="text-amber-400" />
                              Proprietary Client Codebase &bull; Internal Integration
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Info & Action Bar (Matching Certificate Card Spacing with Buttons Down Below) */}
                    <div className="p-6 md:p-8 bg-card/60 flex flex-col justify-between gap-4 border-t border-border/50 text-left min-h-[220px] w-full min-w-0 max-w-full">
                      {/* Project Title, Description & Tech Stack */}
                      <div className="space-y-3 w-full min-w-0">
                        <div className="space-y-1.5 w-full min-w-0">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug">
                            {project.title}
                          </h3>
                          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-3 break-words">
                            {project.description}
                          </p>
                        </div>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-1.5 w-full min-w-0">
                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-0.5 rounded-full border border-border/70 bg-background/80 text-[11px] font-medium text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Buttons Down Below (Full Width Row, Never Squeezed or Clipped) */}
                      <div className="pt-3 border-t border-border/40 flex flex-wrap items-center justify-between gap-4 w-full min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          {project.youtubeUrl && (
                            <a
                              href={project.youtubeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cosmic-button inline-flex items-center gap-2 text-xs md:text-sm font-semibold bg-red-600 hover:bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.4)]"
                            >
                              <FaYoutube size={16} />
                              <span>Watch Demo</span>
                            </a>
                          )}

                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cosmic-button inline-flex items-center gap-2 text-xs md:text-sm font-semibold"
                            >
                              <span>Live Demo</span>
                              <ExternalLink size={15} />
                            </a>
                          )}

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 rounded-full border border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300 inline-flex items-center gap-2 text-xs md:text-sm font-semibold bg-background/60"
                            >
                              <FaGithub size={16} />
                              <span>Source Code</span>
                            </a>
                          )}

                          {project.isEnterprise && (
                            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground italic">
                              <Lock size={13} className="text-amber-400" />
                              Enterprise Codebase (NDA Protected)
                            </span>
                          )}
                        </div>

                        {/* Project Counter */}
                        <span className="text-xs text-muted-foreground font-mono">
                          Project {cardNumber} / {totalCards}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Clickable Navigation Points: 1:1 Mapping for all 7 Projects */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <div className="flex items-center gap-3 bg-slate-950/80 border border-primary/30 px-5 py-2.5 rounded-full backdrop-blur-xl shadow-lg">
              {/* Previous Point Shortcut */}
              <button
                onClick={() => scrollToIndex(activeIndex - 1)}
                disabled={activeIndex === 0}
                className={`p-1.5 rounded-full text-foreground hover:text-primary transition-all duration-300 cursor-pointer ${
                  activeIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:scale-110 active:scale-95"
                }`}
                aria-label="Previous Project"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Clickable Points */}
              <div className="flex items-center gap-2 px-1">
                {projects.map((proj, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={proj.id}
                      onClick={() => scrollToIndex(idx)}
                      title={proj.title}
                      className={`group relative flex items-center justify-center transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "w-8 h-8 rounded-full bg-primary text-primary-foreground font-mono font-bold text-xs shadow-[0_0_15px_rgba(139,92,246,0.8)] scale-110"
                          : "w-7 h-7 rounded-full bg-secondary/80 text-muted-foreground hover:text-foreground hover:bg-secondary font-mono text-xs border border-border/60 hover:border-primary/50"
                      }`}
                      aria-label={`Jump to project ${idx + 1}: ${proj.title}`}
                    >
                      <span>{idx + 1}</span>
                    </button>
                  );
                })}
              </div>

              {/* Next Point Shortcut */}
              <button
                onClick={() => scrollToIndex(activeIndex + 1)}
                disabled={activeIndex === projects.length - 1}
                className={`p-1.5 rounded-full text-foreground hover:text-primary transition-all duration-300 cursor-pointer ${
                  activeIndex === projects.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:scale-110 active:scale-95"
                }`}
                aria-label="Next Project"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <p className="text-xs text-muted-foreground font-medium">
              Project {activeIndex + 1} of {projects.length} &bull; Click any point to view
            </p>
          </div>
        </div>

        {/* GitHub External Explore Link */}
        <div className="mt-12 text-center mx-auto group w-fit">
          <a
            className="cosmic-button inline-flex items-center gap-2"
            href="https://github.com/ThowfiqNizaath"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore More on GitHub
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
