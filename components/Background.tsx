import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Subtle Glitch Blocks */}
      <div className="absolute top-[10%] left-[5%] w-20 h-20 bg-gray-50 opacity-50 z-0"></div>
      <div className="absolute top-[20%] right-[15%] w-32 h-32 bg-gray-50 opacity-50 z-0 hidden lg:block"></div>
      <div className="absolute bottom-[15%] left-[20%] w-40 h-24 bg-gray-50 opacity-50 z-0"></div>
      <div className="absolute top-[40%] left-[45%] w-10 h-10 bg-brand-lime/10 z-0"></div>

      {/* Large faint blur for depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-gray-50 to-transparent rounded-full blur-3xl opacity-50"></div>
    </div>
  );
};