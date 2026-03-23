import PageHeader from "@/components/PageHeader";
import GsapReveal from "@/components/GsapReveal";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Priya Sharma", location: "Mumbai", text: "Dodke Masale has completely transformed my cooking. The aroma and freshness of their spices is unmatched!", rating: 5 },
  { name: "Rajesh Patel", location: "Ahmedabad", text: "As a restaurant owner, quality is everything. Dodke Masale delivers consistent, premium quality every time.", rating: 5 },
  { name: "Meena Kulkarni", location: "Pune", text: "I've tried many brands, but nothing comes close to the authentic flavor of Dodke Masale. My family loves it!", rating: 5 },
  { name: "Amit Deshmukh", location: "Nagpur", text: "The purity and freshness of their turmeric powder is outstanding. You can see and taste the difference.", rating: 5 },
  { name: "Sunita Joshi", location: "Delhi", text: "Excellent packaging and unbeatable quality. Dodke Masale is now a permanent part of my kitchen.", rating: 4 },
  { name: "Vikram Singh", location: "Jaipur", text: "As a wholesaler, I recommend Dodke Masale to all my clients. The feedback is always positive!", rating: 5 },
];

const Testimonials = () => (
  <div>
    <PageHeader title="Testimonials" subtitle="Hear from our happy customers and partners" />

    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <GsapReveal key={r.name} direction="up" delay={i * 0.1}>
              <div className="bg-card p-6 rounded-xl shadow-md h-full flex flex-col">
                <Quote size={28} className="text-primary/30 mb-3" />
                <p className="font-body text-muted-foreground text-sm italic mb-4 flex-1">"{r.text}"</p>
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-spice-gold text-spice-gold" />
                  ))}
                </div>
                <p className="font-display font-semibold text-sm">{r.name}</p>
                <p className="font-body text-muted-foreground text-xs">{r.location}</p>
              </div>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Testimonials;
