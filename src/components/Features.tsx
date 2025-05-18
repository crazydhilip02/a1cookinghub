import React from 'react';
import { Clock, Utensils, Users, Truck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: '24/7 Availability',
      description: 'We never close. Order delicious food any time of day or night.'
    },
    {
      icon: <Utensils className="h-12 w-12 text-primary" />,
      title: 'Quality Ingredients',
      description: 'We use only the freshest ingredients to prepare your meals.'
    },
    // {
    //   icon: <Users className="h-12 w-12 text-primary" />,
    //   title: 'Catering Services',
    //   description: 'From small gatherings to large events, we\'ve got your catering needs covered.'
    // },
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: 'Prompt Delivery',
      description: 'Hot, fresh food delivered right to your doorstep.'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="heading">
          <h2>Why Choose Us</h2>
          <p>Discover what sets A1 Cooking Hub apart from the rest</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">{feature.title}</h3>
              <p className="text-text-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;