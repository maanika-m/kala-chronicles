import React, { useState } from 'react';
import { X, Copy, Check, BookOpen } from 'lucide-react';
import { Artifact } from '../types';

interface CitationModalProps {
  artifact: Artifact | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CitationModal: React.FC<CitationModalProps> = ({
  artifact,
  isOpen,
  onClose,
}) => {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  if (!isOpen || !artifact) return null;

  const citations = {
    chicago: `"${artifact.name}." ${artifact.period}, ${artifact.date}. ${artifact.material}, ${artifact.dimensions}. ${artifact.repository}, Accession no. ${artifact.accessionNo}. Kalā Chronicles Archive.`,
    apa: `Kalā Chronicles. (${artifact.date.replace(/c\.\s*/, '')}). ${artifact.name} [${artifact.material}]. ${artifact.repository} (Accession No. ${artifact.accessionNo}).`,
    mla: `"${artifact.name}." ${artifact.period}, ${artifact.date}. ${artifact.repository}, ${artifact.location}. Kalā Chronicles Digital Archive.`,
  };

  const handleCopy = (format: 'chicago' | 'apa' | 'mla') => {
    navigator.clipboard.writeText(citations[format]).then(() => {
      setCopiedFormat(format);
      setTimeout(() => setCopiedFormat(null), 2500);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#121416] hairline-bronze max-w-xl w-full p-6 space-y-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#9c8e82] hover:text-[#f2be8c] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3">
          <BookOpen className="w-5 h-5 text-[#f2be8c]" />
          <div>
            <h3 className="font-['Playfair_Display'] text-xl text-[#e2e2e5]">
              Academic Citation Generator
            </h3>
            <p className="font-['Space_Grotesk'] text-xs text-[#9c8e82]">
              Standard formats for college art-history papers
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Chicago */}
          <div className="p-3 bg-[#0c0e10] hairline-bronze space-y-1.5">
            <div className="flex justify-between items-center text-xs font-['Space_Grotesk']">
              <span className="text-[#f2be8c] font-semibold">
                Chicago 17th Manual of Style (Notes & Bibliography)
              </span>
              <button
                onClick={() => handleCopy('chicago')}
                className="text-xs text-[#d4c4b7] hover:text-[#f2be8c] flex items-center gap-1"
              >
                {copiedFormat === 'chicago' ? (
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
            <p className="font-['Newsreader'] text-sm text-[#d4c4b7] select-all">
              {citations.chicago}
            </p>
          </div>

          {/* APA */}
          <div className="p-3 bg-[#0c0e10] hairline-bronze space-y-1.5">
            <div className="flex justify-between items-center text-xs font-['Space_Grotesk']">
              <span className="text-[#f2be8c] font-semibold">APA 7th Edition</span>
              <button
                onClick={() => handleCopy('apa')}
                className="text-xs text-[#d4c4b7] hover:text-[#f2be8c] flex items-center gap-1"
              >
                {copiedFormat === 'apa' ? (
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
            <p className="font-['Newsreader'] text-sm text-[#d4c4b7] select-all">
              {citations.apa}
            </p>
          </div>

          {/* MLA */}
          <div className="p-3 bg-[#0c0e10] hairline-bronze space-y-1.5">
            <div className="flex justify-between items-center text-xs font-['Space_Grotesk']">
              <span className="text-[#f2be8c] font-semibold">MLA 9th Edition</span>
              <button
                onClick={() => handleCopy('mla')}
                className="text-xs text-[#d4c4b7] hover:text-[#f2be8c] flex items-center gap-1"
              >
                {copiedFormat === 'mla' ? (
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
            <p className="font-['Newsreader'] text-sm text-[#d4c4b7] select-all">
              {citations.mla}
            </p>
          </div>
        </div>

        <div className="text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1e2022] hover:bg-[#282a2c] text-[#e2e2e5] font-['Space_Grotesk'] text-xs uppercase tracking-wider hairline-bronze"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
