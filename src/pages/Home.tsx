import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AnnouncementsSection from '../components/Announcements';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'NHSM Space - Home';
  }, []);
  
  return (
    <main>
      <Hero />
      <Features />
      <AnnouncementsSection />
      <Footer />
    </main>
  );
};

export default Home;