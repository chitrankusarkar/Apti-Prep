import React from 'react';
import Navbar from './components/Navbar';
import PlaylistSection from './components/PlaylistSection';
import ArticlesSection from './components/ArticlesSection';
import PreviousPapersSection from './components/PreviousPapersSection';
import Footer from './components/Footer';

// By importing Footer, its CSS is loaded for the whole app
import './components/Footer.css'; 

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <PlaylistSection />
        <ArticlesSection />
        <PreviousPapersSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;