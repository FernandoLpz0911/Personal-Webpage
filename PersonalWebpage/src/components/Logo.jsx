
import React from 'react';

const Logo = ({ width = 60, height = 60, className = "" }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Fernando Lopez Logo"
    >
      {/* Hexagon Border - Gold Stroke */}
      <path 
        d="M50 5 L93.3 27.5 V72.5 L50 95 L6.7 72.5 V27.5 Z" 
        stroke="#FFC800" 
        strokeWidth="3" 
        fill="rgba(255, 200, 0, 0.05)" 
      />
      
      {/* Inner Initials */}
      <text 
        x="50" 
        y="62" 
        textAnchor="middle" 
        fontFamily="sans-serif" 
        fontWeight="700" 
        fontSize="32" 
        fill="#FFC800"
        letterSpacing="1"
      >
        F.L
      </text>
    </svg>
  );
};

export default Logo;
