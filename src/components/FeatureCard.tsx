import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  animationDelay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  linkText, 
  linkUrl,
  animationDelay = 0
}) => {
  return (
    <div 
      className={`card card-hover fade-in opacity-0`}
      style={{ animationDelay: `${0.1 + (animationDelay * 0.1)}s` }}
    >
      <div className="text-4xl text-accent mb-5 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-accent mb-3 relative inline-block
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
        after:bg-accent after:transition-all after:duration-300
        group-hover:after:w-full">
        {title}
      </h3>
      
      <p className="text-white/80 mb-5">
        {description}
      </p>
      
      <Link 
        to={linkUrl} 
        className="inline-flex items-center text-accent font-medium gap-2 transition-all duration-300 
        hover:text-secondary hover:translate-x-1"
      >
        {linkText} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default FeatureCard;