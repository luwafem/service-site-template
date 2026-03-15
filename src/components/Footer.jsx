import { clientConfig } from '../config/clientConfig';

export default function Footer() {
  const { businessName, design, contact, colors } = clientConfig;
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
              Lash Artistry & Beauty Lab. Define Your Gaze.
            </p>
          </div>

          <div className="md:col-span-3 space-y-8">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block border-b border-neutral-200 pb-2">Navigation</span>
            <nav className="flex flex-col gap-4">
              {['Services', 'Gallery', 'Stories', 'Book'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-xs uppercase tracking-widest text-neutral-500 hover:text-black transition-colors w-fit"
                  style={{ hover: { color: colors.primary } }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3 space-y-8">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold block border-b border-neutral-200 pb-2">Inquiries</span>
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-widest text-neutral-500 italic">
                {contact.address}
              </p>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                {contact.phone}
              </p>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                {contact.email}
              </p>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                By Appointment Only
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
          </div>

          

          {/* Social Links */}
          <div className="flex gap-12">
            <a 
              href={`https://instagram.com/${contact.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] uppercase tracking-[0.4em] font-bold text-neutral-900 border-b border-black/10 hover:border-black transition-all"
              style={{ hover: { borderColor: colors.primary } }}
            >
              Instagram
            </a>
            <a 
              href={`https://tiktok.com/@${contact.tiktok}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] uppercase tracking-[0.4em] font-bold text-neutral-900 border-b border-black/10 hover:border-black transition-all"
              style={{ hover: { borderColor: colors.primary } }}
            >
              TikTok
            </a>
            <a 
              href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] uppercase tracking-[0.4em] font-bold text-neutral-900 border-b border-black/10 hover:border-black transition-all"
              style={{ hover: { borderColor: colors.primary } }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}