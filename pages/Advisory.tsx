import React from 'react';

const Advisory: React.FC = () => {
    return (
        <div className="bg-brand-light min-h-screen animate-fade-in pt-20">

            <section className="relative pt-24 pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <div>
                        <span className="text-brand-accent font-bold tracking-widest text-xs uppercase mb-6 block">Core Discipline</span>
                        <h1 className="text-6xl md:text-8xl font-serif text-brand-dark">Advisory</h1>
                    </div>
                    <div className="pb-2">
                        <p className="text-xl text-brand-dark/70 font-light leading-relaxed">
                            High-altitude oversight. Strategic guidance and professional insight for future vision and community goals.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full h-[60vh] overflow-hidden">
                <img
                    src="/images/eagle.png"
                    alt="Mountain Peaks with Eagle"
                    className="w-full h-full object-cover"
                />
            </section>

            <section className="py-32 px-6 sm:px-12 max-w-7xl mx-auto">
                <div className="mb-24">
                    <p className="text-3xl md:text-5xl font-serif leading-tight mb-8">
                        "Walking alongside leadership with practical guidance, professional insight, and steady partnership."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-dark/10 border border-brand-dark/10">
                    {[
                        "Management Action Plans",
                        "Capacity Development",
                        "Fractional CFO",
                        "Debt Servicing Plans",
                        "Assessment Analysis",
                        "Budget Development",
                        "Audit Preparation",
                        "Strategic Planning"
                    ].map((item, i) => (
                        <div key={i} className="bg-brand-light p-10 hover:bg-white transition-colors duration-500 group aspect-square flex flex-col justify-between">
                            <span className="text-xs font-bold text-brand-dark/30">0{i + 1}</span>
                            <h4 className="text-xl font-serif text-brand-dark group-hover:text-brand-green transition-colors">{item}</h4>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-right">
                    <p className="text-xs text-brand-dark/40 font-bold uppercase tracking-widest">
                        Strategy credit: Stacey Longclaws, CPA, CAFM
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Advisory;