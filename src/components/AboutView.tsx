import React from 'react';
import { BookOpen, Compass, Palette, Landmark, Sparkles, ExternalLink, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { AppView } from '../types';

interface AboutViewProps {
  onNavigate: (view: AppView) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 md:px-16 min-h-screen bg-[#121416] text-[#e2e2e5]">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Academic Header */}
        <div className="border-b border-[#50453b]/30 pb-8 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs font-['Space_Grotesk'] text-[#f2be8c] uppercase tracking-widest mb-3">
            <Landmark className="w-4 h-4" />
            <span>COLLEGE ART-HISTORY CURATORIAL ASSIGNMENT • FINAL MONOGRAPH</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-3xl md:text-5xl text-[#e2e2e5] tracking-tight">
            KALĀ CHRONICLES: Indian Art Through the Ages
          </h1>
          <p className="font-['Newsreader'] text-lg md:text-xl text-[#9c8e82] italic mt-3 max-w-3xl leading-relaxed">
            A comprehensive interactive tripartite learning environment synthesizing chronological evolution, cartographic distribution, and stylistic cross-pollination across 5,000 years of the subcontinent’s visual heritage.
          </p>
        </div>

        {/* Three Activities Architecture */}
        <div className="space-y-4">
          <span className="font-['Space_Grotesk'] text-xs text-[#f2be8c] uppercase tracking-widest block">
            THE THREE INTERCONNECTED ACADEMIC MODULES:
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Activity 1 */}
            <div className="bg-[#1a1c1e] hairline-bronze p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs font-['Space_Grotesk'] text-[#f2be8c] mb-2">
                  <span>ACTIVITY 1</span>
                  <span>CHRONOLOGICAL</span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl text-[#e2e2e5] mb-2">
                  Interactive Timeline with Artifacts
                </h3>
                <p className="font-['Newsreader'] text-sm text-[#9c8e82] leading-relaxed">
                  Traces Indian art chronologically across six pivotal epochs from Indus Valley terracotta to Modern post-independence progressives, complete with macro-inspection and museum accession registries.
                </p>
              </div>
              <button
                onClick={() => onNavigate('timeline')}
                className="w-full py-2 bg-[#121416] hover:bg-[#f2be8c] hover:text-[#482904] text-[#f2be8c] text-xs font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze transition-colors flex items-center justify-center gap-2"
              >
                <span>Launch Timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Activity 2 */}
            <div className="bg-[#1a1c1e] hairline-bronze p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs font-['Space_Grotesk'] text-[#f2be8c] mb-2">
                  <span>ACTIVITY 2</span>
                  <span>GEOGRAPHIC</span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl text-[#e2e2e5] mb-2">
                  Interactive Art Map
                </h3>
                <p className="font-['Newsreader'] text-sm text-[#9c8e82] leading-relaxed">
                  Explores the subcontinental geographic spread of regional traditions—from Warli tribal hamlets in Maharashtra and Phad bardic scrolls in Rajasthan to Tanjore gilding, Madhubani ritual murals, and Chola metallurgy.
                </p>
              </div>
              <button
                onClick={() => onNavigate('artmap')}
                className="w-full py-2 bg-[#121416] hover:bg-[#f2be8c] hover:text-[#482904] text-[#f2be8c] text-xs font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore Art Map</span>
                <Compass className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Activity 3 */}
            <div className="bg-[#1a1c1e] hairline-bronze p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs font-['Space_Grotesk'] text-[#f2be8c] mb-2">
                  <span>ACTIVITY 3</span>
                  <span>SYNTHESIS</span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl text-[#e2e2e5] mb-2">
                  Fusion Studio
                </h3>
                <p className="font-['Newsreader'] text-sm text-[#9c8e82] leading-relaxed">
                  A digital composition studio providing side-by-side comparative analysis between Warli and Phad traditions, an interactive motif composition canvas, and a pedagogical real-time fusion synthesis engine.
                </p>
              </div>
              <button
                onClick={() => onNavigate('fusion')}
                className="w-full py-2 bg-[#121416] hover:bg-[#f2be8c] hover:text-[#482904] text-[#f2be8c] text-xs font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze transition-colors flex items-center justify-center gap-2"
              >
                <span>Enter Fusion Studio</span>
                <Palette className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Curatorial Methodology & Archival Sources */}
        <div className="bg-[#1a1c1e] hairline-bronze p-8 space-y-6">
          <div className="flex items-center space-x-2 text-xs font-['Space_Grotesk'] text-[#f2be8c] uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>CURATORIAL METHODOLOGY & REPOSITORIES</span>
          </div>

          <p className="font-['Newsreader'] text-sm md:text-base text-[#d4c4b7] leading-relaxed">
            All artifacts, accession citations, stratigraphy descriptions, and technical metallurgical insights documented in KALĀ CHRONICLES adhere to scholarly standards published by primary preservation institutions, including the Archaeological Survey of India (ASI), The National Museum (New Delhi), The Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS, Mumbai), The Government Museum (Chennai), and the Indian Museum (Kolkata).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#50453b]/20 text-xs font-['Space_Grotesk']">
            <div className="p-3 bg-[#121416] hairline-bronze">
              <span className="text-[#f2be8c] block text-[0.65rem] uppercase mb-1">ARCHEOLOGICAL CORPUS</span>
              <span className="text-[#e2e2e5]">Harappa & Mohenjo-daro Excavation Reports (1921–1938)</span>
            </div>
            <div className="p-3 bg-[#121416] hairline-bronze">
              <span className="text-[#f2be8c] block text-[0.65rem] uppercase mb-1">EPIGRAPHY & CHRONOLOGY</span>
              <span className="text-[#e2e2e5]">Ashokan Major Rock Edicts & Gupta Inscriptions</span>
            </div>
            <div className="p-3 bg-[#121416] hairline-bronze">
              <span className="text-[#f2be8c] block text-[0.65rem] uppercase mb-1">METALLURGICAL TREATISES</span>
              <span className="text-[#e2e2e5]">Manasara Silpa Shastra (Madhuchehhishtavidhana lost-wax)</span>
            </div>
            <div className="p-3 bg-[#121416] hairline-bronze">
              <span className="text-[#f2be8c] block text-[0.65rem] uppercase mb-1">FOLK & BARDIC ARCHIVES</span>
              <span className="text-[#e2e2e5]">Jivya Soma Mashe Ateliers & Joshi Phad Genealogies</span>
            </div>
          </div>
        </div>

        {/* Assignment Metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-[#121416] hairline-bronze text-xs font-['Space_Grotesk'] text-[#9c8e82]">
          <div>
            <span>DEPARTMENT OF ART HISTORY & VISUAL STUDIES</span>
            <span className="mx-2 text-[#50453b]">•</span>
            <span className="text-[#f2be8c]">ACADEMIC YEAR 2024–2025</span>
          </div>
          <div className="mt-2 sm:mt-0">
            <span>CURATED FOR MULTI-DEVICE RESEARCH INSPECTION</span>
          </div>
        </div>
      </div>
    </div>
  );
};
