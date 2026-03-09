import { Wifi, Dumbbell, Sun, Waves, Car } from "lucide-react";

const amenities = [
  { icon: Wifi, title: "Wi-Fi", description: "High-speed internet throughout your stay" },
  { icon: Dumbbell, title: "Gym", description: "Fully equipped fitness center" },
  { icon: Sun, title: "Balcony", description: "Private balcony with stunning views" },
  { icon: Waves, title: "Swimming Pool", description: "Refreshing pool for relaxation" },
  { icon: Car, title: "Car Park", description: "Secure on-site parking available" },
];

const Amenities = () => {
  return (
    <section className="py-16 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl text-gold mb-3">
            Amenities and Features
          </h2>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Enjoy a range of thoughtful amenities and luxurious features in our apartments
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {amenities.map((item) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 text-center rounded-sm hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
              <p className="text-white/60 text-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
