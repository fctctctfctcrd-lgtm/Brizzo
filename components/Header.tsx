
import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between py-2 px-2">
      <div className="w-10"></div>
      <h1 className="text-2xl font-extrabold text-[#FFC107] tracking-tight">Brizzo</h1>
      <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
        <Menu size={24} />
      </button>
    </div>
  );
};

export default Header;