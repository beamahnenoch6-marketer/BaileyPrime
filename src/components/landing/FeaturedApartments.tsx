import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";
import apartment4 from "@/assets/apartment-4.jpg";
import apartment5 from "@/assets/apartment-5.jpg";
import apartment6 from "@/assets/apartment-6.jpg";
import apartment7 from "@/assets/apartment-7.jpg";
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
  {
    id: 5,
    image: apartment4,
    title: "Modern Kitchen & Living",
    location: "Studio apartment",
  },
  {
    id: 6,
    image: apartment5,
    title: "Executive Bedroom Suite",
    location: "1-bedroom apartment",
  },
  {
    id: 7,
    image: apartment6,
    title: "Premium Dining & Lounge",
    location: "2-bedroom apartment",
  },
  {
    id: 8,
    image: apartment7,
    title: "Classic Living Space",
    location: "1-bedroom apartment",
  },
];

const FeaturedApartments = () => {
  return (
    <section id="apartments" className="pt-10 pb-20 px-6 bg-background">
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

        {/* Apartment Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {apartments.map((apt) => (
            <div key={apt.id} className="cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden border-2 border-transparent">
                <img
                  src={apt.image}
                  alt={apt.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
    </section>
  );
};

export default FeaturedApartments;
