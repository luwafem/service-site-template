import { clientConfig } from '../config/clientConfig';

export default function Testimonials() {
  const { testimonials, design } = clientConfig;
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="px-4 py-12 bg-gray-50">
      <h2 className={`text-2xl md:text-3xl font-bold text-center mb-8 ${design.font.heading}`}>
        Client Love
      </h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white p-5 rounded-lg shadow">
            <p className={`text-gray-700 italic ${design.font.body}`}>"{t.text}"</p>
            <p className={`mt-3 font-semibold text-right ${design.font.heading}`}>— {t.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}