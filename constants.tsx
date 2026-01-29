
import { Dish, Category, Offer } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Burgers', icon: 'https://static.vecteezy.com/system/resources/previews/025/222/599/original/burger-3d-illustration-icon-png.png' },
  { id: '2', name: 'Pizza', icon: 'https://static.vecteezy.com/system/resources/previews/024/704/175/original/pizza-3d-render-icon-isolated-on-transparent-background-free-png.png' },
  { id: '3', name: 'Drinks', icon: 'https://static.vecteezy.com/system/resources/previews/027/144/570/original/drink-3d-render-icon-isolated-on-transparent-background-free-png.png' },
  { id: '4', name: 'Asian', icon: 'https://static.vecteezy.com/system/resources/previews/025/266/821/original/noodles-bowl-3d-render-icon-isolated-on-transparent-background-free-png.png' },
  { id: '5', name: 'Desserts', icon: 'https://static.vecteezy.com/system/resources/previews/025/266/381/original/cake-3d-render-icon-isolated-on-transparent-background-free-png.png' },
  { id: '6', name: 'Healthy', icon: 'https://static.vecteezy.com/system/resources/previews/024/704/110/original/salad-bowl-3d-render-icon-isolated-on-transparent-background-free-png.png' },
];

export const OFFERS: Offer[] = [
  { id: '1', title: 'Combo Feast', discount: '40% OFF', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=200&fit=crop' },
  { id: '2', title: 'Spicy Delights', discount: '50% OFF', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=200&fit=crop' },
];

export const DISHES: Dish[] = [
  {
    id: '1',
    name: 'Margherita Pizza',
    price: 150,
    rating: 4.2,
    time: '31 min',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?w=300&h=300&fit=crop',
    description: 'Classic Margherita with San Marzano tomatoes, fresh mozzarella, and aromatic basil leaves.',
    category: 'Pizza'
  },
  {
    id: '2',
    name: 'Cheese Burger',
    price: 180,
    rating: 4.5,
    time: '10 min',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop',
    description: 'Juicy beef patty with double cheddar cheese, lettuce, tomatoes, and our signature sauce.',
    category: 'Burgers'
  },
  {
    id: '3',
    name: 'Chicken Biryani',
    price: 220,
    rating: 4.8,
    time: '10 min',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=300&h=300&fit=crop',
    description: 'Fragrant basmati rice cooked with succulent chicken and exotic spices.',
    category: 'Asian'
  },
  {
    id: '4',
    name: 'Paneer Tikka',
    price: 140,
    rating: 4.4,
    time: '35 min',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=300&fit=crop',
    description: 'Stir-fried noodles with crisp vegetables and savory soy-based sauce.',
    category: 'Asian'
  },
  {
    id: '5',
    name: 'Mix Veg Salad',
    price: 120,
    rating: 4.1,
    time: '30 min',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop',
    description: 'A healthy and colorful mix of seasonal vegetables and light dressing.',
    category: 'Healthy'
  },
  {
    id: '6',
    name: 'Pasta Alfredo',
    price: 190,
    rating: 4.6,
    time: '60 min',
    image: 'https://images.unsplash.com/photo-1645112481338-316279f0487b?w=300&h=300&fit=crop',
    description: 'Creamy white sauce pasta with Italian herbs and parmesan cheese.',
    category: 'Asian'
  }
];
