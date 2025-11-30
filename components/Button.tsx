import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  icon = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold border-2 border-black px-6 py-3 transition-all duration-200 active:translate-y-1 active:translate-x-1 active:shadow-none";
  
  const variants = {
    primary: "bg-brand-lime text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]",
    secondary: "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]",
    outline: "bg-transparent border-none shadow-none hover:bg-gray-100 px-4 py-2" // simplified for nav links
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        {icon && <ArrowRight size={20} strokeWidth={2} />}
      </span>
    </button>
  );
};