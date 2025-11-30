import React from 'react';
import { User, Play, X, Maximize2, MoreHorizontal } from 'lucide-react';

export const Illustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-[600px] aspect-[4/3] bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 sm:p-6 lg:p-8 flex flex-col overflow-hidden hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
      
      {/* Decorative Grid Background inside the 'monitor' */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      {/* Browser Window Header */}
      <div className="relative w-full flex items-center justify-between border-b-2 border-black pb-4 mb-6 z-10">
        <div className="flex items-center gap-2">
            <div className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center bg-white shadow-[2px_2px_0px_0px_black]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                    <path d="M4 4H20V20H12C7.58172 20 4 16.4183 4 12V4Z" fill="currentColor"/>
                </svg>
            </div>
            <span className="font-bold text-lg">Excludia</span>
        </div>
        <div className="hidden sm:flex flex-col gap-1 w-1/3 mx-4">
             <div className="h-1.5 w-full bg-black rounded-full"></div>
             <div className="h-1.5 w-2/3 bg-black rounded-full"></div>
        </div>
        <div className="flex items-center gap-2">
            <MoreHorizontal className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative flex-1 flex gap-4 z-10">
        
        {/* Left Sidebar Mockup */}
        <div className="hidden sm:flex flex-col gap-3 w-1/4 pt-2 animate-pulse">
            <div className="h-20 w-full border-2 border-black rounded-lg bg-white shadow-[2px_2px_0px_0px_black]"></div>
            <div className="h-20 w-full border-2 border-black rounded-lg bg-white"></div>
        </div>

        {/* Main "Screen" with Character */}
        <div className="flex-1 relative flex items-end justify-center">
            
            {/* Background UI Elements in the Illustration */}
             <div className="absolute top-0 right-0 w-2/3 h-32 border-2 border-black rounded-lg bg-white p-2 animate-float-delayed">
                 <div className="w-full h-full flex flex-col gap-2">
                     <div className="w-full h-2 bg-gray-200 rounded"></div>
                     <div className="flex gap-2 h-full">
                         <div className="flex-1 bg-gray-100 rounded"></div>
                         <div className="w-1/3 bg-brand-lime/20 rounded border border-brand-lime"></div>
                     </div>
                 </div>
             </div>

             {/* The Character (Abstracted) */}
             {/* Using basic shapes to construct a "person" style figure */}
             <div className="relative z-20 flex flex-col items-center animate-float">
                {/* Head */}
                <div className="w-16 h-16 border-2 border-black rounded-full bg-white relative overflow-hidden group">
                    <div className="absolute top-4 left-2 w-12 h-4 bg-black rotate-[-10deg] group-hover:rotate-0 transition-transform duration-300"></div> {/* Hair/Glasses */}
                </div>
                {/* Torso */}
                <div className="w-32 h-40 border-2 border-black bg-white rounded-t-3xl mt-[-5px] relative flex flex-col items-center pt-8">
                     {/* Arm reaching out */}
                    <div className="absolute -right-12 top-10 w-20 h-8 border-2 border-black bg-white rotate-[-20deg] rounded-full z-[-1] origin-left animate-[wiggle_3s_ease-in-out_infinite]"></div>
                    <div className="absolute -right-14 top-6 w-8 h-8 bg-brand-lime border-2 border-black rounded-full z-[0]"></div> {/* Hand */}
                    
                    <div className="w-3 h-3 border border-black rounded-full mt-2"></div>
                    <div className="w-3 h-3 border border-black rounded-full mt-8"></div>
                    
                    {/* Logo on shirt */}
                    <div className="absolute top-16 right-8 w-4 h-4 border border-black rounded flex items-center justify-center">
                        <div className="w-2 h-2 bg-brand-lime"></div>
                    </div>
                </div>
             </div>

             {/* Floating Elements around character */}
             <div className="absolute bottom-10 left-0 animate-bounce">
                 <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-brand-lime hover:text-black transition-colors cursor-pointer shadow-lg">
                     <Play size={20} fill="currentColor" />
                 </div>
             </div>
             <div className="absolute bottom-12 right-10 animate-pulse">
                 <div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center bg-white">
                     <X size={20} />
                 </div>
             </div>
             
             {/* Geometric Accents */}
             <Maximize2 className="absolute top-10 left-10 text-gray-400 w-6 h-6 animate-spin-slow" />
             
             <div className="absolute top-32 right-32 w-2 h-2 bg-black rounded-full"></div>
        </div>
      </div>
      
      {/* Bottom Desk/Books abstract */}
      <div className="relative h-12 mt-4 border-t-2 border-black flex items-end justify-between px-8 z-10">
            {/* Table Legs */}
            <div className="absolute -bottom-8 left-10 w-4 h-16 border-2 border-black bg-white -z-10"></div>
            <div className="absolute -bottom-8 right-10 w-4 h-16 border-2 border-black bg-white -z-10"></div>
            
            {/* Books Stack */}
            <div className="flex flex-col gap-1 mb-[-12px] relative z-20 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-24 h-4 border-2 border-black bg-white rounded-sm"></div>
                <div className="w-28 h-4 border-2 border-black bg-black rounded-sm"></div>
                <div className="w-26 h-4 border-2 border-black bg-white rounded-sm"></div>
            </div>
      </div>
    </div>
  );
};