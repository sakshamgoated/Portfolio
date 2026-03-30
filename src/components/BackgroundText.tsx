import React, { useEffect, useState } from 'react';

const BackgroundText: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Starts showing after 100px of scroll, reaching max opacity (0.12) at 600px
  const opacity = Math.max(0, Math.min((scrollY - 100) / 500, 0.12));
  // Parallax shift
  const translateY = scrollY * 0.15;

  return (
    <div className="fixed inset-4 pointer-events-none z-0 overflow-hidden flex items-center justify-center isolate">
      <div 
        className="font-heading font-black uppercase text-transparent tracking-tighter whitespace-nowrap flex flex-col items-center select-none"
        style={{
          WebkitTextStroke: '3px var(--cy-dark)',
          fontSize: '22vw',
          lineHeight: '0.8',
          opacity: opacity,
          transform: `translateY(-${translateY}px) rotate(-2deg)`
        }}
      >
        <span>SAKSHAM</span>
        <span>SYSTEM.OS</span>
        <span>ENGINEER</span>
      </div>
    </div>
  );
};

export default BackgroundText;
