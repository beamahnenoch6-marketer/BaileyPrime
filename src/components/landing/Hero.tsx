import heroImage from "@/assets/hero-apartment.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 reveal">
          BaileyPrimeStay
        </h1>
        <p className="text-xl md:text-2xl text-gold font-medium tracking-wide mb-4 reveal-delayed">
          Short-Stay Co-Hosting & Property Management
        </p>
        <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-10 reveal-delayed">
          Professionally managed short-stay apartments, delivered in partnership with Award-Winning Douglas Luxury Apartments.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-delayed">
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold-light text-primary font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
          >
            Book a Stay
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
          >
            View Available Apartments
          </Button>
        </div>
        
        {/* Partner Badge */}
        <div className="mt-12 reveal-delayed">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-gold/30">
            <div className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-white/90 text-sm font-medium">
              Official Partner of Douglas Luxury Apartments
            </span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed">
        <div className="w-px h-12 bg-gold/60 mx-auto" />
        <div className="text-gold/80 text-xs tracking-widest mt-3">SCROLL</div>
      </div>
    </section>
  );
};

export default Hero;