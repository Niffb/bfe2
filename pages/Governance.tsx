import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Governance: React.FC = () => {
    return (
        <div className="bg-brand-light min-h-screen animate-fade-in pt-20">

            {/* Header */}
            <section className="relative pt-24 pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <div>
                        <span className="text-brand-accent font-bold tracking-widest text-xs uppercase mb-6 block">Core Discipline</span>
                        <h1 className="text-6xl md:text-8xl font-serif text-brand-dark">Governance</h1>
                    </div>
                    <div className="pb-2">
                        <p className="text-xl text-brand-dark/70 font-light leading-relaxed">
                            Strong roots support the tallest trees. We build capacity in leadership structures through rigorous framework design.
                        </p>
                    </div>
                </div>
            </section>

            {/* Large Image */}
            <section className="w-full h-[60vh] overflow-hidden">
                <img
                    src="/images/bigfoot.png"
                    alt="Forest Canopy with Bigfoot"
                    className="w-full h-full object-cover"
                />
            </section>

            {/* Content */}
            <section className="py-32 px-6 sm:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <h3 className="font-serif text-3xl mb-6">The Foundation</h3>
                        <div className="w-12 h-px bg-brand-green mb-6"></div>
                        <p className="text-brand-dark/60 text-sm leading-relaxed">
                            From the moment Chief and Council are elected, they assume significant responsibilities. Like a young forest, new leadership needs the right conditions to thrive.
                        </p>
                    </div>

                    <div className="lg:col-span-1"></div>

                    <div className="lg:col-span-7">
                        <ul className="space-y-8">
                            {[
                                { title: "Training & Orientation", desc: "Comprehensive onboarding for Chief and Council." },
                                { title: "Structural Design", desc: "Designing new governance structures and updates to existing frameworks." },
                                { title: "Financial Literacy", desc: "Education and training for decision makers." },
                                { title: "Operational Reviews", desc: "Organizational capacity assessments and optimization." },
                                { title: "Policy Development", desc: "Procedure development and systematic reviews." }
                            ].map((item, i) => (
                                <li key={i} className="group border-b border-brand-dark/10 pb-8 cursor-default">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="text-xl font-serif text-brand-dark group-hover:text-brand-green transition-colors">{item.title}</h4>
                                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-brand-green" />
                                    </div>
                                    <p className="text-brand-dark/50 font-light">{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-brand-dark text-white py-24 text-center">
                <p className="text-sm opacity-50 font-mono tracking-widest">
                    With gratitude to Chief Donny Smoke & Dakota Plains Wahpeton Nation.
                </p>
            </section>
        </div>
    );
};

export default Governance;