import { Search, Home, Calendar, Smile } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Browse Apartments",
    description: "Browse available Douglas Luxury Apartments",
  },
  {
    icon: Home,
    number: "02",
    title: "Select Your Preferred",
    description: "Select your preferred apartment based on location and style",
  },
  {
    icon: Calendar,
    number: "03",
    title: "Book Through Us",
    description: "Book through BaileyPrimeStay for a seamless experience",
  },
  {
    icon: Smile,
    number: "04",
    title: "Enjoy Your Stay",
    description: "Enjoy a professionally managed stay with ongoing support",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">
            How the Guest Experience Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple. Secure. Well-managed.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-card p-8 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 group"
            >
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gold/40" />
              )}
              
              <div className="text-gold/30 font-heading text-5xl mb-4">{step.number}</div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/20 rounded-full mb-4 group-hover:bg-gold/30 transition-colors">
                <step.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-xl text-primary mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;