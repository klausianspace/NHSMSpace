import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BookOpen, FileText, Edit, Video, PlusCircle, ArrowRight, Download, BookOpenCheck, Play, ExternalLink } from 'lucide-react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

// Type definitions
interface Chapter {
  id: string;
  title: string;
  description: string;
}

interface Resource {
  id: string;
  type: 'lecture-notes' | 'problem-set' | 'video-playlist' | 'extras';
  title: string;
  description: string;
  meta: {
    [key: string]: string;
  };
}

interface ModuleData {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  chapters: Chapter[];
  resources: { [key: string]: Resource[] };
}

const ModulePage: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const [activeChapter, setActiveChapter] = useState<string>('real-numbers');
  const [module, setModule] = useState<ModuleData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // In a real app, fetch module data from API
    // For now, we'll use hardcoded data for Analysis 1
    if (moduleId === 'analysis-1') {
      setModule(analysis1ModuleData);
      document.title = 'NHSM Space - Analysis 1';
    } else {
      // Handle other modules or 404
      document.title = 'NHSM Space - Module Not Found';
    }
    setLoading(false);
  }, [moduleId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl text-accent">Loading...</div>
      </div>
    );
  }

  if (!module) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white mb-4">Module Not Found</h1>
        <p className="text-white/70 mb-6">The module you are looking for does not exist or is not yet available.</p>
        <a href="/study-guide" className="btn-primary">Back to Study Guide</a>
      </div>
    );
  }

  return (
    <main className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 mb-20">
        {/* Module Header */}
        <header className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {module.name}
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {module.description}
          </motion.p>
          
          {/* Chapter Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {module.chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => setActiveChapter(chapter.id)}
                className={`py-3 px-5 rounded-full text-base font-medium transition-all duration-300
                  flex items-center gap-2
                  ${activeChapter === chapter.id
                    ? 'primary-gradient text-white shadow-lg shadow-primary/20'
                    : 'bg-dark-lighter/70 border border-white/10 text-white/70 hover:bg-dark-lighter hover:text-white'
                  }`}
                style={{ animationDelay: `${0.1 + (index * 0.05)}s` }}
              >
                {chapter.id === 'progress-tracker' ? (
                  <>
                    <BookOpenCheck className="w-4 h-4" />
                    {chapter.title}
                  </>
                ) : (
                  chapter.title
                )}
              </button>
            ))}
          </motion.div>
        </header>
        
        {/* Chapter Content */}
        {module.chapters.map(chapter => (
          <motion.section
            key={chapter.id}
            className={`${activeChapter === chapter.id ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-center text-white/80 max-w-3xl mx-auto mb-12">
              {chapter.description}
            </p>
            
            {chapter.id === 'progress-tracker' ? (
              <ProgressTracker />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {module.resources[chapter.id]?.map((resource, index) => (
                  <ResourceCard key={resource.id} resource={resource} index={index} />
                ))}
              </div>
            )}
          </motion.section>
        ))}
      </div>
      <Footer />
    </main>
  );
};

// Resource Card Component
interface ResourceCardProps {
  resource: Resource;
  index: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, index }) => {
  // Get icon based on resource type
  const getIcon = () => {
    switch (resource.type) {
      case 'lecture-notes':
        return <FileText className="w-6 h-6" />;
      case 'problem-set':
        return <Edit className="w-6 h-6" />;
      case 'video-playlist':
        return <Video className="w-6 h-6" />;
      case 'extras':
        return <PlusCircle className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  // Format resource type for display
  const getTypeLabel = () => {
    switch (resource.type) {
      case 'lecture-notes':
        return 'LECTURE NOTES';
      case 'problem-set':
        return 'PROBLEM SET';
      case 'video-playlist':
        return 'VIDEO PLAYLIST';
      case 'extras':
        return 'EXTRAS';
      default:
        return resource.type.toUpperCase();
    }
  };

  return (
    <motion.div
      className="card card-hover"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
    >
      <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-semibold 
        bg-accent/20 text-accent mb-5">
        {getIcon()}
        {getTypeLabel()}
      </span>
      
      <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
      <p className="text-white/70 mb-5">{resource.description}</p>
      
      {/* Meta Information */}
      <div className="flex flex-wrap gap-4 mb-5">
        {Object.entries(resource.meta).map(([key, value]) => (
          <span key={key} className="text-sm text-white/60 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
            {value}
          </span>
        ))}
      </div>
      
      {/* Resource Actions */}
      {resource.type === 'extras' ? (
        <ExtraLinks />
      ) : resource.type === 'video-playlist' ? (
        <VideoResource />
      ) : (
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="btn-primary">
            <Download className="w-4 h-4" />
            Download
          </button>
          {resource.type === 'problem-set' && (
            <button className="btn-secondary">
              <ArrowRight className="w-4 h-4" />
              Solutions
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

// Extras component with links
const ExtraLinks: React.FC = () => {
  return (
    <>
      <ul className="space-y-3 mb-5">
        {[
          "Supplementary Problems",
          "Recommended Textbooks",
          "Interactive Visualizations"
        ].map((link, index) => (
          <li key={index} className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-accent">
            <a href="#" className="text-white hover:text-accent transition-colors duration-300 flex items-center gap-1.5">
              {link}
              <ExternalLink className="w-3.5 h-3.5 text-accent" />
            </a>
          </li>
        ))}
      </ul>
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="btn-secondary">
          <ArrowRight className="w-4 h-4" />
          Random Exercise
        </button>
        <button className="btn-primary">
          <ExternalLink className="w-4 h-4" />
          All Resources
        </button>
      </div>
    </>
  );
};

// Video resource component
const VideoResource: React.FC = () => {
  return (
    <>
      <div className="h-40 rounded-lg overflow-hidden bg-cover bg-center mb-5 relative group cursor-pointer"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/6238118/pexels-photo-6238118.jpeg?auto=compress&cs=tinysrgb&w=600')" }}>
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-primary/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center
            transition-transform duration-300 group-hover:scale-110">
            <Play className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <button className="btn-primary w-full">
        <Play className="w-4 h-4" />
        Watch Playlist
      </button>
    </>
  );
};

// Progress Tracker Component
const ProgressTracker: React.FC = () => {
  return (
    <div className="bg-dark-lighter/30 rounded-xl border border-white/10 p-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h3 className="text-2xl font-bold gradient-text">Analysis I - Learning Path</h3>
        <div className="flex gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">68%</div>
            <div className="text-xs uppercase text-white/60">Overall Progress</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">12/18</div>
            <div className="text-xs uppercase text-white/60">Topics Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">42</div>
            <div className="text-xs uppercase text-white/60">Hours Studied</div>
          </div>
        </div>
      </div>
      
      {/* Placeholder for Concept Map */}
      <div className="h-96 mb-6 bg-dark-darker/50 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/50 mb-3">Interactive Concept Map</p>
          <p className="text-white/80 text-lg">Your learning progress visualization</p>
        </div>
      </div>
      
      {/* Topic Details */}
      <div className="bg-dark-darker/80 rounded-lg border border-white/5 p-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold text-white">Supremum & Infimum</h4>
          <div className="w-36 h-2 bg-accent/20 rounded-full overflow-hidden">
            <div className="h-full w-3/4 primary-gradient rounded-full" />
          </div>
        </div>
        
        <p className="text-white/70 mb-6">
          This topic covers the least upper bound (supremum) and greatest lower bound (infimum) 
          properties of sets of real numbers, a critical foundation for understanding completeness.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {['Read lecture notes', 'Watch video lecture', 'Complete basic exercises', 'Advanced problem set', 'Topic quiz'].map((task, i) => (
            <div key={i} className="flex items-center gap-3 bg-dark-lighter/30 p-3 rounded-lg">
              <div className={`w-5 h-5 rounded-full border-2 border-accent flex items-center justify-center ${i < 3 ? 'bg-accent' : ''}`}>
                {i < 3 && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
              <span className="text-white/80 text-sm">{task}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="btn-primary">
            <Play className="w-4 h-4" />
            Continue Learning
          </button>
          <button className="btn-secondary">
            <BookOpen className="w-4 h-4" />
            View Resources
          </button>
        </div>
      </div>
    </div>
  );
};

// Mock data for Analysis 1 module
const analysis1ModuleData: ModuleData = {
  id: 'analysis-1',
  name: 'Analysis I',
  subtitle: 'First Semester, Year 1',
  description: 'Master the foundations of real and complex analysis through rigorous theory, problem-solving practice, and interactive visual tools.',
  chapters: [
    {
      id: 'real-numbers',
      title: 'Real Numbers',
      description: 'The complete ordered field ℝ: axioms, supremum/infimum, bounded sets, absolute value, integer part, and topology of the real line.'
    },
    {
      id: 'complex-numbers',
      title: 'Complex Numbers',
      description: 'Algebraic and geometric properties of ℂ, polar form, roots of unity, and complex functions with interactive visualizations.'
    },
    {
      id: 'sequences',
      title: 'Sequences',
      description: 'Convergence, monotonic sequences, Bolzano-Weierstrass theorem, Cauchy sequences, and applications in analysis.'
    },
    {
      id: 'limits',
      title: 'Limits & Continuity',
      description: 'ε-δ definitions, continuity theorems, uniform continuity, and their implications in real analysis.'
    },
    {
      id: 'differentiability',
      title: 'Differentiability',
      description: 'Derivatives, mean value theorems, L\'Hôpital\'s rule, Taylor expansions, and applications in optimization.'
    },
    {
      id: 'progress-tracker',
      title: 'My Progress',
      description: 'Track your learning journey through Analysis I, monitor your progress, and identify areas needing more focus.'
    }
  ],
  resources: {
    'real-numbers': [
      {
        id: 'rn-lecture-notes',
        type: 'lecture-notes',
        title: 'Axioms of ℝ',
        description: 'Complete formal treatment of real number axioms, completeness, and topological properties with proofs and examples.',
        meta: {
          pages: '65 pages',
          tags: 'Axioms • Sup/Inf • Topology'
        }
      },
      {
        id: 'rn-problem-set',
        type: 'problem-set',
        title: 'Supremum & Infimum',
        description: '15 carefully graded problems on bounded sets, completeness, and applications of supremum/infimum.',
        meta: {
          difficulty: 'Difficulty: 4.2/5',
          solutions: 'Solutions Included'
        }
      },
      {
        id: 'rn-extras',
        type: 'extras',
        title: 'Additional Practice',
        description: 'External resources, exercises, and supplementary materials for deeper understanding.',
        meta: {
          resources: '3 external resources',
          type: 'Interactive & Textual'
        }
      },
      {
        id: 'rn-videos',
        type: 'video-playlist',
        title: 'Real Numbers Deep Dive',
        description: 'Comprehensive video lectures covering all aspects of real number theory with visual explanations.',
        meta: {
          videos: '6 videos',
          duration: '4.1h total'
        }
      }
    ],
    'complex-numbers': [
      {
        id: 'cn-lecture-notes',
        type: 'lecture-notes',
        title: 'Complex Plane & Algebra',
        description: 'From Argand diagrams to Euler\'s formula, with proofs and 3D visualizations of complex mappings.',
        meta: {
          pages: '48 pages',
          tags: 'Polar Form • Roots • Topology'
        }
      },
      {
        id: 'cn-problem-set',
        type: 'problem-set',
        title: 'Complex Operations',
        description: '18 problems covering modulus, argument, roots of unity, and geometric interpretations.',
        meta: {
          difficulty: 'Difficulty: 3.8/5',
          solutions: 'Solutions Included'
        }
      },
      {
        id: 'cn-extras',
        type: 'extras',
        title: 'Interactive Tools',
        description: 'Interactive visualizations, tools, and external resources for exploring complex numbers.',
        meta: {
          resources: '3 external resources',
          type: 'Interactive & Visual'
        }
      },
      {
        id: 'cn-videos',
        type: 'video-playlist',
        title: 'Mastering ℂ',
        description: 'Video lectures with animations and examples showing geometric interpretations of complex operations.',
        meta: {
          videos: '7 videos',
          duration: '3.5h total'
        }
      }
    ],
    'sequences': [
      {
        id: 'seq-lecture-notes',
        type: 'lecture-notes',
        title: 'Sequences in ℝ',
        description: 'Formal treatment of convergence, subsequences, and completeness with 50+ worked examples.',
        meta: {
          pages: '72 pages',
          tags: 'Convergence • B-W • Cauchy'
        }
      },
      {
        id: 'seq-problem-set',
        type: 'problem-set',
        title: 'Convergence Practice',
        description: '20 problems on sequence limits, monotonicity, and applications of Bolzano-Weierstrass.',
        meta: {
          difficulty: 'Difficulty: 4.5/5',
          solutions: 'Solutions Included'
        }
      },
      {
        id: 'seq-extras',
        type: 'extras',
        title: 'Advanced Materials',
        description: 'Advanced exercises, proofs, and resources for deeper exploration of sequence properties.',
        meta: {
          resources: '3 external resources',
          type: 'Academic & Interactive'
        }
      },
      {
        id: 'seq-videos',
        type: 'video-playlist',
        title: 'Sequences Unlocked',
        description: 'Video series with detailed explanations and visualizations of sequence convergence and properties.',
        meta: {
          videos: '5 videos',
          duration: '2.8h total'
        }
      }
    ],
    'limits': [
      {
        id: 'lim-lecture-notes',
        type: 'lecture-notes',
        title: 'Limits & Continuity',
        description: 'Rigorous treatment of limits, continuity, and uniform continuity with graphical interpretations.',
        meta: {
          pages: '55 pages',
          tags: 'ε-δ • IVT • Uniform Continuity'
        }
      },
      {
        id: 'lim-problem-set',
        type: 'problem-set',
        title: 'ε-δ Challenges',
        description: '15 problems ranging from basic limit proofs to advanced uniform continuity applications.',
        meta: {
          difficulty: 'Difficulty: 4.7/5',
          solutions: 'Solutions Included'
        }
      },
      {
        id: 'lim-extras',
        type: 'extras',
        title: 'Interactive Learning',
        description: 'Interactive tools for exploring ε-δ definitions and visualizing continuity concepts.',
        meta: {
          resources: '3 external resources',
          type: 'Interactive & Visual'
        }
      },
      {
        id: 'lim-videos',
        type: 'video-playlist',
        title: 'Mastering Limits',
        description: 'Comprehensive video series with animations and examples of limit applications.',
        meta: {
          videos: '9 videos',
          duration: '5.2h total'
        }
      }
    ],
    'differentiability': [
      {
        id: 'diff-lecture-notes',
        type: 'lecture-notes',
        title: 'Calculus of Derivatives',
        description: 'From basic differentiation rules to Taylor series with error terms, including proofs of all major theorems.',
        meta: {
          pages: '68 pages',
          tags: 'MVT • L\'Hôpital • Taylor'
        }
      },
      {
        id: 'diff-problem-set',
        type: 'problem-set',
        title: 'Derivative Challenges',
        description: '22 problems covering computational techniques, MVT applications, and Taylor polynomial estimation.',
        meta: {
          difficulty: 'Difficulty: 4.3/5',
          solutions: 'Solutions Included'
        }
      },
      {
        id: 'diff-extras',
        type: 'extras',
        title: 'Applied Tools',
        description: 'Interactive tools for exploring derivatives, Taylor series approximations, and optimization.',
        meta: {
          resources: '3 external resources',
          type: 'Application & Visual'
        }
      },
      {
        id: 'diff-videos',
        type: 'video-playlist',
        title: 'The Power of Derivatives',
        description: 'Video lectures focusing on applications and geometric interpretations of derivatives.',
        meta: {
          videos: '8 videos',
          duration: '4.5h total'
        }
      }
    ]
  }
};

export default ModulePage;