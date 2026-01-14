import { Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Partner Badge */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-2xl text-white mb-2">
              BaileyPrimeStay
            </h3>
            <div className="flex items-center gap-2 text-gold text-sm">
              <Award className="w-4 h-4" />
              <span>Official Partner of Douglas Luxury Apartments</span>
            </div>
          </div>

          {/* Locations */}
          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm mb-1">
              Serving East Legon, Shiashie, Adenta & surrounding areas.
            </p>
            <p className="text-white/40 text-sm">
              All listings and bookings are exclusively within the Douglas Luxury Apartments portfolio.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} BaileyPrimeStay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;