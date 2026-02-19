import { clientConfig } from '../config/clientConfig';

export default function HeroBeautyEditorial() {
  const { businessName, tagline, heroImage, design } = clientConfig;

  const nameParts = businessName.split(' ');
  const firstWord = nameParts[0];
  const restOfName = nameParts.slice(1).join(' ');

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#faf9f6] flex flex-col">
      
      {/* 1. Background Layer: Static & Sophisticated */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover transition-transform duration-[10s] ease-out scale-100 hover:scale-105"
        />
        {/* Superior Gradient: Ensures text pop without a dark 'muddy' look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#faf9f6]" />
      </div>

      {/* 2. Main Content: Grid-Based Editorial */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 pt-20">
        <div className="max-w-[1800px] mx-auto w-full">
          
          <div className="flex flex-col items-center">
            {/* The Masthead Title */}
            <h1 className="flex flex-col items-center mb-12 select-none">
              <span className={`text-[18vw] md:text-[14vw] font-light tracking-tighter text-neutral-900 leading-[0.8] uppercase ${design.font.heading}`}>
                {firstWord}
              </span>
              <span className={`text-4xl md:text-7xl lg:text-8xl font-serif italic text-neutral-500 mt-[-0.2em] lowercase tracking-tight`}>
                {restOfName}
              </span>
            </h1>

            {/* Sub-Header Narrative */}
            <div className="flex flex-col items-center gap-12 text-center">
              <p className={`text-lg md:text-xl text-neutral-700 font-light max-w-lg italic leading-relaxed ${design.font.body}`}>
                {tagline}
              </p>
              
              {/* Refined CTA */}
              <a
                href="#booking"
                className="group relative px-12 py-5 border border-neutral-900 text-neutral-900 overflow-hidden transition-all duration-500 hover:shadow-xl"
              >
                <span className="relative z-10 text-[10px] uppercase tracking-[0.5em] font-bold transition-colors duration-500 group-hover:text-white">
                  Reserve Experience
                </span>
                <div className="absolute inset-0 bg-neutral-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 3. The "Magazine Footer" Metadata */}
      <div className="relative z-20 p-8 md:p-12 flex justify-between items-end w-full border-t border-neutral-200/50">
        <div className="flex gap-12 md:gap-24">
          <div className="flex flex-col gap-1">
             <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400">Location</span>
             <span className="text-[11px] text-neutral-800 tracking-widest font-medium uppercase">lagos</span>
          </div>
          <div className="hidden sm:flex flex-col gap-1">
             <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400">Available</span>
             <span className="text-[11px] text-neutral-800 tracking-widest font-medium uppercase italic">Spring 2026</span>
          </div>
        </div>

        <div className="flex items-center gap-6 group cursor-default">
           <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-500 group-hover:text-black transition-colors">Scroll</span>
           <div className="w-[1px] h-12 bg-neutral-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-black animate-scroll-indicator" />
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