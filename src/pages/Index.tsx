import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Leaf, Shield, Award, Star } from "lucide-react";
import GsapReveal from "@/components/GsapReveal";
import SectionTitle from "@/components/SectionTitle";
import heroImg from "@/assets/hero-spices.jpg";

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
import product16 from "@/assets/product16.jpeg";
import logoImg from "@/assets/favlogo.png";

gsap.registerPlugin(ScrollTrigger);

const featuredProducts = [
  { name: "Turmeric Powder", desc: "Pure golden haldi, rich in curcumin for daily cooking and medicinal benefits.", img: product5 },
  { name: "Red Chilli Powder", desc: "Fiery red mirchi powder made from Guntur chilies.", img: product2 },
  { name: "Coriander Powder", desc: "Finely ground dhania with fresh and earthy aroma.", img: product8 },
  { name: "Garam Masala", desc: "A royal secret blend of cardamom, cinnamon, cloves and more.", img: product6 },
  { name: "Kanda Lasun Masala", desc: "Traditional Maharashtrian blend of onion, garlic, and spices.", img: product15 },
  { name: "Kitchen King", desc: "The ultimate all-purpose spice blend for every dish.", img: product4 },
  { name: "Non Veg Masala", desc: "A rich and robust spice blend crafted for meat curries.", img: product7 },
  { name: "Biryani Masala", desc: "Aromatic blend of whole spices for the perfect royal biryani.", img: product3 },
  { name: "Kala Masala", desc: "Authentic traditional Maharashtrian roasted spice blend.", img: product16 },
  { name: "Black Pepper Powder", desc: "Boldly ground black pepper for a sharp, pungent kick.", img: product9 },
  { name: "Variety of Spices", desc: "A wide assortment of premium spices for your kitchen.", img: product12 },
  { name: "Whole Spices", desc: "Unprocessed, farm-fresh whole spices for maximum health.", img: product11 },
];

const whyUs = [
  { icon: Leaf, title: "100% Natural", desc: "No additives or artificial colors" },
  { icon: Shield, title: "Hygienically Processed", desc: "State-of-the-art clean facilities" },
  { icon: Award, title: "Premium Quality", desc: "Sourced from the finest farms" },
];

const testimonials = [
  { name: "Abhijit Nagare", text: "The perfect for who loves the homely taste! This masala’s soothing aroma brings the authentic taste of the village right to your food… must try…", rating: 5 },
  { name: "Kaushik Kale", text: "The laddoos made by the Dodkes are healthy and worth consuming it for your health benifits. Taste is also very good. I get it for my family every month.", rating: 5 },
  { name: "Merin Thomas", text: "For all the spicy food lovers who want a restaurant like experience at home, Dodke Masala is the answer. Good quality, worth the price", rating: 5 },
  { name: "Manoj More", text: "Recently tried Dodke Masale and it was a delightful experience! The blend of spices in their masala is truly exceptional, adding a burst of flavours to every dish. The quality and freshness of the ingredients stood out. Highly recommend!", rating: 5 },
  { name: "CHINTAMANI MARATHE", text: "Must try once, its enrich taste of you sabji's. Your sabjis will start tasting great. Also, try their other products like dink laddu, methya ladu and Haldi power", rating: 5 },
  { name: "Shailesh Gaikwad", text: "'Dodke masale' is the best available masala for adding great taste and aroma to all vegetarian and non-vegetarian recipes.", rating: 5 },
  { name: "Poonam Kanekar", text: "Test is best Dodke Masale is the best", rating: 5 },
  { name: "Amit Gaikwad", text: "Authentic Maharashtra delicacies from Messrs. Dodke Masala & Co.,👑👑👍", rating: 5 },
  { name: "SHAHBAJ SHAIKH", text: "Be it sister-in-law or sale, you will find spicy spices in every house. Best taste.", rating: 5 },
  { name: "Nikhil Pathak", text: "Spices \"One of the spices\"", rating: 5 },
  { name: "Sandeep Pawar", text: "Very testy and good quality", rating: 5 },
  { name: "Amol Shardul", text: "Good Packaging. Aroma is strong. Tastes Excellent..!!", rating: 5 },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-logo", { opacity: 0, scale: 0.5, duration: 1.5, ease: "back.out(1.7)" });
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
          <img 
            src={heroImg} 
            alt="Premium Indian Spices" 
            className="w-full h-full object-cover" 
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-spice-dark/70 via-spice-dark/40 to-spice-dark/20" />
        </div>
        <div className="relative container mx-auto px-4 text-center py-20 xs:py-24 sm:py-32 lg:py-40 flex flex-col items-center">
          <div className="hero-logo mb-6 sm:mb-8">
            <img 
              src={logoImg} 
              alt="Dodke Masale" 
              className="w-32 h-32 xs:w-48 sm:w-64 md:w-80 object-contain animate-float" 
              fetchPriority="high"
            />
          </div>
          <h1 className="hero-title font-display text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-spice-cream leading-tight mb-6 max-w-4xl">
            The Authentic Taste of <br className="hidden sm:block" />
            <span className="text-yellow-400">Indian Spices</span>
          </h1>
          <p className="hero-sub font-body text-xs xs:text-sm sm:text-lg md:text-xl text-spice-cream/80 max-w-2xl mb-8 px-2 sm:px-0">
            Crafted with tradition, packed with purity. Dodke Masale brings you the finest spices sourced directly from Indian farms.
          </p>
          <div className="hero-cta flex flex-col xs:flex-row gap-3 xs:gap-4 w-full xs:w-auto px-4 xs:px-0">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-gradient-spice text-white font-body font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-transform duration-300 shadow-spice"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-spice-gold text-spice-gold font-body font-bold px-8 py-3.5 rounded-full hover:bg-spice-gold/10 transition-colors duration-300"
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
        <div className="relative flex overflow-hidden py-4">
          <div className="flex animate-infinite-scroll gap-4 sm:gap-8 min-w-full">
            {[...featuredProducts, ...featuredProducts].map((p, i) => (
              <div key={`${p.name}-${i}`} className="flex-shrink-0 w-64 sm:w-72 group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-spice-gold/5">
                <div className="overflow-hidden aspect-[4/3] relative bg-white flex items-center justify-center p-4">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="max-w-full max-h-full w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spice-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4 sm:p-6 text-center bg-white">
                  <h3 className="font-display text-base sm:text-lg font-bold text-spice-dark mb-1">{p.name}</h3>
                  <p className="font-body text-muted-foreground text-[10px] sm:text-xs italic line-clamp-2">{p.desc}</p>
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
            View All Products
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
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div key={`${t.name}-${i}`} className="flex-shrink-0 w-80 group bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <p className="font-body text-black text-sm italic mb-4">"{t.text}"</p>
                <p className="font-display font-semibold text-black">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
