import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50 z-[-2]"
        style={{ 
          backgroundImage: "url('Assets/images/background.jpg')",
          animation: "subtleZoom 30s infinite alternate"
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-dark-darker/80 to-dark-darker/60 z-[-1]" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 h-full">
        <div className="absolute top-1/3 left-0 md:left-[10%] max-w-xl px-4 md:px-0 fade-in delay-100 opacity-0">
          <div className="w-20 h-0.5 bg-gradient-to-r from-pink-500 to-accent mb-6 line-grow" />
          
          <h1 className="font-serif">
            <span className="block text-4xl md:text-5xl font-bold text-white mb-2 fade-in delay-200 opacity-0">
              Master Mathematics
            </span>
            <span className="block text-xl md:text-3xl font-medium text-white/90 mb-6 fade-in delay-300 opacity-0">
              at The National Higher School
            </span>
          </h1>
          
          <p className="text-base md:text-lg font-medium text-white/80 mb-8 max-w-lg fade-in delay-400 opacity-0">
            Access curated lecture notes, solved problem sets, and progress tracking tools 
            designed exclusively for NHSM students.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 fade-in delay-500 opacity-0">
            <Link to="/study-guide" className="btn-primary">
              <BookOpen className="w-5 h-5" />
              Explore Resources
            </Link>
            <span className="text-sm text-white/60 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2.5 before:h-0.5 before:bg-white/40">
              Free access for all students
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;