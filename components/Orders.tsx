import React from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';

const Orders: React.FC = () => {
  const pastOrders = [
    {
      id: '#ORD-9921',
      restaurant: 'Pizza Hut',
      items: '2x Margherita Pizza, 1x Pepsi',
      date: 'Yesterday, 8:30 PM',
      status: 'Delivered',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=200&fit=crop',
      price: '₹340'
    },
    {
      id: '#ORD-8812',
      restaurant: 'Burger King',
      items: '1x Whopper, 1x Fries',
      date: '24 May, 1:15 PM',
      status: 'Delivered',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=200&fit=crop',
      price: '₹220'
    }
  ];

  return (
    <div className="px-5 pt-6 pb-20">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Orders</h1>
      <div className="space-y-4">
        {pastOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <div className="h-32 w-full relative">
              <img src={order.image} alt={order.restaurant} className="w-full h-full object-cover" />
              <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                <CheckCircle2 size={10} /> {order.status}
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-gray-900">{order.restaurant}</h3>
                <span className="font-bold text-[#0b3164]">{order.price}</span>
              </div>
              <p className="text-xs text-gray-500 mb-3">{order.items}</p>
              <div className="flex items-center gap-1.5 text-gray-400">
                <Clock size={12} />
                <span className="text-[10px] font-medium">{order.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;