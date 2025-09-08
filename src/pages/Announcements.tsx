import React from 'react';
import Footer from '../components/Footer';
import { Clock, Megaphone } from 'lucide-react'; // Using Lucide icons which match your project

const Announcements: React.FC = () => {
  
  React.useEffect(() => {
    document.title = 'NHSM Space - Announcements';
  }, []);
  
  return (
    <main className="page-content min-h-screen">
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">Announcements</h1>
          <div className="bg-dark-lighter/30 rounded-xl border border-white/10 p-12 max-w-3xl mx-auto">
            <div className="text-center py-12">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center">
                    <Megaphone className="w-12 h-12 text-accent" strokeWidth={1.5} />
                  </div>
                  <Clock className="w-8 h-8 text-white bg-dark-darker p-1.5 rounded-full absolute -right-2 -bottom-2 border-2 border-dark-lighter" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
              <p className="text-xl text-white/80 mb-6">
                We're currently preparing this section with important updates.
              </p>
              <div className="max-w-md mx-auto bg-dark-darker/50 rounded-full h-2.5 mb-8">
                <div className="bg-accent h-2.5 rounded-full w-3/4 animate-pulse"></div>
              </div>
              <p className="text-white/60">
                Check back soon for official announcements and news.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};



export default Announcements;