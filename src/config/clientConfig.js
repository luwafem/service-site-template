export const clientConfig = {
  businessName: "Shey Beauty Lab",
  tagline: "Lash Artistry & Beauty Lab. Define Your Gaze.",
  heroImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200",
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
      image: "https://images.unsplash.com/photo-1583001933989-c6d5c9a8b1c4?w=800",
      calendlyUrl: "https://calendly.com/sheybeautylab/classic",
    },
    {
      name: "Volume & Hybrid Lashes",
      price: "Starting at ₦35,000",
      description:
        "Achieve a fuller, dramatic look with multiple lightweight extensions per natural lash. Customizable for any desired density.",
      image: "https://images.unsplash.com/photo-1583197967984-6e5e7c1b1f8a?w=800",
      calendlyUrl: "https://calendly.com/sheybeautylab/volume",
    },
    {
      name: "Lash Lift & Tint",
      price: "Starting at ₦15,000",
      description:
        "Lift and curl your natural lashes for a wide eyed look, plus a deep tint to define and darken perfect for low maintenance beauty.",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800",
      calendlyUrl: "https://calendly.com/sheybeautylab/lift-tint",
    },
  ],
  portfolio: [
    "https://images.unsplash.com/photo-1583197967984-6e5e7c1b1f8a?w=2400",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=2400",
    "https://images.unsplash.com/photo-1583001933989-c6d5c9a8b1c4?w=2400",
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
    tiktok: "sheybeautylab",  // Added TikTok field
    email: "hello@sheybeautylab.com",
    address: "Ondo & Lagos",
  },
};