import { Tags } from 'lucide-react';
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
          title: 'Real Numbers Textbook',
          description: 'Complete formal treatment of real number axioms, completeness, and topological properties with proofs and examples.',
          meta: { pages: '65 pages', tags: 'Axioms • Absolute Value • Integer Part • Sup/Inf • Topology' },
          link: '/Pdfs/Year 1/S1/Analysis 1/Textbooks/real numbers textbook.pdf',
          
        },

        {
          id: 'rn-problem-set',
          type: 'problem-set',
          title: 'Problem Set #0 (Inequalities)',
          description: '15 exercises on very important real identities.',
          meta: { difficulty: 'Difficulty: 4.8/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S1/Analysis 1/Problem Sheets/Exercise set 1 - 2024-2025 (1).pdf',
          solutionsLink: '/Pdfs/Year 1/S1/Analysis 1/Solutions/Problem_Set__1_Solutions.pdf'
        },

        {
          id: 'rn-problem-set',
          type: 'problem-set',
          title: 'Problem Set #1',
          description: '14 carefully graded problems on absolute value, integer part, bounded sets, completeness, and applications of supremum/infimum.',
          meta: { difficulty: 'Difficulty: 4.2/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S1/Analysis 1/Problem Sheets/Exercise set 2 - 2024-2025.pdf',
          solutionsLink: '/Pdfs/Year 1/S1/Analysis 1/Solutions/Problem_Set__2_Solutions.pdf'
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
          title: 'Complex Numbers Textbook',
          description: 'This textbook introduces complex numbers from their algebraic properties to their representation on the complex plane. It covers polar and exponential forms, Euler’s identities, solving equations, and finding n-th roots, providing a clear and structured approach to these fundamental concepts.',
          meta: { pages: '48 pages', tags: 'Polar Form • Roots • Equations' }
        },
        {
          id: 'cn-problem-set',
          type: 'problem-set',
          title: 'Problem Set #2',
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
          meta: { pages: '48 pages', tags: 'Groups • Rings • Fields' }
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
          meta: { videos: '14 videos', duration: '5.8h total' }
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
          id: 'combi-lecture-notes',
          type: 'lecture-notes',
          title: 'Combinatorial Analysis Textbook',
          description: 'Comprehensive guide to fundamental counting techniques: permutations, combinations, arrangements with/without repetition, binomial coefficients, and problem-solving strategies. Includes definitions, examples, and exercises.',
          meta: { pages: '28 pages', tags: 'Permutations • Combinations • Binomial • Repetition' }
        },
        {
          id: 'combi-problem-set',
          type: 'problem-set',
          title: 'Problem Set #1',
          description: '15+ problems graded by difficulty to test your mastery of permutations, combinations, and variations — with detailed solutions included. Practice both theory and real-world scenarios.',
          meta: { difficulty: '4.4/5', solutions: 'Solutions Included' }
        },
        {
          id: 'combi-extras',
          type: 'extras',
          title: 'Additional Practice',
          description: 'External resources including interactive combinatorics calculators, visual examples, and challenging problems for deeper exploration.',
          meta: { resources: '3 external resources', type: 'Interactive & Textual' }
        },
        {
          id: 'combi-video-playlist',
          type: 'video-playlist',
          title: 'Mastering Counting Techniques',
          description: 'Video series covering basic to advanced counting methods with step-by-step explanations, real-life problems, and visual guides.',
          meta: { videos: '7 videos', duration: '3.2h total' }
        }
],
      'inclusion-exclusion': [
        {
          id: 'ie-lecture-notes',
          type: 'lecture-notes',
          title: 'Inclusion-Exclusion & PHP Textbook',
          description: 'Formal treatment of the inclusion-exclusion principle with step-by-step proofs and examples, covering 2-set and 3-set cases, general formula, and advanced extensions. Includes a dedicated section on the Pigeonhole Principle with applications.',
          meta: { pages: '19 pages', tags: 'Inclusion-Exclusion • Pigeonhole Principle • Counting Overlaps' }
        },
        {
          id: 'ie-problem-set',
          type: 'problem-set',
          title: 'Problem Set #2',
          description: 'Challenge yourself with carefully selected problems involving overlapping sets, derangements, and creative uses of the pigeonhole principle. Full solutions provided.',
          meta: { difficulty: '4.5/5', solutions: 'Solutions Included' }
        },
        {
          id: 'ie-extras',
          type: 'extras',
          title: 'Interactive Practice',
          description: 'External tools, articles, and exercises for mastering inclusion-exclusion and the pigeonhole principle beyond the classroom.',
          meta: { resources: '3 external resources', type: 'Visual & Textual' }
        },
        {
          id: 'ie-video-playlist',
          type: 'video-playlist',
          title: 'Inclusion-Exclusion & PHP Explained',
          description: 'Clear and engaging video tutorials walking through the logic, derivation, and applications of both the inclusion-exclusion principle and the pigeonhole principle.',
          meta: { videos: '6 videos', duration: '2.4h total' }
        }
      ],
      'graph-theory-intro': [
        {
          id: 'gt-lecture-notes',
          type: 'lecture-notes',
          title: 'Graph Theory Fundamentals',
          description: 'Comprehensive notes introducing the core concepts of graph theory: graphs, vertices, edges, degree, adjacency, paths, cycles, and connectedness — with visual examples and formal definitions.',
          meta: { pages: '17 pages', tags: 'Graphs • Degree • Paths • Connectivity' }
        },
        {
          id: 'gt-problem-set',
          type: 'problem-set',
          title: 'Problem Set #3',
          description: 'Practice problems on simple and multigraphs, degree sequences, paths, and connectivity — ranging from basic to advanced difficulty, with full solutions.',
          meta: { difficulty: '4.4/5', solutions: 'Solutions Included' }
        },
        {
          id: 'gt-extras',
          type: 'extras',
          title: 'Visual Graph Tools',
          description: 'External tools and interactive resources to explore graph concepts through drag-and-drop visualizations and puzzles.',
          meta: { resources: '3 external resources', type: 'Interactive & Visual' }
        },
        {
          id: 'gt-video-playlist',
          type: 'video-playlist',
          title: 'Graph Theory Made Easy',
          description: 'Introductory video series walking through graph types, degree properties, paths, and basic theorems with illustrative examples.',
          meta: { videos: '7 videos', duration: '3.1h total' }
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
    
      'fundamentals': [
        {
          id: 'stats-fundamentals-lecture-notes',
          type: 'lecture-notes',
          title: 'Fundamentals of Statistics',
          description: 'Clear introduction to key statistical concepts: types of data, populations vs. samples, parameters vs. statistics, and classifications of variables — with examples and definitions.',
          meta: { pages: '15 pages', tags: 'Populations • Variables • Descriptive vs. Inferential' }
        },
        {
          id: 'stats-fundamentals-problem-set',
          type: 'problem-set',
          title: 'Problem Set #1',
          description: 'Foundational exercises on recognizing data types, sampling methods, and distinguishing between populations and samples.',
          meta: { difficulty: '3.5/5', solutions: 'Solutions Included' }
        },
        {
          id: 'stats-fundamentals-extras',
          type: 'extras',
          title: 'Introductory Tools',
          description: 'External links and interactive quizzes to test your understanding of statistics basics.',
          meta: { resources: '3 external resources', type: 'Textual & Interactive' }
        },
        {
          id: 'stats-fundamentals-videos',
          type: 'video-playlist',
          title: 'Understanding Statistics Basics',
          description: 'Short videos covering the goals and structure of statistics, data classification, and basic terminology.',
          meta: { videos: '6 videos', duration: '2.1h total' }
        }
      ],
      'numerical-data': [
        {
          id: 'stats-numerical-lecture-notes',
          type: 'lecture-notes',
          title: 'Representing Numerical Data',
          description: 'Detailed notes on organizing, summarizing, and visualizing data using tables, histograms, bar charts, and pie charts, along with measures like mean, median, mode, and range.',
          meta: { pages: '20 pages', tags: 'Tables • Histograms • Mean/Median/Mode' }
        },
        {
          id: 'stats-numerical-problem-set',
          type: 'problem-set',
          title: 'Problem Set #2',
          description: 'Exercises covering frequency tables, graphical representation, and descriptive measures of central tendency and dispersion.',
          meta: { difficulty: '4.1/5', solutions: 'Solutions Included' }
        },
        {
          id: 'stats-numerical-extras',
          type: 'extras',
          title: 'Interactive Charts & Tools',
          description: 'External platforms to create histograms, bar plots, and explore how statistical measures change with data.',
          meta: { resources: '3 external resources', type: 'Visual & Interactive' }
        },
        {
          id: 'stats-numerical-videos',
          type: 'video-playlist',
          title: 'Visualizing & Summarizing Data',
          description: 'Step-by-step walkthroughs of data representation techniques and computation of descriptive measures.',
          meta: { videos: '8 videos', duration: '3.3h total' }
        }
      ],
      'two-way-stats': [
        {
          id: 'stats-two-way-lecture-notes',
          type: 'lecture-notes',
          title: 'Two-Way Tables and Bivariate Data',
          description: 'Complete notes on analyzing two-variable data using contingency tables, joint/marginal/conditional distributions, and detecting independence between variables.',
          meta: { pages: '18 pages', tags: 'Contingency Tables • Conditional Distribution • Independence' }
        },
        {
          id: 'stats-two-way-problem-set',
          type: 'problem-set',
          title: 'Problem Set #3',
          description: 'Practice problems on constructing and interpreting two-way tables, computing conditional distributions, and testing for independence.',
          meta: { difficulty: '4.2/5', solutions: 'Solutions Included' }
        },
        {
          id: 'stats-two-way-extras',
          type: 'extras',
          title: 'Bivariate Data Tools',
          description: 'Interactive visualizations and external readings on contingency tables and real-life applications.',
          meta: { resources: '3 external resources', type: 'Interactive & Applied' }
        },
        {
          id: 'stats-two-way-videos',
          type: 'video-playlist',
          title: 'Analyzing Two-Variable Data',
          description: 'Explanatory video series on two-way statistics, with examples involving categorical and numerical data.',
          meta: { videos: '7 videos', duration: '2.9h total' }
        }
      ],
      'intro-probability': [
        {
          id: 'stats-probability-lecture-notes',
          type: 'lecture-notes',
          title: 'Introduction to Probability',
          description: 'Lecture notes on basic probability principles: sample spaces, events, counting techniques, rules of probability, and introductory combinatorics.',
          meta: { pages: '25 pages', tags: 'Sample Spaces • Events • Probability Rules' }
        },
        {
          id: 'stats-probability-problem-set',
          type: 'problem-set',
          title: 'Problem Set #4',
          description: 'Exercises covering probability calculations, event combinations, and applications of the addition and multiplication rules.',
          meta: { difficulty: '4.5/5', solutions: 'Solutions Included' }
        },
        {
          id: 'stats-probability-extras',
          type: 'extras',
          title: 'Probability Tools',
          description: 'Simulations, visual tools, and puzzles to build intuition about randomness and probability.',
          meta: { resources: '3 external resources', type: 'Simulations & Textual' }
        },
        {
          id: 'stats-probability-videos',
          type: 'video-playlist',
          title: 'Intro to Probability',
          description: 'Conceptual and practical videos on probability basics, with real-world problem-solving demonstrations.',
          meta: { videos: '9 videos', duration: '4.0h total' }
        }
      ]
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
    'review': [
    {
      id: 'phy-review-lecture-notes',
      type: 'lecture-notes',
      title: 'Prerequisite Review Notes',
      description: 'Covers key mathematical tools and fundamental physics concepts: units, dimensional analysis, and vector operations in \u211D\u00b2/\u211D\u00b3.',
      meta: { pages: '14 pages', tags: 'Units • Vectors • Kinematics Basics' }
    },
    {
      id: 'phy-review-problem-set',
      type: 'problem-set',
      title: 'Intro Mechanics Problems',
      description: 'Conceptual and calculation-based problems on vectors, unit conversions, and basic physical quantities.',
      meta: { difficulty: '3.5/5', solutions: 'Solutions Included' }
    },
    {
      id: 'phy-review-extras',
      type: 'extras',
      title: 'Vector Tools & Simulations',
      description: 'External vector visualizers and unit converters to reinforce understanding of basics.',
      meta: { resources: '3 external resources', type: 'Interactive & Visual' }
    },
    {
      id: 'phy-review-videos',
      type: 'video-playlist',
      title: 'Foundation Refresher',
      description: 'Short videos on the essentials of vectors, unit systems, and physical quantities.',
      meta: { videos: '5 videos', duration: '1.4h total' }
    }
  ],

  'kinematics': [
    {
      id: 'phy-kinematics-lecture-notes',
      type: 'lecture-notes',
      title: 'Kinematics in 1D & 2D',
      description: 'Detailed treatment of position, velocity, acceleration, and motion graphs with examples in one and two dimensions.',
      meta: { pages: '21 pages', tags: 'Motion Graphs • Vectors • Acceleration' }
    },
    {
      id: 'phy-kinematics-problem-set',
      type: 'problem-set',
      title: 'Motion Practice',
      description: '20 problems including free-fall, projectile motion, and velocity-time analysis.',
      meta: { difficulty: '4.2/5', solutions: 'Solutions Included' }
    },
    {
      id: 'phy-kinematics-extras',
      type: 'extras',
      title: 'Motion Simulations',
      description: 'Interactive projectile and motion simulators with real-time graphs and parameters.',
      meta: { resources: '3 external resources', type: 'Visual & Interactive' }
    },
    {
      id: 'phy-kinematics-videos',
      type: 'video-playlist',
      title: 'Kinematics Masterclass',
      description: 'Step-by-step video lessons on 1D/2D motion, projectiles, and motion under gravity.',
      meta: { videos: '8 videos', duration: '3.3h total' }
    }
  ],

  'dynamics': [
    {
      id: 'phy-dynamics-lecture-notes',
      type: 'lecture-notes',
      title: 'Newton’s Laws Explained',
      description: 'Full coverage of Newton’s laws, forces, free-body diagrams, and applications in real-world systems.',
      meta: { pages: '25 pages', tags: 'Forces • N1, N2, N3 • FBD' }
    },
    {
      id: 'phy-dynamics-problem-set',
      type: 'problem-set',
      title: 'Dynamics Challenges',
      description: 'From inclined planes to tension and friction problems—challenging applications of Newtonian mechanics.',
      meta: { difficulty: '4.5/5', solutions: 'Solutions Included' }
    },
    {
      id: 'phy-dynamics-extras',
      type: 'extras',
      title: 'Force Simulations',
      description: 'External simulations demonstrating tension, normal forces, and dynamic motion scenarios.',
      meta: { resources: '3 external resources', type: 'Interactive' }
    },
    {
      id: 'phy-dynamics-videos',
      type: 'video-playlist',
      title: 'Forces in Action',
      description: 'Comprehensive playlist visualizing Newton’s laws and their problem-solving applications.',
      meta: { videos: '10 videos', duration: '4.5h total' }
    }
  ],

  'work-energy': [
    {
      id: 'phy-energy-lecture-notes',
      type: 'lecture-notes',
      title: 'Work & Energy Notes',
      description: 'Concepts of work, kinetic and potential energy, conservative forces, and mechanical energy conservation.',
      meta: { pages: '22 pages', tags: 'Work • Kinetic/Potential Energy • Conservation' }
    },
    {
      id: 'phy-energy-problem-set',
      type: 'problem-set',
      title: 'Work & Energy Problems',
      description: 'Practice problems on work-energy theorem, gravitational potential energy, and systems of forces.',
      meta: { difficulty: '4.1/5', solutions: 'Solutions Included' }
    },
    {
      id: 'phy-energy-extras',
      type: 'extras',
      title: 'Interactive Energy Explorers',
      description: 'Explore conservation of energy through simulations and animated problems.',
      meta: { resources: '3 external resources', type: 'Visual & Interactive' }
    },
    {
      id: 'phy-energy-videos',
      type: 'video-playlist',
      title: 'Energy Concepts in Physics',
      description: 'High-quality lessons on mechanical energy, conservative forces, and energy bar charts.',
      meta: { videos: '7 videos', duration: '3.7h total' }
    }
  ]
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
      'intro-algorithms': [
        {
          id: 'dsa-intro-lecture-notes',
          type: 'lecture-notes',
          title: 'Introduction to Algorithms',
          description: 'Defines algorithms, their properties (finiteness, effectiveness, determinism), and introduces the stages of algorithm development.',
          meta: { pages: '16 pages', tags: 'Definition • Properties • Design Steps' }
        },
        {
          id: 'dsa-intro-problem-set',
          type: 'problem-set',
          title: 'Fundamentals Problem Sheet',
          description: 'Practice questions on algorithm understanding, flow of execution, and identifying basic components of a problem.',
          meta: { difficulty: '3.6/5', solutions: 'Solutions Included' }
        },
        {
          id: 'dsa-intro-extras',
          type: 'extras',
          title: 'External Resources',
          description: 'Interactive websites, explanations, and PDFs introducing fundamental algorithm concepts.',
          meta: { resources: '3 external resources', type: 'Visual & Conceptual' }
        },
        {
          id: 'dsa-intro-videos',
          type: 'video-playlist',
          title: 'What is an Algorithm?',
          description: 'Clear and engaging videos explaining what algorithms are and how they’re used in computer science and problem solving.',
          meta: { videos: '5 videos', duration: '2.1h total' }
        }
      ],
    
      'algorithmic-language': [
        {
          id: 'dsa-lang-lecture-notes',
          type: 'lecture-notes',
          title: 'The Algorithmic Language',
          description: 'Pseudocode rules and syntax: variables, assignments, input/output, conditionals, and loops. Essential for writing and reading algorithms.',
          meta: { pages: '19 pages', tags: 'Pseudocode • Control Flow • Syntax' }
        },
        {
          id: 'dsa-lang-problem-set',
          type: 'problem-set',
          title: 'Pseudocode Practice',
          description: 'Exercises on interpreting and writing pseudocode using basic control structures (if, while, for).',
          meta: { difficulty: '4.0/5', solutions: 'Solutions Included' }
        },
        {
          id: 'dsa-lang-extras',
          type: 'extras',
          title: 'Code Practice Tools',
          description: 'Online pseudocode runners and exercises for control structures and variable handling.',
          meta: { resources: '3 external resources', type: 'Interactive & Code' }
        },
        {
          id: 'dsa-lang-videos',
          type: 'video-playlist',
          title: 'Learn Pseudocode',
          description: 'Covers all algorithmic structures with examples and visual execution of logic flow.',
          meta: { videos: '6 videos', duration: '3.0h total' }
        }
      ],
    
      'arrays': [
        {
          id: 'dsa-arrays-lecture-notes',
          type: 'lecture-notes',
          title: 'Working with Arrays',
          description: 'Covers declaration, initialization, access, traversal, and storage of values in 1D arrays with examples.',
          meta: { pages: '18 pages', tags: 'Indexing • Traversal • Basic Ops' }
        },
        {
          id: 'dsa-arrays-problem-set',
          type: 'problem-set',
          title: 'Array Manipulation',
          description: 'From basic access and updates to reversing arrays and finding min/max elements with pseudocode.',
          meta: { difficulty: '4.2/5', solutions: 'Solutions Included' }
        },
        {
          id: 'dsa-arrays-extras',
          type: 'extras',
          title: 'Array Tools & Visualizers',
          description: 'Interactive visual tools to simulate array traversal, updates, and sorting behavior.',
          meta: { resources: '3 external resources', type: 'Interactive & Visual' }
        },
        {
          id: 'dsa-arrays-videos',
          type: 'video-playlist',
          title: 'Mastering Arrays',
          description: 'Step-by-step lessons and visualizations for array usage, logic patterns, and algorithm implementation.',
          meta: { videos: '7 videos', duration: '3.5h total' }
        }
      ],
    
      'procedures-functions': [
        {
          id: 'dsa-procfunc-lecture-notes',
          type: 'lecture-notes',
          title: 'Procedures & Functions',
          description: 'Modular programming with subroutines: definitions, parameter passing, return values, and scope concepts.',
          meta: { pages: '20 pages', tags: 'Modularity • Parameters • Return' }
        },
        {
          id: 'dsa-procfunc-problem-set',
          type: 'problem-set',
          title: 'Functions in Action',
          description: 'Exercises on building and calling procedures/functions, parameter scope, and dry-running modular code.',
          meta: { difficulty: '4.3/5', solutions: 'Solutions Included' }
        },
        {
          id: 'dsa-procfunc-extras',
          type: 'extras',
          title: 'Function Simulators',
          description: 'External tools to visualize scope, recursion, and modular logic.',
          meta: { resources: '3 external resources', type: 'Interactive & Simulation' }
        },
        {
          id: 'dsa-procfunc-videos',
          type: 'video-playlist',
          title: 'Modular Thinking',
          description: 'Videos that explain functions, procedures, and modular thinking in problem solving.',
          meta: { videos: '6 videos', duration: '2.7h total' }
        }
      ]
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
      'soft-skills': [
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
      'historical-projects': [
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
  }
  ,

};



