import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";
import heroImage from "@/assets/hero-apartment.jpg";

const images = [apartment1, apartment2, heroImage, apartment3];

const FeaturedGallery = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl text-gold mb-3">
            Featured Apartments
          </h2>
          <p className="text-muted-foreground text-sm">
            Discover our collection of beautifully appointed short-stay apartments
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="aspect-[4/3] overflow-hidden cursor-pointer border-2 border-transparent"
            >
              <img
                src={image}
                alt={`Featured apartment ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
