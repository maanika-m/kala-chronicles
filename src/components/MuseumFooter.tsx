import React from 'react';
import { ArrowUp, BookOpen, Shield, Globe } from 'lucide-react';

export const MuseumFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#0c0e10] border-t border-[#50453b]/30 text-[#9c8e82] text-xs font-['Space_Grotesk'] py-16 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top brand & epigraph */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-[#50453b]/20">
          <div>
            <div className="font-['Playfair_Display'] text-2xl text-[#e2e2e5] tracking-wider mb-1">
              KALĀ CHRONICLES
            </div>
            <div className="text-[#f2be8c] text-xs uppercase tracking-widest">
              INDIAN ART THROUGH THE AGES • DIGITAL RESEARCH ARCHIVE
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 bg-[#1a1c1e] hairline-bronze text-[#f2be8c] hover:border-[#f2be8c] transition-colors cursor-pointer"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4-column Institutional & Curriculum Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#f2be8c] mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Curatorial Scope</span>
            </h4>
            <p className="font-['Newsreader'] text-sm text-[#d4c4b7] leading-relaxed">
              Developed as an interactive academic timeline for college art-history education, tracing sculptural forms, architectural achievements, and miniature painting traditions across six distinct civilizational epochs.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#f2be8c] mb-3 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>Institutional Repositories</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-[#d4c4b7]">
              <li>• National Museum, New Delhi</li>
              <li>• Archaeological Survey of India (ASI)</li>
              <li>• Sarnath Archaeological Museum</li>
              <li>• National Gallery of Modern Art (NGMA)</li>
              <li>• Freer Gallery of Art (Smithsonian)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#f2be8c] mb-3 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>Six Civilizational Epochs</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-[#d4c4b7]">
              <li>I. Indus Valley (c. 2500–1900 BCE)</li>
              <li>II. Mauryan & Buddhist (c. 322–185 BCE)</li>
              <li>III. Gupta Golden Age (c. 320–550 CE)</li>
              <li>IV. Medieval & Temple (c. 600–1500 CE)</li>
              <li>V. Mughal & Rajput (c. 1500–1800 CE)</li>
              <li>VI. Modern & Contemporary (1800s–Present)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#f2be8c] mb-3">
              Archival Standards
            </h4>
            <p className="font-['Newsreader'] text-sm text-[#d4c4b7] leading-relaxed mb-3">
              Orthographic photogrammetry calibrated for spectral radiance, metric scale accuracy, and micro-lapidary analysis.
            </p>
            <div className="px-3 py-1.5 bg-[#121416] hairline-bronze text-[#f2be8c] text-[0.7rem]">
              Open Academic Access • CC BY-NC 4.0
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 border-t border-[#50453b]/20 flex flex-col sm:flex-row justify-between items-center text-[0.7rem] text-[#9c8e82] gap-4">
          <div>
            © {new Date().getFullYear()} Kalā Chronicles — College Art-History Educational Project.
          </div>
          <div className="flex space-x-4">
            <span>Catalogue Raisonné Vol. I–VI</span>
            <span>•</span>
            <span>All Masterpiece Records Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
