export const clientConfig = {
  businessName: "Grace's Maison",
  tagline: "High-Art Hair. Effortless Beauty.",
  heroImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1600", // Editorial hairstyling shot
  colors: {
    primary: "#171717", // Rich Obsidian
    secondary: "#FAF9F6", // Off-white/Cream
    accent: "#B89B72", // Muted Bronze/Clay
    text: "#1A1A1A",
  },
  design: {
    template: "bold", 
    heroStyle: "asymmetric",
    serviceCardStyle: "magazine-grid",
    buttonStyle: "sharp", 
    font: {
      heading: "Cormorant Garamond", 
      body: "Montserrat",
    },
    sections: {
      showTestimonials: true,
      showGallery: true,
      showContactForm: true,
    },
  },
  services: [
    {
      name: "Couture Cut & Finish",
      price: "₦45,000",
      description: "A precision tailored cut following the natural fall of your hair, finished with our signature maison blowout.",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800",
      calendlyUrl: "https://calendly.com/gracesmaison/cut",
    },
    {
      name: "Lived-in Balayage",
      price: "₦85,000",
      description: "Artisanal hand-painted highlights designed to grow out seamlessly and complement your skin's natural undertones.",
      image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800",
      calendlyUrl: "https://calendly.com/gracesmaison/color",
    },
    {
      name: "The Sculpted Glow Facial",
      price: "₦55,000",
      description: "A restorative treatment focusing on lymphatic drainage and deep hydration for an immediate editorial lift.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800",
      calendlyUrl: "https://calendly.com/gracesmaison/facial",
    },
  ],
  portfolio: [
    "https://images.unsplash.com/photo-1595475241949-0f02b288d6d4?w=800", // Salon interior detail
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800", // Beauty close-up
  ],
  testimonials: [
    { text: "The first time a stylist actually understood the architecture of my curls. Absolute perfection.", author: "Tari E." },
    { text: "A sanctuary. I come for the hair, but I stay for the peace and the flawless service.", author: "Oluwaseun A." },
  ],
  contact: {
    phone: "+2348012345678",
    whatsapp: "+2348012345678",
    instagram: "gracesmaison",
    email: "maison@gracesmaison.com",
    address: "Ikoyi, Lagos",
  },
};