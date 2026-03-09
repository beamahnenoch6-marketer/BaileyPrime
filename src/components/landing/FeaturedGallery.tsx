import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import apartment4 from "@/assets/apartment-4.jpg";
import apartment5 from "@/assets/apartment-5.jpg";
import apartment6 from "@/assets/apartment-6.jpg";
import apartment7 from "@/assets/apartment-7.jpg";
import balcony from "@/assets/amenity-balcony.jpg";
import gym from "@/assets/amenity-gym.jpg";
import pool from "@/assets/amenity-pool.jpg";
import parking from "@/assets/amenity-parking.jpg";

const images = [
  { id: 1, src: apartment4, alt: "Modern kitchen & living area" },
  { id: 2, src: apartment5, alt: "Executive bedroom suite" },
  { id: 3, src: apartment6, alt: "Premium dining & lounge" },
  { id: 4, src: apartment7, alt: "Classic living space" },
  { id: 5, src: balcony, alt: "Rooftop balcony with city views" },
  { id: 6, src: gym, alt: "Fully equipped gym" },
  { id: 7, src: pool, alt: "Swimming pool" },
  { id: 8, src: parking, alt: "Secure car park" },
];

// Duplicate images for seamless infinite loop
const duplicatedImages = [...images, ...images, ...images];

const FeaturedGallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: true,
    dragFree: true,
    containScroll: false,
  });

  // Smooth continuous scroll effect
  useEffect(() => {
    if (!emblaApi) return;

    let animationId: number;
    const speed = 0.2;

    const animate = () => {
      if (!emblaApi) return;
      
      const engine = emblaApi.internalEngine();
      const location = engine.location.get();
      engine.location.set(location - speed);
      engine.target.set(engine.location.get());
      engine.scrollLooper.loop(-1);
      engine.slideLooper.loop();
      engine.translate.to(engine.location.get());
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [emblaApi]);

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

        {/* Gallery Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-none w-1/2 md:w-1/4 px-2 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden border-2 border-transparent">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
