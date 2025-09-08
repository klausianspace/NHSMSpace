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
          solutionsLink: '/Pdfs/Year 1/S1/Analysis 1/Solutions/Problem_Set__3_Solutions.pdf'
          
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
          link: '/Pdfs/Year 1/S1/Algebra 1/Problem Sheets/-Algebraic Structures- (1).pdf',
          solutionsLink: '/Pdfs/Year 1/S1/Algebra 1/Solutions/alg-str.pdf'
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
          meta: { pages: '28 pages', tags: 'Permutations • Combinations • Binomial • Repetition' },
          link: "/Pdfs/Year 1/S1/MD 1/Textbooks/Combinatorial_Analysis.pdf",
        },
        {
          id: 'combi-problem-set',
          type: 'problem-set',
          title: 'Problem Set #1',
          description: '15+ problems graded by difficulty to test your mastery of permutations, combinations, and variations — with detailed solutions included. Practice both theory and real-world scenarios.',
          meta: { difficulty: '4.4/5', solutions: 'Solutions Included' },
          link: "/Pdfs/Year 1/S1/MD 1/Problem Sheets/MD_I_1 (1).pdf",
          solutionsLink: "/Pdfs/Year 1/S1/MD 1/Solutions/md1_ws_1_sol.pdf"
        },
        
        
        {
          id: 'combi-video-playlist',
          type: 'video-playlist',
          title: 'Combinatorics : Counting',
          description: 'Introductory playlist for counting principles.',
          meta: { videos: '13 videos', duration: '1.5h total' },
          link: "https://www.youtube.com/playlist?list=PLVUDmbpupCaru1ReP966kn39zbpkCKm-A",
          thumbnail: "https://i.ytimg.com/vi/VVY4K-OT4FI/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAF27HfaCTmc0Vn_X8r91_p-f1-Gg"
        },


        {
          id: 'combi-video-playlist',
          type: 'video-playlist',
          title: 'Discrete Mathematics : Combinatorics',
          description: 'Watch only the first 14 videos.',
          meta: { videos: '14 videos', duration: '4h total' },
          link: "https://www.youtube.com/playlist?list=PLl-gb0E4MII0sGLCJeqDB3y63HZ6lM5LJ",
          thumbnail: "https://i.ytimg.com/vi/spEjNcd37IQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBn2-l4WIpS4OcWjrwCt0siB78NWQ"
        },


        {
          id: 'combi-video-playlist',
          type: 'video-playlist',
          title: 'Discrete Mathematics : Combinations With Repetition',
          description: 'This playlist covers the main ideas of combinations with repetition section.',
          meta: { videos: '9 videos', duration: '4h total' },
          link: "https://www.youtube.com/playlist?list=PLx0jMQFplm94RTVv72pdogyPipimwhLp-",
          thumbnail: "https://i.ytimg.com/vi/cxSa9GtOVoE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCWZ0VmUQgTe4svtQ9valAYlfVEzw"
        },







],
      'inclusion-exclusion': [
        {
          id: 'ie-lecture-notes',
          type: 'lecture-notes',
          title: 'Inclusion-Exclusion & PHP Textbook',
          description: 'Formal treatment of the inclusion-exclusion principle with step-by-step proofs and examples, covering 2-set and 3-set cases, general formula, and advanced extensions. Includes a dedicated section on the Pigeonhole Principle with applications.',
          meta: { pages: '19 pages', tags: 'Inclusion-Exclusion • Pigeonhole Principle • Counting Overlaps' },
          link: "/Pdfs/Year 1/S1/MD 1/Textbooks/MD1_Ch2.pdf",
        },
        {
          id: 'ie-problem-set',
          type: 'problem-set',
          title: 'Problem Set #2',
          description: 'Challenge yourself with carefully selected problems involving overlapping sets, derangements, and creative uses of the pigeonhole principle. Full solutions provided.',
          meta: { difficulty: '4.5/5', solutions: 'Solutions Included' },
          link: "/Pdfs/Year 1/S1/MD 1/Problem Sheets/MD_I_2 (1).pdf",
          solutionsLink: "/Pdfs/Year 1/S1/MD 1/Solutions/md1_ws_2_sol.pdf"
        },
        
        {
          id: 'ie-video-playlist',
          type: 'video-playlist',
          title: ' Pigeonhole Principle & Inclusion-Exclusion Principle',
          description: 'PHP & Inclusion-Exclusion Principle video tutorials with proofs and examples (watch only the first 16 videos).',
          meta: { videos: '16 videos', duration: '4h total' },
          link: "https://www.youtube.com/playlist?list=PLF_J2w5w0Z3G8ZGEyd_NNV7n2EEXJSMJe",
          thumbnail: "https://i.ytimg.com/vi/1CpBgTZ9pxs/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB0bORWSeXIN7etttowdpSsDBEl5g"
        }
      ],
      'graph-theory-intro': [
        {
          id: 'gt-lecture-notes',
          type: 'lecture-notes',
          title: 'Graph Theory Fundamentals',
          description: 'Comprehensive notes introducing the core concepts of graph theory: graphs, vertices, edges, degree, adjacency, paths, cycles, and connectedness — with visual examples and formal definitions.',
          meta: { pages: '17 pages', tags: 'Graphs • Degree • Paths • Connectivity' },
          link: "/Pdfs/Year 1/S1/MD 1/Textbooks/MD1_Ch3.pdf",
        },
        {
          id: 'gt-problem-set',
          type: 'problem-set',
          title: 'Problem Set #3',
          description: 'Practice problems on simple and multigraphs, degree sequences, paths, and connectivity — ranging from basic to advanced difficulty, with full solutions.',
          meta: { difficulty: '4.4/5', solutions: 'Solutions Included' },
           link: "/Pdfs/Year 1/S1/MD 1/Problem Sheets/MD_I_3 (1).pdf",
          solutionsLink: "/Pdfs/Year 1/S1/MD 1/Solutions/md1_ws_3_sol.pdf"
        },
        

        {
          id: 'gt-video-playlist',
          type: 'video-playlist',
          title: 'Graph Theory',
          description: 'Introductory video series walking through graph types, degree properties, paths, and basic theorems with illustrative examples.',
          meta: { videos: '7 videos', duration: '3.1h total' },
          link: "https://www.youtube.com/playlist?list=PLztBpqftvzxXBhbYxoaZJmnZF6AUQr1mH",
          thumbnail: "https://i.ytimg.com/vi/ZQY4IfEcGvM/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCzoZCIgMRk4NJacsEbciTJ69dHOQ"
        }
      ]

    },


    extraResources: {
      recommendedBooks: [
        {
          title: "A Walk Through Combinatorics",
          author: "Miklós Bóna.",
          description: "This textbook by Miklos Bona provides a comprehensive introduction to combinatorics, covering a wide range of topics from fundamental principles to more advanced theories. The book emphasizes engaging writing, a rich variety of examples, and thorough exercises with solutions.",
          link: "/Pdfs/Year 1/S1/MD 1/Books/a-walk-through-combinatorics-an-introduction-to-enumeration-graph-theory-and-selected-other-topics-5nbsped-9811277842-9789811277849-9789811277856-9789811277863_compress.pdf",
          coverImage: "data:image/jpeg;base64,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" 
        },
        {
          title: "Combinatorics & Graph Theory",
          author: "C. Vasudev",
          description: "This textbook by C. Vasudev provides a comprehensive introduction to combinatorics and graph theory, covering a wide range of topics from fundamental principles to more advanced theories. The book emphasizes engaging writing, a rich variety of examples, and thorough exercises with solutions.",
          link: "/Pdfs/Year 1/S1/MD 1/Books/Combinatorics and graph the_ (Z-Library).pdf",
          coverImage: "https://imgv2-1-f.scribdassets.com/img/document/234593042/original/609c5472c7/1?v=1"
        },


        
      ],
      pastExams: [
        {
          title: "2024 Final Exam",
          year: "2024",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/MD 1/Exams/Final Exam - Correction Promo 4.pdf"
        },

        {
          title: "2024 Replacement Exam",
          year: "2024",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/MD 1/Exams/Replacement Exam - Promo 4.pdf"
        },

        {
          title: "2024 Midterm Exam",
          year: "2024",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/MD 1/Exams/Midterm Exam - Correction Promo 4.pdf"
        },
        {
          title: "2023 Final Exam",
          year: "2023",
          description: "Detailed solutions to all problems",
          link: "/Pdfs/Year 1/S1/MD 1/Exams/Final Exam - Correction Promo 3.pdf"
        },

        {
          title: "2023 Midterm Exam",
          year: "2023",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/MD 1/Exams/Midterm Exam - Correction Promo 3.pdf"
        },

        

        

        {
          title: "2022 Catch-up Exam",
          year: "2022",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/MD 1/Exams/Catchup Exam - Promo 2.pdf"
        },

        
        
        
      ],
      usefulWebsites: [
        {
          title: "Bibmath: Counting",
          description: "Solved theoritical exercises on counting chapter",
          link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/proba/denombrement-theo&type=fexo"
        },

        {
          title: "Bibmath: Graph Theory",
          description: "Solved exercises on graph theory chapter",
          link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=bde/graphes/graphes_theo&type=fexo"
        },

         
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
      description: 'Definition, objectives, types of statistics, populations and samples, and data classifications and graphical representaions.'
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
          description: 'Clear introduction to key statistical concepts: types of data, populations vs. samples, parameters vs. statistics, and classifications of variables, graphical representations of data — with examples and definitions.',
          meta: { pages: '15 pages', tags: 'Populations • Variables • Descriptive vs. Inferential' },
          link: '/Pdfs/Year 1/S1/STAT/Textbooks/Textbook_Chap1_4 (1)-1-24.pdf',
          
        },
        {
          id: 'stats-fundamentals-problem-set',
          type: 'problem-set',
          title: 'Problem Set #1',
          description: 'Foundational exercises on recognizing data types, sampling methods, and distinguishing between populations and samples.',
          meta: { difficulty: '3.5/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S1/STAT/Problem Sheets/Problem sheet N-1.pdf',
          solutionsLink: '/Pdfs/Year 1/S1/STAT/Solutions/".pdf'
        },
        

        
      ],
      'numerical-data': [
        {
          id: 'stats-numerical-lecture-notes',
          type: 'lecture-notes',
          title: 'Representing Numerical Data',
          description: 'Detailed notes on organizing, summarizing, and visualizing data using tables, histograms, bar charts, and pie charts, along with measures like mean, median, mode, and range.',
          meta: { pages: '25 pages', tags: 'Tables • Histograms • Mean/Median/Mode' },
          link: '/Pdfs/Year 1/S1/STAT/Textbooks/Textbook_Chap1_4 (1)-25-50.pdf',
        },
        {
          id: 'stats-numerical-problem-set',
          type: 'problem-set',
          title: 'Problem Set #2',
          description: 'Exercises covering frequency tables, graphical representation, and descriptive measures of central tendency and dispersion.',
          meta: { difficulty: '4.1/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S1/STAT/Problem Sheets/Problem sheet N-2.pdf',
          solutionsLink: '/Pdfs/Year 1/S1/STAT/Solutions/Exercise set 2.pdf'
        },
     
      ],
      'two-way-stats': [
        {
          id: 'stats-two-way-lecture-notes',
          type: 'lecture-notes',
          title: 'Two-Way Tables and Bivariate Data',
          description: 'Complete notes on analyzing two-variable data using contingency tables, joint/marginal/conditional distributions, and detecting independence between variables.',
          meta: { pages: '37 pages', tags: 'Contingency Tables • Conditional Distribution • Independence' },
          link: '/Pdfs/Year 1/S1/STAT/Textbooks/Textbook_Chap1_4 (1)-51-88.pdf',
        },
        {
          id: 'stats-two-way-problem-set',
          type: 'problem-set',
          title: 'Problem Set #3',
          description: 'Practice problems on constructing and interpreting two-way tables, computing conditional distributions, and testing for independence.',
          meta: { difficulty: '4.2/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S1/STAT/Problem Sheets/Problem sheet N-3.pdf',
          solutionsLink: '/Pdfs/Year 1/S1/STAT/Solutions/Exercise set 3 (2).pdf'
        },
        
      ],
      'intro-probability': [
        {
          id: 'stats-probability-lecture-notes',
          type: 'lecture-notes',
          title: 'Introduction to Probability',
          description: 'Lecture notes on basic probability principles: sample spaces, events, counting techniques, rules of probability, and random variables',
          meta: { pages: '35 pages', tags: 'Sample Spaces • Events • Probability Rules' },
          link: '/Pdfs/Year 1/S1/STAT/Textbooks/Textbook_Chap1_4 (1)-89-119.pdf',
        },
        {
          id: 'stats-probability-problem-set',
          type: 'problem-set',
          title: 'Problem Set #4',
          description: 'Exercises covering probability calculations, event combinations, and applications of the addition and multiplication rules. Conditional probabilities, Bayess theorem and random variables',
          meta: { difficulty: '4.5/5', solutions: 'Solutions Included' },
          link: '/Pdfs/Year 1/S1/STAT/Problem Sheets/Problem sheet N-4.pdf',
          solutionsLink: '/Pdfs/Year 1/S1/STAT/Solutions/last TD sheet  (1).pdf'
        },
        
        
      ]
    },

    extraResources: {
      recommendedBooks: [
        
        {
          title: "Mathematical Statistics with applications",
          author: "Dennis D. Wackerly",
          description: "Statistics & Probability textbook with advanced topics and applications.",
          link: "/Pdfs/Year 1/S1/STAT/Books/Mathematical Statistics wit_ (Z-Library).pdf",
          coverImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFhUXGBgWFxgXGBUWFxgYGxoXGBUXFRoYHyggGBolGxcWITEiJSkrLi4uFx8zODUtNygtLisBCgoKDg0OGxAQGy0lHiUwLS0tLSsvMC0tLS0tLS0tLS0rLy0tLS0tLS0tLy0tLS0tLS0yLS0tLS03LS0tLS0tLf/AABEIAPsAyAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAwQFAQIGBwj/xABBEAABAwIDBAYIBAQFBQEAAAABAAIDBBESITEFE0FRBiJhcbHwFDIzcoGRodFCU5LBBxVS4SMkNGLxFkNjstKi/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAJhEBAQACAQQCAgEFAAAAAAAAAAECEQMSEyExQVEEFIEFInGh0f/aAAwDAQACEQMRAD8A9loqSPds6jfVb+FvIdid6JH+Wz9IRRezZ7rfAJyBPokf5bP0hHokf5bP0hOQgT6JH+Wz9IR6JH+Wz9ITkIE+iR/ls/SEeiR/ls/SE5CBPokf5bP0hHokf5bP0hOQgg4qflGO8NHyvqO1Ye+nF77rLX1FvLsyJ2rBlmNe36ZnLtPNaHY8OXUGXf2a89B8kAHU/wD4szYermb4bD45LVk9MdN1qBo3U6D6j5pzdmxAghgysRrkQbj6rUbJh/Lb5yz+CDUup/8Axf8A546DvyUn0SP8tn6QkHZUP5Yyz46g3B+ZKmoE+iR/ls/SEeiR/ls/SE5CBPokf5bP0hHokf5bP0hOQgT6JH+Wz9IR6JH+Wz9ITkIE+iR/ls/SEeiR/ls/SE5CCO+kjsf8Nn6Qspz9ChAqi9mz3W+ATkmi9mz3W+ATkAhCEAhVDa6XGWmLqjFmA78Nybd4LLfFENdKcGKPCTfF1XHiBYW0yN7nkqdyL9urdCpmV81mkx2JeGkYXGzcN8XxPyWzK6W5xRkNxAXDXHq3eL5X/pb81Hch26t0KJSyvOPE0CxIbrmOefePkUqqqZGxtdu+tcYmi7rDV1iNTYZK3VNbR03elghU8VdMSA6O3VeT1XaguDRfuA+aX/MZsNzHZ1yLYXm9mgi3IE5X4Kvci3ayXiFTurpetaO9n2As7NnWuQeJsB81tHXy5ExG1gTYG/qYiLa3xZKe5EdurZCqoK+QgYoyHYXfhdbEDkOwEZqU2dxjDmtu42yN28etqOGfyUzOVFxsS0Kvq6l7Xsa1t2nU2Jtnz0CjenzYQRHc53GFzbWaDbPXMkZa2UdcTMLVyhU8lfKA8iMkh9mjC7MZ59uQ+q3kq5uthZlia1txqDa5OfC/Zonch26tUKnkrJuuAy5DgG9U5jPPMgFWdO8lrSRYkAkcjbMKZlKjLGw1CEKyrD9ChD9ChAqi9mz3W+ATkmi9mz3W+ATkAhCECDWR4sG8Zi0w4hivytqmySBoJcQANSTYDvJXiHSikd/MdoVMftKV9PO3uAYH3+Fj3ArsP4gbX9Io6aCA9avdGBbhGcLnk9gJaD8UHeQVLH3wPa62uEg277Jq8w/hzMKSHaRZG+QRVDmtYwFz3Yeq0ADU5BXcnTGph3Dqqh3UUz2xhwmD3Mc/1cbMIt28rHuQdol79uLBibitfDcYrc7a2XnsPSLaH8zqom0xlaxjcMJmjY1gytKHFueIZ4eGJKr62Vm22vZTGSZ1C0boPa2zi67sTzkGtsc+7mg9LQuR2X01xCrFTA6CSkbjlaHCQFpBIwuFrnL6hQ5OnVRHCyqm2eWUrsJ3gmY54a8jC4x2vxGXag7pC5PaHS6RtY6jhpTM8RNlaRI1gINr4sQ6rRfW54Cyh0PTapm3kcWznOnhcWzMMrGsZbSzyOsSQ6wA/Drog7hC5Kl6abygFZHSyvfjMe5Z1nYwbG5A9Xje3wRF0rqGVEMFVRiEz4hG5kzZRiaL4XdUW4Djqg61LZO0ktDmlzdQCCRyuOC876N9JNovqKtvopmwyhpYZ4mCn16gOHrjt7FY023aaGq2nJ6MI3QNjdNK03dP1SWAggWI0GfFB26Fw46b1LWRTTbOcynlLA17ZWveA/1XOYBcC2as9obfqvSHwU1C6URgF0kj9zG4kXtGS040HQzTNYMTnBo5kgD5lbg3XmPTXpA2t2LUv3ZjfHMyKRhIdhe2RlwCNRmvSKH2bPdb4BA9CEIMP0KEP0KECqL2bPdb4BOSaL2bPdb4BOQCEIQcJsfY0h2ptF0sLhBPG1gcR1XjC1rgOfFVPQHoxUsrAalrt1RtfHTlwFnY3u6zTx6pcfiOS9RQg8ppNiVwo9qNjjkjllqC+P8AC57Md3YD2tuom0til8dOKbZ1bG5s0TpjIXFpA9Y4S84iDc4rDLvsvYUIPO9relUu0qqoipJZt9AxkTo2hzWyAADeZiwBbmpGyKCr/msVRPEc6FrJHtFoxNiBcwZlR/4rVTmyUUb5nw00kjhM9hLTYYbAkdhcbfHgq9uxaXeQu2ZtNomEjS5slSXB7eLQ0Zknl2lBOqej88tTtgCMgTxRthc7Jr3BmgPfYKlZsz/LxwjYk76gBjHmVzxASLBzsTZNOOi6bbvTGaDaTKdsEz4sBLmsixSSOsSHQm+bBkD2gq7r+lUUNK2qlimYHuwNicy0xcSQG4b6mxOuiCr2fs2Vu2ZJjG4ReiNjD7HBjDmXaCeNgfkmdDdnyx1m0nyRua2SZroyRYPAx3LeYzClUHTBj52U8tPUU8kgJj3zWgPwi5ALXHO3NUVL07m9NqonUtRJHHhDGRQ3lb/U6Treq7Vp5FBTQ7DrW7JETYZg4VZfLE04JHw8Q3MXvkpEeyL1lDJTUNXBFHK4yb4uIGQ6waXuw9pyv22XU7QqoDtCiD2zid8cjowHYYwMJLhM2+brXtkbFaP6dMLpRDS1U7YXOZJJGxhYHN9YDE4E27kHPk19JPtAU9HI+Soma+CTCHQgcTIbi2RWZ+jtTLJthu7IM7IRE45Nkc1t3Bp7xb4qz6X9NnR0EdVSNcd6Rhc9l2MANnCUXGEnMDtCl1XSBk9JUmamrIY2RXeXM3TnNN77l2L1hbstcIKyn25tDcU9PBQTRzN3cckkrW7kNaA15BxZ6XH7qJX7Nf8AzCpfV0dXUxuLPRjC52FgtmMntwG9vkT2roG9KKelpaTCyeTfRtEEQG8ncA0HrZ5kAi5un7L6ZwyuljfHNBJFGZXsmZhduxq4WJuNPmg4P/p+q/lVfF6PLvJKoPYw9Z7mYoze/wCLQ3PGxXrdG20bAdQ1oPyC5Nv8Qo92JzSVYpycpt2zBYmwdYPxWv2LsI3hwBGYIuO46INkIQgw/QoQ/QoQKovZs91vgE5JovZs91vgE5AIQhAIVZtTbMcOROJ/Bo1+PILfZO1GTtuMnD1m8R9x2q3RlrevDPvYdXRvysEIQqtHHdPtqSwOpz6M2elc4ioG63rgMsJaL2GWLM5ZLiOlE1JViKPZ1C9k+9acbYN0A3PUt7S056WXtC1e8AEnQZlBwPSyqFNtWkqZWv3LYJGF7WOeA44rA4QcziCR0h27WS7Pp593LTiScCbdNc6RkF3DGLi7bgA6cQu7/msP5rPZ77X/ALX5nu9qr5+k8LS4EOJayWTKxuInFpFwbAmxyNu2yDg2Fj9pbPdBNV1EbXyXfO15DSW6Ne5jSQcr6gZc1JrNrmg2ltCV0UjnSxxbgBj3Nkc1oGHE0G2eS9EodpRS3EbwSACRmDY3sc9QbHMZZKLS7eifvr3Y2EnE59g0sBc0yNN/UxMkFzb1DwsUHK1xlftXZcj4y1xglMgAJaxzo3EtJtzyz5KjcaeOaqG/2hQSb17t2zE+OVxz3jA2M5E8L8l6X/O6exdvWAAtBubWLjZmvMggc0qfb8TW4gcQtISQQLbtoc4OxEYTY8UHA7Z9MqNgAzskdNja4gtIeWNk6rnNAvfDY6aZqftXpG6spa6OKF+4ZTdWQtka58hBuwNIztbgu3/msOPd7xuO+G1/xWvhvpitnbVRajpJTtY54kDg1uOzcyW3Au3+oXIzGWYQcDMHQfyWrfHIYooCyUtY5xYXRADE0C4/sr6l2+2smqBFRmSAU7gZix0ckjiLbhuJoNiL8V0386hzJcA0Yczxx4sIDfWv1TwWXbbpwGnet62LDqScJAeLDO4JF+V0Hkwq2RUv+Tq9oxVDcmUjmvkDTi9X2QFrXK9h2c55ijMgs8saXjk6wxD53UeTbdO215mZta8G9xhd6riRkAbHM8lYIBCEIMP0KEP0KECqL2bPdb4BOSKL2bPdb4BVm1dvsiu1vXfyGg7z+ytjjcrqKcnJjhN5VbTShou4gBcltbpM5xLIgWjQuPrHuHDxUU7Skku6S5tpYZDsAUOE7yUWBv8A7Rc/H7qn9+OWW9ajk5+aZ4YzDLVyv+iHg3zvfjfVS9nNeHB7Dhtx59luIWktY0vF23AyN9fl+ym1VaGZNFz2i1lv+zlnjMcZ5rlw4eHHPLK5+Jf5rraCtEg5O4j9x2KYvPqCOZ7w9hIIPrcB2dvcu4pZ8Qz14/cLDkywwymFym3pcHLeWXLpsiShCFLZybei8mENxs9fd/i/0lg3d6etYDszT5tgSESgOZ/iR1bNXZb9+Nh0ztof3XSoQVc9FIHukYW4txu23vbGCSCbD1cwqLa2wZIqZ2CYyBtNLCWua25BbdpGBt3OxtGv9bl2KEHLbVpJy8TObGHl9MxrWue5tmSOcXOdhBF8dsgbWvmis2BNIJnExtdLvsg5zmtxwRws6xaCfZ3OQ1XUoQUkNBO0uaN1gdK6XGSS8BxxFoYW2vfIOxfBVf8A05OWgOc24gkiuZZpA97t1Z+FwtEOocm6X7F16iVe0ooiGySNYXXtiIF7Ak69gJ+BQVlZsuV0wnbguHRODS5wBwsmY4Fwabe1uDY+qt9nbKkbMJnllzvy5rSSAZDDhDSQL2ERubDMqe7acIYXmVmEOwE3FsV7Ye++Vlua6O+HG3FllcXz0+aDm/8Ap+drA1hYHbpke8EszLFuLNzAC2YDFkHW4hdaEtszSAQRna2fPMJiAQhCDD9ChD9ChBEZDjgDbkYowLjUXbqvOXuIc5hFnMJa4ciP2Oo7CvS6L2bPdb4BcT09pDDLHWNbdptHM3n/AEO79R8Ap7mWGN05fyfxu9rzqpGzIjI0XGEd2vcryjpGRizGgX15nvKqKCra9oe03aRcFWJr2MtjcBfL+/cvFwzy5MrJPfw9PPhx4sJcr6+WJ9nMxmUNGLj9+/tVXWyROe27SbHMjK45doVzXDq5nq69neuWq6lt+rpz59y7OPg5bluW/wDHl/lc2GE6ZJq+f8uqia3CMNrWytpZYmlDBjc4NA4lUVLtjAwm18j1dM+/kuf2rXyTHE85XyA9Ud3b2rk4vw88s/N/l2Z/lY4YTXzHpWyNoCeMSNva5GfGxtdTlz/Qb/SN95//ALFdAvXk14Uxu5sIQhSsEIQgEIQgFFq6BkhBeCQA4AXNusMJOXG1xfhiPNSkIKuq2DC+Mx4cLS5rzbMlzSCCcVwdBqFGPRWnxYutixY73GTsQffTmPqr1CCji6K07SDZxILXC50LTcHTW98+22mSvEIQCEIQYfoUIfoUIFUXs2e63wCVtShbPE+J2j2kd3IjtBsfgm0Xs2e63wCcg8S2ZtSSklkp5MgHFpv+FwNsQ7Dr9VfSSXzJv9UfxZ2LhcyqYPWsx/vfgJ7CLt+DVzPR3adxunXy9X/5P1sp4bOLfTPN+Xn/ANQxzzxl36+HeNmvEAXEsA46DvVQMJuQcQvlwUCokJFrm1724fFJiqALi/aubLDOY5Xq9tuK4c1x6sfSxlnGnBbStY4iMcMzbs4fVUskxcbN1U+Rgb1sQ0tYcTx+Cpx8evltz5fU9PROiYaKdoboC7xVyqDoQb0rfef/AOxV+uqTXhbC7xlCEIUrBCEIBCEIBCEIBCEIBC1LhzWhqGj8Q+arc8Z7qdGoUd1Wzn4rU1zeRWd/I4p7yiejL6SX6FChPrv9p+YQqft8X2nt5fSRRezZ7rfAJyTRezZ7rfAJy6VELbGzm1EMkL/Ve0juPAjtBsfgvBZoXU8zmPbZ8bsLhztoR9D3L6HXFfxE6LekM38Tf8eMZgf9xgzw+8OHxCiq5Y7c7PPGYrN/G24t2jIkqtgor5XtdY6OQ7xuAGwGfaAeFuw3V6+iDbgXPAeea5OTkxwmpfNYTuW+tSK4RMbk3hr/AHKjP1QJS02AudLK32H0fkndmLD8TuA7BzPcunG9F17Rlj1Tq15tdj0IH+Vb7z/Eq/VXSUggaI2G7dbHieJClMcCMs7ag6hOvddGMuMkqTiCxvBzSbeeKyPn4pbVm5lHkLBmHIpdsu75oI86FVuWSW2/7FgznkFrbPyCsHzf7rO3P7T4Z3zuxL3zra8+SYWrRnEdvfrms71fafDUudzK0w35px4f8Itmsrx2/K20bdBZ3Xen2yQRn5CpeCLdaPuu3wWN0cs/opOHVYtoo/XxOtHLHdn1QpNvD7oVseGRW5U+i9mz3W+ATkmi9mz3W+ATl6jIIQhB5/0n2N6LOKqIf4UhwygaMc78fuk27j3qvrpH3ABOZztqvTKiBr2ljgC1wIIOhB1BVPsno3HC4vJL3X6pd+EcO824rnv48vJ1qZS61FF0f6JXdvJQWtOYacnO97+kdmvcu2ijDQGtAAGgGgW6FvJE44zH0RVtyvyUXyDxCnvbcWVd4jybrDkmsttcfo9suXW+Y+l+Sa7gfqFGbrl8lmO49X5HTn8Cpxz+KrcUi3/Kxw5j6rDJQTlkeRW2WeditPFVYv5KLajxSpmtOEu1abgi/ctjLbtVdJ3G1tOHgoraMCRzwTdwGhy48Ezf5ZcOa0fMbjhkf2UXCUmWjLuA4H6FbCQX5HkVHOM318Ebhx1PzzVNJSHOABzH0WrqhuWaQKP/AHW7swtmwgWvn3H9k8I3WfShyv8ARLNZpYfNSI4mXyCY1uQtbh5yU6iULeSHQcOA7+aFNI17vuhWmgyi9mz3W+ATkmi9mz3W+ATlsgIQhAIQhAIQhAKvqxZ2mvk/srBRq5l235LPlm8UxC3ht+/3W2I37exDbcv780wHJc8i5WAnI6jT+yYLj1sxz+4H7LfjYpc8wY0udezeWZ+ivL0+Venfg9sWWRuFndDIhLbzblcX7D39q3bKDlo4ecua1mUqlmmwYNCLeeaH3FuOfx0K3JtqtHizTbhnbuN8lbQw3sKxfIXW2RPasG4HPx1WelgBy868Vi+l8lmwvkfl+6ActOP7qNIYcy/b55rSxHH59/P/AJTAORWAcvjw71GhgyEXuOHfz5fZCzbW3L7oVpsNovZs91vgE5JovZs91vgE5bAQhCAQhCAQhCAWr23FlshKKnT4FNHH6hYrWWd3+K1a7Tz8Fy60vswHIcvIW45cFoOKyHaZ/wBlYbciPPBLlsSt+dh57FpPnYrPkx3igxjyLE5j6j7+PemWuDhOR+X9lHbKA3rOt5utJZ2g3be/dke+62wyulLpJDwbX186LJvnx71X0Nc57bPaGEGwGtxfgpJJ5kqZd+kW6PJv2eIWhlAvnfu/skgA28lGefH/AIU6RcjDKCch+ywJTxPHhrr2rWwWD5+aaV6qfhBvxy7UJIKFMi0yiZRezZ7rfAJyTRezZ7rfAJyuuEIQgEIQgEIQgEIQgi7RZdt+Iz+6gsPM+eatntuCOapGNwm1tDZY5zyN6qqDGF+EutqBmmMqMsm9tjw4rZp8+e1D28eaw5OueY1nTZr5amZ1+Q880iW5GpTSEFmoVJnb7VyxR4RqFm1rLEQzTB5/stePLwy6SSBnx83T45yNcx9R91o9mZ+Hx1WoztzWu1dJjSHC4PxHfx/us31uPj50UMXGYyPj381JiqATZ2R+h7vsVO0GEaLW/P5rdrdLLF1ZFBGfntQs4c8svJQphpLovZs91vgE5JovZs91vgE5WbBCEIBCEIBCEIBCEIBVO0mWeD/UPqPIVsoe1Y7svxbn91XOeEZekSN2iaCokD8vqpTT8istGN2w9tsua00snDh8vPxWjm8Fz54dN3PTWXaK4Wd8U0i60qBYptuI4qMarr4KOo+P7LDm3THDId/3C1I1Wu1dF87rJC3stQLWV5kpYzFKW24jt/Y/spLXBwOf3H2UQuHPigjUjLz9VaVWyxMsQefjxQlR1H9Xz4cdeSytIRYUXs2e63wCck0Xs2e63wCcrNQhCEAhCEAhCEAhCEAtXtuLLZCDnYwWuLTwNvspkZStrR4Xh39Q+o8hZidf4hZ2Mcbq2JOeY+KyRfz55rRp0PHTz8luOHyVbN+G8RqkZBbRHIX88Eyobdp5jP8AdJpjdpC5rj01O/LaUZEjv/dY1TCNRzC0HAjkpS1stQNEwcFgjxVpUWKTbFNIXAt0urGlaQyztVI59/2Q4aquGEmVy37W5Oa5YTDXoWz+3xWFsNfPbqhdeF8OWxZ0Xs2e63wCcoVG87tnut8Anbwq7Y9CRvCjeFA9CRvCjeFA9CRvCjeFA9CRvCjeFBDl2dJ+Gdwzz5m9+N9cx8h23W/ZkpH+odc3DuGtvVtpbO3f2Kw3hRvCgqdobMfgvvnOwkPseNiSRr2/RVlLROt7d+oPyHeunkebHuVBRFGGdsyhpon8JnagnLgCTbVWXPt8/ZR2O07vsmtOQ7lnWsN8CPPioVHqR9O5SsWiiU5/xT3lRcdzSMrrKVLA0S28uVx4rOLMjtWjnZHv+y5rPDdsfkj7ov8AssOd4pBhw1Rz5282WXHVYlOR7vurRSxu0Z/D7oWGnXu+6F0YelNP/9k="
        },

        {
          title: "Introductory Statistics",
          author: "OpenStax",
          description: "Statistics & Probability textbook with advanced topics and applications.",
          link: "/Pdfs/Year 1/S1/STAT/Books/Statistics-WEB.pdf",
          coverImage: "https://m.media-amazon.com/images/I/51J-g9Mo+fL._UF1000,1000_QL80_.jpg"
        },


        
      ],
      pastExams: [
        {
          title: "2024 Final Exam",
          year: "2024",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/STAT/Exams/Final Exam - Correction Promo 4.pdf"
        },


        {
          title: "2024 Midterm Exam",
          year: "2024",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/STAT/Exams/Midterm Exam - Correction Promo 4.pdf"
        },


        {
          title: "2023 Catch-up Exam",
          year: "2023",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/STAT/Exams/Catchup Exam - Correction Promo 3.pdf"
        },


        

        
        {
          title: "2023 Final Exam",
          year: "2023",
          description: "Detailed solutions to all problems",
          link: "/Pdfs/Year 1/S1/STAT/Exams/Final Exam - Correction Promo 3.pdf"
        },

        {
          title: "2023 Midterm Exam",
          year: "2023",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/STAT/Exams/Midterm Exam - Correction Promo 3.pdf"
        },

        

        

        {
          title: "2022 Catch-up Exam",
          year: "2022",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/STAT/Exams/Catchup Exam - Correction Promo 2.pdf"
        },

        {
          title: "2022 Final Exam",
          year: "2022",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/STAT/Exams/Final Exam - Correction Promo 2.pdf"
        },


        {
          title: "2022 Midterm Exam 2",
          year: "2024",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/STAT/Exams/Midterm Exam 2 - Correction Promo 2.pdf"
        },



        {
          title: "2022 Midterm Exam 1",
          year: "2024",
          description: "With model solutions",
          link: "/Pdfs/Year 1/S1/STAT/Exams/Midterm Exam 1 - Correction Promo 2.pdf"
        },

        
        
        
      ],
      

         
      
    }
    
  
},



'physics-1': {
  id: 'physics-1',
  name: 'Physics I',
  subtitle: 'First Semester, Year 1',
  description: 'Introduction to classical mechanics: motion in one and two dimensions, Newton’s laws, and the principles of work and energy.',
  chapters: [
    
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
    

  'kinematics': [
    {
      id: 'phy-kinematics-lecture-notes',
      type: 'lecture-notes',
      title: 'Kinematics in 1D & 2D',
      description: 'Detailed treatment of position, velocity, acceleration, and motion graphs with examples in one and two dimensions.',
      meta: { pages: '21 pages', tags: 'Motion Graphs • Vectors • Acceleration' },
      link: '/Pdfs/Year 1/S1/STAT/Problem Sheets/Problem sheet N-1.pdf',
      solutionsLink: '/Pdfs/Year 1/S1/STAT/Solutions/".pdf'


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



