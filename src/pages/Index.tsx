import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Leaf, Shield, Award, Star } from "lucide-react";
import GsapReveal from "@/components/GsapReveal";
import SectionTitle from "@/components/SectionTitle";
import heroImg from "@/assets/hero-spices.jpg";
import turmericImg from "@/assets/turmeric.jpg";
import chiliImg from "@/assets/chili.jpg";
import cuminImg from "@/assets/cumin.jpg";
import garamMasalaImg from "@/assets/garam-masala.jpg";

gsap.registerPlugin(ScrollTrigger);

const featuredProducts = [
  { name: "Turmeric Powder", desc: "Pure & vibrant haldi for daily cooking", img: turmericImg },
  { name: "Red Chili Powder", desc: "Bold & fiery mirchi for authentic heat", img: chiliImg },
  { name: "Cumin Seeds", desc: "Aromatic jeera for perfect tempering", img: cuminImg },
  { name: "Garam Masala", desc: "Royal blend of finest whole spices", img: garamMasalaImg },
];

const whyUs = [
  { icon: Leaf, title: "100% Natural", desc: "No additives or artificial colors" },
  { icon: Shield, title: "Hygienically Processed", desc: "State-of-the-art clean facilities" },
  { icon: Award, title: "Premium Quality", desc: "Sourced from the finest farms" },
];

const testimonials = [
  { name: "Priya Sharma", text: "Dodke Masale transformed my cooking! The aroma is unmatched.", rating: 5 },
  { name: "Rajesh Patel", text: "We've been using these spices for years. Consistently excellent quality.", rating: 5 },
  { name: "Meena Kulkarni", text: "The freshness and flavor is incredible. Highly recommended!", rating: 5 },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { opacity: 0, x: -100, duration: 1.2, delay: 0.2, ease: "power4.out" });
      gsap.from(".hero-sub", { opacity: 0, x: 100, duration: 1.2, delay: 0.5, ease: "power4.out" });
      gsap.from(".hero-cta", { opacity: 0, y: 50, duration: 1, delay: 0.8, ease: "power4.out" });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Premium Indian Spices" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-spice-dark/90 via-spice-dark/70 to-spice-dark/50" />
        </div>
        <div className="relative container mx-auto px-4 text-center py-32">
          <h1 className="hero-title font-display text-4xl md:text-6xl lg:text-7xl font-bold text-spice-cream leading-tight mb-6">
            The Authentic Taste of <br />
            <span className="text-gradient-spice">Indian Spices</span>
          </h1>
          <p className="hero-sub font-body text-lg md:text-xl text-spice-cream/80 max-w-2xl mx-auto mb-8">
            Crafted with tradition, packed with purity. Dodke Masale brings you the finest spices sourced directly from Indian farms.
          </p>
          <div className="hero-cta flex flex-wrap gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-gradient-spice text-primary-foreground font-body font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-spice"
            >
              Explore Products <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-spice-gold text-spice-gold font-body font-semibold px-8 py-3 rounded-full hover:bg-spice-gold/10 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products - Infinite Scroller */}
      <section className="py-24 bg-gradient-warm overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <SectionTitle title="Our Premium Spices" subtitle="Handpicked and crafted to perfection for your kitchen" />
        </div>
        
        {/* Infinite Scroller Container */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-infinite-scroll gap-8 min-w-full">
            {[...featuredProducts, ...featuredProducts].map((p, i) => (
              <div key={`${p.name}-${i}`} className="flex-shrink-0 w-72 group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-spice-gold/5">
                <div className="overflow-hidden aspect-square relative">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spice-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 text-center bg-white">
                  <h3 className="font-display text-lg font-bold text-spice-dark mb-1">{p.name}</h3>
                  <p className="font-body text-muted-foreground text-xs italic">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-spice-red font-display font-black uppercase tracking-widest text-sm hover:gap-4 transition-all pb-1 border-b-2 border-spice-gold"
          >
            View All Products <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-spice-dark">
        <div className="container mx-auto px-4">
          <SectionTitle title="Why Choose Dodke Masale" subtitle="Quality you can taste, purity you can trust" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <GsapReveal key={item.title} direction="scale" delay={i * 0.15}>
                <div className="text-center p-8 rounded-xl border border-spice-gold/20 hover:border-spice-gold/50 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-gradient-spice flex items-center justify-center mx-auto mb-5">
                    <item.icon size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-spice-gold mb-2">{item.title}</h3>
                  <p className="font-body text-spice-cream/70 text-sm">{item.desc}</p>
                </div>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Infinite Scroller (Reverse) */}
      <section className="py-24 bg-gradient-warm overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <SectionTitle title="What Our Customers Say" subtitle="Trusted by thousands of happy families" />
        </div>

        {/* Infinite Scroller Container */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-infinite-scroll-reverse gap-8 min-w-full">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={`${t.name}-${i}`} className="flex-shrink-0 w-80 group bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-spice-gold text-spice-gold" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground text-sm italic mb-4">"{t.text}"</p>
                <p className="font-display font-semibold text-spice-dark">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
