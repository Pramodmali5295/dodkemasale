import PageHeader from "@/components/PageHeader";
import GsapReveal from "@/components/GsapReveal";
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
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const products = [
  { 
    name: "Turmeric Powder", 
    category: "Spice Powder", 
    desc: "Pure golden haldi, rich in curcumin for daily cooking and medicinal benefits.", 
    img: product5, 
  },
  { 
    name: "Red Chilli Powder", 
    category: "Spice Powder", 
    desc: "Fiery red mirchi powder made from carefully selected Guntur chilies.", 
    img: product2, 
  },
  { 
    name: "Coriander Powder", 
    category: "Spice Powder", 
    desc: "Finely ground dhania with a signature fresh and earthy aroma.", 
    img: product8 
  },
  { 
    name: "Garam Masala", 
    category: "Signature Blend", 
    desc: "A royal secret blend of cardamom, cinnamon, cloves and more.", 
    img: product6 
  },
  { 
    name: "Kanda Lasun Masala", 
    category: "Signature Blend", 
    desc: "A bold and spicy traditional Maharashtrian blend of onion, garlic, and hand-pounded spices.", 
    img: product15 
  },
  { 
    name: "Kitchen King", 
    category: "Signature Blend", 
    desc: "The ultimate all-purpose spice blend that elevates every single dish.", 
    img: product4 
  },
  { 
    name: "Non Veg Masala", 
    category: "Signature Blend", 
    desc: "A rich and robust spice blend crafted for the perfect authentic meat curries.", 
    img: product7, 
  },
  { 
    name: "Biryani Masala", 
    category: "Signature Blend", 
    desc: "Aromatic blend of whole spices for the perfect royal biryani.", 
    img: product3,
  },
  { 
    name: "Kala Masala", 
    category: "Signature Blend", 
    desc: "Authentic traditional Maharashtrian roasted spice blend with a complex, dark, and smoky flavor.", 
    img: product16, 
  },
  { 
    name: "Black Pepper Powder", 
    category: "Spice Powder", 
    desc: "Boldly ground black pepper for a sharp, pungent kick.", 
    img: product9 
  },
  { 
    name: "Variety of Spices", 
    category: "Spice Collection", 
    desc: "A wide assortment of premium spices to stock up your kitchen shelf.", 
    img: product12 
  },
  { 
    name: "Whole Spices", 
    category: "Whole Spices", 
    desc: "Unprocessed, farm-fresh whole spices for maximum flavor and health.", 
    img: product11 
  },
];

const Products = () => (
  <div className="bg-background min-h-screen">
    <PageHeader title="Our Collection" subtitle="A curation of India's finest spices, from ground powders to signature whole blends" />

    {/* Products Grid */}
    <section className="py-20 bg-gradient-warm overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((p, i) => (
            <GsapReveal key={p.name} direction="up" delay={i * 0.1}>
              <div className="group h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-spice/20 transition-all duration-500 border border-spice-gold/10">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold text-spice-red uppercase tracking-widest bg-spice-red/5 px-2 py-0.5 rounded-md">{p.category}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2 text-spice-dark group-hover:text-spice-red transition-colors line-clamp-1">{p.name}</h3>
                  <p className="font-body text-muted-foreground text-xs mb-4 leading-relaxed line-clamp-2 h-10">{p.desc}</p>
                  
                  <div className="flex items-center justify-between border-t border-spice-gold/5 pt-4 mt-auto">
                    <div className="flex items-center gap-2 text-spice-green font-bold text-[10px] uppercase tracking-wider">
                      <span>Verified quality</span>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-spice-dark font-display font-bold text-xs group-hover:text-spice-red transition-all"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            </GsapReveal>
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default Products;
