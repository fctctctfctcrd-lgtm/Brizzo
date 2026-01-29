
import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[200px] bg-gradient-to-r from-[#0b3164] to-[#1e58b2] overflow-hidden shadow-lg flex">
      <div className="flex-1 p-6 flex flex-col justify-center z-10">
        <h2 className="text-2xl font-black text-white leading-tight">Today’s Best Deals!</h2>
        <p className="text-sm text-white mt-1">Up to <span className="text-yellow-400 font-black">50% OFF</span></p>
        <p className="text-xs text-white/80 mt-0.5">Free Delivery</p>
        <button className="mt-4 bg-[#FFC107] text-[#0b3164] font-black py-2 px-6 rounded-full text-xs w-fit shadow-md active:scale-95 transition-transform uppercase tracking-wider">
          Order Now
        </button>
      </div>
      
      <div className="relative w-[50%] h-full flex items-center justify-center p-2">
         <img 
          src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&h=400&fit=crop" 
          alt="Burger and Pizza" 
          className="w-full h-auto object-contain rounded-lg transform scale-110"
        />
        
        {/* Slider dots */}
        <div className="absolute bottom-4 right-4 flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFC107]"></div>
          <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;