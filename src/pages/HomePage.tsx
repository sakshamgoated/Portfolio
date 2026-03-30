import React from 'react';
import Hero from '../components/Hero';
import BlogSection from '../components/BlogSection';

const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-cy-red">
      <Hero />
      <div className="border-b-2 border-cy-dark">
         <BlogSection />
      </div>
    </div>
  );
};

export default HomePage;