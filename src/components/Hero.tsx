import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import StaggeredText from './StaggeredText';

const Hero: React.FC = () => {
  useScrollReveal();

  return (
    <section className="relative w-full overflow-hidden border-b-2 border-cy-dark bg-cy-red pb-10">
      
      {/* Top Coordinate Bar */}
      <div className="flex justify-between items-center px-4 py-2 border-b-2 border-cy-dark text-sm font-bold tracking-widest uppercase">
        <span>35.6762° N / 139.6503° E</span>
        <span>PORTFOLIO_OS</span>
        <span>EARTH</span>
      </div>

      {/* Massive Typographical Header */}
      <div className="border-b-2 border-cy-dark overflow-hidden flex flex-col pt-10 pb-4 px-4 sm:px-8 reveal">
        <h1 className="font-heading text-[15vw] sm:text-[8vw] leading-none font-black tracking-tighter text-cy-dark flex flex-col sm:flex-row flex-wrap sm:gap-x-[2vw] mb-4">
           <StaggeredText text="SAKSHAM" delayOffset={100} />
           <StaggeredText text="SHARMA" delayOffset={600} className="text-transparent" style={{WebkitTextStroke: '2px var(--cy-dark)'}} />
        </h1>
      </div>

      {/* Grid Layout Section */}
      <div className="flex flex-col md:flex-row w-full border-b-2 border-cy-dark">
        {/* Left Column: Stark Tagline */}
        <div className="w-full md:w-1/2 p-4 sm:p-8 flex flex-col justify-between border-b-2 md:border-b-0 md:border-r-2 border-cy-dark bg-cy-red reveal-left">
          
          <div className="space-y-2 mb-10 mt-4 relative">
            {/* Background Grid Lines for Left Col */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 pointer-events-none opacity-20">
              {Array.from({length: 16}).map((_, i) => (
                <div key={i} className="border-t border-l border-cy-dark"></div>
              ))}
            </div>

            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold uppercase leading-none tracking-tight">
              CODED.<br/>
              STRUCTURED.<br/>
              DEPLOYED.
            </h2>
          </div>

          <button className="brutal-box self-start text-xl font-bold py-3 px-6 flex items-center gap-3 uppercase cursor-pointer hover-invert">
            <span className="text-sm blink">{'>_'}</span> VIEW_WORK <ArrowDown className="w-5 h-5" />
          </button>
        </div>

        {/* Right Column: Text Block and Socials */}
        <div className="w-full md:w-1/2 p-4 sm:p-8 md:p-12 flex flex-col justify-end bg-cy-red relative reveal">
          
          {/* Decorative Crosshair */}
          <div className="absolute top-8 left-8 w-8 h-8">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-cy-dark"></div>
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-cy-dark"></div>
          </div>

          <div className="mt-16 md:mt-24">
             <p className="text-sm md:text-base font-bold text-justify uppercase mb-8 leading-tight max-w-sm">
              I'm a full-stack developer who builds web apps that work well and look good.
              I focus on writing clean code, solving real problems, and shipping things that actually matter.
            </p>

            <div className="flex flex-col space-y-4 font-bold uppercase text-sm w-full border-t-2 border-cy-dark pt-4">
              <span className="text-xs mb-2">ACCESS_LINKS.EXE</span>
              <a href="https://github.com/sakshamgoated" target="_blank" rel="noreferrer" className="flex justify-between items-center brutal-border p-2 hover-invert">
                <span className="flex items-center gap-2"><Github className="w-4 h-4"/> GITHUB</span>
                <span>[01]</span>
              </a>
              <a href="https://www.linkedin.com/in/saksham-sharma-b961a2212/" target="_blank" rel="noreferrer" className="flex justify-between items-center brutal-border p-2 hover-invert">
                <span className="flex items-center gap-2"><Linkedin className="w-4 h-4"/> LINKEDIN</span>
                <span>[02]</span>
              </a>
              <a href="mailto:Samsak577@gmail.com" className="flex justify-between items-center brutal-border p-2 hover-invert">
                <span className="flex items-center gap-2"><Mail className="w-4 h-4"/> COMMUNICATE</span>
                <span>[03]</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="border-b-2 border-cy-dark bg-cy-dark text-cy-red py-2 uppercase font-bold text-sm tracking-widest overflow-hidden">
         <div className="ticker-wrap w-full">
            <div className="ticker-content">
               <span>FULL-STACK DEVELOPER * UI/UX ENTHUSIAST * SAKSHAM SHARMA * REACT * NODE * TYPESCRIPT * </span>
               <span>FULL-STACK DEVELOPER * UI/UX ENTHUSIAST * SAKSHAM SHARMA * REACT * NODE * TYPESCRIPT * </span>
               <span>FULL-STACK DEVELOPER * UI/UX ENTHUSIAST * SAKSHAM SHARMA * REACT * NODE * TYPESCRIPT * </span>
               <span>FULL-STACK DEVELOPER * UI/UX ENTHUSIAST * SAKSHAM SHARMA * REACT * NODE * TYPESCRIPT * </span>
            </div>
         </div>
      </div>

    </section>
  );
};

export default Hero;