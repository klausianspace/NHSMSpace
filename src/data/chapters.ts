import { Chapter } from '../types';

export const sampleChapter: Chapter = {
  id: 'analysis-1-limits',
  title: 'Limits and Continuity',
  moduleTitle: 'Analysis 1',
  description: 'Understanding the fundamental concepts of limits and continuity in real analysis',
  resources: [
    {
      id: 'lecture-1',
      title: 'Lecture Notes',
      type: 'lecture',
      description: 'Complete lecture notes on limits and continuity with proofs and examples',
      url: '#',
      fileType: 'PDF'
    },
    {
      id: 'td-sheet-1',
      title: 'TD Sheet #3',
      type: 'td-sheet',
      description: 'Problem set covering epsilon-delta definitions and limit computations',
      url: '#',
      fileType: 'PDF'
    },
    {
      id: 'video-playlist-1',
      title: 'Video Lectures',
      type: 'video',
      description: 'Series of 6 videos explaining limits with visual demonstrations',
      url: '#'
    },
    {
      id: 'external-1',
      title: 'External Resources',
      type: 'external',
      description: 'Khan Academy exercises and additional reading materials',
      url: '#'
    }
  ],
  progressSteps: [
    {
      id: 'step-1',
      title: 'Read Introduction to Limits',
      description: 'Read pages 1-7 of the lecture notes',
      type: 'reading',
      estimatedTime: '15 min',
      completed: false,
      details: 'Focus on the intuitive definition before moving to formal epsilon-delta'
    },
    {
      id: 'step-2',
      title: 'Watch Introductory Video',
      description: 'Watch "Understanding Limits Visually" (10 minutes)',
      type: 'video',
      estimatedTime: '10 min',
      completed: false
    },
    {
      id: 'step-3',
      title: 'Practice Basic Limit Problems',
      description: 'Solve exercises 1-5 from the TD sheet',
      type: 'exercise',
      estimatedTime: '20 min',
      completed: false,
      details: 'These problems cover polynomial and rational function limits'
    },
    {
      id: 'step-4',
      title: 'Study Formal Definition',
      description: 'Read pages 8-12: Epsilon-Delta Definition',
      type: 'reading',
      estimatedTime: '25 min',
      completed: false,
      details: 'This is crucial - take time to understand each component of the definition'
    },
    {
      id: 'step-5',
      title: 'Watch Epsilon-Delta Proof',
      description: 'Watch "Formal Limit Proofs" video series (parts 1-2)',
      type: 'video',
      estimatedTime: '30 min',
      completed: false
    },
    {
      id: 'step-6',
      title: 'Apply Formal Definition',
      description: 'Complete exercises 6-10 using epsilon-delta',
      type: 'exercise',
      estimatedTime: '45 min',
      completed: false,
      details: 'Start with simple linear functions before attempting more complex ones'
    },
    {
      id: 'step-7',
      title: 'Continuity Concepts',
      description: 'Read pages 13-18: Definition and Properties of Continuity',
      type: 'reading',
      estimatedTime: '20 min',
      completed: false
    },
    {
      id: 'step-8',
      title: 'Practice Continuity Problems',
      description: 'Solve exercises 11-15 from the TD sheet',
      type: 'exercise',
      estimatedTime: '35 min',
      completed: false
    }
  ],
  quiz: [
    {
      id: 'q1',
      question: 'What does it mean for a function to have a limit L as x approaches a?',
      options: [
        'The function must be defined at x = a',
        'For any ε > 0, there exists δ > 0 such that |f(x) - L| < ε when 0 < |x - a| < δ',
        'The function must be continuous at x = a',
        'f(a) must equal L'
      ],
      correctAnswer: 1,
      explanation: 'The epsilon-delta definition is the formal way to define limits and does not require the function to be defined at the point.'
    },
    {
      id: 'q2',
      question: 'Which of the following is NOT required for a function to be continuous at x = a?',
      options: [
        'f(a) must be defined',
        'lim(x→a) f(x) must exist',
        'lim(x→a) f(x) = f(a)',
        'f\'(a) must exist'
      ],
      correctAnswer: 3,
      explanation: 'Continuity does not require the derivative to exist. A function can be continuous but not differentiable at a point.'
    }
  ]
};