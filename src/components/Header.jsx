import { useState, useEffect } from 'react';
import { clientConfig } from '../config/clientConfig';

export default function Header() {
  const { businessName, design, navItems } = clientConfig;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = navItems || [
    { label: "Treatments", href: "#services" },
    { label: "Experience", href: "#gallery" },
    { label: "Stories", href: "#testimonials" },
    { label: "Connect", href: "#booking" },
  ];

  const middleIndex = Math.ceil(menuItems.length / 2);
  const leftNav = menuItems.slice(0, middleIndex);
  const rightNav = menuItems.slice(middleIndex);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  // Readability Logic: White text over hero, Black text on white scroll bg
  const textColor = isScrolled || isMenuOpen ? 'text-neutral-900' : 'text-white';
  const borderColor = isScrolled ? 'border-neutral-900/10' : 'border-white/30';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full transition-all duration-500 ease-in-out z-[100] ${
          isScrolled 
            ? 'bg-[#faf9f6] backdrop-blur-md py-4 shadow-sm' 
            : 'bg-transparent py-8 md:py-12'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* LEFT NAV */}
          <nav className="hidden md:flex items-center gap-12 md:flex-1">
            {leftNav.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className={`group relative text-[10px] uppercase tracking-[0.4em] font-bold transition-colors duration-300 ${textColor}`}
              >
                <span className="block">{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CENTER BRAND */}
          <div className="flex-none z-[120]">
            <a href="#" className="flex flex-col items-center group">
              <span 
                className={`text-xl md:text-2xl font-light uppercase tracking-[0.5em] transition-all duration-500 ${design.font.heading} ${textColor}`}
              >
                {businessName}
              </span>
              
              <span className={`text-[8px] uppercase tracking-[0.8em] mt-1 transition-opacity duration-500 ${isScrolled ? 'opacity-60 ' : 'opacity-60'}`}>
                Nairobi
              </span>
            </a>
          </div>

          {/* RIGHT NAV & CTA */}
          <div className="flex items-center justify-end md:flex-1 gap-6 md:gap-12">
            <nav className="hidden md:flex items-center gap-12">
              {rightNav.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className={`group relative text-[10px] uppercase tracking-[0.4em] font-bold transition-colors duration-300 ${textColor}`}
                >
                  <span className="block">{item.label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a 
                href="#services" 
                className={`text-[9px] uppercase tracking-[0.3em] font-bold border px-8 py-3 transition-all duration-500 ${borderColor} ${textColor} hover:bg-neutral-900 hover:text-white hover:border-neutral-900`}
              >
                Book 24/7
              </a>
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-[130] p-2 focus:outline-none"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-2 items-end w-8">
                <span className={`h-[1px] transition-all duration-500 ${isMenuOpen || isScrolled ? 'bg-black' : 'bg-white'} ${isMenuOpen ? 'rotate-45 translate-y-2.5 w-8' : 'w-8'}`} />
                <span className={`h-[1px] transition-all duration-500 ${isMenuOpen || isScrolled ? 'bg-black' : 'bg-white'} ${isMenuOpen ? 'opacity-0' : 'w-5'}`} />
                <span className={`h-[1px] transition-all duration-500 ${isMenuOpen || isScrolled ? 'bg-black' : 'bg-white'} ${isMenuOpen ? '-rotate-45 -translate-y-2.5 w-8' : 'w-8'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      <div 
        className={`fixed inset-0 z-[90] bg-[#faf9f6] transition-transform duration-700 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          {menuItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-5xl font-light tracking-tighter text-neutral-900 ${design.font.heading} transition-all hover:italic`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#services"
            onClick={() => setIsMenuOpen(false)}
            className="mt-12 text-[12px] uppercase tracking-[0.5em] font-bold border border-neutral-900 px-12 py-5 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
          >
            Request Mobile Spa
          </a>
        </div>
      </div>
    </>
  );
}