import React, { useEffect, useState } from 'react';

const AnimatedCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cy-dark pointer-events-none z-[9999] transition-all duration-150 ease-out hidden sm:block"
        style={{ 
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : 1})`,
          backgroundColor: isPointer ? 'var(--cy-dark)' : 'transparent',
          opacity: isPointer ? 0.1 : 1
        }}
      />
      <div 
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cy-dark pointer-events-none z-[9999] hidden sm:block transition-all duration-75"
        style={{ transform: `translate(${position.x - 4}px, ${position.y - 4}px)` }}
      />
    </>
  );
};

export default AnimatedCursor;
