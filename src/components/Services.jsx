import { clientConfig } from '../config/clientConfig';

export default function ServicesEditorial() {
  const { services, design } = clientConfig;

  if (!services || services.length === 0) return null;

  return (
    <section id="services" className="py-24 md:py-40 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Sticky Branding & Thesis */}
          <div className="lg:sticky lg:top-20">
            <h2 className={`text-7xl md:text-9xl font-black tracking-tighter leading-none mb-10 ${design.font.heading}`}>
              The <br />
              <span className="text-gray-200">Rituals</span>
            </h2>
            <div className="space-y-6 max-w-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-black" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Curated Modalities</span>
              </div>
              <p className={`text-xl text-gray-500 font-light leading-relaxed ${design.font.body}`}>
                A bespoke selection of therapies designed to restore balance. Each session is tailored to your unique biological rhythm.
              </p>
            </div>
          </div>

          {/* Right Side: Interactive Service List */}
          <div className="flex flex-col border-t border-black">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col py-12 border-b border-gray-100 transition-all duration-700 hover:bg-gray-50/50 hover:px-6"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-6 items-start">
                    <span className="text-xs font-mono text-gray-400 mt-2">
                      [{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]
                    </span>
                    <h3 className={`text-4xl md:text-6xl font-bold tracking-tight transition-all duration-500 group-hover:italic ${design.font.heading}`}>
                      {service.name}
                    </h3>
                  </div>
                  <span className="text-xl md:text-2xl font-light text-black">
                    {service.price}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Subtle Image Preview */}
                  <div className="w-full md:w-48 h-32 overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-xl shadow-black/5">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between h-full">
                    <p className={`text-gray-500 leading-relaxed max-w-md mb-8 ${design.font.body}`}>
                      {service.description}
                    </p>
                    
                    <a 
                      href={service.calendlyUrl}
                      className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-black text-gray-400 transition-colors"
                    >
                      <span>Reserve Experience</span>
                      <div className="w-8 h-[1px] bg-gray-200 group-hover:w-16 group-hover:bg-black transition-all duration-500" />
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom Note */}
            <div className="mt-12 p-8 border border-dashed border-gray-200 rounded-3xl">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 text-center font-bold">
                Custom Multi-Hour Packages Available Upon Request
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}