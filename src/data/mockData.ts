import { Project, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'GlowUp AI Chatbot',
    description: 'A full-stack AI customer support chatbot for a luxury skincare brand. Powered by Llama 3.3 70B with real-time order tracking, product recommendations, and chat history via Supabase.',
    technologies: ['Next.js', 'TypeScript', 'Groq API', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/sakshamgoated/glowup-Chatbot',
    demo: 'https://glowup-chatbot.vercel.app',
    image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'RDL Packaging',
    description: 'A B2B product website for a packaging machinery company, featuring an AI chatbot, product catalog with detailed specs, and a contact system with WhatsApp integration.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Groq API', 'Framer Motion'],
    github: 'https://github.com/sakshamgoated/rdl-packaging-v2',
    demo: 'https://rdl-packaging-v2.vercel.app',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A responsive weather application with location-based forecasts and interactive charts.',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    github: 'https://github.com/sakshamgoated/weather-app',
    demo: 'https://your-weather-app.com',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const skills: Skill[] = [
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'React', level: 88, category: 'frontend' },
  { name: 'Next.js', level: 82, category: 'frontend' },
  { name: 'Vue.js', level: 75, category: 'frontend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Python', level: 78, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 72, category: 'backend' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'AWS', level: 68, category: 'tools' }
];