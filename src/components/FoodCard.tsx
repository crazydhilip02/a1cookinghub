import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Dish } from '../data/dishesData';
import { openWhatsApp, formatCurrency } from '../utils/helpers';
import { styles } from '../utils/styles';

interface FoodCardProps {
  dish: Dish;
  featured?: boolean;
}

const FoodCard: React.FC<FoodCardProps> = ({ dish, featured = false }) => {
  const handleOrder = () => {
    const message = `Hello, I would like to order: ${dish.name} (${formatCurrency(dish.price)})`;
    openWhatsApp(message);
  };

  return (
    <div className={`${styles.card} ${featured ? 'border-2 border-primary' : ''}`}>
      <div className="relative">
        <img 
          src={dish.image} 
          alt={dish.name} 
          className={styles.cardImage}
        />
        {dish.isVeg && (
          <div className="absolute top-2 left-2 bg-green-500 text-xs text-white px-2 py-1 rounded-full">
            Veg
          </div>
        )}
        {featured && (
          <div className="absolute top-2 right-2 bg-primary text-xs text-secondary-dark px-2 py-1 rounded-full font-medium">
            Popular
          </div>
        )}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{dish.name}</h3>
        {/* <p className={styles.cardPrice}>{formatCurrency(dish.price)}</p> */}
        <p className={styles.cardDescription}>{dish.description}</p>
        <button 
          onClick={handleOrder}
          className="w-full mt-2 btn btn-secondary flex items-center justify-center"
        >
          <ShoppingBag size={16} className="mr-2" /> Order Now
        </button>
      </div>
    </div>
  );
};

export default FoodCard;