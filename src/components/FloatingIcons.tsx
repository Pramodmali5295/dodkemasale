import { Facebook, Instagram, MessageCircle } from "lucide-react";

const FloatingIcons = () => {
  const socialIcons = [
    { icon: Facebook, color: "bg-[#1877F2]", hover: "hover:bg-[#1154a8]", label: "Facebook", link: "https://www.facebook.com/dodkemasale/" },
    { icon: Instagram, color: "bg-[#E4405F]", hover: "hover:bg-[#b0223e]", label: "Instagram", link: "https://www.instagram.com/dodkemasaleofficial/" },
    { icon: MessageCircle, color: "bg-[#25D366]", hover: "hover:bg-[#128c7e]", label: "WhatsApp", link: "https://wa.me/918551060554" },
  ];

  return (
    <div className="fixed right-4 bottom-24 sm:right-6 sm:bottom-10 z-[100] flex flex-col gap-3 sm:gap-4">
      {socialIcons.map((social) => (
        <a
          key={social.label}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${social.color} ${social.hover} text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 group relative border border-white/20`}
          aria-label={social.label}
        >
          <social.icon size={20} className="sm:size-6" />
          <span className="hidden sm:block absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-spice-dark/95 backdrop-blur-sm text-white text-[11px] font-black uppercase tracking-wider rounded-lg opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 pointer-events-none shadow-2xl border border-white/10">
            {social.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingIcons;
