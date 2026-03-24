import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import GsapReveal from "@/components/GsapReveal";
import heroImg from "@/assets/hero-spices.jpg";
import turmericImg from "@/assets/turmeric.jpg";
import chiliImg from "@/assets/chili.jpg";
import cuminImg from "@/assets/cumin.jpg";
import corianderImg from "@/assets/coriander.jpg";
import garamMasalaImg from "@/assets/garam-masala.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import aboutImg from "@/assets/gallery-1.jpg";
import productionImg from "@/assets/gallery-2.jpg";
import team1 from "@/assets/team1.jpg";
import team2 from "@/assets/team2.jpeg";
import team3 from "@/assets/team3.jpeg";
import team4 from "@/assets/team4.jpeg";
import { X, Maximize2, Camera } from "lucide-react";

const images = [
  { src: heroImg, alt: "Premium spice collection", category: "Featured" },
  { src: turmericImg, alt: "Turmeric powder", category: "Products" },
  { src: chiliImg, alt: "Red chili powder", category: "Products" },
  { src: cuminImg, alt: "Cumin seeds", category: "Raw" },
  { src: corianderImg, alt: "Coriander powder", category: "Products" },
  { src: garamMasalaImg, alt: "Garam masala blend", category: "Products" },
  { src: gallery1, alt: "Assorted whole spices", category: "Heritage" },
  { src: gallery2, alt: "Traditional spice grinding", category: "Process" },
  { src: aboutImg, alt: "Spice market", category: "Heritage" },
  { src: productionImg, alt: "Modern production", category: "Process" },
  { src: team3, alt: "Expert Member", category: "Team" },
  { src: team4, alt: "Expert Member", category: "Team" },
  { src: team1, alt: "Our Expert Team Member", category: "Team" },
  { src: team2, alt: "Our Production Team", category: "Team" },
];

const teamImages = [team1, team2, team3, team4, team1, team2, team3, team4];
const productImages = [heroImg, turmericImg, chiliImg, cuminImg, corianderImg, garamMasalaImg, gallery1, gallery2];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<{ src: string, alt: string } | null>(null);

  // Triple for seamless loop
  const productsScroller = [...productImages, ...productImages, ...productImages];
  const teamScroller = [...teamImages, ...teamImages, ...teamImages];

  return (
    <div className="bg-background min-h-screen">
      <PageHeader title="Visual Legacy" subtitle="Glimpses into our journey of purity, from heritage fields to your kitchen" />

      {/* Product Slider - Left to Right */}
      <section className="py-12 bg-gradient-warm overflow-hidden border-b border-spice-gold/10">
        <div className="container mx-auto px-4 mb-10 text-center">
          <h2 className="font-display text-3xl font-bold mb-3">Our Masterpieces</h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">Explore the premium collection of our finest spice blends, crafted with tradition and purity to elevate your culinary experience.</p>
        </div>
        <div className="relative flex">
          <div className="flex animate-infinite-scroll-reverse gap-6 min-w-full">
            {productsScroller.map((src, i) => (
              <div 
                key={`prod-${i}`} 
                onClick={() => setLightbox({ src, alt: "Spice Product" })}
                className="w-48 h-64 sm:w-64 sm:h-80 flex-shrink-0 cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-spice-gold/20 group"
              >
                <img 
                  src={src} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt="Spice Product" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Slider - Right to Left */}
      <section className="py-12 bg-spice-dark/5 overflow-hidden border-b border-spice-gold/10">
        <div className="container mx-auto px-4 mb-10 text-center">
          <h2 className="font-display text-3xl font-bold mb-3">Our Dedicated Team</h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">The passion and expertise behind every pack of Dodke Masale, committed to delivering authentic Indian flavors to your kitchen.</p>
        </div>
        <div className="relative flex">
          <div className="flex animate-infinite-scroll gap-6 min-w-full">
            {teamScroller.map((src, i) => (
              <div 
                key={`team-${i}`} 
                onClick={() => setLightbox({ src, alt: "Our Team" })}
                className="w-48 h-64 sm:w-64 sm:h-80 flex-shrink-0 cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-spice-gold/20 group"
              >
                <img 
                  src={src} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt="Our Team" 
                  loading="lazy"
                />
              </div>
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
            <Camera size={24} className="text-spice-gold" />
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
            <div className="mt-8 text-center" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-white font-display text-3xl font-bold mb-2">{lightbox.alt}</h2>
              <div className="w-12 h-1 bg-gradient-spice mx-auto rounded-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
