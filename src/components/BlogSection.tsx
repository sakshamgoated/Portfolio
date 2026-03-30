import React from 'react';
import { Calendar, Clock, ArrowRight, Eye, Heart, FileText } from 'lucide-react';
import { blogPosts } from '../data/mockData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BlogSection: React.FC = () => {
  useScrollReveal();

  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-cy-dark border-b-2">
      <div className="text-center mb-16 reveal">
        <div className="inline-flex items-center space-x-2 px-4 py-2 brutal-border mb-6 group cursor-pointer hover-invert">
          <div className="w-2 h-2 bg-cy-dark group-hover:bg-cy-red blink"></div>
          <span className="font-bold text-sm uppercase tracking-widest">LATEST_POSTS.LOG</span>
        </div>
        
        <h2 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter text-cy-dark mb-4 drop-shadow-[4px_4px_0_var(--cy-light)] flex flex-wrap justify-center gap-x-[2vw]">
          <span className="name-reveal-container">
            <span className="name-reveal-text inline-block">INSIGHTS</span>
            <span className="name-reveal-block"></span>
          </span>
          <span className="name-reveal-container">
            <span className="name-reveal-text delay-2 inline-block text-transparent" style={{WebkitTextStroke: '2px var(--cy-dark)'}}>& WRITINGS</span>
            <span className="name-reveal-block delay-2"></span>
          </span>
        </h2>
        <p className="text-sm md:text-base font-bold uppercase max-w-2xl mx-auto leading-relaxed">
          Unfiltered thoughts, technical documentation, and structural blueprints for modern web engineering. Read the transmissions below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {blogPosts.map((post, index) => (
          <article
            key={post.id}
            data-index={index}
            className={`brutal-box p-6 flex flex-col justify-between group reveal`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="space-y-6">
              {/* Meta Info */}
              <div className="flex items-center justify-between text-xs font-bold uppercase border-b-2 border-cy-dark pb-3">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-3">
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3"/> [{(Math.random() * 500).toFixed(0)}]</span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-heading text-3xl font-black uppercase mb-3 leading-tight tracking-tight group-hover:underline decoration-cy-dark decoration-4 underline-offset-4">
                  {post.title}
                </h3>
                <p className="text-sm font-bold leading-relaxed text-justify mt-4">
                  {post.excerpt}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags.map(tag => (
                  <span key={tag} className="brutal-border px-2 py-1 text-xs font-bold uppercase group-hover:bg-cy-dark group-hover:text-cy-red transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Read Button */}
            <div className="mt-8 pt-4 border-t-2 border-cy-dark flex items-center justify-between hover-invert p-2 cursor-pointer transition-colors">
              <span className="font-bold uppercase text-sm flex items-center gap-2">
                <FileText className="w-4 h-4"/> READ_ARTICLE
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
              <div className="absolute top-4 right-4 bg-cy-dark text-cy-red px-2 py-1 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                 <Heart className="inline w-3 h-3" /> [{(Math.random() * 50).toFixed(0)}]
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center reveal">
        <button className="brutal-box inline-flex items-center space-x-3 px-8 py-4 text-lg font-bold uppercase cursor-pointer hover-invert focus:outline-none">
          <span>LOAD_ALL_ENTRIES.SH</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default BlogSection;