import React from 'react';
import { DISHES } from '../constants';
import { Star, Clock, Heart } from 'lucide-react';
import { Dish } from '../types';

interface FoodFeedProps {
  onDishClick: (dish: Dish) => void;
}

const FoodFeed: React.FC<FoodFeedProps> = ({ onDishClick }) => {
  return (
    <div className="flex flex-col gap-5 pb-10">
      {DISHES.slice(0, 4).map((dish) => (
        <div 
          key={dish.id} 
          onClick={() => onDishClick(dish)}
          className="flex flex-col cursor-pointer active:opacity-95 transition-opacity group"
        >
          {/* Full-width Image Container */}
          <div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden mb-2 shadow-md bg-gray-100">
            <img 
              src={dish.image} 
              alt={dish.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <button className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
              <Heart size={16} />
            </button>
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
              <Clock size={10} />
              {dish.time}
            </div>
          </div>
          
          <div className="px-1 flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-[15px] font-bold text-gray-900 leading-tight">
                {dish.name}
              </h3>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="flex items-center gap-0.5">
                  <Star size={10} className="text-[#FFC107] fill-[#FFC107]" />
                  <span className="text-[11px] font-bold text-gray-700">{dish.rating}</span>
                </div>
                <span className="text-[11px] text-gray-400">• 1.2k+ reviews</span>
                <span className="text-[11px] font-bold text-[#0b3164] ml-1">₹{dish.price}</span>
              </div>
            </div>

            {/* Compact Order Button */}
            <button className="bg-[#0b3164] text-white text-[11px] font-bold px-4 py-1.5 rounded-lg shadow-lg active:scale-95 transition-transform">
              Order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodFeed;