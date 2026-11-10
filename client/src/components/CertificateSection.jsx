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
                  {/* Cosmic Glassmorphic Card (Preserved size, height & styling matching Mockup) */}
                  <div className="w-full max-w-full rounded-3xl border border-slate-200/80 bg-white shadow-xl dark:border-primary/40 dark:bg-slate-950 dark:shadow-[0_15px_45px_rgba(139,92,246,0.22)] overflow-hidden transition-all duration-500 hover:border-primary/80 hover:shadow-2xl flex flex-col justify-between">
                    {/* Top Metadata Ribbon */}
                    <div className="px-6 py-4 bg-white dark:bg-primary/5 border-b border-slate-100 dark:border-border/50 flex flex-wrap items-center justify-between gap-3 w-full min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 text-white flex items-center gap-1.5 shadow-xs">
                          <Sparkles size={13} className="text-purple-200" />
                          {cardNumber} / {totalCards}
                        </span>
                        <span className="px-4 py-1 rounded-full text-xs font-medium bg-white text-slate-700 border border-slate-200 shadow-xs dark:bg-white/5 dark:text-slate-200 dark:border-white/10 flex items-center gap-1.5">
                          <Award size={13} className="text-purple-600 dark:text-purple-400" />
                          {cert.type.toUpperCase()}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-3.5 py-1 rounded-full bg-[#f5f3ff] text-purple-700 border border-purple-200/80 shadow-xs dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800/50 text-xs font-medium flex items-center gap-1.5">
                          <Building2 size={13} className="text-purple-600 dark:text-purple-400" />
                          {cert.by}
                        </span>
                        <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 shadow-xs dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900/50 text-xs font-medium flex items-center gap-1.5">
                          <Globe size={13} className="text-blue-600 dark:text-blue-400" />
                          {cert.platform}
                        </span>
                      </div>
                    </div>

                    {/* Certificate Image Stage */}
                    <div className="relative w-full max-w-full h-72 sm:h-80 md:h-[350px] bg-gradient-to-b from-[#e8effd] via-[#edf2fe] to-[#dbe7fc] dark:bg-black/60 border-y border-slate-200/60 dark:border-border/40 flex items-center justify-center p-4 sm:p-6 group overflow-hidden">
                      <div className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent pointer-events-none" />

                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="max-h-full max-w-full object-contain rounded-2xl shadow-xl group-hover:scale-[1.02] transition-transform duration-500 border border-white/80 dark:border-white/10 relative z-10"
                      />
                    </div>

                    {/* Bottom Info & Action Bar */}
                    <div className="p-6 md:p-8 bg-white dark:bg-card flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-slate-100 dark:border-border/50 text-left min-h-[140px] w-full min-w-0 max-w-full">
                      <div className="space-y-1.5 max-w-xl">
                        <h3 className="text-xl md:text-2xl font-extrabold text-[#0f172a] dark:text-foreground leading-snug tracking-tight">
                          {cert.title}
                        </h3>
                        <p className="text-xs md:text-sm text-[#475569] dark:text-muted-foreground leading-relaxed">
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
            <div className="flex items-center gap-3 bg-white border border-slate-200/80 dark:bg-slate-900 dark:border-primary/30 px-5 py-2.5 rounded-full shadow-lg">
              {/* Previous Point Shortcut */}
              <button
                onClick={() => scrollToIndex(activeIndex - 1)}
                disabled={activeIndex === 0}
                className={`p-1.5 rounded-full text-primary transition-all duration-300 cursor-pointer ${
                  activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 active:scale-95'
                }`}
                aria-label="Previous Certificate"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Clickable Points */}
              <div className="flex items-center gap-2 px-1">
                {certificates.map((cert, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={cert.id}
                      onClick={() => scrollToIndex(idx)}
                      title={cert.title}
                      className={`group relative flex items-center justify-center transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'w-8 h-8 rounded-full bg-primary text-white border-2 border-primary font-mono font-bold text-xs shadow-[0_0_15px_rgba(139,92,246,0.8)] scale-110'
                          : 'w-7 h-7 rounded-full bg-[#f0f4ff] text-[#334155] border border-[#e0e7ff] hover:bg-purple-50 font-mono text-xs dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
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
                className={`p-1.5 rounded-full text-primary transition-all duration-300 cursor-pointer ${
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
