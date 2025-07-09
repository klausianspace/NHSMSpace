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
      link: '/Pdfs/Year 1/S1/Analysis 1/Problem Sheets/Exercise set 1 - 2024-2025 (1).pdf',
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
      details: `Try to solve it on your own. 
                Use the properties you learned earlier and try to guess what property would be helpful in the problem. If you feel stuck check the solutions. 
                Don't forget to write the full solutions  `,
      link: 'd'
    },

    {
      id: 'rn-step-6',
      title: 'More Practise On Absolute Value',
      description: 'Solve all the exercises from 6 to 15 on Bibmath',
      type: 'exercise',
      estimatedTime: '2 hours',
      completed: false,
      details: "Now you need a lot of a practise, 9 exercises are enough for now, it covers equations, inequalities, identites and theoritical problems. By finishing them you'll be ready for absolute value questions in the midterm exam.",
      link: 'https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/analyse/topologie/reels&type=fexo'
    },


    {
      id: 'rn-step-7',
      title: 'Integer Part : Definition & Properties',
      description: 'An introductory video about the integer part',
      type: 'video',
      estimatedTime: '20 min',
      completed: false,
      link: 'https://www.youtube.com/watch?v=hRPOqQs3RJA' ,
      details: ['Mr Benbachir loves the integer part a lot, it is gonna be 100% in the midterm exam so make sure you : '
        , 'Understand the definition and the properties intuitivly and rigorously. ' ,
        'Know how to solve equations with integer part functions.' , 
        'Same thing for inequalities.' , 
        'Know the techniques of proving indentities that contains integer part.' ,
        "You'll find all of these in the next few steps."
      ]
    },


    {
      id: 'rn-step-8',
      title: 'Integer Part : Equations',
      description: 'Learn how to solve integer part equations',
      type: 'video',
      estimatedTime: '20 min',
      completed: false,
      link: 'https://youtu.be/DuNHhmeMyms?si=yOAbU2o-xH-a51dL' ,
      details: 'This is just simple exercises so that you get the principle'
    },


    {
      id: 'rn-step-9',
      title: 'Integer Part : Inequalities',
      description: 'Learn how to solve integer part inequalitites',
      type: 'video',
      estimatedTime: '20 min',
      completed: false,
      link: 'https://youtu.be/3OZTQLLERuE?si=8UAzyKbjap3fp7uF' ,
      details: 'This is just simple exercises so that you get the principle'
    },

    {
      id: 'rn-step-10',
      title: 'Integer Part : A Bit From Everything',
      description: 'In this playlist, watch only the videos of the integer part (1 , 2 , 5 , 6 , 10 , 11 , 17 , 18)',
      type: 'video',
      estimatedTime: '3 hours',
      completed: false,
      link: 'https://www.youtube.com/playlist?list=PLPM0fmIF2gy1nalPlDFqvljpC6xxs6c-A' ,
      details: 'This playlist is a bit challenging so you need to focus, write the solution after watching each video. You will need them later.' 
    },


    {
      id: 'rn-step-11',
      title: 'Integer Part : Practise !',
      description: 'Solve all exercises from 16 to 25 in bibmath',
      type: 'exercise',
      estimatedTime: '3 hours',
      completed: false,
      link: 'https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/analyse/topologie/reels&type=fexo' ,
      details: "Always check the solutions when you're stuck, you ain't proving anything to anyone." 
    },


    {
      id: 'rn-step-12',
      title: "Integer Part : Mr Benbachir's playlist",
      description: "This playlist covers essential to know Mr Benbachir's approach in solving problems",
      type: 'video',
      estimatedTime: '3 hours',
      completed: false,
      link: 'https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/analyse/topologie/reels&type=fexo' ,
      details: "You don't have to watch it all at once, you're ready now to move to Sup & Inf but make sure you finish it before the midterm exam." 
    },


    {
      id: 'rn-step-13',
      title: "Sup & Inf : Definitions & Properties",
      description: "Read pages 12, 13 and 14 (Definitions of Min , Max , Upper/Lower Bounds , Sup & Inf of a subset of \u211D)",
      type: 'reading',
      estimatedTime: '20 min',
      completed: false,
      link: 'd' ,
      details: "This lesson is one of the most important lessons in analysis 1, it is easy so make sure you study it well." 
    },

    {
      id: 'rn-step-14',
      title: "Sup & Inf : Definitions & Properties",
      description: "If the abstract defintions in the textbook seems hard, try this",
      type: 'video',
      estimatedTime: '20 min',
      completed: false,
      link: 'https://youtu.be/kUII8zaNHR4?si=umr206zOotJuvzUR' ,
      details: "This lesson is one of the most important lessons in analysis 1, it is easy so make sure you study it well." 
    },


    {
      id: 'rn-step-15',
      title: "Sup & Inf : Apply Definitions",
      description: "Basic exercises for further understanding",
      type: 'video',
      estimatedTime: '20 min',
      completed: false,
      link: 'https://youtu.be/uUhPGFIV2XQ?si=-ObkPTsl3b_10Aml' ,
      details: "This lesson is one of the most important lessons in analysis 1, it is easy so make sure you study it well." 
    },


    {
      id: 'rn-step-16',
      title: "Sup & Inf : Try it yourself",
      description: "Solve exercise 27 in bibmath",
      type: 'exercise',
      estimatedTime: '20 min',
      completed: false,
      link: 'https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/analyse/topologie/reels&type=fexo' ,
      details: "Try first to find bounds (حصر) to the given expressions that sets are defined with. Check solutions" 
    },


    {
      id: 'rn-step-17',
      title: "Sup & Inf : Characterization",
      description: "Watch this playlist it explains the formal definitions of sup & inf, covers tips for applying it and some relations between Sup and Inf",
      type: 'video',
      estimatedTime: '3 hours',
      completed: false,
      link: 'https://youtube.com/playlist?list=PL3XHL9ayB_rfp-f4ONZD0Q9sfvkMePmQa&si=0AaivfdtWAI9i3XF' ,
      details: ["Characterization of Sup & Inf is always present in midterm exams.", 
        "It may be confusing in the beginning, but you'll get used to it.",
        "If this seems hard to you, check 15 min math's video."
      ]
    },

    {
      id: 'rn-step-18',
      title: "Sup & Inf : TD Sheet",
      description: "Solve (or revise) exercises 6-14 from the problem sheet #1",
      type: 'exercise',
      estimatedTime: '3 hours',
      completed: false,
      link: 'd' ,
      details: "You can find the solutions for most exercises in Mr Benbachir's channel",
    },



    {
      id: 'rn-step-19',
      title: "Sup & Inf : Final Step",
      description: "Solve exercises 26-40 in bibmath",
      type: 'exercise',
      estimatedTime: '3 hours',
      completed: false,
      link: 'd' ,
      details: "",
    },







    
  ],

  'complex-numbers': [
    {
      id: 'cn-step-1',
      title: 'Understand How To Prove Real Inequalities',
      description: 'Check the problem set #0',
      type: 'exercise',
      estimatedTime: '1.5h',
      completed: false,
      details: 'You are not necessarily supposed to solve them on your own, just understand the solutions and the logic behind.',
      link: '/Pdfs/Year 1/S1/Analysis 1/Problem Sheets/Exercise set 1 - 2024-2025 (1).pdf',
    },
    {
      id: 'cn-step-2',
      title: 'Understand The Absolute Value',
      description: 'Watch this video that covers and explains the properties of the absolute value',
      type: 'video',
      estimatedTime: '25 min',
      completed: false,
      details: 'Write the definitions and the properties in your copybook',
      link: 'https://www.youtube.com/watch?v=U62YUYbbisY',
    },

    {
      id: 'cn-step-3',
      title: 'Discover The Textbook',
      description: 'Read the first 10 pages',
      type: 'reading',
      estimatedTime: '10 min',
      details: 'Contains the axioms and the absolute value. Remember the properties especially the triangular and the reverse triangular inequalities ',
      completed: false,
      link: 'file:///C:/Users/lenovo/Desktop/Klaus/CS/Mathematics%20I/NHSM%20First%20Year/Semester%201/Analysis%20I/Lectures_/Analysis%201.pdf'
    },

    {
      id: 'cn-step-4',
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
      details: `Try to solve it on your own. 
                Use the properties you learned earlier and try to guess what property would be helpful in the problem. If you feel stuck check the solutions. 
                Don't forget to write the full solutions  `,
      link: 'd'
    },

    {
      id: 'rn-step-6',
      title: 'More Practise On Absolute Value',
      description: 'Solve all the exercises from 6 to 15 on Bibmath',
      type: 'exercise',
      estimatedTime: '2 hours',
      completed: false,
      details: "Now you need a lot of a practise, 9 exercises are enough for now, it covers equations, inequalities, identites and theoritical problems. By finishing them you'll be ready for absolute value questions in the midterm exam.",
      link: 'https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/analyse/topologie/reels&type=fexo'
    },


    {
      id: 'rn-step-7',
      title: 'Integer Part : Definition & Properties',
      description: 'An introductory video about the integer part',
      type: 'video',
      estimatedTime: '20 min',
      completed: false,
      link: 'https://www.youtube.com/watch?v=hRPOqQs3RJA' ,
      details: ['Mr Benbachir loves the integer part a lot, it is gonna be 100% in the midterm exam so make sure you : '
        , 'Understand the definition and the properties intuitivly and rigorously. ' ,
        'Know how to solve equations with integer part functions.' , 
        'Same thing for inequalities.' , 
        'Know the techniques of proving indentities that contains integer part.' ,
        "You'll find all of these in the next few steps."
      ]
    },


    {
      id: 'rn-step-8',
      title: 'Integer Part : Equations',
      description: 'Learn how to solve integer part equations',
      type: 'video',
      estimatedTime: '20 min',
      completed: false,
      link: 'https://youtu.be/DuNHhmeMyms?si=yOAbU2o-xH-a51dL' ,
      details: 'This is just simple exercises so that you get the principle'
    },


    {
      id: 'rn-step-9',
      title: 'Integer Part : Inequalities',
      description: 'Learn how to solve integer part inequalitites',
      type: 'video',
      estimatedTime: '20 min',
      completed: false,
      link: 'https://youtu.be/3OZTQLLERuE?si=8UAzyKbjap3fp7uF' ,
      details: 'This is just simple exercises so that you get the principle'
    },

    {
      id: 'rn-step-10',
      title: 'Integer Part : A Bit From Everything',
      description: 'In this playlist, watch only the videos of the integer part (1 , 2 , 5 , 6 , 10 , 11 , 17 , 18)',
      type: 'video',
      estimatedTime: '3 hours',
      completed: false,
      link: 'https://www.youtube.com/playlist?list=PLPM0fmIF2gy1nalPlDFqvljpC6xxs6c-A' ,
      details: 'This playlist is a bit challenging so you need to focus, write the solution after watching each video. You will need them later.' 
    },


    {
      id: 'rn-step-11',
      title: 'Integer Part : Practise !',
      description: 'Solve all exercises from 16 to 25 in bibmath',
      type: 'exercise',
      estimatedTime: '3 hours',
      completed: false,
      link: 'https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/analyse/topologie/reels&type=fexo' ,
      details: "Always check the solutions when you're stuck, you ain't proving anything to anyone." 
    },


    {
      id: 'rn-step-12',
      title: "Integer Part : Mr Benbachir's playlist",
      description: "This playlist covers essential to know Mr Benbachir's approach in solving problems",
      type: 'video',
      estimatedTime: '3 hours',
      completed: false,
      link: 'https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/analyse/topologie/reels&type=fexo' ,
      details: "You don't have to watch it all at once, you're ready now to move to Sup & Inf but make sure you finish it before the midterm exam." 
    },


    {
      id: 'rn-step-13',
      title: "Sup & Inf : Definitions & Properties",
      description: "Read pages 12, 13 and 14 (Definitions of Min , Max , Upper/Lower Bounds , Sup & Inf of a subset of \u211D)",
      type: 'reading',
      estimatedTime: '20 min',
      completed: false,
      link: 'd' ,
      details: "This lesson is one of the most important lessons in analysis 1, it is easy so make sure you study it well." 
    },

    {
      id: 'rn-step-14',
      title: "Sup & Inf : Definitions & Properties",
      description: "If the abstract defintions in the textbook seems hard, try this",
      type: 'video',
      estimatedTime: '20 min',
      completed: false,
      link: 'https://youtu.be/kUII8zaNHR4?si=umr206zOotJuvzUR' ,
      details: "This lesson is one of the most important lessons in analysis 1, it is easy so make sure you study it well." 
    },


    {
      id: 'rn-step-15',
      title: "Sup & Inf : Apply Definitions",
      description: "Basic exercises for further understanding",
      type: 'video',
      estimatedTime: '20 min',
      completed: false,
      link: 'https://youtu.be/uUhPGFIV2XQ?si=-ObkPTsl3b_10Aml' ,
      details: "This lesson is one of the most important lessons in analysis 1, it is easy so make sure you study it well." 
    },


    {
      id: 'rn-step-16',
      title: "Sup & Inf : Try it yourself",
      description: "Solve exercise 27 in bibmath",
      type: 'exercise',
      estimatedTime: '20 min',
      completed: false,
      link: 'https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/analyse/topologie/reels&type=fexo' ,
      details: "Try first to find bounds (حصر) to the given expressions that sets are defined with. Check solutions" 
    },


    {
      id: 'rn-step-17',
      title: "Sup & Inf : Characterization",
      description: "Watch this playlist it explains the formal definitions of sup & inf, covers tips for applying it and some relations between Sup and Inf",
      type: 'video',
      estimatedTime: '3 hours',
      completed: false,
      link: 'https://youtube.com/playlist?list=PL3XHL9ayB_rfp-f4ONZD0Q9sfvkMePmQa&si=0AaivfdtWAI9i3XF' ,
      details: ["Characterization of Sup & Inf is always present in midterm exams.", 
        "It may be confusing in the beginning, but you'll get used to it.",
        "If this seems hard to you, check 15 min math's video."
      ]
    },

    {
      id: 'rn-step-18',
      title: "Sup & Inf : TD Sheet",
      description: "Solve (or revise) exercises 6-14 from the problem sheet #1",
      type: 'exercise',
      estimatedTime: '3 hours',
      completed: false,
      link: 'd' ,
      details: "You can find the solutions for most exercises in Mr Benbachir's channel",
    },



    {
      id: 'rn-step-19',
      title: "Sup & Inf : Final Step",
      description: "Solve exercises 26-40 in bibmath",
      type: 'exercise',
      estimatedTime: '3 hours',
      completed: false,
      link: 'd' ,
      details: "",
    },





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
