
import React from 'react';
import { DISHES } from '../constants';
import { Star, Clock } from 'lucide-react';
import { Dish } from '../types';

interface PopularDishesProps {
  onDishClick: (dish: Dish) => void;
}

const PopularDishes: React.FC<PopularDishesProps> = ({ onDishClick }) => {
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-4">
      {DISHES.map((dish) => (
        <div 
          key={dish.id} 
          onClick={() => onDishClick(dish)}
          className="flex flex-col cursor-pointer active:opacity-80 transition-opacity"
        >
          <div className="w-full aspect-square rounded-xl overflow-hidden mb-1.5 shadow-sm border border-gray-100">
            <img 
              src={dish.image} 
              alt={dish.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h3 className="text-[11px] font-bold text-[#0b3164] line-clamp-1 mb-0.5 px-0.5 leading-tight">
            {dish.name}
          </h3>
          
          <div className="flex items-center justify-between px-0.5">
            <div className="flex items-center gap-0.5">
              <Star size={9} className="text-[#FFC107] fill-[#FFC107]" />
              <span className="text-[9px] font-bold text-gray-700">{dish.rating}</span>
            </div>
            <div className="flex items-center gap-0.5">
              <Clock size={9} className="text-gray-400" />
              <span className="text-[8px] text-gray-500 font-medium whitespace-nowrap">{dish.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularDishes;