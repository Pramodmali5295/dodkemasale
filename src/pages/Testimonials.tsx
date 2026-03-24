import PageHeader from "@/components/PageHeader";
import GsapReveal from "@/components/GsapReveal";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Abhijit Nagare", location: "Verified Customer", text: "The perfect for who loves the homely taste! This masala’s soothing aroma brings the authentic taste of the village right to your food… must try…", rating: 5 },
  { name: "Kaushik Kale", location: "Family Order", text: "The laddoos made by the Dodkes are healthy and worth consuming it for your health benifits. Taste is also very good. I get it for my family every month.", rating: 5 },
  { name: "Harshada Avaghade", location: "Home Kitchen", text: "Great spice mixes. I have used all products and they are not only yummy but feels so good for the tummy. Masala is important in cooking because it adds depth and richness of flavour and colour to the dishes. 100% organic homemade masala... Loved it❤️❤️", rating: 5 },
  { name: "Manoj More", location: "Verified Buyer", text: "Recently tried Dodke Masala and it was a delightful experience! The blend of spices in their masala is truly exceptional, adding a burst of flavours to every dish. The quality and freshness of the ingredients stood out. Highly recommend!", rating: 5 },
  { name: "CHINTAMANI MARATHE", location: "Gourmet Enthusiast", text: "Must try once, its enrich taste of you sabji's. Your sabjis will start tasting great. Also, try their other products like dink laddu, methya ladu and Haldi power", rating: 5 },
  { name: "Shailesh Gaikwad", location: "Food Critic", text: "'Dodke masale' is the best available masala for adding great taste and aroma to all vegetarian and non-vegetarian recipes.", rating: 5 },
  { name: "Poonam Kanekar", location: "Customer", text: "Test is best Dodke Masale is the best", rating: 5 },
  { name: "Amit Gaikwad", location: "Local Guide", text: "Authentic Maharashtra delicacies from Messrs. Dodke Masala & Co.,👑👑👍", rating: 5 },
  { name: "SHAHBAJ SHAIKH", location: "Customer", text: "Be it sister-in-law or sale, you will find spicy spices in every house. Best taste.", rating: 5 },
  { name: "Nikhil Pathak", location: "Verified Customer", text: "Spices \"One of the spices\"", rating: 5 },
  { name: "Sandeep Pawar", location: "Customer", text: "Very testy and good quality", rating: 5 },
  { name: "Amol Shardul", location: "Verified Buyer", text: "Good Packaging. Aroma is strong. Tastes Excellent..!!", rating: 5 },
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
                <p className="font-body text-black text-sm italic mb-4 flex-1">"{r.text}"</p>
                <div className="flex flex-col items-end">
                  <div className="flex gap-1 mb-1">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-spice-gold text-spice-gold" />
                    ))}
                  </div>
                  <p className="font-display font-semibold text-sm text-black">{r.name}</p>
                </div>
              </div>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Testimonials;
