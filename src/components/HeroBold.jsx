import { clientConfig } from '../config/clientConfig';

export default function HeroBeautyEditorial() {
  const { businessName, tagline, heroImage, design } = clientConfig;

  // Split name for that high-fashion editorial stacking effect
  const nameParts = businessName.split(' ');
  const firstWord = nameParts[0];
  const restOfName = nameParts.slice(1).join(' ');

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col">
      
      {/* 1. Background Layer with Readability Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover transition-transform duration-[10s] ease-out scale-105"
        />
        {/* Dual-layer overlay for maximum readability: 
            1. Global 40% darken 
            2. Bottom-up gradient for footer legibility */}
        <div className="absolute inset-0 bg-black/40" /> 
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto w-full">
          
          <div className="flex flex-col items-center text-center">
            {/* The Masthead Title - Switched to White for pop */}
            <h1 className="flex flex-col items-center mb-8 select-none">
              <span className={`text-[16vw] md:text-[12vw] font-light tracking-tighter text-white leading-[0.8] uppercase ${design.font.heading}`}>
                {firstWord}
              </span>
             
            </h1>

            {/* Sub-Header Narrative */}
            <div className="flex flex-col items-center gap-10">
              <p className={`text-lg md:text-xl text-neutral-200 font-light max-w-xl italic leading-relaxed drop-shadow-md ${design.font.body}`}>
                {tagline}
              </p>
              
              {/* Refined CTA - Ghost Style for Elegance */}
              <a
                href="#services"
                className="group relative px-12 py-5 border border-white text-white overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <span className="relative z-10 text-[10px] uppercase tracking-[0.5em] font-bold transition-colors duration-500 group-hover:text-black">
                  Reserve Experience
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 3. The "Magazine Footer" Metadata */}
      <div className="relative z-20 p-8 md:p-12 flex justify-between items-end w-full">
        <div className="flex gap-12 md:gap-24">
          <div className="flex flex-col gap-1">
             <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">Location</span>
             <span className="text-[11px] text-white tracking-widest font-medium uppercase">Nairobi & Environs</span>
          </div>
          <div className="hidden sm:flex flex-col gap-1">
             <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">Service</span>
             <span className="text-[11px] text-white tracking-widest font-medium uppercase italic">Available 24/7</span>
          </div>
        </div>

        <div className="flex items-center gap-6 group cursor-default">
           <span className="text-[9px] uppercase tracking-[0.4em] text-white/70 group-hover:text-white transition-colors">Scroll</span>
           <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-indicator" />
           </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-indicator {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 3s cubic-bezier(0.15, 0, 0.05, 1) infinite;
        }
      `}</style>
    </section>
  );
}