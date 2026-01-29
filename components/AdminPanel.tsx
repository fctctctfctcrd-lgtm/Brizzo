
import React from 'react';
import { LayoutDashboard, PlusCircle, Settings, Users, ArrowLeft } from 'lucide-react';
import { DISHES } from '../constants';

interface AdminPanelProps {
  onBack: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onBack }) => {
  return (
    <div className="min-h-full bg-gray-50 flex flex-col pb-10">
      <div className="bg-white p-5 shadow-sm flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
      </div>

      <div className="p-5 space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#0b3164] p-4 rounded-2xl text-white shadow-lg">
            <h4 className="text-[10px] opacity-70 uppercase font-bold tracking-wider">Total Revenue</h4>
            <p className="text-2xl font-black mt-1">₹45,200</p>
          </div>
          <div className="bg-[#FFC107] p-4 rounded-2xl text-[#0b3164] shadow-lg">
            <h4 className="text-[10px] opacity-70 uppercase font-bold tracking-wider">New Orders</h4>
            <p className="text-2xl font-black mt-1">24</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-widest px-1">Management</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm active:scale-95 transition-transform">
              <PlusCircle className="text-green-500" size={20} />
              <span className="text-sm font-bold">Add Item</span>
            </button>
            <button className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm active:scale-95 transition-transform">
              <Users className="text-blue-500" size={20} />
              <span className="text-sm font-bold">Customers</span>
            </button>
          </div>
        </div>

        {/* Recent Menu Items */}
        <div>
          <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-widest px-1">Menu Inventory</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y">
            {DISHES.map(dish => (
              <div key={dish.id} className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={dish.image} className="w-10 h-10 rounded-lg object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{dish.name}</h4>
                    <p className="text-[10px] text-gray-500">Stock: 45 Available</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-bold text-[#0b3164]">₹{dish.price}</span>
                  <button className="text-[10px] font-bold text-blue-500 mt-1">Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;