import { Home, Building2, CalendarCheck, Briefcase, ConciergeBell, FileText, HelpCircle } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Short-Stay Accommodation",
    description: "Fully furnished luxury apartments for your perfect short-term stay in Accra.",
  },
  {
    icon: Building2,
    title: "Property Management",
    description: "Professional day-to-day management, cleaning, and maintenance of luxury units.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Guidance",
    description: "Seamless booking assistance to help you find the ideal apartment for your needs.",
  },
  {
    icon: Briefcase,
    title: "Corporate & Executive Stays",
    description: "Tailored accommodation solutions for business travelers and corporate teams.",
  },
  {
    icon: ConciergeBell,
    title: "Concierge Support",
    description: "Dedicated concierge services to enhance your stay with personalized assistance.",
  },
  {
    icon: FileText,
    title: "Policies",
    description: "Clear and transparent policies ensuring a smooth and hassle-free experience.",
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    description: "Answers to commonly asked questions about our services and apartments.",
  },
];

const Amenities = () => {
  return (
    <section className="py-16 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl text-gold mb-3">
            Our Services
          </h2>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Everything you need for a luxurious and comfortable stay in Accra
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-cream p-5 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center border-2 border-gold">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-primary text-sm mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
