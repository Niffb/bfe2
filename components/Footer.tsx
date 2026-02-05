import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark text-white pt-24 pb-8">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">

                <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
                    <h2 className="text-5xl md:text-7xl font-serif leading-tight">
                        See the <br /><span className="italic text-white/50">whole picture.</span>
                    </h2>
                    <a href="/contact" className="group flex items-center gap-4 text-xl font-light hover:text-brand-green transition-colors">
                        Start a conversation
                        <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-green group-hover:border-brand-green transition-all">
                            <ArrowUpRight size={20} />
                        </span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12 mb-12">
                    <div className="md:col-span-2">
                        <h3 className="font-serif text-2xl mb-4">Bigfoot and the Eagle</h3>
                        <p className="text-white/50 text-sm max-w-sm leading-relaxed">
                            Uncovering value through ground-level tracking and high-altitude strategic oversight.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white/40">Sectors</h4>
                        <ul className="space-y-3 text-sm text-white/70 font-light">
                            <li><a href="#" className="hover:text-white transition-colors">First Nation Governance</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Corporate Strategy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Financial Advisory</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white/40">Contact</h4>
                        <ul className="space-y-3 text-sm text-white/70 font-light">
                            <li><a href="mailto:info@bigfooteagle.ca" className="hover:text-white transition-colors">info@bigfooteagle.ca</a></li>
                            <li>204.471.4635</li>
                            <li>Winnipeg, MB</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-white/30">
                    <p>© 2024 Bigfoot and the Eagle.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;