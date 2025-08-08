export interface Chapter {
  id: string;
  title: string;
  description: string;
}

export interface Resource {
  id: string;
  type: 'lecture-notes' | 'problem-set' | 'video-playlist' | 'extras' | 'book' | 'exam' ;
  title: string;
  description: string;
  meta: {
    [key: string]: string;
  };
  link?: string; 
  solutionsLink?: string; 
  thumbnail?: string;
  coverImage?: string;
}

export interface ModuleData {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  chapters: Chapter[];
  resources: { [key: string]: Resource[] };
  extraResources?: ExtraResources;
}


export interface ExtraResourceItem {
  title: string;
  description: string;
  link: string;
  author?: string;
  year?: string;
  type?: string;
  coverImage?: string;
}

export interface ExtraResources {
  recommendedBooks?: ExtraResourceItem[];
  pastExams?: ExtraResourceItem[];
  usefulWebsites?: ExtraResourceItem[];
  additionalMaterials?: ExtraResourceItem[];
}