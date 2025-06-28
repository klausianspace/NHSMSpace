import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ProgressStep } from '../types';

interface ProgressState {
  completedSteps: Record<string, boolean>;
  toggleStep: (stepId: string) => void;
  getProgress: (steps: ProgressStep[]) => number;
  resetProgress: (chapterId: string) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedSteps: {},
      
      toggleStep: (stepId: string) => {
        set((state) => ({
          completedSteps: {
            ...state.completedSteps,
            [stepId]: !state.completedSteps[stepId]
          }
        }));
      },
      
      getProgress: (steps: ProgressStep[]) => {
        const completed = steps.filter(step => 
          get().completedSteps[step.id]
        ).length;
        return Math.round((completed / steps.length) * 100);
      },
      
      resetProgress: (chapterId: string) => {
        set((state) => {
          const newCompletedSteps = { ...state.completedSteps };
          Object.keys(newCompletedSteps).forEach(key => {
            if (key.startsWith(chapterId)) {
              delete newCompletedSteps[key];
            }
          });
          return { completedSteps: newCompletedSteps };
        });
      }
    }),
    {
      name: 'nhsm-progress-storage'
    }
  )
);