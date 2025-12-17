import React from 'react';
import Reveal from './Reveal';

const Footer: React.FC = () => {
  return (
    <footer className="h-screen w-full snap-start bg-wedding-dark text-white flex flex-col justify-center items-center text-center">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal animation="zoom">
            <h2 className="font-script text-6xl md:text-8xl text-wedding-gold mb-8">Tú Nam & Thúy An</h2>
        </Reveal>
        
        <Reveal animation="fade-up" delay={200}>
            <p className="font-serif italic text-gray-400 mb-8 text-xl md:text-2xl">"And so the adventure begins"</p>
        </Reveal>
        
        <Reveal animation="fade-up" delay={300}>
            <div className="w-24 h-[1px] bg-gray-600 mx-auto mb-12"></div>
            <p className="text-xs text-gray-500 tracking-widest uppercase">
            © 2024 Wedding Invitation. Designed with Love.
            </p>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;