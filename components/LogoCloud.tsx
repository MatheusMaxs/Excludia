import React from 'react';
import { Hexagon, Triangle, Circle, Square, Star, Aperture } from 'lucide-react';

export const LogoCloud: React.FC = () => {
  const logos = [
    { name: "Vertex", icon: <Hexagon className="w-8 h-8" strokeWidth={2.5} /> },
    { name: "Prism", icon: <Triangle className="w-8 h-8" strokeWidth={2.5} /> },
    { name: "Orbit", icon: <Circle className="w-8 h-8" strokeWidth={2.5} /> },
    { name: "Cube", icon: <Square className="w-8 h-8" strokeWidth={2.5} /> },
    { name: "Spark", icon: <Star className="w-8 h-8" strokeWidth={2.5} /> },
    { name: "Lens", icon: <Aperture className="w-8 h-8" strokeWidth={2.5} /> },
  ];

  // Duplicate logos to ensure seamless loop
  const seamlessLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full border-y-2 border-black bg-white overflow-hidden py-8">
      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee">
          {seamlessLogos.map((logo, index) => (
            <div 
              key={index} 
              className="group flex items-center justify-center gap-3 px-8 min-w-[200px] cursor-default opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-black group-hover:scale-110 group-hover:text-brand-lime transition-transform duration-300">
                {logo.icon}
              </span>
              <span className="font-bold text-xl tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};