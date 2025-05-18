export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isPopular?: boolean;
  isVeg?: boolean;
}

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: 'all', name: 'All' },
  { id: 'breakfast', name: 'Breakfast' },
  { id: 'main-course', name: 'Main Course' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'snacks', name: 'Snacks & Sides' },
  { id: 'beverages', name: 'Beverages' },
];

export const dishes: Dish[] = [
  {
    id: 'dish-1',
    name: 'Butter Chicken',
    description: 'Tender chicken in a rich, creamy tomato sauce with butter and spices.',
    price: 280,
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'main-course',
    isPopular: true,
    isVeg: false
  },
  {
    id: 'dish-2',
    name: 'Masala Dosa',
    description: 'Crispy rice and lentil crepe filled with spiced potato filling, served with sambar and chutney.',
    price: 120,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'breakfast',
    isPopular: true,
    isVeg: true
  },
  {
    id: 'dish-3',
    name: 'Paneer Tikka',
    description: 'Chunks of cottage cheese marinated in spices and yogurt, grilled to perfection.',
    price: 220,
    image: 'https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'main-course',
    isVeg: true
  },
  {
    id: 'dish-4',
    name: 'Gulab Jamun',
    description: 'Soft, spongy milk solids balls soaked in sugar syrup flavored with cardamom and rose water.',
    price: 150,
    image: 'https://images.pexels.com/photos/14477873/pexels-photo-14477873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'desserts',
    isVeg: true
  },
  {
    id: 'dish-5',
    name: 'Biryani',
    description: 'Aromatic rice dish cooked with meat, spices, and herbs.',
    price: 300,
    image: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'main-course',
    isPopular: true
  },
  {
    id: 'dish-6',
    name: 'Idli Sambar',
    description: 'Steamed rice cakes served with lentil soup and coconut chutney.',
    price: 100,
    image: 'https://images.pexels.com/photos/4331490/pexels-photo-4331490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'breakfast',
    isVeg: true
  },
  {
    id: 'dish-7',
    name: 'Samosa',
    description: 'Crispy pastry filled with spiced potatoes and peas.',
    price: 50,
    image: 'https://images.pexels.com/photos/14000522/pexels-photo-14000522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'snacks',
    isVeg: true
  },
  {
    id: 'dish-8',
    name: 'Masala Chai',
    description: 'Spiced tea brewed with milk and sweetened with sugar.',
    price: 40,
    image: 'https://images.pexels.com/photos/6341408/pexels-photo-6341408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'beverages',
    isVeg: true
  },
  {
    id: 'dish-9',
    name: 'Aloo Paratha',
    description: 'Whole wheat flatbread stuffed with spiced mashed potatoes.',
    price: 90,
    image: 'https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'breakfast',
    isVeg: true
  },
  {
    id: 'dish-10',
    name: 'Rasmalai',
    description: 'Soft cottage cheese dumplings soaked in creamy, sweetened, thickened milk.',
    price: 180,
    image: 'https://images.pexels.com/photos/14705136/pexels-photo-14705136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'desserts',
    isVeg: true
  },
  {
    id: 'dish-11',
    name: 'Pav Bhaji',
    description: 'Mashed vegetable curry served with buttered bread rolls.',
    price: 120,
    image: 'https://images.pexels.com/photos/8629542/pexels-photo-8629542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'main-course',
    isVeg: true
  },
  {
    id: 'dish-12',
    name: 'Fresh Lime Soda',
    description: 'Refreshing drink made with fresh lime juice, sugar, and soda water.',
    price: 60,
    image: 'https://images.pexels.com/photos/3652348/pexels-photo-3652348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'beverages',
    isVeg: true
  },
];

export const popularDishes = dishes.filter(dish => dish.isPopular);