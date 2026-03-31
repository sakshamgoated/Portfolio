import { BlogPost, Project, Skill } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications',
    excerpt: 'Learn how to structure your React applications for maintainability and performance at scale.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'TypeScript', 'Architecture']
  },
  {
    id: '2',
    title: 'The Future of Web Development',
    excerpt: 'Exploring emerging trends and technologies that will shape the future of web development.',
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['Web Development', 'Trends', 'Technology']
  },
  {
    id: '3',
    title: 'Optimizing Performance in Modern Apps',
    excerpt: 'Essential techniques for improving application performance and user experience.',
    date: '2024-01-05',
    readTime: '10 min read',
    tags: ['Performance', 'Optimization', 'UX']
  }
];

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
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    github: 'https://github.com/sakshamgoated/task-manager',
    demo: 'https://your-task-manager.com',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
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