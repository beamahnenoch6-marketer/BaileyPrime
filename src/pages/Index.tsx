import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import FeaturedApartments from "@/components/landing/FeaturedApartments";
import About from "@/components/landing/About";
import HowItWorks from "@/components/landing/HowItWorks";
import WhyTrustUs from "@/components/landing/WhyTrustUs";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <FeaturedApartments />
      <About />
      <HowItWorks />
      <WhyTrustUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;