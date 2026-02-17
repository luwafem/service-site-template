import { clientConfig } from './config/clientConfig';
import Header from './components/Header';  // 👈 new import

// Minimal variants
import HeroMinimal from './components/Hero';
import ServicesMinimal from './components/Services';
import GalleryMinimal from './components/Gallery';
import TestimonialsMinimal from './components/Testimonials';

// Bold variants
import HeroBold from './components/HeroBold';
import ServicesBold from './components/ServicesList';
import GalleryBold from './components/GalleryMasonry';
import TestimonialsBold from './components/TestimonialsCarousel';

// Shared components
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const { design } = clientConfig;
  const template = design.template || 'minimal';

  // Map templates to components
  const HeroComponent = {
    minimal: HeroMinimal,
    bold: HeroBold,
  }[template] || HeroMinimal;

  const ServicesComponent = {
    minimal: ServicesMinimal,
    bold: ServicesBold,
  }[template] || ServicesMinimal;

  const GalleryComponent = {
    minimal: GalleryMinimal,
    bold: GalleryBold,
  }[template] || GalleryMinimal;

  const TestimonialsComponent = {
    minimal: TestimonialsMinimal,
    bold: TestimonialsBold,
  }[template] || TestimonialsMinimal;

  // Apply font class to body
  document.body.className = design.font.body;

  return (
    <main className="min-h-screen bg-white">
      <Header />  {/* 👈 header added here */}
      <HeroComponent />
      <ServicesComponent />
      {design.sections.showGallery && <GalleryComponent />}
      {design.sections.showTestimonials && <TestimonialsComponent />}
      <Contact />
      <Footer />
    </main>
  );
}

export default App;