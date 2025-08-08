import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import StudyGuide from './pages/StudyGuide';
import ModulePage from './pages/ModulePage';
import Announcements from './pages/Announcements';
import Academic from './pages/Academic';
import Clubs from './pages/Clubs';
import Events from './pages/Events';
import Tips from './pages/Tips';
import Contact from './pages/Contact';

// Components
import Navbar from './components/Navbar';
import FloatingElements from './components/FloatingElements';

function App() {
  return (
    <div className="App min-h-screen">
      <ScrollToTop />
      <FloatingElements />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study-guide" element={<StudyGuide />} />
        <Route path="/module/:moduleId" element={<ModulePage />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/events" element={<Events />} />
      
      
        <Route path="/tips" element={<Tips />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;