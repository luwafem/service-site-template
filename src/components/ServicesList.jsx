import { clientConfig } from '../config/clientConfig';

export default function ServicesList() {
  const { services, design } = clientConfig;

  return (
    <section id="services" className="bg-[#faf9f6] py-32 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 border-b border-neutral-200 pb-12">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 block mb-6 font-bold">
              The Collection
            </span>
            <h2 className={`text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-neutral-900 leading-[0.8] ${design.font.heading}`}>
              Signature <br />
              <span className="italic font-serif text-neutral-300">Treatments</span>
            </h2>
          </div>
          <p className={`text-xl text-neutral-500 font-light max-w-xs mt-12 md:mt-0 leading-relaxed ${design.font.body}`}>
            Exceptional experiences curated for the modern aesthete.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-40">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`group flex flex-col ${idx % 2 !== 0 ? 'md:mt-40' : ''}`}
            >
              {/* 1. Image & Price Badge */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 mb-12">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[1.5s]"
                />
                {/* Fixed Price Badge - Always Visible */}
                <div className="absolute bottom-0 left-0 bg-white px-8 py-4 flex flex-col">
                   <span className="text-[8px] uppercase tracking-[0.3em] text-neutral-400">Rate</span>
                   <span className="text-sm font-medium tracking-widest">{service.price}</span>
                </div>
              </div>

              {/* 2. Content Block */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[10px] font-bold text-neutral-900">0{idx + 1}</span>
                  
                </div>
                
                <h3 className={`text-4xl md:text-5xl font-light uppercase tracking-tighter text-neutral-900 mb-6 ${design.font.heading}`}>
                  {service.name}
                </h3>
                
                <p className={`text-neutral-600 font-light leading-relaxed max-w-md mb-12 text-lg ${design.font.body}`}>
                  {service.description}
                </p>

                {/* 3. The "Unmissable" Button */}
                <a 
                  href={service.calendlyUrl}
                  className="w-full md:w-fit group/btn relative flex items-center justify-between gap-12 bg-neutral-900 px-10 py-6 text-white overflow-hidden transition-all hover:pr-8"
                >
                  <span className="relative z-10 text-[10px] uppercase tracking-[0.5em] font-bold">
                    Book Session
                  </span>
                  
                  {/* Arrow Icon */}
                  <svg 
                    className="relative z-10 w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-2" 
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>

                  {/* Hover Slide Background */}
                  <div className="absolute inset-0 bg-neutral-800 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}