import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="brutal-border mt-12 bg-cy-dark text-cy-light">
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b-2 border-cy-red">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-cy-red" />
              <span className="text-2xl font-black font-heading tracking-widest uppercase">PORTFOLIO</span>
            </div>
            <p className="text-sm uppercase font-bold text-cy-red">
              DIGITAL BRUTALISM / FUNCTIONAL CODE. 
              SYSTEM OPERATIONS INITIATED.
            </p>
          </div>

          {/* Connect */}
          <div className="space-y-4 md:col-start-3">
            <h3 className="text-lg font-black tracking-widest font-heading text-cy-red">CONNECT_</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/sakshamgoated"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-cy-dark bg-cy-light border-2 border-transparent hover:border-cy-red hover:bg-cy-dark hover:text-cy-red transition-all duration-100"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/saksham-sharma-b961a2212/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-cy-dark bg-cy-light border-2 border-transparent hover:border-cy-red hover:bg-cy-dark hover:text-cy-red transition-all duration-100"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:Samsak577@gmail.com"
                className="p-3 text-cy-dark bg-cy-light border-2 border-transparent hover:border-cy-red hover:bg-cy-dark hover:text-cy-red transition-all duration-100"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-cy-red">
            <p>
              © 2026 SAKSHAM. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="blink">SYS.STATUS_OK</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;