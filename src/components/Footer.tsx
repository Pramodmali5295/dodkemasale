import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socialIcons = [
    { Icon: Facebook, bgColor: "bg-[#1877F2]", hoverShadow: "hover:shadow-[#1877F2]/40" },
    { Icon: Instagram, bgColor: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]", hoverShadow: "hover:shadow-[#DD2A7B]/40" },
    { Icon: MessageCircle, bgColor: "bg-[#25D366]", hoverShadow: "hover:shadow-[#25D366]/40" },
  ];

  return (
    <footer className="bg-spice-dark text-spice-cream/80 pt-10 pb-4 border-t border-spice-gold/10 overflow-hidden">
      <div className="w-full px-4 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
          {/* Brand & Social */}
          <div className="space-y-4">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 group">
              <img src={logoImg} alt="Dodke Masale" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" />
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-spice-gold tracking-wider leading-none">
                  Dodke Masale
                </span>
                <span className="text-[10px] text-spice-cream/50 uppercase tracking-[0.3em] mt-1 italic leading-none pt-1">
                  Since 1988
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed max-w-sm italic opacity-70">
              "Crafting purity, capturing tradition, and delivering the authentic essence of Indian spices across generations."
            </p>
            <div className="flex gap-3">
              {socialIcons.map((item, i) => (
                <a key={i} href="#" className={`w-9 h-9 rounded-full ${item.bgColor} flex items-center justify-center transition-all border border-white/10 group shadow-md ${item.hoverShadow} hover:shadow-lg`}>
                  <item.Icon size={16} className="text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links Combined */}
          <div className="lg:pl-10">
            <h4 className="font-display text-sm font-black text-spice-gold mb-4 uppercase tracking-[0.2em]">Navigation</h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/products", label: "Products" },
                { to: "/why-choose-us", label: "Why Choose Us" },
                { to: "/gallery", label: "Gallery" },
                { to: "/testimonials", label: "Testimonials" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.to} to={l.to} onClick={scrollToTop} className="text-[13px] hover:text-spice-gold transition-colors font-medium">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display text-sm font-black text-spice-gold mb-4 uppercase tracking-[0.2em]">Quick Connect</h4>
            <div className="flex flex-col gap-3 text-xs opacity-70">
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-spice-gold shrink-0" />
                <span>Mumbai, Maharashtra, India - 400001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-spice-gold shrink-0" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-4 text-center text-[10px] opacity-30 uppercase tracking-[0.2em] font-bold">
          <p>&copy; {new Date().getFullYear()} Dodke Masale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
