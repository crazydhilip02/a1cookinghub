import React from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import { openWhatsApp } from '../utils/helpers';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      {/* About Hero */}
      <div className="relative py-16 bg-secondary">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-secondary-light">
            <h1 className="text-4xl font-bold mb-4">About A1 Cooking Hub</h1>
            <p className="text-lg text-text-light mb-4">
              Your trusted partner for delicious homemade food and catering solutions
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#fef8e8">
            <path d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,85.3C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="heading">
              <h2 className="text-secondary font-semibold text-3xl mb-6">Our Story</h2>
            </div>
            <div className="prose prose-lg max-w-none text-text-medium">
              <p className="mb-4">
                A1 Cooking Hub was born out of a passion for good food and a desire to share homemade flavors with our community. What started as a small family business has grown into a beloved local establishment known for its authentic recipes and consistent quality.
              </p>
              <p className="mb-4">
                Our journey began in 2018 when our founder combined traditional cooking techniques with modern convenience to create a food service that would be available around the clock. The name "A1 Cooking Hub" represents our commitment to being the first choice for food solutions in our area.
              </p>
              <p>
                Today, we continue to serve delicious meals while maintaining the same dedication to quality and customer satisfaction that has defined us from the beginning. Whether you're ordering a late-night snack or catering for a large event, we bring the same level of care and attention to every order.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Key Features */}
      <div className="py-16 bg-background-alt">
        <div className="container mx-auto px-4">
          <div className="heading">
            <h2 className="text-secondary font-semibold text-3xl mb-8">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary mb-2">Quality Assurance</h3>
              <p className="text-text-medium">
                We use only the freshest ingredients and maintain strict quality standards for every dish we prepare.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary mb-2">Customer-Centric</h3>
              <p className="text-text-medium">
                Our customers are at the heart of everything we do. We go the extra mile to ensure your satisfaction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary mb-2">24/7 Availability</h3>
              <p className="text-text-medium">
                We understand that hunger doesn't follow a schedule, which is why we're available round the clock.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary-light rounded-lg p-8 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-secondary mb-4">Ready to Experience Our Food?</h2>
            <p className="text-lg text-text-medium mb-6">
              We're just a WhatsApp message away. Order now and discover why our customers keep coming back!
            </p>
            <button 
              onClick={() => openWhatsApp('Hello, I would like to place an order')}
              className="btn btn-secondary"
            >
              Order Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
