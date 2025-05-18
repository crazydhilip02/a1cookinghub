import React from 'react';
import { ArrowRight } from 'lucide-react';
import FoodMenu from '../components/FoodMenu';
import { openWhatsApp } from '../utils/helpers';

const MenuPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Our Complete Menu</h1>
          <p className="text-lg text-text-medium max-w-3xl mx-auto">
            Browse our extensive selection of delicious dishes, prepared with fresh ingredients and lots of love. 
            Place your order via WhatsApp for a quick and hassle-free experience.
          </p>
        </div>
      </div>
      
      <FoodMenu />
      
      <div className="bg-primary-light py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-secondary mb-4">Want to Order Something Special?</h2>
            <p className="text-text-medium mb-6">
              Don't see what you're looking for? We accept custom orders too! 
              Contact us via WhatsApp and let us know your requirements.
            </p>
            <button 
              onClick={() => openWhatsApp('I would like to place a custom order')}
              className="btn btn-primary"
            >
              Contact Us Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;