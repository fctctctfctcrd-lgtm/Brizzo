import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Cart: React.FC = () => {
  return (
    <div className="px-5 pt-6 pb-20 flex flex-col min-h-full">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
      
      {/* Mock Cart Item */}
      <div className="space-y-4 flex-1">
        <div className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-50">
          <img src="https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?w=100&h=100&fit=crop" className="w-16 h-16 rounded-xl object-cover" />
          <div className="flex-1">
            <h3 className="font-bold text-sm text-gray-900">Margherita Pizza</h3>
            <p className="text-xs text-gray-500">Regular Size</p>
            <p className="text-[#0b3164] font-bold mt-1 text-sm">₹150</p>
          </div>
          <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-2 py-1">
            <button className="font-bold text-gray-500">-</button>
            <span className="text-xs font-bold">1</span>
            <button className="font-bold text-gray-500">+</button>
          </div>
        </div>
      </div>

      {/* Bill Details */}
      <div className="mt-8 bg-gray-50 p-5 rounded-2xl border border-dashed border-gray-300">
        <div className="flex justify-between mb-2">
          <span className="text-gray-500 text-sm">Item Total</span>
          <span className="text-gray-900 font-bold text-sm">₹150</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-500 text-sm">Delivery Fee</span>
          <span className="text-green-600 font-bold text-sm">FREE</span>
        </div>
        <div className="h-px bg-gray-200 my-3"></div>
        <div className="flex justify-between">
          <span className="text-gray-900 font-bold">Total Pay</span>
          <span className="text-[#0b3164] font-extrabold text-lg">₹150</span>
        </div>
      </div>

      <button className="mt-6 w-full bg-[#0b3164] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform">
        Checkout <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default Cart;