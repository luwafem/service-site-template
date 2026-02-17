import { useState, useEffect } from 'react';
import { clientConfig } from '../config/clientConfig';

export default function Header() {
  const { businessName, design, navItems } = clientConfig;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = navItems || [
    { label: "Services", href: "#services" },
    { label: "The Studio", href: "#gallery" },
    { label: "Journal", href: "#testimonials" },
    { label: "Contact", href: "#booking" },
  ];

  const middleIndex = Math.ceil(menuItems.length / 2);
  const leftNav = menuItems.slice(0, middleIndex);
  const rightNav = menuItems.slice(middleIndex);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  // Dynamic color logic: White text on Hero, Black text on Scroll
  const textColor = isScrolled || isMenuOpen ? 'text-black' : 'text-white';
  const borderColor = isScrolled ? 'border-black/10' : 'border-white/20';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full transition-all duration-700 ease-in-out z-[100] ${
          isScrolled 
            ? 'bg-white py-4 shadow-sm' 
            : 'bg-gradient-to-b from-black/40 to-transparent py-8'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* LEFT NAV */}
          <nav className="hidden md:flex items-center gap-10 flex-1">
            {leftNav.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className={`group relative overflow-hidden text-[10px] uppercase tracking-[0.4em] font-bold transition-colors duration-500 ${textColor}`}
              >
                <span className="block transition-transform duration-500 group-hover:-translate-y-full">{item.label}</span>
                <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full italic font-serif lowercase tracking-wider">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* CENTER BRAND */}
          <div className="flex-none z-[120]">
            <a href="#" className="flex flex-col items-center">
              <span 
                className={`text-xl md:text-3xl font-light uppercase tracking-[0.6em] transition-all duration-700 ${design.font.heading} ${textColor}`}
              >
                {businessName}
              </span>
            </a>
          </div>

          {/* RIGHT NAV */}
          <div className="flex items-center justify-end gap-10 flex-1">
            <nav className="hidden md:flex items-center gap-10">
              {rightNav.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className={`group relative overflow-hidden text-[10px] uppercase tracking-[0.4em] font-bold transition-colors duration-500 ${textColor}`}
                >
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full">{item.label}</span>
                  <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full italic font-serif lowercase tracking-wider">{item.label}</span>
                </a>
              ))}
              <a 
                href="#booking" 
                className={`text-[10px] uppercase tracking-[0.4em] font-bold border px-6 py-2 transition-all duration-500 ${borderColor} ${textColor} hover:bg-black hover:text-white hover:border-black`}
              >
                Reserve
              </a>
            </nav>

            {/* MOBILE TOGGLE: Forced Contrast */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-[130] p-2 focus:outline-none"
            >
              <div className="flex flex-col gap-1.5 items-end w-6">
                <span className={`h-[1.5px] w-6 transition-all duration-500 ${isMenuOpen || isScrolled ? 'bg-black' : 'bg-white'} ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-[1.5px] w-4 transition-all duration-500 ${isMenuOpen || isScrolled ? 'bg-black' : 'bg-white'} ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-[1.5px] w-5 transition-all duration-500 ${isMenuOpen || isScrolled ? 'bg-black' : 'bg-white'} ${isMenuOpen ? '-rotate-45 -translate-y-2 w-6' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div 
        className={`fixed inset-0 z-[90] transition-all duration-700 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-[#faf9f6] flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            {menuItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-5xl font-light tracking-tighter text-black ${design.font.heading} hover:italic transition-all`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}