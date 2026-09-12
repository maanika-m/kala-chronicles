import React from 'react';
import { Sparkles, Bookmark, SlidersHorizontal, BookOpen, ZoomIn } from 'lucide-react';
import { Artifact } from '../types';

interface NavbarProps {
  currentView: 'timeline' | 'inspection';
  activeArtifact: Artifact | null;
  onNavigateTimeline: () => void;
  onOpenDossier: () => void;
  onOpenParameters: () => void;
  onOpenBookmarks: () => void;
  bookmarkCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  activeArtifact,
  onNavigateTimeline,
  onOpenDossier,
  onOpenParameters,
  onOpenBookmarks,
  bookmarkCount,
}) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-[#121416]/95 border-b border-[#50453b]/20 backdrop-blur-md transition-all duration-200 ease-out">
      {/* Brand Identity */}
      <div className="flex items-center gap-6">
        <button
          onClick={onNavigateTimeline}
          className="group flex flex-col text-left focus:outline-none"
        >
          <span className="font-['Playfair_Display'] text-xl md:text-2xl tracking-widest text-[#e2e2e5] uppercase group-hover:text-[#f2be8c] transition-colors">
            KALĀ CHRONICLES
          </span>
          <span className="font-['Space_Grotesk'] text-[#9c8e82] tracking-widest text-[0.65rem] uppercase">
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

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center space-x-8">
        <button
          onClick={onNavigateTimeline}
          className={`font-['Space_Grotesk'] uppercase tracking-widest text-xs transition-colors duration-200 ${
            currentView === 'timeline'
              ? 'text-[#f2be8c] border-b border-[#f2be8c] pb-1'
              : 'text-[#d4c4b7] hover:text-[#f2be8c]'
          }`}
        >
          Timeline Axis
        </button>
        <button
          onClick={onNavigateTimeline}
          className="text-[#d4c4b7] font-['Space_Grotesk'] uppercase tracking-widest text-xs hover:text-[#f2be8c] transition-colors duration-200"
        >
          Epochs
        </button>
        <button
          onClick={onOpenDossier}
          className={`font-['Space_Grotesk'] uppercase tracking-widest text-xs transition-colors duration-200 ${
            currentView === 'inspection'
              ? 'text-[#f2be8c] border-b border-[#f2be8c] pb-1'
              : 'text-[#d4c4b7] hover:text-[#f2be8c]'
          }`}
        >
          Dossiers
        </button>
        <a
          href="#timeline-flow"
          onClick={() => {
            if (currentView === 'inspection') onNavigateTimeline();
          }}
          className="text-[#d4c4b7] font-['Space_Grotesk'] uppercase tracking-widest text-xs hover:text-[#f2be8c] transition-colors duration-200"
        >
          Iconography
        </a>
        <a
          href="#footer"
          className="text-[#d4c4b7] font-['Space_Grotesk'] uppercase tracking-widest text-xs hover:text-[#f2be8c] transition-colors duration-200"
        >
          Archive
        </a>
      </nav>

      {/* Right Actions Cluster */}
      <div className="flex items-center space-x-3">
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
          className="inline-flex items-center space-x-2 px-4 py-2 bg-[#1a1c1e] border border-[#f2be8c]/40 hover:border-[#f2be8c] text-[#f2be8c] font-['Space_Grotesk'] text-xs tracking-widest uppercase transition-all duration-200 shadow-sm shadow-[#f2be8c]/10"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Curatorial Dossier</span>
        </button>
      </div>
    </header>
  );
};
