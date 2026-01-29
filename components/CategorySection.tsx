
import React from 'react';
import { CATEGORIES } from '../constants';

const CategorySection: React.FC = () => {
  return (
    <div className="flex overflow-x-auto no-scrollbar gap-4 py-1 -mx-4 px-4">
      {CATEGORIES.map((cat) => (
        <div key={cat.id} className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group">
          <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 group-active:scale-95 transition-transform p-2">
            <img 
              src={cat.icon} 
              alt={cat.name} 
              className="w-full h-full object-contain" 
            />
          </div>
          <span className="text-[12px] font-medium text-gray-600">{cat.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;