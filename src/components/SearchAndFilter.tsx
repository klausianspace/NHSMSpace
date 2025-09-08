import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilter: (filters: { year: number | null; semester: number | null }) => void;
  selectedYear: number | null;
  selectedSemester: number | null;
  years: number[];
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  onSearch,
  onFilter,
  selectedYear,
  selectedSemester,
  years
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleYearChange = (year: number | null) => {
    onFilter({ year, semester: selectedSemester });
  };

  const handleSemesterChange = (semester: number | null) => {
    onFilter({ year: selectedYear, semester });
  };

  const clearFilters = () => {
    setSearchQuery('');
    onSearch('');
    onFilter({ year: null, semester: null });
    setShowFilters(false);
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        {/* Search input*/}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
          <input
            type="text"
            placeholder="Search modules..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 bg-dark-lighter/50 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all"
          />
        </div>

        {/* Button ta3 filtering */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
            showFilters || selectedYear || selectedSemester
              ? 'bg-accent/20 text-accent border border-accent/30'
              : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white'
          }`}
        >
          <Filter className="w-5 h-5" />
          Filters
          {(selectedYear || selectedSemester) && (
            <span className="bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {(selectedYear ? 1 : 0) + (selectedSemester ? 1 : 0)}
            </span>
          )}
        </button>

        {/* Clear Filters Button */}
        {(searchQuery || selectedYear || selectedSemester) && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
            Clear
          </button>
        )}
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="mt-6 p-6 bg-dark-lighter/30 border border-white/10 rounded-lg backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-4">Filter by</h3>
          
          {/* Year Filter */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-white/80 mb-3">Year</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleYearChange(null)}
                className={`px-3 py-2 rounded-full text-sm transition-all ${
                  selectedYear === null
                    ? 'primary-gradient text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                All Years
              </button>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => handleYearChange(year)}
                  className={`px-3 py-2 rounded-full text-sm transition-all ${
                    selectedYear === year
                      ? 'primary-gradient text-white'
                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  Year {year}
                </button>
              ))}
            </div>
          </div>

          {/* Semester Filter (When Year is Selectrd)*/}
          {selectedYear && (
            <div>
              <h4 className="text-sm font-medium text-white/80 mb-3">Semester</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleSemesterChange(null)}
                  className={`px-3 py-2 rounded-full text-sm transition-all ${
                    selectedSemester === null
                      ? 'primary-gradient text-white'
                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  All Semesters
                </button>
                {(() => {
                  
                  if (selectedYear === 5) return [9, 10];
                  if (selectedYear === 4) return [7, 8];
                  if (selectedYear === 3) return [5, 6];
                  if (selectedYear === 2) return [3, 4];
                  return [1, 2];
                })().map(semester => (
                  <button
                    key={semester}
                    onClick={() => handleSemesterChange(semester)}
                    className={`px-3 py-2 rounded-full text-sm transition-all ${
                      selectedSemester === semester
                        ? 'primary-gradient text-white'
                        : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    Semester {semester}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;