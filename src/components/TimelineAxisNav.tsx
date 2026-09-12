import React from 'react';
import { EPOCHS } from '../data/museumData';

interface TimelineAxisNavProps {
  activeEpochId: string;
  onSelectEpoch: (epochId: string) => void;
  scrollProgress: number; // 0 to 100
}

export const TimelineAxisNav: React.FC<TimelineAxisNavProps> = ({
  activeEpochId,
  onSelectEpoch,
  scrollProgress,
}) => {
  const activeEpoch = EPOCHS.find((e) => e.id === activeEpochId) || EPOCHS[0];

  return (
    <nav
      aria-label="Civilizational Epochs Axis"
      className="sticky top-[69px] z-40 bg-[#0c0e10]/98 backdrop-blur-xl border-b border-[#f2be8c]/20 px-4 md:px-16 py-2.5 shadow-2xl transition-all duration-200"
      id="epochs"
    >
      <div className="max-w-7xl mx-auto space-y-2">
        {/* Timeline Status Banner / Active Viewport Readout */}
        <div className="flex items-center justify-between text-xs font-['Space_Grotesk']">
          <div className="flex items-center space-x-2 text-[#9c8e82]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#f2be8c] timeline-pulse"></span>
            <span className="text-[#f2be8c] font-semibold tracking-wider">
              CHRONOLOGICAL POSITION:
            </span>
            <span className="text-[#e2e2e5]">
              {activeEpoch.dateRange} • {activeEpoch.title} ({activeEpoch.subhead})
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-3 text-[0.7rem] text-[#9c8e82]">
            <span className="px-2 py-0.5 bg-[#1e2022] hairline-bronze text-[#f2be8c]">
              6 Epochs Tracked
            </span>
            <span>1:1 Temporal Axis</span>
          </div>
        </div>

        {/* Century / Millenary Progress Rail */}
        <div className="relative w-full h-2 bg-[#1e2022] rounded-full overflow-hidden border border-[#50453b]/30">
          <div className="absolute inset-0 ruler-ticks opacity-30"></div>
          {/* Active Progress Fill */}
          <div
            className="h-full bg-gradient-to-r from-[#d4a373] via-[#f2be8c] to-[#ffdcbd] rounded-full transition-all duration-300"
            style={{ width: `${Math.max(scrollProgress, activeEpoch.progressPercent)}%` }}
          ></div>
        </div>

        {/* Interactive 6-Period Nav Anchor Bar */}
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-4 md:gap-6 pt-1 pb-0.5">
          {EPOCHS.map((epoch, index) => {
            const isActive = epoch.id === activeEpochId;
            return (
              <React.Fragment key={epoch.id}>
                <button
                  onClick={() => onSelectEpoch(epoch.id)}
                  id={`nav-${epoch.id}`}
                  className={`group shrink-0 flex items-center space-x-2 px-2.5 py-1.5 rounded transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-[#282a2c]/80 border-b-2 border-[#f2be8c]'
                      : 'hover:bg-[#1e2022] hover:text-[#f2be8c]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isActive
                        ? 'bg-[#f2be8c] shadow-sm shadow-[#f2be8c]'
                        : 'bg-[#50453b] group-hover:bg-[#f2be8c]'
                    }`}
                  ></span>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center space-x-1.5">
                      <span
                        className={`font-['Space_Grotesk'] text-xs md:text-sm font-semibold tracking-wider ${
                          isActive
                            ? 'text-[#f2be8c]'
                            : 'text-[#d4c4b7] group-hover:text-[#e2e2e5]'
                        }`}
                      >
                        {epoch.title.split(' ')[0].toUpperCase()}
                      </span>
                      <span
                        className={`text-[0.62rem] px-1 py-0.2 rounded font-['Space_Grotesk'] ${
                          isActive
                            ? 'bg-[#f2be8c]/20 text-[#f2be8c]'
                            : 'bg-[#1e2022] text-[#9c8e82] group-hover:text-[#f2be8c]'
                        }`}
                      >
                        {epoch.worksCount} Works
                      </span>
                    </div>
                    <span
                      className={`font-['Space_Grotesk'] text-[0.68rem] tracking-widest ${
                        isActive ? 'text-[#f2be8c]' : 'text-[#9c8e82]'
                      }`}
                    >
                      {epoch.dateRange}
                    </span>
                  </div>
                </button>

                {index < EPOCHS.length - 1 && (
                  <span className="text-[#50453b]/50 select-none text-xs hidden lg:inline">
                    ────
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
