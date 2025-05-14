import React from 'react';
import Footer from '../components/Footer';

const Announcements: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'NHSM Space - Announcements';
  }, []);
  
  // Sample announcements data
  const announcements = [
    {
      id: 1,
      title: 'Winter Exam Schedule',
      date: 'Dec 5, 2023',
      type: 'academic',
      content: 'The final exam schedule for the Winter 2023 semester has been published. Please check your exam dates, times, and locations. All students must bring their student ID cards to the examination hall.',
      important: true
    },
    {
      id: 2,
      title: 'Registration Deadline',
      date: 'Dec 1, 2023',
      type: 'administrative',
      content: 'The deadline for registering for Spring 2024 modules is December 15, 2023. Please ensure you have met with your academic advisor and planned your courses accordingly. Late registrations will incur a fee.',
      important: true
    },
    {
      id: 3,
      title: 'Math Hackathon',
      date: 'Nov 28, 2023',
      type: 'event',
      content: 'Join the annual NHSM Hackathon on January 20-21, 2024. Form teams of 3-5 students and solve challenging mathematical problems. Prizes include scholarships, tech gadgets, and internship opportunities. Registration opens on December 5.',
      important: false
    },
    {
      id: 4,
      title: 'Library Extended Hours',
      date: 'Nov 25, 2023',
      type: 'facility',
      content: 'The mathematics library will extend its opening hours during the final examination period (Dec 10-22). The library will be open daily from 8:00 AM to 11:00 PM, including weekends.',
      important: false
    },
    {
      id: 5,
      title: 'Mathematical Modeling Workshop',
      date: 'Nov 20, 2023',
      type: 'event',
      content: 'Professor Ahmed Benali will conduct a two-day workshop on mathematical modeling in epidemiology on December 2-3. The workshop is open to all students in Years 3-5. Register by November 28 to secure your place.',
      important: false
    },
    {
      id: 6,
      title: 'Scholarship Applications Open',
      date: 'Nov 15, 2023',
      type: 'administrative',
      content: 'Applications for the Excellence in Mathematics Scholarship (2024-2025) are now open. The scholarship covers tuition fees and provides a monthly stipend. Deadline for applications is January 10, 2024.',
      important: true
    }
  ];
  
  return (
    <main className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">Announcements</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Stay informed about important dates, events, and updates for NHSM students.
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['All', 'Academic', 'Administrative', 'Events', 'Facilities'].map((filter) => (
            <button 
              key={filter}
              className={`py-2 px-4 rounded-full text-sm font-medium transition-all duration-300
                ${filter === 'All'
                  ? 'primary-gradient text-white shadow-lg shadow-primary/20'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Announcements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {announcements.map((announcement, index) => (
            <div 
              key={announcement.id}
              className="card card-hover relative"
            >
              {announcement.important && (
                <span className="absolute -top-2.5 right-5 py-1 px-4 rounded-full text-xs font-bold text-white shadow-md bg-gradient-to-r from-pink-500 to-orange-400">
                  Important
                </span>
              )}
              
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-accent">{announcement.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${getTypeStyles(announcement.type)}`}>
                  {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
                </span>
              </div>
              
              <p className="text-sm text-white/60 mb-4">Posted: {announcement.date}</p>
              <p className="text-white/80 mb-5 line-clamp-3">{announcement.content}</p>
              
              <button className="inline-flex items-center text-accent font-medium gap-2 transition-all duration-300 hover:text-secondary hover:translate-x-1">
                Read Full Announcement
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

// Helper function to get type styles
const getTypeStyles = (type: string): string => {
  switch (type) {
    case 'academic':
      return 'bg-blue-500/20 text-blue-400';
    case 'administrative':
      return 'bg-purple-500/20 text-purple-400';
    case 'event':
      return 'bg-green-500/20 text-green-400';
    case 'facility':
      return 'bg-orange-500/20 text-orange-400';
    default:
      return 'bg-gray-500/20 text-gray-400';
  }
};

export default Announcements;