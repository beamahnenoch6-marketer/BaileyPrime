import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const apartments = [
  {
    id: 1,
    image: apartment1,
    location: "East Legon",
    title: "Luxury 2-Bedroom Suite",
    highlight: "Premium finishes with city views",
  },
  {
    id: 2,
    image: apartment2,
    location: "Shiashie",
    title: "Modern Studio Apartment",
    highlight: "Contemporary design, fully furnished",
  },
  {
    id: 3,
    image: apartment3,
    location: "Adenta",
    title: "Executive 1-Bedroom",
    highlight: "Spacious living with premium amenities",
  },
];

const FeaturedApartments = () => {
  return (
    <section id="apartments" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">
            Featured Douglas Luxury Apartments
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore a curated selection of short-stay apartments managed by BaileyPrimeStay 
            within the Douglas Luxury Apartments portfolio.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {["East Legon", "Shiashie", "Adenta", "Surrounding Areas"].map((location) => (
              <span
                key={location}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
              >
                {location}
              </span>
            ))}
          </div>
        </div>

        {/* Apartment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apt) => (
            <div
              key={apt.id}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={apt.image}
                  alt={apt.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-gold text-primary px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {apt.location}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-primary mb-2">{apt.title}</h3>
                <p className="text-muted-foreground mb-4">{apt.highlight}</p>
                <Button className="w-full bg-primary hover:bg-navy-light text-primary-foreground">
                  Check Availability
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Note */}
        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          Each apartment is professionally prepared, verified, and maintained to meet 
          Douglas Luxury Apartments' quality standards.
        </p>
      </div>
    </section>
  );
};

export default FeaturedApartments;