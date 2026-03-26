import PageHeader from "@/components/PageHeader";
import GsapReveal from "@/components/GsapReveal";
import team1 from "@/assets/team1.jpg";
import team2 from "@/assets/team2.jpeg";
import team3 from "@/assets/team3.jpeg";
import team4 from "@/assets/team4.jpeg";

const teamMembers = [
  { 
    name: "Aniket D", 
    role: "Founder", 
    image: team1,
    desc: "The visionary behind Dodke Masale, committed to bringing authentic traditional flavors to every Indian kitchen."
  },
  { 
    name: "Harshada A", 
    role: "Operations Manager", 
    image: team2,
    desc: "Overseeing the seamless production and supply chain to ensure every pack meets our high quality standards."
  },
  { 
    name: "Prajakta K", 
    role: "Finance & Accounts Manager", 
    image: team3,
    desc: "Managing the financial heart of the company with precision and dedication to sustainable growth."
  },
  { 
    name: "Gayatri F", 
    role: "Sales & Marketing Head", 
    image: team4,
    desc: "Spreading the aroma of Dodke Masale across regions and building lasting relationships with our customers."
  },
];

const Team = () => {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="Meet Our Team" 
        subtitle="The passionate minds and dedicated hands behind the authentic taste of Dodke Masale" 
      />

      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <GsapReveal className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-spice-dark">The Heart of Our Operations</h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              At Dodke Masale, our team is our family. Each member brings unique expertise and a shared passion for quality, 
              working together to ensure that the heritage of Indian spices is preserved in every product we offer.
            </p>
          </GsapReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <GsapReveal 
                key={member.name} 
                delay={i * 0.1}
                direction="up"
              >
                <div className="group space-y-4">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-xl border-4 border-white group-hover:border-spice-gold transition-colors duration-500">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-spice-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="text-center group-hover:-translate-y-2 transition-transform duration-500 px-2">
                    <h3 className="font-display text-2xl font-bold text-spice-dark mb-1">{member.name}</h3>
                    <p className="font-body text-spice-red font-bold text-sm uppercase tracking-widest mb-3">{member.role}</p>
                    <div className="w-12 h-1 bg-spice-gold mx-auto mb-4 rounded-full group-hover:w-24 transition-all duration-500" />
                    <p className="font-body text-muted-foreground text-xs leading-relaxed italic line-clamp-3">
                      "{member.desc}"
                    </p>
                  </div>
                </div>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Team;
