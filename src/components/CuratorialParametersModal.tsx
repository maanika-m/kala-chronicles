import React from 'react';
import { X, SlidersHorizontal, Sun, Eye, Layers } from 'lucide-react';

interface CuratorialParametersModalProps {
  isOpen: boolean;
  onClose: () => void;
  lightingMode: 'spectral' | 'incandescent' | 'high-contrast';
  onChangeLighting: (mode: 'spectral' | 'incandescent' | 'high-contrast') => void;
  showGridLines: boolean;
  onToggleGridLines: () => void;
}

export const CuratorialParametersModal: React.FC<CuratorialParametersModalProps> = ({
  isOpen,
  onClose,
  lightingMode,
  onChangeLighting,
  showGridLines,
  onToggleGridLines,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#121416] hairline-bronze max-w-md w-full p-6 space-y-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#9c8e82] hover:text-[#f2be8c] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3">
          <SlidersHorizontal className="w-5 h-5 text-[#f2be8c]" />
          <div>
            <h3 className="font-['Playfair_Display'] text-xl text-[#e2e2e5]">
              Curatorial Parameters
            </h3>
            <p className="font-['Space_Grotesk'] text-xs text-[#9c8e82]">
              Museum vitrine & optics customization
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Lighting Mode */}
          <div>
            <label className="block text-xs font-['Space_Grotesk'] uppercase tracking-wider text-[#f2be8c] mb-2">
              Spectral Radiance Illumination
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => onChangeLighting('spectral')}
                className={`p-2.5 text-center text-xs font-['Space_Grotesk'] hairline-bronze transition-colors ${
                  lightingMode === 'spectral'
                    ? 'bg-[#1e2022] text-[#f2be8c] border-[#f2be8c]'
                    : 'bg-[#0c0e10] text-[#9c8e82] hover:text-[#e2e2e5]'
                }`}
              >
                Spectral 3200K
              </button>
              <button
                onClick={() => onChangeLighting('incandescent')}
                className={`p-2.5 text-center text-xs font-['Space_Grotesk'] hairline-bronze transition-colors ${
                  lightingMode === 'incandescent'
                    ? 'bg-[#1e2022] text-[#f2be8c] border-[#f2be8c]'
                    : 'bg-[#0c0e10] text-[#9c8e82] hover:text-[#e2e2e5]'
                }`}
              >
                Warm Incandescent
              </button>
              <button
                onClick={() => onChangeLighting('high-contrast')}
                className={`p-2.5 text-center text-xs font-['Space_Grotesk'] hairline-bronze transition-colors ${
                  lightingMode === 'high-contrast'
                    ? 'bg-[#1e2022] text-[#f2be8c] border-[#f2be8c]'
                    : 'bg-[#0c0e10] text-[#9c8e82] hover:text-[#e2e2e5]'
                }`}
              >
                Deep Chiaroscuro
              </button>
            </div>
          </div>

          {/* Grid lines toggle */}
          <div className="pt-2">
            <div className="flex items-center justify-between p-3 bg-[#0c0e10] hairline-bronze">
              <div>
                <span className="text-xs font-['Space_Grotesk'] text-[#e2e2e5] block">
                  Archaeological Grid Overlay
                </span>
                <span className="text-[0.7rem] font-['Newsreader'] text-[#9c8e82] italic">
                  Displays metric coordinate markings
                </span>
              </div>
              <button
                onClick={onToggleGridLines}
                className={`px-3 py-1 text-xs font-['Space_Grotesk'] uppercase tracking-wider hairline-bronze ${
                  showGridLines
                    ? 'bg-[#f2be8c] text-[#482904] font-semibold'
                    : 'bg-[#1e2022] text-[#9c8e82]'
                }`}
              >
                {showGridLines ? 'Active' : 'Off'}
              </button>
            </div>
          </div>
        </div>

        <div className="text-right pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1e2022] hover:bg-[#282a2c] text-[#e2e2e5] font-['Space_Grotesk'] text-xs uppercase tracking-wider hairline-bronze"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
};
