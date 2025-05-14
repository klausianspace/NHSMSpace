import React from 'react';
import Footer from '../components/Footer';
import { Lightbulb, BookOpen, Clock, Brain, Award, Users, ThumbsUp, Star } from 'lucide-react';

const Tips: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'NHSM Space - Tips & Guidance';
  }, []);
  
  // Tips categories
  const categories = [
    { 
      id: 'study-strategies', 
      title: 'Study Strategies',
      icon: <Brain className="w-5 h-5" />,
      description: 'Effective methods to master complex mathematical concepts',
      color: 'purple'
    },
    { 
      id: 'exam-preparation', 
      title: 'Exam Preparation',
      icon: <Award className="w-5 h-5" />,
      description: 'Tactics for acing your mathematics examinations',
      color: 'blue'
    },
    { 
      id: 'time-management', 
      title: 'Time Management',
      icon: <Clock className="w-5 h-5" />,
      description: 'Balancing coursework, personal projects, and life',
      color: 'teal'
    },
    { 
      id: 'collaboration', 
      title: 'Collaboration',
      icon: <Users className="w-5 h-5" />,
      description: 'Learning through peer discussion and group work',
      color: 'orange'
    }
  ];
  
  // Study tips data
  const studyTips = [
    {
      id: 1,
      category: 'study-strategies',
      title: 'Active Problem Solving',
      description: 'Actively working through problems, rather than passively reading solutions, is crucial for developing mathematical intuition. Try to solve problems before looking at their solutions.',
      author: 'Prof. Sarah Mahmoud',
      position: 'Analysis Department',
      rating: 4.9
    },
    {
      id: 2,
      category: 'study-strategies',
      title: 'Concept Mapping',
      description: 'Create visual representations of how mathematical concepts connect. This helps you understand the bigger picture and recognize patterns across different topics.',
      author: 'Karim Benzarti',
      position: '5th Year Student',
      rating: 4.7
    },
    {
      id: 3,
      category: 'exam-preparation',
      title: 'Practice Under Exam Conditions',
      description: 'Simulate exam conditions by timing yourself and working without notes. This helps reduce anxiety and builds confidence for the actual exam.',
      author: 'Dr. Ahmed Taleb',
      position: 'Academic Advisor',
      rating: 4.8
    },
    {
      id: 4,
      category: 'exam-preparation',
      title: 'Review Past Exams',
      description: 'Analyze past exam papers to understand recurring patterns, question styles, and common traps. This gives insight into what the examiners value.',
      author: 'Sophia Djerrab',
      position: '4th Year Student',
      rating: 4.6
    },
    {
      id: 5,
      category: 'time-management',
      title: 'The Pomodoro Technique',
      description: 'Work in focused 25-minute intervals, followed by 5-minute breaks. After four cycles, take a longer break of 15-30 minutes. This helps maintain high concentration levels.',
      author: 'Amina Bensouda',
      position: 'Student Counselor',
      rating: 4.5
    },
    {
      id: 6,
      category: 'time-management',
      title: 'Weekly Planning',
      description: 'Schedule your week in advance, allocating specific time blocks for different subjects based on difficulty and upcoming deadlines. Maintain flexibility for unexpected challenges.',
      author: 'Yasmine Kaci',
      position: '3rd Year Student',
      rating: 4.3
    },
    {
      id: 7,
      category: 'collaboration',
      title: 'Study Groups',
      description: 'Form study groups of 3-5 students with complementary strengths. Teaching concepts to peers is one of the most effective ways to solidify your own understanding.',
      author: 'Prof. Mohamed Amine',
      position: 'Department Head',
      rating: 4.7
    },
    {
      id: 8,
      category: 'collaboration',
      title: 'Explain to Learn',
      description: 'Practice explaining complex concepts in simple terms. If you can explain a mathematical concept clearly to someone who doesn\'t understand it, you truly grasp it yourself.',
      author: 'Omar Belkadi',
      position: 'Teaching Assistant',
      rating: 4.8
    }
  ];
  
  // State for active category
  const [activeCategory, setActiveCategory] = React.useState('study-strategies');
  
  // Filter tips by category
  const filteredTips = studyTips.filter(tip => tip.category === activeCategory);
  
  // Get color class based on category
  const getCategoryColorClass = (color: string) => {
    switch (color) {
      case 'purple':
        return 'from-purple-500 to-indigo-600';
      case 'blue':
        return 'from-blue-500 to-cyan-600';
      case 'teal':
        return 'from-teal-500 to-green-600';
      case 'orange':
        return 'from-orange-500 to-amber-600';
      default:
        return 'from-accent to-secondary';
    }
  };
  
  return (
    <main className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">Tips & Guidance</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Proven strategies and advice from NHSM faculty, alumni, and senior students to help you succeed in your mathematical journey.
          </p>
        </div>
        
        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`p-4 rounded-xl transition-all duration-300 text-left
                ${activeCategory === category.id 
                  ? `bg-gradient-to-r ${getCategoryColorClass(category.color)} text-white shadow-lg` 
                  : 'bg-dark-lighter/30 hover:bg-dark-lighter/50 text-white/80'
                }`}
            >
              <div className="flex items-center gap-3 mb-2">
                {category.icon}
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              <p className="text-sm opacity-80">{category.description}</p>
            </button>
          ))}
        </div>
        
        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredTips.map(tip => (
            <div key={tip.id} className="card card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-secondary flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{tip.title}</h3>
              </div>
              <p className="text-white/80 mb-5">{tip.description}</p>
              <div className="flex justify-between items-center text-sm">
                <div className="flex flex-col">
                  <span className="text-white font-medium">{tip.author}</span>
                  <span className="text-white/60">{tip.position}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-accent/10 text-accent px-2 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-medium">{tip.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Success Stories Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Success Stories</h2>
          
          <div className="bg-dark-lighter/30 rounded-xl border border-white/10 p-8 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/5">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <img 
                    src="https://images.pexels.com/photos/5905582/pexels-photo-5905582.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Leila Messaoudi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">Leila Messaoudi</h3>
                <p className="text-white/70 mb-1">NHSM Class of 2019</p>
                <p className="text-accent">Currently: PhD Candidate at ETH Zürich</p>
              </div>
              
              <div className="lg:w-3/5">
                <div className="text-4xl text-accent/80 mb-4">"</div>
                <p className="text-white/80 text-lg mb-4">
                  My years at NHSM were challenging but transformative. What helped me succeed was creating a personalized study system.
                </p>
                <p className="text-white/80 mb-4">
                  I dedicated two hours each morning to my most difficult subject, often Analysis or Algebraic Geometry. I summarized each lecture into my own words immediately after class, which forced me to identify gaps in understanding right away.
                </p>
                <p className="text-white/80 mb-6">
                  The competitive yet collaborative environment at NHSM taught me that asking for help is not a weakness but a strategy. My study group became my support system, and we all succeeded together.
                </p>
                
                <div className="bg-dark-darker/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4 text-accent" />
                    Top Advice for New Students
                  </h4>
                  <p className="text-white/70">
                    "Don't try to memorize mathematics—understand it. Work through the 'why' behind each concept, and suddenly complex topics become connected and intuitive."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Resources Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <ResourceCard 
              title="Essential Textbooks"
              icon={<BookOpen className="w-5 h-5" />}
              description="Curated list of fundamental texts that helped our top students master key concepts."
            />
            <ResourceCard 
              title="Video Tutorials"
              icon={<Lightbulb className="w-5 h-5" />}
              description="Short, focused explanation videos created by our professors and teaching assistants."
            />
            <ResourceCard 
              title="Mental Wellness"
              icon={<Brain className="w-5 h-5" />}
              description="Resources for maintaining balance and managing academic stress effectively."
            />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

interface ResourceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, icon, description }) => {
  return (
    <div className="bg-dark-lighter/30 hover:bg-dark-lighter/40 transition-all duration-300 rounded-xl p-5 border border-white/10">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-white/70 mb-4">{description}</p>
      <button className="text-accent hover:text-secondary transition-colors duration-200 font-medium text-sm">
        Explore Resources
      </button>
    </div>
  );
};

export default Tips;