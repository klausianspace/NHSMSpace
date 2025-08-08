import { Tags } from 'lucide-react';
import { ModuleData } from '../types/module'; 
import { ExtraResourceItem } from '../types/module';





export const modulesData: Record<string, ModuleData> = {
  'analysis-1': {
    id: 'analysis-1',
    name: 'Analysis I',
    subtitle: 'First Semester, Year 1',
    description: 'This module is covers the real numbers concepts such as \u211D`s properties, complex numbers, real sequences, functions ... , it is probably the most important module in this year because of it contains fundamental concepts for almost all mathematical branches',
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
        description: 'Derivatives, mean value theorems, L\'H\u00f4pital\'s rule, convexity and concavity.'
      }
    ],
    resources: {
      'real-numbers': [
        {
          id: 'rn-lecture-notes',
          type: 'lecture-notes',
          title: 'Real Numbers Textbook',
          description: 'Complete formal treatment of real number axioms, completeness, and topological properties with proofs and examples.',
          meta: { pages: '17 pages', tags: 'Axioms • Absolute Value • Integer Part • Sup/Inf • Topology' },
          link: '/Pdfs/Year 1/S1/Analysis 1/Textbooks/real numbers textbook.pdf',
          
        },

        {
          id: 'rn-problem-set',
          type: 'problem-set',
          title: 'Problem Set #1 (Inequalities)',
          description: '15 exercises on very important real identities.',
          meta: { difficulty: 'Difficulty: 5/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S1/Analysis 1/Problem Sheets/Exercise set 1 - 2024-2025 (1).pdf',
          solutionsLink: '/Pdfs/Year 1/S1/Analysis 1/Solutions/Problem_Set__1_Solutions.pdf'
        },

        {
          id: 'rn-problem-set',
          type: 'problem-set',
          title: 'Problem Set #2',
          description: '14 carefully graded problems on absolute value, integer part, bounded sets, completeness, and applications of supremum/infimum.',
          meta: { difficulty: 'Difficulty: 4.2/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S1/Analysis 1/Problem Sheets/Exercise set 2 - 2024-2025.pdf',
          solutionsLink: '/Pdfs/Year 1/S1/Analysis 1/Solutions/Problem_Set__2_Solutions.pdf'
        },
        
        {
          id: 'rn-videos',
          type: 'video-playlist',
          title: 'Les Nombres Réels',
          description: 'Simple intuitive explanations for the lecture concepts and some standard applications.',
          meta: { videos: '11 videos', duration: '7.7h total' },
          link: "https://www.youtube.com/playlist?list=PLgKSr97JkHD5bolvStigFu3J5iA4DepKg",
          thumbnail: "https://i.ytimg.com/vi/kUII8zaNHR4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDxLQvMwQZm0Hfjslu8nddYxs9jtA"
        },

        {
          id: 'rn-videos',
          type: 'video-playlist',
          title: 'Mr Benbachir’s Playlist (Inequalities)',
          description: 'This playlist covers video solutions for the hard inequalities from problem sheet #1 ',
          meta: { videos: '6 videos', duration: '1.5h total' },
          link: "https://www.youtube.com/playlist?list=PLIznM09WVcDT7tCrOtblEDAio-KLL4Xk_",
          thumbnail: "https://i.ytimg.com/vi/mDH52xVLsqc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCqI5OcB5C-l-lE8enPmpvRCADEug"
        },


        {
          id: 'rn-videos',
          type: 'video-playlist',
          title: 'Mr Benbachir’s Playlist (Real Numbers)',
          description: 'Check Absolute Value, Intger Part and Extremums playlists',
          meta: { videos: '6 videos', duration: '1.5h total' },
          link: "https://www.youtube.com/@maamarbenbachir/playlists",
          thumbnail: "https://i.ytimg.com/vi/EzX-Mbacufs/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBIffq1s-wUdbWDDNOXbc6gWg1V9w"
        },
      ],
      'complex-numbers': [
        {
          id: 'cn-lecture-notes',
          type: 'lecture-notes',
          title: 'Complex Numbers Textbook',
          description: 'This textbook introduces complex numbers from their algebraic properties to their representation on the complex plane. It covers polar and exponential forms, Euler’s identities, solving equations, and finding n-th roots, providing a clear and structured approach to these fundamental concepts.',
          meta: { pages: '5 pages', tags: 'Polar Form • Roots • Equations' },
          link: '/Pdfs/Year 1/S1/Analysis 1/Textbooks/Complex Numbers.pdf',
        },
        {
          id: 'cn-problem-set',
          type: 'problem-set',
          title: 'Problem Set #3',
          description: '15 problems covering modulus, argument, roots of unity, and geometric interpretations (+2 extra exercises on topology of \u211D).',
          meta: { difficulty: 'Difficulty: 3.8/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S1/Analysis 1/Problem Sheets/Exercise set 3.pdf',
          solutionsLink: '/Pdfs/Year 1/S1/Analysis 1/Solutions/Problem_Set__2_Solutions.pdf'
          
        },
        
        {
          id: 'cn-videos',
          type: 'video-playlist',
          title: 'Mastering \u2102',
          description: 'Video solutions for the intersting exercises from the problem sheet #3',
          meta: { videos: '8 videos', duration: '1.5h total' },
          thumbnail: "https://i.ytimg.com/vi/htwwLHSYhu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAtTJPStXi-pF5CIhsCbruwBkTm1Q",
          link: "https://www.youtube.com/playlist?list=PLIznM09WVcDQGmbS4_mJpX8PMDgaqAUiH"
        }
      ],
      'sequences': [
        {
          id: 'seq-lecture-notes',
          type: 'lecture-notes',
          title: 'Sequences in \u211D',
          description: 'Formal treatment of convergence, subsequences, and completeness with 50+ worked examples.',
          meta: { pages: '72 pages', tags: 'Convergence • B-W • Cauchy' },
          link: "/Pdfs/Year 1/S1/Analysis 1/Textbooks/Chapter_3_Sequences__.pdf"
        },
        {
          id: 'seq-problem-set',
          type: 'problem-set',
          title: 'Problem Set #4',
          description: '20 problems on sequence limits, monotonicity, and applications of Bolzano-Weierstrass.',
          meta: { difficulty: 'Difficulty: 4.5/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S1/Analysis 1/Problem Sheets/Exercise set 4.pdf',
          solutionsLink: '/Pdfs/Year 1/S1/Analysis 1/Solutions/sol 4.pdf'
        },
        

        {
          id: 'seq-videos',
          type: 'video-playlist',
          title: 'Suites Réels',
          description: 'Video series with detailed explanations and visualizations of sequence convergence and properties with exercises.',
          meta: { videos: '19 videos', duration: '4.5h total' },
          link: "https://www.youtube.com/playlist?list=PL20E5F69BB88FEDEE",
          thumbnail: "https://i.ytimg.com/vi/eKWRb_wLczo/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLAy0qyw7iXmMie80Oj6UEF-L0c7uA"
        },


        {
          id: 'seq-videos',
          type: 'video-playlist',
          title: 'Cauchy Sequences',
          description: 'A video lecture on Cauchy sequences with applications.',
          meta: { videos: '1 video', duration: '35min total' },
          link: "https://youtu.be/0KUubPl8S3k?si=WSk_S6Bd7cwPMcqP",
          thumbnail: "https://i.ytimg.com/vi/2WIiJ3Kt6Xs/hqdefault.jpg?sqp=-oaymwFBCPYBEIoBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGHIgSSg3MA8=&rs=AOn4CLCvLnv44MLSQb1qyRA68A7lvZaWRQ"
        },





        {
          id: 'seq-videos',
          type: 'video-playlist',
          title: 'Mr Benbachir’s Playlist',
          description: 'Covers the solutions for almost problem sheet #4 exercises and other intersting theorems and proofs',
          meta: { videos: '25 video', duration: '8h total' },
          link: "https://www.youtube.com/playlist?list=PLIznM09WVcDTpwwjMN1hex42xQnZbQYYr",
          thumbnail: "https://i.ytimg.com/vi/lKxF4Rd2lfg/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCqL58Mzo3hNe2jyNOhaJYVtXc32w"
        }

      ],
      'limits': [
        {
          id: 'lim-lecture-notes',
          type: 'lecture-notes',
          title: 'Limits & Continuity',
          description: 'Rigorous treatment of limits, continuity, and uniform continuity with graphical interpretations.',
          meta: { pages: '29 pages', tags: '\u03b5-\u03b4 • IVT • Uniform Continuity' },
          link: "/Pdfs/Year 1/S1/Analysis 1/Textbooks/limits and continuity.pdf"
        },
        {
          id: 'lim-problem-set',
          type: 'problem-set',
          title: 'Problem Sheet #5',
          description: '17 problems ranging from basic limit proofs to advanced uniform continuity applications.',
          meta: { difficulty: 'Difficulty: 4.7/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S1/Analysis 1/Problem Sheets/Exercise set 5.pdf',
          solutionsLink: '/Pdfs/Year 1/S1/Analysis 1/Solutions/functions .pdf'
        },
        

        {
          id: 'lim-videos',
          type: 'video-playlist',
          title: 'Limits & Continuity course',
          description: 'Comprehensive video series with animations and examples of limit applications.',
          meta: { videos: '22 videos', duration: '3.8h total' },
          link: "https://youtube.com/playlist?list=PL02B78D753AFA8098&si=i7b_oqgLtTLQhS0i",
          thumbnail: "https://i.ytimg.com/vi/TAUg4HL5fHs/hqdefault.jpg?sqp=-oaymwFBCPYBEIoBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGFQgYChlMA8=&rs=AOn4CLCv68R6qDXTt61LTfCae54pzKth_A"
        },


        {
          id: 'lim-videos',
          type: 'video-playlist',
          title: 'Mr Benbachir’s Playlist',
          description: 'Covers the solutions for almost problem sheet #5 exercises and other intersting theorems and proofs (Don’t watch differentiability videos)',
          meta: { videos: '32 video', duration: '8h total' },
          link: "https://youtube.com/playlist?list=PLIznM09WVcDQ-Gbi4tI-arRKSIfDrU1Ur&si=xgvBHSBK3sPN1KOu",
          thumbnail: "https://i.ytimg.com/vi/lKxF4Rd2lfg/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCqL58Mzo3hNe2jyNOhaJYVtXc32w"
        }

      ],
      'differentiability': [
        {
          id: 'diff-lecture-notes',
          type: 'lecture-notes',
          title: 'Calculus of Derivatives',
          description: 'From basic differentiation rules to Taylor series with error terms, including proofs of all major theorems.',
          meta: { pages: '68 pages', tags: 'MVT • L\'H\u00f4pital • Taylor' },
          link: "/Pdfs/Year 1/S1/Analysis 1/Textbooks/differenitability.pdf"
        },
        {
          id: 'diff-problem-set',
          type: 'problem-set',
          title: 'Problem Sheet #6',
          description: '22 problems covering computational techniques, MVT applications, and Taylor polynomial estimation.',
          meta: { difficulty: 'Difficulty: 4.3/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S1/Analysis 1/Problem Sheets/Exercise set 6.pdf',
          solutionsLink: '/Pdfs/Year 1/S1/Analysis 1/Solutions/differentiability .pdf'
        },
        


        {
          id: 'diff-videos',
          type: 'video-playlist',
          title: 'Dérivée d’une fonction',
          description: 'Video lectures focusing on applications and geometric interpretations of derivatives.',
          meta: { videos: '8 videos', duration: '4.5h total' },
          link : "https://youtube.com/playlist?list=PLD702C0EC85AB2A5A&si=Sj3V8ybap_fzUSYh",
          thumbnail : "https://i.ytimg.com/vi/5wpc0nsbBm4/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYTSBlKF8wDw==&rs=AOn4CLCwVfX17ybcKQsrRVwjqI-LOawgUw"
        },


        {
          id: 'diff-videos',
          type: 'video-playlist',
          title: 'Mr Benbachir’s Playlist',
          description: 'Covers the solutions for almost problem sheet #6 exercises and other intersting theorems and proofs (Don’t watch limits videos)',
          meta: { videos: '32 video', duration: '8h total' },
          link: "https://youtube.com/playlist?list=PLIznM09WVcDQ-Gbi4tI-arRKSIfDrU1Ur&si=xgvBHSBK3sPN1KOu",
          thumbnail: "https://i.ytimg.com/vi/lKxF4Rd2lfg/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCqL58Mzo3hNe2jyNOhaJYVtXc32w"
        }
      ]
    },

    extraResources: {
      recommendedBooks: [
        {
          title: "Problemes d'Analyse",
          author: "Wieslawa J. Kaczor, Maria T. Nowak",
          description: "A rigorous real analysis problem book with challenging exercises and detailed solutions. Very similar in difficulty and style to NHSM exam problems, making it excellent for serious practice and deep understanding.",
          link: "/Pdfs/Year 1/S1/Analysis 1/Books/Problèmes d'analyse I.pdf",
          coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTJ14urToNf0GLltIXlllWkVn1qiNVwASQw&s" 
        },
        {
          title: "Analyse 1",
          author: "JM Monier",
          description: "Covers almost all the NHSM analysis 1 program with solved problems.",
          link: "/Pdfs/Year 1/S1/Analysis 1/Books/[J.M.Monier]_analyse1_mpsi(BookFi).pdf",
          coverImage: "https://img.leboncoin.fr/api/v1/lbcpb1/images/60/ba/17/60ba177a2cd03e70c426800cc34124677a91c1e8.jpg?rule=ad-large"
        },


        {
          title: "Analyse 1 EXO7",
          author: "EXO7",
          description: "A clear and visually appealing introduction to first-year analysis, this resource stands out with its simple explanations, colorful layout, and helpful graphs—perfect for building strong fundamentals with ease.",
          link: "/Pdfs/Year 1/S1/Analysis 1/Books/livre-analyse-1.pdf",
          coverImage: "https://lh3.googleusercontent.com/proxy/rm-4POGMAg00Jhq_YJtiQXVOQKOFXxyI5-XhZeDyPPXIxy8ys8gwc2cOjvFYlL7Ygr8bopBpB-pGdUmZm-U"
        },


        {
          title: "Analysis 1&2 Textbook",
          author: "Maamar Benbachir",
          description: "Mr Benbachir's official textbook for analysis 1 and 2 latest version.",
          link: "/Pdfs/Year 1/S1/Analysis 1/Books/Analysis 1- 2 (2).pdf",
          coverImage: "Analysis 1- 2 (2)"
        },
      ],
      pastExams: [
        {
          title: "2024 Final Exam",
          year: "2024",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/Analysis 1/Exams/Final Exam - Correction Promo 4.pdf"
        },

        {
          title: "2024 Midterm Exam",
          year: "2024",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/Analysis 1/Exams/Midterm Exam - Correction Promo 4.pdf"
        },
        {
          title: "2023 Final Exam",
          year: "2023",
          description: "Detailed solutions to all problems",
          link: "/Pdfs/Year 1/S1/Analysis 1/Exams/Final Exam - Correction Promo 3.pdf"
        },

        {
          title: "2023 Catch-up Exam",
          year: "2023",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/Analysis 1/Exams/Catchup Exam - Promo 3.pdf"
        },

        {
          title: "2022 Final Exam",
          year: "2022",
          description: "Detailed solutions to all problems",
          link: "/Pdfs/Year 1/S1/Analysis 1/Exams/Final Exam - Correction Promo 2.pdf"
        },

        {
          title: "2022 Midterm Exam",
          year: "2022",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/Analysis 1/Exams/MidTerm 1 Correction - Promo 2.pdf"
        },

        {
          title: "2022 Replacement Exam",
          year: "2022",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/Analysis 1/Exams/Replacement Exam - Corection Promo 2.pdf"
        },
      ],
      usefulWebsites: [
        {
          title: "Bibmath: Real Numbers",
          description: "Solved exercises on real numbers chapter",
          link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/analyse/topologie/reels&type=fexo"
        },

        {
          title: "Bibmath: Complex Numbers",
          description: "Solved exercises on complex numbers chapter",
          link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=mathsup/feuillesexo/complexes&type=fexo"
        },

        {
          title: "Bibmath: Real Sequences",
          description: "Solved exercises on real sequences chapter",
          link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=mathsup/feuillesexo/suites&type=fexo"
        },

        {
          title: "Bibmath: Real Sequences 2",
          description: "Solved exercises on real sequences chapter",
          link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/analyse/suitesseries/suitenum_prat&type=fexo"
        },

        {
          title: "Bibmath: Limits & Continuity",
          description: "Solved exercises on limits and continuity chapter",
          link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=mathsup/feuillesexo/limitecontinuite&type=fexo"
        },

        {
          title: "Bibmath: Differentiability",
          description: "Solved exercises on differentiabilit chapter",
          link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/analyse/unevariable/derivee&type=fexo"
        },
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
        id: 'mathematical-logic-and-sets',
        title: 'Mathematical Logic',
        description: 'Propositions, logical connectives, truth tables, implications, equivalence, and proof methods and set theory basics.'
      },
      {
        id: 'maps',
        title: 'Maps',
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
      'mathematical-logic-and-sets': [
        {
          id: 'aml-lecture-notes',
          type: 'lecture-notes',
          title: 'Mathemathecal Logic & Sets Textbook',
          description: 'Learn how to reason and prove statements with precision. This chapter covers propositions, logical connectives, truth tables, implications, equivalence, quantifiers, and proof techniques like direct proof, contradiction, and contraposition. And set theory basics, operations and properties.',
          meta: { pages: '12 pages', tags: 'Statements • Truth Tables • Proof Methods • Set Theory' },
          link: "/Pdfs/Year 1/S1/Algebra 1/Textbooks/01. Logic and Sets.pdf",
        },

        {
          id: 'aml-problem-set',
          type: 'problem-set',
          title: 'Problem Set #1',
          description: 'Tackle problems on truth tables, implications, and common proof methods — with complete solutions provided for every exercise to strenghen your reasonning skills.',
          meta: { difficulty: 'Difficulty: 4.3/5', solutions: 'Solutions Not Included (yet)'  },
          link: '/Pdfs/Year 1/S1/Algebra 1/Problem Sheets/Worksheet 1- Mathematical logic and mathematical reasoning (1).pdf',
          

        },

        


        {
          id: 'aml-video-playlist',
          type: 'video-playlist',
          title: 'Logique et Raisonnements',
          description: 'Engaging video series that builds your logical reasoning skills, explains key proof techniques, and walks through core concepts like implications, equivalence, and truth tables and set theory basics.',
          meta: { videos: '7 videos', duration: '3.3h total'  },
          link: "https://youtube.com/playlist?list=PLVNLDmkJxFFTFru5ltmA9rglQpKWEf7ko&si=o8V6z4F3YdYEOFjc",
          thumbnail: "https://i.ytimg.com/vi/s-KNzRmaP_k/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBWCQJSYhmtM9NeB94hB8IYZjXtvQ"
        },


      ],
      'maps': [
        {
          id: 'sm-lecture-notes',
          type: 'lecture-notes',
          title: 'Maps Textbook',
          description: 'Formal introduction to maps—including injections, surjections, and bijections, direct and indirect images and inverse maps with clear definitions and worked examples.',
          meta: { pages: '13 pages', tags: 'Set Operations • (In)direct image • Injective , Surjective , Bijective • Inverse Maps ' },
          link: "/Pdfs/Year 1/S1/Algebra 1/Textbooks/maps (1).pdf",
        },
        {
          id: 'sm-problem-set',
          type: 'problem-set',
          title: 'Problem Set #2',
          description: '20 exercises covering set operations, Venn diagrams, functions, and mappings—designed to build mastery through progressive difficulty. Solutions included.',
          meta: { difficulty: '4.5/5', solutions: 'Solutions Not Included (yet)' },
          link: '/Pdfs/Year 1/S1/Algebra 1/Problem Sheets/02. Sets and Maps (2).pdf'
          

        },
        
        {
          id: 'sm-video-playlist',
          type: 'video-playlist',
          title: 'Les Applications',
          description: 'This playlist covers the theoritical side and a lot of applications to master the chapter. ',
          meta: { videos: '13 video', duration: '2.5h total' },
          link: "https://youtube.com/playlist?list=PLSdJPLV_n1sPKtw6_xWYy1Yr_hzwhgnwL&si=gL3cwuB-LVwZKMGm",
          thumbnail: "https://i.ytimg.com/vi/xbX1t1SwA-0/hqdefault.jpg?sqp=-oaymwFBCPYBEIoBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGHIgTyg1MA8=&rs=AOn4CLAflKZ4v7nPFEydt6_awaCpLK8qZQ"
        }
      ],
      'binary-relations': [
        {
          id: 'br-lecture-notes',
          type: 'lecture-notes',
          title: 'Binary Relations Textbook',
          description: 'Comprehensive notes covering reflexive, symmetric, transitive relations, equivalence classes, and partial orders, with formal definitions, examples, and properties.',
          meta: { pages: '6 pages', tags: 'Equivalence/Order relations' },
          link: "/Pdfs/Year 1/S1/Algebra 1/Textbooks/relations.pdf",
        },
        {
          id: 'br-problem-set',
          type: 'problem-set',
          title: 'Problem Set #3',
          description: 'A collection of graded exercises covering properties of relations, including reflexivity, symmetry, and equivalence — with full solutions provided.',
          meta: { difficulty: '4/5', solutions: 'Solutions Not Included (yet)' },
          link: '/Pdfs/Year 1/S1/Algebra 1/Problem Sheets/serie 3-Binary relations (1) (1).pdf'
        },
        

        {
          id: 'br-video-playlist',
          type: 'video-playlist',
          title: 'Binary Relations',
          description: 'This playlist covers the theory side and a lot of applications to master the chapter.',
          meta: { videos: '7 videos', duration: '2.5h duration' },
          link: "https://www.youtube.com/playlist?list=PLEuPS2ccDzusm2ThyfDokjEXPuJrqKEjo",
          thumbnail: "https://i.ytimg.com/vi/iXH7as6GNv4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBQdO2nZb5p5ZMLVDj9R64hYS6AUQ"
        },



        {
          id: 'br-video-playlist',
          type: 'video-playlist',
          title: 'Binary Relations',
          description: 'This playlist provides intuitive explanations for the lecture and some applications',
          meta: { videos: '6 videos', duration: '6.8h duration' },
          link: "https://www.youtube.com/playlist?list=PLgKSr97JkHD7GxE1ne65S4wtjQZjRJQCi",
          thumbnail: "https://i.ytimg.com/vi/Kf6Crgb3j_U/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCWXQxjlba0cNUVEIb6ZSd8Q4cAWw"
        }
      ],


      'algebraic-structures': [
        {
          id: 'as-lecture-notes',
          type: 'lecture-notes',
          title: 'Algebraic Structures Textbook',
          description: 'Explore binary operations, identity and inverse elements, groups, rings, and fields — with definitions, properties, and worked examples.',
          meta: { pages: '48 pages', tags: 'Groups • Rings • Fields' },
          link: "/Pdfs/Year 1/S1/Algebra 1/Textbooks/Algebraic structures.pdf",
        },
        {
          id: 'as-problem-set',
          type: 'problem-set',
          title: 'Problem Set #4',
          description: 'Exercises covering group axioms, ring operations, and examples of algebraic structures. Full solutions included.',
          meta: { difficulty: '4.1/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S1/Algebra 1/Problem Sheets/-Algebraic Structures- (1).pdf'
        },
        


        {
          id: 'as-video-playlist',
          type: 'video-playlist',
          title: 'Structures Algébriques',
          description: 'Visual explanations of groups, rings, and fields with animated examples and guided proofs.',
          meta: { videos: '9 videos', duration: '5.8h total' },
          link: "https://youtube.com/playlist?list=PLVNLDmkJxFFSrZCmskZHMqC-D-Po3hnQs&si=nRRIYrbRTE3KsOCB",
          thumbnail: "https://i.ytimg.com/vi/usWnCbe7eXc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDrKY9Q4Ncr8jkxCfwW5YPN5YrjYA"
        },


        {
          id: 'as-video-playlist',
          type: 'video-playlist',
          title: 'Algebraic Structures Essentials',
          description: 'Visual explanations of groups, rings, and fields with animated examples and guided proofs.',
          meta: { videos: '6 videos', duration: '5.8h total' },
          link: "https://www.youtube.com/playlist?list=PLE8WtfrsTAikFDNHujYvKStrEB5wEglmb",
          thumbnail: "https://i.ytimg.com/vi/09BuX_XmNtM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCfENy5TO-usq0pWtpP2wOGr2qIaA"
        }
      ],

      'polynomials-and-rational-fractions': [
        {
          id: 'prf-lecture-notes',
          type: 'lecture-notes',
          title: 'Polynomials & Rational Fractions Textbook',
          description: 'Detailed explanations on polynomial operations, factorization, irreducibility, and rational expressions with numerous examples.',
          meta: { pages: '22 pages', tags: 'Factorization • Division • Rational Expressions' },
          link: "/Pdfs/Year 1/S1/Algebra 1/Textbooks/Chapter_4_Polynomials_and_rational_fractions (4) (1).pdf",
        },
        {
          id: 'prf-problem-set',
          type: 'problem-set',
          title: 'Problem Set #5',
          description: '20 problems covering polynomial identities, factorizations, and simplification of rational fractions. Includes full solutions.',
          meta: { difficulty: '4.2/5', solutions: 'Solutions Included (yet)' },
          link: "/Pdfs/Year 1/S1/Algebra 1/Problem Sheets/-Algebraic Structures- (1).pdf",
          solutionsLink:  '/Pdfs/Year 1/S1/Algebra 1/Problem Sheets/ilovepdf_merged.pdf'
        
        },
        


        {
          id: 'prf-video-playlist',
          type: 'video-playlist',
          title: 'Mastering Polynomials',
          description: 'Engaging video tutorials covering polynomial division, factorization, and rational simplifications.',
          meta: { videos: '25 videos', duration: '5h total' },
          link: "Polynomes et Fractions Rationelles",
          thumbnail: "https://i.ytimg.com/vi/wf-eEQPBX0Y/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBfKFIwDw==&rs=AOn4CLA9laybRbxGi4OtPEidJynEj8Lb7A"
        }
      ]

    },

    extraResources: {
      recommendedBooks: [
        {
          title: "Contemporary Abstract Algebra",
          author: "Joseph A. Gallian.",
          description: "A widely used introductory textbook that presents abstract algebra concepts in a clear and accessible way, with a focus on group theory and plenty of examples and exercises to support learning.",
          link: "/Pdfs/Year 1/S1/Algebra 1/Books/Gallian-Contemporary Abstract Algebra.pdf",
          coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6E6ecoSrLpA_FsKEgjgFPeN0fdeETXGDJw&s" 
        },
        {
          title: "Algebra: Chapter 0",
          author: "Paolo Aluffi.",
          description: "A modern, rigorous introduction to abstract algebra with a strong emphasis on category theory and mathematical structures, ideal for students aiming for a deeper, conceptual understanding.",
          link: "/Pdfs/Year 1/S1/Algebra 1/Books/algebra_chapter-0_paolo-aluffi.pdf",
          coverImage: "data:image/png;base64,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"
        },


        
      ],
      pastExams: [
        {
          title: "2024 Final Exam",
          year: "2024",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/Algebra 1/Exams/Final Exam - Correction Promo 4.pdf"
        },

        {
          title: "2024 Midterm Exam",
          year: "2024",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/Algebra 1/Exams/Midterm Exam - Correction Promo 4.pdf"
        },
        {
          title: "2023 Final Exam",
          year: "2023",
          description: "Detailed solutions to all problems",
          link: "/Pdfs/Year 1/S1/Algebra 1/Exams/Final Exam - Correction Promo 3.pdf"
        },

        {
          title: "2023 Midterm Exam",
          year: "2023",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/Algebra 1/Exams/Midterm Exam - Correction Promo 3.pdf"
        },

        

        {
          title: "2022 Final Exam",
          year: "2022",
          description: "Detailed solutions to all problems",
          link: "/Pdfs/Year 1/S1/Algebra 1/Exams/Final Exam - Correction Promo 2.pdf"
        },

        {
          title: "2022 Catch-up Exam",
          year: "2022",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/Algebra 1/Exams/Catchup Exam - Promo 2.pdf"
        },

        {
          title: "2022 Midterm Exam 1",
          year: "2022",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/Algebra 1/Exams/MidTerm 1 Correction - Promo 2.pdf"
        },

        {
          title: "2022 Midterm Exam 2",
          year: "2022",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/Algebra 1/Exams/MidTerm 1 Correction - Promo 2.pdf"
        },

        
      ],
      usefulWebsites: [
        {
          title: "Bibmath: Mathematical Logic",
          description: "Solved exercises on mathematical logic chapter",
          link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/analyse/topologie/reels&type=fexo"
        },

        {
          title: "Bibmath: Sets",
          description: "Solved exercises on sets chapter",
          link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/logique/ensemble&type=fexo"
        },

        {
          title: "Bibmath: Maps",
          description: "Solved exercises on maps chapter",
          link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/logique/applications&type=fexo"
        },

        {
          title: "Bibmath: Binary Relations",
          description: "Solved exercises on binary relations chapter",
          link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/logique/relations&type=fexo"
        },

        {
          title: "Bibmath: Groups",
          description: "Solved exercises on groups chapter",
          link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/algebre/groupe&type=fexo"
        },

        {
          title: "Bibmath: Rings",
          description: "Solved exercises on rings chapter",
          link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/algebre/anneaux&type=fexo"
        },

        {
          title: "Bibmath: Fields",
          description: "Solved exercises on fields chapter",
          link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/algebre/corps&type=fexo"
        },

        {
          title: "Bibmath: Polynomials",
          description: "Solved exercises on polynomials chapter",
          link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=mathsup/feuillesexo/polynome&type=fexo"
        },

        {
          title: "Bibmath: Rational Fractions",
          description: "Solved exercises on rational fractions chapter",
          link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=mathsup/feuillesexo/fracrat&type=fexo"
        },
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



  'analysis-2': {
    id: 'analysis-2',
    name: 'Analysis II',
    subtitle: 'Second Semester, Year 1',
    description: "This module is mainly about all types of integrals (of one variable functions) and differential equations, but before that you're gonna study elementary functions and taylor expansion (DL)",
    chapters: [
      {
        id: 'elementary-functions',
        title: 'Elementary Functions',
        description: 'The definition and the properties of the main usual functions (inverse trigonnometric functions, hyperbolic functions, logarithmic and exponential functions).'
      },
      {
        id: 'limited-development',
        title: 'Limited Development',
        description: 'Learn to simplify complex functions into polynomials using Taylor expansions and limited developments. These tools help estimate values, analyze limits, and understand local behavior—turning messy curves into manageable approximations.'
      },
      {
        id: 'indefinite-integrals',
        title: 'Indefinite Integrals',
        description: "This chapter covers antiderivatives and indefinite integration. You'll learn standard integration techniques, how to reverse differentiation, and how to handle arbitrary constants. Focuses on building fundamental skills for solving integrals without limits."
      },
      {
        id: 'definite-integrales',
        title: 'Definite Integrals',
        description: 'This chapter explains how to calculate the exact area under a curve using definite integrals. You’ll learn how the idea of slicing the area into small rectangles leads to the Riemann integral, and how different types of Riemann sums work. The chapter also shows how integration is connected to derivatives, and teaches practical techniques like substitution and integration by parts to solve problems more easily.'
      },
      {
        id: 'improper-integral',
        title: 'Improper Integrals',
        description: 'Derivatives, mean value theorems, L\'H\u00f4pital\'s rule, Taylor expansions, and applications in optimization.'
      },

      {
        id: 'DE',
        title: 'Differential Equations',
        description: ''
      },
    ],
    resources: {
      'elementary-functions': [
        {
          id: 'ef-lecture-notes',
          type: 'lecture-notes',
          title: 'Elementary Functions Textbook',
          description: 'Covers inverse trigonometric (arcsin, arccos, arctan), hyperbolic (sinh, cosh) and inverse hyperbolic functions, logarithms, and exponentials—with graphs, properties, and applications.',
          meta: { pages: '11 pages', tags: 'Inverse Trig Functions• Hyperbolic Functions • Logarithm • Exponential' },
          link: '/Pdfs/Year 1/S2/Analysis 2/Textbooks/Chapter_1___Elementry_function.pdf',
          
        },

        

        {
          id: 'ef-problem-set',
          type: 'problem-set',
          title: 'Problem Set #1',
          description: '10 carefully graded problems on inverse trig functions (arccos, arcsin, arctan), hyperbolic functions (sinh, cosh), inverse hyperbolic functions, logarithmic and exponential functions.',
          meta: { difficulty: 'Difficulty: 4.2/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S2/Analysis 2/Problem Sheets/Exercise set 1 - 2024-2025.pdf',
          solutionsLink: '/Pdfs/Year 1/S2/Analysis 2/Solutions/Elementary function td.pdf'
        },
        
        {
          id: 'ef-videos',
          type: 'video-playlist',
          title: 'Les Fonctions Usuelles',
          description: 'Video lectures and exercises for the main ideas of this chapter ',
          meta: { videos: '7 videos', duration: '02:05h total' },
          link: 'https://youtube.com/playlist?list=PL024XGD7WCIHb3odpeugIJ9SiKXOyH2TB&si=7L2pYYfFwRhxNj3D'
        },


        {
          id: 'ef-videos',
          type: 'video-playlist',
          title: "Mr Benbachir's Playlist",
          description: 'Contains the solutions for the most of the problem sheets and past years elementary functions exam exercises',
          meta: { videos: '16 videos', duration: '03:24h total' },
          link: 'https://youtube.com/playlist?list=PLIznM09WVcDS-M3ch2bO9APe41G-b-kQZ&si=PwWhjqueeILFRMLM'
        },
      ],
      'limited-development': [
        {
          id: 'dl-lecture-notes',
          type: 'lecture-notes',
          title: 'Limited Development Textbook',
          description: 'A concise introduction to Taylor polynomials, asymptotic notation (Big-O, Little-o), and limited developments, with applications in limits and asymptotics. Ideal for advanced calculus students.',
          meta: { pages: '10 pages', tags: 'Taylor • DL' },
          link: '/Pdfs/Year 1/S2/Analysis 2/Textbooks/Chapter_2___Taylor_Polynomial.pdf',
        },
        {
          id: 'dl-problem-set',
          type: 'problem-set',
          title: 'Problem Set #2',
          description: '15 problems on Taylor polynomials, limited developments, and function approximations, with applications to limits and asymptotic analysis.',
          meta: { difficulty: 'Difficulty: 3.8/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S2/Analysis 2/Problem Sheets/Exercise set 2 - 2024-2025.pdf',
          solutionsLink: '/Pdfs/Year 1/S2/Analysis 2/Solutions/TD2.pdf'
          
        },
        
        {
          id: 'dl-videos',
          type: 'video-playlist',
          title: 'Le Development Limité',
          description: 'Video lectures and exercises for the main ideas of this chapter.',
          meta: { videos: '17 videos', duration: '3.5h total' },
          link: 'https://youtube.com/playlist?list=PL024XGD7WCIHHlscC-_sfMgKyoeiGSixj&si=O-FzDtpahFdnjPeB'
        },


        {
          id: 'dl-videos',
          type: 'video-playlist',
          title: "Mr Benbachir's Playlist",
          description: 'Contains the solutions for the most of the problem sheets and past years limited development exam exercises',
          meta: { videos: '16 videos', duration: '03:24h total' },
          link: 'https://youtube.com/playlist?list=PLIznM09WVcDS-M3ch2bO9APe41G-b-kQZ&si=PwWhjqueeILFRMLM'
        },
      ],
      'indefinite-integrals': [
        {
          id: 'in-in-lecture-notes',
          type: 'lecture-notes',
          title: 'Indefinite Integrals Textbook',
          description: '"This textbook systematically teaches indefinite integration: from primitives and basic rules to advanced techniques (integration by parts, substitutions, rational/trigonometric integrals). Focused on algorithmic clarity for tough cases like roots and partial fractions.',
          meta: { pages: '14 pages', tags: 'Premitives • IBP • Change Of Variables • Usual Forms' },
          link: '/Pdfs/Year 1/S2/Analysis 2/Textbooks/Chapter_3__Indefinite_Integrals.pdf',
        },
        {
          id: 'in-in-problem-set',
          type: 'problem-set',
          title: 'Problem Set #3',
          description: '+50 integrals covering the main ideas to develop your integration skills.',
          meta: { difficulty: 'Difficulty: 4/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S2/Analysis 2/Problem Sheets/Exercise set 3 - 2024-2025.pdf',
          solutionsLink: '/Pdfs/Year 1/S2/Analysis 2/Solutions/Exercise set 3.pdf'
        },
        
        {
          id: 'in-in-videos',
          type: 'video-playlist',
          title: 'Primitives et Intégrales',
          description: 'Video lectures and exercises for the main ideas of this chapter.',
          meta: { videos: '9 videos', duration: '5.5h total' },
          link: "https://youtube.com/playlist?list=PLE_kk5g9K4gh25iTUhuNqfy4sfMZqf9VB&si=Op-GEwdXppiXDNnj"
        },


        {
          id: 'in-in-videos',
          type: 'video-playlist',
          title: "Mr Benbachir's Playlist",
          description: 'Contains the solutions for the most of the problem sheets and past years indefinite integrales exam exercises.',
          meta: { videos: '9 videos', duration: '5.5h total' },
          link: "https://youtube.com/playlist?list=PLE_kk5g9K4gh25iTUhuNqfy4sfMZqf9VB&si=Op-GEwdXppiXDNnj"
        },


      ],
      'definite-integrales': [
        {
          id: 'def-in-lecture-notes',
          type: 'lecture-notes',
          title: 'Definite Integrales',
          description: 'This textbook gives a solid foundation in integral calculus, starting from the basics of Riemann sums to more advanced techniques like substitution and integration by parts. It focuses on helping students understand how integration works, why it matters, and how to apply it in real problems.',
          meta: { pages: '30 pages', tags: 'Riemann Integrals • Fundamental Theorem Of Calculus' },
          link: '/Pdfs/Year 1/S2/Analysis 2/Textbooks/Chapter_4__Define_Integral.pdf',
        },
        {
          id: 'def-in-problem-set',
          type: 'problem-set',
          title: 'Problem Sheet #4',
          description: '5 exercises cover Riemann sum approximations, limits as integrals, symmetry and substitution, improper integrals, and integrals involving special functions like logarithms and exponentials.',
          meta: { difficulty: 'Difficulty: 3.9/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S2/Analysis 2/Problem Sheets/Exercise set 4 & 5 - 2024-2025.pdf',
          solutionsLink: '/Pdfs/Year 1/S2/Analysis 2/Solutions/TD-4 Analysis solutions.pdf'
        },
        

        {
          id: 'def-in-videos',
          type: 'video-playlist',
          title: 'Intégrale de Riemann',
          description: 'Lecture videos on the Riemann integral and improper integrales',
          meta: { videos: '9 videos', duration: '5h total' },
          link: "https://youtube.com/playlist?list=PLE8WtfrsTAimJJgT31AD_FrlNAYyzfxFH&si=QbE7UOusNHr2r-je"
        },


        {
          id: 'def-in-videos',
          type: 'video-playlist',
          title: "Mr Benbachir's Playlist",
          description: 'Contains the solutions for the most of the problem sheets and past years definite integrales exam exercises.',
          meta: { videos: '11 videos', duration: '3h total' },
          link: "https://youtube.com/playlist?list=PLIznM09WVcDSgmwDHM2Gf2yge_7z8_9Go&si=e-4lESEu07jUeH9i"
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
          title: 'Problem Sheet #6',
          description: '22 problems covering computational techniques, MVT applications, and Taylor polynomial estimation.',
          meta: { difficulty: 'Difficulty: 4.3/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S1/Analysis 1/Problem Sheets/Exercise set 6.pdf',
          solutionsLink: '/Pdfs/Year 1/S1/Analysis 1/Solutions/Problem_Set__2_Solutions.pdf'
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


};



