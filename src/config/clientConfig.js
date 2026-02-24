export const clientConfig = {
  businessName: "Haven Spa",
  tagline: "Premium Wellness & Relaxation, Delivered to Your Door 24/7.",
  heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200", // Serene spa setup
  colors: {
    primary: "#2C5F5D", // Deep Teal (Calming & Professional)
    secondary: "#FDFBF7", // Soft Off-White
    accent: "#D4AF37", // Soft Gold (Luxury touch)
    text: "#222222",
  },
  design: {
    template: "bold",
    heroStyle: "centered",
    serviceCardStyle: "image-focus",
    buttonStyle: "solid",
    font: {
      heading: "Playfair Display",
      body: "Poppins",
    },
    sections: {
      showTestimonials: true,
      showGallery: true,
      showContactForm: true,
    },
  },services: [
    {
      name: "Signature Deep Tissue Massage",
      price: "From KSh 4,500",
      description:
        "Available 24/7 at your home or hotel. Our therapists bring professional tables, premium oils, and soothing music to melt away your stress.",
      image: "https://unsplash.com/photos/9BjH8jl7Uj0/download?force=true&w=2400",
      calendlyUrl: "https://calendly.com/nairobigenspa/booking",
    },
    {
      name: "Luxury Couples Retreat",
      price: "From KSh 8,500",
      description:
        "A side-by-side relaxation experience for you and your partner. Perfect for anniversaries or a quiet night in at any Nairobi location.",
      image: "https://unsplash.com/photos/_TyrA1RUaiI/download?force=true",
      calendlyUrl: "https://calendly.com/nairobigenspa/couples",
    },
    {
      name: "Corporate & Event Wellness",
      price: "Custom Pricing",
      description:
        "Boost morale at your next Nairobi event or office with chair massages and express facials. Tailored for groups and corporate functions.",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800",
      calendlyUrl: "https://calendly.com/nairobigenspa/events",
    },
  ],
  portfolio: [
    "https://unsplash.com/photos/-AakIaAPV0w/download?force=true&w=2400", // Spa products
    "https://unsplash.com/photos/qybZ2w0CzMw/download?force=true&w=2400", // Facial treatment
    "https://unsplash.com/photos/BJ7i-96glwM/download?force=true&w=2400", // Stones and massage
  ],
  testimonials: [
    {
      text:
        "The best late night massage I've ever had. They arrived at my hotel in Westlands within 45 minutes. Truly professional.",
      author: "Sarah J.",
    },
    {
      text:
        "We booked them for a bridal shower in Karen. The team was punctual, and the setup was like a 5 star resort in our living room.",
      author: "Kamau W.",
    },
  ],
  contact: {
    phone: "+254 700 000 000",
    whatsapp: "+254 700 000 000",
    instagram: "nairobigenspa",
    email: "relax@nairobigenspa.co.ke",
    address: "Available Across Nairobi & Environs",
  },
};
