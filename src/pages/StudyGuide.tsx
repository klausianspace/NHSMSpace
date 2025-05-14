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
      imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'algebra-1',
      name: 'Algebra 1',
      semester: 1,
      year: 1,
      description: 'Study linear algebra, vector spaces, and matrix operations with practical applications.',
      imageUrl: 'https://images.pexels.com/photos/5427670/pexels-photo-5427670.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'discrete-math-1',
      name: 'Discrete Mathematics 1',
      semester: 1,
      year: 1,
      description: 'Explore sets, relations, functions, and the foundations of mathematical reasoning.',
      imageUrl: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'statistics-1',
      name: 'Statistics',
      semester: 1,
      year: 1,
      description: 'Learn statistical methods, probability theory, and data analysis techniques.',
      imageUrl: 'https://images.pexels.com/photos/6195085/pexels-photo-6195085.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'physics-1',
      name: 'Physics 1',
      semester: 1,
      year: 1,
      description: 'Study mechanics, thermodynamics, and the mathematical formulation of physical laws.',
      imageUrl: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=600'
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
      imageUrl: 'https://images.pexels.com/photos/6237823/pexels-photo-6237823.jpeg?auto=compress&cs=tinysrgb&w=600'
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