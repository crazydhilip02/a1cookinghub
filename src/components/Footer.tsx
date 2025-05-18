import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone, Clock,ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/helpers';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-text-base pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4 ">
              <Logo />
            </div>
            <p className="text-text-secondary mb-4">
              Serving delicious homemade food and catering solutions 24/7. Our mission is to bring quality meals to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/a1cookinghub?igsh=MXUzYXNoNTNtYzE3eQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.facebook.com/share/1DWDUdoYPo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary pb-2 text-text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-secondary hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-text-secondary hover:text-primary transition-colors">Our Menu</Link>
              </li>
              <li>
                <Link to="/about" className="text-text-secondary hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-secondary hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary pb-2 text-text-base">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>
                  <a href="tel:7090707243" className="text-text-secondary hover:text-primary transition-colors">
                    +91 7090707243
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>
                  <a href="mailto:a1cookinghub@gmail.com" className="text-text-secondary hover:text-primary transition-colors">
                   a1cookinghub@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span className="text-text-secondary">
                  A1 Cooking Hub, Hosa road, Bangalore 560099
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary pb-2 text-text-base">Open Hours</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Open 24/7</span>
            </div>
            <p className="text-text-secondary mb-4">
              We're available round the clock to serve your food needs!
            </p>
            <div className="bg-primary-dark bg-opacity-30 rounded-lg p-4">
              <p className="text-primary font-medium">
                Order via WhatsApp anytime!
              </p>
              <br/>
              <button 
              onClick={() => openWhatsApp('Hello, I would like to place an order')}
              className="btn btn-secondary"
            >
              Order Now <ArrowRight size={18} />
            </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} A1 Cooking Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
