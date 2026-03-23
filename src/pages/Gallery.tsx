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
import aboutImg from "@/assets/about-story.jpg";
import productionImg from "@/assets/production.jpg";
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
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<{ src: string, alt: string } | null>(null);

  return (
    <div className="bg-background min-h-screen">
      <PageHeader title="Visual Legacy" subtitle="Glimpses into our journey of purity, from heritage fields to your kitchen" />

      <section className="py-20 bg-gradient-warm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-spice-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, i) => (
              <GsapReveal key={i} direction="up" delay={i * 0.05} className="break-inside-avoid">
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-spice-gold/10"
                  onClick={() => setLightbox({ src: img.src, alt: img.alt })}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spice-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-spice-gold text-[10px] font-black uppercase tracking-[0.2em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.category}</span>
                    <div className="flex items-center justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      <h3 className="text-white font-display text-xl font-bold">{img.alt}</h3>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                        <Maximize2 size={20} />
                      </div>
                    </div>
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
