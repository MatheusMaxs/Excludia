import React, { useState } from 'react';
import { ArrowRight, Twitter, Linkedin, Instagram, Github, Check } from 'lucide-react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
      e.preventDefault();
      if(email) {
          setSubscribed(true);
          setTimeout(() => setSubscribed(false), 3000);
          setEmail('');
      }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if(element) element.scrollIntoView({ behavior: 'smooth'});
  };

  return (
    <footer id="footer" className="bg-black text-white pt-20 pb-10 border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: CTA */}
        <div className="border-b border-gray-800 pb-16 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to start your project?</h2>
                <p className="text-gray-400 text-lg">Let's create something extraordinary together.</p>
            </div>
            <Button variant="primary" icon className="whitespace-nowrap transform hover:scale-105 transition-transform" onClick={() => window.location.href = 'mailto:hello@excludia.com'}>
                Start a Project
            </Button>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 group cursor-pointer">
                     <div className="w-10 h-10 border-2 border-white/20 rounded-lg bg-white flex items-center justify-center transition-transform group-hover:rotate-6">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                            <path d="M4 4H20V20H12C7.58172 20 4 16.4183 4 12V4Z" fill="currentColor"/>
                        </svg>
                     </div>
                     <span className="text-2xl font-bold group-hover:text-brand-lime transition-colors">Excludia</span>
                </div>
                <p className="text-gray-400">
                    Transforming digital landscapes with neo-brutalist design and cutting-edge technology.
                </p>
                <div className="flex gap-4">
                    {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-brand-lime hover:text-black hover:border-brand-lime hover:-translate-y-1 transition-all rounded-sm">
                            <Icon size={20} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Links Column 1 */}
            <div>
                <h4 className="font-bold text-lg mb-6 text-brand-lime">Company</h4>
                <ul className="space-y-4">
                    <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-gray-400 hover:text-white hover:underline transition-colors block hover:translate-x-1 duration-200">About Us</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white hover:underline transition-colors block hover:translate-x-1 duration-200">Careers</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white hover:underline transition-colors block hover:translate-x-1 duration-200">News</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white hover:underline transition-colors block hover:translate-x-1 duration-200">Contact</a></li>
                </ul>
            </div>

             {/* Links Column 2 */}
            <div>
                <h4 className="font-bold text-lg mb-6 text-brand-lime">Services</h4>
                <ul className="space-y-4">
                    {['Branding', 'Web Design', 'Development', 'Marketing'].map((item) => (
                        <li key={item}><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-gray-400 hover:text-white hover:underline transition-colors block hover:translate-x-1 duration-200">{item}</a></li>
                    ))}
                </ul>
            </div>

            {/* Newsletter */}
            <div>
                 <h4 className="font-bold text-lg mb-6 text-brand-lime">Newsletter</h4>
                 <p className="text-gray-400 mb-4">Subscribe to get the latest design news.</p>
                 <form onSubmit={handleSubscribe} className="flex flex-col gap-2 relative">
                     <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email address" 
                        className="w-full bg-white/5 border border-white/20 px-4 py-3 focus:outline-none focus:border-brand-lime text-white placeholder:text-gray-600 transition-colors"
                     />
                     <button type="submit" className={`font-bold py-3 transition-all duration-300 flex items-center justify-center gap-2 ${subscribed ? 'bg-green-500 text-white' : 'bg-white text-black hover:bg-brand-lime'}`}>
                         {subscribed ? <><Check size={18} /> Subscribed!</> : 'Subscribe'}
                     </button>
                 </form>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Excludia Agency. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};