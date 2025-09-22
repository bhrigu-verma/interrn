'use client'

import { useInView } from '@/hooks/useInView';
import { ReactNode, forwardRef } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const RevealOnScroll = forwardRef<HTMLDivElement, RevealOnScrollProps>(
  ({
    children,
    delay = 0,
    duration = 0.6,
    distance = 40,
    direction = 'up',
    threshold = 0.1,
    triggerOnce = true,
    className = '',
    style = {},
  }, forwardedRef) => {
    const { ref, isInView } = useInView({ 
      threshold, 
      triggerOnce,
      rootMargin: '0px 0px -50px 0px'
    });

    const getTransform = () => {
      if (isInView) return 'translate3d(0, 0, 0)';
      
      switch (direction) {
        case 'up':
          return `translate3d(0, ${distance}px, 0)`;
        case 'down':
          return `translate3d(0, -${distance}px, 0)`;
        case 'left':
          return `translate3d(${distance}px, 0, 0)`;
        case 'right':
          return `translate3d(-${distance}px, 0, 0)`;
        default:
          return `translate3d(0, ${distance}px, 0)`;
      }
    };

    const combinedStyle: React.CSSProperties = {
      opacity: isInView ? 1 : 0,
      transform: getTransform(),
      transition: `all ${duration}s ease-out`,
      transitionDelay: `${delay}s`,
      willChange: 'transform, opacity',
      ...style,
    };

    return (
      <div
        ref={(node) => {
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
          if (node) {
            (ref as any).current = node;
          }
        }}
        className={`reveal-on-scroll ${className}`}
        style={combinedStyle}
      >
        {children}
      </div>
    );
  }
);

RevealOnScroll.displayName = 'RevealOnScroll';

export default RevealOnScroll;
