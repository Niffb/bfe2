import React from 'react';

const TreatyRelationships: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen animate-fade-in pt-20">
         <section className="relative h-[70vh] flex flex-col justify-center px-6 sm:px-12">
             <div className="absolute inset-0 z-0">
                 <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=3200&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50" />
                 <div className="absolute inset-0 bg-brand-light/80"></div>
             </div>
             
             <div className="relative z-10 max-w-7xl mx-auto w-full">
                <span className="text-brand-accent font-bold tracking-widest text-xs uppercase mb-6 block">Nation to Nation</span>
                <h1 className="text-7xl md:text-9xl font-serif text-brand-dark opacity-90 mb-8">
                    96 Treaties.
                </h1>
                <p className="text-2xl font-light text-brand-dark/60 max-w-2xl">
                    69 Historic Treaties. 27 Modern Treaties. <br/>
                    Living commitments that shape our future.
                </p>
             </div>
         </section>

         <section className="py-24 max-w-4xl mx-auto px-6">
             <p className="text-lg text-brand-dark/70 font-light leading-relaxed">
                We recognize many Treaty obligations remain unfulfilled. Bigfoot and the Eagle is committed to engaging with Indigenous partners in ways that are guided by their priorities, expertise, and vision.
            </p>
         </section>
    </div>
  );
};

export default TreatyRelationships;