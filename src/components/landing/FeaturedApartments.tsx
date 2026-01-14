import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";
import heroImage from "@/assets/hero-apartment.jpg";

const apartments = [
  {
    id: 1,
    image: apartment1,
    title: "Douglas Luxury East Legon",
    location: "6 apartments",
  },
  {
    id: 2,
    image: apartment2,
    title: "Douglas Luxury Shiashie",
    location: "4 apartments",
  },
  {
    id: 3,
    image: heroImage,
    title: "Douglas Luxury Adenta",
    location: "5 apartments",
  },
  {
    id: 4,
    image: apartment3,
    title: "Douglas Satey Rectner",
    location: "10 suites",
  },
];

// Duplicate apartments for seamless infinite loop
const duplicatedApartments = [...apartments, ...apartments, ...apartments];

const FeaturedApartments = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: true,
  });

  // Smooth continuous scroll effect
  useEffect(() => {
    if (!emblaApi) return;

    let animationId: number;
    const speed = 0.5; // Pixels per frame

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
    <section id="apartments" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            Explore Our Apartments
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our apartments feature modern amenities, spacious layouts, and stunning views
          </p>
        </div>

        {/* Apartment Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {duplicatedApartments.map((apt, index) => (
              <div
                key={`${apt.id}-${index}`}
                className="flex-none w-1/2 md:w-1/4 px-2 cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden border-2 border-transparent">
                  <img
                    src={apt.image}
                    alt={apt.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-semibold text-primary text-sm">{apt.title}</h3>
                  <p className="text-muted-foreground text-xs">{apt.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedApartments;
