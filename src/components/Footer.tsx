import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Send,
  Leaf,
  Shield,
  Award,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Wildlife Safaris", href: "/services/wildlife-safaris" },
    { name: "Beach & Coastal", href: "/services/beach-coastal" },
    { name: "Mountain Climbing", href: "/services/mountain-climbing" },
    { name: "Cultural Tours", href: "/services/cultural-tours" },
    { name: "Corporate Travel", href: "/services/corporate-travel" },
    { name: "Travel Logistics", href: "/services/travel-logistics" }
  ];

  const destinations = [
    { name: "Maasai Mara", href: "/destinations/maasai-mara" },
    { name: "Amboseli", href: "/destinations/amboseli" },
    { name: "Diani Beach", href: "/destinations/diani-beach" },
    { name: "Mount Kenya", href: "/destinations/mount-kenya" },
    { name: "Lamu Island", href: "/destinations/lamu-island" },
    { name: "Tsavo Parks", href: "/destinations/tsavo" }
  ];

  const company = [
    { name: "About Us", href: "/about-us" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Safety Guidelines", href: "/safety-guidelines" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" }
  ];

  const certifications = [
    { icon: Shield, text: "KATO Registered" },
    { icon: Award, text: "TRA Licensed" },
    { icon: Leaf, text: "Eco-Certified" },
    { icon: Heart, text: "Community Partner" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Information */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-3">Tolyns Tours & Travel</h3>
              <p className="text-primary-foreground/80 mb-4 text-sm leading-relaxed">
                East Africa's premier travel agency creating unforgettable adventures.
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span className="text-sm">+254725252412</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span className="text-sm">info@tolynstours.co.ke</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Suite 305, Prestige Plaza, Ngong Road, Nairobi</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Destinations */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Top Destinations</h4>
              <ul className="space-y-2">
                {destinations.map((destination, index) => (
                  <li key={index}>
                    <Link
                      to={destination.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm block"
                    >
                      {destination.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

              {/* Company & Certifications */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 mb-6">
                {company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Certifications */}
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <cert.icon className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-xs text-primary-foreground/80">{cert.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-destructive/20 border border-destructive/30 rounded-lg p-3 mb-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="font-semibold">24/7 Emergency:</span>
              </div>
              <span className="text-accent font-bold">+254725252412</span>
              <span className="hidden sm:inline text-primary-foreground/40">|</span>
              <span className="text-accent font-bold">WhatsApp: +254725252412</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/60">
            <div className="text-center md:text-left">
              © 2024 Tolyns Tours & Travel. All rights reserved. Licensed by Tourism Regulatory Authority (TRA) of Kenya.
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-accent transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;