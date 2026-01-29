
import React from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  return (
    <div className="relative mx-1">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search className="text-gray-500" size={18} />
      </div>
      <input
        type="text"
        placeholder="Search for restaurants, dishes..."
        className="w-full bg-white border border-gray-400 py-2.5 pl-11 pr-4 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.06)] outline-none text-sm text-gray-800 placeholder:text-gray-500 focus:border-gray-600 transition-colors"
      />
    </div>
  );
};

export default SearchBar;
