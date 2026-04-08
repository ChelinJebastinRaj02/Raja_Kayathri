import { useEffect, useState } from 'react';
import Hero from './sections/Hero';
import Gratitude from './sections/Gratitude';
import Events from './sections/Events';
import Gallery from './sections/Gallery';
import RSVP from './sections/RSVP';

import Footer from './sections/Footer';
import Navigation from './components/Navigation';
import MusicPlayer from './components/MusicPlayer';
import FallingPetals from './components/FallingPetals';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-[#FFFFF0] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <FallingPetals />
      <Navigation />
      <main>
        <Hero />
        <Gratitude />
        <Events />
        <Gallery />
        <RSVP />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default App;
