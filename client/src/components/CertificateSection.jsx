import React, { useEffect, useRef, useState } from 'react';
import { certificates } from '../assets/assert';
import { Award, Building2, ChevronLeft, ChevronRight, ExternalLink, Globe, Sparkles } from 'lucide-react';

const CertificateSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const scrollToIndex = (index) => {
    const target = Math.max(0, Math.min(certificates.length - 1, index));
    const cardEl = cardRefs.current[target];
    if (cardEl && containerRef.current) {
      containerRef.current.scrollTo({
        left: cardEl.offsetLeft,
        behavior: 'smooth',
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

  // Keep active card aligned on window resize
  useEffect(() => {
    const handleResize = () => {
      const cardEl = cardRefs.current[activeIndex];
      if (cardEl && containerRef.current) {
        containerRef.current.scrollTo({
          left: cardEl.offsetLeft,
          behavior: 'auto',
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);

  return (
    <section id="certificates" className="py-24 px-4 relative snap-center">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Certificates & <span className="text-primary">Achievements</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore my verified credentials, professional specializations, and hackathon awards.
        </p>

        {/* Row Flex Container with Hidden Scrollbar */}
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex flex-row overflow-x-hidden w-full max-w-4xl mx-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {certificates.map((cert, index) => {
              const cardNumber = String(index + 1).padStart(2, '0');
              const totalCards = String(certificates.length).padStart(2, '0');

              return (
                <div
                  key={cert.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="w-full min-w-full max-w-full shrink-0 flex-none snap-center px-1"
                >
                  {/* Cosmic Glassmorphic Card (Preserved size, height & styling) */}
                  <div className="rounded-3xl border border-primary/40 bg-slate-950/90 backdrop-blur-2xl shadow-[0_15px_45px_rgba(139,92,246,0.22)] overflow-hidden transition-all duration-500 hover:border-primary/80 hover:shadow-[0_20px_55px_rgba(139,92,246,0.32)]">
                    {/* Top Metadata Ribbon */}
                    <div className="px-6 py-4 bg-primary/5 border-b border-border/50 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-primary/20 text-primary border border-primary/30 flex items-center gap-1.5 shadow-sm">
                          <Sparkles size={12} />
                          {cardNumber} / {totalCards}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary/80 text-foreground/90 border border-border/60 flex items-center gap-1.5">
                          <Award size={12} className="text-primary" />
                          {cert.type.toUpperCase()}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-background/60 border border-border/50">
                          <Building2 size={12} className="text-primary" />
                          {cert.by}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-background/60 border border-border/50">
                          <Globe size={12} className="text-muted-foreground" />
                          {cert.platform}
                        </span>
                      </div>
                    </div>

                    {/* Certificate Image Stage */}
                    <div className="relative w-full h-72 sm:h-80 md:h-[350px] bg-black/60 flex items-center justify-center p-4 sm:p-6 group overflow-hidden">
                      <div className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent pointer-events-none" />

                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="max-h-full max-w-full object-contain rounded-xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 border border-white/5 relative z-10"
                      />
                    </div>

                    {/* Bottom Info & Action Bar */}
                    <div className="p-6 md:p-8 bg-card/60 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-border/50 text-left">
                      <div className="space-y-1.5 max-w-xl">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug">
                          {cert.title}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {cert.description}
                        </p>
                      </div>

                      <div className="shrink-0">
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cosmic-button inline-flex items-center gap-2 text-sm font-semibold cursor-pointer w-full md:w-auto justify-center"
                        >
                          <span>Verify Credential</span>
                          <ExternalLink size={15} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Clickable Navigation Points (No Manual Scrollbar) */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <div className="flex items-center gap-3 bg-slate-950/80 border border-primary/30 px-5 py-2.5 rounded-full backdrop-blur-xl shadow-lg">
              {/* Previous Point Shortcut */}
              <button
                onClick={() => scrollToIndex(activeIndex - 1)}
                disabled={activeIndex === 0}
                className={`p-1.5 rounded-full text-foreground hover:text-primary transition-all duration-300 cursor-pointer ${
                  activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 active:scale-95'
                }`}
                aria-label="Previous Certificate"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Clickable Points */}
              <div className="flex items-center gap-2.5 px-2">
                {certificates.map((cert, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={cert.id}
                      onClick={() => scrollToIndex(idx)}
                      title={cert.title}
                      className={`group relative flex items-center justify-center transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'w-8 h-8 rounded-full bg-primary text-primary-foreground font-mono font-bold text-xs shadow-[0_0_15px_rgba(139,92,246,0.8)] scale-110'
                          : 'w-7 h-7 rounded-full bg-secondary/80 text-muted-foreground hover:text-foreground hover:bg-secondary font-mono text-xs border border-border/60 hover:border-primary/50'
                      }`}
                      aria-label={`Jump to certificate ${idx + 1}: ${cert.title}`}
                    >
                      <span>{idx + 1}</span>
                    </button>
                  );
                })}
              </div>

              {/* Next Point Shortcut */}
              <button
                onClick={() => scrollToIndex(activeIndex + 1)}
                disabled={activeIndex === certificates.length - 1}
                className={`p-1.5 rounded-full text-foreground hover:text-primary transition-all duration-300 cursor-pointer ${
                  activeIndex === certificates.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 active:scale-95'
                }`}
                aria-label="Next Certificate"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <p className="text-xs text-muted-foreground font-medium">
              Certificate {activeIndex + 1} of {certificates.length} &bull; Click any point to view
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
