import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";
import { Button } from "@/components/ui/button";

const apartments = [
  {
    id: 1,
    image: apartment1,
    description: "Douglas Luxury East Legon - Stylish 2-bedroom apartment with city views",
  },
  {
    id: 2,
    image: apartment2,
    description: "Douglas Luxury Shiashie - Modern living with premium amenities",
  },
  {
    id: 3,
    image: apartment3,
    description: "Douglas Luxury Adenta - Spacious comfort in a prime location",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            About the Apartments
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Douglas Luxury Apartments offers a range of well-appointed, stylish short-stay apartments in prime locations across Accra
          </p>
        </div>

        {/* Apartment Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {apartments.map((apt) => (
            <div
              key={apt.id}
              className="group relative overflow-hidden border-2 border-primary/20"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={apt.image}
                  alt={apt.description}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlay with text */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-5">
                <p className="text-white text-sm mb-4">{apt.description}</p>
                <Button 
                  size="sm"
                  className="bg-gold hover:bg-gold-light text-primary font-semibold px-6 rounded-none"
                >
                  Check Availability
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
