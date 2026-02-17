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

  const textColor = isScrolled || isMenuOpen ? 'text-black' : 'text-white';
  const borderColor = isScrolled ? 'border-black/10' : 'border-white/20';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full transition-all duration-700 ease-in-out z-[100] ${
          isScrolled 
            ? 'bg-[#faf9f6] py-3 md:py-4 shadow-sm' 
            : 'bg-gradient-to-b from-black/50 to-transparent py-6 md:py-10'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-5 md:px-12 flex items-center justify-between">
          
          {/* LEFT NAV - Hidden on mobile, flex-1 on desktop */}
          <nav className="hidden md:flex items-center gap-10 md:flex-1">
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

          {/* CENTER BRAND - Centered on all screens */}
          <div className="flex-none z-[120] text-center">
            <a href="#" className="flex flex-col items-center">
              <span 
                className={`text-lg sm:text-xl md:text-3xl font-light uppercase tracking-[0.4em] md:tracking-[0.6em] transition-all duration-700 ${design.font.heading} ${textColor}`}
              >
                {businessName}
              </span>
            </a>
          </div>

          {/* RIGHT NAV & MOBILE TOGGLE */}
          <div className="flex items-center justify-end md:flex-1 gap-4 md:gap-10">
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

            {/* MOBILE TOGGLE - Adjusted padding for better touch target */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-[130] p-3 -mr-2 focus:outline-none"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5 items-end w-6">
                <span className={`h-[1px] w-6 transition-all duration-500 ${isMenuOpen || isScrolled ? 'bg-black' : 'bg-white'} ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-[1px] w-4 transition-all duration-500 ${isMenuOpen || isScrolled ? 'bg-black' : 'bg-white'} ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-[1px] w-5 transition-all duration-500 ${isMenuOpen || isScrolled ? 'bg-black' : 'bg-white'} ${isMenuOpen ? '-rotate-45 -translate-y-2 w-6' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY - Cleaned up spacing */}
      <div 
        className={`fixed inset-0 z-[90] transition-all duration-700 cubic-bezier(0.85, 0, 0.15, 1) ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="absolute inset-0 bg-[#faf9f6] flex flex-col items-center justify-center p-6">
          <nav className="flex flex-col items-center gap-6 sm:gap-8 w-full">
            {menuItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-4xl sm:text-5xl font-light tracking-tighter text-black ${design.font.heading} hover:italic transition-all duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#booking"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 text-[12px] uppercase tracking-[0.4em] font-bold border border-black px-10 py-4 text-black"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

