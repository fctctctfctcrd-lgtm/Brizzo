
import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import HeroBanner from './HeroBanner';
import CategorySection from './CategorySection';
import TopOffers from './TopOffers';
import PopularDishes from './PopularDishes';
import FoodFeed from './FoodFeed';
import { Dish } from '../types';

interface HomeProps {
  onDishClick: (dish: Dish) => void;
}

const Home: React.FC<HomeProps> = ({ onDishClick }) => {
  return (
    <div className="bg-white flex flex-col">
      <div className="px-4 pt-1 flex flex-col gap-2">
        <Header />
        <SearchBar />
      </div>
      
      {/* Full width Hero Banner */}
      <div className="mt-3">
        <HeroBanner />
      </div>
      
      <section className="mt-4 px-4">
        <h2 className="text-[16px] font-bold text-gray-900 mb-2 tracking-tight">Categories</h2>
        <CategorySection />
      </section>

      <section className="mt-4 px-4">
        <h2 className="text-[16px] font-bold text-gray-900 mb-2 tracking-tight">Top Offers</h2>
        <TopOffers />
      </section>

      <section className="mt-5 px-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-[16px] font-bold text-gray-900 tracking-tight">Popular Dishes</h2>
          <button className="text-[#FFC107] font-bold text-[11px]">View All</button>
        </div>
        <PopularDishes onDishClick={onDishClick} />
      </section>

      <section className="mt-6 px-4 mb-24">
        <h2 className="text-[18px] font-black text-gray-900 mb-3 tracking-tight">Daily Food Rail</h2>
        <FoodFeed onDishClick={onDishClick} />
      </section>
    </div>
  );
};

export default Home;