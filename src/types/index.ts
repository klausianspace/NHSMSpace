export interface ProgressStep {
  id: string;
  title: string;
  description: string;
  type: 'reading' | 'video' | 'exercise' | 'quiz' | 'review';
  estimatedTime?: string;
  completed: boolean;
  details?: string;
}

export interface ResourceCard {
  id: string;
  title: string;
  type: 'lecture' | 'td-sheet' | 'video' | 'external';
  description: string;
  url?: string;
  fileType?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Chapter {
  id: string;
  title: string;
  moduleTitle: string;
  description: string;
  resources: ResourceCard[];
  progressSteps: ProgressStep[];
  quiz?: QuizQuestion[];
}