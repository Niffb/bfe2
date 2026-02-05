import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Mountain } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { type: 'link', label: 'Home', href: '/' },
    {
      type: 'dropdown',
      label: 'Expertise',
      children: [
        { label: 'Governance', href: '/governance' },
        { label: 'Management', href: '/management' },
        { label: 'Advisory', href: '/advisory' },
      ]
    },
    { type: 'link', label: 'Reconciliation', href: '/reconciliation' },
    { type: 'link', label: 'Treaties', href: '/treaty-relationships' },
    { type: 'link', label: 'Staff', href: '/staff' },
    { type: 'link', label: 'Contact', href: '/contact' },
  ];

  const isLight = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
          ? 'bg-brand-light/95 backdrop-blur-sm py-4 border-brand-dark/5 text-brand-dark'
          : 'bg-transparent py-6 border-transparent'
          } ${!isScrolled && isLight ? 'text-white' : 'text-brand-dark'}`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative z-50">
            <Mountain strokeWidth={1.5} className="w-8 h-8" />
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-lg leading-none tracking-tight">Bigfoot and the Eagle</span>

            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item, index) => (
              item.type === 'dropdown' ? (
                <div
                  key={index}
                  className="relative group h-full"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="text-sm font-medium tracking-wide flex items-center gap-1 hover:opacity-70 transition-opacity py-2">
                    {item.label}
                    <ChevronDown size={14} className="opacity-50" />
                  </button>

                  {/* Dropdown */}
                  <div className={`absolute top-full -left-4 pt-4 transition-all duration-300 ${activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                    <div className="bg-white border border-brand-dark/5 shadow-xl min-w-[220px] p-2 rounded-sm">
                      {item.children?.map(child => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-3 text-sm text-brand-dark hover:bg-brand-light transition-colors rounded-sm"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href!}
                  className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-brand-dark" /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-light z-40 transition-transform duration-700 ease-[0.16,1,0.3,1] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col justify-center px-12 gap-8">
          {navItems.map((item, idx) => (
            item.children ? (
              <div key={idx} className="flex flex-col gap-4 border-b border-brand-dark/10 pb-4">
                <span className="text-brand-dark/40 text-xs font-bold uppercase tracking-widest">Expertise</span>
                {item.children.map(child => (
                  <Link
                    key={child.label}
                    to={child.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-serif text-brand-dark hover:text-brand-green transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href!}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-serif text-brand-dark hover:text-brand-green transition-colors"
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;