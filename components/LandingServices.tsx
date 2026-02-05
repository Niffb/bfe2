import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LandingServices: React.FC = () => {
  const services = [
    {
      title: 'Governance',
      desc: 'Building confidence in leadership structures.',
      image: '/images/bigfoot.png',
      link: '/governance'
    },
    {
      title: 'Management',
      desc: 'Operational support for sustainable growth.',
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2000&auto=format&fit=crop',
      link: '/management'
    },
    {
      title: 'Advisory',
      desc: 'Strategic guidance for future vision.',
      image: '/images/eagle.png',
      link: '/advisory'
    }
  ];

  return (
    <div className="bg-brand-light text-brand-dark">
      {/* Mission Statement */}
      <section className="py-24 lg:py-40 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="lg:w-1/3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-dark/40 block mb-4">Our Philosophy</span>
            <div className="w-12 h-px bg-brand-dark/20"></div>
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
              Walking the line between <span className="italic text-brand-green">myth</span> and <span className="italic text-brand-accent">market reality.</span>
            </h2>
            <p className="text-lg text-brand-dark/60 font-light leading-relaxed max-w-2xl">
              We believe meaningful intelligence is found in the quiet places. We listen to the signals others ignore, tracking patterns from the ground up to build strategies that endure.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 sm:px-12 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group relative h-[600px] overflow-hidden block">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-3xl font-serif text-white mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {service.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                    Read More <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingServices;