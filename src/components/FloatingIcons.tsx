import { Facebook, Instagram, MessageCircle } from "lucide-react";

const FloatingIcons = () => {
  const socialIcons = [
    { icon: Facebook, color: "bg-[#1877F2]", hover: "hover:bg-[#1154a8]", label: "Facebook" },
    { icon: Instagram, color: "bg-[#E4405F]", hover: "hover:bg-[#b0223e]", label: "Instagram" },
    { icon: MessageCircle, color: "bg-[#25D366]", hover: "hover:bg-[#128c7e]", label: "WhatsApp" },
  ];

  return (
    <div className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 sm:gap-3">
      {socialIcons.map((social) => (
        <a
          key={social.label}
          href="#"
          className={`${social.color} ${social.hover} text-white p-2.5 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-x-1 group relative`}
          aria-label={social.label}
        >
          <social.icon size={18} className="sm:size-5" />
          <span className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-spice-dark text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
            {social.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingIcons;
