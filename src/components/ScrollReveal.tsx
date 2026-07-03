import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom';
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return { hidden: { opacity: 0, y: 45 }, visible: { opacity: 1, y: 0 } };
      case 'down':
        return { hidden: { opacity: 0, y: -45 }, visible: { opacity: 1, y: 0 } };
      case 'left':
        return { hidden: { opacity: 0, x: 45 }, visible: { opacity: 1, x: 0 } };
      case 'right':
        return { hidden: { opacity: 0, x: -45 }, visible: { opacity: 1, x: 0 } };
      case 'zoom':
        return { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } };
      case 'fade':
      default:
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.75,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
