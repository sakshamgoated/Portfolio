import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import BootSequence from './components/BootSequence';

const SystemClock = () => {
  const [time, setTime] = React.useState("");
  
  React.useEffect(() => {
    const timer = setInterval(() => {
       const now = new Date();
       setTime(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}:${now.getMilliseconds().toString().padStart(3, '0')}`);
    }, 47);
    return () => clearInterval(timer);
  }, []);
  
  return <span className="tabular-nums font-mono min-w-[120px] text-right">T_MINUS :: {time}</span>;
};

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-cy-red text-cy-dark font-sans relative flex flex-col selection:bg-cy-dark selection:text-cy-red">
      <BootSequence />
      
      {/* CRT Scanline Overlay Elements */}
      <div className="fixed inset-0 pointer-events-none z-[4900] scanline-overlay"></div>
      <div className="fixed inset-0 pointer-events-none z-[4901] scanline-bar"></div>

      {/* HUD Border overlay */}
      <div className="fixed inset-4 border-2 border-cy-dark pointer-events-none z-50 flex flex-col justify-between p-2">
        <div className="flex justify-between text-xs font-bold">
          <span>SYS.VER_2.1.0</span>
          <span>REC_ON</span>
        </div>
        <div className="flex justify-between text-xs font-bold items-end">
          <span>ERR_NONE</span>
          <SystemClock />
        </div>
      </div>
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full min-h-screen flex flex-col p-4 pt-12 sm:p-8 lg:p-12 pb-20 sm:pb-24">
        <Navigation />
        <main className="brutal-border mt-8 min-h-[70vh] bg-cy-red flex-1 flex flex-col">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/sys-info" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;