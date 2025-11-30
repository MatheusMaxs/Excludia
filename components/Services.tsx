import React, { useEffect, useRef } from 'react';
import { Monitor, PenTool, Code, Search, Layers, Megaphone } from 'lucide-react';

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode; delay: number }> = ({ title, description, icon, delay }) => {
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
        <div ref={cardRef} className="reveal-on-scroll group relative bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 flex flex-col items-start h-full">
            <div className="mb-6 p-4 bg-brand-lime border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-all duration-300">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{description}</p>
            <a href="#" className="inline-flex items-center font-bold underline decoration-2 underline-offset-4 hover:text-brand-lime hover:bg-black transition-colors px-1">
                Learn more
            </a>
        </div>
    );
};

export const Services: React.FC = () => {
  const services = [
    {
      title: "Brand Strategy",
      description: "We build strong, memorable brands that resonate with your target audience and stand the test of time.",
      icon: <Layers size={32} />
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces designed to maximize conversion and customer satisfaction.",
      icon: <PenTool size={32} />
    },
    {
      title: "Web Development",
      description: "Fast, responsive, and secure websites built with modern technologies to power your business growth.",
      icon: <Code size={32} />
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing campaigns that increase visibility, drive traffic, and generate qualified leads.",
      icon: <Megaphone size={32} />
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and get found by customers searching for your products.",
      icon: <Search size={32} />
    },
    {
      title: "Product Design",
      description: "From concept to prototype, we help you bring innovative digital products to market faster.",
      icon: <Monitor size={32} />
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-brand-lime border-2 border-black px-4 py-1 font-bold text-sm uppercase tracking-wider mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            We help you <span className="underline decoration-brand-lime decoration-4 underline-offset-4">stand out</span>
          </h2>
          <p className="text-xl text-gray-500">
            Comprehensive digital solutions tailored to elevate your business presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};