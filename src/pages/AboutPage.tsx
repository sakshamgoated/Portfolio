import React from 'react';
import { User, MapPin, Mail, Phone, Download, Code, Target, Award } from 'lucide-react';
import { skills } from '../data/mockData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const AboutPage: React.FC = () => {
  useScrollReveal();

  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
    other: skills.filter(skill => skill.category === 'other'),
  };

  const SkillBar: React.FC<{ skill: { name: string; level: number } }> = ({ skill }) => (
    <div className="brutal-border p-3 flex flex-col justify-between hover-invert group reveal relative">
      <div className="flex justify-between items-center w-full z-10">
        <span className="font-bold flex items-center space-x-2">
          <Code className="h-4 w-4" />
          <span className="uppercase">{skill.name}</span>
        </span>
        <span className="font-heading font-bold">[{skill.level}%]</span>
      </div>
      <div className="w-full h-2 bg-cy-dark/20 mt-3 border-y border-cy-dark group-hover:border-cy-red">
        <div 
          className="h-full bg-cy-dark group-hover:bg-cy-red transition-all duration-[1.5s] ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="w-full bg-cy-red">
      {/* Header Section */}
      <div className="border-b-2 border-cy-dark px-4 sm:px-8 py-12">
        <div className="flex items-center gap-2 mb-4 reveal">
          <div className="w-4 h-4 bg-cy-dark blink"></div>
          <span className="text-sm font-bold uppercase tracking-widest">SYS.INFO_02</span>
        </div>
        <h1 className="font-heading text-6xl md:text-8xl font-black uppercase text-cy-dark tracking-tighter flex flex-wrap gap-x-[2vw]">
          <span className="name-reveal-container">
            <span className="name-reveal-text inline-block">SYS_INFO</span>
            <span className="name-reveal-block"></span>
          </span>
          <span className="name-reveal-container">
            <span className="name-reveal-text delay-2 inline-block text-transparent" style={{WebkitTextStroke: '2px var(--cy-dark)'}}>ABOUT</span>
            <span className="name-reveal-block delay-2"></span>
          </span>
        </h1>
        <p className="mt-6 text-sm md:text-base font-bold uppercase max-w-2xl reveal-left">
          Passionate developer with a love for creating innovative solutions, learning cutting-edge technologies, and building experiences that make a difference without illusion.
        </p>
      </div>

      {/* Main Grid */}
      <div className="flex flex-col xl:flex-row border-b-2 border-cy-dark">
        {/* Profile Details Column */}
        <div className="w-full xl:w-1/2 border-b-2 xl:border-b-0 xl:border-r-2 border-cy-dark p-4 sm:p-8 flex flex-col justify-between">
          <div className="space-y-6 reveal">
            <h2 className="font-heading text-4xl font-bold uppercase flex items-center gap-3">
              <User className="w-8 h-8"/> PROFILE.DAT
            </h2>
            <div className="flex flex-col gap-4 font-bold uppercase text-sm w-full pt-4">
              {[
                { icon: MapPin, text: "Noida, India", label: "LOC" },
                { icon: Mail, text: "Samsak577@gmail.com", label: "MAIL" },
                { icon: Phone, text: "+91 7505520741", label: "COMM" }
              ].map(({ icon: Icon, text, label }, index) => (
                <div key={index} className="flex justify-between items-center brutal-border p-3 hover-invert">
                  <span className="flex items-center gap-2">
                    <Icon className="w-4 h-4"/> {label}
                  </span>
                  <span className="text-xs sm:text-sm">[{text}]</span>
                </div>
              ))}
            </div>
            <button className="brutal-box w-full text-sm sm:text-lg font-bold py-4 px-6 flex items-center justify-center gap-3 uppercase cursor-pointer hover-invert mt-6">
              <Download className="w-5 h-5" /> DOWNLOAD_RESUME.EXE
            </button>
          </div>

          <div className="mt-12 space-y-4 reveal-left">
            <h3 className="font-heading text-2xl font-bold uppercase flex items-center gap-3">
              <Target className="w-6 h-6"/> JOURNEY_LOG
            </h3>
            <p className="text-sm font-bold text-justify uppercase leading-tight">
              I'm a passionate full-stack developer with over 3 years of experience building 
              innovative web applications. I thrive on turning complex problems into elegant, 
              functional solutions. When I'm not coding, you'll find me exploring emerging 
              technologies, contributing to open source, or sharing knowledge.
            </p>
          </div>
        </div>

        {/* Decorative Right Column */}
        <div className="w-full xl:w-1/2 p-4 sm:p-8 relative bg-cy-red overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 pointer-events-none opacity-20">
            {Array.from({length: 36}).map((_, i) => (
              <div key={i} className="border border-cy-dark"></div>
            ))}
          </div>
          
          <div className="relative z-10 brutal-box w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center glitch-hover group reveal">
             <User className="h-24 w-24 sm:h-32 sm:w-32 text-cy-dark group-hover:scale-110 transition-transform duration-200" />
             <div className="absolute -top-4 -left-4 bg-cy-dark text-cy-red font-bold p-1 text-xs sm:text-sm">IMG_NOT_FOUND</div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col items-center">
        <div className="w-full px-4 sm:px-8 py-10 border-b-2 border-cy-dark">
          <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase text-cy-dark flex flex-wrap justify-center gap-x-[1vw]">
            <span className="name-reveal-container">
              <span className="name-reveal-text inline-block">TECH_</span>
              <span className="name-reveal-block"></span>
            </span>
            <span className="name-reveal-container">
              <span className="name-reveal-text delay-2 inline-block text-transparent" style={{WebkitTextStroke: '2px var(--cy-dark)'}}>STACK</span>
              <span className="name-reveal-block delay-2"></span>
            </span>
          </h2>
          <p className="mt-2 text-sm font-bold uppercase reveal">
            A comprehensive toolkit of modern technologies
          </p>
        </div>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
           {Object.entries(skillCategories).map(([category, categorySkills], index) => (
             <div key={category} className={`p-4 sm:p-8 border-cy-dark ${index % 2 === 0 ? 'md:border-r-2' : ''} ${(index === 0 || index === 1) ? 'border-b-2' : ''} reveal`}>
               <h3 className="font-heading text-2xl font-bold uppercase mb-6 flex items-center gap-3">
                 <Award className="w-6 h-6"/> {category}_DEV
               </h3>
               <div className="flex flex-col gap-3">
                 {categorySkills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                 ))}
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;