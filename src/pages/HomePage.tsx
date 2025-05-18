import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Popular from '../components/Popular';
import Testimonials from '../components/Testimonials';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Popular />
      <Testimonials />
    </div>
  );
};

export default HomePage;