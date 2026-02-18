export const clientConfig = {
  businessName: "Grace's Atelier",
  tagline: "Curating Spaces. Defining Narratives.",
  heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600", // High-end minimalist living room
  colors: {
    primary: "#1C1C1C", // Deep Carbon
    secondary: "#F4F1EE", // Warm Stone / Linen
    accent: "#8C7E6D", // Muted Taupe
    text: "#121212",
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
      name: "Full-Service Interior Design",
      price: "From ₦1,500,000",
      description: "A comprehensive journey from spatial planning and technical drawings to final furniture installation and styling.",
      image: "https://images.unsplash.com/photo-1616486341353-c583342605a1?w=800",
      calendlyUrl: "https://calendly.com/gracesatelier/consultation",
    },
    {
      name: "Bespoke Curation & Styling",
      price: "₦450,000",
      description: "Elevating existing spaces through a curated selection of artisanal furniture, fine art, and custom textiles.",
      image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800",
      calendlyUrl: "https://calendly.com/gracesatelier/styling",
    },
    {
      name: "Conceptual Vision Session",
      price: "₦150,000",
      description: "A two-hour intensive deep-dive to define your aesthetic direction, color palette, and materiality mood boards.",
      image: "https://images.unsplash.com/photo-1615876234582-29a30c5da17b?w=800",
      calendlyUrl: "https://calendly.com/gracesatelier/vision",
    },
  ],
  portfolio: [
    "https://unsplash.com/photos/IH7wPsjwomc/download?force=true&w=2400", // Minimalist kitchen detail
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800", // Soft lit bedroom, // Minimalist kitchen detail
    "https://unsplash.com/photos/z6z2W6Qrpho/download?force=true&w=2400",
  ],
  testimonials: [
    { text: "Grace has an uncanny ability to translate abstract feelings into physical form. Our home is now a masterpiece.", author: "Mr. & Mrs. Okoro" },
    { text: "Sophisticated, disciplined, and visionary. The finest design eye in Lagos.", author: "Fola P." },
  ],
  contact: {
    phone: "+2348012345678",
    whatsapp: "+2348012345678",
    instagram: "gracesatelier",
    email: "studio@gracesatelier.com",
    address: "Banana Island, Lagos",
  },
};