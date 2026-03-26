import { useState, useMemo } from "react";
import PageHeader from "@/components/PageHeader";
import GsapReveal from "@/components/GsapReveal";
import heroImg from "@/assets/hero-spices.jpg";
import product16 from "@/assets/product16.jpeg";
import product2 from "@/assets/product2.jpeg";
import product3 from "@/assets/product3.jpeg";
import product4 from "@/assets/product4.jpeg";
import product5 from "@/assets/product5.jpeg";
import product6 from "@/assets/product6.jpeg";
import product7 from "@/assets/product7.jpeg";
import product8 from "@/assets/product8.jpeg";
import product9 from "@/assets/product9.jpeg";
import product11 from "@/assets/product11.jpeg";
import product12 from "@/assets/product12.jpeg";
import product15 from "@/assets/product15.png";
import team1 from "@/assets/team1.jpg";
import team2 from "@/assets/team2.jpeg";
import team3 from "@/assets/team3.jpeg";
import team4 from "@/assets/team4.jpeg";
import { X, Camera, Grid, Users } from "lucide-react";

const images = [
  { src: product5, alt: "Turmeric Powder", category: "Products" },
  { src: product2, alt: "Red Chilli Powder", category: "Products" },
  { src: product8, alt: "Coriander Powder", category: "Products" },
  { src: product6, alt: "Garam Masala", category: "Products" },
  { src: product15, alt: "Kanda Lasun Masala", category: "Products" },
  { src: product4, alt: "Kitchen King", category: "Products" },
  { src: product7, alt: "Non Veg Masala", category: "Products" },
  { src: product3, alt: "Biryani Masala", category: "Products" },
  { src: product16, alt: "Kala Masala", category: "Products" },
  { src: product9, alt: "Black Pepper Powder", category: "Products" },
  { src: product12, alt: "Variety of Spices", category: "Products" },
  { src: product11, alt: "Whole Spices", category: "Products" },
  { src: team1, alt: "Aniket D", category: "Team", name: "Aniket D", role: "Founder" },
  { src: team2, alt: "Harshada A", category: "Team", name: "Harshada A", role: "Operations Manager" },
  { src: team3, alt: "Prajakta K", category: "Team", name: "Prajakta K", role: "Finance & Accounts Manager" },
  { src: team4, alt: "Gayetri F", category: "Team", name: "Gayetri F", role: "Sales & Marketing Head" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<{ src: string, alt: string } | null>(null);

  const productImages = useMemo(() => images.filter(img => img.category !== "Team"), []);
  const teamImages = useMemo(() => images.filter(img => img.category === "Team"), []);

  return (
    <div className="bg-background min-h-screen">
      <PageHeader title="Visual Legacy" subtitle="Glimpses into our journey of purity, from heritage fields to your kitchen" />

      {/* Product Section */}
      <section className="py-12 bg-gradient-warm border-b border-spice-gold/10">
        <div className="container mx-auto px-4">
          <GsapReveal className="mb-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-spice-gold" />
              <span className="text-spice-gold font-display font-bold uppercase tracking-widest text-sm">Fine Selection</span>
              <div className="h-px w-8 bg-spice-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Masterpieces</h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Explore the premium collection of our finest spice blends, crafted with tradition and purity to elevate your culinary experience.
            </p>
          </GsapReveal>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {productImages.map((img, i) => (
              <GsapReveal 
                key={`prod-${i}`} 
                delay={i * 0.1}
                direction="scale"
                className="group"
              >
                <div 
                  onClick={() => setLightbox({ src: img.src, alt: img.alt })}
                  className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg border border-spice-gold/10 hover:shadow-2xl transition-all duration-300 aspect-[4/3] group"
                >
                  <img 
                    src={img.src} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    alt={img.alt} 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <span className="text-white font-display font-extrabold text-[14px] sm:text-[18px] uppercase tracking-widest leading-none text-center">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-spice-dark/5 border-b border-spice-gold/10">
        <div className="container mx-auto px-4">
          <GsapReveal className="mb-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-spice-gold" />
              <span className="text-spice-gold font-display font-bold uppercase tracking-widest text-sm">Human Touch</span>
              <div className="h-px w-8 bg-spice-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Dedicated Team</h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              The passion and expertise behind every pack of Dodke Masale, committed to delivering authentic Indian flavors to your kitchen.
            </p>
          </GsapReveal>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {teamImages.map((img, i) => (
              <GsapReveal 
                key={`team-${i}`} 
                delay={i * 0.1}
                direction="up"
                className="group"
              >
                <div className="space-y-3">
                  <div 
                    onClick={() => setLightbox({ src: img.src, alt: img.alt })}
                    className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg border border-spice-gold/10 hover:shadow-2xl transition-all duration-300 aspect-[3/4]"
                  >
                    <img 
                      src={img.src} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      alt={img.alt} 
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-display font-bold text-spice-dark text-lg leading-tight mb-1">{(img as any).name}</h4>
                    <p className="font-body text-spice-red font-bold text-xs uppercase tracking-wider">{(img as any).role}</p>
                  </div>
                </div>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-spice-dark/95 flex items-center justify-center p-6 backdrop-blur-md transition-all duration-300 animate-in fade-in"
          onClick={() => setLightbox(null)}
        >
          <div className="absolute top-8 left-8 flex items-center gap-3 text-white">
            <span className="font-display font-bold uppercase tracking-widest text-sm translate-y-0.5">Dodke Gallery</span>
          </div>
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors" 
            onClick={() => setLightbox(null)}
          >
            <X size={40} strokeWidth={1} />
          </button>
          
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            <img 
              src={lightbox.src} 
              alt={lightbox.alt} 
              className="max-w-full max-h-[75vh] object-contain rounded-3xl shadow-2xl border border-white/10" 
              onClick={(e) => e.stopPropagation()}
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

