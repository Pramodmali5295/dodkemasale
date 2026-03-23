import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import GsapReveal from "@/components/GsapReveal";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const contactInfo = [
  { icon: MapPin, title: "Address", text: "123 Spice Market Road, Dadar, Mumbai, Maharashtra 400014, India" },
  { icon: Phone, title: "Phone", text: "+91 98765 43210" },
  { icon: Mail, title: "Email", text: "info@dodkemasale.com" },
  { icon: Clock, title: "Business Hours", text: "Mon - Sat: 9:00 AM - 6:00 PM" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

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
                      <div className="w-10 h-10 rounded-full bg-gradient-spice flex items-center justify-center shrink-0">
                        <c.icon size={18} className="text-primary-foreground" />
                      </div>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9541!2d72.8437!3d19.0176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzAzLjQiTiA3MsKwNTAnMzcuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
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
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-body text-sm font-medium mb-1 block">Name</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                      </div>
                      <div>
                        <label className="font-body text-sm font-medium mb-1 block">Phone</label>
                        <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                      </div>
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium mb-1 block">Email</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium mb-1 block">Subject</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium mb-1 block">Message</label>
                      <textarea rows={5} required className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                    </div>
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-spice text-primary-foreground font-body font-semibold px-8 py-3 rounded-full hover:scale-[1.02] transition-transform">
                      Send Message <ArrowRight size={18} />
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
