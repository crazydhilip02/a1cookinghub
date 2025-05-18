import React from 'react';
import { popularDishes } from '../data/dishesData';
import FoodCard from './FoodCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Popular: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="heading">
          <h2>Most Popular Dishes</h2>
          <p>Our customers' favorites that you simply can't miss</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDishes.map(dish => (
            <FoodCard key={dish.id} dish={dish} featured={true} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/menu" className="btn btn-primary inline-flex items-center">
            View Full Menu <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Popular;