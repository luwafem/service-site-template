import { clientConfig } from '../config/clientConfig';

export default function Footer() {
  const { businessName, design, contact } = clientConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#faf9f6] pt-32 pb-12 px-6 md:px-12 border-t border-neutral-200">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Top Tier: Brand Identity */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
          <div className="md:col-span-6">
            <h2 className={`text-4xl md:text-6xl font-light uppercase tracking-[0.4em] mb-8 ${design.font.heading}`}>
              {businessName}
            </h2>
            <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 max-w-sm leading-relaxed">
              Designed for the modern aesthete. A sanctuary where architecture meets wellness.
            </p>
          </div>

          <div className="md:col-span-3 space-y-8">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block border-b border-neutral-200 pb-2">Navigation</span>
            <nav className="flex flex-col gap-4">
              {['Services', 'The Studio', 'Journal', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-xs uppercase tracking-widest text-neutral-500 hover:text-black transition-colors w-fit">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3 space-y-8">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block border-b border-neutral-200 pb-2">Inquiries</span>
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-widest text-neutral-500 italic">
                {contact.address || "Beverly Hills, CA"}
              </p>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Studio Open Daily 09:00 — 20:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Tier: The Signature */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-t border-neutral-200 pt-12">
          
          {/* Copyright & Credits */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-8 text-[9px] uppercase tracking-[0.4em] text-neutral-400">
              <span>© {year} {businessName}</span>
              <span className="hidden md:inline">—</span>
              <span>All Rights Reserved</span>
            </div>
            <div className="text-[8px] uppercase tracking-[0.6em] text-neutral-300">
              Site by <span className="text-neutral-400">Gemini Editorial</span>
            </div>
          </div>

          {/* Large Stylized Logo Mark (Watermark style) */}
          <div className="relative">
             <span className={`text-[12vw] md:text-[8vw] font-light text-neutral-200/40 leading-none select-none ${design.font.heading}`}>
               {businessName.charAt(0)}
             </span>
          </div>

          {/* Social Links as simple text */}
          <div className="flex gap-12">
            {['Instagram', 'Pinterest', 'LinkedIn'].map((platform) => (
              <a 
                key={platform}
                href="#" 
                className="text-[9px] uppercase tracking-[0.4em] font-bold text-neutral-900 border-b border-black/10 hover:border-black transition-all"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}