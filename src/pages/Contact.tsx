import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import GsapReveal from "@/components/GsapReveal";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const contactInfo = [
  { icon: MapPin, title: "Address", text: "10, Atharva Residency, Lane 10c, Vidya Nagar, Pune 411032, Maharashtra, India" },
  { icon: Phone, title: "Phone", text: "+91 85510 60554 | +91 90110 10337" },
  { icon: Mail, title: "Email", text: "info@dodkemasale.com" },
  { icon: Clock, title: "Business Hours", text: "Mon - Sat: 9:00 AM - 6:00 PM" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const whatsappMessage = `*New Inquiry via Website*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    window.open(`https://wa.me/918551060554?text=${whatsappMessage}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you" />

      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <GsapReveal direction="left">
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((c) => (
                    <div key={c.title} className="flex items-start gap-3">
                      <div>
                        <p className="font-display font-semibold text-sm">{c.title}</p>
                        <p className="font-body text-muted-foreground text-sm">{c.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden shadow-md mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3781.919789498137!2d73.89002697519305!3d18.57765458252696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM0JzM5LjYiTiA3M8KwNTMnMzMuNCJF!5e0!3m2!1sen!2sin!4v1774329692372!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Dodke Masale Location"
                  />
                </div>
              </div>
            </GsapReveal>

            {/* Form */}
            <GsapReveal direction="right">
              <div className="bg-card p-8 rounded-xl shadow-spice">
                <h3 className="font-display text-2xl font-bold mb-6">Send a Message</h3>
                {submitted ? (
                  <div className="text-center py-8">
                    <h4 className="font-display text-xl font-semibold mb-2">Message Sent!</h4>
                    <p className="font-body text-muted-foreground">We'll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-body text-sm font-medium mb-1 block">Name</label>
                        <input name="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                      </div>
                      <div>
                        <label className="font-body text-sm font-medium mb-1 block">Phone</label>
                        <input name="phone" type="tel" required className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                      </div>
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium mb-1 block">Email</label>
                      <input name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium mb-1 block">Subject</label>
                      <input name="subject" type="text" required className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium mb-1 block">Message</label>
                      <textarea name="message" rows={5} required className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                    </div>
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-spice text-primary-foreground font-body font-semibold px-8 py-3 rounded-full hover:scale-[1.02] transition-transform">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
