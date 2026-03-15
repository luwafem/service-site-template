export const clientConfig = {
  businessName: "Shey Beauty Lab",
  tagline: "Lash Artistry & Beauty Lab. Define Your Gaze.",
  heroImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200", // Soft, high-end beauty portrait
  colors: {
    primary: "#B76E79", // Rose Gold
    secondary: "#F9F1F0", // Soft Blush
    accent: "#D4AF37", // Warm Gold
    text: "#2C2C2C",
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
  },
  services: [
    {
      name: "Classic Lash Extensions",
      price: "Starting at ₦25,000",
      description:
        "Enhance your natural lashes with a timeless, elegant look. One extension per natural lash for a subtle, lengthened effect.",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800", // Focused eye shot
      calendlyUrl: "https://calendly.com/sheybeautylab/classic",
    },
    {
      name: "Volume & Hybrid Lashes",
      price: "Starting at ₦35,000",
      description:
        "Achieve a fuller, dramatic look with multiple lightweight extensions per natural lash. Customizable for any desired density.",
      image: "https://images.unsplash.com/photo-1448376561459-dbe37c801bd1?auto=format&fit=crop&q=80&w=800", // Dramatic lash focus
      calendlyUrl: "https://calendly.com/sheybeautylab/volume",
    },
    {
      name: "Lash Lift & Tint",
      price: "Starting at ₦15,000",
      description:
        "Lift and curl your natural lashes for a wide eyed look, plus a deep tint to define and darken perfect for low maintenance beauty.",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800", // Natural lifted look
      calendlyUrl: "https://calendly.com/sheybeautylab/lift-tint",
    },
  ],
  portfolio: [
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=2400", // Makeup/Lash aesthetic
    "https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?auto=format&fit=crop&q=80&w=2400", // Detailed lash work
    "https://images.unsplash.com/photo-1526045431048-f857369aba09?auto=format&fit=crop&q=80&w=2400", // Beauty lab vibe
  ],
  testimonials: [
    {
      text:
        "Shey Beauty Lab gave me the most natural looking volume lashes. They last for weeks and always get compliments. Absolutely recommend!",
      author: "Chioma A.",
    },
    {
      text:
        "The lash lift and tint changed my mornings I wake up looking awake! Professional, clean, and so friendly. My go to lash spot.",
      author: "Temilade F.",
    },
  ],
  contact: {
    phone: "+234 800 123 4567",
    whatsapp: "+234 800 123 4567",
    instagram: "sheybeautylab",
    tiktok: "sheybeautylab",
    email: "hello@sheybeautylab.com",
    address: "Ondo & Lagos",
  },
};