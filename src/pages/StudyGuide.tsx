import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';

// Define module interface
interface Module {
  id: string;
  name: string;
  semester: number;
  year: number;
  description: string;
  imageUrl: string;
}

const StudyGuide: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  
  // Update document title
  React.useEffect(() => {
    document.title = 'NHSM Space - Study Guide';
  }, []);
  
  // Years available
  const years = [1, 2, 3, 4, 5];
  
  // Get semesters based on selected year
  const getSemesters = (year: number): number[] => {
    if (year === 5) return [9, 10];
    if (year === 4) return [7, 8];
    if (year === 3) return [5, 6];
    if (year === 2) return [3, 4];
    return [1, 2];
  };
  
  // Sample modules for first semester
  const modules: Module[] = [
    {
      id: 'analysis-1',
      name: 'Analysis 1',
      semester: 1,
      year: 1,
      description: 'Master the foundations of real and complex analysis through rigorous theory and problem-solving.',
      imageUrl: 'https://i.pinimg.com/1200x/72/61/4f/72614f985792dd43e36e3fb108a7c4a4.jpg'
    },
    {
      id: 'algebra-1',
      name: 'Algebra 1',
      semester: 1,
      year: 1,
      description: 'Study abstract algebra, mathematical logic, and algebraic structures with practical applications.',
      imageUrl: 'https://i.pinimg.com/736x/0e/77/45/0e7745770fc6fb84b350762c3e105921.jpg'
    },
    {
      id: 'discrete-math-1',
      name: 'Discrete Mathematics 1',
      semester: 1,
      year: 1,
      description: 'Explore Combinatorial Analysis, Inclusion-Exclusion principle , Pigeonhole principle, and the foundations of graph theory.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3F6idUZk1-p2v3pCYzSWZqkp9RtSVTbQjA&s'
    },
    {
      id: 'statistics-1',
      name: 'Statistics',
      semester: 1,
      year: 1,
      description: 'Learn statistical methods, probability theory, and data analysis techniques.',
      imageUrl: 'https://i.pinimg.com/1200x/78/a0/43/78a043a4f61e5e5b608108ae0c8d90c1.jpg'
    },
    {
      id: 'physics-1',
      name: 'Physics 1',
      semester: 1,
      year: 1,
      description: 'Study kinmatics, dynamics, and work & energy.',
      imageUrl: 'https://i.pinimg.com/1200x/7e/c4/86/7ec486f3f96bdb56135e3e524a2533d1.jpg'
    },
    {
      id: 'asd-1',
      name: 'Algorithms & Data Structures 1',
      semester: 1,
      year: 1,
      description: 'Master fundamental algorithms, complexity analysis, and efficient programming techniques.',
      imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'english-1',
      name: 'English 1',
      semester: 1,
      year: 1,
      description: 'Develop technical English skills for mathematics and scientific communication.',
      imageUrl: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'history-math-1',
      name: 'History of Mathematics 1',
      semester: 1,
      year: 1,
      description: 'Explore the historical development of mathematical concepts through ancient civilizations.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xfMscUY2yIEiBKukaStERKA0cLUZGn1Azw&s'
    }
  ];
  
  // Filter modules based on selected year and semester
  const filteredModules = modules.filter(module => {
    if (selectedYear === null) return false;
    if (selectedSemester === null) return false;
    return module.year === selectedYear && module.semester === selectedSemester;
  });
  
  return (
    <main className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">Study Guide</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Select your year and semester to access all course materials, lecture notes, problem sets, and interactive learning tools.
          </p>
        </div>
        
        {/* Year Selection */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Select Year</h2>
          <div className="flex flex-wrap gap-3">
            {years.map(year => (
              <button 
                key={year}
                onClick={() => {
                  setSelectedYear(year);
                  setSelectedSemester(null);
                }}
                className={`py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300
                  ${selectedYear === year
                    ? 'primary-gradient text-white shadow-lg shadow-primary/20'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
              >
                Year {year}
              </button>
            ))}
          </div>
        </div>
        
        {/* Semester Selection (if year is selected) */}
        {selectedYear && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">Select Semester</h2>
            <div className="flex flex-wrap gap-3">
              {getSemesters(selectedYear).map(semester => (
                <button 
                  key={semester}
                  onClick={() => setSelectedSemester(semester)}
                  className={`py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300
                    ${selectedSemester === semester
                      ? 'primary-gradient text-white shadow-lg shadow-primary/20'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                >
                  Semester {semester}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Module Grid */}
        {selectedYear && selectedSemester && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Year {selectedYear}, Semester {selectedSemester} Modules
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredModules.map((module, idx) => (
                <ModuleCard key={module.id} module={module} index={idx} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};

interface ModuleCardProps {
  module: Module;
  index: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, index }) => {
  return (
    <div 
      className="card card-hover group overflow-hidden"
      style={{ animationDelay: `${0.1 + (index * 0.05)}s` }}
    >
      <div className="h-40 -mx-6 -mt-6 mb-4 relative overflow-hidden">
        <img 
          src={module.imageUrl} 
          alt={module.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-darker via-transparent to-transparent" />
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2">{module.name}</h3>
      <p className="text-white/70 text-sm mb-4 line-clamp-3">
        {module.description}
      </p>
      
      <Link
        to={`/module/${module.id}`}
        className="inline-flex items-center text-secondary font-medium gap-1 
        transition-all duration-300 hover:text-white hover:gap-2"
      >
        <BookOpen className="w-4 h-4" />
        Explore Module
        <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default StudyGuide;