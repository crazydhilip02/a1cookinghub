import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react'; // Replacing Phone icon
import Logo from './Logo'; // Your older logo component or image
import { styles } from '../utils/styles'; // if you're using custom styles

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => `
    relative font-medium transition-colors duration-300
    ${isActive ? 'text-yellow-400' : 'text-secondary hover:text-yellow-400'}
    after:content-[''] after:absolute after:w-full after:h-0.5 
    after:bg-yellow-400 after:left-0 after:bottom-[-4px]
    after:transform after:scale-x-0 after:transition-transform
    after:duration-300 hover:after:scale-x-100
    ${isActive ? 'after:scale-x-100' : ''}
  `;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <Logo />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClasses}>Home</NavLink>
          <NavLink to="/menu" className={navLinkClasses}>Menu</NavLink>
          <NavLink to="/about" className={navLinkClasses}>About</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
        </nav>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917090707243?text=Hello"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center text-secondary font-medium hover:text-yellow-400 transition-colors group"
        >
          <MessageSquare className="mr-2 h-5 w-5 transform group-hover:rotate-12 transition-transform duration-300" />
          <span className="relative after:content-[''] after:absolute after:w-full after:h-0.5 
            after:bg-yellow-400 after:left-0 after:bottom-[-2px]
            after:transform after:scale-x-0 after:transition-transform
            after:duration-300 group-hover:after:scale-x-100">
            WhatsApp
          </span>
        </a>

        {/* Hamburger Button */}
        <button
          className="md:hidden p-2 text-secondary focus:outline-none hover:text-yellow-400 transition-colors duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? 'text-yellow-400' : 'text-secondary'} font-medium py-2 border-b border-gray-100 hover:text-yellow-400 hover:pl-2 transition-all duration-300`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `${isActive ? 'text-yellow-400' : 'text-secondary'} font-medium py-2 border-b border-gray-100 hover:text-yellow-400 hover:pl-2 transition-all duration-300`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? 'text-yellow-400' : 'text-secondary'} font-medium py-2 border-b border-gray-100 hover:text-yellow-400 hover:pl-2 transition-all duration-300`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? 'text-yellow-400' : 'text-secondary'} font-medium py-2 border-b border-gray-100 hover:text-yellow-400 hover:pl-2 transition-all duration-300`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          <a
            href="https://wa.me/917090707243?text=Hello"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-2 text-secondary font-medium hover:text-yellow-400 hover:pl-2 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
