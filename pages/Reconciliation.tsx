import React from 'react';

const Reconciliation: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen animate-fade-in pt-20">
        <section className="py-32 px-6 sm:px-12 max-w-4xl mx-auto">
            <span className="block text-center text-xs font-bold text-brand-accent uppercase tracking-[0.3em] mb-12">Call to Action 92</span>
            
            <div className="space-y-12 text-2xl md:text-3xl font-serif leading-relaxed text-brand-dark">
                <p>
                    Bigfoot and the Eagle participates in mandatory reconciliation and historical education. This includes learning about the Residential School System, Day Schools, the Sixties Scoop, Treaties, and constitutional protections.
                </p>
                <p className="text-brand-dark/60">
                    We deliver our services in the spaces where First Nation governments work. We see and hear you; taking direction to collectively focus on building capacity.
                </p>
            </div>

            <div className="mt-32 p-12 border-l-2 border-brand-green">
                <p className="text-3xl md:text-4xl font-serif italic text-brand-dark mb-8">
                    "Treaty envisioned us paddling a river together as equals."
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">
                    — Cadmus Delorme, Cowessess First Nation
                </p>
            </div>
        </section>
    </div>
  );
};

export default Reconciliation;