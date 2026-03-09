import { Home, Building2, CalendarCheck, Briefcase, ConciergeBell } from "lucide-react";

const services = [
  { icon: Home, title: "Short-Stay Accommodation", description: "Curated apartments for comfortable short-term stays in prime Accra locations." },
  { icon: Building2, title: "Property Management", description: "End-to-end management of short-stay properties with attention to detail." },
  { icon: CalendarCheck, title: "Booking Guidance", description: "Seamless booking support to help you find the perfect stay." },
  { icon: Briefcase, title: "Corporate & Executive Stays", description: "Tailored accommodation solutions for business travelers and executives." },
  { icon: ConciergeBell, title: "Concierge Support", description: "Personalized guest assistance for a smooth and memorable experience." },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-3">
            Our Services
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Everything you need for a premium short-stay experience in Accra
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background border border-border p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg text-primary mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
