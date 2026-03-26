import SectionTitle from "./SectionTitle";
import heroImg from "@/assets/hero-spices.jpg";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="relative min-h-[300px] h-[40vh] md:h-[50vh] flex items-center justify-center pt-20">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-spice-dark/70 via-spice-dark/40 to-spice-dark/20" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <SectionTitle title={title} subtitle={subtitle} light triggerOnMount={true} />
      </div>
    </section>
  );
};

export default PageHeader;
