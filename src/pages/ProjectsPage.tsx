import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../data/mockData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProjectsPage: React.FC = () => {
  useScrollReveal();

  return (
    <div className="w-full bg-cy-red">
      {/* Header Section */}
      <div className="border-b-2 border-cy-dark px-4 sm:px-8 py-12">
        <div className="flex items-center gap-2 mb-4 reveal">
          <div className="w-4 h-4 bg-cy-dark blink"></div>
          <span className="text-sm font-bold uppercase tracking-widest">WORK.EXE</span>
        </div>
        <div className="text-center mb-16 reveal">
          <h2 className="font-heading text-6xl md:text-8xl font-black tracking-tighter text-cy-dark uppercase mb-4 drop-shadow-[4px_4px_0_var(--cy-light)] flex flex-wrap justify-center gap-x-[2vw]">
            <span className="name-reveal-container">
              <span className="name-reveal-text inline-block">FEATURED</span>
              <span className="name-reveal-block"></span>
            </span>
            <span className="name-reveal-container">
              <span className="name-reveal-text delay-2 inline-block text-transparent" style={{WebkitTextStroke: '3px var(--cy-dark)'}}>WORK</span>
              <span className="name-reveal-block delay-2"></span>
            </span>
          </h2>
          <p className="font-bold text-sm uppercase tracking-widest max-w-2xl mx-auto border-2 border-cy-dark p-4 bg-cy-light">
            A definitive log of engineered solutions and robust architectures. Hover objects to decrypt visual data.
          </p>
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div key={project.id} className={`flex flex-col lg:flex-row border-b-2 border-cy-dark ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} reveal`}>
            
            {/* Image Placeholder / Visuals */}
            <div className={`w-full lg:w-1/2 p-4 sm:p-8 bg-cy-red border-cy-dark flex items-center justify-center min-h-[300px] sm:min-h-[400px] relative hover:bg-cy-dark group overflow-hidden ${index % 2 !== 0 ? 'lg:border-l-2' : 'lg:border-r-2'}`}>
               <div className="absolute inset-4 brutal-border pointer-events-none z-10 opacity-20 group-hover:opacity-10 transition-opacity"></div>
               <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-150 mix-blend-multiply opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-300" />
               <div className="relative z-20 flex flex-col items-center text-cy-dark transition-colors pointer-events-none">
                  <span className="font-heading font-black text-5xl sm:text-7xl opacity-5 uppercase tracking-tighter mix-blend-overlay group-hover:text-cy-red group-hover:opacity-100 transition-all duration-300">
                     PROJECT_{String(index + 1).padStart(2, '0')}
                  </span>
               </div>
               
               {/* Decorative Crosshair */}
               <div className="absolute bottom-8 right-8 w-8 h-8 group-hover:scale-110 transition-transform hidden sm:block">
                  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-cy-dark group-hover:bg-cy-red transition-colors"></div>
                  <div className="absolute left-1/2 top-0 h-full w-[2px] bg-cy-dark group-hover:bg-cy-red transition-colors"></div>
               </div>
            </div>

            {/* Details */}
            <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col justify-between">
              <div>
                 <div className="flex justify-between items-start mb-6">
                    <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase tracking-tight">{project.title}</h2>
                    <span className="font-bold text-sm uppercase hidden sm:block">[{project.id}]</span>
                 </div>
                 <p className="text-sm font-bold uppercase leading-tight mb-8 text-justify">
                   {project.description}
                 </p>
                 
                 <div className="space-y-4 mb-8">
                   <h3 className="text-sm font-bold uppercase border-b-2 border-cy-dark pb-2 flex items-center gap-2">
                     <Code2 className="w-4 h-4" /> TECH_STACK
                   </h3>
                   <div className="flex flex-wrap gap-2">
                     {project.technologies.map(tech => (
                       <span key={tech} className="brutal-border px-3 py-1 text-xs font-bold uppercase hover-invert cursor-default">
                         {tech}
                       </span>
                     ))}
                   </div>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                 {project.github && (
                   <a href={project.github} target="_blank" rel="noopener noreferrer" className="brutal-box flex-1 py-3 px-4 flex justify-center items-center gap-2 uppercase font-bold text-sm hover-invert">
                     <Github className="w-5 h-5"/> SOURCE_CODE
                   </a>
                 )}
                 {project.demo && (
                   <a href={project.demo} target="_blank" rel="noopener noreferrer" className="brutal-box flex-1 py-3 px-4 flex justify-center items-center gap-2 uppercase font-bold text-sm hover-invert">
                     <ExternalLink className="w-5 h-5"/> INIT_DEMO
                   </a>
                 )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="p-8 sm:p-16 flex flex-col items-center text-center reveal border-b-2 border-cy-dark">
         <h2 className="font-heading text-4xl md:text-6xl font-black uppercase text-cy-dark mb-6 flex flex-wrap justify-center gap-x-[2vw]">
            <span className="name-reveal-container">
              <span className="name-reveal-text inline-block">READY TO</span>
              <span className="name-reveal-block"></span>
            </span>
            <span className="name-reveal-container">
              <span className="name-reveal-text delay-2 inline-block text-transparent" style={{WebkitTextStroke: '2px var(--cy-dark)'}}>COMPILE?</span>
              <span className="name-reveal-block delay-2"></span>
            </span>
         </h2>
         <p className="text-sm font-bold uppercase max-w-lg mb-8">
            Always ready to execute new processes and engineer functional solutions. Let's initiate the next loop.
         </p>
         <a href="mailto:your.email@example.com" className="brutal-box py-4 px-8 text-lg font-bold uppercase hover-invert cursor-pointer flex items-center gap-3">
            <span className="blink">{'>'}</span> START_CONVERSATION.SH
         </a>
      </div>
    </div>
  );
};

export default ProjectsPage;