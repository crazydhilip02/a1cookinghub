import React, { useState } from 'react';
import { categories, dishes, Dish } from '../data/dishesData';
import FoodCard from './FoodCard';

const FoodMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredDishes = activeCategory === 'all' 
    ? dishes 
    : dishes.filter(dish => dish.category === activeCategory);

  return (
    <section id="menu" className={`${styles.section} bg-background-alt`}>
      <div className="container mx-auto px-4">
        <div className="heading">
          <h2>Our Delicious Menu</h2>
          <p>Explore our wide range of mouthwatering dishes, prepared with the finest ingredients and love</p>
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              className={activeCategory === category.id ? styles.categoryPillActive : styles.categoryPill}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Food Grid */}
        {filteredDishes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map(dish => (
              <FoodCard key={dish.id} dish={dish} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-text-medium">No dishes found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FoodMenu;

import { styles } from '../utils/styles';