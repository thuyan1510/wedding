import React from 'react';
import Reveal from './Reveal';

// Custom SVG Icons to match the reference style
const ArchIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-16 md:h-16 text-gray-700 fill-none stroke-current" strokeWidth="1.5">
    <path d="M10,100 V40 C10,15 90,15 90,40 V100" />
    <path d="M10,40 C10,10 90,10 90,40" strokeDasharray="2 2" opacity="0.5" />
    {/* Floral decorative bits */}
    <path d="M10,40 Q0,30 10,20 Q20,30 10,40" fill="none" />
    <path d="M90,40 Q100,30 90,20 Q80,30 90,40" fill="none" />
    <path d="M25,100 L25,40 C25,25 75,25 75,40 L75,100" strokeWidth="1" opacity="0.8" />
  </svg>
);

const PlateIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-16 md:h-16 text-gray-700 fill-none stroke-current" strokeWidth="1.5">
    {/* Plate */}
    <circle cx="50" cy="50" r="35" />
    <circle cx="50" cy="50" r="25" strokeDasharray="1 3" />
    {/* Heart on plate */}
    <path d="M50,55 Q35,35 50,40 Q65,35 50,55" fill="none" />
    {/* Fork */}
    <path d="M15,20 L15,50 Q15,60 20,65 L20,90" />
    <path d="M10,20 L10,35 Q10,45 15,45" />
    <path d="M20,20 L20,35 Q20,45 15,45" />
    {/* Knife */}
    <path d="M85,90 L85,65 Q85,20 85,20 Q75,20 75,35 L75,90" />
    <line x1="75" y1="90" x2="85" y2="90" />
  </svg>
);

const Countdown: React.FC = () => {
  return (
    <section id="invitation" className="h-screen w-full snap-start bg-[#FAFAFA] flex flex-col overflow-hidden relative">
      {/* Background Texture (Optional subtle pattern) */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="w-full h-full overflow-y-auto no-scrollbar flex flex-col py-8 md:py-12 relative z-10">
        
        {/* 1. Top Images Row */}
        <Reveal animation="fade-up" className="grid grid-cols-3 gap-2 px-4 md:px-12 h-[30vh] md:h-[40vh] shrink-0 mb-6">
           <div className="h-full overflow-hidden rounded-sm">
               <img src="https://i.ibb.co/v40Fxpjh/THE-BRIDE.jpg" alt="Bride" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
           </div>
           <div className="h-full overflow-hidden rounded-sm translate-y-2"> {/* Offset effect */}
               <img src="https://i.ibb.co/zMTnMcV/BACKGROUND.jpg" alt="Couple" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
           </div>
           <div className="h-full overflow-hidden rounded-sm">
               <img src="https://i.ibb.co/dwFFxxnd/THE-GROOM.jpg" alt="Groom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
           </div>
        </Reveal>

        {/* 2. Invitation Text */}
        <div className="flex flex-col items-center text-center px-4 space-y-2 shrink-0">
            <Reveal animation="fade-up" delay={200}>
                <h3 className="font-sans text-gray-500 text-xs md:text-sm uppercase tracking-[0.2em] mb-2">TRÂN TRỌNG KÍNH MỜI</h3>
                <h2 className="font-serif text-2xl md:text-4xl text-[#C5A059] mb-4 tracking-wider">QUÝ KHÁCH</h2>
                <p className="font-serif text-gray-600 text-sm md:text-lg max-w-xs md:max-w-md mx-auto leading-relaxed">
                    Đến dự Bữa Tiệc thân mật cùng Gia Đình chúng Tôi vào lúc
                </p>
            </Reveal>
        </div>

        {/* 3. Date & Time Block */}
        <Reveal animation="zoom" delay={300} className="w-full max-w-2xl mx-auto my-6 shrink-0 px-4">
            <div className="flex items-center justify-center text-gray-700 relative">
                
                {/* Left: Time */}
                <div className="flex-1 text-right pr-4 md:pr-8 py-2 flex flex-col justify-center h-full">
                    <p className="font-serif text-xl md:text-3xl text-gray-600 tracking-widest">11h00</p>
                </div>

                {/* Vertical Divider Left */}
                <div className="w-[1px] h-16 md:h-24 bg-[#C5A059]"></div>

                {/* Center: Date */}
                <div className="px-6 md:px-12 flex flex-col items-center justify-center">
                    <span className="font-serif text-gray-500 text-xs md:text-base uppercase tracking-widest mb-1">Chủ Nhật</span>
                    <span className="font-serif text-6xl md:text-8xl font-bold text-[#5D4037] leading-none mb-1">8</span>
                    <span className="font-serif text-gray-500 text-xs md:text-base uppercase tracking-widest">Tháng 03</span>
                </div>

                {/* Vertical Divider Right */}
                <div className="w-[1px] h-16 md:h-24 bg-[#C5A059]"></div>

                {/* Right: Year */}
                <div className="flex-1 text-left pl-4 md:pl-8 py-2 flex flex-col justify-center h-full">
                    <p className="font-serif text-xl md:text-3xl text-gray-600 tracking-widest">Năm 2026</p>
                </div>
            </div>
            
            <p className="text-center text-gray-400 text-[10px] md:text-sm mt-4 font-serif italic">
                (Tức ngày 20 tháng 1 năm Bính Ngọ)
            </p>
        </Reveal>

        {/* 4. Schedule Icons */}
        <div className="mt-auto pb-6">
            <Reveal animation="fade-up" delay={400} className="grid grid-cols-2 gap-8 w-full max-w-md mx-auto px-8">
                <div className="flex flex-col items-center">
                    <ArchIcon />
                    <div className="text-gray-800 font-bold text-lg md:text-xl font-serif mt-2">11h00</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider">Đón khách</div>
                </div>
                <div className="flex flex-col items-center">
                    <PlateIcon />
                    <div className="text-gray-800 font-bold text-lg md:text-xl font-serif mt-2">11h30</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider">Khai Tiệc</div>
                </div>
            </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Countdown;