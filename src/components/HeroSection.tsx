import React from 'react';
import { ArrowDown, Clock } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-16 overflow-hidden hero-vignette border-b border-[#50453b]/10">
      {/* Subtle Ambient Backdrop Grid Coordinate */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#d4a373_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Archival Badge */}
        <div className="inline-flex items-center space-x-3 px-3.5 py-1.5 mb-6 border border-[#d4a373]/30 bg-[#0c0e10]/90 backdrop-blur-sm shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f2be8c] animate-pulse"></span>
          <span className="font-['Space_Grotesk'] text-xs text-[#f2be8c] tracking-widest uppercase">
            Permanent Digital Archive • Vol. I–VI
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-['Playfair_Display'] text-[#e2e2e5] mb-6 max-w-4xl tracking-tight leading-tight md:leading-none">
          INDIAN ART THROUGH THE AGES
        </h1>

        {/* Curatorial Quote / Epigraph */}
        <p className="font-['Newsreader'] text-[#d4c4b7] max-w-2xl text-lg md:text-xl italic mb-10 leading-relaxed font-light">
          “Explore thousands of years of Indian artistic heritage through the objects, sculptures, paintings and traditions that shaped it.”
        </p>

        {/* Chronological Coordinates & CTA Cluster */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button
            onClick={onExploreClick}
            className="group px-8 py-3.5 bg-[#1a1c1e] hairline-bronze hover:border-[#f2be8c] text-[#f2be8c] font-['Space_Grotesk'] text-xs uppercase tracking-[0.14em] flex items-center space-x-3 transition-all duration-300 hover:bg-[#282a2c] shadow-md cursor-pointer"
          >
            <Clock className="w-4 h-4 text-[#f2be8c]" />
            <span>EXPLORE TIMELINE</span>
            <ArrowDown className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-200" />
          </button>

          <div className="flex items-center space-x-4 sm:space-x-6 text-[#9c8e82] font-['Space_Grotesk'] tracking-widest text-xs">
            <span>2500 BCE — CONTEMPORARY</span>
            <span className="w-1 h-1 bg-[#50453b] rounded-full"></span>
            <span>15 MASTERPIECES</span>
            <span className="w-1 h-1 bg-[#50453b] rounded-full"></span>
            <span>6 CIVILIZATIONAL EPOCHS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
