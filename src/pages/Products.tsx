import PageHeader from "@/components/PageHeader";
import GsapReveal from "@/components/GsapReveal";
import turmericImg from "@/assets/turmeric.jpg";
import chiliImg from "@/assets/chili.jpg";
import cuminImg from "@/assets/cumin.jpg";
import corianderImg from "@/assets/coriander.jpg";
import garamMasalaImg from "@/assets/garam-masala.jpg";
import galleryImg from "@/assets/gallery-1.jpg";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Package } from "lucide-react";

const products = [
  { name: "Turmeric Powder", category: "Spice Powder", desc: "Pure golden haldi, rich in curcumin for daily cooking and medicinal benefits.", img: turmericImg, badge: "Bestseller" },
  { name: "Red Chili Powder", category: "Spice Powder", desc: "Fiery red mirchi powder made from carefully selected Guntur chilies.", img: chiliImg, badge: "Pure Heat" },
  { name: "Cumin Seeds", category: "Whole Spice", desc: "Premium aromatic jeera, perfect for essential tempering and seasoning.", img: cuminImg },
  { name: "Coriander Powder", category: "Spice Powder", desc: "Finely ground dhania with a signature fresh and earthy aroma.", img: corianderImg },
  { name: "Garam Masala", category: "Signature Blend", desc: "A royal secret blend of cardamom, cinnamon, cloves and more.", img: garamMasalaImg, badge: "Chef's Choice" },
  { name: "Kitchen King Masala", category: "Signature Blend", desc: "The ultimate all-purpose spice blend that elevates every single dish.", img: galleryImg },
  { name: "Chole Masala", category: "Signature Blend", desc: "North Indian style blend for authentic chickpea curry flavor.", img: turmericImg },
  { name: "Pav Bhaji Masala", category: "Signature Blend", desc: "Signature Mumbai street food flavor with premium blend of spices.", img: chiliImg, badge: "New Arrival" },
  { name: "Black Pepper Powder", category: "Spice Powder", desc: "Boldly ground black pepper for a sharp, pungent kick.", img: cuminImg },
  { name: "Pav Bhaji Masala", category: "Signature Blend", desc: "The soul of Mumbai's favorite Pav Bhaji in every pinch.", img: garamMasalaImg },
  { name: "Biryani Masala", category: "Signature Blend", desc: "Aromatic blend of whole spices for the perfect royal biryani.", img: corianderImg, badge: "Popular" },
  { name: "Amchur Powder", category: "Spice Powder", desc: "Zesty dry mango powder for that perfect tang in your chats.", img: turmericImg },
];

const Products = () => (
  <div className="bg-background min-h-screen">
    <PageHeader title="Our Collection" subtitle="A curation of India's finest spices, from ground powders to signature whole blends" />

    {/* Products Grid */}
    <section className="py-20 bg-gradient-warm overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <GsapReveal key={p.name} direction="up" delay={i * 0.1}>
              <div className="group h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-spice/20 transition-all duration-500 border border-spice-gold/10">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {p.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-spice text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                        {p.badge}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold text-spice-red uppercase tracking-widest bg-spice-red/5 px-2 py-0.5 rounded-md">{p.category}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2 text-spice-dark group-hover:text-spice-red transition-colors line-clamp-1">{p.name}</h3>
                  <p className="font-body text-muted-foreground text-xs mb-4 leading-relaxed line-clamp-2 h-10">{p.desc}</p>
                  
                  <div className="flex items-center justify-between border-t border-spice-gold/5 pt-4 mt-auto">
                    <div className="flex items-center gap-2 text-spice-green font-bold text-[10px] uppercase tracking-wider">
                      <CheckCircle size={14} />
                      <span>Verified quality</span>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-spice-dark font-display font-bold text-xs group-hover:text-spice-red transition-all"
                    >
                      Enquire <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
