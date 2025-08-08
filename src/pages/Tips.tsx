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
      author: 'Prof. Maamar Benbachir',
      position: 'Analysis Department',
      rating: 4.9
    },
    {
      id: 2,
      category: 'study-strategies',
      title: 'Concept Mapping',
      description: 'Create visual representations of how mathematical concepts connect. This helps you understand the bigger picture and recognize patterns across different topics.',
      author: 'Meriem Louafi',
      position: 'Analysis Teacher',
      rating: 4.7
    },
    {
      id: 3,
      category: 'exam-preparation',
      title: 'Practice Under Exam Conditions',
      description: 'Simulate exam conditions by timing yourself and working without notes. This helps reduce anxiety and builds confidence for the actual exam.',
      author: 'Rayane Badji',
      position: '3rd Year Student',
      rating: 4.8
    },
    {
      id: 4,
      category: 'exam-preparation',
      title: 'Review Past Exams',
      description: 'Analyze past exam papers to understand recurring patterns, question styles, and common traps. This gives insight into what the examiners value.',
      author: 'Mohelbi Yanis',
      position: '3rd Year Student',
      rating: 4.6
    },
    {
      id: 5,
      category: 'time-management',
      title: 'The Pomodoro Technique',
      description: 'Work in focused 25-minute intervals, followed by 5-minute breaks. After four cycles, take a longer break of 15-30 minutes. This helps maintain high concentration levels.',
      author: '',
      position: 'Student Counselor',
      rating: 4.5
    },
    {
      id: 6,
      category: 'time-management',
      title: 'Weekly Planning',
      description: 'Schedule your week in advance, allocating specific time blocks for different subjects based on difficulty and upcoming deadlines. Maintain flexibility for unexpected challenges.',
      author: 'Sami Bouhenguel',
      position: '3rd Year Student',
      rating: 4.3
    },
    {
      id: 7,
      category: 'collaboration',
      title: 'Study Groups',
      description: 'Form study groups of 3-5 students with complementary strengths. Teaching concepts to peers is one of the most effective ways to solidify your own understanding.',
      author: 'Chelabi Abdrhmn',
      position: '4th Year Student',
      rating: 4.7
    },
    {
      id: 8,
      category: 'collaboration',
      title: 'Explain to Learn',
      description: 'Practice explaining complex concepts in simple terms. If you can explain a mathematical concept clearly to someone who doesn\'t understand it, you truly grasp it yourself.',
      author: 'Apollontheone',
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
    <main className="page-content min-h-screen">
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
          <h2 className="text-2xl font-bold text-white mb-8 text-center">YOU NEED TO HERE THIS</h2>
          
          <div className="bg-dark-lighter/30 rounded-xl border border-white/10 p-8 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/5">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <img 
                    src="data:image/jpeg;base64,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" 
                    alt="Maamar Benbachir"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">Maamar Benbachir</h3>
                <p className="text-white/70 mb-1">NHSM Professor</p>
                <p className="text-accent">Ex Head of MI Department In The Ministery</p>
              </div>
              
              <div className="lg:w-3/5">
                <div className="text-4xl text-accent/80 mb-4">"</div>
                <p className="text-white/80 text-lg mb-4">
                  My years at university were challenging but transformative. What helped me succeed was creating a personalized study system.
                </p>
                <p className="text-white/80 mb-4">
                  I dedicated two hours each morning to my most difficult subject, often Analysis or Algebraic Geometry. I summarized each lecture into my own words immediately after class, which forced me to identify gaps in understanding right away.
                </p>
                <p className="text-white/80 mb-6">
                  The competitive yet collaborative environment at university taught me that asking for help is not a weakness but a strategy. My study group became my support system, and we all succeeded together.
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