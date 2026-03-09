const WHATSAPP_URL = "https://wa.me/message/MSNIQUTA6M5QH1";

const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/bailey_primestay?igsh=anRzb2p3amRrZm5v&utm_source=qr" },
  { name: "Facebook", url: "https://www.facebook.com/share/1Fszu4P9fP/?mibextid=wwXIfr" },
  { name: "TikTok", url: "https://www.tiktok.com/@bailey.primestay?_r=1&_t=ZS-93syC9j0xEK" },
  { name: "WhatsApp", url: WHATSAPP_URL },
];

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-primary font-bold text-lg">B</span>
              </div>
            </div>
            <p className="text-white/50 text-xs mb-2">
              📧 baileyprimestay@gmail.com
            </p>
            <p className="text-white/50 text-xs">
              © {new Date().getFullYear()} BaileyPrimeStay, Inc.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Apartments", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item === "Home" ? "hero" : item.toLowerCase())}
                    className="text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-gold text-sm font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {["Short-stays", "Long-stays", "Policies", "FAQs"].map((item) => (
                <li key={item}>
                  <span className="text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h4 className="text-gold text-sm font-semibold mb-4">Connect with Us</h4>
            <ul className="space-y-2">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-xs text-center md:text-left">
              Official Partner of Douglas Luxury Apartments • Serving East Legon, Shiashie, Adenta & surrounding areas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;