import React, { useState } from 'react';
import { CheckCircle2, Circle, Clock, ChevronDown, ChevronRight, BookOpen, Play, PenTool, HelpCircle, Eye, Lightbulb, Target, Award, TrendingUp } from 'lucide-react';
import { ProgressStep } from '../types';
import { useProgressStore } from '../store/progressStore';

interface ProgressTrackerProps {
  steps: ProgressStep[];
  chapterId: string;
}

const getStepIcon = (type: ProgressStep['type']) => {
  switch (type) {
    case 'reading':
      return <BookOpen className="h-4 w-4" />;
    case 'video':
      return <Play className="h-4 w-4" />;
    case 'exercise':
      return <PenTool className="h-4 w-4" />;
    case 'quiz':
      return <HelpCircle className="h-4 w-4" />;
    case 'review':
      return <Eye className="h-4 w-4" />;
  }
};

const getStepColor = (type: ProgressStep['type']) => {
  switch (type) {
    case 'reading':
      return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
    case 'video':
      return 'text-red-400 bg-red-400/20 border-red-400/30';
    case 'exercise':
      return 'text-green-400 bg-green-400/20 border-green-400/30';
    case 'quiz':
      return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
    case 'review':
      return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
  }
};

const getStepTypeLabel = (type: ProgressStep['type']) => {
  switch (type) {
    case 'reading':
      return 'Reading';
    case 'video':
      return 'Video';
    case 'exercise':
      return 'Exercise';
    case 'quiz':
      return 'Quiz';
    case 'review':
      return 'Review';
  }
};

