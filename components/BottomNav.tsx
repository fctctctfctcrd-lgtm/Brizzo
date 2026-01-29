
import React from 'react';
import { Home, PlaySquare, ShoppingBag, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'rail', icon: PlaySquare, label: 'Rail' },
    { id: 'cart', icon: ShoppingBag, label: 'Cart' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 flex items-center justify-around py-3 z-50 rounded-t-3xl shadow-[0_-10px_20px_rgba(0,0,0,0.03)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-0.5 transition-colors ${
              isActive ? 'text-[#FFC107]' : 'text-gray-400'
            }`}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className={`text-[10px] font-bold ${isActive ? 'text-[#FFC107]' : 'text-gray-400'}`}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;