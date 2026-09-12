import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ARTIFACTS, EPOCHS } from './data/museumData';
import { Artifact, ArtifactCategory, AppView } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TimelineAxisNav } from './components/TimelineAxisNav';
import { SearchFilterBar } from './components/SearchFilterBar';
import { TimelineView } from './components/TimelineView';
import { ArtifactDetailInspection } from './components/ArtifactDetailInspection';
import { ArtMap } from './components/ArtMap';
import { FusionStudio } from './components/FusionStudio';
import { AboutView } from './components/AboutView';
import { CitationModal } from './components/CitationModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { CuratorialParametersModal } from './components/CuratorialParametersModal';
import { MuseumFooter } from './components/MuseumFooter';

export default function App() {
  // Navigation View State
  const [currentView, setCurrentView] = useState<AppView>('timeline');
  const [previousView, setPreviousView] = useState<AppView>('timeline');
  const [activeArtifact, setActiveArtifact] = useState<Artifact>(ARTIFACTS[0]);
  const [activeEpochId, setActiveEpochId] = useState<string>('epoch-indus');
  const [fusionStyleFocus, setFusionStyleFocus] = useState<'warli' | 'phad'>('warli');

  // Search & Filtering State
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ArtifactCategory | 'all'>('all');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('all');

  // Study Bookmarks State
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('kala_chronicles_bookmarks');
      return saved ? JSON.parse(saved) : ['dancing-girl', 'chola-nataraja'];
    } catch {
      return ['dancing-girl', 'chola-nataraja'];
    }
  });

  // Modal Dialog States
  const [isCitationModalOpen, setIsCitationModalOpen] = useState<boolean>(false);
  const [citationArtifact, setCitationArtifact] = useState<Artifact | null>(null);
  const [isBookmarksDrawerOpen, setIsBookmarksDrawerOpen] = useState<boolean>(false);
  const [isParametersModalOpen, setIsParametersModalOpen] = useState<boolean>(false);

  // Exhibition Parameters
  const [lightingMode, setLightingMode] = useState<'spectral' | 'incandescent' | 'high-contrast'>('spectral');
  const [showGridLines, setShowGridLines] = useState<boolean>(false);

  // Timeline Scroll Progress
  const [scrollProgress, setScrollProgress] = useState<number>(16);

  // Save bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('kala_chronicles_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  // Track scroll position to update timeline progress and active epoch
  useEffect(() => {
    if (currentView !== 'timeline') return;

    const handleScroll = () => {
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max((currentScroll / totalScrollable) * 100, 16), 100);
      setScrollProgress(progress);

      // Detect which epoch is in view
      for (const epoch of EPOCHS) {
        const el = document.getElementById(epoch.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
            setActiveEpochId(epoch.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  // Filtered Artifacts List
  const filteredArtifacts = useMemo(() => {
    return ARTIFACTS.filter((art) => {
      // Search text match across title, description, material, location, period
      if (searchTerm.trim() !== '') {
        const q = searchTerm.toLowerCase();
        const matchesName = art.name.toLowerCase().includes(q);
        const matchesDesc = art.shortDescription.toLowerCase().includes(q);
        const matchesMaterial = art.material.toLowerCase().includes(q);
        const matchesLoc = art.location.toLowerCase().includes(q);
        const matchesPeriod = art.period.toLowerCase().includes(q);
        const matchesTags = art.tags?.some((t) => t.toLowerCase().includes(q)) ?? false;
        if (!matchesName && !matchesDesc && !matchesMaterial && !matchesLoc && !matchesPeriod && !matchesTags) {
          return false;
        }
      }

      // Category match
      if (selectedCategory !== 'all' && art.category !== selectedCategory) {
        return false;
      }

      // Period match
      if (selectedPeriod !== 'all' && art.epochId !== selectedPeriod) {
        return false;
      }

      return true;
    });
  }, [searchTerm, selectedCategory, selectedPeriod]);

  // Handler: Change view via navbar or internal callouts
  const handleNavigateView = useCallback((view: AppView) => {
    setCurrentView((prev) => {
      setPreviousView(prev);
      return view;
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Handler: Select an artifact to inspect
  const handleSelectArtifact = useCallback((artifact: Artifact) => {
    setActiveArtifact(artifact);
    setCurrentView((prev) => {
      setPreviousView(prev);
      return 'inspection';
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Handler: Return from inspection
  const handleBackFromInspection = useCallback((epochId?: string) => {
    if (epochId) {
      setCurrentView('timeline');
      setActiveEpochId(epochId);
      setTimeout(() => {
        const el = document.getElementById(epochId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else if (previousView === 'artmap') {
      setCurrentView('artmap');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView('timeline');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [previousView]);

  // Handler: Click timeline nav epoch button
  const handleSelectEpoch = useCallback((epochId: string) => {
    setActiveEpochId(epochId);
    if (currentView !== 'timeline') {
      setCurrentView('timeline');
      setTimeout(() => {
        const el = document.getElementById(epochId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById(epochId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentView]);

  // Handler: Go to Fusion Studio focusing on a specific tradition
  const handleNavigateToFusion = useCallback((styleId?: 'warli' | 'phad') => {
    if (styleId) {
      setFusionStyleFocus(styleId);
    }
    setCurrentView('fusion');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Handler: Toggle bookmark
  const handleToggleBookmark = useCallback((artifactId: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(artifactId) ? prev.filter((id) => id !== artifactId) : [...prev, artifactId]
    );
  }, []);

  // Handler: Open citation modal
  const handleOpenCitation = useCallback((artifact: Artifact) => {
    setCitationArtifact(artifact);
    setIsCitationModalOpen(true);
  }, []);

  // Saved artifacts objects list
  const savedArtifacts = useMemo(() => {
    return ARTIFACTS.filter((a) => bookmarkedIds.includes(a.id));
  }, [bookmarkedIds]);

  return (
    <div
      className={`min-h-screen bg-[#121416] text-[#e2e2e5] selection:bg-[#f2be8c]/30 selection:text-[#f2be8c] ${
        lightingMode === 'high-contrast'
          ? 'contrast-[110%]'
          : lightingMode === 'incandescent'
          ? 'sepia-[10%]'
          : ''
      }`}
    >
      {/* Optional Archaeological Grid Overlay */}
      {showGridLines && (
        <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(#d4a373_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
      )}

      {/* Global Museum Navigation Header */}
      <Navbar
        currentView={currentView}
        activeArtifact={activeArtifact}
        onNavigateView={handleNavigateView}
        onOpenDossier={() => handleSelectArtifact(activeArtifact)}
        onOpenParameters={() => setIsParametersModalOpen(true)}
        onOpenBookmarks={() => setIsBookmarksDrawerOpen(true)}
        bookmarkCount={bookmarkedIds.length}
      />

      {/* VIEW ROUTING */}
      {currentView === 'timeline' && (
        <>
          {/* Hero Introductory Section */}
          <HeroSection
            onExploreClick={() => {
              const el = document.getElementById('timeline-flow');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* Sticky Chronological Epoch Axis Rail */}
          <TimelineAxisNav
            activeEpochId={activeEpochId}
            onSelectEpoch={handleSelectEpoch}
            scrollProgress={scrollProgress}
          />

          {/* Search, Filter & Category Bar */}
          <SearchFilterBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedPeriod={selectedPeriod}
            onPeriodChange={setSelectedPeriod}
            totalCount={ARTIFACTS.length}
            filteredCount={filteredArtifacts.length}
          />

          {/* Interactive Timeline & Pedestal Grid */}
          <TimelineView
            artifacts={filteredArtifacts}
            activeEpochId={activeEpochId}
            onSelectArtifact={handleSelectArtifact}
            onInspectHeroSample={() => handleSelectArtifact(ARTIFACTS[0])}
          />
        </>
      )}

      {currentView === 'artmap' && (
        <ArtMap
          onSelectArtifact={handleSelectArtifact}
          onNavigateTimelineToEpoch={(epochId) => {
            setCurrentView('timeline');
            setTimeout(() => {
              const el = document.getElementById(epochId);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          }}
          onNavigateToFusionStudio={handleNavigateToFusion}
        />
      )}

      {currentView === 'fusion' && (
        <FusionStudio
          initialStyleFocus={fusionStyleFocus}
          onNavigateToArtMapRegion={(regionId) => {
            setCurrentView('artmap');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateToTimeline={() => {
            setCurrentView('timeline');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {currentView === 'about' && (
        <AboutView onNavigate={handleNavigateView} />
      )}

      {currentView === 'inspection' && (
        <ArtifactDetailInspection
          artifact={activeArtifact}
          allArtifacts={ARTIFACTS}
          onBackToTimeline={handleBackFromInspection}
          onSelectArtifact={handleSelectArtifact}
          isBookmarked={bookmarkedIds.includes(activeArtifact.id)}
          onToggleBookmark={handleToggleBookmark}
          onOpenCitation={handleOpenCitation}
        />
      )}

      {/* Institutional Museum Footer */}
      <MuseumFooter />

      {/* Academic Citation Generator Dialog */}
      <CitationModal
        artifact={citationArtifact}
        isOpen={isCitationModalOpen}
        onClose={() => setIsCitationModalOpen(false)}
      />

      {/* Saved Masterpieces Study Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksDrawerOpen}
        onClose={() => setIsBookmarksDrawerOpen(false)}
        savedArtifacts={savedArtifacts}
        onSelectArtifact={handleSelectArtifact}
        onRemoveBookmark={handleToggleBookmark}
      />

      {/* Curatorial Parameters Modal */}
      <CuratorialParametersModal
        isOpen={isParametersModalOpen}
        onClose={() => setIsParametersModalOpen(false)}
        lightingMode={lightingMode}
        onChangeLighting={setLightingMode}
        showGridLines={showGridLines}
        onToggleGridLines={() => setShowGridLines((prev) => !prev)}
      />
    </div>
  );
}

