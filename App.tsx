
import React, { useState } from 'react';
import Home from './components/Home';
import FoodDetail from './components/FoodDetail';
import BottomNav from './components/BottomNav';
import AdminPanel from './components/AdminPanel';
import Cart from './components/Cart';
import Profile from './components/Profile';
import { Dish } from './types';

const App: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [showAdmin, setShowAdmin] = useState(false);

  const handleDishClick = (dish: Dish) => {
    setSelectedDish(dish);
  };

  const handleBack = () => {
    setSelectedDish(null);
  };

  const renderContent = () => {
    if (showAdmin) {
      return <AdminPanel onBack={() => setShowAdmin(false)} />;
    }
    
    if (selectedDish) {
      return <FoodDetail dish={selectedDish} onBack={handleBack} />;
    }

    switch (activeTab) {
      case 'home':
        return <Home onDishClick={handleDishClick} />;
      case 'rail':
        // Reuse Home's food feed but filtered or focused
        return <Home onDishClick={handleDishClick} />;
      case 'cart':
        return <Cart />;
      case 'profile':
        return <Profile onOpenAdmin={() => setShowAdmin(true)} />;
      default:
        return <Home onDishClick={handleDishClick} />;
    }
  };

  return (
    <div className="max-w-md mx-auto h-screen bg-white relative flex flex-col shadow-2xl overflow-hidden">
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {renderContent()}
      </div>

      {/* Bottom Nav */}
      {!selectedDish && !showAdmin && (
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
    </div>
  );
};

export default App;