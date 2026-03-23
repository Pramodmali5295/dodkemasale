import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  duration?: number;
  triggerOnMount?: boolean;
}

const GsapReveal = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.8,
  triggerOnMount = false,
}: GsapRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = { opacity: 0, duration, delay, ease: "power3.out" };

    if (direction === "up") {
      fromVars.y = 40;
    } else if (direction === "left") {
      fromVars.x = -40;
    } else if (direction === "right") {
      fromVars.x = 40;
    } else if (direction === "scale") {
      fromVars.scale = 0.9;
    }

    if (triggerOnMount) {
      gsap.from(el, fromVars);
    } else {
      gsap.from(el, {
        ...fromVars,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [direction, delay, duration, triggerOnMount]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default GsapReveal;
