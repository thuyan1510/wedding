import React, { useState } from 'react';
import { Send, Sparkles, CheckCircle, Loader2 } from 'lucide-react';
import { ToneType } from '../types';
import { generateWeddingWish } from '../services/geminiService';
import Reveal from './Reveal';

const Rsvp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: 1,
    attending: 'yes',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  
  // AI Wish Generator States
  const [showAiHelper, setShowAiHelper] = useState(false);
  const [relationship, setRelationship] = useState('Friend');
  const [tone, setTone] = useState<ToneType>(ToneType.HEARTFELT);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const handleGenerateWish = async () => {
    if (!formData.name) {
      alert("Please enter your name first!");
      return;
    }
    setIsGenerating(true);
    const wish = await generateWeddingWish(formData.name, relationship, tone);
    setFormData(prev => ({ ...prev, message: wish }));
    setIsGenerating(false);
    setShowAiHelper(false);
  };

  return (
    <section id="rsvp" className="h-screen w-full snap-start bg-wedding-pink/10 relative flex flex-col justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 w-full h-full flex flex-col justify-center py-16 md:py-0">
        <Reveal animation="fade-up" className="w-full h-full md:h-auto flex flex-col justify-center">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-full">
          
          {/* Info Side - Hidden on mobile */}
          <div className="hidden md:flex md:w-5/12 bg-wedding-dark text-white p-8 flex-col justify-center relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522673607200-1645062cd958?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")' }}></div>
            <div className="relative z-10">
              <h3 className="font-script text-4xl mb-6 text-wedding-gold">Be Our Guest</h3>
              <p className="mb-6 font-light text-gray-300 text-sm">We would be honored to have you celebrate our special day.</p>
            </div>
          </div>

          <div className="w-full md:w-7/12 p-5 md:p-10 flex flex-col h-full overflow-y-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col h-full justify-center space-y-3 md:space-y-4">
                <div className="text-center md:text-left mb-1 md:mb-4 flex-shrink-0">
                  <h2 className="font-serif text-2xl md:text-3xl text-gray-800">RSVP</h2>
                  <p className="text-gray-500 text-[10px] md:text-sm">Please respond by October 1st</p>
                </div>

                <div className="flex-shrink-0 space-y-3">
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-wedding-gold outline-none"
                      placeholder="Your Full Name"
                    />
                    
                    <div className="flex gap-2">
                        <select 
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                        className="w-1/2 px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-wedding-gold outline-none"
                        >
                        {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} Guest{n>1?'s':''}</option>)}
                        </select>
                        <select 
                        value={formData.attending}
                        onChange={(e) => setFormData({...formData, attending: e.target.value})}
                        className="w-1/2 px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-wedding-gold outline-none"
                        >
                        <option value="yes">Attending</option>
                        <option value="no">Not Attending</option>
                        </select>
                    </div>
                </div>

                <div className="flex-1 min-h-0 flex flex-col">
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-[10px] md:text-xs font-medium text-gray-700">Message</label>
                    <button 
                      type="button"
                      onClick={() => setShowAiHelper(!showAiHelper)}
                      className="text-[10px] md:text-xs flex items-center text-wedding-accent hover:text-wedding-gold font-medium"
                    >
                      <Sparkles size={10} className="mr-1" />
                      AI Help
                    </button>
                  </div>

                  {showAiHelper && (
                    <div className="bg-rose-50 p-2 rounded-md mb-2 border border-rose-100 animate-fade-in-up flex-shrink-0">
                      <div className="flex gap-2 mb-2">
                         <select 
                          value={relationship}
                          onChange={(e) => setRelationship(e.target.value)}
                          className="text-[10px] p-1 rounded border border-gray-200 w-1/2"
                         >
                           <option value="Friend">Friend</option>
                           <option value="Family">Family</option>
                         </select>
                         <select 
                          value={tone}
                          onChange={(e) => setTone(e.target.value as ToneType)}
                          className="text-[10px] p-1 rounded border border-gray-200 w-1/2"
                         >
                           <option value={ToneType.HEARTFELT}>Heartfelt</option>
                           <option value={ToneType.FUNNY}>Funny</option>
                         </select>
                      </div>
                      <button 
                        type="button"
                        onClick={handleGenerateWish}
                        disabled={isGenerating}
                        className="w-full py-1 bg-wedding-gold text-white text-[10px] rounded hover:bg-amber-600 flex justify-center items-center"
                      >
                        {isGenerating ? <Loader2 size={10} className="animate-spin mr-1" /> : <Sparkles size={10} className="mr-1" />}
                        Generate
                      </button>
                    </div>
                  )}

                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-wedding-gold outline-none resize-none flex-1 min-h-[60px]"
                    placeholder="Wishes..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-wedding-dark text-white py-2 md:py-2.5 rounded-md hover:bg-gray-800 font-serif uppercase text-xs tracking-wide shadow-md flex-shrink-0"
                >
                  Send RSVP
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h3 className="font-serif text-2xl text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600 text-sm">See you there!</p>
              </div>
            )}
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Rsvp;