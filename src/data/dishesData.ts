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
    image: 'https://th.bing.com/th/id/OIP.YmlRW-vcy_j2WrrXykyBKwHaE7?w=282&h=188&c=7&r=0&o=5&pid=1.7',
    category: 'main-course',
    isVeg: true
  },
  {
    id: 'dish-4',
    name: 'Gulab Jamun',
    description: 'Soft, spongy milk solids balls soaked in sugar syrup flavored with cardamom and rose water.',
    price: 150,
    image: 'https://th.bing.com/th/id/OIP.Q8gv7WfjLk1bHFMz0LJi5QHaE8?w=278&h=185&c=7&r=0&o=5&pid=1.7',
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
    image: 'https://th.bing.com/th/id/OIP.K7-S5d3uExKZlXabRtrfowHaE8?w=279&h=186&c=7&r=0&o=5&pid=1.7',
    category: 'breakfast',
    isVeg: true
  },
  {
    id: 'dish-7',
    name: 'Samosa',
    description: 'Crispy pastry filled with spiced potatoes and peas.',
    price: 50,
    image: 'https://th.bing.com/th/id/OIP.P6JusBURC7CWnKo7p4ZnxwHaE8?w=269&h=180&c=7&r=0&o=5&pid=1.7',
    category: 'snacks',
    isVeg: true
  },
  {
    id: 'dish-8',
    name: 'Masala Chai',
    description: 'Spiced tea brewed with milk and sweetened with sugar.',
    price: 40,
    image: 'https://th.bing.com/th/id/OIP.aeFH_5t8z6pKr8PFKrLfQAHaEj?w=287&h=180&c=7&r=0&o=5&pid=1.7',
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
    image: 'https://th.bing.com/th/id/OIP.KmEuJSZX-hqrWPHeygrvOwHaFD?w=267&h=182&c=7&r=0&o=5&pid=1.7',
    category: 'desserts',
    isVeg: true
  },
  {
    id: 'dish-11',
    name: 'Pav Bhaji',
    description: 'Mashed vegetable curry served with buttered bread rolls.',
    price: 120,
    image: 'https://th.bing.com/th/id/OIP.tBZl8jYVpTzrJxuyBpcyDAHaE8?w=240&h=180&c=7&r=0&o=5&pid=1.7',
    category: 'main-course',
    isVeg: true
  },
  {
    id: 'dish-12',
    name: 'Fresh Lime Soda',
    description: 'Refreshing drink made with fresh lime juice, sugar, and soda water.',
    price: 60,
    image: 'https://th.bing.com/th/id/OIP.9hTUmtuYE4BtCK1iJ1M6KQHaE8?w=294&h=196&c=7&r=0&o=5&pid=1.7',
    category: 'beverages',
    isVeg: true
  },
];

export const popularDishes = dishes.filter(dish => dish.isPopular);