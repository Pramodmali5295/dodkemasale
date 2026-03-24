import PageHeader from "@/components/PageHeader";
import GsapReveal from "@/components/GsapReveal";
import { Leaf, Shield, Award, Users, Truck, CheckCircle } from "lucide-react";

const strengths = [
  { icon: Leaf, title: "100% Natural Ingredients", desc: "No artificial colors, preservatives, or adulterants. Just pure, farm-fresh spices." },
  { icon: Shield, title: "Hygienic Processing", desc: "State-of-the-art manufacturing with strict quality control at every stage." },
  { icon: Award, title: "Traditional Methods", desc: "We blend the wisdom of traditional stone-grinding with modern technology." },
  { icon: Users, title: "Trusted by Thousands", desc: "Families, restaurants, and businesses rely on Dodke Masale for consistent quality." },
  { icon: Truck, title: "Pan-India Distribution", desc: "Available across India through our extensive network of trusted distributors." },
  { icon: CheckCircle, title: "Quality Certified", desc: "All products meet the highest food safety and quality standards." },
];

const WhyChooseUs = () => (
  <div>
    <PageHeader title="Why Choose Us" subtitle="What sets Dodke Masale apart from the rest" />

    {/* Section Intro */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <GsapReveal direction="up" className="max-w-4xl mx-auto">
          <span className="text-spice-red font-body font-bold text-sm uppercase tracking-[0.3em] mb-4 inline-block">Uncompromising Standards</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-spice-dark">We Don't Just Sell Spices; <br /> <span className="text-gradient-spice">We Deliver Purity</span></h2>
          <p className="font-body text-xl text-muted-foreground leading-relaxed italic">
            "At Dodke Masale, we believe the heart of a great meal lies in its ingredients. We focus on the art of spice blending, ensuring the natural flavor and goodness of every spice is preserved."
          </p>
        </GsapReveal>
      </div>
    </section>

    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((s, i) => (
            <GsapReveal key={s.title} direction="scale" delay={i * 0.1}>
              <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-spice transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-full bg-gradient-spice flex items-center justify-center mb-5">
                  <s.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default WhyChooseUs;
