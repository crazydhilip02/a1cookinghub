import React from 'react';
import logo from '../Assets/logo.jpg'

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-10 h-10">
        <img src={logo}></img>
        {/* <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        
          <path 
            d="M120 20L200 80V200H40V80L120 20Z" 
            fill="#f7c908" 
            stroke="#492c12" 
            strokeWidth="8"
          />
          <path 
            d="M90 110H150V200H90V110Z" 
            fill="#f7c908" 
            stroke="#492c12" 
            strokeWidth="8"
          />
          <path 
            d="M110 70H130V90H145V105H95V90H110V70Z" 
            fill="#f7c908" 
            stroke="#492c12" 
            strokeWidth="6"
          />
          <path 
            d="M120 20C120 20 130 40 130 50C130 60 120 65 120 65C120 65 110 60 110 50C110 40 120 20 120 20Z" 
            fill="#f7c908" 
            stroke="#492c12" 
            strokeWidth="6"
          />
        </svg> */}
      </div>
      <div>
        <h1 className="text-xl font-bold text-secondary leading-tight">
          <span className="text-primary">A1</span> COOKING HUB
        </h1>
        <p className="text-xs text-text-medium leading-tight">For FOOD Solutions</p>
      </div>
    </div>
  );
};

export default Logo;