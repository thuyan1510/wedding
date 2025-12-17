import React, { useState, useRef } from 'react';
import { Music, Pause } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Using a copyright-free wedding-style track placeholder
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src={musicUrl} loop />
      <button 
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${isPlaying ? 'bg-wedding-gold text-white rotate-180' : 'bg-white text-wedding-gold hover:bg-wedding-gold hover:text-white'}`}
      >
        {isPlaying ? <Pause size={20} /> : <Music size={20} />}
      </button>
      {isPlaying && (
        <span className="absolute -top-2 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wedding-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-wedding-pink"></span>
        </span>
      )}
    </div>
  );
};

export default MusicPlayer;