import React from 'react';

const Management: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen animate-fade-in pt-20">
         
         <section className="relative pt-24 pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                <div>
                    <span className="text-brand-accent font-bold tracking-widest text-xs uppercase mb-6 block">Core Discipline</span>
                    <h1 className="text-6xl md:text-8xl font-serif text-brand-dark">Management</h1>
                </div>
                <div className="pb-2">
                    <p className="text-xl text-brand-dark/70 font-light leading-relaxed">
                        Like the trunk of a tree supports the branches, our management services stabilize the organization, allowing leadership to grow.
                    </p>
                </div>
             </div>
        </section>

        <section className="w-full h-[60vh] overflow-hidden bg-gray-200">
             <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2500&auto=format&fit=crop" 
                alt="Nature Texture" 
                className="w-full h-full object-cover grayscale opacity-80"
             />
        </section>

        <section className="py-32 px-6 sm:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                <div>
                    <h3 className="text-4xl font-serif mb-12">Accounting Services</h3>
                    <div className="space-y-6">
                        <p className="text-brand-dark/70 font-light leading-relaxed">
                            First Nation, Inuit and Métis communities carry enormous responsibility. Important tasks often stall not due to lack of importance, but stretched capacity.
                        </p>
                        <p className="text-brand-dark/70 font-light leading-relaxed">
                            We provide the operational backbone.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                     {[
                        "Month end & year end checklists",
                        "Funding agreement accounting",
                        "Bank reconciliations",
                        "Chart of Account maintenance"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-6 p-6 bg-white border border-transparent hover:border-brand-dark/5 transition-all duration-300">
                            <span className="text-brand-green font-serif italic text-2xl">0{i+1}</span>
                            <span className="text-brand-dark text-lg font-light">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  );
};

export default Management;