
import React from 'react';
import { OFFERS } from '../constants';

const TopOffers: React.FC = () => {
  return (
    <div className="flex gap-3">
      {OFFERS.slice(0, 2).map((offer) => (
        <div 
          key={offer.id} 
          className="relative flex-1 h-[100px] rounded-2xl overflow-hidden shadow-sm cursor-pointer active:scale-[0.98] transition-all"
        >
          <img src={offer.image} alt={offer.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-3">
            <h3 className="text-white font-bold text-xs leading-tight">{offer.title}</h3>
            <p className="text-white text-[14px] font-black">{offer.discount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopOffers;