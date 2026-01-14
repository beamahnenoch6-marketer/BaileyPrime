import heroImage from "@/assets/hero-apartment.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white mb-4">
          Book a Stay in
          <br />
          <span className="text-gold">Accra's Best</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-8">
          Explore a curated selection of short-stay apartments managed by BaileyPrimeStay within the Douglas Luxury Apartments portfolio.
        </p>
        
        {/* CTA Button */}
        <Button 
          onClick={() => scrollToSection("contact")}
          size="lg" 
          className="bg-gold hover:bg-gold-light text-primary font-semibold px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
        >
          Book Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
