const About = () => {
  return (
    <section id="about" className="pt-20 pb-10 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            About BaileyPrimeStay
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Bailey PrimeStay is a short-stay co-hosting and property management brand known for quality service, professionalism, clear communication, and a memorable stay.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We manage clean, private, and premium apartments in Accra, Ghana where guests can feel at home. Whether traveling for business, leisure, getaway or short-term comfort.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            At Bailey PrimeStay, every stay is managed with respect and professionalism for both guests and property owners.
          </p>
        </div>

        {/* Partnership */}
        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          <h3 className="font-heading text-2xl md:text-3xl text-primary">
            Our Partnerships
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Bailey PrimeStay operates in partnership with the award-winning Douglas Luxury Apartments, managing select units across East Legon, Shiashie, and Adenta.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Through this partnership, we manage guest experience and daily operations, ensuring every apartment meets our standards and delivers a comfortable, high-quality short stay.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
