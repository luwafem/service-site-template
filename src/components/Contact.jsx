import { clientConfig } from '../config/clientConfig';

export default function Contact() {
  const { contact, design, colors } = clientConfig;
  
  return (
    <section id="booking" className="py-32 md:py-56 bg-[#faf9f6]">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Section Header: The Masthead */}
        <div className="flex flex-col mb-32 border-b border-neutral-200 pb-12">
          
          <h2 className={`text-7xl md:text-[10rem] lg:text-[13rem] font-light tracking-tighter leading-[0.8] text-neutral-900 ${design.font.heading}`}>
            The <br />
            <span className="italic font-serif text-neutral-300 ml-[0.1em]">Connect</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Context & Philosophy */}
          <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit space-y-16">
            <div className="space-y-6 max-w-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-black" />
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Strictly Private</span>
              </div>
              <p className={`text-lg md:text-xl text-neutral-500 font-light leading-relaxed italic ${design.font.body}`}>
                Entrance is by appointment only. We operate as a discreet sanctuary for the modern aesthete. Reach out to coordinate your arrival.
              </p>
            </div>

            {/* Operating Log */}
            <div className="pt-12 border-t border-neutral-200">
               <div className="grid grid-cols-2 gap-12">
                  <div className="space-y-2">
                    <span className="text-[8px] uppercase tracking-[0.4em] text-neutral-400 block">Cycle</span>
                    <span className="text-sm uppercase tracking-widest font-light text-neutral-900 block">Mon — Sun</span>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[8px] uppercase tracking-[0.4em] text-neutral-400 block">Window</span>
                    <span className="text-sm uppercase tracking-widest font-light text-neutral-900 block">09:00 — 20:00</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Side: The Interactive Directory */}
          <div className="lg:col-span-8 flex flex-col">
            {[
              { id: '01', label: 'WhatsApp', sub: 'Instant Sync', href: contact.whatsapp ? `https://wa.me/${contact.whatsapp.replace('+', '')}` : null },
              { id: '02', label: 'Direct Call', sub: 'Voice Exchange', href: contact.phone ? `tel:${contact.phone}` : null },
              { id: '03', label: 'Instagram', sub: 'Visual Feed', href: contact.instagram ? `https://instagram.com/${contact.instagram}` : null }
            ].map((item, idx) => (
              item.href && (
                <a 
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  className="group relative flex items-center py-16 border-b border-neutral-200 overflow-hidden"
                >
                  {/* Sliding Background Accent */}
                  <div className="absolute inset-0 bg-neutral-900 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0" />
                  
                  <div className="relative z-10 w-full flex items-center justify-between transition-colors duration-500 group-hover:text-white group-hover:px-8">
                    <div className="flex items-baseline gap-8 md:gap-16">
                      
                      <h3 className={`text-5xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-none uppercase ${design.font.heading}`}>
                        {item.label}
                      </h3>
                    </div>
                    
                    {/* Morphing Arrow Icon */}
                    <div className="hidden md:flex w-20 h-20 rounded-full border border-neutral-200 items-center justify-center transition-all duration-700 group-hover:border-white group-hover:rotate-45">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </a>
              )
            ))}
            
            {/* The "Reserve" Final Call */}
            <div className="mt-24 flex justify-between items-center">
               <div className="flex flex-col gap-2">
                 <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400">Location</span>
                 <span className="text-sm font-light tracking-widest uppercase text-neutral-900 ">Lagos</span>
               </div>
               <a 
                href="#booking" 
                className="px-16 py-6 bg-neutral-900 text-white text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-neutral-800 transition-all"
               >
                 Book Session
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}