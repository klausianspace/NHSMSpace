import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BookOpen, FileText, Edit, Video, PlusCircle, ArrowRight, Download, BookOpenCheck, Play, ExternalLink } from 'lucide-react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import ProgressTracker from '../components/ProgressTracker';
import { ModuleData } from '../types/module'; 
import { modulesData } from '../data/module';

import { chapterProgress } from '../data/chapterProgress';




const ModulePage: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const [activeChapter, setActiveChapter] = useState<string>('real-numbers');
  const [module, setModule] = useState<ModuleData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log('Module keys:', Object.keys(modulesData));
    console.log('Received moduleId:', moduleId);
  
    const found = modulesData[moduleId || ''];
    if (found) {
      setModule(found);
      document.title = `NHSM Space - ${found.name}`;
    } else {
      setModule(null);
      document.title = 'NHSM Space - Module Not Found';
    }
  
    setLoading(false);
  }, [moduleId]);
  

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl text-accent">Loading...</div>
      </div>
    );
  }

  if (!module) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white mb-4">Module Not Found</h1>
        <p className="text-white/70 mb-6">The module you are looking for does not exist or is not yet available.</p>
        <a href="/study-guide" className="btn-primary">Back to Study Guide</a>
      </div>
    );
  }

  return (
    <main className="page-content min-h-screen">
      <div className="container mx-auto px-4 mb-20">
        {/* Module Header */}
        <header className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {module.name}
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {module.description}
          </motion.p>
          
          {/* Chapter Navigation */}
          <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {module.chapters.map((chapter, index) => (
            <button
              key={chapter.id}
              onClick={() => setActiveChapter(chapter.id)}
              className={`py-3 px-5 rounded-full text-base font-medium transition-all duration-300
                flex items-center gap-2
                ${activeChapter === chapter.id
                  ? 'primary-gradient text-white shadow-lg shadow-primary/20'
                  : 'bg-dark-lighter/70 border border-white/10 text-white/70 hover:bg-dark-lighter hover:text-white'
                      }`}
                    style={{ animationDelay: `${0.1 + (index * 0.05)}s` }}
                  >
                    {chapter.id === 'progress-tracker' ? (
                      <>
                        <BookOpenCheck className="w-4 h-4" />
                        {chapter.title}
                      </>
                    ) : (
                      chapter.title
                    )}
          </button>
        ))}


          <button
              onClick={() => setActiveChapter('extra-resources')}
              className={`py-3 px-5 rounded-full text-base font-medium transition-all duration-300
                flex items-center gap-2
                ${activeChapter === 'extra-resources'
                  ? 'primary-gradient text-white shadow-lg shadow-primary/20'
                  : 'bg-dark-lighter/70 border border-white/10 text-white/70 hover:bg-dark-lighter hover:text-white'
                }`}
            >
              <ExternalLink className="w-4 h-4" />
              Extra Resources
            </button>
          </motion.div>
        </header>
        
        {/* Chapter Content */}
        {module.chapters.map(chapter => (
          <motion.section
            key={chapter.id}
            className={`${activeChapter === chapter.id ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-center text-white/80 max-w-3xl mx-auto mb-12">
              {chapter.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
              {module.resources[chapter.id]?.map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
            </div>

            {chapterProgress[chapter.id] && (
              <div className="max-w-6xl mx-auto">
                <ProgressTracker 
                  steps={chapterProgress[chapter.id]} 
                  chapterId={chapter.id} 
                />
              </div>
            )}


          </motion.section>
        ))}


{/* Extra Resources Section */}
<motion.section
  className={`${activeChapter === 'extra-resources' ? 'block' : 'hidden'}`}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl font-bold text-white mb-6">Additional Resources for {module.name}</h2>
    
    {/* Recommended Books - Now using module data */}
    {module.extraResources?.recommendedBooks && module.extraResources.recommendedBooks.length > 0 && (
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          Recommended Books
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {module.extraResources.recommendedBooks.map((book, index) => (
            <ResourceCard 
              key={`book-${index}`}
              resource={{
                id: `book-${index}`,
                type: 'book',
                title: book.title,
                description: `${book.author ? `By ${book.author}\n` : ''}${book.description}`,
                meta: {},
                coverImage: book.coverImage,
                author: book.author , 
                link: book.link
              }}
              index={index}
            />
          ))}
        </div>
      </div>
    )}
    
    {/* Past Exams - Now using module data */}
    {module.extraResources?.pastExams && module.extraResources.pastExams.length > 0 && (
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Past Exams
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {module.extraResources.pastExams.map((exam, index) => (
            <ResourceCard 
              key={`exam-${index}`}
              resource={{
                id: `exam-${index}`,
                type: 'exam',
                title: exam.title,
                description: `${exam.year ? `Year: ${exam.year}\n` : ''}${exam.description}`,
                meta: {},
                link: exam.link
              }}
              index={index}
            />
          ))}
        </div>
      </div>
    )}
    
    {/* Useful Websites - Now using module data */}
    {module.extraResources?.usefulWebsites && module.extraResources.usefulWebsites.length > 0 && (
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
          <ExternalLink className="w-5 h-5" />
          Useful Websites
        </h3>
        <div className="space-y-4">
          {module.extraResources.usefulWebsites.map((site, index) => (
            <motion.div
              key={`site-${index}`}
              className="bg-dark-lighter/50 p-4 rounded-lg border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">{site.title}</h4>
                  <p className="text-white/70">{site.description}</p>
                </div>
                <a 
                  href={site.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-1 px-3 py-1 text-sm"
                >
                  <ExternalLink className="w-3 h-3" />
                  Visit
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )}
    
    {/* Additional Materials - Now using module data */}
    {module.extraResources?.additionalMaterials && module.extraResources.additionalMaterials.length > 0 && (
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-accent mb-4 flex items-center gap-2">
          <PlusCircle className="w-5 h-5" />
          Additional Materials
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {module.extraResources.additionalMaterials.map((material, index) => (
            <ResourceCard 
              key={`material-${index}`}
              resource={{
                id: `material-${index}`,
                type: 'extras',
                title: material.title,
                description: material.description,
                meta: { type: material.type || 'PDF' },
                link: material.link
              }}
              index={index}
            />
          ))}
        </div>
      </div>
    )}
  </div>
</motion.section>
      </div>
      <Footer />
    </main>
  );
};

// Resource Card Component
interface ResourceCardProps {
  resource: Resource;
  index: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, index }) => {
  // Get icon based on resource type
  const getIcon = () => {
    switch (resource.type) {
      case 'lecture-notes':
        return <FileText className="w-6 h-6" />;
      case 'problem-set':
        return <Edit className="w-6 h-6" />;
      case 'video-playlist':
        return <Video className="w-6 h-6" />;
      case 'extras':
        return <PlusCircle className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  // Format resource type for display
  const getTypeLabel = () => {
    switch (resource.type) {
      case 'lecture-notes':
        return 'LECTURE NOTES';
      case 'problem-set':
        return 'PROBLEM SET';
      case 'video-playlist':
        return 'VIDEO PLAYLIST';
      case 'extras':
        return 'EXTRAS';
      default:
        return resource.type.toUpperCase();
    }
  };

  return (
    <motion.div
      className="card card-hover"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
    >

      {resource.coverImage && (
              <div className="h-48 rounded-t-lg overflow-hidden mb-4">
                <img 
                  src={resource.coverImage} 
                  alt={`${resource.title} cover`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            )}
      <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-semibold 
        bg-accent/20 text-accent mb-5">
        {getIcon()}
        {getTypeLabel()}
      </span>
      
      <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
      <p className="text-white/70 mb-5">{resource.description}</p>
      
      {/* Meta Information */}
      <div className="flex flex-wrap gap-4 mb-5">
        {Object.entries(resource.meta).map(([key, value]) => (
          <span key={key} className="text-sm text-white/60 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
            {value}
          </span>
        ))}
      </div>
      
      {/* Resource Actions */}
      {resource.type === 'extras' ? (
        <ExtraLinks />
      ) : resource.type === 'video-playlist' ? (
        <VideoResource link={resource.link} thumbnail={resource.thumbnail} />

      ) : (
        <div className="flex flex-col sm:flex-row gap-3">
          {resource.link && (
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              View PDF
            </a>
          )}
          {resource.type === 'problem-set' && resource.solutionsLink && (
            <a
              href={resource.solutionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4" />
              Solutions
            </a>
          )}

        </div>

      )}
    </motion.div>
  );
};

// Extras component with links
const ExtraLinks: React.FC = () => {
  return (
    <>
      <ul className="space-y-3 mb-5">
        {[
          "Supplementary Problems",
          "Recommended Textbooks",
          "Interactive Visualizations"
        ].map((link, index) => (
          <li key={index} className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-accent">
            <a href="#" className="text-white hover:text-accent transition-colors duration-300 flex items-center gap-1.5">
              {link}
              <ExternalLink className="w-3.5 h-3.5 text-accent" />
            </a>
          </li>
        ))}
      </ul>
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="btn-secondary">
          <ArrowRight className="w-4 h-4" />
          Random Exercise
        </button>
        <button className="btn-primary">
          <ExternalLink className="w-4 h-4" />
          All Resources
        </button>
      </div>
    </>
  );
};

// Video resource component
interface VideoResourceProps {
  link: string;
  thumbnail?: string;
}

const VideoResource: React.FC<VideoResourceProps> = ({ link , thumbnail }) => {
  return (
    <>
      <div className="h-40 rounded-lg overflow-hidden bg-cover bg-center mb-5 relative group cursor-pointer"
       style={{ backgroundImage: `url(${thumbnail || ''})` }}>


        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-primary/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center
            transition-transform duration-300 group-hover:scale-110">
            <Play className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn-primary w-full inline-flex items-center justify-center gap-2"
      >
        <Play className="w-4 h-4" />
        Watch Playlist
      </a>
    </>
  );
};

interface ResourceCardProps {
  resource: Resource & {
    coverImage?: string;
    author?: string;
  };
  index: number;
}




export default ModulePage;