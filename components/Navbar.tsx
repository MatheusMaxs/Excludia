import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = ['Home', 'Services', 'Projects', 'About'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/90 backdrop-blur-md border-b-2 border-black shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo Area */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="flex items-center gap-3 group">
          <div className="w-10 h-10 border-2 border-black rounded-lg bg-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black group-hover:text-black transition-colors">
                  <path d="M4 4H20V20H12C7.58172 20 4 16.4183 4 12V4Z" fill="currentColor"/>
               </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none tracking-tight group-hover:text-brand-lime transition-colors duration-300">Excludia</span>
            <span className="text-xs text-gray-500 font-medium">Brand Designer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className="font-medium text-gray-600 hover:text-black hover:underline decoration-2 decoration-brand-lime underline-offset-4 transition-all"
            >
              {item}
            </a>
          ))}
          <Button variant="primary" icon onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth'})}>Start a Project</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-[100%] left-0 w-full bg-white border-b-2 border-black shadow-xl p-6 flex flex-col gap-4 z-50 md:hidden animate-in slide-in-from-top-5">
            {navLinks.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className="font-medium text-lg py-3 border-b border-gray-100 active:bg-gray-50 px-2 rounded"
              >
                {item}
              </a>
            ))}
            <div className="pt-2">
              <Button variant="primary" className="w-full" icon onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth'});
              }}>Start a Project</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};