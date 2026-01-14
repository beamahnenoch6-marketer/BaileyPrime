import { Shield, Users, CheckCircle2, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* About BaileyPrimeStay */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl text-primary mb-6">
              About BaileyPrimeStay
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                BaileyPrimeStay is a short-stay co-hosting and property management brand 
                focused on delivering well-managed, comfortable, and reliable Airbnb experiences.
              </p>
              <p>
                We specialize in the day-to-day management of short-stay apartments, ensuring 
                each space is properly prepared, cleaned, well-presented, secured, and 
                consistently maintained for guest comfort.
              </p>
              <p>
                Our approach is structured, calm, and detail-driven, allowing guests to enjoy 
                a smooth and stress-free stay from check-in to check-out.
              </p>
              <p>
                At BaileyPrimeStay, we prioritize clear communication, professionalism, 
                thoughtful presentation, and operational consistency. Every stay is managed 
                with respect for both guests and property owners.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Shield, label: "Secure & Verified" },
              { icon: Users, label: "Guest-Focused" },
              { icon: CheckCircle2, label: "Quality Assured" },
              { icon: Award, label: "Award-Winning Partner" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-muted p-8 rounded-xl text-center hover:shadow-elegant transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gold/20 rounded-full mb-4">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <p className="font-medium text-primary">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Section */}
        <div className="bg-primary rounded-2xl p-10 md:p-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5 text-gold" />
            <span className="text-gold text-sm font-medium">Verified Partner</span>
          </div>
          <h3 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Our Partnership with Douglas Luxury Apartments
          </h3>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            BaileyPrimeStay operates in partnership with Award-Winning Douglas Luxury Apartments, 
            managing select units across key locations in Accra. Through this partnership, we 
            oversee guest experience, coordination, and operational standards to ensure each 
            apartment meets our quality expectations while delivering a comfortable and reliable 
            short-stay experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;