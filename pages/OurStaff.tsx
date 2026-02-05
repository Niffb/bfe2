import React from 'react';

const OurStaff: React.FC = () => {
    return (
        <div className="bg-brand-light min-h-screen animate-fade-in pt-32 pb-24">
            <section className="max-w-6xl mx-auto px-6 sm:px-12">

                <div className="flex flex-col lg:flex-row gap-24 items-start">

                    {/* Photo */}


                    {/* Info */}
                    <div className="lg:w-2/3 space-y-12">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-serif text-brand-dark mb-4">
                                Glenn Fleetwood
                            </h1>
                            <p className="text-brand-accent text-sm font-bold uppercase tracking-widest">President & Founder</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6 text-brand-dark/70 font-light leading-relaxed">
                                <p>
                                    With over 14 years serving First Nation governments, Glenn brings deep experience from senior roles like CFO and COO, and advisory work with national accounting firms.
                                </p>
                                <p>
                                    His work focuses on strengthening capacity with Chief and Council, rooted in partnership, humility, and respect.
                                </p>
                                <div className="pt-6">
                                    <a href="mailto:glenn@bigfooteagle.ca" className="text-brand-dark border-b border-brand-dark hover:text-brand-green hover:border-brand-green transition-colors pb-1">glenn@bigfooteagle.ca</a>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xs font-bold uppercase text-brand-dark/40 tracking-widest mb-6">Credentials</h3>
                                <ul className="space-y-4 text-sm text-brand-dark font-medium">
                                    <li className="border-b border-brand-dark/10 pb-2">Chartered Professional Accountant</li>
                                    <li className="border-b border-brand-dark/10 pb-2">Certified Aboriginal Financial Manager</li>
                                    <li className="border-b border-brand-dark/10 pb-2">Certified Aboriginal Professional Administrator</li>
                                    <li className="border-b border-brand-dark/10 pb-2">Certified Indigenous Leadership</li>
                                    <li className="border-b border-brand-dark/10 pb-2">First Nations Board Governance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default OurStaff;