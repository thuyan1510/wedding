import React from 'react';
import Reveal from './Reveal';

const Couple: React.FC = () => {
  return (
    <section id="couple" className="h-screen w-full bg-white snap-start flex flex-col relative overflow-hidden">
      <div className="w-full h-full flex flex-col p-4 md:p-8">
        
        {/* Header - Compact */}
        <Reveal animation="fade-up" className="text-center mb-4 md:mb-12 mt-12 md:mt-0 flex-shrink-0">
          <h2 className="text-wedding-gold font-serif uppercase tracking-widest text-[10px] md:text-sm mb-1">The Happy Couple</h2>
          <h1 className="font-serif text-3xl md:text-5xl text-gray-800">Bride & Groom</h1>
        </Reveal>

        {/* Main Content - Flex Grow to fill space */}
        <div className="flex-1 flex flex-col md:grid md:grid-cols-2 md:items-center justify-center gap-4 md:gap-0 min-h-0">
          
          {/* Left Block (Groom) - Slides in from LEFT */}
          {/* Desktop: Align to right (center of screen), Text left of Image */}
          <Reveal animation="slide-left" delay={200} className="flex flex-row items-center gap-4 w-full h-full justify-center md:justify-end md:pr-8">
             {/* Text */}
             <div className="text-right flex-1 md:flex-none">
                <h3 className="text-wedding-gold font-serif uppercase tracking-widest text-[10px] md:text-sm mb-0 md:mb-2">The Groom</h3>
                <h2 className="font-script text-3xl md:text-6xl text-gray-800 leading-none mb-1 md:mb-2">Tú Nam</h2>
                <div className="font-serif text-gray-600 text-[10px] md:text-sm leading-tight space-y-0.5">
                    <p>Bố: Lê Duy Cử</p>
                    <p>Mẹ: Vũ Thị Hồng Nga</p>
                </div>
             </div>
             
             {/* Image */}
             <div className="relative w-[40%] md:w-[220px] aspect-[2/3] overflow-hidden shadow-lg rounded-sm group flex-shrink-0">
               <img 
                 src="https://i.ibb.co/dwFFxxnd/THE-GROOM.jpg" 
                 alt="Tú Nam" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 border-[1px] border-white/20 m-2 pointer-events-none"></div>
             </div>
          </Reveal>

          {/* Right Block (Bride) - Slides in from RIGHT */}
          {/* Desktop: Align to left (center of screen), Image left of Text (row-reverse) */}
          <Reveal animation="slide-right" delay={400} className="flex flex-row-reverse items-center gap-4 w-full h-full justify-center md:justify-start md:pl-8">
             {/* Text */}
             <div className="text-left flex-1 md:flex-none">
                <h3 className="text-wedding-gold font-serif uppercase tracking-widest text-[10px] md:text-sm mb-0 md:mb-2">The Bride</h3>
                <h2 className="font-script text-3xl md:text-6xl text-gray-800 leading-none mb-1 md:mb-2">Thúy An</h2>
                <div className="font-serif text-gray-600 text-[10px] md:text-sm leading-tight space-y-0.5">
                    <p>Bố: Bùi Xuân Đậu</p>
                    <p>Mẹ: Phạm Thị Châm</p>
                </div>
             </div>

             {/* Image */}
             <div className="relative w-[40%] md:w-[220px] aspect-[2/3] overflow-hidden shadow-lg rounded-sm group flex-shrink-0">
               <img 
                 src="https://i.ibb.co/v40Fxpjh/THE-BRIDE.jpg" 
                 alt="Thúy An" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 border-[1px] border-white/20 m-2 pointer-events-none"></div>
             </div>
          </Reveal>
        </div>

        {/* Footer Quote - Compact */}
        <Reveal animation="zoom" delay={600} className="mt-4 md:mt-8 text-center w-full flex-shrink-0 mb-4 md:mb-0">
          <p className="font-serif italic text-sm md:text-2xl text-gray-600 leading-tight md:leading-relaxed px-4">
            "Yêu nhau không phải là nhìn nhau, mà là cùng nhau nhìn về một hướng."
          </p>
          <div className="w-8 md:w-16 h-[1px] md:h-[2px] bg-wedding-gold mx-auto mt-2 md:mt-6"></div>
        </Reveal>
      </div>
    </section>
  );
};

export default Couple;