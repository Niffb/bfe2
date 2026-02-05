import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen pt-32 pb-24 animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                
                {/* Info Column */}
                <div>
                     <span className="text-brand-accent font-bold tracking-widest text-xs uppercase mb-6 block">Get in Touch</span>
                     <h1 className="text-6xl md:text-8xl font-serif mb-12 text-brand-dark">Contact</h1>

                    <div className="space-y-12">
                        <div className="space-y-2">
                            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-dark/40"><MapPin size={14}/> Office</span>
                            <p className="text-xl font-light text-brand-dark">101-1065 Portage Avenue<br/>Winnipeg, MB</p>
                        </div>
                        <div className="space-y-2">
                            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-dark/40"><Mail size={14}/> Email</span>
                            <a href="mailto:info@bigfooteagle.ca" className="text-xl font-light text-brand-dark hover:text-brand-green transition-colors block">info@bigfooteagle.ca</a>
                        </div>
                        <div className="space-y-2">
                            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-dark/40"><Phone size={14}/> Phone</span>
                            <p className="text-xl font-light text-brand-dark">204.471.4635</p>
                        </div>
                    </div>
                </div>

                {/* Form Column */}
                <div className="bg-white p-12 shadow-sm border border-brand-dark/5">
                    <form className="space-y-8">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-brand-dark/40 uppercase tracking-widest">Name</label>
                            <input 
                                type="text" 
                                className="w-full bg-brand-light border-b border-brand-dark/10 py-4 px-4 text-brand-dark focus:outline-none focus:border-brand-green transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-brand-dark/40 uppercase tracking-widest">Email</label>
                            <input 
                                type="email" 
                                className="w-full bg-brand-light border-b border-brand-dark/10 py-4 px-4 text-brand-dark focus:outline-none focus:border-brand-green transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-brand-dark/40 uppercase tracking-widest">Message</label>
                            <textarea 
                                rows={6}
                                className="w-full bg-brand-light border-b border-brand-dark/10 py-4 px-4 text-brand-dark focus:outline-none focus:border-brand-green transition-colors resize-none"
                            ></textarea>
                        </div>
                        
                        <button type="button" className="w-full bg-brand-dark text-white font-bold py-5 hover:bg-brand-green transition-colors uppercase text-xs tracking-widest">
                             Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Contact;