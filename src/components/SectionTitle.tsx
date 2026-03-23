import GsapReveal from "./GsapReveal";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  triggerOnMount?: boolean;
}

const SectionTitle = ({ title, subtitle, light, triggerOnMount }: SectionTitleProps) => (
  <div className="text-center mb-12 overflow-hidden">
    <GsapReveal direction="left" triggerOnMount={triggerOnMount}>
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? "text-spice-cream" : "text-foreground"}`}>
        {title}
      </h2>
    </GsapReveal>
    {subtitle && (
      <GsapReveal direction="right" delay={0.2} triggerOnMount={triggerOnMount}>
        <p className={`font-body text-lg max-w-2xl mx-auto ${light ? "text-spice-cream/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      </GsapReveal>
    )}
    <GsapReveal direction="up" delay={0.4} triggerOnMount={triggerOnMount}>
      <div className="w-24 h-1 bg-gradient-spice mx-auto mt-4 rounded-full" />
    </GsapReveal>
  </div>
);

export default SectionTitle;
