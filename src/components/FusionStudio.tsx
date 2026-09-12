import React, { useState, useMemo, useRef } from 'react';
import {
  Palette,
  Sparkles,
  Move,
  RotateCw,
  Trash2,
  Plus,
  Compass,
  Layers,
  Info,
  RefreshCw,
  BookOpen,
  ArrowRight,
  Sliders,
  Check,
  Download,
  Copy,
  FlipHorizontal
} from 'lucide-react';
import {
  FUSION_STYLES,
  MOTIF_LIBRARY,
  FUSION_PRESETS,
  analyzeFusionComposition
} from '../data/fusionData';
import { MotifSvgRenderer } from './MotifSvgRenderer';
import { CanvasElement, MotifDefinition, MotifTint, PaintingStyleId } from '../types';

interface FusionStudioProps {
  initialStyleFocus?: 'warli' | 'phad';
  onNavigateToArtMapRegion: (regionId: string) => void;
  onNavigateToTimeline: () => void;
}

export const FusionStudio: React.FC<FusionStudioProps> = ({
  initialStyleFocus = 'warli',
  onNavigateToArtMapRegion,
  onNavigateToTimeline
}) => {
  // Active comparison style tab
  const [activeCompareStyle, setActiveCompareStyle] = useState<'warli' | 'phad'>(initialStyleFocus);
  // Motif library filter: 'all' | 'warli' | 'phad' | 'fusion'
  const [motifFilter, setMotifFilter] = useState<'all' | 'warli' | 'phad' | 'fusion'>('all');
  // Canvas background surface: 'geru' | 'khadadi' | 'indigo' | 'cowdung'
  const [backgroundSurface, setBackgroundSurface] = useState<'geru' | 'khadadi' | 'indigo' | 'cowdung'>('geru');

  // Canvas elements state
  const [elements, setElements] = useState<CanvasElement[]>(FUSION_PRESETS[0].elements);
  const [selectedElementId, setSelectedElementId] = useState<string | null>('el-3');

  // Canvas container ref for dragging / positioning
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [copyFeedback, setCopyFeedback] = useState<boolean>(false);

  // Selected element helper
  const selectedElement = useMemo(() => {
    return elements.find((el) => el.id === selectedElementId) || null;
  }, [elements, selectedElementId]);

  // Dynamic analysis report
  const analysis = useMemo(() => {
    return analyzeFusionComposition(elements, backgroundSurface);
  }, [elements, backgroundSurface]);

  // Background CSS styles
  const backgroundClass = useMemo(() => {
    switch (backgroundSurface) {
      case 'geru':
        // Terracotta Red-Ochre Geru
        return 'bg-[#70291e] border-[#8e392b] shadow-inner';
      case 'khadadi':
        // Sized Khadi canvas cloth
        return 'bg-[#d8ccb8] text-[#1c1a18] border-[#c0b098] shadow-inner';
      case 'indigo':
        // Midnight Rajput Indigo
        return 'bg-[#182738] border-[#2a3f58] shadow-inner';
      case 'cowdung':
        // Rustic earthen cow dung plaster
        return 'bg-[#3b342b] border-[#52493d] shadow-inner';
      default:
        return 'bg-[#70291e]';
    }
  }, [backgroundSurface]);

  // Add motif to canvas
  const handleAddMotif = (motif: MotifDefinition) => {
    const newEl: CanvasElement = {
      id: `el-${Date.now()}`,
      motifId: motif.id,
      style: motif.style,
      name: motif.name,
      category: motif.category,
      x: 35 + Math.random() * 30,
      y: 35 + Math.random() * 30,
      scale: motif.defaultScale || 1.0,
      rotation: 0,
      flipped: false,
      tint: motif.style === 'warli' ? 'monochrome-white' : 'default'
    };
    setElements((prev) => [...prev, newEl]);
    setSelectedElementId(newEl.id);
  };

  // Update selected element property
  const updateSelectedElement = (updates: Partial<CanvasElement>) => {
    if (!selectedElementId) return;
    setElements((prev) =>
      prev.map((el) => (el.id === selectedElementId ? { ...el, ...updates } : el))
    );
  };

  // Delete selected element
  const handleDeleteElement = (id: string) => {
    setElements((prev) => prev.filter((el) => el.id !== id));
    if (selectedElementId === id) {
      setSelectedElementId(null);
    }
  };

  // Duplicate selected element
  const handleDuplicateElement = (el: CanvasElement) => {
    const dup: CanvasElement = {
      ...el,
      id: `el-${Date.now()}`,
      x: Math.min(85, el.x + 6),
      y: Math.min(85, el.y + 6)
    };
    setElements((prev) => [...prev, dup]);
    setSelectedElementId(dup.id);
  };

  // Load preset
  const handleLoadPreset = (presetId: string) => {
    const p = FUSION_PRESETS.find((pr) => pr.id === presetId);
    if (p) {
      setElements(p.elements);
      setBackgroundSurface(p.background as any);
      setSelectedElementId(p.elements[0]?.id || null);
    }
  };

  // Canvas click handler for positioning
  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current || !selectedElementId) return;
    // Only reposition if clicking on the background, not on another element
    if ((e.target as HTMLElement).getAttribute('data-canvas-bg') === 'true') {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      updateSelectedElement({
        x: Math.round(x),
        y: Math.round(y)
      });
    }
  };

  // Dragging support
  const handlePointerDown = (id: string, e: React.PointerEvent) => {
    e.stopPropagation();
    setSelectedElementId(id);
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !selectedElementId || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.max(5, Math.min(95, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(5, Math.min(95, ((e.clientY - rect.top) / rect.height) * 100));
    updateSelectedElement({
      x: Math.round(x),
      y: Math.round(y)
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleCopyAnalysis = () => {
    const text = `KALĀ CHRONICLES — SYNTHESIS REPORT: WARLI & PHAD FUSION
Composition: ${analysis.compositionBalance.toUpperCase()}
Warli Elements: ${analysis.warliElements.join(', ') || 'None'}
Phad Elements: ${analysis.phadElements.join(', ') || 'None'}
Hybrid Elements: ${analysis.fusionElements.join(', ') || 'None'}

Curatorial Analysis:
${analysis.creativeSynthesisEssay}

Pedagogical Insights:
${analysis.pedagogicalKeyTakeaways.map((t, i) => `${i + 1}. ${t}`).join('\n')}`;

    navigator.clipboard.writeText(text);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  const warliData = FUSION_STYLES.warli;
  const phadData = FUSION_STYLES.phad;

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 md:px-16 min-h-screen bg-[#121416] text-[#e2e2e5]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto mb-10 pb-6 border-b border-[#50453b]/30">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-['Space_Grotesk'] text-[#f2be8c] uppercase tracking-widest mb-2">
              <Palette className="w-4 h-4" />
              <span>ACTIVITY 3 • REGIONAL PAINTING SYNTHESIS</span>
            </div>
            <h1 className="font-['Playfair_Display'] text-3xl md:text-5xl text-[#e2e2e5] tracking-tight">
              Fusion Studio: Warli & Phad
            </h1>
            <p className="font-['Newsreader'] text-base md:text-lg text-[#9c8e82] italic mt-2 max-w-3xl">
              Investigating stylistic convergence between the ritual geometric abstraction of Maharashtra’s Warli tribe and the heroic narrative scroll scrolls of Rajasthan’s Phad balladeers.
            </p>
          </div>

          {/* Quick Presets Picker */}
          <div className="flex items-center gap-2">
            <span className="text-[0.65rem] font-['Space_Grotesk'] text-[#9c8e82] uppercase tracking-wider hidden sm:inline">
              CURATORIAL PRESETS:
            </span>
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#1a1c1e] hairline-bronze">
              {FUSION_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleLoadPreset(preset.id)}
                  className="px-2.5 py-1 text-xs font-['Space_Grotesk'] uppercase tracking-wider text-[#9c8e82] hover:text-[#f2be8c] hover:bg-[#121416] transition-colors"
                >
                  {preset.title.split(' ')[0]} {preset.title.split(' ')[1] || ''}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: SIDE-BY-SIDE STYLE COMPARISON PANELS */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="bg-[#1a1c1e] hairline-bronze p-6">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#50453b]/20">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-[#f2be8c]" />
              <h2 className="font-['Playfair_Display'] text-xl text-[#e2e2e5]">
                Comparative Stylistic Analysis: Two Aesthetic Dialects
              </h2>
            </div>
            <span className="font-['Space_Grotesk'] text-xs text-[#9c8e82] uppercase">
              TRIBAL RITUAL VS. BARDIC FOLK SCROLL
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* STYLE A: WARLI */}
            <div className="bg-[#121416] hairline-bronze p-5 space-y-4 border-l-2 border-l-[#f6f4ea]/40">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[0.65rem] font-['Space_Grotesk'] text-[#f2be8c] uppercase tracking-widest block">
                    STYLE A • WESTERN DECCAN
                  </span>
                  <h3 className="font-['Playfair_Display'] text-xl text-[#f6f4ea]">
                    {warliData.name}
                  </h3>
                  <span className="font-['Newsreader'] text-xs text-[#9c8e82] italic block">
                    {warliData.region}
                  </span>
                </div>
                <button
                  onClick={() => onNavigateToArtMapRegion('maharashtra')}
                  className="p-1.5 bg-[#1a1c1e] text-[#f2be8c] hover:bg-[#f2be8c] hover:text-[#482904] text-[0.65rem] font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze transition-colors flex items-center gap-1"
                >
                  <Compass className="w-3 h-3" />
                  <span>Map</span>
                </button>
              </div>

              {/* Core Attributes */}
              <div className="space-y-2 text-xs font-['Space_Grotesk']">
                <div className="p-2.5 bg-[#1a1c1e]/60 hairline-bronze">
                  <span className="text-[#f2be8c] block text-[0.65rem] uppercase">Primary Medium & Ground:</span>
                  <span className="text-[#e2e2e5]">{warliData.primaryMedium} on {warliData.groundBase}</span>
                </div>
                <div className="p-2.5 bg-[#1a1c1e]/60 hairline-bronze">
                  <span className="text-[#f2be8c] block text-[0.65rem] uppercase">Sacred Geometry:</span>
                  <span className="text-[#e2e2e5]">{warliData.sacredGeometry}</span>
                </div>
                <div className="p-2.5 bg-[#1a1c1e]/60 hairline-bronze">
                  <span className="text-[#f2be8c] block text-[0.65rem] uppercase">Visual Organization:</span>
                  <span className="text-[#e2e2e5]">{warliData.visualOrganization}</span>
                </div>
              </div>

              {/* Key Bullet Points */}
              <ul className="space-y-1.5 text-xs font-['Newsreader'] text-[#d4c4b7] list-disc list-inside">
                {warliData.characteristics.slice(0, 4).map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              {/* Palette Swatches */}
              <div>
                <span className="text-[0.65rem] font-['Space_Grotesk'] text-[#50453b] uppercase tracking-widest block mb-1">
                  HISTORIC MINERAL & ORGANIC PALETTE:
                </span>
                <div className="flex gap-2">
                  {warliData.colorPalette.map((col, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full border border-black/50" style={{ backgroundColor: col.hex }}></span>
                      <span className="text-[0.65rem] font-['Space_Grotesk'] text-[#9c8e82]">{col.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* STYLE B: PHAD */}
            <div className="bg-[#121416] hairline-bronze p-5 space-y-4 border-l-2 border-l-[#c83827]">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[0.65rem] font-['Space_Grotesk'] text-[#f2be8c] uppercase tracking-widest block">
                    STYLE B • THAR DESERT
                  </span>
                  <h3 className="font-['Playfair_Display'] text-xl text-[#f2be8c]">
                    {phadData.name}
                  </h3>
                  <span className="font-['Newsreader'] text-xs text-[#9c8e82] italic block">
                    {phadData.region}
                  </span>
                </div>
                <button
                  onClick={() => onNavigateToArtMapRegion('rajasthan')}
                  className="p-1.5 bg-[#1a1c1e] text-[#f2be8c] hover:bg-[#f2be8c] hover:text-[#482904] text-[0.65rem] font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze transition-colors flex items-center gap-1"
                >
                  <Compass className="w-3 h-3" />
                  <span>Map</span>
                </button>
              </div>

              {/* Core Attributes */}
              <div className="space-y-2 text-xs font-['Space_Grotesk']">
                <div className="p-2.5 bg-[#1a1c1e]/60 hairline-bronze">
                  <span className="text-[#f2be8c] block text-[0.65rem] uppercase">Primary Medium & Ground:</span>
                  <span className="text-[#e2e2e5]">{phadData.primaryMedium} on {phadData.groundBase}</span>
                </div>
                <div className="p-2.5 bg-[#1a1c1e]/60 hairline-bronze">
                  <span className="text-[#f2be8c] block text-[0.65rem] uppercase">Narrative Architecture:</span>
                  <span className="text-[#e2e2e5]">{phadData.sacredGeometry}</span>
                </div>
                <div className="p-2.5 bg-[#1a1c1e]/60 hairline-bronze">
                  <span className="text-[#f2be8c] block text-[0.65rem] uppercase">Visual Organization:</span>
                  <span className="text-[#e2e2e5]">{phadData.visualOrganization}</span>
                </div>
              </div>

              {/* Key Bullet Points */}
              <ul className="space-y-1.5 text-xs font-['Newsreader'] text-[#d4c4b7] list-disc list-inside">
                {phadData.characteristics.slice(0, 4).map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              {/* Palette Swatches */}
              <div>
                <span className="text-[0.65rem] font-['Space_Grotesk'] text-[#50453b] uppercase tracking-widest block mb-1">
                  HISTORIC MINERAL & GOUACHE PALETTE:
                </span>
                <div className="flex flex-wrap gap-2">
                  {phadData.colorPalette.map((col, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full border border-black/50" style={{ backgroundColor: col.hex }}></span>
                      <span className="text-[0.65rem] font-['Space_Grotesk'] text-[#9c8e82]">{col.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: DIGITAL COMPOSITION WORKSPACE */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
        {/* MOTIF PALETTE / ASSET LIBRARY (4 Cols) */}
        <div className="lg:col-span-4 bg-[#1a1c1e] hairline-bronze p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#50453b]/20">
            <div>
              <span className="font-['Space_Grotesk'] text-[0.65rem] text-[#f2be8c] uppercase tracking-widest block">
                ATELIER MOTIF REPOSITORY
              </span>
              <h3 className="font-['Playfair_Display'] text-lg text-[#e2e2e5]">
                Select & Inject Motifs
              </h3>
            </div>
            <span className="text-xs font-['Space_Grotesk'] text-[#9c8e82]">
              {MOTIF_LIBRARY.length} Assets
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex p-1 bg-[#121416] hairline-bronze text-xs font-['Space_Grotesk']">
            {[
              { id: 'all', label: 'All' },
              { id: 'warli', label: 'Warli' },
              { id: 'phad', label: 'Phad' },
              { id: 'fusion', label: 'Hybrid' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setMotifFilter(tab.id as any)}
                className={`flex-1 py-1 uppercase tracking-wider transition-colors ${
                  motifFilter === tab.id
                    ? 'bg-[#f2be8c] text-[#482904] font-medium'
                    : 'text-[#9c8e82] hover:text-[#e2e2e5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Motifs Grid */}
          <div className="grid grid-cols-2 gap-2.5 max-h-[440px] overflow-y-auto no-scrollbar pr-1">
            {MOTIF_LIBRARY.filter((m) => motifFilter === 'all' || m.style === motifFilter).map((motif) => (
              <div
                key={motif.id}
                onClick={() => handleAddMotif(motif)}
                className="group bg-[#121416] hover:bg-[#1f2225] hairline-bronze p-3 flex flex-col items-center justify-between cursor-pointer hover:border-[#f2be8c] transition-all text-center relative"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-2">
                  <MotifSvgRenderer
                    svgPath={motif.svgPath}
                    tint={motif.style === 'warli' ? 'monochrome-white' : 'default'}
                    className="w-14 h-14 transition-transform group-hover:scale-110"
                  />
                </div>

                <span className="font-['Playfair_Display'] text-xs text-[#e2e2e5] group-hover:text-[#f2be8c] line-clamp-1 block">
                  {motif.name}
                </span>

                <div className="flex items-center justify-between w-full mt-2 pt-1 border-t border-[#50453b]/20">
                  <span className="text-[0.6rem] font-['Space_Grotesk'] uppercase text-[#9c8e82]">
                    {motif.style}
                  </span>
                  <span className="text-[0.65rem] font-['Space_Grotesk'] text-[#f2be8c] flex items-center gap-0.5">
                    <Plus className="w-3 h-3" /> Add
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Tip */}
          <div className="p-3 bg-[#121416] hairline-bronze flex items-start space-x-2 text-[0.7rem] font-['Newsreader'] text-[#9c8e82]">
            <Info className="w-3.5 h-3.5 text-[#f2be8c] shrink-0 mt-0.5" />
            <span>
              Click any motif to place it on the canvas. Click and drag elements on canvas or use the precision control dock to scale, rotate, flip, and tint.
            </span>
          </div>
        </div>

        {/* INTERACTIVE CANVASES & CONTROLS (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Surface & Global Canvas Controls Header */}
          <div className="bg-[#1a1c1e] hairline-bronze p-4 flex flex-wrap items-center justify-between gap-4">
            {/* Ground Surface Switcher */}
            <div className="flex items-center space-x-2">
              <span className="text-xs font-['Space_Grotesk'] text-[#9c8e82] uppercase">
                GROUND BASE:
              </span>
              <div className="flex gap-1.5">
                {[
                  { id: 'geru', name: 'Geru Ochre Mud', color: '#70291e' },
                  { id: 'khadadi', name: 'Khadadi Cloth', color: '#d8ccb8' },
                  { id: 'indigo', name: 'Indigo Night', color: '#182738' },
                  { id: 'cowdung', name: 'Cow Dung Clay', color: '#3b342b' }
                ].map((bg) => (
                  <button
                    key={bg.id}
                    onClick={() => setBackgroundSurface(bg.id as any)}
                    className={`px-2.5 py-1 text-[0.7rem] font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze flex items-center gap-1.5 transition-colors ${
                      backgroundSurface === bg.id
                        ? 'bg-[#f2be8c] text-[#482904] font-semibold'
                        : 'bg-[#121416] text-[#9c8e82] hover:text-[#e2e2e5]'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full border border-black/30" style={{ backgroundColor: bg.color }}></span>
                    <span>{bg.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Canvas Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setElements([])}
                className="px-2.5 py-1 bg-[#121416] hover:bg-red-950/40 text-red-300 hover:text-red-200 text-xs font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze transition-colors flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
              <button
                onClick={handleCopyAnalysis}
                className="px-3 py-1 bg-[#121416] hover:bg-[#f2be8c] hover:text-[#482904] text-[#f2be8c] text-xs font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze transition-colors flex items-center gap-1"
              >
                {copyFeedback ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copyFeedback ? 'Copied!' : 'Copy Report'}</span>
              </button>
            </div>
          </div>

          {/* DIGITAL CANVAS WORKSPACE */}
          <div
            ref={canvasRef}
            data-canvas-bg="true"
            onClick={handleCanvasClick}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className={`relative w-full aspect-[16/10] md:aspect-[16/9] ${backgroundClass} hairline-bronze overflow-hidden cursor-crosshair select-none shadow-2xl transition-colors duration-300`}
          >
            {/* Subtle Texture Grain Overlay */}
            <div
              data-canvas-bg="true"
              className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:12px_12px]"
            ></div>

            {/* Empty Canvas Notice */}
            {elements.length === 0 && (
              <div
                data-canvas-bg="true"
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none"
              >
                <Palette className="w-12 h-12 text-[#f2be8c]/40 mb-3" />
                <h4 className="font-['Playfair_Display'] text-xl text-[#e2e2e5]">
                  Pristine Atelier Surface
                </h4>
                <p className="font-['Newsreader'] text-sm text-[#9c8e82] max-w-md mt-1">
                  Select motifs from the left palette to begin composing a visual synthesis between Warli tribal geometry and Phad scroll narrative registers.
                </p>
              </div>
            )}

            {/* Render Canvas Elements */}
            {elements.map((el) => {
              const isSelected = selectedElementId === el.id;
              const motifDef = MOTIF_LIBRARY.find((m) => m.id === el.motifId);
              const svgPath = motifDef ? motifDef.svgPath : 'warli-tarpa-dance';

              // Sizing calculation
              const basePx = 90 * el.scale;

              return (
                <div
                  key={el.id}
                  onPointerDown={(e) => handlePointerDown(el.id, e)}
                  style={{
                    left: `${el.x}%`,
                    top: `${el.y}%`,
                    transform: `translate(-50%, -50%) rotate(${el.rotation}deg) scaleX(${el.flipped ? -1 : 1})`,
                    width: `${basePx}px`,
                    height: `${basePx}px`
                  }}
                  className={`absolute cursor-move transition-[box-shadow,border] ${
                    isSelected
                      ? 'ring-2 ring-[#f2be8c] ring-offset-2 ring-offset-black/50 z-20'
                      : 'hover:ring-1 hover:ring-white/40 z-10'
                  }`}
                >
                  <div className="w-full h-full pointer-events-none">
                    <MotifSvgRenderer
                      svgPath={svgPath}
                      tint={el.tint}
                      className="w-full h-full drop-shadow-md"
                    />
                  </div>

                  {/* Element Hover Pill */}
                  {isSelected && (
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 bg-black/90 text-[#f2be8c] text-[0.65rem] font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze pointer-events-none">
                      {el.name}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ACTIVE ELEMENT PRECISION CONTROL DOCK */}
          {selectedElement ? (
            <div className="bg-[#1a1c1e] hairline-bronze p-4 space-y-4">
              <div className="flex items-center justify-between border-b border-[#50453b]/20 pb-2">
                <div className="flex items-center space-x-2">
                  <Sliders className="w-4 h-4 text-[#f2be8c]" />
                  <span className="font-['Space_Grotesk'] text-xs text-[#f2be8c] uppercase tracking-wider">
                    ACTIVE ELEMENT: <span className="text-[#e2e2e5] font-semibold">{selectedElement.name}</span>
                  </span>
                  <span className="text-[0.65rem] font-['Space_Grotesk'] text-[#9c8e82] uppercase px-2 py-0.5 bg-[#121416] hairline-bronze">
                    {selectedElement.style}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDuplicateElement(selectedElement)}
                    className="p-1.5 bg-[#121416] text-[#e2e2e5] hover:text-[#f2be8c] hairline-bronze text-xs font-['Space_Grotesk'] flex items-center gap-1"
                    title="Duplicate Element"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Duplicate</span>
                  </button>
                  <button
                    onClick={() => handleDeleteElement(selectedElement.id)}
                    className="p-1.5 bg-[#121416] text-red-400 hover:text-red-300 hairline-bronze text-xs font-['Space_Grotesk'] flex items-center gap-1"
                    title="Remove from Canvas"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center text-xs font-['Space_Grotesk']">
                {/* Scale Slider */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[#9c8e82]">
                    <span>SCALE:</span>
                    <span className="text-[#f2be8c]">{selectedElement.scale.toFixed(2)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="2.5"
                    step="0.1"
                    value={selectedElement.scale}
                    onChange={(e) => updateSelectedElement({ scale: parseFloat(e.target.value) })}
                    className="w-full accent-[#f2be8c]"
                  />
                </div>

                {/* Rotation Slider */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[#9c8e82]">
                    <span>ROTATION:</span>
                    <span className="text-[#f2be8c]">{selectedElement.rotation}°</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    step="5"
                    value={selectedElement.rotation}
                    onChange={(e) => updateSelectedElement({ rotation: parseInt(e.target.value) })}
                    className="w-full accent-[#f2be8c]"
                  />
                </div>

                {/* Flip & Center Controls */}
                <div className="flex gap-2">
                  <button
                    onClick={() => updateSelectedElement({ flipped: !selectedElement.flipped })}
                    className={`flex-1 py-1.5 text-xs font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze transition-colors flex items-center justify-center gap-1 ${
                      selectedElement.flipped
                        ? 'bg-[#f2be8c] text-[#482904] font-medium'
                        : 'bg-[#121416] text-[#9c8e82] hover:text-[#e2e2e5]'
                    }`}
                  >
                    <FlipHorizontal className="w-3.5 h-3.5" />
                    <span>Flip</span>
                  </button>
                  <button
                    onClick={() => updateSelectedElement({ rotation: 0 })}
                    className="px-2.5 py-1.5 bg-[#121416] text-[#9c8e82] hover:text-[#e2e2e5] text-xs font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze transition-colors"
                  >
                    Reset
                  </button>
                </div>

                {/* Tint Selector */}
                <div className="space-y-1">
                  <span className="text-[0.65rem] text-[#9c8e82] uppercase block">PIGMENT TINT:</span>
                  <div className="flex gap-1.5">
                    {[
                      { id: 'default', label: 'Orig', color: '#f2be8c' },
                      { id: 'monochrome-white', label: 'Rice', color: '#f6f4ea' },
                      { id: 'vermillion', label: 'Verm', color: '#c83827' },
                      { id: 'ochre-gold', label: 'Gold', color: '#e8a938' }
                    ].map((t) => (
                      <button
                        key={t.id}
                        onClick={() => updateSelectedElement({ tint: t.id as any })}
                        title={t.label}
                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                          selectedElement.tint === t.id
                            ? 'border-white scale-110 shadow'
                            : 'border-black/50 opacity-70 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: t.color }}
                      >
                        {selectedElement.tint === t.id && (
                          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#1a1c1e] hairline-bronze p-4 text-center text-xs font-['Space_Grotesk'] text-[#9c8e82]">
              Select any motif on the canvas to adjust its scale, rotation, mirroring, or pigment tint.
            </div>
          )}
        </div>
      </div>

      {/* SECTION 3: "WHAT MAKES THIS A FUSION?" DYNAMIC EXPLANATION SECTION */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1a1c1e] hairline-bronze p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#50453b]/20 gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs font-['Space_Grotesk'] text-[#f2be8c] uppercase tracking-widest mb-1">
                <Sparkles className="w-4 h-4" />
                <span>PEDAGOGICAL SYNTHESIS ENGINE</span>
              </div>
              <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#e2e2e5]">
                What Makes This a Fusion?
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-['Space_Grotesk'] text-[#9c8e82]">COMPOSITION BALANCE:</span>
              <span className="px-3 py-1 bg-[#121416] hairline-bronze font-['Space_Grotesk'] text-xs text-[#f2be8c] uppercase tracking-wider font-semibold">
                {analysis.compositionBalance}
              </span>
            </div>
          </div>

          {/* Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Warli Contribution */}
            <div className="bg-[#121416] hairline-bronze p-4 space-y-2">
              <span className="text-[0.65rem] font-['Space_Grotesk'] text-[#f6f4ea] uppercase tracking-widest block">
                WARLI GRAMMAR INCORPORATED:
              </span>
              {analysis.warliElements.length > 0 ? (
                <ul className="space-y-1 text-xs font-['Newsreader'] text-[#d4c4b7]">
                  {analysis.warliElements.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f6f4ea]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="font-['Newsreader'] text-xs text-[#50453b] italic">
                  No pure Warli elements present on canvas.
                </span>
              )}
              <p className="font-['Newsreader'] text-xs text-[#9c8e82] pt-2 border-t border-[#50453b]/20 leading-relaxed">
                Contributes two-triangle kinetic geometry, agrarian fertility cycles, and organic non-hierarchical space.
              </p>
            </div>

            {/* Phad Contribution */}
            <div className="bg-[#121416] hairline-bronze p-4 space-y-2">
              <span className="text-[0.65rem] font-['Space_Grotesk'] text-[#f2be8c] uppercase tracking-widest block">
                PHAD GRAMMAR INCORPORATED:
              </span>
              {analysis.phadElements.length > 0 ? (
                <ul className="space-y-1 text-xs font-['Newsreader'] text-[#d4c4b7]">
                  {analysis.phadElements.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c83827]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="font-['Newsreader'] text-xs text-[#50453b] italic">
                  No pure Phad elements present on canvas.
                </span>
              )}
              <p className="font-['Newsreader'] text-xs text-[#9c8e82] pt-2 border-t border-[#50453b]/20 leading-relaxed">
                Contributes continuous narrative scroll registers, bold facial profiles with almond eyes, and chivalric folklore.
              </p>
            </div>

            {/* Hybrid Synthesis */}
            <div className="bg-[#121416] hairline-bronze p-4 space-y-2">
              <span className="text-[0.65rem] font-['Space_Grotesk'] text-[#f2be8c] uppercase tracking-widest block">
                HYBRID FUSION MOTIFS:
              </span>
              {analysis.fusionElements.length > 0 ? (
                <ul className="space-y-1 text-xs font-['Newsreader'] text-[#d4c4b7]">
                  {analysis.fusionElements.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f2be8c]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="font-['Newsreader'] text-xs text-[#50453b] italic">
                  No pre-fused hybrid motifs active.
                </span>
              )}
              <p className="font-['Newsreader'] text-xs text-[#9c8e82] pt-2 border-t border-[#50453b]/20 leading-relaxed">
                Directly welds tribal inverted triangles with Rajasthani turbans, swords, and scalloped architectural chhatris.
              </p>
            </div>
          </div>

          {/* Curatorial Essay Analysis */}
          <div className="bg-[#121416] hairline-bronze p-5 space-y-3">
            <span className="font-['Space_Grotesk'] text-xs text-[#f2be8c] uppercase tracking-widest block">
              CURATORIAL EVALUATION OF VISUAL SYNTAX:
            </span>
            <p className="font-['Newsreader'] text-sm md:text-base text-[#e2e2e5] leading-relaxed">
              {analysis.creativeSynthesisEssay}
            </p>
          </div>

          {/* College Art-History Assignment Takeaways */}
          <div className="space-y-3">
            <span className="font-['Space_Grotesk'] text-xs text-[#9c8e82] uppercase tracking-widest block">
              ACADEMIC ART-HISTORY INSIGHTS:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {analysis.pedagogicalKeyTakeaways.map((takeaway, i) => (
                <div key={i} className="p-3 bg-[#121416] hairline-bronze text-xs font-['Newsreader'] text-[#d4c4b7] leading-relaxed flex items-start space-x-2">
                  <span className="font-['Space_Grotesk'] text-[#f2be8c] font-semibold">{i + 1}.</span>
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cross-Connection Footer Navigation */}
          <div className="pt-4 border-t border-[#50453b]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-['Space_Grotesk'] text-[#9c8e82]">
              KALĀ CHRONICLES CROSS-CURRICULAR CONNECTIONS
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigateToArtMapRegion('maharashtra')}
                className="px-3 py-1.5 bg-[#121416] hover:bg-[#f2be8c] hover:text-[#482904] text-[#f2be8c] text-xs font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze transition-colors flex items-center gap-1"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Locate on Art Map</span>
              </button>
              <button
                onClick={onNavigateToTimeline}
                className="px-3 py-1.5 bg-[#121416] hover:bg-[#f2be8c] hover:text-[#482904] text-[#f2be8c] text-xs font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze transition-colors flex items-center gap-1"
              >
                <ArrowRight className="w-3.5 h-3.5" />
                <span>Return to Timeline</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
