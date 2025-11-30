import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Background } from './components/Background';
import { LogoCloud } from './components/LogoCloud';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white text-black selection:bg-brand-lime selection:text-black">
      <Background />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            <Hero />
        </div>
        <LogoCloud />
        <Services />
        <Projects />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default App;