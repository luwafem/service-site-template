import { clientConfig } from '../config/clientConfig';

export default function Hero() {
  const { businessName, tagline, heroImage, design, colors } = clientConfig;
  return (
    <section className="flex flex-col md:flex-row items-center min-h-[70vh] px-4 py-8 md:py-12">
      <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${design.font.heading}`}>
          {businessName}
        </h1>
        <p className={`text-lg md:text-xl mt-2 ${design.font.body}`}>{tagline}</p>
        <a
          href="#booking"
          className="inline-block mt-4 px-6 py-3 text-white text-base md:text-lg rounded-lg min-h-[44px]"
          style={{ backgroundColor: colors.accent }}
        >
          Book Now
        </a>
      </div>
      <div className="w-full md:w-1/2">
        <img src={heroImage} alt={businessName} className="w-full h-auto rounded-lg shadow-lg" loading="lazy" />
      </div>
    </section>
  );
}