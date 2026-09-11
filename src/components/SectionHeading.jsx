import React from 'react'
import { Sparkles } from 'lucide-react'
import { Reveal } from './Reveal'

export const SectionHeading = ({ 
  eyebrow, 
  title, 
  subtitle, 
  eyebrowColor = 'orange', 
  align = 'center',
  className = '',
  style = {}
}) => {
  const isLeft = align === 'left'

  return (
    <div 
      className={`section-header ${className}`} 
      style={{ 
        textAlign: isLeft ? 'left' : 'center', 
        maxWidth: isLeft ? '100%' : '840px', 
        margin: isLeft ? '0 0 60px 0' : '0 auto 60px auto',
        ...style 
      }}
    >
      {eyebrow && (
        <Reveal delay={0} yOffset={20}>
          <div 
            className={`eyebrow ${eyebrowColor === 'blue' ? 'eyebrow-blue' : ''}`}
            style={{ margin: isLeft ? '0 0 20px 0' : '0 auto 20px auto' }}
          >
            <Sparkles style={{ width: 14, height: 14 }} />
            {eyebrow}
          </div>
        </Reveal>
      )}

      {title && (
        <Reveal delay={0.1} yOffset={25}>
          <h2 className="section-title">{title}</h2>
        </Reveal>
      )}

      {subtitle && (
        <Reveal delay={0.2} yOffset={20}>
          <p className="section-subtitle" style={{ margin: isLeft ? '0' : '0 auto' }}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}

export default SectionHeading
