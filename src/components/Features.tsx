import React from 'react';
import { GraduationCap, FlaskRound as Flask, Calendar, Lightbulb } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <GraduationCap />,
      title: "Academic System",
      description: "Review our study program: modules, coefficients, and teaching methods.",
      linkText: "Explore Structure",
      linkUrl: "/academic",
      delay: 0
    },
    {
      icon: <Flask />,
      title: "Scientific Clubs",
      description: "Finmatics, Mobius, Eurika - explore passions beyond the classroom.",
      linkText: "Discover Clubs",
      linkUrl: "/clubs",
      delay: 1
    },
    {
      icon: <Calendar />,
      title: "Events & Workshops",
      description: "Seminars, hackathons, and conferences throughout the year.",
      linkText: "View Calendar",
      linkUrl: "/events",
      delay: 2
    },
    {
      icon: <Lightbulb />,
      title: "Tips & Guidance",
      description: "Essential study strategies from senior students.",
      linkText: "Learn Secrets",
      linkUrl: "/tips",
      delay: 3
    }
  ];

  return (
    <section className="py-20 bg-dark-darker/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-20 h-0.5 bg-accent mx-auto mb-6 line-grow" />
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-3">Discover NHSM</h2>
          <p className="text-lg text-white/80">Your guide to academics and community</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              linkText={feature.linkText}
              linkUrl={feature.linkUrl}
              animationDelay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;