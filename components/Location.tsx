import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import Reveal from './Reveal';

const Location: React.FC = () => {
  const address = "Thôn Mộ Trạch, Xã Đường An, TP. Hải Phòng";
  const encodedAddress = encodeURIComponent(address);
  // Use a search query link since we changed the address dynamically
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section id="location" className="h-screen w-full snap-start bg-slate-50 relative flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="w-full h-full max-w-5xl flex flex-col py-16 md:py-20 relative z-10">
        
        {/* Header Section */}
        <Reveal animation="fade-up" className="text-center mb-6 md:mb-10 flex-shrink-0">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
             <MapPin className="text-wedding-gold w-6 h-6" />
          </div>
          <h3 className="text-gray-500 font-sans uppercase tracking-[0.2em] text-[10px] md:text-xs mb-2">Đường Đến Hạnh Phúc</h3>
          <h1 className="font-serif text-3xl md:text-5xl text-gray-800 mb-2">Bản Đồ Chỉ Dẫn</h1>
          <p className="font-serif text-gray-600 text-sm md:text-lg italic">
            {address}
          </p>
        </Reveal>

        {/* Map Container */}
        <Reveal animation="zoom" delay={200} className="flex-1 w-full bg-white rounded-xl shadow-2xl overflow-hidden relative border-4 border-white mx-auto">
            {/* Embedded Google Map using query */}
            <iframe 
              title="Wedding Location"
              width="100%" 
              height="100%" 
              id="gmap_canvas" 
              src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            ></iframe>
            
            {/* Floating Action Button */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full text-center px-4">
               <a 
                 href={mapLink} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-3 bg-wedding-dark/90 backdrop-blur-sm hover:bg-wedding-gold text-white px-8 py-4 rounded-full shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl group"
               >
                 <Navigation size={18} className="group-hover:animate-bounce" />
                 <span className="font-serif uppercase text-xs md:text-sm tracking-widest font-semibold">Xem Chỉ Đường</span>
               </a>
            </div>
        </Reveal>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-wedding-pink rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-wedding-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse delay-700"></div>
      </div>
    </section>
  );
};

export default Location;