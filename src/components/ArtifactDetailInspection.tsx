import React, { useState, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Bookmark,
  Share2,
  Copy,
  Check,
  Sparkles,
  Layers,
  MapPin,
  Calendar,
  Compass,
  FileText,
  Info,
} from 'lucide-react';
import { Artifact } from '../types';
import { EPOCHS } from '../data/museumData';

interface ArtifactDetailInspectionProps {
  artifact: Artifact;
  allArtifacts: Artifact[];
  onBackToTimeline: (epochId?: string) => void;
  onSelectArtifact: (artifact: Artifact) => void;
  isBookmarked: boolean;
  onToggleBookmark: (artifactId: string) => void;
  onOpenCitation: (artifact: Artifact) => void;
}

type ViewingMode = 'exhibition' | 'macro' | 'lost-wax' | 'patina';
type DossierTab = 'overview' | 'context' | 'significance' | 'technique' | 'provenance';

export const ArtifactDetailInspection: React.FC<ArtifactDetailInspectionProps> = ({
  artifact,
  allArtifacts,
  onBackToTimeline,
  onSelectArtifact,
  isBookmarked,
  onToggleBookmark,
  onOpenCitation,
}) => {
  // Viewing & inspection states
  const [viewingMode, setViewingMode] = useState<ViewingMode>('exhibition');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [activeHotspotId, setActiveHotspotId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<DossierTab>('overview');
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  // Epoch context
  const epoch = EPOCHS.find((e) => e.id === artifact.epochId) || EPOCHS[0];
  const epochArtifacts = allArtifacts.filter((a) => a.epochId === artifact.epochId);
  const currentIndexInEpoch = epochArtifacts.findIndex((a) => a.id === artifact.id);
  const prevArtifact =
    currentIndexInEpoch > 0 ? epochArtifacts[currentIndexInEpoch - 1] : null;
  const nextArtifact =
    currentIndexInEpoch < epochArtifacts.length - 1
      ? epochArtifacts[currentIndexInEpoch + 1]
      : null;

  // Zoom helpers
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 25, 250));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 25, 100));
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
    setRotationAngle(0);
  };

  const toggleOrbitRotation = () => {
    setIsRotating((prev) => !prev);
    if (!isRotating) {
      setRotationAngle((prev) => (prev + 90) % 360);
    }
  };

  // Copy brief citation to clipboard
  const handleCopyCitation = () => {
    const citation = `Kalā Chronicles Museum Archive. "${artifact.name}." ${artifact.period}, ${artifact.date}. ${artifact.repository}, Accession ${artifact.accessionNo}.`;
    navigator.clipboard.writeText(citation).then(() => {
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    });
  };

  // Image source depends on viewing mode
  const currentImageSource =
    (viewingMode === 'macro' || viewingMode === 'lost-wax') && artifact.detailImageUrl
      ? artifact.detailImageUrl
      : artifact.imageUrl;

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 md:px-16 min-h-screen bg-[#121416] text-[#e2e2e5]">
      {/* 1. TOP SUB-HEADER BREADCRUMB & CAROUSEL STEPPER BAR */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#50453b]/20">
        {/* Left: Return to Timeline Button */}
        <button
          onClick={() => onBackToTimeline(artifact.epochId)}
          className="group inline-flex items-center space-x-2 text-xs font-['Space_Grotesk'] text-[#d4c4b7] hover:text-[#f2be8c] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-widest font-medium">
            Return to Timeline: {epoch.title}
          </span>
        </button>

        {/* Center: Breadcrumb Telemetry */}
        <div className="hidden lg:flex items-center space-x-2 text-xs font-['Space_Grotesk'] text-[#9c8e82]">
          <span className="text-[#f2be8c] uppercase tracking-wider">
            EPOCH {epoch.number} / {epoch.subhead}
          </span>
          <span>•</span>
          <span className="text-[#e2e2e5] uppercase tracking-wider">{epoch.title}</span>
          <span>•</span>
          <span className="text-[#9c8e82]">
            ARTIFACT {currentIndexInEpoch + 1} OF {epochArtifacts.length}
          </span>
        </div>

        {/* Right: Persistent Carousel Stepper */}
        <div className="flex items-center space-x-2 text-xs font-['Space_Grotesk']">
          <button
            onClick={() => prevArtifact && onSelectArtifact(prevArtifact)}
            disabled={!prevArtifact}
            title={prevArtifact ? `Previous: ${prevArtifact.name}` : 'First in this epoch'}
            className={`p-2 hairline-bronze rounded transition-colors flex items-center gap-1 ${
              prevArtifact
                ? 'bg-[#1e2022] text-[#f2be8c] hover:bg-[#282a2c] cursor-pointer'
                : 'bg-[#1e2022]/40 text-[#50453b] cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Prev</span>
          </button>

          <span className="px-3 py-1.5 bg-[#0c0e10] hairline-bronze text-[#f2be8c] font-medium tracking-wider">
            {currentIndexInEpoch + 1} / {epochArtifacts.length}
          </span>

          <button
            onClick={() => nextArtifact && onSelectArtifact(nextArtifact)}
            disabled={!nextArtifact}
            title={nextArtifact ? `Next: ${nextArtifact.name}` : 'Last in this epoch'}
            className={`p-2 hairline-bronze rounded transition-colors flex items-center gap-1 ${
              nextArtifact
                ? 'bg-[#1e2022] text-[#f2be8c] hover:bg-[#282a2c] cursor-pointer'
                : 'bg-[#1e2022]/40 text-[#50453b] cursor-not-allowed'
            }`}
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. TWO-COLUMN ARCHIVAL CANVAS GRID (60% / 40% on desktop) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* LEFT COLUMN: DOMINANT INSPECTION STAGE (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {/* Top Telemetry & Scale Readout */}
          <div className="flex flex-wrap items-center justify-between px-3 py-2 bg-[#0c0e10] hairline-bronze text-xs font-['Space_Grotesk'] text-[#9c8e82]">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#f2be8c] timeline-pulse"></span>
              <span className="text-[#f2be8c] font-medium tracking-wider uppercase">
                Orthographic Photogrammetry
              </span>
              <span className="text-[#50453b]">|</span>
              <span>Dimensions: {artifact.dimensions}</span>
            </div>
            <div className="text-[0.7rem] text-[#9c8e82] hidden sm:block">
              Scale 1:1 Metric Reference
            </div>
          </div>

          {/* Affordance Mode Pills (Exhibition / Macro / Lost-Wax / Patina) */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setViewingMode('exhibition')}
              className={`px-3 py-1.5 text-xs font-['Space_Grotesk'] tracking-wider uppercase hairline-bronze transition-colors cursor-pointer ${
                viewingMode === 'exhibition'
                  ? 'bg-[#1e2022] text-[#f2be8c] border-[#f2be8c]'
                  : 'bg-[#0c0e10] text-[#9c8e82] hover:text-[#e2e2e5]'
              }`}
            >
              Exhibition View
            </button>
            <button
              onClick={() => setViewingMode('macro')}
              className={`px-3 py-1.5 text-xs font-['Space_Grotesk'] tracking-wider uppercase hairline-bronze transition-colors cursor-pointer ${
                viewingMode === 'macro'
                  ? 'bg-[#1e2022] text-[#f2be8c] border-[#f2be8c]'
                  : 'bg-[#0c0e10] text-[#9c8e82] hover:text-[#e2e2e5]'
              }`}
            >
              Macro Surface
            </button>
            <button
              onClick={() => setViewingMode('lost-wax')}
              className={`px-3 py-1.5 text-xs font-['Space_Grotesk'] tracking-wider uppercase hairline-bronze transition-colors cursor-pointer ${
                viewingMode === 'lost-wax'
                  ? 'bg-[#1e2022] text-[#f2be8c] border-[#f2be8c]'
                  : 'bg-[#0c0e10] text-[#9c8e82] hover:text-[#e2e2e5]'
              }`}
            >
              Casting Seams & Mudra
            </button>
            <button
              onClick={() => setViewingMode('patina')}
              className={`px-3 py-1.5 text-xs font-['Space_Grotesk'] tracking-wider uppercase hairline-bronze transition-colors cursor-pointer ${
                viewingMode === 'patina'
                  ? 'bg-[#1e2022] text-[#f2be8c] border-[#f2be8c]'
                  : 'bg-[#0c0e10] text-[#9c8e82] hover:text-[#e2e2e5]'
              }`}
            >
              Patina & Micro-Drill
            </button>
          </div>

          {/* MAIN INTERACTIVE CANVAS VIEWPORT */}
          <div className="relative bg-[#0c0e10] hairline-bronze aspect-[4/3] overflow-hidden rounded-sm group select-none shadow-2xl">
            {/* Ambient vignette */}
            <div className="spotlight-radial absolute inset-0 pointer-events-none"></div>

            {/* Specimen Image with Zoom and Rotation */}
            <div className="w-full h-full flex items-center justify-center p-4">
              <img
                src={currentImageSource}
                alt={artifact.altText}
                style={{
                  transform: `scale(${zoomLevel / 100}) rotate(${rotationAngle}deg)`,
                  filter:
                    viewingMode === 'patina'
                      ? 'contrast(130%) saturate(140%) sepia(20%)'
                      : viewingMode === 'lost-wax'
                      ? 'contrast(115%) brightness(105%)'
                      : 'none',
                }}
                className="max-h-full max-w-full object-contain transition-transform duration-300 ease-out origin-center"
              />
            </div>

            {/* Interactive Hotspots Overlay */}
            {artifact.hotspots &&
              artifact.hotspots.map((hotspot) => {
                const isActive = activeHotspotId === hotspot.id;
                return (
                  <div
                    key={hotspot.id}
                    style={{
                      left: `${hotspot.xPercent}%`,
                      top: `${hotspot.yPercent}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                  >
                    <button
                      onClick={() =>
                        setActiveHotspotId(isActive ? null : hotspot.id)
                      }
                      onMouseEnter={() => setActiveHotspotId(hotspot.id)}
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-['Space_Grotesk'] text-xs font-bold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#f2be8c] text-[#482904] scale-125 ring-4 ring-[#f2be8c]/40'
                          : 'bg-[#1a1c1e] text-[#f2be8c] border-2 border-[#f2be8c] hover:scale-110 shadow-lg'
                      }`}
                    >
                      {hotspot.id}
                    </button>

                    {/* Hotspot Floating Curatorial Annotation Card */}
                    {isActive && (
                      <div className="absolute left-9 top-0 w-64 p-3 bg-[#0c0e10]/95 hairline-bronze backdrop-blur-md rounded shadow-2xl z-40 text-left">
                        <div className="font-['Space_Grotesk'] text-xs font-bold text-[#f2be8c] uppercase tracking-wider mb-1">
                          {hotspot.title}
                        </div>
                        <p className="font-['Newsreader'] text-xs text-[#d4c4b7] leading-relaxed">
                          {hotspot.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}

            {/* In-Canvas Bottom Controls HUD */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#121416]/90 backdrop-blur-md px-3.5 py-2 hairline-bronze text-xs font-['Space_Grotesk']">
              {/* Zoom readout & controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleZoomIn}
                  title="Zoom In"
                  className="p-1.5 hover:text-[#f2be8c] text-[#d4c4b7] transition-colors"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={handleZoomOut}
                  title="Zoom Out"
                  className="p-1.5 hover:text-[#f2be8c] text-[#d4c4b7] transition-colors"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-[#f2be8c] px-2 font-medium">
                  {zoomLevel}%
                </span>
                <button
                  onClick={handleResetZoom}
                  className="text-[0.68rem] text-[#9c8e82] hover:text-[#e2e2e5] underline uppercase"
                >
                  Reset
                </button>
              </div>

              {/* 360 Orbit Simulation */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleOrbitRotation}
                  title="Rotate Specimen Angle"
                  className="inline-flex items-center space-x-1 px-2.5 py-1 bg-[#1e2022] hairline-bronze text-[#f2be8c] hover:bg-[#282a2c] transition-colors"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span className="text-[0.68rem] uppercase">Orbit 90°</span>
                </button>
              </div>
            </div>
          </div>

          {/* Archival Caption Below Canvas */}
          <div className="p-3 bg-[#1a1c1e]/60 hairline-bronze text-xs font-['Newsreader'] text-[#9c8e82] italic leading-relaxed">
            Figure 1.1 — Direct archaeological orthographic photogrammetry; {artifact.repository}, accessioned under catalogue record {artifact.accessionNo}. High-dynamic-range calibrated under spectral radiance illumination.
          </div>
        </div>

        {/* RIGHT COLUMN: CURATORIAL DOSSIER & KNOWLEDGE ARCHITECTURE (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Header & Title Hierarchy */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-1 bg-[#0c0e10] hairline-bronze text-[#f2be8c] font-['Space_Grotesk'] text-[0.7rem] uppercase tracking-widest">
                EPOCH {epoch.number} • {epoch.title}
              </span>
              <button
                onClick={() => onToggleBookmark(artifact.id)}
                className={`inline-flex items-center space-x-1 text-xs font-['Space_Grotesk'] transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'text-[#f2be8c]'
                    : 'text-[#9c8e82] hover:text-[#f2be8c]'
                }`}
              >
                <Bookmark
                  className={`w-4 h-4 ${isBookmarked ? 'fill-[#f2be8c]' : ''}`}
                />
                <span>{isBookmarked ? 'Saved to Study List' : 'Save Masterpiece'}</span>
              </button>
            </div>

            <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#e2e2e5] mb-2 leading-tight">
              {artifact.name}
            </h1>

            <p className="font-['Newsreader'] text-[#f2be8c] italic text-base mb-1">
              {artifact.subTitle}
            </p>

            <div className="flex items-center space-x-3 text-xs font-['Space_Grotesk'] text-[#9c8e82]">
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-[#f2be8c]" />
                <span>{artifact.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-[#f2be8c]" />
                <span>{artifact.location}</span>
              </span>
            </div>
          </div>

          {/* Structured Metadata Tabular Matrix */}
          <div className="bg-[#0c0e10] hairline-bronze p-4 space-y-2.5 text-xs font-['Space_Grotesk']">
            <div className="flex justify-between border-b border-[#50453b]/20 pb-1.5">
              <span className="text-[#9c8e82]">Material & Medium:</span>
              <span className="text-[#e2e2e5] font-medium text-right">
                {artifact.material}
              </span>
            </div>
            <div className="flex justify-between border-b border-[#50453b]/20 pb-1.5">
              <span className="text-[#9c8e82]">Dimensions:</span>
              <span className="text-[#e2e2e5] text-right">{artifact.dimensions}</span>
            </div>
            <div className="flex justify-between border-b border-[#50453b]/20 pb-1.5">
              <span className="text-[#9c8e82]">Period / Culture:</span>
              <span className="text-[#e2e2e5] text-right">{artifact.period}</span>
            </div>
            <div className="flex justify-between border-b border-[#50453b]/20 pb-1.5">
              <span className="text-[#9c8e82]">Current Repository:</span>
              <span className="text-[#f2be8c] font-medium text-right">
                {artifact.repository}
              </span>
            </div>
            <div className="flex justify-between border-b border-[#50453b]/20 pb-1.5">
              <span className="text-[#9c8e82]">Accession Number:</span>
              <span className="text-[#e2e2e5] text-right">{artifact.accessionNo}</span>
            </div>
            {artifact.stratigraphy && (
              <div className="flex justify-between">
                <span className="text-[#9c8e82]">Archaeological Stratum:</span>
                <span className="text-[#e2e2e5] text-right text-[0.7rem]">
                  {artifact.stratigraphy}
                </span>
              </div>
            )}
          </div>

          {/* Tabbed Curatorial Dossier Navigation */}
          <div className="border-b border-[#50453b]/30 flex space-x-4 overflow-x-auto no-scrollbar text-xs font-['Space_Grotesk']">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2.5 uppercase tracking-wider transition-colors cursor-pointer shrink-0 ${
                activeTab === 'overview'
                  ? 'text-[#f2be8c] border-b-2 border-[#f2be8c] font-semibold'
                  : 'text-[#9c8e82] hover:text-[#d4c4b7]'
              }`}
            >
              1. Overview
            </button>
            <button
              onClick={() => setActiveTab('context')}
              className={`pb-2.5 uppercase tracking-wider transition-colors cursor-pointer shrink-0 ${
                activeTab === 'context'
                  ? 'text-[#f2be8c] border-b-2 border-[#f2be8c] font-semibold'
                  : 'text-[#9c8e82] hover:text-[#d4c4b7]'
              }`}
            >
              2. Historical Context
            </button>
            <button
              onClick={() => setActiveTab('significance')}
              className={`pb-2.5 uppercase tracking-wider transition-colors cursor-pointer shrink-0 ${
                activeTab === 'significance'
                  ? 'text-[#f2be8c] border-b-2 border-[#f2be8c] font-semibold'
                  : 'text-[#9c8e82] hover:text-[#d4c4b7]'
              }`}
            >
              3. Artistic Significance
            </button>
            <button
              onClick={() => setActiveTab('technique')}
              className={`pb-2.5 uppercase tracking-wider transition-colors cursor-pointer shrink-0 ${
                activeTab === 'technique'
                  ? 'text-[#f2be8c] border-b-2 border-[#f2be8c] font-semibold'
                  : 'text-[#9c8e82] hover:text-[#d4c4b7]'
              }`}
            >
              4. Metallurgy & Technique
            </button>
            <button
              onClick={() => setActiveTab('provenance')}
              className={`pb-2.5 uppercase tracking-wider transition-colors cursor-pointer shrink-0 ${
                activeTab === 'provenance'
                  ? 'text-[#f2be8c] border-b-2 border-[#f2be8c] font-semibold'
                  : 'text-[#9c8e82] hover:text-[#d4c4b7]'
              }`}
            >
              5. Provenance
            </button>
          </div>

          {/* TAB CONTENT PANEL */}
          <div className="min-h-[220px]">
            {activeTab === 'overview' && (
              <div className="space-y-3">
                {artifact.overviewNarrative.map((para, i) => (
                  <p
                    key={i}
                    className="font-['Newsreader'] text-sm md:text-base text-[#d4c4b7] leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            )}

            {activeTab === 'context' && (
              <div className="space-y-3">
                <div className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#f2be8c] mb-1">
                  Societal & Dynastic Paradigm
                </div>
                {artifact.historicalContext.map((para, i) => (
                  <p
                    key={i}
                    className="font-['Newsreader'] text-sm md:text-base text-[#d4c4b7] leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            )}

            {activeTab === 'significance' && (
              <div className="space-y-3">
                <div className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#f2be8c] mb-1">
                  Aesthetic Evolution & Scholarly Impact
                </div>
                {artifact.artisticSignificance.map((para, i) => (
                  <p
                    key={i}
                    className="font-['Newsreader'] text-sm md:text-base text-[#d4c4b7] leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            )}

            {activeTab === 'technique' && (
              <div className="space-y-3">
                <div className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#f2be8c]">
                  {artifact.technique.title}
                </div>
                <p className="font-['Newsreader'] text-sm md:text-base text-[#d4c4b7] leading-relaxed">
                  {artifact.technique.narrative}
                </p>
                <ul className="space-y-2 pt-2">
                  {artifact.technique.points.map((pt, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-2 text-xs font-['Space_Grotesk'] text-[#e2e2e5]"
                    >
                      <span className="text-[#f2be8c] mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'provenance' && (
              <div className="space-y-3 text-xs font-['Space_Grotesk']">
                <div className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#f2be8c]">
                  Excavation & Institutional Chain of Custody
                </div>
                <p className="font-['Newsreader'] text-sm text-[#d4c4b7] leading-relaxed">
                  {artifact.provenance?.narrative ||
                    `Unearthed at ${artifact.location}. Accessioned into the permanent repository of ${artifact.repository}.`}
                </p>
                <div className="p-3 bg-[#0c0e10] hairline-bronze space-y-1 text-[#9c8e82]">
                  <div>
                    <span className="text-[#e2e2e5]">Repository:</span>{' '}
                    {artifact.repository}
                  </div>
                  <div>
                    <span className="text-[#e2e2e5]">Permanent Vitrine:</span>{' '}
                    {artifact.provenance?.permanentInstallation ||
                      'National Antiquities Hall'}
                  </div>
                  <div>
                    <span className="text-[#e2e2e5]">Preservation Standard:</span>{' '}
                    {artifact.provenance?.conservationStandard ||
                      'Inert atmosphere, climate-controlled'}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Curatorial Quote Callout */}
          {artifact.curatorialQuote && (
            <div className="border-l-2 border-[#f2be8c] pl-4 py-2 bg-[#1a1c1e]/40">
              <p className="font-['Newsreader'] text-sm italic text-[#e2e2e5]">
                “{artifact.curatorialQuote.text}”
              </p>
              <div className="font-['Space_Grotesk'] text-[0.7rem] text-[#f2be8c] uppercase tracking-wider mt-1">
                — {artifact.curatorialQuote.author}
              </div>
            </div>
          )}

          {/* Scholarly Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => onOpenCitation(artifact)}
              className="flex-1 py-2.5 px-4 bg-[#1e2022] hover:bg-[#282a2c] hairline-bronze text-[#f2be8c] font-['Space_Grotesk'] text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Cite This Artifact (Chicago / APA)</span>
            </button>

            <button
              onClick={handleCopyCitation}
              className="py-2.5 px-4 bg-[#0c0e10] hover:bg-[#1a1c1e] hairline-bronze text-[#d4c4b7] font-['Space_Grotesk'] text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
              title="Copy citation snippet"
            >
              {copiedNotification ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#9dd2c8]" />
                  <span className="text-[#9dd2c8]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. COHORT COMPARISON: RELATED MASTERWORKS OF THIS EPOCH */}
      <section className="max-w-7xl mx-auto mt-24 pt-12 border-t border-[#50453b]/20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="font-['Space_Grotesk'] text-xs text-[#f2be8c] uppercase tracking-widest mb-1">
              Curatorial Cohort
            </div>
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#e2e2e5]">
              Other Masterworks from {epoch.title}
            </h2>
          </div>
          <button
            onClick={() => onBackToTimeline(artifact.epochId)}
            className="text-xs font-['Space_Grotesk'] text-[#f2be8c] hover:underline flex items-center space-x-1"
          >
            <span>View Full Timeline Axis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {epochArtifacts
            .filter((a) => a.id !== artifact.id)
            .map((cohortItem) => (
              <div
                key={cohortItem.id}
                onClick={() => onSelectArtifact(cohortItem)}
                className="group bg-[#1a1c1e] hairline-bronze p-4 hover:border-[#f2be8c] transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] bg-[#0c0e10] overflow-hidden mb-3 relative">
                    <img
                      src={cohortItem.imageUrl}
                      alt={cohortItem.altText}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#0c0e10]/90 hairline-bronze text-[0.65rem] font-['Space_Grotesk'] text-[#f2be8c]">
                      {cohortItem.date}
                    </span>
                  </div>

                  <h3 className="font-['Playfair_Display'] text-base text-[#e2e2e5] group-hover:text-[#f2be8c] transition-colors">
                    {cohortItem.name}
                  </h3>
                  <p className="font-['Newsreader'] text-xs text-[#9c8e82] line-clamp-2 mt-1">
                    {cohortItem.shortDescription}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#50453b]/20 flex justify-between items-center text-[0.7rem] font-['Space_Grotesk'] text-[#f2be8c]">
                  <span>Inspect Specimen</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};
