export interface Chapter {
  id: string;
  title: string;
  description: string;
}

export interface Resource {
  id: string;
  type: 'lecture-notes' | 'problem-set' | 'video-playlist' | 'extras';
  title: string;
  description: string;
  meta: {
    [key: string]: string;
  };
  link?: string; 
  solutionsLink?: string; 
}

export interface ModuleData {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  chapters: Chapter[];
  resources: { [key: string]: Resource[] };
}
