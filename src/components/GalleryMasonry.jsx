import { clientConfig } from '../config/clientConfig';

export default function GallerySwipe() {
  const { portfolio, design, businessName } = clientConfig;
  
  if (!portfolio || portfolio.length === 0) return null;

  return (
    <section id="gallery" className="py-32 bg-[#faf9f6] overflow-hidden">
      {/* 1. The Editorial Masthead for the Section */}
      <div className="px-6 md:px-12 max-w-[1800px] mx-auto mb-20 flex flex-col md:flex-row md:items-end justify-between">
        <div className="overflow-hidden">
          <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 block mb-4 translate-y-0">
            The Environment
          </span>
          <h2 className={`text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-neutral-900 leading-none ${design.font.heading}`}>
            The <span className="italic font-serif text-neutral-400">Studio</span>
          </h2>
        </div>
        <div className="max-w-xs mt-8 md:mt-0 md:text-right">
          <p className={`text-sm text-neutral-500 leading-relaxed uppercase tracking-widest ${design.font.body}`}>
            A sanctuary built for comfort, designed for the modern aesthete. 
            <span className="block mt-2 text-[10px] text-neutral-300">— {businessName} Interior</span>
          </p>
        </div>
      </div>

      {/* 2. The Filmstrip Gallery */}
      <div
        className="
          flex gap-12 overflow-x-auto pb-20
          px-6 md:px-12
          snap-x snap-mandatory scrollbar-hide
          cursor-grab active:cursor-grabbing
        "
      >
        {portfolio.map((img, idx) => (
          <div
            key={idx}
            className={`
              snap-center shrink-0
              relative group
              /* Alternating widths for visual rhythm */
              ${idx % 2 === 0 ? 'w-[75vw] md:w-[50vw]' : 'w-[85vw] md:w-[35vw] md:mt-24'} 
              h-[60vh] md:h-[75vh] 
              transition-all duration-1000
            `}
          >
            {/* Image Counter Label */}
            <div className="absolute -top-10 left-0 overflow-hidden h-6 w-20">
              <span className="text-[10px] font-mono text-neutral-400 absolute transition-transform duration-700 group-hover:-translate-y-full">
                IMG_00{idx + 1}
              </span>
              <span className="text-[10px] font-mono text-black absolute top-full transition-transform duration-700 group-hover:-translate-y-full italic">
                VIEW SPACE
              </span>
            </div>

            {/* Sharp Frame Wrapper */}
            <div className="w-full h-full overflow-hidden bg-neutral-200">
              <img
                src={img}
                alt={`Studio view ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-[2s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Subtle Texture Overlay */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>

            {/* Minimalist Caption (Only visible on hover or mobile) */}
            <div className="mt-6 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
               <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-800 font-bold">
                 Curated Perspective
               </span>
               <div className="w-12 h-[1px] bg-neutral-300 mt-2" />
            </div>
          </div>
        ))}

        {/* Ending Spacer */}
        <div className="shrink-0 w-20 md:w-[10vw]" />
      </div>

      {/* 3. Refined Progress Indicator */}
      <div className="px-6 md:px-12 max-w-[1800px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
           <div className="flex gap-1 items-center">
              <span className="text-[10px] font-light italic">Scroll</span>
              <div className="w-24 h-[1px] bg-neutral-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-black origin-left scale-x-0 animate-progress-line" />
              </div>
           </div>
        </div>
        
        <div className="flex items-baseline gap-2">
           <span className={`text-4xl font-light ${design.font.heading}`}>01</span>
           <span className="text-neutral-300 text-xs">/ 0{portfolio.length}</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress-line {
          0% { transform: scaleX(0); transform-origin: left; }
          45% { transform: scaleX(1); transform-origin: left; }
          50% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
        .animate-progress-line {
          animation: progress-line 4s cubic-bezier(0.85, 0, 0.15, 1) infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}