import React, { useState, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

const GlitchText: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number | ReturnType<typeof setInterval> | null>(null);

  const startGlitch = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(() => 
        text
          .split('')
          .map((_, index) => {
            if (index < iteration) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      
      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 2;
    }, 30);
  };

  const stopGlitch = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  return (
    <span onMouseEnter={startGlitch} onMouseLeave={stopGlitch} className="inline-block whitespace-nowrap">
      {displayText}
    </span>
  );
};

export default GlitchText;
