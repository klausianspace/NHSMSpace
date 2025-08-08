import React, { useState } from 'react';
import Footer from '../components/Footer';
import { BookOpen, GraduationCap, Clock, Sigma, Percent as Percentage, Users } from 'lucide-react';

// Define types for our curriculum data
type Specialization = 'preparatory' | 'cryptology' | 'statistics' | 'modelisation';
type YearData = {
  semesters: {
    semester: number;
    modules: ModuleProps[];
  }[];
};

interface CurriculumData {
  preparatory: {
    [year: number]: YearData;
  };
  cryptology: {
    [year: number]: YearData;
  };
  statistics: {
    [year: number]: YearData;
  };
  modelisation: {
    [year: number]: YearData;
  };
}

const Academic: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'NHSM Space - Academic System';
  }, []);

  // State for selected year and specialization
  const [selectedSpecialization, setSelectedSpecialization] = useState<Specialization>('preparatory');
  const [selectedYear, setSelectedYear] = useState<number>(1);

  // Curriculum data for all years and specializations
  const curriculumData: CurriculumData = {
    preparatory: {
      1: {
        semesters: [
          {
            semester: 1,
            modules: [
              { id: 'analysis-1', name: 'Analysis 1', coefficient: 5, hours: 6 },
              { id: 'algebra-1', name: 'Algebra 1', coefficient: 5, hours: 6 },
              { id: 'discrete-math-1', name: 'Discrete Mathematics 1', coefficient: 3, hours: 3 },
              { id: 'statistics', name: 'Statistics', coefficient: 3, hours: 3 },
              { id: 'physics-1', name: 'Physics 1', coefficient: 2, hours: 3 },
              { id: 'asd-1', name: 'Algorithms & Data Structures 1', coefficient: 2, hours: 3 },
              { id: 'english-1', name: 'English 1', coefficient: 1, hours: 1.5 },
              { id: 'History', name: 'History Of Mathematics', coefficient: 1, hours: 1.5 },
            ]
          },
          {
            semester: 2,
            modules: [
              { id: 'analysis-2', name: 'Analysis 2', coefficient: 5, hours: 6 },
              { id: 'algebra-2', name: 'Algebra 2', coefficient: 5, hours: 6 },
              { id: 'discrete-math-2', name: 'Discrete Mathematics 2', coefficient: 3, hours: 3 },
              { id: 'probability-1', name: 'Probability 1', coefficient: 3, hours: 3 },
              { id: 'physics-2', name: 'Physics 2', coefficient: 2, hours: 3 },
              { id: 'asd-2', name: 'Algorithms & Data Structures 2', coefficient: 2, hours: 3 },
              { id: 'english-2', name: 'English 2', coefficient: 1, hours: 1.5 },
              { id: 'logic', name: 'Mathematical Logic', coefficient: 1, hours: 1.5 },
            ]
          }
        ]
      },
      2: {
        semesters: [
          {
            semester: 3,
            modules: [
              
              { id: 'analysis-3', name: 'Analysis 3', coefficient: 5, hours: 6 },
              { id: 'topology', name: 'Topology', coefficient: 5, hours: 6 },
              { id: 'algebra-3', name: 'Algebra 3', coefficient: 4, hours: 4.5 },
              { id: 'probability-2', name: 'Probability 2', coefficient: 2, hours: 3 },
              { id: 'geometry-1', name: 'Geometry 1', coefficient: 3, hours: 3 },
              { id: 'numerical-analysis-1', name: 'Numerical Analysis 1', coefficient: 2, hours: 3 },
              { id: 'english-3', name: 'English 3', coefficient: 1, hours: 1.5 },
              
            ]
          },
          {
            semester: 4,
            modules: [
              { id: 'analysis-4', name: 'Analysis 4', coefficient: 5, hours: 6 },
              { id: 'nvs', name: 'Normed Vector Spaces', coefficient: 4, hours: 4.5 },
              { id: 'mesure', name: 'Mesure Theory', coefficient: 4, hours: 4.5 },
              { id: 'python', name: 'Programming Tools for Mathematics', coefficient: 2, hours: 3 },
              { id: 'geometry-2', name: 'Geometry 2', coefficient: 3, hours: 3 },
              { id: 'numerical-analysis-2', name: 'Numerical Analysis 2', coefficient: 2, hours: 3 },
              { id: 'english-4', name: 'English 4', coefficient: 1, hours: 1.5 },
          
        ]

      
      }

    ]
    }
    },
    cryptology: {
      3: {
        semesters: [
          {
            semester: 5,
            modules: [
              { id: 'alg-cod', name: 'Algebra and Coding', coefficient: 4, hours: 3 },
              { id: 'comp-ana', name: 'Complex Analysis', coefficient: 4, hours: 3 },
              { id: 'fun-ana', name: 'Functional Analysis', coefficient: 3, hours: 3 },
              { id: 'sto', name: 'Stochastic Processes', coefficient: 3, hours: 3 },
              { id: 'inf-stat', name: 'Inferential Statistics', coefficient: 3, hours: 4.5 },
              { id: 'PDE', name: 'Partial Differential Equations', coefficient: 2, hours: 3 },
              { id: 'ODE', name: 'Ordinary Differential Equations', coefficient: 2, hours: 3 },
              { id: 'oop', name: 'Oriented Object Programming', coefficient: 1, hours: 3 },
            ]
          },
          {
            semester: 6,
            modules: [
              { id: 'nade', name: 'Numerical Analysis of Differential Equations', coefficient: 4, hours: 3 },
              { id: 'data-min', name: 'Data Mining', coefficient: 4, hours: 3 },
              { id: 'field-ext', name: 'Field Extensions', coefficient: 3, hours: 3 },
              { id: 'reg-mod', name: 'Regression Models', coefficient: 3, hours: 3 },
              { id: 'int-tr', name: 'Integral Transformation', coefficient: 2, hours: 3 },
              { id: 'diff-geo', name: 'Differential Geometry', coefficient: 2, hours: 4.5 },
              { id: 'AI', name: 'Artificial Intelligence', coefficient: 2, hours: 3 },
              { id: 'cont-op', name: 'Continuous Optimization', coefficient: 2, hours: 3 },
            ]
          }
        ]
      },
      4: {
        semesters: [
          {
            semester: 7,
            modules: [
              { id: 'math-crypto', name: 'Mathematical Tools for Cryptography', coefficient: 4, hours: 4.5 },
              { id: 'os', name: 'Operating Systems', coefficient: 4, hours: 4.5 },
              { id: 'crypto', name: 'Cryptography', coefficient: 3, hours: 3 },
              { id: 'complexity', name: 'Complexity Theory', coefficient: 3, hours: 4.5 },
              { id: 'formal-calc', name: 'Formal Calculus', coefficient: 2, hours: 3 },
              { id: 'comb-opt', name: 'Combinatorial Optimization', coefficient: 2, hours: 3 },
              { id: 'chipset', name: 'Chipsets Programming', coefficient: 2, hours: 3 },
            ]
          },
          {
            semester: 8,
            modules: [
              { id: 'info-theory', name: 'Information Theory & Error-Correcting Codes', coefficient: 3, hours: 4.5 },
              { id: 'networks', name: 'Networks and Protocols', coefficient: 3, hours: 4.5 },
              { id: 'signal', name: 'Signal Processing', coefficient: 3, hours: 4.5 },
              { id: 'num-theory', name: 'Number Theory & Cryptography', coefficient: 3, hours: 3 },
              { id: 'arith-algo', name: 'Arithmetic Algorithms', coefficient: 2, hours: 3 },
              { id: 'graph-theory', name: 'Advanced Graph Theory', coefficient: 2, hours: 3 },
              { id: 'rng', name: 'Random Number Generators', coefficient: 2, hours: 3 },
              { id: 'entrepreneur', name: 'Entrepreneurship', coefficient: 1, hours: 1.5 },
            ]
          }
        ]
      },
      5: {
        semesters: [
          {
            semester: 9,
            modules: [
              { id: 'cryptanalysis', name: 'Cryptanalysis', coefficient: 4, hours: 4.5 },
              { id: 'sys-sec', name: 'System Security', coefficient: 4, hours: 3 },
              { id: 'adv-crypto', name: 'Advanced Cryptography', coefficient: 3, hours: 4.5 },
              { id: 'net-sec', name: 'Network Security', coefficient: 3, hours: 4.5 },
              { id: 'dyn-sys', name: 'Dynamical Systems & Chaos', coefficient: 3, hours: 3 },
              { id: 'elliptic', name: 'Elliptic Curves', coefficient: 3, hours: 3 },
              { id: 'audio-img', name: 'Audio, Images & Security', coefficient: 2, hours: 3 },
            ]
          }
        ]
      }
    },
    statistics: {
      3: {
        semesters: [
          {
            semester: 5,
            modules: [
              { id: 'PDE', name: 'Partial Differential Equations', coefficient: 4, hours: 3 },
              { id: 'ODE', name: 'Ordinary Differential Equations', coefficient: 3, hours: 3 },
              { id: 'fun-ana', name: 'Functional Analysis', coefficient: 3, hours: 3 },
              { id: 'sto-proc', name: 'Stochastic Processes', coefficient: 3, hours: 3 },
              { id: 'inf-stat', name: 'Inferential Statistics', coefficient: 3, hours: 4.5 },
              { id: 'comp-ana', name: 'Complex Analysis', coefficient: 2, hours: 3 },
              { id: 'oop', name: 'Oriented Object Programming', coefficient: 2, hours: 3 },
              { id: 'alg-cod', name: 'Algebra and Coding', coefficient: 2, hours: 3 },
            ]
          },
          {
            semester: 6,
            modules: [
              { id: 'num-ode', name: 'Numerical Analysis of Differential Equations', coefficient: 4, hours: 3 },
              { id: 'int-trans', name: 'Integral Transformation', coefficient: 3, hours: 3 },
              { id: 'reg-mod', name: 'Regression Models', coefficient: 3, hours: 4.5 },
              { id: 'cont-opt', name: 'Continuous Optimization', coefficient: 3, hours: 4.5 },
              { id: 'data-min', name: 'Data Mining', coefficient: 2, hours: 3 },
              { id: 'diff-geo', name: 'Differential Geometry', coefficient: 2, hours: 3 },
              { id: 'field-ext', name: 'Field Extensions', coefficient: 2, hours: 3 },
              { id: 'AI', name: 'Artificial Intelligence', coefficient: 2, hours: 3 },
            ]
          }
        ]
      },
      4: {
        semesters: [
          {
            semester: 7,
            modules: [
              { id: 'adv-sto', name: 'Advanced Stochastic Processes', coefficient: 4, hours: 4.5 },
              { id: 'time-series-1', name: 'Time Series 1', coefficient: 4, hours: 4.5 },
              { id: 'data-min-2', name: 'Data Mining 2', coefficient: 4, hours: 4.5 },
              { id: 'adv-opt', name: 'Advanced Optimization Algorithms and Graph Theory', coefficient: 4, hours: 4.5 },
              { id: 'info-sys', name: 'Information Systems and Databases', coefficient: 3, hours: 3 },
              { id: 'sto-sim', name: 'Stochastic Simulation', coefficient: 3, hours: 4.5 },
              { id: 'intro-fin', name: 'Introduction to Finance', coefficient: 2, hours: 3 },
            ]
          },
          {
            semester: 8,
            modules: [
              { id: 'non-param', name: 'Non-parametric Estimation', coefficient: 4, hours: 4.5 },
              { id: 'sto-diff', name: 'Stochastic Differential Calculus', coefficient: 4, hours: 4.5 },
              { id: 'time-series-2', name: 'Time Series 2', coefficient: 3, hours: 4.5 },
              { id: 'ext-val', name: 'Extreme Value Statistics', coefficient: 3, hours: 3 },
              { id: 'act-sci-1', name: 'Actuarial Science 1', coefficient: 3, hours: 3 },
              { id: 'opt-econ', name: 'Optimization in Economics and Finance', coefficient: 3, hours: 3 },
              { id: 'ins-law', name: 'Insurance Law', coefficient: 2, hours: 1.5 },
              { id: 'entrepreneur', name: 'Entrepreneurship', coefficient: 1, hours: 1.5 },
            ]
          }
        ]
      },
      5: {
        semesters: [
          {
            semester: 9,
            modules: [
              { id: 'act-sci-2', name: 'Actuarial Science 2', coefficient: 4, hours: 4.5 },
              { id: 'diff-fin', name: 'Diffusion Models in Finance', coefficient: 4, hours: 4.5 },
              { id: 'ml', name: 'Machine Learning', coefficient: 4, hours: 4.5 },
              { id: 'bayesian', name: 'Bayesian Inference', coefficient: 3, hours: 3 },
              { id: 'model-workshop', name: 'Modeling Workshop 2', coefficient: 3, hours: 3 },
              { id: 'islamic-fin', name: 'Introduction to Islamic Finance', coefficient: 2, hours: 3 },
              { id: 'acad-comm', name: 'Academic Communication', coefficient: 2, hours: 3 },
            ]
          }
        ]
      }
    },
    modelisation: {
      3: {
        semesters: [
          {
            semester: 5,
            modules: [
              { id: 'PDE', name: 'Partial Differential Equations', coefficient: 4, hours: 3 },
              { id: 'ODE', name: 'Ordinary Differential Equations', coefficient: 3, hours: 3 },
              { id: 'fun-ana', name: 'Functional Analysis', coefficient: 3, hours: 3 },
              { id: 'comp-ana', name: 'Complex Analysis', coefficient: 3, hours: 3 },
              { id: 'oop', name: 'Oriented Object Programming', coefficient: 3, hours: 3 },
              { id: 'sto-proc', name: 'Stochastic Processes', coefficient: 2, hours: 3 },
              { id: 'inf-stat', name: 'Inferential Statistics', coefficient: 2, hours: 4.5 },
              { id: 'alg-cod', name: 'Algebra and Coding', coefficient: 2, hours: 3 },
            ]
          },
          {
            semester: 6,
            modules: [
              { id: 'num-ode', name: 'Numerical Analysis of Differential Equations', coefficient: 4, hours: 3 },
              { id: 'int-trans', name: 'Integral Transformation', coefficient: 3, hours: 3 },
              { id: 'diff-geo', name: 'Differential Geometry', coefficient: 3, hours: 3 },
              { id: 'field-ext', name: 'Field Extensions', coefficient: 3, hours: 3 },
              { id: 'AI', name: 'Artificial Intelligence', coefficient: 3, hours: 3 },
              { id: 'reg-mod', name: 'Regression Models', coefficient: 2, hours: 4.5 },
              { id: 'data-min', name: 'Data Mining', coefficient: 2, hours: 3 },
              { id: 'cont-opt', name: 'Continuous Optimization', coefficient: 2, hours: 4.5 },
            ]
          }
        ]
      },
      4: {
        semesters: [
          {
            semester: 7,
            modules: [
              { id: 'model-cont', name: 'Intro. to Modeling Continuous Environments', coefficient: 4, hours: 4.5 },
              { id: 'control-de', name: 'Control of Differential Equations', coefficient: 4, hours: 4.5 },
              { id: 'img-proc', name: 'Digital Image Processing', coefficient: 4, hours: 3 },
              { id: 'matrix-num', name: 'Matrix Numerical Analysis', coefficient: 4, hours: 4.5 },
              { id: 'dist-app', name: 'Distributions and Application', coefficient: 3, hours: 4.5 },
              { id: 'sto-sim', name: 'Stochastic Simulations', coefficient: 2, hours: 4.5 },
              { id: 'model-workshop', name: 'Modeling Workshop', coefficient: 1, hours: 1.5 },
            ]
          },
          {
            semester: 8,
            modules: [
              { id: 'non-var', name: 'Non-Variational Methods', coefficient: 3, hours: 3 },
              { id: 'sto-de', name: 'Stochastic Differential Equations', coefficient: 3, hours: 3 },
              { id: 'bio-model', name: 'Intro. to Biological Modeling', coefficient: 3, hours: 3 },
              { id: 'fluid-mech', name: 'Fluid Mechanics', coefficient: 3, hours: 3 },
              { id: 'comp-vision', name: 'Artificial Vision', coefficient: 3, hours: 3 },
              { id: 'frac-de', name: 'Fractional Differential Equations', coefficient: 3, hours: 3 },
              { id: 'conv-opt', name: 'Convex Optimization', coefficient: 3, hours: 4.5 },
              { id: 'intro-biz', name: 'Intro. to Business', coefficient: 1, hours: 1.5 },
            ]
          }
        ]
      },
      5: {
        semesters: [
          {
            semester: 9,
            modules: [
              { id: 'img-proc-adv', name: 'Image Processing', coefficient: 6, hours: 4.5 },
              { id: 'num-fluid', name: 'Numerical Fluid Mechanics', coefficient: 6, hours: 4.5 },
              { id: 'epi-model', name: 'Intro. to Epidemiological Modeling', coefficient: 6, hours: 4.5 },
              { id: 'bayesian', name: 'Bayesian Inference', coefficient: 2, hours: 3 },
              { id: 'model-workshop-2', name: 'Modeling Workshop 2', coefficient: 2, hours: 3 },
            ]
          }
        ]
      }
    }
  };

  const handleSpecializationChange = (specialization: Specialization) => {
    setSelectedSpecialization(specialization);
    // Reset to first available year when changing specialization
    if (specialization === 'preparatory') {
      setSelectedYear(1);
    } else {
      setSelectedYear(3); // Specializations start at year 3
    }
  };

  const renderYearButtons = () => {
    if (selectedSpecialization === 'preparatory') {
      return [1, 2].map(year => (
        <button
          key={year}
          onClick={() => setSelectedYear(year)}
          className={`px-4 py-2 rounded-lg ${selectedYear === year ? 'bg-accent text-white' : 'bg-dark-darker hover:bg-dark-darker/70'}`}
        >
          Year {year}
        </button>
      ));
    } else {
      return [3, 4, 5].map(year => (
        <button
          key={year}
          onClick={() => setSelectedYear(year)}
          className={`px-4 py-2 rounded-lg ${selectedYear === year ? 'bg-accent text-white' : 'bg-dark-darker hover:bg-dark-darker/70'}`}
        >
          Year {year}
        </button>
      ));
    }
  };

  const renderSpecializationButtons = () => {
    return (
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        <button
          onClick={() => handleSpecializationChange('preparatory')}
          className={`px-4 py-2 rounded-lg ${selectedSpecialization === 'preparatory' ? 'bg-accent text-white' : 'bg-dark-darker hover:bg-dark-darker/70'}`}
        >
          Preparatory Cycle
        </button>
        <button
          onClick={() => handleSpecializationChange('cryptology')}
          className={`px-4 py-2 rounded-lg ${selectedSpecialization === 'cryptology' ? 'bg-accent text-white' : 'bg-dark-darker hover:bg-dark-darker/70'}`}
        >
          Cryptology
        </button>
        <button
          onClick={() => handleSpecializationChange('statistics')}
          className={`px-4 py-2 rounded-lg ${selectedSpecialization === 'statistics' ? 'bg-accent text-white' : 'bg-dark-darker hover:bg-dark-darker/70'}`}
        >
          Statistics
        </button>
        <button
          onClick={() => handleSpecializationChange('modelisation')}
          className={`px-4 py-2 rounded-lg ${selectedSpecialization === 'modelisation' ? 'bg-accent text-white' : 'bg-dark-darker hover:bg-dark-darker/70'}`}
        >
          Modelisation
        </button>
      </div>
    );
  };

  const renderCurriculum = () => {
    const yearData = curriculumData[selectedSpecialization][selectedYear];
    
    if (!yearData) {
      return <div className="text-center text-white/80 py-8">Curriculum data not available yet</div>;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {yearData.semesters.map(semester => (
          <YearSemester 
            key={semester.semester}
            semester={semester.semester}
            modules={semester.modules}
          />
        ))}
      </div>
    );
  };

  return (
    <main className="page-content min-h-screen">
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">Academic System</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Understand the structure, requirements, and evaluation system of our mathematical curriculum.
          </p>
        </div>
        
        {/* Overview Section */}
        <section className="mb-16">
          <div className="bg-dark-lighter/30 rounded-xl border border-white/10 p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Program Overview</h2>
            <p className="text-white/80 mb-4">
              The National Higher School of Mathematics (NHSM) offers a comprehensive five-year program 
              designed to develop exceptional mathematicians and applied scientists. Our curriculum 
              combines rigorous theoretical foundations with practical applications across various 
              disciplines.
            </p>
            <p className="text-white/80 mb-6">
              Students progress through ten semesters of increasingly specialized coursework, 
              culminating in a research thesis and professional specialization.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-dark-darker/50 p-4 rounded-lg flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white">5-Year Program</h3>
                  <p className="text-white/70 text-sm">Preparatory Cycle (2y) + Speciality (3y)</p>
                </div>
              </div>
              <div className="bg-dark-darker/50 p-4 rounded-lg flex items-start gap-3">
                <Clock className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white">10 Semesters</h3>
                  <p className="text-white/70 text-sm">Each with 8 core modules</p>
                </div>
              </div>
              <div className="bg-dark-darker/50 p-4 rounded-lg flex items-start gap-3">
                <Sigma className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Comprehensive</h3>
                  <p className="text-white/70 text-sm">Theory and applications</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Specialization and Year Selection */}
        <section className="mb-8">
          {renderSpecializationButtons()}
          <div className="flex flex-wrap gap-2 justify-center">
            {renderYearButtons()}
          </div>
        </section>
        
        {/* Curriculum Display */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {selectedSpecialization === 'preparatory' 
              ? `Preparatory Year ${selectedYear} Structure` 
              : `${selectedSpecialization.charAt(0).toUpperCase() + selectedSpecialization.slice(1)} Year ${selectedYear} Structure`}
          </h2>
          {renderCurriculum()}
        </section>
        
        {/* Evaluation System */}
        <section className="mb-16">
          <div className="bg-dark-lighter/30 rounded-xl border border-white/10 p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Evaluation System</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
                  <Percentage className="w-5 h-5" />
                  Grade Composition
                </h3>
                <ul className="space-y-3">
                  {['Midterm Exam: 30%', 'Final Exam: 50%', 'Practical Work & Assignments: 15%', 'Participation: 5%'].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/70" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 border border-accent/30 rounded-lg bg-accent/5">
                  <h4 className="text-white font-medium mb-2">Important Note:</h4>
                  <p className="text-white/80 text-sm">
                    Students must achieve a greater mark than the eliminatory mark in each module, 
                    regardless of their overall semester grade.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Grading Scale
                </h3>
                <div className="space-y-3">
                  <GradeItem grade="A" range="≥ 16" description="Excellent" />
                  <GradeItem grade="B" range="14-15.99" description="Very Good" />
                  <GradeItem grade="C" range="12-13.99" description="Good" />
                  <GradeItem grade="D" range="10-11.99" description="Satisfactory" />
                  <GradeItem grade="E" range="<10" description="Fail" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Academic Calendar */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Academic Calendar 2023-2024</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <CalendarItem 
              title="Fall Semester"
              events={[
                { date: 'September 4, 2024', description: 'Classes Begin' },
                { date: 'November 1, 2024', description: 'National Holiday (No Classes)' },
                { date: 'November 16-20, 2024', description: 'Midterm Exams' },
                { date: 'December 18 - January 4, 2025', description: 'Winter Holiday' },
                { date: 'February 3, 2025', description: 'Final Exams' }
              ]}
            />
            <CalendarItem 
              title="Spring Semester"
              events={[
                { date: 'February 15, 2025', description: 'Classes Begin' },
                { date: 'March 18 - April 4, 2025', description: 'Spring Holiday' },
                { date: 'April 11-15, 2025', description: 'Midterm Exams' },
                { date: 'June 11-18, 2025', description: 'Final Examinations' },
                { date: 'June 28, 2025', description: 'Grades Published' }
              ]}
            />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

interface ModuleProps {
  id: string;
  name: string;
  coefficient: number;
  hours: number;
}

interface YearSemesterProps {
  semester: number;
  modules: ModuleProps[];
}

const YearSemester: React.FC<YearSemesterProps> = ({ semester, modules }) => {
  return (
    <div className="card card-hover">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-accent" />
        Semester {semester}
      </h3>
      <div className="border border-white/10 rounded-lg overflow-hidden mb-4">
        <table className="w-full text-white/80 text-sm">
          <thead className="bg-dark-darker/50">
            <tr>
              <th className="py-3 px-4 text-left">Module</th>
              <th className="py-3 px-4 text-center">Coefficient</th>
              <th className="py-3 px-4 text-center">Hours/Week</th>
            </tr>
          </thead>
          <tbody>
            {modules.map(module => (
              <tr key={module.id} className="border-t border-white/5 hover:bg-dark-darker/30">
                <td className="py-2.5 px-4">{module.name}</td>
                <td className="py-2.5 px-4 text-center">{module.coefficient}</td>
                <td className="py-2.5 px-4 text-center">{module.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center text-sm text-white/70">
        <div>Total Coefficients: {modules.reduce((sum, module) => sum + module.coefficient, 0)}</div>
        <div>Total Hours: {modules.reduce((sum, module) => sum + module.hours, 0)}</div>
      </div>
    </div>
  );
};

interface GradeItemProps {
  grade: string;
  range: string;
  description: string;
}

const GradeItem: React.FC<GradeItemProps> = ({ grade, range, description }) => {
  const isFailGrade = grade === 'E';
  
  return (
    <div className={`flex items-center gap-3 p-2 rounded-md ${isFailGrade ? 'bg-pink-500/10' : 'bg-dark-darker/50'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${isFailGrade ? 'bg-pink-500/20 text-pink-400' : 'bg-accent/20 text-accent'}`}>
        {grade}
      </div>
      <div>
        <span className="text-white/90">{range}</span>
        <span className="text-white/60 text-sm ml-3">({description})</span>
      </div>
    </div>
  );
};

interface CalendarProps {
  title: string;
  events: { date: string; description: string }[];
}

const CalendarItem: React.FC<CalendarProps> = ({ title, events }) => {
  return (
    <div className="card card-hover">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-3">
        {events.map((event, index) => (
          <li key={index} className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-b-0">
            <div className="w-3 h-3 rounded-full bg-accent/70 mt-1.5" />
            <div className="flex flex-col">
              <span className="text-white/90 font-medium">{event.date}</span>
              <span className="text-white/70">{event.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Academic;