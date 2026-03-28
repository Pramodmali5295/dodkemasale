import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/favlogo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/team", label: "Our Team" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-spice-dark/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink truncate">
          <img src={logoImg} alt="Dodke Masale" className="w-8 h-8 xs:w-10 sm:w-14 lg:w-16 object-contain shrink-0" />
          <span className="font-display text-sm xs:text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold text-spice-gold tracking-wider whitespace-nowrap overflow-hidden text-ellipsis">
            Dodke Masale <sup className="text-[8px] sm:text-xs text-spice-gold/80">TM</sup>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[15px] font-body font-semibold transition-colors duration-200 hover:text-spice-gold ${
                location.pathname === link.to
                  ? "text-spice-gold"
                  : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-gradient-spice text-white px-7 py-2.5 rounded-full text-[15px] font-body font-bold hover:scale-105 transition-transform duration-300 shadow-spice"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 shrink-0 bg-white/5 rounded-lg border border-white/10"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-spice-dark/98 backdrop-blur-md border-t border-spice-gold/20">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-lg font-body font-bold py-3 transition-colors ${
                  location.pathname === link.to
                    ? "text-spice-gold"
                    : "text-white hover:text-spice-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-spice text-white text-center py-3 rounded-xl font-body font-bold mt-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
