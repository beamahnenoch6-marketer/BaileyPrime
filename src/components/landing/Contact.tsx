import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="text-white">
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              Contact & Booking
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Ready to book your stay? Get in touch with us through any of 
              the channels below or use the booking request form.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:baileyprimestay@gmail.com"
                className="flex items-center gap-4 text-white/90 hover:text-gold transition-colors group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <p className="font-medium">baileyprimestay@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:0503650656"
                className="flex items-center gap-4 text-white/90 hover:text-gold transition-colors group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Phone</p>
                  <p className="font-medium">0503650656</p>
                </div>
              </a>

              <a
                href="https://wa.me/233503650656"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/90 hover:text-gold transition-colors group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/60">WhatsApp</p>
                  <p className="font-medium">0503650656</p>
                </div>
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-elegant">
            <h3 className="font-heading text-2xl text-primary mb-6">
              Request Booking / Check Availability
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Full Name
                  </label>
                  <Input placeholder="Your name" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" className="h-12" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Phone / WhatsApp
                  </label>
                  <Input placeholder="Your phone number" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Preferred Location
                  </label>
                  <Input placeholder="e.g., East Legon" className="h-12" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Check-in Date
                  </label>
                  <Input type="date" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Check-out Date
                  </label>
                  <Input type="date" className="h-12" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Message / Special Requests
                </label>
                <Textarea placeholder="Any additional details..." rows={4} />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gold hover:bg-gold-light text-primary font-semibold h-14 text-lg"
              >
                Request Booking
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;