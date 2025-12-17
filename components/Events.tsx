import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';

const Events: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: March 8, 2026 at 11:00 AM
    const targetDate = new Date('2026-03-08T11:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % 1000) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calendar generation for March 2026
  // March 1, 2026 is a Sunday.
  const calendarDays = [];
  const daysInMonth = 31;
  const startDay = 0; // 0 = Sunday (March 1, 2026)

  // Add empty slots for days before the 1st
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }
  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <section id="events" className="h-screen w-full snap-start relative overflow-hidden flex flex-col bg-gray-900">
       {/* Background Image with Overlay */}
       <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/zMTnMcV/BACKGROUND.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay to make text readable but keep image visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30"></div>
       </div>

       {/* Main Content Area */}
       <div className="relative z-10 flex-1 flex flex-col px-6 md:px-12 pt-12 text-white">
          
          {/* Top/Right Area: Calendar & "Wedding" Text */}
          <div className="flex flex-col items-center md:items-end w-full mt-8 md:mt-16">
             <Reveal animation="fade-up" className="text-right mb-6 md:mb-8 md:mr-12">
               <h1 className="font-script text-5xl md:text-8xl drop-shadow-lg">Wedding</h1>
             </Reveal>

             <Reveal animation="zoom" delay={200} className="w-full max-w-xs md:max-w-sm md:mr-8">
               <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center font-serif text-sm md:text-lg font-medium">
                  {/* Days of Week Header */}
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                    <div key={i} className="text-gray-300 font-bold">{d}</div>
                  ))}
                  
                  {/* Calendar Days */}
                  {calendarDays.map((day, idx) => {
                    if (!day) return <div key={idx}></div>;
                    const isWeddingDay = day === 8;
                    return (
                      <div key={idx} className="relative flex items-center justify-center h-8 w-8 md:h-10 md:w-10 mx-auto">
                         {isWeddingDay && (
                          <div className="absolute inset-0 transform scale-150 -translate-y-1">
                             <svg viewBox="0 0 32 32" className="w-full h-full fill-red-600 drop-shadow-md opacity-90">
                               <path d="M16,28.261c0,0-14-9.2-14-15.6s10.8-7.2,14-0.8c3.2-6.4,14-7.2,14,0.8S16,28.261,16,28.261z"/>
                             </svg>
                          </div>
                        )}
                        <span className={`relative z-10 ${isWeddingDay ? 'text-white font-bold' : 'text-gray-100'}`}>
                          {day}
                        </span>
                      </div>
                    );
                  })}
               </div>
             </Reveal>
          </div>

          {/* Countdown Section - Bottom Left/Center */}
          <div className="mt-auto mb-6 md:mb-12 w-full">
             <Reveal animation="slide-left" delay={300} className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-8">
                <h3 className="font-script text-4xl md:text-6xl mb-2 md:mb-0 text-white drop-shadow-md">Chỉ còn....</h3>
                
                <div className="flex gap-3 md:gap-6">
                   {[
                     { label: 'ngày', value: timeLeft.days },
                     { label: 'giờ', value: timeLeft.hours },
                     { label: 'phút', value: timeLeft.minutes },
                     { label: 'giây', value: timeLeft.seconds }
                   ].map((item, idx) => (
                      <div key={idx} className="bg-white/95 backdrop-blur-sm text-gray-800 rounded-md p-2 md:p-4 w-[60px] md:w-[90px] flex flex-col items-center shadow-xl">
                         <span className="text-xl md:text-4xl font-bold font-serif leading-none mb-1">{item.value}</span>
                         <span className="text-[10px] md:text-xs uppercase tracking-wider text-gray-500">{item.label}</span>
                      </div>
                   ))}
                </div>
             </Reveal>
          </div>
       </div>

       {/* Footer Section (White Panel) */}
       <div className="relative z-10 bg-white/95 backdrop-blur-md px-6 py-6 md:py-8 text-center shrink-0 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
          <Reveal animation="fade-up" delay={400}>
            <p className="font-serif text-gray-700 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto mb-2">
              Chúng mình rất mong sự hiện diện của bạn để cùng nhau chung vui, sẻ chia niềm hạnh phúc và lưu lại những khoảnh khắc đáng nhớ trong ngày cưới.
            </p>
            <p className="font-serif text-gray-500 text-xs md:text-sm italic">
               Đừng quên để lại xác nhận tham dự để chúng mình chuẩn bị chu đáo nhất nhé!
            </p>
          </Reveal>
       </div>
    </section>
  );
};

export default Events;