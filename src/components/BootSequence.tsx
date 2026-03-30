import React, { useState, useEffect } from 'react';

const BootSequence: React.FC = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Lock body scroll while booting
    document.body.style.overflow = 'hidden';
    
    const t1 = setTimeout(() => setStage(1), 300);
    const t2 = setTimeout(() => setStage(2), 900);
    const t3 = setTimeout(() => setStage(3), 1400);
    const t4 = setTimeout(() => {
      setStage(4);
      document.body.style.overflow = 'auto';
    }, 2000);

    return () => { 
      clearTimeout(t1); 
      clearTimeout(t2); 
      clearTimeout(t3); 
      clearTimeout(t4);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (stage === 4) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black text-[#F0EFEA] font-mono p-8 flex flex-col justify-end pointer-events-none transition-opacity duration-300 overflow-hidden">
      
      {/* Funny Kitty Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat opacity-60 mix-blend-screen animate-pulse"
        style={{ 
          backgroundImage: 'url(/kitty.jpg)',
          filter: 'grayscale(40%) contrast(1.1) brightness(1)' 
        }}
      />
      
      {/* Dark gradient overlay to ensure text is perfectly readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20"></div>

      <div className="relative z-10 flex flex-col gap-2 uppercase font-bold tracking-widest text-sm sm:text-lg mb-12">
        {stage >= 1 && <div>&gt; INITIALIZING BOOT SEQUENCE_</div>}
        {stage >= 1 && <div className="text-gray-500">&gt; KERNEL: SAKSHAM_OS v2.1.4-STABLE</div>}
        {stage >= 1 && <div>&gt; BYPASSING MAINFRAME ENCRYPTION [OK]</div>}
        
        {stage >= 2 && <div className="mt-2">&gt; MOUNTING VIRTUAL DOM [READY]</div>}
        {stage >= 2 && <div>&gt; ESTABLISHING SECURE CONNECTION TO CLIENT [VERIFIED]</div>}
        
        {stage >= 3 && <div className="mt-4 text-white blink">&gt; SYSTEM READY. DECRYPTING INTERFACE...</div>}
        
        {/* Progress bar */}
        {stage >= 1 && (
          <div className="w-full max-w-xl h-4 border-2 border-[#F0EFEA] mt-8 p-0.5">
            <div 
              className="h-full bg-[#F0EFEA] transition-all duration-[700ms] ease-out"
              style={{ width: stage === 1 ? '35%' : stage === 2 ? '85%' : '100%' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BootSequence;
