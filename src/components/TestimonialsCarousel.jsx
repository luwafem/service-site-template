import { clientConfig } from '../config/clientConfig';

export default function TestimonialsEditorial() {
  const { testimonials, design } = clientConfig;

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-32 md:py-56 bg-[#faf9f6]">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Editorial Heading Strategy */}
        <div className="flex flex-col mb-32 border-b border-neutral-200 pb-12">
          <span className="text-[10px] uppercase tracking-[0.6em] text-neutral-400 mb-8 block">
            The Sentiment
          </span>
          <h2 className={`text-7xl md:text-[10rem] lg:text-[13rem] font-light tracking-tighter leading-[0.8] text-neutral-900 ${design.font.heading}`}>
            Kind <br />
            <span className="italic font-serif text-neutral-300 ml-[0.1em]">Words</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Sticky Context */}
          <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="w-12 h-[1px] bg-black" />
                <p className={`text-sm md:text-base text-neutral-500 font-light leading-relaxed max-w-xs ${design.font.body}`}>
                  A curated collection of artifacts and reflections from those who have stepped into our sanctuary.
                </p>
              </div>
              
              {/* Trust Badge / Stat */}
              <div className="pt-8 border-t border-neutral-200 inline-block">
                <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-400 block mb-2">Community Rating</span>
                <span className={`text-4xl font-light ${design.font.heading}`}>5.0 / 5.0</span>
              </div>
            </div>
          </div>

          {/* Right: The Asymmetric Journal */}
          <div className="lg:col-span-8 flex flex-col gap-32 md:gap-48">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className={`group relative flex flex-col ${
                  idx % 2 === 0 ? 'items-start' : 'items-end md:pr-20'
                }`}
              >
                {/* Visual Numbering Mask */}
                <div className="absolute -top-12 left-0 md:left-auto overflow-hidden h-8 w-24 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                   <span className="text-[10px] font-mono tracking-widest text-black block transition-transform duration-700 group-hover:-translate-y-full">
                     VOL_00{idx + 1}
                   </span>
                   <span className="text-[10px] font-mono tracking-widest text-black block absolute top-full transition-transform duration-700 group-hover:-translate-y-full italic">
                     REF_2026
                   </span>
                </div>

                {/* Big Editorial Quote */}
                <blockquote className={`max-w-2xl ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <p className={`text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-neutral-800 transition-all duration-700 group-hover:text-black ${design.font.body}`}>
                    “{t.text}”
                  </p>
                </blockquote>

                {/* Author Signature */}
                <div className={`mt-10 flex flex-col ${idx % 2 === 0 ? 'items-start' : 'items-end'}`}>
                  <cite className={`text-xl md:text-2xl font-light not-italic tracking-wide border-b border-transparent group-hover:border-neutral-300 transition-all duration-700 ${design.font.heading}`}>
                    {t.author}
                  </cite>
                  <span className="text-[8px] uppercase tracking-[0.5em] text-neutral-400 mt-3">
                    Sanctuary Guest — Verified
                  </span>
                </div>

                {/* Hover Background Accent (Subtle) */}
                <div className={`absolute -inset-x-8 -inset-y-12 bg-neutral-100/0 group-hover:bg-neutral-100/50 -z-10 transition-colors duration-700 rounded-sm`} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}