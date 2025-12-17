import React, { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-up' | 'slide-left' | 'slide-right' | 'zoom' | 'none';

interface RevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state based on intersection status to allow re-animation
        // When entry.isIntersecting is true, animation plays.
        // When false, it resets to hidden state.
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getAnimationClass = () => {
    // When not visible, apply opacity-0 to hide the element immediately
    if (!isVisible) return 'opacity-0'; 
    
    switch (animation) {
      case 'fade-up': return 'animate-fade-in-up';
      case 'slide-left': return 'animate-slide-in-left';
      case 'slide-right': return 'animate-slide-in-right';
      case 'zoom': return 'animate-zoom-in';
      default: return '';
    }
  };

  const getDelayClass = () => {
    // Only apply delay when becoming visible
    if (!isVisible) return '';

    if (delay === 100) return 'delay-100';
    if (delay === 200) return 'delay-200';
    if (delay === 300) return 'delay-300';
    if (delay >= 500) return 'delay-500';
    return '';
  };

  return (
    <div 
      ref={ref} 
      className={`${className} ${getAnimationClass()} ${getDelayClass()}`}
    >
      {children}
    </div>
  );
};

export default Reveal;