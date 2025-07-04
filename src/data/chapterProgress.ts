import { ProgressStep } from '../types/index';

export const chapterProgress: Record<string, ProgressStep[]> = {
  limits: [
    {
      id: 'step-1',
      title: 'Read Introduction to Limits',
      description: 'Read pages 1-7 of the lecture notes',
      type: 'reading',
      estimatedTime: '15 min',
      completed: false,
      details: 'Focus on the intuitive definition before moving to formal epsilon-delta',
      link: '',
    },
    {
      id: 'step-2',
      title: 'Watch Introductory Video',
      description: 'Watch "Understanding Limits Visually" (10 minutes)',
      type: 'video',
      estimatedTime: '10 min',
      completed: false,
      link: '',
    },
    {
      id: 'step-3',
      title: 'Practice Basic Limit Problems',
      description: 'Solve exercises 1-5 from the TD sheet',
      type: 'exercise',
      estimatedTime: '20 min',
      completed: false,
      details: 'These problems cover polynomial and rational function limits',
      link: '',
    },
    
    
    {
      id: 'step-4',
      title: 'Practice Basic Limit Problems',
      description: 'Solve exercises 1-5 from the TD sheet',
      type: 'exercise',
      estimatedTime: '20 min',
      completed: false,
      details: 'These problems cover polynomial and rational function limits',
      link: '',
    },

    {
      id: 'step-5',
      title: 'Practice Basic Limit Problems',
      description: 'Solve exercises 1-5 from the TD sheet',
      type: 'exercise',
      estimatedTime: '20 min',
      completed: false,
      details: 'These problems cover polynomial and rational function limits',
      link: '',
    },

    {
      id: 'step-5',
      title: 'Practice Basic Limit Problems',
      description: 'Solve exercises 1-5 from the TD sheet',
      type: 'exercise',
      estimatedTime: '20 min',
      completed: false,
      details: 'These problems cover polynomial and rational function limits',
      link: '',
    },
  ],

  'real-numbers': [
    {
      id: 'rn-step-1',
      title: 'Understand How To Prove Real Inequalities',
      description: 'Check the problem set #0',
      type: 'exercise',
      estimatedTime: '1.5h',
      completed: false,
      details: 'You are not necessarily supposed to solve them on your own, just understand the solutions and the logic behind.',
      link: 'd',
    },
    {
      id: 'rn-step-2',
      title: 'Understand The Absolute Value',
      description: 'Watch this video that covers and explains the properties of the absolute value',
      type: 'video',
      estimatedTime: '25 min',
      completed: false,
      details: 'Write the definitions and the properties in your copybook',
      link: 'https://www.youtube.com/watch?v=U62YUYbbisY',
    },

    {
      id: 'rn-step-3',
      title: 'Discover The Textbook',
      description: 'Read the first 10 pages',
      type: 'reading',
      estimatedTime: '10 min',
      details: 'Contains the axioms and the absolute value. Remember the properties especially the triangular and the reverse triangular inequalities ',
      completed: false,
      link: 'file:///C:/Users/lenovo/Desktop/Klaus/CS/Mathematics%20I/NHSM%20First%20Year/Semester%201/Analysis%20I/Lectures_/Analysis%201.pdf'
    },

    {
      id: 'rn-step-4',
      title: 'Applications Of The Absolute Value Properties',
      description: '2 exercises on the absolute value',
      type: 'video',
      estimatedTime: '40 min',
      completed: false ,
      details: "Try first to solve them on your own then watch the solution, it's okay don't worry if you don't find the solution by yourself, the main goal here is that you discover the main of the absolute value. ",
      link: 'https://www.youtube.com/watch?v=BOZWwBTjlnk'
    },

    {
      id: 'rn-step-5',
      title: 'Practice On the TD Sheet',
      description: 'Solve the first 2 exercises from the problem sheet #1',
      type: 'exercise',
      estimatedTime: ' 1 hour',
      completed: false ,
      details: "Try to solve it on your own, use the properties you learned earlier and try to guess what property would be helpful in the problem. If you feel stuck check the solutions  ",
      link: 'd'
    },

    {
      id: 'rn-step-6',
      title: 'Practice Sup/Inf',
      description: 'Do 5 problems on supremum and infimum',
      type: 'exercise',
      estimatedTime: '25 min',
      completed: false
    },


    {
      id: 'rn-step-7',
      title: 'Practice Sup/Inf',
      description: 'Do 5 problems on supremum and infimum',
      type: 'exercise',
      estimatedTime: '25 min',
      completed: false
    },


    {
      id: 'rn-step-8',
      title: 'Practice Sup/Inf',
      description: 'Do 5 problems on supremum and infimum',
      type: 'exercise',
      estimatedTime: '25 min',
      completed: false
    },
  ],

  'your-chapter-id-here': [
    {
      id: 'step-1',
      title: '',
      description: '',
      type: 'reading', // or 'video' or 'exercise'
      estimatedTime: '',
      completed: false,
      details: '',
    },
    {
      id: 'step-2',
      title: '',
      description: '',
      type: 'reading',
      estimatedTime: '',
      completed: false,
      details: '',
    },
    {
      id: 'step-3',
      title: '',
      description: '',
      type: 'reading',
      estimatedTime: '',
      completed: false,
      details: '',
    },
    {
      id: 'step-4',
      title: '',
      description: '',
      type: 'video',
      estimatedTime: '',
      completed: false,
      details: '',
    },
    {
      id: 'step-5',
      title: '',
      description: '',
      type: 'video',
      estimatedTime: '',
      completed: false,
      details: '',
    },
    {
      id: 'step-6',
      title: '',
      description: '',
      type: 'exercise',
      estimatedTime: '',
      completed: false,
      details: '',
    },
    {
      id: 'step-7',
      title: '',
      description: '',
      type: 'exercise',
      estimatedTime: '',
      completed: false,
      details: '',
    },
    {
      id: 'step-8',
      title: '',
      description: '',
      type: 'exercise',
      estimatedTime: '',
      completed: false,
      details: '',
    },
    {
      id: 'step-9',
      title: '',
      description: '',
      type: 'exercise',
      estimatedTime: '',
      completed: false,
      details: '',
    }
  ],

  "chapter-1": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-2": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-3": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-4": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-5": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-6": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-7": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-8": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-9": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-10": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-11": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-12": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-13": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-14": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-15": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-16": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-17": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-18": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-19": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]
,


"chapter-20": [
  {
    id: "step-1",
    title: "Step 1",
    description: "Description for step 1",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-2",
    title: "Step 2",
    description: "Description for step 2",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-3",
    title: "Step 3",
    description: "Description for step 3",
    type: "exercise",
    estimatedTime: "20 min",
    completed: false
  },
  {
    id: "step-4",
    title: "Step 4",
    description: "Description for step 4",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-5",
    title: "Step 5",
    description: "Description for step 5",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-6",
    title: "Step 6",
    description: "Description for step 6",
    type: "exercise",
    estimatedTime: "25 min",
    completed: false
  },
  {
    id: "step-7",
    title: "Step 7",
    description: "Description for step 7",
    type: "reading",
    estimatedTime: "15 min",
    completed: false
  },
  {
    id: "step-8",
    title: "Step 8",
    description: "Description for step 8",
    type: "video",
    estimatedTime: "10 min",
    completed: false
  },
  {
    id: "step-9",
    title: "Step 9",
    description: "Description for step 9",
    type: "exercise",
    estimatedTime: "30 min",
    completed: false
  }
]

};
