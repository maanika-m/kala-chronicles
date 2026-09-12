import React from 'react';
import { X, Bookmark, ArrowRight, Trash2 } from 'lucide-react';
import { Artifact } from '../types';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedArtifacts: Artifact[];
  onSelectArtifact: (artifact: Artifact) => void;
  onRemoveBookmark: (artifactId: string) => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  savedArtifacts,
  onSelectArtifact,
  onRemoveBookmark,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-[#121416] border-l border-[#50453b]/40 h-full flex flex-col p-6 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#50453b]/20">
          <div className="flex items-center space-x-2">
            <Bookmark className="w-4 h-4 text-[#f2be8c] fill-[#f2be8c]" />
            <h3 className="font-['Playfair_Display'] text-xl text-[#e2e2e5]">
              Saved Masterpieces
            </h3>
            <span className="px-2 py-0.5 bg-[#1e2022] hairline-bronze text-[0.7rem] font-['Space_Grotesk'] text-[#f2be8c]">
              {savedArtifacts.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#9c8e82] hover:text-[#f2be8c] transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 no-scrollbar">
          {savedArtifacts.length === 0 ? (
            <div className="text-center py-16 px-4 space-y-3">
              <Bookmark className="w-8 h-8 text-[#50453b] mx-auto" />
              <p className="font-['Newsreader'] text-[#9c8e82] italic text-sm">
                No artifacts bookmarked yet. While inspecting artifacts, click "Save Masterpiece" to build your college study list.
              </p>
            </div>
          ) : (
            savedArtifacts.map((artifact) => (
              <div
                key={artifact.id}
                className="group bg-[#1a1c1e] hairline-bronze p-3 flex gap-3 items-center hover:border-[#f2be8c] transition-all"
              >
                <div
                  onClick={() => {
                    onSelectArtifact(artifact);
                    onClose();
                  }}
                  className="w-16 h-16 bg-[#0c0e10] overflow-hidden shrink-0 cursor-pointer"
                >
                  <img
                    src={artifact.imageUrl}
                    alt={artifact.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <div
                  onClick={() => {
                    onSelectArtifact(artifact);
                    onClose();
                  }}
                  className="flex-1 min-w-0 cursor-pointer"
                >
                  <span className="font-['Space_Grotesk'] text-[0.65rem] text-[#f2be8c] uppercase tracking-wider block">
                    {artifact.date}
                  </span>
                  <h4 className="font-['Playfair_Display'] text-sm text-[#e2e2e5] group-hover:text-[#f2be8c] transition-colors truncate">
                    {artifact.name}
                  </h4>
                  <span className="font-['Newsreader'] text-xs text-[#9c8e82] italic truncate block">
                    {artifact.period}
                  </span>
                </div>

                <button
                  onClick={() => onRemoveBookmark(artifact.id)}
                  title="Remove from saved"
                  className="text-[#9c8e82] hover:text-[#ffb4ab] p-1.5 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#50453b]/20 text-center">
          <p className="font-['Space_Grotesk'] text-[0.7rem] text-[#9c8e82]">
            Kalā Chronicles Academic Study Collection
          </p>
        </div>
      </div>
    </div>
  );
};
