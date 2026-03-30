import React, { useEffect, useState, useRef } from 'react';

interface StaggeredTextProps {
  text: string;
  delayOffset: number;
  className?: string;
  style?: React.CSSProperties;
}

const StaggeredText: React.FC<StaggeredTextProps> = ({ text, delayOffset, className = '', style }) => {
  const [active, setActive] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(true);
        else setActive(false);
    }, { threshold: 0.1 });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={containerRef} className={`inline-flex ${className}`} style={style}>
      {text.split('').map((char, i) => (
        <span key={i} className="overflow-hidden inline-flex pt-2 -mt-2">
          <span
            className="inline-block transition-transform"
            style={{ 
              transform: active ? 'translateY(0)' : 'translateY(120%)',
              transitionDuration: '1000ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: `${delayOffset + i * 40}ms`,
              minWidth: char === ' ' ? '0.3em' : 'auto'
            }}
          >
            {char}
          </span>
        </span>
      ))}
    </span>
  );
};

export default StaggeredText;
