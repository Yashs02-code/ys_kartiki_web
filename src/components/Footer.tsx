import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "Donation", path: "/donation" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Temple Info */}
          <div>
            <h3 className="text-2xl font-display font-bold text-primary mb-4">
              Vitthal-Rakhumai Temple
            </h3>
            <p className="text-sm mb-4 opacity-90">
              A sacred place of devotion and spiritual enlightenment in Ambere Village.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Vithal–Rakhumai Temple, Gavade Ambere, Taluka Ratnagiri, District Ratnagiri, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">templetrust@abc.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display font-semibold mb-4 text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Temple Timings & Social */}
          <div>
            <h4 className="text-xl font-display font-semibold mb-4 text-primary">
              Temple Timings
            </h4>
            <div className="text-sm space-y-2 mb-6">
              <p><strong>Morning:</strong> 5:00 AM - 12:00 PM</p>
              <p><strong>Evening:</strong> 4:00 PM - 9:00 PM</p>
              <p className="text-xs opacity-75 mt-2">All days open including festivals</p>
            </div>
            <h4 className="text-xl font-display font-semibold mb-4 text-primary">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-all duration-300 cursor-glow"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-all duration-300 cursor-glow"
              >
                <Instagram className="w-5 h-5" />
              </a> 
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-6 text-center text-sm opacity-75">
          <p>© 2025 Vitthal-Rakhumai Temple Trust. All rights reserved.</p>
          <p className="mt-2">Made with devotion for Kartiki Ekadashi Utsav 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
