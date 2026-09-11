import React from 'react';
import { Sparkles } from 'lucide-react';

export const SectionHeading = ({ 
  eyebrow, 
  title, 
  subtitle, 
  eyebrowColor = 'orange', 
  align = 'center',
  className = '' 
}) => {
  return (
    <div className={`section-header ${align === 'left' ? 'text-left' : ''} ${className}`} style={align === 'left' ? { textAlign: 'left', maxWidth: '100%', marginLeft: 0 } : {}}>
      {eyebrow && (
        <div className={`eyebrow ${eyebrowColor === 'blue' ? 'eyebrow-blue' : ''}`}>
          <Sparkles style={{ width: 14, height: 14 }} />
          {eyebrow}
        </div>
      )}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};
