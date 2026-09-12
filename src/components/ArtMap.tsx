import React, { useState, useMemo } from 'react';
import {
  Compass,
  MapPin,
  Sparkles,
  ArrowRight,
  BookOpen,
  Layers,
  Palette,
  Eye,
  Info,
  ExternalLink,
  RotateCcw,
  Search
} from 'lucide-react';
import { ART_MAP_REGIONS } from '../data/artMapData';
import { ARTIFACTS, EPOCHS } from '../data/museumData';
import { ArtMapRegion, Artifact } from '../types';

interface ArtMapProps {
  onSelectArtifact: (artifact: Artifact) => void;
  onNavigateTimelineToEpoch: (epochId: string) => void;
  onNavigateToFusionStudio: (styleId?: 'warli' | 'phad') => void;
}

export const ArtMap: React.FC<ArtMapProps> = ({
  onSelectArtifact,
  onNavigateTimelineToEpoch,
  onNavigateToFusionStudio
}) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('maharashtra');
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'traditions' | 'artifacts' | 'history' | 'artists'>('traditions');

  // Filtered regions list
  const filteredRegions = useMemo(() => {
    return ART_MAP_REGIONS.filter((region) => {
      if (selectedZone !== 'all' && region.zone !== selectedZone) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = region.stateName.toLowerCase().includes(q);
        const matchesAncient = region.ancientName?.toLowerCase().includes(q) ?? false;
        const matchesTradition = region.traditions.some(
          (t) => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)
        );
        const matchesArtist = region.artists.some((a) => a.name.toLowerCase().includes(q));
        if (!matchesName && !matchesAncient && !matchesTradition && !matchesArtist) {
          return false;
        }
      }
      return true;
    });
  }, [selectedZone, searchQuery]);

  // Selected region object
  const currentRegion = useMemo(() => {
    return ART_MAP_REGIONS.find((r) => r.id === selectedRegionId) || ART_MAP_REGIONS[0];
  }, [selectedRegionId]);

  // Linked museum artifacts for current region
  const linkedArtifacts = useMemo(() => {
    return ARTIFACTS.filter((art) => currentRegion.representativeArtifactIds.includes(art.id));
  }, [currentRegion]);

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 md:px-16 min-h-screen bg-[#121416] text-[#e2e2e5]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto mb-10 pb-6 border-b border-[#50453b]/30">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-['Space_Grotesk'] text-[#f2be8c] uppercase tracking-widest mb-2">
              <Compass className="w-4 h-4" />
              <span>ACTIVITY 2 • DIGITAL CARTOGRAPHIC SURVEY</span>
            </div>
            <h1 className="font-['Playfair_Display'] text-3xl md:text-5xl text-[#e2e2e5] tracking-tight">
              Geographic Spread of Indian Art
            </h1>
            <p className="font-['Newsreader'] text-base md:text-lg text-[#9c8e82] italic mt-2 max-w-3xl">
              Surveying the regional cradles, sacred ateliers, and tribal homelands that nurtured 5,000 years of sculptural metallurgy, court miniature painting, and living ritual expressions.
            </p>
          </div>

          {/* Quick Zone Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#1a1c1e] hairline-bronze">
            {['all', 'Western', 'Northern', 'Eastern', 'Southern', 'Central'].map((zone) => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-3 py-1.5 text-xs font-['Space_Grotesk'] uppercase tracking-wider transition-colors ${
                  selectedZone === zone
                    ? 'bg-[#f2be8c] text-[#482904] font-medium'
                    : 'text-[#9c8e82] hover:text-[#e2e2e5]'
                }`}
              >
                {zone === 'all' ? 'All India' : zone}
              </button>
            ))}
          </div>
        </div>

        {/* Search & Location Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#9c8e82] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search region, tradition, or artist..."
              className="w-full pl-9 pr-4 py-2 bg-[#1a1c1e] hairline-bronze text-xs font-['Space_Grotesk'] text-[#e2e2e5] placeholder-[#50453b] focus:outline-none focus:border-[#f2be8c]"
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-['Space_Grotesk'] text-[#9c8e82]">
            <span>EXPLORING:</span>
            <span className="text-[#f2be8c] font-semibold uppercase">{currentRegion.stateName}</span>
            <span className="text-[#50453b]">•</span>
            <span>{currentRegion.traditions.length} TRADITIONS DOCUMENTED</span>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout: Interactive Map + Curatorial Dossier */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT / CENTER: Interactive Stylized Map of India (7 Cols) */}
        <div className="lg:col-span-6 xl:col-span-7 bg-[#1a1c1e]/60 hairline-bronze p-6 relative overflow-hidden flex flex-col">
          {/* Map Cartographic Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#50453b]/20">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#f2be8c] animate-pulse"></span>
              <span className="font-['Space_Grotesk'] text-xs text-[#f2be8c] uppercase tracking-widest">
                GEOGRAPHIC RADIAL PROJECTION • BHARATAVARSHA
              </span>
            </div>
            <span className="font-['Space_Grotesk'] text-[0.65rem] text-[#9c8e82] tracking-wider">
              LAT 8°N–37°N • LON 68°E–97°E
            </span>
          </div>

          {/* Interactive SVG Cartographic Canvas */}
          <div className="relative w-full aspect-[4/4.6] bg-[#0c0e10] hairline-bronze p-4 flex items-center justify-center overflow-hidden">
            {/* Background Archival Coordinate Grid */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#50453b_1px,transparent_1px)] [background-size:28px_28px] opacity-25"></div>

            {/* Stylized SVG Map of India */}
            <svg
              viewBox="0 0 500 580"
              className="w-full h-full max-h-[560px] select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="regionGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#f2be8c" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#f2be8c" stopOpacity="0" />
                </radialGradient>
                <filter id="bronzeGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Ocean / Surrounding Waters Label */}
              <text x="50" y="440" fill="#3a3734" fontSize="9" fontFamily="Space Grotesk" letterSpacing="3">
                ARABIAN SEA
              </text>
              <text x="350" y="440" fill="#3a3734" fontSize="9" fontFamily="Space Grotesk" letterSpacing="3">
                BAY OF BENGAL
              </text>
              <text x="210" y="565" fill="#3a3734" fontSize="9" fontFamily="Space Grotesk" letterSpacing="3">
                INDIAN OCEAN
              </text>

              {/* Stylized India Subcontinental Coastline & Frontier Polyline */}
              <path
                d="M 190,30
                   L 240,25 L 260,45 L 245,75 L 280,105 L 340,110 L 365,95 L 430,95 L 460,115 L 450,140 L 410,145 L 410,180 L 380,190 L 350,180 L 340,210 L 375,225 L 360,250 L 320,270 L 290,310 L 260,370 L 240,430 L 225,480 L 215,520 L 205,490 L 180,430 L 160,370 L 135,320 L 110,290 L 115,260 L 95,250 L 110,210 L 125,180 L 135,130 L 160,80 Z"
                fill="#16181a"
                stroke="#50453b"
                strokeWidth="1.5"
                strokeDasharray="4 2"
              />

              {/* Regional Territory Shapes (Stylized Polygons) */}
              {/* 1. Himachal Pradesh (North) */}
              <polygon
                points="195,50 230,55 240,85 210,95 185,75"
                className={`transition-all duration-200 cursor-pointer ${
                  selectedRegionId === 'himachal-pradesh'
                    ? 'fill-[#f2be8c]/25 stroke-[#f2be8c] stroke-2'
                    : 'fill-[#1e2022] hover:fill-[#25282a] stroke-[#50453b]'
                }`}
                onClick={() => setSelectedRegionId('himachal-pradesh')}
                onMouseEnter={() => setHoveredRegionId('himachal-pradesh')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />

              {/* 2. Rajasthan (West) */}
              <polygon
                points="115,145 185,130 205,190 180,240 120,230 100,180"
                className={`transition-all duration-200 cursor-pointer ${
                  selectedRegionId === 'rajasthan'
                    ? 'fill-[#f2be8c]/25 stroke-[#f2be8c] stroke-2'
                    : 'fill-[#1e2022] hover:fill-[#25282a] stroke-[#50453b]'
                }`}
                onClick={() => setSelectedRegionId('rajasthan')}
                onMouseEnter={() => setHoveredRegionId('rajasthan')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />

              {/* 3. Uttar Pradesh (North-Central) */}
              <polygon
                points="195,115 270,120 310,165 275,200 215,185"
                className={`transition-all duration-200 cursor-pointer ${
                  selectedRegionId === 'uttar-pradesh'
                    ? 'fill-[#f2be8c]/25 stroke-[#f2be8c] stroke-2'
                    : 'fill-[#1e2022] hover:fill-[#25282a] stroke-[#50453b]'
                }`}
                onClick={() => setSelectedRegionId('uttar-pradesh')}
                onMouseEnter={() => setHoveredRegionId('uttar-pradesh')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />

              {/* 4. Bihar (East) */}
              <polygon
                points="290,165 350,165 350,210 295,210"
                className={`transition-all duration-200 cursor-pointer ${
                  selectedRegionId === 'bihar'
                    ? 'fill-[#f2be8c]/25 stroke-[#f2be8c] stroke-2'
                    : 'fill-[#1e2022] hover:fill-[#25282a] stroke-[#50453b]'
                }`}
                onClick={() => setSelectedRegionId('bihar')}
                onMouseEnter={() => setHoveredRegionId('bihar')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />

              {/* 5. West Bengal (East) */}
              <polygon
                points="335,200 375,190 380,240 345,260 330,225"
                className={`transition-all duration-200 cursor-pointer ${
                  selectedRegionId === 'west-bengal'
                    ? 'fill-[#f2be8c]/25 stroke-[#f2be8c] stroke-2'
                    : 'fill-[#1e2022] hover:fill-[#25282a] stroke-[#50453b]'
                }`}
                onClick={() => setSelectedRegionId('west-bengal')}
                onMouseEnter={() => setHoveredRegionId('west-bengal')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />

              {/* 6. Madhya Pradesh (Central) */}
              <polygon
                points="185,205 280,195 295,265 240,285 180,250"
                className={`transition-all duration-200 cursor-pointer ${
                  selectedRegionId === 'madhya-pradesh'
                    ? 'fill-[#f2be8c]/25 stroke-[#f2be8c] stroke-2'
                    : 'fill-[#1e2022] hover:fill-[#25282a] stroke-[#50453b]'
                }`}
                onClick={() => setSelectedRegionId('madhya-pradesh')}
                onMouseEnter={() => setHoveredRegionId('madhya-pradesh')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />

              {/* 7. Maharashtra (West-Central) */}
              <polygon
                points="145,260 215,265 245,335 180,365 145,310"
                className={`transition-all duration-200 cursor-pointer ${
                  selectedRegionId === 'maharashtra'
                    ? 'fill-[#f2be8c]/25 stroke-[#f2be8c] stroke-2'
                    : 'fill-[#1e2022] hover:fill-[#25282a] stroke-[#50453b]'
                }`}
                onClick={() => setSelectedRegionId('maharashtra')}
                onMouseEnter={() => setHoveredRegionId('maharashtra')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />

              {/* 8. Odisha (East Coast) */}
              <polygon
                points="285,255 335,250 320,320 270,300"
                className={`transition-all duration-200 cursor-pointer ${
                  selectedRegionId === 'odisha'
                    ? 'fill-[#f2be8c]/25 stroke-[#f2be8c] stroke-2'
                    : 'fill-[#1e2022] hover:fill-[#25282a] stroke-[#50453b]'
                }`}
                onClick={() => setSelectedRegionId('odisha')}
                onMouseEnter={() => setHoveredRegionId('odisha')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />

              {/* 9. Andhra Pradesh & Telangana (South-East) */}
              <polygon
                points="210,330 275,300 285,380 230,420 205,370"
                className={`transition-all duration-200 cursor-pointer ${
                  selectedRegionId === 'andhra-telangana'
                    ? 'fill-[#f2be8c]/25 stroke-[#f2be8c] stroke-2'
                    : 'fill-[#1e2022] hover:fill-[#25282a] stroke-[#50453b]'
                }`}
                onClick={() => setSelectedRegionId('andhra-telangana')}
                onMouseEnter={() => setHoveredRegionId('andhra-telangana')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />

              {/* 10. Karnataka (South-West) */}
              <polygon
                points="175,365 220,360 210,445 170,430"
                className={`transition-all duration-200 cursor-pointer ${
                  selectedRegionId === 'karnataka'
                    ? 'fill-[#f2be8c]/25 stroke-[#f2be8c] stroke-2'
                    : 'fill-[#1e2022] hover:fill-[#25282a] stroke-[#50453b]'
                }`}
                onClick={() => setSelectedRegionId('karnataka')}
                onMouseEnter={() => setHoveredRegionId('karnataka')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />

              {/* 11. Tamil Nadu (Deep South) */}
              <polygon
                points="195,435 240,430 225,510 200,490"
                className={`transition-all duration-200 cursor-pointer ${
                  selectedRegionId === 'tamil-nadu'
                    ? 'fill-[#f2be8c]/25 stroke-[#f2be8c] stroke-2'
                    : 'fill-[#1e2022] hover:fill-[#25282a] stroke-[#50453b]'
                }`}
                onClick={() => setSelectedRegionId('tamil-nadu')}
                onMouseEnter={() => setHoveredRegionId('tamil-nadu')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />

              {/* 12. Kerala (Malabar Coast) */}
              <polygon
                points="175,445 198,445 195,510 180,480"
                className={`transition-all duration-200 cursor-pointer ${
                  selectedRegionId === 'kerala'
                    ? 'fill-[#f2be8c]/25 stroke-[#f2be8c] stroke-2'
                    : 'fill-[#1e2022] hover:fill-[#25282a] stroke-[#50453b]'
                }`}
                onClick={() => setSelectedRegionId('kerala')}
                onMouseEnter={() => setHoveredRegionId('kerala')}
                onMouseLeave={() => setHoveredRegionId(null)}
              />

              {/* Regional Hotspot Centroid Markers */}
              {ART_MAP_REGIONS.map((region) => {
                // Map the 0-100 coordinates to SVG 500x580 space
                const cx = (region.mapCoordinates.x / 100) * 500;
                const cy = (region.mapCoordinates.y / 100) * 580;
                const isSelected = selectedRegionId === region.id;
                const isHovered = hoveredRegionId === region.id;

                return (
                  <g
                    key={region.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedRegionId(region.id)}
                    onMouseEnter={() => setHoveredRegionId(region.id)}
                    onMouseLeave={() => setHoveredRegionId(null)}
                  >
                    {/* Glowing pulse aura for selected */}
                    {isSelected && (
                      <circle
                        cx={cx}
                        cy={cy}
                        r="18"
                        fill="url(#regionGlow)"
                        className="animate-pulse"
                      />
                    )}

                    {/* Outer Target Ring */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isSelected ? '9' : isHovered ? '7' : '5'}
                      fill={isSelected ? '#f2be8c' : '#1e2022'}
                      stroke={isSelected ? '#ffffff' : '#f2be8c'}
                      strokeWidth={isSelected ? '2' : '1.5'}
                      className="transition-all duration-200"
                    />

                    {/* Center Core Dot */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r="2"
                      fill={isSelected ? '#482904' : '#f2be8c'}
                    />

                    {/* Regional Label */}
                    <text
                      x={cx + 10}
                      y={cy + 3}
                      fill={isSelected ? '#f2be8c' : isHovered ? '#ffffff' : '#9c8e82'}
                      fontSize={isSelected ? '11' : '9'}
                      fontFamily="Space Grotesk"
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      letterSpacing="0.5"
                      className="transition-colors pointer-events-none drop-shadow"
                    >
                      {region.stateName}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Float Badge for Fusion Traditon shortcut on map */}
            {currentRegion.hasFusionTradition && (
              <div className="absolute bottom-4 left-4 p-2.5 bg-[#121416]/95 hairline-bronze flex items-center space-x-3 backdrop-blur-md">
                <Palette className="w-4 h-4 text-[#f2be8c]" />
                <div>
                  <span className="text-[0.65rem] font-['Space_Grotesk'] text-[#9c8e82] block">
                    FUSION STUDIO TRADITION:
                  </span>
                  <span className="text-xs font-['Playfair_Display'] text-[#f2be8c]">
                    {currentRegion.hasFusionTradition === 'warli' ? 'Warli Tribal Painting' : 'Phad Scroll Painting'}
                  </span>
                </div>
                <button
                  onClick={() => onNavigateToFusionStudio(currentRegion.hasFusionTradition)}
                  className="px-2 py-1 bg-[#1a1c1e] text-[#f2be8c] hover:bg-[#f2be8c] hover:text-[#482904] text-[0.65rem] font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze transition-colors flex items-center gap-1"
                >
                  <span>Synthesize</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>

          {/* Quick Regional Selector Grid underneath Map */}
          <div className="mt-4 pt-3 border-t border-[#50453b]/20">
            <span className="text-[0.65rem] font-['Space_Grotesk'] text-[#9c8e82] uppercase tracking-wider block mb-2">
              QUICK JUMP TO REGION:
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto no-scrollbar">
              {filteredRegions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegionId(region.id)}
                  className={`px-2 py-1 text-[0.7rem] font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze transition-colors ${
                    selectedRegionId === region.id
                      ? 'bg-[#f2be8c] text-[#482904] font-semibold'
                      : 'bg-[#121416] text-[#9c8e82] hover:text-[#e2e2e5]'
                  }`}
                >
                  {region.stateName}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Curatorial Regional Dossier (5 Cols) */}
        <div className="lg:col-span-6 xl:col-span-5 bg-[#1a1c1e] hairline-bronze p-6 space-y-6">
          {/* Dossier Header */}
          <div className="border-b border-[#50453b]/30 pb-4">
            <div className="flex items-center justify-between text-xs font-['Space_Grotesk'] text-[#f2be8c] uppercase tracking-widest mb-1">
              <span>ZONE: {currentRegion.zone} INDIA</span>
              <span className="text-[#9c8e82]">{currentRegion.ancientName}</span>
            </div>
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#e2e2e5]">
              {currentRegion.stateName}
            </h2>
            <p className="font-['Newsreader'] text-sm text-[#d4c4b7] mt-2 leading-relaxed">
              {currentRegion.summary}
            </p>
          </div>

          {/* Dossier Sub-Tabs */}
          <div className="flex border-b border-[#50453b]/20 text-xs font-['Space_Grotesk']">
            {[
              { key: 'traditions', label: 'Traditions' },
              { key: 'artifacts', label: `Artifacts (${linkedArtifacts.length + (currentRegion.curatedArtworks?.length || 0)})` },
              { key: 'movements', label: 'Movements' },
              { key: 'artists', label: 'Masters' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`pb-2 px-3 uppercase tracking-wider transition-colors ${
                  activeTab === tab.key
                    ? 'text-[#f2be8c] border-b-2 border-[#f2be8c] font-semibold'
                    : 'text-[#9c8e82] hover:text-[#e2e2e5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: REGIONAL TRADITIONS */}
          {activeTab === 'traditions' && (
            <div className="space-y-4 max-h-[500px] overflow-y-auto no-scrollbar pr-1">
              {currentRegion.traditions.map((tradition) => (
                <div
                  key={tradition.id}
                  className="bg-[#121416] hairline-bronze p-4 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-['Space_Grotesk'] text-[0.65rem] text-[#f2be8c] uppercase tracking-widest block">
                        {tradition.category}
                      </span>
                      <h4 className="font-['Playfair_Display'] text-base text-[#e2e2e5]">
                        {tradition.name}
                      </h4>
                    </div>

                    {tradition.associatedEpochId && (
                      <button
                        onClick={() => onNavigateTimelineToEpoch(tradition.associatedEpochId!)}
                        title="Jump to associated epoch on Timeline"
                        className="p-1.5 bg-[#1a1c1e] text-[#f2be8c] hover:bg-[#f2be8c] hover:text-[#482904] text-[0.65rem] font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze transition-colors flex items-center gap-1"
                      >
                        <span>Epoch</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  <p className="font-['Newsreader'] text-xs text-[#9c8e82] leading-relaxed">
                    {tradition.description}
                  </p>

                  {/* Key Motifs Tags */}
                  <div>
                    <span className="text-[0.65rem] font-['Space_Grotesk'] text-[#50453b] uppercase tracking-widest block mb-1">
                      SIGNATURE MOTIFS:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {tradition.keyMotifs.map((motif, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-[#1a1c1e] hairline-bronze text-[0.65rem] font-['Space_Grotesk'] text-[#e2e2e5]"
                        >
                          {motif}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Materials */}
                  <div className="pt-2 border-t border-[#50453b]/20 text-[0.7rem] font-['Space_Grotesk'] text-[#9c8e82]">
                    <span className="text-[#f2be8c]">Media: </span>
                    {tradition.materials.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: REPRESENTATIVE ARTWORKS & ARTIFACTS (CROSS-CONNECTED) */}
          {activeTab === 'artifacts' && (
            <div className="space-y-4 max-h-[500px] overflow-y-auto no-scrollbar pr-1">
              {/* 1. Official Museum Artifacts from Timeline Dataset */}
              {linkedArtifacts.length > 0 && (
                <div className="space-y-3">
                  <span className="text-[0.65rem] font-['Space_Grotesk'] text-[#f2be8c] uppercase tracking-widest block">
                    COLLECTIONS FROM ACTIVITY 1 TIMELINE:
                  </span>
                  {linkedArtifacts.map((artifact) => (
                    <div
                      key={artifact.id}
                      className="group bg-[#121416] hairline-bronze p-3 flex gap-3 items-center hover:border-[#f2be8c] transition-all"
                    >
                      <div
                        onClick={() => onSelectArtifact(artifact)}
                        className="w-20 h-20 bg-[#0c0e10] overflow-hidden shrink-0 cursor-pointer relative"
                      >
                        <img
                          src={artifact.imageUrl}
                          alt={artifact.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors flex items-center justify-center">
                          <Eye className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <span className="font-['Space_Grotesk'] text-[0.65rem] text-[#f2be8c] uppercase tracking-wider block">
                          {artifact.date} • {artifact.category}
                        </span>
                        <h4
                          onClick={() => onSelectArtifact(artifact)}
                          className="font-['Playfair_Display'] text-sm text-[#e2e2e5] group-hover:text-[#f2be8c] transition-colors truncate cursor-pointer font-medium"
                        >
                          {artifact.name}
                        </h4>
                        <span className="font-['Newsreader'] text-xs text-[#9c8e82] italic truncate block">
                          {artifact.material}
                        </span>

                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onSelectArtifact(artifact)}
                            className="px-2.5 py-1 bg-[#1e2022] hover:bg-[#f2be8c] hover:text-[#482904] text-[#f2be8c] font-['Space_Grotesk'] text-[0.65rem] uppercase tracking-wider hairline-bronze transition-colors flex items-center gap-1"
                          >
                            <BookOpen className="w-3 h-3" />
                            <span>Inspect Dossier</span>
                          </button>
                          <button
                            onClick={() => onNavigateTimelineToEpoch(artifact.epochId)}
                            className="px-2 py-1 text-[#9c8e82] hover:text-[#e2e2e5] font-['Space_Grotesk'] text-[0.65rem] uppercase tracking-wider transition-colors"
                          >
                            Timeline
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 2. Curated Regional Masterpieces */}
              {currentRegion.curatedArtworks && currentRegion.curatedArtworks.length > 0 && (
                <div className="space-y-3 pt-2">
                  <span className="text-[0.65rem] font-['Space_Grotesk'] text-[#9c8e82] uppercase tracking-widest block">
                    REGIONAL TRADITION HIGHLIGHTS:
                  </span>
                  {currentRegion.curatedArtworks.map((work, idx) => (
                    <div key={idx} className="bg-[#121416] hairline-bronze p-3.5 space-y-2">
                      <span className="font-['Space_Grotesk'] text-[0.65rem] text-[#f2be8c] uppercase tracking-wider block">
                        {work.period}
                      </span>
                      <h4 className="font-['Playfair_Display'] text-sm text-[#e2e2e5]">
                        {work.customTitle}
                      </h4>
                      <p className="font-['Newsreader'] text-xs text-[#9c8e82] leading-relaxed">
                        {work.customDescription}
                      </p>
                      <div className="text-[0.65rem] font-['Space_Grotesk'] text-[#50453b]">
                        <span>Medium: {work.medium}</span> • <span>Loc: {work.locationText}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ART MOVEMENTS & HISTORICAL EVOLUTION */}
          {activeTab === 'movements' && (
            <div className="space-y-4 max-h-[500px] overflow-y-auto no-scrollbar pr-1">
              <div className="p-3.5 bg-[#121416] hairline-bronze space-y-2">
                <span className="font-['Space_Grotesk'] text-[0.65rem] text-[#f2be8c] uppercase tracking-widest block">
                  REGIONAL HISTORICAL SYNTHESIS
                </span>
                <p className="font-['Newsreader'] text-xs text-[#d4c4b7] leading-relaxed">
                  {currentRegion.historicalContext}
                </p>
              </div>

              {currentRegion.movements.map((movement, i) => (
                <div key={i} className="bg-[#121416] hairline-bronze p-4 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-['Playfair_Display'] text-sm text-[#e2e2e5]">
                      {movement.name}
                    </h4>
                    <span className="font-['Space_Grotesk'] text-[0.65rem] text-[#f2be8c]">
                      {movement.period}
                    </span>
                  </div>
                  <p className="font-['Newsreader'] text-xs text-[#9c8e82] leading-relaxed">
                    {movement.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: MASTERS & TRADITIONAL LINEAGES */}
          {activeTab === 'artists' && (
            <div className="space-y-3 max-h-[500px] overflow-y-auto no-scrollbar pr-1">
              {currentRegion.artists.map((artist, i) => (
                <div key={i} className="bg-[#121416] hairline-bronze p-4 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-['Playfair_Display'] text-sm text-[#e2e2e5]">
                      {artist.name}
                    </h4>
                    <span className="font-['Space_Grotesk'] text-[0.65rem] text-[#f2be8c]">
                      {artist.era}
                    </span>
                  </div>
                  <p className="font-['Newsreader'] text-xs text-[#9c8e82] leading-relaxed">
                    {artist.significance}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Cross-Connection Callouts */}
          <div className="pt-4 border-t border-[#50453b]/30 flex items-center justify-between">
            <span className="font-['Space_Grotesk'] text-xs text-[#9c8e82]">
              KALĀ CHRONICLES CROSS-LINK
            </span>
            {currentRegion.hasFusionTradition ? (
              <button
                onClick={() => onNavigateToFusionStudio(currentRegion.hasFusionTradition)}
                className="px-3 py-1.5 bg-[#121416] hover:bg-[#f2be8c] hover:text-[#482904] text-[#f2be8c] text-xs font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze transition-colors flex items-center gap-1.5"
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Open in Fusion Studio</span>
              </button>
            ) : linkedArtifacts.length > 0 ? (
              <button
                onClick={() => onSelectArtifact(linkedArtifacts[0])}
                className="px-3 py-1.5 bg-[#121416] hover:bg-[#f2be8c] hover:text-[#482904] text-[#f2be8c] text-xs font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze transition-colors flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Inspect {linkedArtifacts[0].name.split(' ')[0]}</span>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
