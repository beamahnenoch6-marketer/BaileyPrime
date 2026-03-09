import apartment2 from "@/assets/apartment-2.jpg";
import { Button } from "@/components/ui/button";

const Discover = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-gold mb-6">
              Discover the Best
              <br />
              of BaileyPrimeStay
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Welcome to BaileyPrimeStay, where we offer a curated selection of clean, private, and premium short-stay apartments in prime locations throughout Accra. Enjoy the comfort and convenience of a home away from home, with quality service, professionalism, and a memorable stay every time.
            </p>
            <Button 
              onClick={() => scrollToSection("apartments")}
              className="bg-gold hover:bg-gold-light text-primary font-semibold px-8 py-3 rounded-none"
            >
              Explore Apartments
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden">
              <img
                src={apartment2}
                alt="Luxury apartment bedroom"
                className="w-full h-[350px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-gold hover:bg-gold-light text-primary font-semibold px-6 py-2.5 rounded-none shadow-lg"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
