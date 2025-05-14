import React from 'react';
import Footer from '../components/Footer';
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';

const Events: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'NHSM Space - Events & Workshops';
  }, []);
  
  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Annual Mathematics Hackathon',
      date: 'January 20-21, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Main Auditorium',
      description: 'A two-day intensive problem-solving competition where teams of students tackle real-world mathematical challenges. Prizes include scholarships and internship opportunities.',
      image: 'https://images.pexels.com/photos/7113180/pexels-photo-7113180.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'competition',
      registrationOpen: true
    },
    {
      id: 2,
      title: 'Mathematical Modeling Workshop',
      date: 'December 2-3, 2023',
      time: '10:00 AM - 4:00 PM',
      location: 'Lab A-201',
      description: 'Learn how to apply mathematical principles to model complex systems in epidemiology. This hands-on workshop is led by Professor Ahmed Benali, an expert in mathematical biology.',
      image: 'https://images.pexels.com/photos/6238048/pexels-photo-6238048.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'workshop',
      registrationOpen: true
    },
    {
      id: 3,
      title: 'Guest Lecture: "Frontiers in Number Theory"',
      date: 'December 8, 2023',
      time: '2:00 PM - 4:00 PM',
      location: 'Lecture Hall B-101',
      description: 'Distinguished mathematician Prof. Sophia Chen from MIT will share insights on recent breakthroughs in number theory and the Riemann Hypothesis.',
      image: 'https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'lecture',
      registrationOpen: false
    },
    {
      id: 4,
      title: 'Computational Mathematics Symposium',
      date: 'January 15, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'Computer Science Building',
      description: 'Explore the intersection of mathematics and computer science in this day-long symposium featuring talks on algorithms, machine learning, and computational complexity.',
      image: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'conference',
      registrationOpen: true
    },
    {
      id: 5,
      title: 'Finmatics Career Fair',
      date: 'February 5, 2024',
      time: '11:00 AM - 4:00 PM',
      location: 'Main Hall',
      description: 'Connect with top employers from finance, technology, and research institutions looking to recruit mathematicians. Bring your CV and be ready for on-site interviews.',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'career',
      registrationOpen: true
    },
    {
      id: 6,
      title: 'Math Club Game Night',
      date: 'December 15, 2023',
      time: '6:00 PM - 9:00 PM',
      location: 'Student Center',
      description: 'Take a break from studying and join us for an evening of mathematical games, puzzles, and challenges. Refreshments provided!',
      image: 'https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'social',
      registrationOpen: true
    }
  ];
  
  // Get category color
  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'competition':
        return 'bg-purple-600 text-white';
      case 'workshop':
        return 'bg-blue-600 text-white';
      case 'lecture':
        return 'bg-green-600 text-white';
      case 'conference':
        return 'bg-amber-600 text-white';
      case 'career':
        return 'bg-pink-600 text-white';
      case 'social':
        return 'bg-teal-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };
  
  return (
    <main className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">Events & Workshops</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Discover upcoming mathematical events, workshops, competitions, and social gatherings at NHSM.
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['All', 'Competitions', 'Workshops', 'Lectures', 'Conferences', 'Career', 'Social'].map((filter) => (
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
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {events.map(event => (
            <div key={event.id} className="card card-hover overflow-hidden group">
              <div className="h-48 -mx-6 -mt-6 mb-6 relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-darker/90 via-dark-darker/30 to-transparent" />
                <span className={`absolute top-4 right-4 py-1 px-3 rounded-full text-xs font-bold ${getCategoryColor(event.category)}`}>
                  {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Calendar className="w-4 h-4 text-accent" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Clock className="w-4 h-4 text-accent" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 text-accent" />
                  {event.location}
                </div>
              </div>
              
              <p className="text-white/80 mb-5 line-clamp-3">{event.description}</p>
              
              <div className="flex gap-3">
                <button className="btn-primary">
                  {event.registrationOpen ? 'Register Now' : 'View Details'}
                </button>
                <button className="btn-secondary">
                  <Calendar className="w-4 h-4" />
                  Add to Calendar
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Monthly Calendar Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Academic Calendar</h2>
          <div className="bg-dark-lighter/30 rounded-xl border border-white/10 p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-accent mb-4">Upcoming Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold">
                      20
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Annual Mathematics Hackathon</h4>
                      <p className="text-white/60 text-sm">Two-day competitive event</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
                      15
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Computational Mathematics Symposium</h4>
                      <p className="text-white/60 text-sm">Full-day conference with guest speakers</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-pink-600/20 text-pink-400 flex items-center justify-center font-bold">
                      05
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Finmatics Career Fair</h4>
                      <p className="text-white/60 text-sm">Meet employers and explore career opportunities</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center text-accent hover:text-secondary transition-colors gap-1.5">
                    <span>View Full Calendar</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-accent mb-4">Registration Information</h3>
                <div className="bg-dark-darker/50 rounded-lg p-4 mb-4">
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent" />
                    How to Register
                  </h4>
                  <p className="text-white/70 text-sm mb-3">
                    Registration for events is available through your student portal or by contacting the event organizer directly.
                  </p>
                  <p className="text-white/70 text-sm">
                    For workshops with limited capacity, early registration is recommended.
                  </p>
                </div>
                <div className="bg-dark-darker/50 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Attendance Policy</h4>
                  <p className="text-white/70 text-sm">
                    Students who register for events are expected to attend. If you cannot attend, please cancel your registration at least 48 hours in advance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Events;