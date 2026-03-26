import { useEffect, useState, useRef } from "react";
import PageHeader from "@/components/PageHeader";
import GsapReveal from "@/components/GsapReveal";
import aboutImg from "@/assets/home heros.jpeg";
import productionImg from "@/assets/hero-spices.jpg";
import gsap from "gsap";
import { Target, Eye, Heart, Award, Users, Package, CheckCircle, Zap } from "lucide-react";

const stats = [
  { label: "Years of Legacy", value: 35, suffix: "+", color: "bg-spice-red/5 border-spice-red/20 text-spice-red" },
  { label: "Premium Products", value: 26, suffix: "+", color: "bg-spice-orange/5 border-spice-orange/20 text-spice-orange" },
  { label: "Customer Satisfaction", value: 100, suffix: "%", color: "bg-spice-gold/5 border-spice-gold/20 text-spice-gold" },
  { label: "Quality Checks", value: 100, suffix: "%", color: "bg-spice-green/5 border-spice-green/20 text-spice-green" },
];

const StatCounter = ({ value, suffix, isActive }: { value: number; suffix: string; isActive: boolean }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => setCount(Math.floor(obj.val)),
      });
    }
  }, [isActive, value]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const About = () => {
  const statsRef = useRef(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background">
      <PageHeader title="Our Story" subtitle="A legacy of flavor, purity, and trust spanning decades" />

      {/* Story Section */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <GsapReveal direction="left" className="relative mx-auto w-[90%] sm:w-full max-w-lg lg:max-w-none">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-spice rounded-full blur-3xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={aboutImg} alt="The Dodke Masale Story" className="w-full aspect-[4/3] object-contain transition-all duration-300" />
              </div>
            </GsapReveal>
            
            <GsapReveal direction="right">
              <span className="inline-block text-spice-red font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-4">Crafting Excellence</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight text-spice-dark">The <span className="text-gradient-spice">Dodke Masale</span> Legacy</h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Dodke Masale began with a passion to preserve the true taste of Indian spices. What started as a small family tradition has grown into a trusted name known for purity and quality.
                </p>
              <p>
                We carefully select our spices from reliable farmers and suppliers to ensure rich aroma, great taste, and consistency in every pack. Our process is designed to retain the natural oils, color, and freshness of each spice.
              </p>
              <p>
                More than just a brand, Dodke Masale is our promise to deliver authentic flavors with care and quality to every kitchen.
              </p>
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { text: "Heritage Recipes" },
                  { text: "Zero Adulteration" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-spice-dark font-bold">
                    <span className="text-md uppercase tracking-wider">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            </GsapReveal>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-16 bg-gradient-warm relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <GsapReveal key={stat.label} direction="up" delay={i * 0.1} className="h-full">
                <div className={`shadow-lg rounded-2xl p-6 md:p-8 text-center border-2 transition-all duration-500 hover:scale-105 group overflow-hidden relative ${stat.color} bg-white h-full flex flex-col justify-center`}>
                  <div className={`absolute top-0 left-0 w-full h-1 opacity-20 bg-current`} />
                  <p className="text-3xl md:text-5xl font-display font-black mb-2 leading-none pt-2">
                    <StatCounter value={stat.value} suffix={stat.suffix} isActive={isStatsVisible} />
                  </p>
                  <p className="text-[10px] md:text-xs font-body font-black uppercase tracking-widest opacity-80 leading-tight">{stat.label}</p>
                </div>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Refined */}
      <section className="py-24 bg-spice-dark relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Our Mission", desc: "To deliver 100% pure, authentic spices to every Indian kitchen while maintaining the highest standards of quality and hygiene." },
              { title: "Our Vision", desc: "To become India's most trusted spice brand, recognized for purity, tradition, and innovation in every product line." },
              { title: "Our Values", desc: "Integrity, purity, and customer satisfaction form the core of everything we do. Quality is not just a promise — it's our identity." },
            ].map((item, i) => (
              <GsapReveal key={item.title} direction="up" delay={i * 0.1}>
                <div className="group relative overflow-hidden bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-spice rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity" />
                  <h3 className="font-display text-2xl font-bold text-spice-gold mb-4">{item.title}</h3>
                  <p className="font-body text-spice-cream/70 text-md leading-relaxed">{item.desc}</p>
                </div>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process - Enhanced */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <GsapReveal direction="left" className="lg:order-1">
              <span className="inline-block text-spice-red font-body font-bold text-sm uppercase tracking-[0.3em] mb-4">Precision & Care</span>
              <h2 className="font-display text-4xl font-bold mb-6">Our Manufacturing Excellence</h2>
              <p className="font-body text-muted-foreground text-lg mb-10 leading-relaxed">
                We combine traditional wisdom with modern technology to preserve the essential oils and aroma of our spices.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Direct Sourcing", desc: "Sourced directly from the finest spice farms across India." },
                  { title: "Lab Tested", desc: "Rigorous quality checks for purity and zero adulteration." },
                ].map((item, i) => (
                  <div key={i} className="">
                    <div>
                      <p className="font-display font-bold text-lg mb-1">{item.title}</p>
                      <p className="font-body text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GsapReveal>
            <GsapReveal direction="right" className="lg:order-2 mx-auto w-[90%] sm:w-full max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="absolute inset-0 bg-spice-red/5 rounded-2xl -rotate-3 scale-105" />
                <img src={productionImg} alt="Modern spice production" className="relative z-10 rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
