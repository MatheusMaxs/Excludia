import React, { useEffect, useState, useRef } from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';

const Counter: React.FC<{ end: number; suffix?: string; duration?: number }> = ({ end, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let start = 0;
                    const increment = end / (duration / 16); // 60fps
                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
             if (countRef.current) observer.unobserve(countRef.current);
        };
    }, [end, duration, hasAnimated]);

    return <span ref={countRef}>{count}{suffix}</span>;
};

export const About: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if(sectionRef.current) observer.observe(sectionRef.current);
        return () => { if(sectionRef.current) observer.unobserve(sectionRef.current); }
    }, []);

  return (
    <section id="about" className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="reveal-on-scroll flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Visual Side */}
            <div className="w-full lg:w-1/2 relative group">
                <div className="relative aspect-square md:aspect-[4/3] bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col justify-between overflow-hidden group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-30"></div>
                    
                    <div className="relative z-10 text-6xl md:text-8xl font-black text-black/5 leading-none select-none group-hover:text-brand-lime/20 transition-colors duration-500">
                        SINCE<br/>2021
                    </div>
                    
                    <div className="relative z-10 space-y-4">
                        <div className="bg-brand-lime border-2 border-black p-4 w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2 hover:rotate-0 transition-transform duration-300">
                             <span className="text-3xl font-bold block">
                                <Counter end={150} suffix="+" />
                             </span>
                             <span className="text-sm font-bold uppercase">Projects Delivered</span>
                        </div>
                        <div className="bg-white border-2 border-black p-4 w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ml-12 rotate-2 hover:rotate-0 transition-transform duration-300">
                             <span className="text-3xl font-bold block">
                                <Counter end={98} suffix="%" />
                             </span>
                             <span className="text-sm font-bold uppercase">Client Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2">
                <div className="inline-block bg-black text-white px-3 py-1 font-bold text-sm uppercase mb-6 rotate-1">
                    Who We Are
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
                    Creative minds with a <span className="text-brand-lime bg-black px-2">strategic</span> focus.
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    We are Excludia, a digital agency that bridges the gap between bold creativity and business strategy. We don't just design websites; we craft digital experiences that tell your story and drive growth.
                </p>

                <ul className="space-y-4 mb-10">
                    {[
                        "User-centric design approach",
                        "Data-driven marketing strategies",
                        "Agile development methodology",
                        "Continuous support and optimization"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-200 cursor-default">
                            <div className="w-6 h-6 bg-brand-lime border border-black flex items-center justify-center rounded-sm">
                                <Check size={16} strokeWidth={3} />
                            </div>
                            <span className="font-bold">{item}</span>
                        </li>
                    ))}
                </ul>

                <Button variant="primary" icon onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth'})}>Meet the Team</Button>
            </div>
        </div>
      </div>
    </section>
  );
};