import React, { useState } from 'react';
import Reveal from './Reveal';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden snap-start bg-white flex flex-col items-center justify-between py-10 md:py-12">
      
      {/* Decorative Florals - Top Left (Double Layer with Blooming Animation) */}
      <div className="absolute top-0 left-0 w-40 md:w-64 pointer-events-none z-10">
        {/* First Layer (Higher/Back) */}
        <img 
          src="https://assets.cinelove.me/resources/bouquet/gm7mq3ru5s7k4o1dt5ymhp.png" 
          alt="Floral Decor" 
          className="absolute -top-10 -left-10 w-full opacity-0 mix-blend-multiply origin-top-left animate-[bloomTopLeft_2s_cubic-bezier(0.25,1,0.5,1)_forwards]"
          style={{ animationDelay: '0.2s' }}
        />
        {/* Second Layer (Lower/Front) */}
        <img 
          src="https://assets.cinelove.me/resources/bouquet/gm7mq3ru5s7k4o1dt5ymhp.png" 
          alt="Floral Decor" 
          className="absolute top-6 -left-2 w-[90%] opacity-0 mix-blend-multiply origin-top-left animate-[bloomTopLeft_2.2s_cubic-bezier(0.25,1,0.5,1)_forwards]"
          style={{ animationDelay: '0.6s' }} 
        />
      </div>

      {/* Decorative Florals - Bottom Right (Double Layer with Blooming Animation) */}
      <div className="absolute bottom-0 right-0 w-40 md:w-64 pointer-events-none z-10">
        {/* First Layer (Corner/Back) */}
        <img 
          src="https://assets.cinelove.me/resources/bouquet/gm7mq3ru5s7k4o1dt5ymhp.png" 
          alt="Floral Decor" 
          className="absolute -bottom-10 -right-10 w-full opacity-0 mix-blend-multiply origin-bottom-right animate-[bloomBottomRight_2s_cubic-bezier(0.25,1,0.5,1)_forwards]"
          style={{ animationDelay: '0.2s' }}
        />
        {/* Second Layer (Higher/Front - extending into content) */}
        <img 
          src="https://assets.cinelove.me/resources/bouquet/gm7mq3ru5s7k4o1dt5ymhp.png" 
          alt="Floral Decor" 
          className="absolute bottom-8 right-0 w-[90%] opacity-0 mix-blend-multiply origin-bottom-right animate-[bloomBottomRight_2.2s_cubic-bezier(0.25,1,0.5,1)_forwards]"
          style={{ animationDelay: '0.6s' }}
        />
      </div>

      {/* Top Header */}
      <div className="flex flex-col items-center z-20 mt-4 md:mt-8">
        <Reveal animation="fade-up">
          <div className="flex gap-8 md:gap-16 text-[10px] md:text-xs font-serif text-gray-400 uppercase tracking-widest mb-4">
             <span>You Are</span>
             <span>The Love Of</span>
             <span>My Life</span>
          </div>
          <h1 className="font-script text-5xl md:text-7xl text-gray-700 text-center leading-relaxed">
            Wedding Invitation
          </h1>
        </Reveal>
      </div>

      {/* Center: Interactive Envelope */}
      <div className="relative z-30 w-full flex flex-col items-center justify-center flex-1 my-4">
        
        {/* Envelope Container */}
        <div 
          onClick={() => setIsOpen(true)}
          className="relative w-[300px] h-[200px] md:w-[400px] md:h-[260px] cursor-pointer perspective-1000 group select-none mt-8"
        >
          {/* Hearts Animation Container */}
          {isOpen && (
            <div className="absolute inset-0 pointer-events-none z-[60]">
               <Heart className="absolute text-red-600 fill-red-600 w-8 h-8 left-1/4 animate-[floatUp_3s_ease-out_forwards]" style={{ animationDelay: '0.2s' }} />
               <Heart className="absolute text-red-500 fill-red-500 w-12 h-12 left-1/2 -ml-6 animate-[floatUp_3.5s_ease-out_forwards]" style={{ animationDelay: '0.5s' }} />
               <Heart className="absolute text-red-600 fill-red-600 w-6 h-6 right-1/4 animate-[floatUp_2.8s_ease-out_forwards]" style={{ animationDelay: '0.8s' }} />
            </div>
          )}

          {/* Envelope Body (Back) - z-0 */}
          <div className="absolute inset-0 bg-[#E6Dcd3] shadow-2xl rounded-sm z-0"></div>

          {/* Card / Photo Inside 
              z-index logic: 
              - Always z-20. 
              - Front Pocket is z-30. 
              - Closed Top Flap is z-40.
              - Open Top Flap is z-10.
              This ensures photo is sandwiched between Back and Pocket, giving the "inside" look.
          */}
          <div 
            className={`absolute inset-3 bg-white p-1 md:p-2 shadow-sm transition-all duration-1000 ease-in-out origin-bottom z-20
              ${isOpen ? '-translate-y-40 md:-translate-y-52' : 'translate-y-0'}`}
          >
             <div className="w-full h-full overflow-hidden relative">
                <img 
                  src="https://i.ibb.co/tTDD92Pz/nh-6.jpg" 
                  alt="Couple" 
                  className="w-full h-full object-cover" 
                />
                {/* Overlay Text on Photo if needed */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/40 to-transparent p-2">
                   <p className="text-white font-script text-xl text-center">Tú Nam & Thúy An</p>
                </div>
             </div>
          </div>

          {/* Envelope Front (Pocket) - z-30 
              Ensures it covers the bottom part of the photo when it slides up.
          */}
          <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-sm">
             
             {/* Left Flap: Full Height Triangle */}
             <div className="absolute top-0 left-0 w-0 h-0 
                border-l-[150px] md:border-l-[200px] 
                border-t-[100px] md:border-t-[130px] 
                border-b-[100px] md:border-b-[130px] 
                border-l-[#dccebc] border-t-transparent border-b-transparent shadow-sm">
             </div>
             
             {/* Right Flap: Full Height Triangle */}
             <div className="absolute top-0 right-0 w-0 h-0 
                border-r-[150px] md:border-r-[200px] 
                border-t-[100px] md:border-t-[130px] 
                border-b-[100px] md:border-b-[130px] 
                border-r-[#dccebc] border-t-transparent border-b-transparent shadow-sm">
             </div>

             {/* Bottom Flap: Triangle from bottom, overlapping sides */}
             <div className="absolute bottom-0 left-0 w-0 h-0 
                border-b-[110px] md:border-b-[145px] 
                border-l-[150px] md:border-l-[200px] 
                border-r-[150px] md:border-r-[200px] 
                border-b-[#e0d3c1] border-l-transparent border-r-transparent shadow-md">
             </div>
          </div>

          {/* Envelope Top Flap 
              - Closed: z-40 (Covers everything).
              - Open: z-10 (Goes behind photo, which is z-20).
          */}
          <div 
             className={`absolute top-0 left-0 w-full origin-top transition-transform duration-700 ease-in-out transform-style-3d
             ${isOpen ? 'rotate-x-180 z-10' : 'rotate-x-0 z-40'}`}
             style={{ transformOrigin: 'top' }}
          >
             <div className="w-0 h-0 border-t-[125px] md:border-t-[160px] border-l-[150px] md:border-l-[200px] border-r-[150px] md:border-r-[200px] border-t-[#d6c7b5] border-l-transparent border-r-transparent filter drop-shadow-md relative">
                {/* Wax Seal */}
                <div className={`absolute -top-[125px] md:-top-[160px] left-1/2 -translate-x-1/2 translate-y-[85px] md:translate-y-[115px] w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                   <div className="w-full h-full bg-[#8B5E3C] rounded-full shadow-inner flex items-center justify-center border-4 border-[#7A4E30]">
                      <span className="font-script text-white/50 text-xl">Love</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Footer Text / Event Details */}
      <div className="z-20 text-center px-4 w-full mt-auto mb-8">
         <Reveal animation="fade-up" delay={500}>
            <div className="w-full flex justify-center mb-6">
                <div className="h-[2px] w-16 bg-gray-200 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)]"></div>
            </div>

            <p className="font-sans text-gray-500 uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4">
              Trân trọng kính mời
            </p>

            <div className="flex flex-col gap-1 mb-6">
               <p className="font-serif text-gray-600 text-sm md:text-base">
                 ĐẾN DỰ BUỔI TIỆC CHUNG VUI
               </p>
               <p className="font-serif text-gray-600 text-sm md:text-base">
                 CÙNG GIA ĐÌNH CHÚNG TÔI VÀO LÚC
               </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 font-serif text-[#C5A059] text-2xl md:text-4xl">
               <span>11 GIỜ 00</span>
               <span className="text-gray-300 font-light">|</span>
               <span>Chủ nhật</span>
               <span className="text-gray-300 font-light">|</span>
               <span>08.03.2026</span>
            </div>

            <p className="mt-4 font-serif italic text-gray-500 text-xs md:text-sm">
               (ngày 20 tháng 1 năm Bính Ngọ)
            </p>
         </Reveal>
      </div>

      {/* Global Style for Rotate X and Float Animation */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
        .rotate-x-0 {
          transform: rotateX(0deg);
        }
        @keyframes floatUp {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          20% { opacity: 1; transform: translateY(-20px) scale(1); }
          100% { transform: translateY(-150px) scale(1.2); opacity: 0; }
        }
        
        /* New Bloom/Swing Animations for Florals - "Xổ ra" effect */
        @keyframes bloomTopLeft {
          0% { transform: scale(0.2) rotate(90deg); opacity: 0; }
          100% { transform: scale(1) rotate(180deg); opacity: 0.9; }
        }
        
        @keyframes bloomBottomRight {
          0% { transform: scale(0.2) rotate(-90deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 0.9; }
        }
      `}</style>
    </section>
  );
};

export default Hero;