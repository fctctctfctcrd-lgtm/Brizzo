
export interface Dish {
  id: string;
  name: string;
  price: number;
  rating: number;
  time: string;
  image: string;
  description: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Offer {
  id: string;
  title: string;
  discount: string;
  image: string;
}