const studyTips = [
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Take Notes",
    description: "Write down key concepts as you progress through each step."
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Set Goals",
    description: "Aim to complete 2-3 steps per study session for optimal retention."
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Review Regularly",
    description: "Revisit completed steps before moving to new material."
  }
];

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({ steps = [], chapterId }) => {
  const { completedSteps, toggleStep, getProgress } = useProgressStore();
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set());
  const [showTips, setShowTips] = useState(false);
  
  const progress = getProgress(steps);
  const completedCount = steps.filter(step => completedSteps[step.id]).length;
  const nextStep = steps.find(step => !completedSteps[step.id]);
  
  const toggleExpanded = (stepId: string) => {
    const newExpanded = new Set(expandedSteps);
    if (newExpanded.has(stepId)) {
      newExpanded.delete(stepId);
    } else {
      newExpanded.add(stepId);
    }
    setExpandedSteps(newExpanded);
  };

  const totalEstimatedTime = steps.reduce((total, step) => {
    const minutes = parseInt(step.estimatedTime || '0');
    return total + (isNaN(minutes) ? 0 : minutes);
  }, 0);

  return (
    <div className="space-y-6">
      
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Learning Roadmap</h2>
            <p className="text-primary-text">Follow this structured path to master the chapter</p>
          </div>
          <button
            onClick={() => setShowTips(!showTips)}
            className="bg-primary-accent/20 hover:bg-primary-accent/30 text-primary-accent px-4 py-2 rounded-xl font-medium transition-colors flex items-center space-x-2"
          >
            <Lightbulb className="h-4 w-4" />
            <span>Study Tips</span>
          </button>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-primary-dark/50 rounded-xl p-4 border border-primary-accent/20">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-accent/20 p-2 rounded-lg">
                <TrendingUp className="h-5 w-5 text-primary-accent" />
              </div>
              <div>
                <p className="text-sm text-primary-text">Progress</p>
                <p className="text-xl font-bold text-white">{progress}%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary-dark/50 rounded-xl p-4 border border-green-400/20">
            <div className="flex items-center space-x-3">
              <div className="bg-green-400/20 p-2 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-primary-text">Completed</p>
                <p className="text-xl font-bold text-white">{completedCount}/{steps.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary-dark/50 rounded-xl p-4 border border-blue-400/20">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-400/20 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-primary-text">Est. Time</p>
                <p className="text-xl font-bold text-white">{totalEstimatedTime}m</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-primary-text">Overall Progress</span>
            <span className="text-sm font-medium text-white">{progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-primary-accent to-primary-success h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Next Step Highlight */}
        {nextStep && (
          <div className="bg-primary-accent/10 border border-primary-accent/30 rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-accent/20 p-2 rounded-lg">
                {getStepIcon(nextStep.type)}
              </div>
              <div>
                <p className="text-sm text-primary-accent font-medium">Up Next</p>
                <p className="text-white font-semibold">{nextStep.title}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Study Tips Panel */}
      {showTips && (
        <div className="glass-effect rounded-2xl p-6 border-l-4 border-primary-accent">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
            <Lightbulb className="h-5 w-5 text-primary-accent" />
            <span>Study Tips for Success</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {studyTips.map((tip, index) => (
              <div key={index} className="bg-primary-dark/50 rounded-xl p-4 border border-primary-accent/20">
                <div className="flex items-start space-x-3">
                  <div className="text-primary-accent mt-1">
                    {tip.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{tip.title}</h4>
                    <p className="text-sm text-primary-text">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Steps List */}
      <div className="glass-effect rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-6">Learning Steps</h3>
        <div className="space-y-4">
          {steps.map((step, index) => {
            const isCompleted = completedSteps[step.id];
            const isExpanded = expandedSteps.has(step.id);
            const hasDetails = Boolean(step.details);
            const isNext = !isCompleted && steps.slice(0, index).every(s => completedSteps[s.id]);
            
            return (
              <div 
                key={step.id}
                className={`border rounded-xl p-5 transition-all duration-300 ${
                  isCompleted 
                    ? 'border-primary-success/40 bg-primary-success/5 shadow-lg shadow-primary-success/10' 
                    : isNext
                    ? 'border-primary-accent/40 bg-primary-accent/5 shadow-lg shadow-primary-accent/10'
                    : 'border-gray-600 bg-gray-800/30'
                } ${isNext ? 'ring-2 ring-primary-accent/20' : ''}`}
              >
                <div className="flex items-start space-x-4">
                  <button
                    onClick={() => toggleStep(step.id)}
                    className={`mt-1 transition-all duration-200 hover:scale-110 ${
                      isCompleted ? 'text-primary-success' : 'text-gray-400 hover:text-primary-accent'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-6 w-6" />
                    ) : (
                      <Circle className="h-6 w-6" />
                    )}
                  </button>
                  
                  <div className={`${getStepColor(step.type)} p-2 rounded-lg mt-0.5 border`}>
                    {getStepIcon(step.type)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                        {step.link ? (
                          <a
                            href={step.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-semibold ${
                              isCompleted ? 'text-primary-success' : 'text-white'
                            } hover:underline hover:text-primary-accent`}
                          >
                            Step {index + 1}: {step.title}
                          </a>
                        ) : (
                          <h3 className={`font-semibold ${
                            isCompleted ? 'text-primary-success' : 'text-white'
                          }`}>
                            Step {index + 1}: {step.title}
                          </h3>
                        )}

                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStepColor(step.type)}`}>
                            {getStepTypeLabel(step.type)}
                          </span>
                          {isNext && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary-accent/20 text-primary-accent border border-primary-accent/30">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col space-y-2">
                          {/* Description */}
                          <p className="text-primary-text text-sm leading-relaxed">
                            {step.description}
                          </p>

                          {/* Watch Video button */}
                          {step.type === 'video' && step.link && (
                            <div className="flex justify-center">
                              <a
                                href={step.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition-colors duration-300"
                              >
                                <Play className="h-4 w-4" />
                                Watch Video
                              </a>
                            </div>
                          )}

                          {step.type === 'reading' && step.link && (
                            <div className="flex justify-center">
                              <a
                                href={step.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors duration-300"
                              >
                                <BookOpen className="h-4 w-4" />
                                Check Textbook
                              </a>
                            </div>
                          )}

                          {step.type === 'exercise' && step.link && (
                            <div className="flex justify-center">
                              <a
                                href={step.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition-colors duration-300"
                              >
                                <PenTool className="h-4 w-4" />
                                View Exercises
                              </a>
                            </div>
                          )}



                          {/* Estimated time */}
                          {step.estimatedTime && (
                            <div className="flex items-center justify-center space-x-2">
                              <Clock className="h-4 w-4 text-primary-text" />
                              <span className="text-xs text-primary-text">
                                Estimated time: {step.estimatedTime}
                              </span>
                            </div>
                          )}
                        </div>

                      </div>
                      
                      {hasDetails && (
                        <button
                          onClick={() => toggleExpanded(step.id)}
                          className="text-primary-text hover:text-white transition-colors ml-4 p-1 rounded-lg hover:bg-primary-accent/20"
                        >
                          {isExpanded ? (
                            <ChevronDown className="h-5 w-5" />
                          ) : (
                            <ChevronRight className="h-5 w-5" />
                          )}
                        </button>
                      )}
                    </div>
                    
                    {hasDetails && isExpanded && (
                      <div className="mt-4 p-4 bg-primary-dark/50 rounded-xl border border-primary-accent/20">
                        <div className="flex items-start space-x-3">
                          <Lightbulb className="h-4 w-4 text-primary-accent mt-0.5 flex-shrink-0" />
                          {Array.isArray(step.details) ? (
                            <ul className="list-disc list-inside text-primary-text text-sm leading-relaxed mb-3 space-y-1">
                              {step.details.map((point, idx) => (
                                <li key={idx}>{point}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-primary-text text-sm leading-relaxed mb-3">
                              {step.details}
                            </p>
                          )}

                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Completion*/}
      {progress === 100 && (
        <div className="glass-effect rounded-2xl p-6 border-l-4 border-primary-success">
          <div className="flex items-center space-x-4">
            <div className="bg-primary-success/20 p-3 rounded-full">
              <Award className="h-8 w-8 text-primary-success" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-success mb-1">
                🎉 Chapter Complete!
              </h3>
              <p className="text-primary-text">
                Excellent work! You've mastered all the learning steps. Ready to test your knowledge with the quiz?
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProgressTracker;
