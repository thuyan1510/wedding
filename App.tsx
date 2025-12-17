import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Couple from './components/Couple';
import Countdown from './components/Countdown';
import Events from './components/Events';
import Location from './components/Location';
import Gallery from './components/Gallery';
import Rsvp from './components/Rsvp';
import GiftBox from './components/GiftBox';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

const App: React.FC = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar selection:bg-wedding-pink selection:text-wedding-dark">
      <Navigation />
      <main>
        <Hero />
        <Couple />
        <Countdown />
        <Events />
        <Location />
        <Gallery />
        <Rsvp />
        <GiftBox />
        <Footer />
      </main>
      <MusicPlayer />
    </div>
  );
};

export default App;