import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

const defaultEase = [0.16, 1, 0.3, 1]

export const Reveal = ({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 30,
  xOffset = 0,
  scaleOffset = 1,
  variant = 'fade-up',
  className = '',
  style = {}
}) => {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className} style={style}>{children}</div>
  }

  const variants = {
    'fade-up': {
      initial: { opacity: 0, y: yOffset },
      animate: { opacity: 1, y: 0 }
    },
    'fade-in': {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    'slide-right': {
      initial: { opacity: 0, x: xOffset || -30 },
      animate: { opacity: 1, x: 0 }
    },
    'slide-left': {
      initial: { opacity: 0, x: xOffset || 30 },
      animate: { opacity: 1, x: 0 }
    },
    'scale-up': {
      initial: { opacity: 0, scale: scaleOffset || 0.94 },
      animate: { opacity: 1, scale: 1 }
    }
  }

  const selectedVariant = variants[variant] || variants['fade-up']

  return (
    <motion.div
      initial={selectedVariant.initial}
      whileInView={selectedVariant.animate}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: defaultEase }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  delay = 0,
  className = '',
  style = {}
}) => {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className} style={style}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay
          }
        }
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({
  children,
  yOffset = 24,
  className = '',
  style = {}
}) => {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className} style={style}>{children}</div>
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: defaultEase }
        }
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export const TextReveal = ({
  text,
  className = '',
  delay = 0,
  tag = 'h1'
}) => {
  const shouldReduceMotion = useReducedMotion()
  const words = text.split(' ')

  const Tag = tag

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag className={className} style={{ overflow: 'hidden', display: 'inline-block' }}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.04,
              delayChildren: delay
            }
          }
        }}
        style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.25em' }}
      >
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            variants={{
              hidden: { opacity: 0, y: '80%' },
              visible: { opacity: 1, y: '0%', transition: { duration: 0.5, ease: defaultEase } }
            }}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}

export default Reveal
