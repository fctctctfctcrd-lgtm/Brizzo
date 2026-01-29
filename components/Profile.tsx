
import React from 'react';
import { Settings, HelpCircle, MapPin, LogOut, ChevronRight, UserCircle, ShieldCheck } from 'lucide-react';

interface ProfileProps {
  onOpenAdmin: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onOpenAdmin }) => {
  return (
    <div className="px-5 pt-8 pb-20">
      {/* Profile Header */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-4">
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop" 
            alt="Profile" 
            className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover"
          />
          <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Aryan Sharma</h2>
        <p className="text-xs text-gray-500 mt-1">aryansharma@example.com</p>
      </div>

      {/* Bio & Location Info */}
      <div className="bg-gray-50 rounded-2xl p-4 mb-6 flex gap-4 border border-gray-100 shadow-sm">
        <div className="flex-1">
          <h3 className="text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-1">Bio</h3>
          <p className="text-xs text-gray-700 leading-relaxed">Foodie | Traveler | Loving Italian & Asian Cuisines.</p>
        </div>
        <div className="w-px bg-gray-200"></div>
        <div className="flex-1">
          <h3 className="text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-1">Location</h3>
          <div className="flex items-center gap-1 text-gray-700">
            <MapPin size={12} className="text-[#0b3164]" />
            <p className="text-xs font-medium">New Delhi, India</p>
          </div>
        </div>
      </div>

      {/* Options List */}
      <div className="space-y-3">
        <button 
          onClick={onOpenAdmin}
          className="w-full flex items-center justify-between p-4 bg-yellow-50 rounded-2xl border border-yellow-200 shadow-sm active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl bg-yellow-100 text-yellow-600`}>
              <ShieldCheck size={18} />
            </div>
            <span className={`text-sm font-bold text-yellow-700`}>Open Admin Panel</span>
          </div>
          <ChevronRight size={16} className="text-yellow-400" />
        </button>

        <ProfileOption icon={UserCircle} label="Edit Profile" />
        <ProfileOption icon={MapPin} label="Manage Addresses" />
        <ProfileOption icon={Settings} label="Settings" />
        <ProfileOption icon={HelpCircle} label="Help & Support" />
        <div className="pt-4">
           <ProfileOption icon={LogOut} label="Log Out" color="text-red-500" hideArrow />
        </div>