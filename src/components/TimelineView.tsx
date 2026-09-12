import React from 'react';
import { Clock, Eye, MapPin, Sparkles, ArrowRight, History } from 'lucide-react';
import { Artifact, Epoch } from '../types';
import { EPOCHS } from '../data/museumData';

interface TimelineViewProps {
  artifacts: Artifact[];
  activeEpochId: string;
  onSelectArtifact: (artifact: Artifact) => void;
  onInspectHeroSample: () => void;
}

export const TimelineView: React.FC<TimelineViewProps> = ({
  artifacts,
  activeEpochId,
  onSelectArtifact,
  onInspectHeroSample,
}) => {
  // Group filtered artifacts by epoch
  const getArtifactsForEpoch = (epochId: string) => {
    return artifacts.filter((a) => a.epochId === epochId);
  };

  return (
    <main className="relative max-w-7xl mx-auto px-6 md:px-16 py-16" id="timeline-flow">
      {/* CONTINUOUS CENTRAL VERTICAL TIMELINE SPINE (Desktop) */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] timeline-spine-gradient -translate-x-1/2 pointer-events-none z-0"></div>
      {/* Mobile/Tablet Left-Side Vertical Spine */}
      <div className="lg:hidden absolute left-4 sm:left-8 top-0 bottom-0 w-[2px] timeline-spine-gradient pointer-events-none z-0"></div>

      {EPOCHS.map((epoch) => {
        const epochArtifacts = getArtifactsForEpoch(epoch.id);
        const isActiveEpoch = epoch.id === activeEpochId;

        return (
          <section
            key={epoch.id}
            id={epoch.id}
            className="relative mb-28 pt-8 scroll-mt-36"
          >
            {/* Central Milestone Epoch Node Plaque */}
            <div className="flex flex-col items-center text-center mb-16 relative z-10">
              <div
                className={`w-10 h-10 rounded-full bg-[#0c0e10] border-2 flex items-center justify-center mb-3 shadow-lg transition-colors ${
                  isActiveEpoch
                    ? 'border-[#f2be8c] shadow-[#f2be8c]/20'
                    : 'border-[#50453b] hover:border-[#f2be8c]'
                }`}
              >
                <span
                  className={`w-3 h-3 rounded-full ${
                    isActiveEpoch ? 'bg-[#f2be8c] timeline-pulse' : 'bg-[#d4a373]'
                  }`}
                ></span>
              </div>

              <span className="inline-block px-4 py-1 mb-2 bg-[#0c0e10] hairline-bronze text-[#f2be8c] font-['Space_Grotesk'] text-xs tracking-widest uppercase shadow-sm">
                EPOCH {epoch.number} • {epoch.subhead}
              </span>

              <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] text-[#e2e2e5] mb-2 tracking-tight">
                {epoch.title}
              </h2>

              <p className="font-['Newsreader'] text-[#9c8e82] max-w-xl text-base leading-relaxed">
                {epoch.description}
              </p>

              <div className="mt-4 inline-flex items-center space-x-2 px-3 py-1 bg-[#1e2022] hairline-bronze text-[#f2be8c] font-['Space_Grotesk'] text-xs tracking-widest">
                <Clock className="w-3.5 h-3.5" />
                <span>TIMELINE ANCHOR: {epoch.dateRange}</span>
              </div>
            </div>

            {epochArtifacts.length === 0 ? (
              <div className="p-8 text-center bg-[#1a1c1e]/40 hairline-bronze max-w-md mx-auto relative z-10">
                <p className="text-[#9c8e82] font-['Newsreader'] italic text-sm">
                  No artifacts match current filter criteria in this epoch.
                </p>
              </div>
            ) : (
              <div className="space-y-12 relative z-10">
                {/* Check layout archetype based on epoch */}
                {epoch.id === 'epoch-indus' && (
                  <div className="space-y-12">
                    {/* Dancing Girl Hero Split */}
                    {epochArtifacts.find((a) => a.id === 'dancing-girl') && (
                      <HeroSplitCard
                        artifact={epochArtifacts.find((a) => a.id === 'dancing-girl')!}
                        onSelect={onSelectArtifact}
                      />
                    )}

                    {/* Dual Cards: Priest-King & Pashupati Seal */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                      {epochArtifacts
                        .filter((a) => a.id !== 'dancing-girl')
                        .map((artifact) => (
                          <StandardPedestalCard
                            key={artifact.id}
                            artifact={artifact}
                            onSelect={onSelectArtifact}
                          />
                        ))}
                    </div>
                  </div>
                )}

                {epoch.id === 'epoch-mauryan' && (
                  <div className="space-y-12">
                    {/* Lion Capital (Wide Masterpiece) */}
                    {epochArtifacts.find((a) => a.id === 'lion-capital') && (
                      <MasterpieceWideCard
                        artifact={epochArtifacts.find((a) => a.id === 'lion-capital')!}
                        onSelect={onSelectArtifact}
                      />
                    )}

                    {/* Sanchi Stupa */}
                    {epochArtifacts.find((a) => a.id === 'sanchi-stupa') && (
                      <ArchitectureFeatureCard
                        artifact={epochArtifacts.find((a) => a.id === 'sanchi-stupa')!}
                        onSelect={onSelectArtifact}
                      />
                    )}

                    {/* Any other remaining */}
                    {epochArtifacts
                      .filter((a) => a.id !== 'lion-capital' && a.id !== 'sanchi-stupa')
                      .map((artifact) => (
                        <StandardPedestalCard
                          key={artifact.id}
                          artifact={artifact}
                          onSelect={onSelectArtifact}
                        />
                      ))}
                  </div>
                )}

                {epoch.id === 'epoch-gupta' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {epochArtifacts.map((artifact) => (
                      <StandardPedestalCard
                        key={artifact.id}
                        artifact={artifact}
                        onSelect={onSelectArtifact}
                      />
                    ))}
                  </div>
                )}

                {epoch.id === 'epoch-medieval' && (
                  <div className="space-y-12">
                    {/* Shiva Nataraja Masterpiece */}
                    {epochArtifacts.find((a) => a.id === 'chola-nataraja') && (
                      <MasterpieceWideCard
                        artifact={epochArtifacts.find((a) => a.id === 'chola-nataraja')!}
                        onSelect={onSelectArtifact}
                      />
                    )}

                    {/* Khajuraho & Hoysala */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                      {epochArtifacts
                        .filter((a) => a.id !== 'chola-nataraja')
                        .map((artifact) => (
                          <StandardPedestalCard
                            key={artifact.id}
                            artifact={artifact}
                            onSelect={onSelectArtifact}
                          />
                        ))}
                    </div>
                  </div>
                )}

                {epoch.id === 'epoch-mughal' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {epochArtifacts.map((artifact) => (
                      <StandardPedestalCard
                        key={artifact.id}
                        artifact={artifact}
                        aspectRatio="aspect-[3/4]"
                        onSelect={onSelectArtifact}
                      />
                    ))}
                  </div>
                )}

                {epoch.id === 'epoch-modern' && (
                  <div className="space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                      {epochArtifacts.find((a) => a.id === 'ravi-varma-shakuntala') && (
                        <div className="lg:col-span-7">
                          <StandardPedestalCard
                            artifact={epochArtifacts.find((a) => a.id === 'ravi-varma-shakuntala')!}
                            aspectRatio="aspect-[16/10]"
                            onSelect={onSelectArtifact}
                          />
                        </div>
                      )}
                      {epochArtifacts.find((a) => a.id === 'amrita-sher-gil') && (
                        <div className="lg:col-span-5">
                          <StandardPedestalCard
                            artifact={epochArtifacts.find((a) => a.id === 'amrita-sher-gil')!}
                            aspectRatio="aspect-[4/3]"
                            onSelect={onSelectArtifact}
                          />
                        </div>
                      )}
                    </div>

                    {epochArtifacts.find((a) => a.id === 'husain-equine') && (
                      <ArchitectureFeatureCard
                        artifact={epochArtifacts.find((a) => a.id === 'husain-equine')!}
                        onSelect={onSelectArtifact}
                      />
                    )}
                  </div>
                )}
              </div>
            )}
          </section>
        );
      })}

      {/* CURATORIAL INSPECTION VITRINE DEMONSTRATION PREVIEW */}
      <section
        className="my-24 p-8 md:p-12 bg-[#0c0e10] hairline-bronze relative overflow-hidden ring-1 ring-[#f2be8c]/30"
        id="modal-dossier"
      >
        {/* Ambient background glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#f2be8c]/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top Dossier Header Bar */}
        <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-[#50453b]/30 gap-4">
          <div className="flex items-center space-x-3">
            <Sparkles className="text-[#f2be8c] w-6 h-6" />
            <div>
              <div className="font-['Space_Grotesk'] text-sm font-semibold tracking-wider text-[#e2e2e5] flex items-center space-x-2">
                <span>CURATORIAL DOSSIER: ACTIVE INSPECTION MODE</span>
                <span className="px-2 py-0.5 bg-[#f2be8c]/20 text-[#f2be8c] text-[0.65rem] font-['Space_Grotesk'] rounded">
                  LIVE SPECIMEN
                </span>
              </div>
              <div className="font-['Space_Grotesk'] text-xs text-[#9c8e82]">
                CATALOGUE RAISONNÉ IDENTIFIER: KC-INDUS-IVC-001
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 bg-[#1e2022] hairline-bronze text-[#f2be8c] font-['Space_Grotesk'] text-xs">
              1:1 Metric Scale Bar Active
            </span>
            <span className="px-2.5 py-1 bg-[#1e2022] hairline-bronze text-[#9c8e82] font-['Space_Grotesk'] text-xs">
              Spectral Radiance 3200K
            </span>
          </div>
        </div>

        {/* Split-Screen Asymmetric Grid (7/12 & 5/12 split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Deep Zoom Viewport (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-3">
            <div
              onClick={onInspectHeroSample}
              className="relative bg-[#1e2022] aspect-[4/3] hairline-bronze overflow-hidden group cursor-pointer"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJe98iCpGKX_3Ntfw1Ikyq2dxOvjiRQMUifHWsTvc8enL8zlbmz_oYkFK9E57Wf9OTDhwHjzcfrtux1bes7igpu6bsH1CTrmjRAf20f84T0RcuNSbPHBTRdKhNcUnojZeHcvNVlyrQNLPUOGfY8El8wu9bwf6cMsUKYWHkDlpYX7VYiuJfzdvfZIUmOMqe89AKgQtX4b4FwBVVe9SRZT6HXWBEalXfzl7zl4S-R95xVj16aGqj-ed3"
                alt="Micro-photogrammetry of Dancing Girl bronze"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Zoom HUD Overlay Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#0c0e10]/90 backdrop-blur-md p-3 hairline-bronze text-xs font-['Space_Grotesk'] shadow-md">
                <div className="flex items-center space-x-3 text-[#e2e2e5]">
                  <Eye className="w-4 h-4 text-[#f2be8c]" />
                  <span>Interactive High-Resolution Inspection</span>
                  <span className="text-[#9c8e82]">|</span>
                  <span className="text-[#f2be8c]">Click to Open Stage</span>
                </div>
                <div className="flex space-x-2">
                  <span className="px-2.5 py-1 bg-[#121416] hairline-bronze text-[#f2be8c] text-[0.7rem]">
                    Launch Dossier →
                  </span>
                </div>
              </div>
            </div>
            <div className="font-['Newsreader'] text-[#9c8e82] text-xs italic">
              Figure 1.0A: Micro-photogrammetry reveals single-pour lost-wax casting technique with trace arsenic and tin proportions.
            </div>
          </div>

          {/* Right Panel: Curatorial Dossier & Provenance (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="font-['Space_Grotesk'] text-xs text-[#f2be8c] tracking-widest uppercase mb-1">
                Epoch I • Indus Valley Civilization
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#e2e2e5] mb-2">
                Dancing Girl of Mohenjo-daro
              </h3>
              <p className="font-['Newsreader'] text-[#9c8e82] italic text-sm">
                Lost-wax cast bronze statuette • c. 2300–1750 BCE
              </p>
            </div>

            {/* Metadata Tabular Grid */}
            <div className="border-y border-[#50453b]/20 py-4 space-y-2 text-xs font-['Space_Grotesk']">
              <div className="flex justify-between">
                <span className="text-[#9c8e82]">Medium:</span>
                <span className="text-[#e2e2e5]">Tin-Bronze Alloy (Lost-Wax)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9c8e82]">Site Origin:</span>
                <span className="text-[#e2e2e5]">HR Area, Mohenjo-daro</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9c8e82]">Excavated:</span>
                <span className="text-[#e2e2e5]">1926 by Ernest Mackay</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9c8e82]">Current Repository:</span>
                <span className="text-[#e2e2e5]">National Museum, New Delhi</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9c8e82]">Conservation Status:</span>
                <span className="text-[#9dd2c8] font-semibold">
                  Stable / Passive Nitrogen Vitrine
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9c8e82]">Timeline Coordinate:</span>
                <span className="text-[#f2be8c] font-semibold">T-2300.BCE.01</span>
              </div>
            </div>

            {/* Curatorial Narrative */}
            <div>
              <h4 className="font-['Space_Grotesk'] text-xs font-semibold uppercase tracking-wider text-[#f2be8c] mb-2">
                Curatorial Notes & Historical Significance
              </h4>
              <p className="font-['Newsreader'] text-sm text-[#d4c4b7] leading-relaxed mb-4">
                Discovered in House VII of the HR area, this diminutive figure overturned 19th-century colonial assumptions that complex figurative metal sculpture originated in Hellenistic Greece. Sir John Marshall observed: “When I first saw her I found it difficult to believe that she was prehistoric; she is alive with sheer natural vitality.”
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-[#1e2022] hairline-bronze text-[0.7rem] font-['Space_Grotesk'] text-[#e2e2e5]">
                  Mudra: Kataka-hasta
                </span>
                <span className="px-2.5 py-1 bg-[#1e2022] hairline-bronze text-[0.7rem] font-['Space_Grotesk'] text-[#e2e2e5]">
                  Metallurgy: Tin Bronze
                </span>
                <span className="px-2.5 py-1 bg-[#1e2022] hairline-bronze text-[0.7rem] font-['Space_Grotesk'] text-[#e2e2e5]">
                  Cire-Perdue
                </span>
              </div>
            </div>

            <button
              onClick={onInspectHeroSample}
              className="w-full py-3 bg-[#f2be8c] hover:bg-[#d4a373] text-[#482904] font-['Space_Grotesk'] text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Launch Full Interactive Dossier</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

// =========================================================================
// SUB-COMPONENT: HERO SPLIT CARD (Dancing Girl style)
// =========================================================================
const HeroSplitCard: React.FC<{
  artifact: Artifact;
  onSelect: (artifact: Artifact) => void;
}> = ({ artifact, onSelect }) => {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 z-10">
      {/* Horizontal Spine Connector to Timeline Anchor (Desktop) */}
      <div className="hidden lg:flex items-center absolute right-[50%] top-1/2 -translate-y-1/2 w-8 pointer-events-none">
        <div className="w-full h-px bg-[#f2be8c]/40"></div>
        <div className="w-2.5 h-2.5 rounded-full border border-[#f2be8c] bg-[#0c0e10] -ml-1"></div>
      </div>

      <div className="lg:col-span-7">
        <div
          onClick={() => onSelect(artifact)}
          className="group relative bg-[#1a1c1e] hairline-bronze p-6 hover:border-[#f2be8c] transition-all duration-300 ring-1 ring-[#f2be8c]/20 hover:ring-[#f2be8c]/60 cursor-pointer"
        >
          {/* Chiaroscuro spotlight background */}
          <div className="spotlight-radial absolute inset-0 pointer-events-none"></div>

          {/* Timeline Coordinate Badge */}
          <div className="flex items-center justify-between mb-3 font-['Space_Grotesk'] text-xs">
            <div className="inline-flex items-center space-x-2 text-[#f2be8c]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f2be8c]"></span>
              <span className="tracking-widest uppercase">{artifact.nodeLabel}</span>
            </div>
            <div className="px-2 py-0.5 bg-[#1e2022] hairline-bronze text-[#9c8e82] text-[0.7rem]">
              {artifact.date}
            </div>
          </div>

          <div className="relative overflow-hidden aspect-[16/10] bg-[#0c0e10] mb-5 flex items-center justify-center">
            <img
              src={artifact.imageUrl}
              alt={artifact.altText}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 bg-[#0c0e10]/90 px-2.5 py-1 hairline-bronze text-[#f2be8c] font-['Space_Grotesk'] text-[0.7rem] uppercase tracking-wider">
              {artifact.categoryBadge}
            </div>
            <div className="absolute bottom-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity duration-200">
              <span className="bg-[#1e2022] px-3 py-1.5 text-xs text-[#f2be8c] font-['Space_Grotesk'] uppercase tracking-widest hairline-bronze flex items-center gap-1.5 group-hover:bg-[#282a2c] transition-colors">
                <Eye className="w-3.5 h-3.5" />
                <span>Click to Inspect Dossier</span>
              </span>
            </div>
          </div>

          {/* Typography & Catalog Info */}
          <div className="flex items-start justify-between">
            <div>
              <span className="font-['Space_Grotesk'] text-[#9c8e82] text-xs block mb-1">
                ACCESSION NO. {artifact.accessionNo}
              </span>
              <h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#e2e2e5] group-hover:text-[#f2be8c] transition-colors">
                {artifact.name}
              </h3>
              <p className="font-['Newsreader'] text-[#d4c4b7] text-sm mt-1 max-w-lg leading-relaxed">
                {artifact.shortDescription}
              </p>
            </div>
            <div className="text-right shrink-0 ml-4 font-['Space_Grotesk'] text-xs">
              <div className="text-[#f2be8c] font-semibold">{artifact.date}</div>
              <div className="text-[#9c8e82] text-[0.7rem]">{artifact.location}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 lg:pl-6 space-y-4">
        <div className="border-l-2 border-[#f2be8c]/60 pl-4 py-1">
          <div className="font-['Space_Grotesk'] text-xs text-[#f2be8c] uppercase tracking-widest flex items-center space-x-1.5">
            <History className="w-3.5 h-3.5" />
            <span>METALLURGICAL INSIGHT & CHRONOLOGY</span>
          </div>
          <p className="font-['Newsreader'] text-sm text-[#d4c4b7] mt-1 leading-relaxed">
            {artifact.metallurgicalInsight || artifact.shortDescription}
          </p>
        </div>

        <div className="p-4 bg-[#0c0e10] hairline-bronze text-xs font-['Space_Grotesk'] text-[#9c8e82] space-y-1">
          <div>
            <span className="text-[#e2e2e5]">Dimensions:</span> {artifact.dimensions}
          </div>
          <div>
            <span className="text-[#e2e2e5]">Current Repository:</span> {artifact.repository}
          </div>
          {artifact.excavation && (
            <div>
              <span className="text-[#e2e2e5]">Excavator / Context:</span> {artifact.excavation}
            </div>
          )}
          <div>
            <span className="text-[#f2be8c]">Timeline Anchor:</span> {artifact.period}
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// SUB-COMPONENT: MASTERPIECE WIDE CARD (Lion Capital & Shiva Nataraja style)
// =========================================================================
const MasterpieceWideCard: React.FC<{
  artifact: Artifact;
  onSelect: (artifact: Artifact) => void;
}> = ({ artifact, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(artifact)}
      className="bg-[#1a1c1e] hairline-bronze p-8 hover:border-[#f2be8c] transition-all duration-300 relative overflow-hidden group cursor-pointer"
    >
      <div className="spotlight-radial absolute inset-0 pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden aspect-[4/3] bg-[#0c0e10]">
            <img
              src={artifact.imageUrl}
              alt={artifact.altText}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 bg-[#0c0e10]/90 px-2.5 py-1 hairline-bronze text-[#f2be8c] font-['Space_Grotesk'] text-[0.7rem] uppercase tracking-wider">
              {artifact.categoryBadge}
            </div>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="bg-[#1e2022] px-3 py-1.5 text-xs text-[#f2be8c] font-['Space_Grotesk'] uppercase tracking-widest hairline-bronze flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                <span>Inspect Masterpiece</span>
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center space-x-2 font-['Space_Grotesk'] text-xs text-[#f2be8c] tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#f2be8c]"></span>
            <span>{artifact.nodeLabel}</span>
          </div>

          <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#e2e2e5] group-hover:text-[#f2be8c] transition-colors">
            {artifact.name}
          </h3>

          <p className="font-['Newsreader'] text-[#d4c4b7] text-base leading-relaxed">
            {artifact.shortDescription}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2 font-['Space_Grotesk'] text-xs border-t border-[#50453b]/20">
            <div>
              <span className="text-[#9c8e82] block">Period / Origin:</span>
              <span className="text-[#e2e2e5]">{artifact.period}</span>
            </div>
            <div>
              <span className="text-[#9c8e82] block">Date:</span>
              <span className="text-[#f2be8c] font-semibold">{artifact.date}</span>
            </div>
            <div>
              <span className="text-[#9c8e82] block">Repository:</span>
              <span className="text-[#e2e2e5]">{artifact.repository}</span>
            </div>
            <div>
              <span className="text-[#9c8e82] block">Dimensions:</span>
              <span className="text-[#e2e2e5]">{artifact.dimensions}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// SUB-COMPONENT: ARCHITECTURE / CINEMATIC FEATURE CARD (Sanchi & MF Husain)
// =========================================================================
const ArchitectureFeatureCard: React.FC<{
  artifact: Artifact;
  onSelect: (artifact: Artifact) => void;
}> = ({ artifact, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(artifact)}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1a1c1e] hairline-bronze p-6 md:p-8 hover:border-[#f2be8c] transition-all duration-300 group cursor-pointer"
    >
      <div className="lg:col-span-5 space-y-3">
        <div className="flex items-center space-x-2 font-['Space_Grotesk'] text-[#9c8e82] text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f2be8c]"></span>
          <span>{artifact.nodeLabel}</span>
        </div>

        <h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#e2e2e5] group-hover:text-[#f2be8c] transition-colors">
          {artifact.name}
        </h3>

        <p className="font-['Newsreader'] text-[#d4c4b7] text-sm leading-relaxed">
          {artifact.shortDescription}
        </p>

        <div className="font-['Space_Grotesk'] text-xs text-[#f2be8c] tracking-widest pt-2 flex items-center space-x-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>
            {artifact.date} • {artifact.location}
          </span>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="aspect-[16/9] bg-[#0c0e10] hairline-bronze overflow-hidden relative">
          <img
            src={artifact.imageUrl}
            alt={artifact.altText}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-[#0c0e10]/90 px-2.5 py-1 hairline-bronze text-[#f2be8c] font-['Space_Grotesk'] text-[0.7rem] uppercase tracking-wider">
            {artifact.categoryBadge}
          </div>
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="bg-[#1e2022] px-3 py-1.5 text-xs text-[#f2be8c] font-['Space_Grotesk'] uppercase tracking-widest hairline-bronze flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              <span>Inspect Architecture</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// SUB-COMPONENT: STANDARD PEDESTAL CARD (Priest-King, Mathura Vishnu, etc.)
// =========================================================================
const StandardPedestalCard: React.FC<{
  artifact: Artifact;
  aspectRatio?: string;
  onSelect: (artifact: Artifact) => void;
}> = ({ artifact, aspectRatio = 'aspect-[4/3]', onSelect }) => {
  return (
    <div
      onClick={() => onSelect(artifact)}
      className="group bg-[#1a1c1e] hairline-bronze p-6 hover:border-[#f2be8c] transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:shadow-[#f2be8c]/5 cursor-pointer"
    >
      <div>
        {/* Node Identifier */}
        <div className="flex items-center justify-between mb-3 font-['Space_Grotesk'] text-xs">
          <span className="text-[#f2be8c] tracking-widest uppercase truncate max-w-[70%]">
            {artifact.nodeLabel}
          </span>
          <span className="text-[#9c8e82] text-[0.7rem] shrink-0">{artifact.date}</span>
        </div>

        <div className={`relative overflow-hidden ${aspectRatio} bg-[#0c0e10] mb-5`}>
          <img
            src={artifact.imageUrl}
            alt={artifact.altText}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-[#0c0e10]/90 px-2.5 py-1 hairline-bronze text-[#f2be8c] font-['Space_Grotesk'] text-[0.7rem] uppercase tracking-wider">
            {artifact.categoryBadge}
          </div>
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="bg-[#0c0e10]/95 px-2.5 py-1 hairline-bronze text-[0.7rem] font-['Space_Grotesk'] text-[#f2be8c] flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>Inspect Dossier</span>
            </span>
          </div>
        </div>

        <span className="font-['Space_Grotesk'] text-[#9c8e82] text-xs block mb-1">
          ACCESSION NO. {artifact.accessionNo}
        </span>

        <h3 className="font-['Playfair_Display'] text-xl text-[#e2e2e5] group-hover:text-[#f2be8c] transition-colors">
          {artifact.name}
        </h3>

        <p className="font-['Newsreader'] text-[#d4c4b7] text-sm mt-2 line-clamp-3 leading-relaxed">
          {artifact.shortDescription}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-[#50453b]/20 flex justify-between items-center text-xs font-['Space_Grotesk']">
        <span className="text-[#f2be8c] font-semibold">{artifact.date}</span>
        <span className="text-[#9c8e82] truncate max-w-[55%] text-right">{artifact.repository}</span>
      </div>
    </div>
  );
};
