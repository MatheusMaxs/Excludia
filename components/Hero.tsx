import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Illustration } from './Illustration';
import { Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToFooter = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
      
      {/* Left Content */}
      <div className={`flex-1 w-full max-w-2xl lg:max-w-none text-center lg:text-left z-10 transition-all duration-1000 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 mb-6 animate-pulse-slow">
          <Sparkles className="w-5 h-5 fill-brand-lime text-black" />
          <span className="font-bold text-sm tracking-wide uppercase">Join 20,000+ Happy Customers</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-black">
          Transform your digital presence to <span className="inline-block relative">
            grow
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-lime -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span> your business
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 delay-100">
          Unlock growth and innovation with our tailored solutions. From seamless website design to cutting-edge digital tools, we help your business thrive in a competitive world.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
          <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4" icon onClick={scrollToFooter}>
            Let's Talk
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4" icon onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}>
            View Work
          </Button>
        </div>
      </div>

      {/* Right Content - Illustration */}
      <div className={`flex-1 w-full flex justify-center lg:justify-end relative transition-all duration-1000 delay-300 ease-out transform ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
         <Illustration />
      </div>
    </div>
  );
};