import { ModuleData } from '../types/module'; 


export const modulesData: Record<string, ModuleData> = {
  'analysis-1': {
    id: 'analysis-1',
    name: 'Analysis I',
    subtitle: 'First Semester, Year 1',
    description: 'Master the foundations of real and complex analysis through rigorous theory, problem-solving practice, and interactive visual tools.',
    chapters: [
      {
        id: 'real-numbers',
        title: 'Real Numbers',
        description: 'The complete ordered field \u211D: axioms, supremum/infimum, bounded sets, absolute value, integer part, and topology of the real line.'
      },
      {
        id: 'complex-numbers',
        title: 'Complex Numbers',
        description: 'Algebraic and geometric properties of \u2102, polar form, roots of unity, and complex functions with interactive visualizations.'
      },
      {
        id: 'sequences',
        title: 'Sequences',
        description: 'Convergence, monotonic sequences, Bolzano-Weierstrass theorem, Cauchy sequences, and applications in analysis.'
      },
      {
        id: 'limits',
        title: 'Limits & Continuity',
        description: '\u03b5-\u03b4 definitions, continuity theorems, uniform continuity, and their implications in real analysis.'
      },
      {
        id: 'differentiability',
        title: 'Differentiability',
        description: 'Derivatives, mean value theorems, L\'H\u00f4pital\'s rule, Taylor expansions, and applications in optimization.'
      }
    ],
    resources: {
      'real-numbers': [
        {
          id: 'rn-lecture-notes',
          type: 'lecture-notes',
          title: 'Axioms of \u211D',
          description: 'Complete formal treatment of real number axioms, completeness, and topological properties with proofs and examples.',
          meta: { pages: '65 pages', tags: 'Axioms • Sup/Inf • Topology' }
        },
        {
          id: 'rn-problem-set',
          type: 'problem-set',
          title: 'Supremum & Infimum',
          description: '15 carefully graded problems on bounded sets, completeness, and applications of supremum/infimum.',
          meta: { difficulty: 'Difficulty: 4.2/5', solutions: 'Solutions Included' }
        },
        {
          id: 'rn-extras',
          type: 'extras',
          title: 'Additional Practice',
          description: 'External resources, exercises, and supplementary materials for deeper understanding.',
          meta: { resources: '3 external resources', type: 'Interactive & Textual' }
        },
        {
          id: 'rn-videos',
          type: 'video-playlist',
          title: 'Real Numbers Deep Dive',
          description: 'Comprehensive video lectures covering all aspects of real number theory with visual explanations.',
          meta: { videos: '6 videos', duration: '4.1h total' }
        }
      ],
      'complex-numbers': [
        {
          id: 'cn-lecture-notes',
          type: 'lecture-notes',
          title: 'Complex Plane & Algebra',
          description: 'From Argand diagrams to Euler\'s formula, with proofs and 3D visualizations of complex mappings.',
          meta: { pages: '48 pages', tags: 'Polar Form • Roots • Topology' }
        },
        {
          id: 'cn-problem-set',
          type: 'problem-set',
          title: 'Complex Operations',
          description: '18 problems covering modulus, argument, roots of unity, and geometric interpretations.',
          meta: { difficulty: 'Difficulty: 3.8/5', solutions: 'Solutions Included' }
        },
        {
          id: 'cn-extras',
          type: 'extras',
          title: 'Interactive Tools',
          description: 'Interactive visualizations, tools, and external resources for exploring complex numbers.',
          meta: { resources: '3 external resources', type: 'Interactive & Visual' }
        },
        {
          id: 'cn-videos',
          type: 'video-playlist',
          title: 'Mastering \u2102',
          description: 'Video lectures with animations and examples showing geometric interpretations of complex operations.',
          meta: { videos: '7 videos', duration: '3.5h total' }
        }
      ],
      'sequences': [
        {
          id: 'seq-lecture-notes',
          type: 'lecture-notes',
          title: 'Sequences in \u211D',
          description: 'Formal treatment of convergence, subsequences, and completeness with 50+ worked examples.',
          meta: { pages: '72 pages', tags: 'Convergence • B-W • Cauchy' }
        },
        {
          id: 'seq-problem-set',
          type: 'problem-set',
          title: 'Convergence Practice',
          description: '20 problems on sequence limits, monotonicity, and applications of Bolzano-Weierstrass.',
          meta: { difficulty: 'Difficulty: 4.5/5', solutions: 'Solutions Included' }
        },
        {
          id: 'seq-extras',
          type: 'extras',
          title: 'Advanced Materials',
          description: 'Advanced exercises, proofs, and resources for deeper exploration of sequence properties.',
          meta: { resources: '3 external resources', type: 'Academic & Interactive' }
        },
        {
          id: 'seq-videos',
          type: 'video-playlist',
          title: 'Sequences Unlocked',
          description: 'Video series with detailed explanations and visualizations of sequence convergence and properties.',
          meta: { videos: '5 videos', duration: '2.8h total' }
        }
      ],
      'limits': [
        {
          id: 'lim-lecture-notes',
          type: 'lecture-notes',
          title: 'Limits & Continuity',
          description: 'Rigorous treatment of limits, continuity, and uniform continuity with graphical interpretations.',
          meta: { pages: '55 pages', tags: '\u03b5-\u03b4 • IVT • Uniform Continuity' }
        },
        {
          id: 'lim-problem-set',
          type: 'problem-set',
          title: 'Problem Sheet #5',
          description: '15 problems ranging from basic limit proofs to advanced uniform continuity applications.',
          meta: { difficulty: 'Difficulty: 4.7/5', solutions: 'Solutions Included' }
        },
        {
          id: 'lim-extras',
          type: 'extras',
          title: 'Interactive Learning',
          description: 'Interactive tools for exploring \u03b5-\u03b4 definitions and visualizing continuity concepts.',
          meta: { resources: '3 external resources', type: 'Interactive & Visual' }
        },
        {
          id: 'lim-videos',
          type: 'video-playlist',
          title: 'Limits & Continuity course',
          description: 'Comprehensive video series with animations and examples of limit applications.',
          meta: { videos: '9 videos', duration: '5.2h total' }
        }
      ],
      'differentiability': [
        {
          id: 'diff-lecture-notes',
          type: 'lecture-notes',
          title: 'Calculus of Derivatives',
          description: 'From basic differentiation rules to Taylor series with error terms, including proofs of all major theorems.',
          meta: { pages: '68 pages', tags: 'MVT • L\'H\u00f4pital • Taylor' }
        },
        {
          id: 'diff-problem-set',
          type: 'problem-set',
          title: 'Derivative Challenges',
          description: '22 problems covering computational techniques, MVT applications, and Taylor polynomial estimation.',
          meta: { difficulty: 'Difficulty: 4.3/5', solutions: 'Solutions Included' }
        },
        {
          id: 'diff-extras',
          type: 'extras',
          title: 'Applied Tools',
          description: 'Interactive tools for exploring derivatives, Taylor series approximations, and optimization.',
          meta: { resources: '3 external resources', type: 'Application & Visual' }
        },
        {
          id: 'diff-videos',
          type: 'video-playlist',
          title: 'The Power of Derivatives',
          description: 'Video lectures focusing on applications and geometric interpretations of derivatives.',
          meta: { videos: '8 videos', duration: '4.5h total' }
        }
      ]
    }
  },

  'algebra-1': {
    id: 'algebra-1',
    name: 'Algebra I',
    subtitle: 'First Semester, Year 1',
    description: 'Study of logic, sets, relations, and fundamental algebraic structures, with a focus on formal reasoning and abstract operations.',
    chapters: [
      {
        id: 'mathematical-logic',
        title: 'Mathematical Logic',
        description: 'Propositions, logical connectives, truth tables, implications, equivalence, and proof methods.'
      },
      {
        id: 'sets-and-maps',
        title: 'Sets and Maps',
        description: 'Set theory basics, Venn diagrams, Cartesian product, functions, injections, and surjections.'
      },
      {
        id: 'binary-relations',
        title: 'Binary Relations',
        description: 'Reflexivity, symmetry, transitivity, equivalence relations, and partial orders.'
      },
      {
        id: 'algebraic-structures',
        title: 'Algebraic Structures',
        description: 'Binary operations, groups, rings, fields, and key structural properties.'
      },
      {
        id: 'polynomials-and-rational-fractions',
        title: 'Polynomials and Rational Fractions',
        description: 'Polynomial operations, factorization, rational expressions, and applications.'
      }
    ],
    
    resources: {
      'mathematical-logic': [
        {
          id: 'aml-lecture-notes',
          type: 'lecture-notes',
          title: 'Mathemathecal Logic Textbook',
          description: 'Learn how to reason and prove statements with precision. This chapter covers propositions, logical connectives, truth tables, implications, equivalence, quantifiers, and proof techniques like direct proof, contradiction, and contraposition.',
          meta: { pages: '12 pages', tags: 'Statements • Truth Tables • Proof Methods' }
        },

        {
          id: 'aml-problem-set',
          type: 'problem-set',
          title: 'Problem Set #1',
          description: 'Tackle problems on truth tables, implications, and common proof methods — with complete solutions provided for every exercise to strenghen your reasonning skills.',
          meta: { difficulty: 'Difficulty: 4.3/5', solutions: 'Solutions Included'  }
        },

        {
          id: 'aml-lecture-notes',
          type: 'extras',
          title: 'Additional Practise',
          description: 'External resources, exercises, and supplementary materials for deeper understanding.',
          meta: { resources: '3 external resources', type: 'Textual' }
        },


        {
          id: 'aml-video-playlist',
          type: 'video-playlist',
          title: 'Logique et Raisonnements',
          description: 'Engaging video series that builds your logical reasoning skills, explains key proof techniques, and walks through core concepts like implications, equivalence, and truth tables.',
          meta: { videos: '19 videos', duration: '1.2h total'  }
        },


      ],
      'sets-and-maps': [
        {
          id: 'sm-lecture-notes',
          type: 'lecture-notes',
          title: 'Sets & Maps Textbook',
          description: 'Formal introduction to set theory, Venn diagrams, Cartesian products, and functions—including injections, surjections, and bijections—with clear definitions and worked examples.',
          meta: { pages: '23 pages', tags: 'Set Operations • (In)direct image • Injective , Surjective , Bijective • Inverse Maps ' }
        },
        {
          id: 'sm-problem-set',
          type: 'problem-set',
          title: 'Problem Set #2',
          description: '20 exercises covering set operations, Venn diagrams, functions, and mappings—designed to build mastery through progressive difficulty. Solutions included.',
          meta: { difficulty: '4.5/5', solutions: 'Solutions Included' }
        },
        {
          id: 'chapter-prefix-extras',
          type: 'extras',
          title: 'Additional Practise',
          description: 'External resources, exercises, and supplementary materials for deeper understanding.',
          meta: { resources: '3 external resources', type: 'Textual' }
        },
        {
          id: 'sm-video-playlist',
          type: 'video-playlist',
          title: 'Les Ensembles et Les Applications',
          description: 'This playlist covers the theory side and a lot of applications to master the chapter. ',
          meta: { videos: '11 video', duration: '4.1h total' }
        }
      ],
      'binary-relations': [
        {
          id: 'br-lecture-notes',
          type: 'lecture-notes',
          title: 'Binary Relations Textbook',
          description: 'Comprehensive notes covering reflexive, symmetric, transitive relations, equivalence classes, and partial orders, with formal definitions, examples, and diagrams.',
          meta: { pages: '12 pages', tags: 'Equivalence/Order relations' }
        },
        {
          id: 'br-problem-set',
          type: 'problem-set',
          title: 'Problem Set #3',
          description: 'A collection of graded exercises covering properties of relations, including reflexivity, symmetry, and equivalence — with full solutions provided.',
          meta: { difficulty: '4/5', solutions: 'Solutions Included' }
        },
        {
          id: 'br-extras',
          type: 'extras',
          title: 'Additional Practise',
          description: 'External resources, exercises, and supplementary materials for deeper understanding.',
          meta: { resources: '3 external resources', type: 'Textual' }
        },
        {
          id: 'br-video-playlist',
          type: 'video-playlist',
          title: 'Binary Relations',
          description: 'This playlist covers the theory side and a lot of applications to master the chapter.',
          meta: { videos: '12', duration: '3.2h' }
        }
      ],


      'algebraic-structures': [
        {
          id: 'as-lecture-notes',
          type: 'lecture-notes',
          title: 'Algebraic Structures Textbook',
          description: 'Explore binary operations, identity and inverse elements, groups, rings, and fields — with definitions, properties, and worked examples.',
          meta: { pages: '18 pages', tags: 'Groups • Rings • Fields' }
        },
        {
          id: 'as-problem-set',
          type: 'problem-set',
          title: 'Problem Set #4',
          description: 'Exercises covering group axioms, ring operations, and examples of algebraic structures. Full solutions included.',
          meta: { difficulty: '4.1/5', solutions: 'Solutions Included' }
        },
        {
          id: 'as-extras',
          type: 'extras',
          title: 'Additional Practise',
          description: 'External links, summary tables, and application-based exercises on algebraic structures.',
          meta: { resources: '3 external resources', type: 'Visual & Textual' }
        },
        {
          id: 'as-video-playlist',
          type: 'video-playlist',
          title: 'Algebraic Structures Essentials',
          description: 'Visual explanations of groups, rings, and fields with animated examples and guided proofs.',
          meta: { videos: '9 videos', duration: '3.8h total' }
        }
      ],

      'polynomials-and-rational-fractions': [
        {
          id: 'prf-lecture-notes',
          type: 'lecture-notes',
          title: 'Polynomials & Rational Fractions Textbook',
          description: 'Detailed explanations on polynomial operations, factorization, irreducibility, and rational expressions with numerous examples.',
          meta: { pages: '22 pages', tags: 'Factorization • Division • Rational Expressions' }
        },
        {
          id: 'prf-problem-set',
          type: 'problem-set',
          title: 'Problem Set #5',
          description: '20 problems covering polynomial identities, factorizations, and simplification of rational fractions. Includes full solutions.',
          meta: { difficulty: '4.2/5', solutions: 'Solutions Included' }
        },
        {
          id: 'prf-extras',
          type: 'extras',
          title: 'Additional Practise',
          description: 'Extra exercises and external video links for mastering polynomial algebra.',
          meta: { resources: '3 external resources', type: 'Textual & Video' }
        },
        {
          id: 'prf-video-playlist',
          type: 'video-playlist',
          title: 'Mastering Polynomials',
          description: 'Engaging video tutorials covering polynomial division, factorization, and rational simplifications.',
          meta: { videos: '10 videos', duration: '4.2h total' }
        }
      ]

    }
    
  },


  'discrete-math-1': {
    id: 'discrete-math-1',
    name: 'Discrete Mathematics I',
    subtitle: 'First Semester, Year 1',
    description: 'Introduction to finite structures through enumeration, discrete models, and fundamental graph theory tools.',
    chapters: [
      {
        id: 'combinatorics',
        title: 'Combinatorial Analysis',
        description: 'Counting techniques including permutations, combinations.'
      },
      {
        id: 'inclusion-exclusion',
        title: 'Inclusion-Exclusion Principle',
        description: 'Generalized counting strategies using overlaps and principle of inclusion-exclusion.'
      },
      {
        id: 'graph-theory-intro',
        title: 'Introduction to Graph Theory',
        description: 'Basic definitions, types of graphs, degree, paths, and connectivity in finite graphs.'
      }
    ],
    resources: {
      'combinatorics': [
        {
          id: 'chapter-prefix-lecture-notes',
          type: 'lecture-notes',
          title: '',
          description: '',
          meta: { pages: '', tags: '' }
        },
        {
          id: 'chapter-prefix-problem-set',
          type: 'problem-set',
          title: '',
          description: '',
          meta: { difficulty: '', solutions: '' }
        },
        {
          id: 'chapter-prefix-extras',
          type: 'extras',
          title: '',
          description: '',
          meta: { resources: '', type: '' }
        },
        {
          id: 'chapter-prefix-video-playlist',
          type: 'video-playlist',
          title: '',
          description: '',
          meta: { videos: '', duration: '' }
        }
      ],
      'inclusion-exclusion': [
        {
          id: 'chapter-prefix-lecture-notes',
          type: 'lecture-notes',
          title: '',
          description: '',
          meta: { pages: '', tags: '' }
        },
        {
          id: 'chapter-prefix-problem-set',
          type: 'problem-set',
          title: '',
          description: '',
          meta: { difficulty: '', solutions: '' }
        },
        {
          id: 'chapter-prefix-extras',
          type: 'extras',
          title: '',
          description: '',
          meta: { resources: '', type: '' }
        },
        {
          id: 'chapter-prefix-video-playlist',
          type: 'video-playlist',
          title: '',
          description: '',
          meta: { videos: '', duration: '' }
        }
      ],
      'graph-theory-intro': [
        {
          id: 'chapter-prefix-lecture-notes',
          type: 'lecture-notes',
          title: '',
          description: '',
          meta: { pages: '', tags: '' }
        },
        {
          id: 'chapter-prefix-problem-set',
          type: 'problem-set',
          title: '',
          description: '',
          meta: { difficulty: '', solutions: '' }
        },
        {
          id: 'chapter-prefix-extras',
          type: 'extras',
          title: '',
          description: '',
          meta: { resources: '', type: '' }
        },
        {
          id: 'chapter-prefix-video-playlist',
          type: 'video-playlist',
          title: '',
          description: '',
          meta: { videos: '', duration: '' }
        }
      ]
    }
  },


  'statistics-1': {
  id: 'statistics-1',
  name: 'Statistics',
  subtitle: 'First Semester, Year 1',
  description: 'Study of statistical concepts, descriptive measures, and basic probabilistic foundations applied to data analysis.',
  chapters: [
    {
      id: 'fundamentals',
      title: 'Fundamentals of Statistics',
      description: 'Definition, objectives, types of statistics, populations and samples, and data classifications.'
    },
    {
      id: 'numerical-data',
      title: 'Numerical Representation of Data',
      description: 'Tabular and graphical representation, frequency distributions, and key descriptive measures.'
    },
    {
      id: 'two-way-stats',
      title: 'Two-Way Statistics',
      description: 'Bivariate data, contingency tables, marginal and conditional distributions, independence.'
    },
    {
      id: 'intro-probability',
      title: 'Introduction to Probability',
      description: 'Sample spaces, events, basic probability rules, and fundamental principles of combinatorics.'
    }
  ],
  resources: {
    'fundamentals': [],
    'numerical-data': [],
    'two-way-stats': [],
    'intro-probability': []
  }
},



'physics-1': {
  id: 'physics-1',
  name: 'Physics I',
  subtitle: 'First Semester, Year 1',
  description: 'Introduction to classical mechanics: motion in one and two dimensions, Newton’s laws, and the principles of work and energy.',
  chapters: [
    {
      id: 'review',
      title: 'Review',
      description: 'Mathematical and physical prerequisites: units, vector operations, and fundamental principles of mechanics.'
    },
    {
      id: 'kinematics',
      title: 'Kinematics',
      description: 'Description of motion: position, velocity, and acceleration in one and two dimensions with graphical and analytical methods.'
    },
    {
      id: 'dynamics',
      title: 'Dynamics',
      description: 'Forces and Newton’s laws of motion: applications to particles and systems in various contexts.'
    },
    {
      id: 'work-energy',
      title: 'Work and Energy',
      description: 'Work, kinetic and potential energy, conservative forces, and the conservation of mechanical energy.'
    }
  ],
  resources: {
    'review': [],
    'kinematics': [],
    'dynamics': [],
    'work-energy': []
  }
},



  'asd-1': {
    id: 'dsa-1',
    name: 'Algorithms & Data Structures I',
    subtitle: 'First Semester, Year 1',
    description: 'Fundamentals of algorithmic problem-solving: structured programming, arrays, and modular design through procedures and functions.',
    chapters: [
      {
        id: 'intro-algorithms',
        title: 'Introduction to Algorithms',
        description: 'Basic concepts, algorithm definition, properties, and general design principles.'
      },
      {
        id: 'algorithmic-language',
        title: 'The Algorithmic Language',
        description: 'Pseudocode syntax, control structures, and formal notation for algorithm representation.'
      },
      {
        id: 'arrays',
        title: 'Arrays',
        description: 'Data storage using arrays: declaration, initialization, traversal, and basic operations.'
      },
      {
        id: 'procedures-functions',
        title: 'Procedures and Functions',
        description: 'Modular programming with procedures and functions: parameters, scope, and reusability.'
      }
    ],
    resources: {
      'intro-algorithms': [],
      'algorithmic-language': [],
      'arrays': [],
      'procedures-functions': []
    }
  },
  


  'english-1': {
    id: 'english-1',
    name: 'English I',
    subtitle: 'First Semester, Year 1',
    description: 'Development of academic communication skills with a focus on writing, organization, and time management for effective university learning.',
    chapters: [
      {
        id: 'soft-skills',
        title: 'Soft Skills for Academic Success',
        description: 'Academic writing, note-taking strategies, time management techniques, presentation skills, and effective study habits.'
      }
    ],
    resources: {
      'soft-skills': []
    }
  }
  ,



  'history-math-1': {
    id: 'history-of-mathematics',
    name: 'History of Mathematics',
    subtitle: 'First Semester, Year 1',
    description: 'Exploration of mathematics across historical periods through project-based learning, from ancient origins to modern developments.',
    chapters: [
      {
        id: 'historical-projects',
        title: 'Student Research Projects',
        description: 'Investigations and presentations covering key eras in the history of mathematics: Babylonian, Greek, Islamic, Renaissance, and modern contributions.'
      }
    ],
    resources: {
      'historical-projects': []
    }
  }
  ,

};



