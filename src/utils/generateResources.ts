export type ResourceInput = {
  prefix: string;
  chapterTitle: string;
  pages: string;
  tags: string;
  difficulty: string;
  problemSetNumber: number;
  videoCount: string;
  duration: string;
};

type ChapterResource = {
  id: string;
  type: 'lecture-notes' | 'problem-set' | 'extras' | 'video-playlist';
  title: string;
  description: string;
  meta: Record<string, string>;
};

export function generateResources(input: ResourceInput): ChapterResource[] {
  return [
    {
      id: `${input.prefix}-lecture-notes`,
      type: 'lecture-notes',
      title: `${input.chapterTitle} Textbook`,
      description: '', 
      meta: { pages: input.pages, tags: input.tags }
    },
    {
      id: `${input.prefix}-problem-set`,
      type: 'problem-set',
      title: `Problem Set #${input.problemSetNumber}`,
      description: '',
      meta: { difficulty: input.difficulty, solutions: 'Solutions Included' }
    },
    {
      id: `${input.prefix}-extras`,
      type: 'extras',
      title: 'Additional Practise',
      description: 'External resources, exercises, and supplementary materials for deeper understanding.',
      meta: { resources: '3 external resources', type: 'Textual' }
    },
    {
      id: `${input.prefix}-video-playlist`,
      type: 'video-playlist',
      title: input.chapterTitle,
      description: 'This playlist covers the theory side and a lot of applications to master the chapter.',
      meta: { videos: input.videoCount, duration: input.duration }
    }
  ];
}
