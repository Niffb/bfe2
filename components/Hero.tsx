import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-brand-dark text-white">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-black/30 z-10"></div>
         <img 
            src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=3200&auto=format&fit=crop" 
            className="w-full h-full object-cover animate-scale-slow"
            alt="Misty Forest"
         />
      </div>

      {/* Content */}
      <div className="relative z-20 flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-8">
                       <h1 className="font-serif text-7xl md:text-9xl leading-[0.9] -ml-1 mb-8 opacity-90">
                          <span className="block animate-fade-up">Wisdom</span>
                          <span className="block italic font-light animate-fade-up [animation-delay:200ms]">of the Land.</span>
                       </h1>
                  </div>
                  <div className="lg:col-span-4 flex items-end">
                      <p className="text-lg md:text-xl font-light leading-relaxed animate-fade-up [animation-delay:400ms] text-white/80 max-w-sm">
                          Bridging the grounded reality of the forest floor with the strategic vision of the open sky.
                      </p>
                  </div>
              </div>
          </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-20 border-t border-white/20 py-6 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-xs uppercase tracking-widest font-medium text-white/60">
              <div className="flex gap-8">
                  <span>Est. 2010</span>
                  <span>Treaty 1 Territory</span>
              </div>
              <div className="animate-bounce">
                  <ArrowDown size={16} />
              </div>
          </div>
      </div>

    </section>
  );
};

export default Hero;