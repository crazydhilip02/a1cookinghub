import React from 'react';
import { ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/helpers';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-3xl text-white">
          <div className="flex items-center mb-4">
            <div className="h-1 w-16 bg-primary mr-4"></div>
            <span className="text-primary font-medium">Available 24/7</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Delicious Home-Cooked Meals Delivered To Your Door
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            At A1 Cooking Hub, we bring the best flavors right to your table. 
            Explore our diverse menu and place your order via WhatsApp anytime.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => openWhatsApp('I would like to order food')}
              className="btn btn-primary"
            >
              Order Now <ArrowRight size={18} />
            </button>
            <a 
              href="menu" 
              className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-800"
            >
              
              View Menu
            </a>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div className="flex items-center">
              <div className="bg-primary rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">24/7 Service</h3>
                <p className="text-gray-300 text-sm">Available anytime</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-primary rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Easy Ordering</h3>
                <p className="text-gray-300 text-sm">Via WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#fef8e8">
          <path d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,85.3C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
