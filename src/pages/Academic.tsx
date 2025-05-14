import React from 'react';
import Footer from '../components/Footer';
import { BookOpen, GraduationCap, Clock, Sigma, Percent as Percentage, Users } from 'lucide-react';

const Academic: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'NHSM Space - Academic System';
  }, []);
  
  return (
    <main className="pt-24 min-h-screen">
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
                  <p className="text-white/70 text-sm">Bachelor's (3y) + Master's (2y)</p>
                </div>
              </div>
              <div className="bg-dark-darker/50 p-4 rounded-lg flex items-start gap-3">
                <Clock className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white">10 Semesters</h3>
                  <p className="text-white/70 text-sm">Each with 5-7 core modules</p>
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
        
        {/* First Year Structure */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">First Year Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <YearSemester 
              semester={1}
              modules={[
                { id: 'analysis-1', name: 'Analysis 1', coefficient: 4, hours: 6 },
                { id: 'algebra-1', name: 'Algebra 1', coefficient: 4, hours: 6 },
                { id: 'discrete-math-1', name: 'Discrete Mathematics 1', coefficient: 3, hours: 4 },
                { id: 'statistics', name: 'Statistics', coefficient: 3, hours: 4 },
                { id: 'physics-1', name: 'Physics 1', coefficient: 2, hours: 3 },
                { id: 'asd-1', name: 'Algorithms & Data Structures 1', coefficient: 2, hours: 3 },
                { id: 'english-1', name: 'English 1', coefficient: 1, hours: 2 }
              ]}
            />
            <YearSemester 
              semester={2}
              modules={[
                { id: 'analysis-2', name: 'Analysis 2', coefficient: 4, hours: 6 },
                { id: 'algebra-2', name: 'Algebra 2', coefficient: 4, hours: 6 },
                { id: 'discrete-math-2', name: 'Discrete Mathematics 2', coefficient: 3, hours: 4 },
                { id: 'probability', name: 'Probability Theory', coefficient: 3, hours: 4 },
                { id: 'physics-2', name: 'Physics 2', coefficient: 2, hours: 3 },
                { id: 'asd-2', name: 'Algorithms & Data Structures 2', coefficient: 2, hours: 3 },
                { id: 'english-2', name: 'English 2', coefficient: 1, hours: 2 }
              ]}
            />
          </div>
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
                    Students must achieve a minimum of 40% on the final exam to pass a module, 
                    regardless of their overall course grade.
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
                { date: 'September 4, 2023', description: 'Classes Begin' },
                { date: 'October 16-20, 2023', description: 'Midterm Exams' },
                { date: 'November 1, 2023', description: 'National Holiday (No Classes)' },
                { date: 'December 15, 2023', description: 'Last Day of Classes' },
                { date: 'December 18-29, 2023', description: 'Final Examinations' },
                { date: 'January 3, 2024', description: 'Grades Published' }
              ]}
            />
            <CalendarItem 
              title="Spring Semester"
              events={[
                { date: 'January 15, 2024', description: 'Classes Begin' },
                { date: 'February 26-March 1, 2024', description: 'Midterm Exams' },
                { date: 'March 21, 2024', description: 'National Holiday (No Classes)' },
                { date: 'May 3, 2024', description: 'Last Day of Classes' },
                { date: 'May 6-17, 2024', description: 'Final Examinations' },
                { date: 'May 24, 2024', description: 'Grades Published' }
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