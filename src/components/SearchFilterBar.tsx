import React from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import { ArtifactCategory } from '../types';

interface SearchFilterBarProps {
  searchTerm: string;
  onSearchChange: (val: string) => void;
  selectedCategory: ArtifactCategory | 'all';
  onCategoryChange: (cat: ArtifactCategory | 'all') => void;
  selectedPeriod: string; // 'all' or epoch id
  onPeriodChange: (periodId: string) => void;
  totalCount: number;
  filteredCount: number;
}

export const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedPeriod,
  onPeriodChange,
  totalCount,
  filteredCount,
}) => {
  const categories: { label: string; value: ArtifactCategory | 'all' }[] = [
    { label: 'All', value: 'all' },
    { label: 'Sculpture', value: 'sculpture' },
    { label: 'Painting', value: 'painting' },
    { label: 'Architecture', value: 'architecture' },
    { label: 'Object', value: 'object' },
  ];

  const periods = [
    { id: 'all', label: 'All Periods (5000 Years)' },
    { id: 'epoch-indus', label: 'Indus Valley (c. 2500–1900 BCE)' },
    { id: 'epoch-mauryan', label: 'Mauryan & Buddhist (c. 322–185 BCE)' },
    { id: 'epoch-gupta', label: 'Gupta Classical (c. 320–550 CE)' },
    { id: 'epoch-medieval', label: 'Medieval Temple (c. 600–1500 CE)' },
    { id: 'epoch-mughal', label: 'Mughal & Rajput (c. 1500–1800 CE)' },
    { id: 'epoch-modern', label: 'Modernity & Beyond (1800s–Present)' },
  ];

  const hasActiveFilters = searchTerm !== '' || selectedCategory !== 'all' || selectedPeriod !== 'all';

  return (
    <section className="py-5 px-6 md:px-16 bg-[#1a1c1e]/80 border-b border-[#50453b]/20 relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Museum Search Input */}
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9c8e82] w-4 h-4 pointer-events-none" />
          <input
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#0c0e10] hairline-bronze text-[#e2e2e5] pl-10 pr-9 py-2 font-['Newsreader'] text-sm focus:outline-none focus:border-[#f2be8c] placeholder:text-[#9c8e82]/70 transition-colors"
            placeholder="Search artifacts, dynasties, materials (e.g. bronze, steatite, Shiva, Buddha)..."
            type="text"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9c8e82] hover:text-[#f2be8c]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category Filter Pills & Period Dropdown */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          {/* Filter Pills */}
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => onCategoryChange(cat.value)}
                className={`px-3.5 py-1.5 text-xs font-['Space_Grotesk'] tracking-wider hairline-bronze transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#1e2022] text-[#f2be8c] border-[#f2be8c]'
                    : 'bg-[#0c0e10] text-[#d4c4b7] hover:text-[#f2be8c] hover:border-[#f2be8c]/50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}

          <div className="h-5 w-px bg-[#50453b]/40 mx-1 hidden sm:block"></div>

          {/* Period Selector Dropdown */}
          <div className="relative inline-block">
            <select
              value={selectedPeriod}
              onChange={(e) => onPeriodChange(e.target.value)}
              className="appearance-none bg-[#0c0e10] hairline-bronze text-[#e2e2e5] font-['Space_Grotesk'] text-xs pl-3.5 pr-8 py-1.5 rounded focus:outline-none focus:border-[#f2be8c] cursor-pointer"
            >
              {periods.map((p) => (
                <option key={p.id} value={p.id} className="bg-[#121416] text-[#e2e2e5]">
                  {p.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9c8e82] pointer-events-none" />
          </div>

          {hasActiveFilters && (
            <button
              onClick={() => {
                onSearchChange('');
                onCategoryChange('all');
                onPeriodChange('all');
              }}
              className="px-2.5 py-1.5 text-xs font-['Space_Grotesk'] text-[#ffb4ab] hover:underline flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}

          {/* Results count indicator */}
          <div className="text-[0.7rem] font-['Space_Grotesk'] text-[#9c8e82] hidden lg:block ml-2">
            Showing <span className="text-[#f2be8c] font-medium">{filteredCount}</span> of {totalCount}
          </div>
        </div>
      </div>
    </section>
  );
};
