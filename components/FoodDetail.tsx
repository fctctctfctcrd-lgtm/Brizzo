import React, { useState } from 'react';
import { ArrowLeft, Heart, Star, Clock, Plus, Minus } from 'lucide-react';
import { Dish } from '../types';
import { DISHES } from '../constants';

interface FoodDetailProps {
  dish: Dish;
  onBack: () => void;
}

const FoodDetail: React.FC<FoodDetailProps> = ({ dish, onBack }) => {
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="min-h-full bg-white flex flex-col animate-in fade-in slide-in-from-right duration-300">
      {/* Top Image & Icons */}
      <div className="relative h-72 w-full">
        <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
        <div className="absolute top-6 left-5 right-5 flex justify-between">
          <button 
            onClick={onBack}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white active:scale-90 transition-transform"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center active:scale-90 transition-transform"
          >
            <Heart size={20} className={isLiked ? 'text-red-500 fill-red-500' : 'text-white'} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8 flex-1 flex flex-col bg-white -mt-8 rounded-t-[40px] shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <div className="flex items-start justify-between">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight flex-1">{dish.name}</h2>
          <span className="text-2xl font-bold text-[#0b3164]">₹{dish.price}</span>
        </div>

        <div className="flex items-center gap-6 mt-4 mb-8">
          <div className="flex items-center gap-1.5">
            <Star size={18} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-bold text-gray-900">{dish.rating}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <Clock size={18} />
            <span className="text-sm font-medium">{dish.time}</span>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-2">Description</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {dish.description}
          </p>

          <div className="mt-8">
            <h3 className="font-bold text-gray-900 mb-4">Similar Items</h3>
            <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
              {DISHES.filter(d => d.id !== dish.id).map(similar => (
                <div key={similar.id} className="min-w-[120px] flex flex-col gap-2 flex-shrink-0">
                  <img src={similar.image} alt={similar.name} className="w-28 h-28 rounded-2xl object-cover shadow-sm" />
                  <span className="text-xs font-bold text-gray-800 truncate">{similar.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 flex items-center justify-between gap-6 pb-6">
          <div className="flex items-center bg-gray-50 rounded-2xl p-1 shadow-inner">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900"
            >
              <Minus size={18} />
            </button>
            <span className="w-8 text-center font-bold text-gray-900">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900"
            >
              <Plus size={18} />
            </button>
          </div>
          <button className="flex-1 bg-[#0b3164] text-white font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-transform">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;