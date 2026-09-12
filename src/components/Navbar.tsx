import React, { useState } from 'react';
import { Sparkles, Bookmark, SlidersHorizontal, BookOpen, ZoomIn, Compass, Palette, Info, Menu, X } from 'lucide-react';
import { Artifact, AppView } from '../types';

interface NavbarProps {
  currentView: AppView;
  activeArtifact: Artifact | null;
  onNavigateView: (view: AppView) => void;
  onOpenDossier: () => void;
  onOpenParameters: () => void;
  onOpenBookmarks: () => void;
  bookmarkCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  activeArtifact,
  onNavigateView,
  onOpenDossier,
  onOpenParameters,
  onOpenBookmarks,
  bookmarkCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (view: AppView) => {
    onNavigateView(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 md:px-16 py-3.5 bg-[#121416]/95 border-b border-[#50453b]/20 backdrop-blur-md transition-all duration-200 ease-out">
      {/* Brand Identity */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => handleNav('timeline')}
          className="group flex flex-col text-left focus:outline-none"
        >
          <span className="font-['Playfair_Display'] text-lg sm:text-xl md:text-2xl tracking-widest text-[#e2e2e5] uppercase group-hover:text-[#f2be8c] transition-colors">
            KALĀ CHRONICLES
          </span>
          <span className="font-['Space_Grotesk'] text-[#9c8e82] tracking-widest text-[0.6rem] sm:text-[0.65rem] uppercase">
            Pavilion of Indian Antiquities • 5000 BCE–Present
          </span>
        </button>

        {currentView === 'inspection' && activeArtifact && (
          <div className="hidden xl:flex items-center gap-2 pl-6 border-l border-[#50453b]/30">
            <span className="font-['Space_Grotesk'] text-[#9c8e82] uppercase tracking-widest text-xs">
              REGISTRY:
            </span>
            <span className="font-['Space_Grotesk'] text-[#f2be8c] uppercase tracking-widest text-xs font-medium">
              ACCESSION NO. {activeArtifact.accessionNo}
            </span>
          </div>
        )}
      </div>

      {/* Primary Top-Level Navigation Links: Timeline, Art Map, Fusion Studio, About */}
      <nav className="hidden lg:flex items-center space-x-7">
        <button
          onClick={() => handleNav('timeline')}
          className={`font-['Space_Grotesk'] uppercase tracking-widest text-xs transition-colors duration-200 py-1 ${
            currentView === 'timeline'
              ? 'text-[#f2be8c] border-b-2 border-[#f2be8c] font-semibold'
              : 'text-[#d4c4b7] hover:text-[#f2be8c]'
          }`}
        >
          Timeline
        </button>

        <button
          onClick={() => handleNav('artmap')}
          className={`font-['Space_Grotesk'] uppercase tracking-widest text-xs transition-colors duration-200 py-1 flex items-center gap-1.5 ${
            currentView === 'artmap'
              ? 'text-[#f2be8c] border-b-2 border-[#f2be8c] font-semibold'
              : 'text-[#d4c4b7] hover:text-[#f2be8c]'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Art Map</span>
        </button>

        <button
          onClick={() => handleNav('fusion')}
          className={`font-['Space_Grotesk'] uppercase tracking-widest text-xs transition-colors duration-200 py-1 flex items-center gap-1.5 ${
            currentView === 'fusion'
              ? 'text-[#f2be8c] border-b-2 border-[#f2be8c] font-semibold'
              : 'text-[#d4c4b7] hover:text-[#f2be8c]'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>Fusion Studio</span>
        </button>

        <button
          onClick={() => handleNav('about')}
          className={`font-['Space_Grotesk'] uppercase tracking-widest text-xs transition-colors duration-200 py-1 ${
            currentView === 'about'
              ? 'text-[#f2be8c] border-b-2 border-[#f2be8c] font-semibold'
              : 'text-[#d4c4b7] hover:text-[#f2be8c]'
          }`}
        >
          About
        </button>
      </nav>

      {/* Right Actions Cluster */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div className="hidden sm:flex items-center space-x-1 border-r border-[#50453b]/30 pr-3 text-[#9c8e82]">
          <button
            onClick={onOpenParameters}
            aria-label="Curation parameters"
            title="Curatorial Parameters & View Options"
            className="p-2 hover:text-[#f2be8c] hover:bg-[#1e2022] transition-colors duration-200 rounded"
            type="button"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenBookmarks}
            aria-label="Bookmarked Masterpieces"
            title="Saved Masterpieces"
            className="p-2 hover:text-[#f2be8c] hover:bg-[#1e2022] transition-colors duration-200 rounded relative"
            type="button"
          >
            <Bookmark className="w-4 h-4" />
            {bookmarkCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#f2be8c] rounded-full"></span>
            )}
          </button>
          <button
            onClick={onOpenDossier}
            aria-label="High resolution inspection"
            title="Inspection Experience"
            className="p-2 hover:text-[#f2be8c] hover:bg-[#1e2022] transition-colors duration-200 rounded"
            type="button"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={onOpenDossier}
          className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-2 bg-[#1a1c1e] border border-[#f2be8c]/40 hover:border-[#f2be8c] text-[#f2be8c] font-['Space_Grotesk'] text-xs tracking-widest uppercase transition-all duration-200 shadow-sm shadow-[#f2be8c]/10"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Curatorial Dossier</span>
          <span className="sm:hidden">Dossier</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#e2e2e5] hover:text-[#f2be8c] bg-[#1a1c1e] hairline-bronze"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#121416]/98 border-b border-[#50453b]/40 backdrop-blur-xl p-6 shadow-2xl flex flex-col space-y-4">
          <button
            onClick={() => handleNav('timeline')}
            className={`text-left font-['Space_Grotesk'] uppercase tracking-widest text-sm py-2 px-3 hairline-bronze transition-colors ${
              currentView === 'timeline'
                ? 'bg-[#f2be8c] text-[#482904] font-semibold'
                : 'text-[#d4c4b7] bg-[#1a1c1e]'
            }`}
          >
            Timeline
          </button>

          <button
            onClick={() => handleNav('artmap')}
            className={`text-left font-['Space_Grotesk'] uppercase tracking-widest text-sm py-2 px-3 hairline-bronze transition-colors flex items-center justify-between ${
              currentView === 'artmap'
                ? 'bg-[#f2be8c] text-[#482904] font-semibold'
                : 'text-[#d4c4b7] bg-[#1a1c1e]'
            }`}
          >
            <span>Art Map</span>
            <Compass className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleNav('fusion')}
            className={`text-left font-['Space_Grotesk'] uppercase tracking-widest text-sm py-2 px-3 hairline-bronze transition-colors flex items-center justify-between ${
              currentView === 'fusion'
                ? 'bg-[#f2be8c] text-[#482904] font-semibold'
                : 'text-[#d4c4b7] bg-[#1a1c1e]'
            }`}
          >
            <span>Fusion Studio</span>
            <Palette className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleNav('about')}
            className={`text-left font-['Space_Grotesk'] uppercase tracking-widest text-sm py-2 px-3 hairline-bronze transition-colors ${
              currentView === 'about'
                ? 'bg-[#f2be8c] text-[#482904] font-semibold'
                : 'text-[#d4c4b7] bg-[#1a1c1e]'
            }`}
          >
            About
          </button>
        </div>
      )}
    </header>
  );
};
