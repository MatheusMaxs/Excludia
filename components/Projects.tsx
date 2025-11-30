import React, { useRef, useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';

const ProjectCard: React.FC<{ title: string; category: string; color: string; delay: number }> = ({ title, category, color, delay }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, [delay]);

    return (
        <div ref={cardRef} className="reveal-on-scroll group relative bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 cursor-pointer flex flex-col h-full min-h-[400px]">
            {/* Browser/Window Header */}
            <div className="border-b-2 border-black p-3 bg-white flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full border-2 border-black bg-white group-hover:bg-red-400 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-black bg-white group-hover:bg-yellow-400 transition-colors"></div>
                </div>
                <div className="text-xs font-mono uppercase tracking-widest font-bold">{category}</div>
            </div>
            
            {/* Content Image Area */}
            <div className={`aspect-[4/3] ${color} border-b-2 border-black relative overflow-hidden`}>
                {/* Abstract Patterns */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"></div>
                <div className="absolute bottom-4 right-4 bg-white border-2 border-black p-2 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <ArrowUpRight size={24} />
                </div>
            </div>
            
            {/* Footer Text Area */}
            <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-lime group-hover:bg-black w-fit px-1 transition-colors leading-tight">{title}</h3>
                    <p className="text-gray-500 text-sm font-semibold tracking-wide">Strategy / Design / Development</p>
                </div>
            </div>
        </div>
    );
};

export const Projects: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const extraProjects = [
      {
          title: "Neon Horizon",
          category: "Architecture",
          color: "bg-[#FFC8DD]" // Soft Pink
      },
      {
          title: "Data Flow",
          category: "Technology",
          color: "bg-[#A5F3FC]" // Soft Blue
      },
      {
          title: "Raw Matter",
          category: "Industrial",
          color: "bg-[#FFD8A8]" // Soft Orange
      }
  ];

  const handleViewAll = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="projects" className="py-24 bg-white border-y-2 border-black transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-black">Selected Work</h2>
                <p className="text-xl text-gray-500 leading-relaxed font-medium max-w-lg">
                    A collection of projects that challenge the status quo and drive results.
                </p>
            </div>
            <div className="w-full md:w-auto flex justify-start md:justify-end">
                <Button variant="secondary" icon={!isExpanded} onClick={handleViewAll} className="w-full md:w-auto min-w-[200px]">
                    {isExpanded ? 'Show Less' : 'View All Projects'}
                </Button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <ProjectCard 
                title="Fintech Revolution" 
                category="Finance" 
                color="bg-[#E0C8FF]" 
                delay={0}
             />
             <ProjectCard 
                title="Urban Lifestyle" 
                category="E-Commerce" 
                color="bg-[#E8D4B4]"
                delay={150}
             />
             <ProjectCard 
                title="Eco Future" 
                category="Non-Profit" 
                color="bg-brand-lime"
                delay={300}
             />
             
             {isExpanded && extraProjects.map((project, index) => (
                 <ProjectCard 
                    key={index}
                    title={project.title}
                    category={project.category}
                    color={project.color}
                    delay={index * 150}
                 />
             ))}
        </div>
      </div>
    </section>
  );
};