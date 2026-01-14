import { Check } from "lucide-react";

const reasons = [
  "Professionally managed short-stay apartments",
  "Verified Douglas Luxury Apartments only",
  "Clean, secure, and well-maintained spaces",
  "Smooth check-in and check-out",
  "Dedicated guest communication and support",
];

const WhyTrustUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl text-primary mb-12">
          Why Guests Trust BaileyPrimeStay
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-muted p-5 rounded-xl text-left"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-gold" />
              </div>
              <span className="text-primary font-medium">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;