import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GlitchText from './GlitchText';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/sys-info', label: 'SYS_INFO' },
    { path: '/projects', label: 'PROJECTS' },
  ];

  return (
    <nav className={`w-full flex justify-between items-end border-b-2 border-cy-dark mb-4 transition-all duration-300 z-40 sticky top-[-1px] bg-cy-red px-2 sm:px-4 ${
      scrolled ? 'pt-2 pb-2 drop-shadow-[0_4px_0_var(--cy-dark)] border-l-2 border-r-2 -mx-2 sm:-mx-4' : 'pt-4 pb-2'
    }`}>
      <div className="flex items-center hidden sm:flex space-x-2">
        <div className="w-4 h-4 bg-cy-dark"></div>
        <div className="w-4 h-4 bg-cy-dark animate-pulse opacity-50"></div>
        <span className="text-xs font-bold uppercase ml-2 tracking-widest cursor-default">
          <GlitchText text="S.S_OS" />
        </span>
      </div>
      
      <div className="flex w-full sm:w-auto overflow-x-auto space-x-1 sm:space-x-4 pr-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-2 font-bold uppercase transition-all duration-100 whitespace-nowrap outline-none flex items-center ${
              currentPath === item.path 
                ? 'bg-cy-dark text-cy-red' 
                : 'bg-transparent text-cy-dark hover-invert hover:brutal-box'
            }`}
          >
            {currentPath === item.path && <span className="mr-2 blink">{'>'}</span>}
            <GlitchText text={item.label} />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;