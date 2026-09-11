import React from 'react';

export const GrowthTrajectory = ({ className = '', style = {} }) => {
  return (
    <svg 
      className={`growth-trajectory-svg ${className}`} 
      viewBox="0 0 800 600" 
      fill="none" 
      style={{ pointerEvents: 'none', ...style }}
    >
      <path 
        d="M-100 550 C200 450, 350 250, 750 50" 
        stroke="url(#heroOrangeGradient)" 
        strokeWidth="6" 
        strokeLinecap="round" 
      />
      <path 
        d="M-100 550 C200 450, 350 250, 750 50" 
        stroke="url(#heroOrangeGlow)" 
        strokeWidth="20" 
        strokeOpacity="0.3" 
        strokeLinecap="round" 
      />
      <defs>
        <linearGradient id="heroOrangeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF7A00" />
          <stop offset="100%" stopColor="#FF9433" />
        </linearGradient>
        <linearGradient id="heroOrangeGlow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF7A00" />
          <stop offset="100%" stopColor="#0B63F6" />
        </linearGradient>
      </defs>
    </svg>
  );
};
