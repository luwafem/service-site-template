import { clientConfig } from '../config/clientConfig';

export default function Gallery() {
  const { portfolio, design } = clientConfig;
  if (!portfolio || portfolio.length === 0) return null;

  return (
    <section id="gallery" className="px-4 py-12">
      <h2 className={`text-2xl md:text-3xl font-bold text-center mb-8 ${design.font.heading}`}>
        Portfolio
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {portfolio.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Work ${idx + 1}`}
            className="w-full aspect-square object-cover rounded-lg"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}