import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/message/MSNIQUTA6M5QH1";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">
              Contact Us Today
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              At BaileyPrimeStay, we pride ourselves on delivering exceptional service and a seamless booking experience. Whether you're traveling for business or leisure, our team is dedicated to ensuring your stay is comfortable and memorable.
            </p>
            <p className="text-muted-foreground text-sm mb-8">
              📧 baileyprimestay@gmail.com
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gold hover:bg-gold-light text-primary font-semibold px-8 py-3 rounded-none">
                Inquire Now
              </Button>
            </a>
          </div>

          {/* Video */}
          <div className="relative">
            <div className="overflow-hidden shadow-elegant">
              <video
                src="/videos/apartment-tour.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;