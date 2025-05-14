import React from 'react';
import AnnouncementCard from './AnnouncementCard';

const AnnouncementsSection: React.FC = () => {
  const announcements = [
    {
      type: 'new' as const,
      title: 'Winter Exam Schedule',
      date: 'Dec 5, 2023',
      description: 'Final exam dates and rooms have been published for all modules.',
      delay: 0
    },
    {
      type: 'urgent' as const,
      title: 'Registration Deadline',
      date: 'Dec 1, 2023',
      description: 'Last day to register for Spring 2024 modules is Dec 15.',
      delay: 1
    },
    {
      type: 'event' as const,
      title: 'Math Hackathon',
      date: 'Nov 28, 2023',
      description: 'Join the annual NHSM Hackathon on Jan 20-21. Prizes await!',
      delay: 2
    }
  ];

  return (
    <section className="py-20 bg-dark-darker/80 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-20 h-0.5 bg-accent mx-auto mb-6 line-grow" />
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-3">Latest Announcements</h2>
          <p className="text-lg text-white/80">Important updates for NHSM students</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {announcements.map((announcement, index) => (
            <AnnouncementCard 
              key={index}
              type={announcement.type}
              title={announcement.title}
              date={announcement.date}
              description={announcement.description}
              animationDelay={announcement.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;