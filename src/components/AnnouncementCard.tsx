import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AnnouncementProps {
  type: 'new' | 'urgent' | 'event';
  title: string;
  date: string;
  description: string;
  animationDelay?: number;
}

const AnnouncementCard: React.FC<AnnouncementProps> = ({ 
  type, 
  title, 
  date, 
  description,
  animationDelay = 0
}) => {
  const getBadgeStyles = () => {
    switch (type) {
      case 'new':
        return 'bg-gradient-to-r from-pink-500 to-orange-400';
      case 'urgent':
        return 'bg-gradient-to-r from-primary to-secondary';
      case 'event':
        return 'bg-gradient-to-r from-secondary to-accent';
      default:
        return 'bg-gradient-to-r from-secondary to-accent';
    }
  };

  return (
    <div 
      className={`card card-hover fade-in relative opacity-0`}
      style={{ animationDelay: `${0.1 + (animationDelay * 0.1)}s` }}
    >
      <span className={`absolute -top-2.5 right-5 py-1 px-4 rounded-full text-xs font-bold text-white shadow-md ${getBadgeStyles()}`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
      
      <h3 className="text-xl font-semibold text-accent mb-2">{title}</h3>
      <p className="text-sm text-white/60 mb-4">Posted: {date}</p>
      <p className="text-white/80 mb-5">{description}</p>
      
      <button className="inline-flex items-center text-accent font-medium gap-2 transition-all duration-300 hover:text-secondary hover:translate-x-1">
        Read Details <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AnnouncementCard;