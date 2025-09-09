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

const Footer = () => {
  const quickLinks = [
    { name: "Wildlife Safaris", href: "#safaris" },
    { name: "Beach Holidays", href: "#beach" },
    { name: "Mountain Climbing", href: "#climbing" },
    { name: "Cultural Tours", href: "#cultural" },
    { name: "Corporate Travel", href: "#corporate" },
    { name: "Custom Packages", href: "#custom" }
  ];

  const destinations = [
    { name: "Maasai Mara", href: "#mara" },
    { name: "Amboseli", href: "#amboseli" },
    { name: "Diani Beach", href: "#diani" },
    { name: "Mount Kenya", href: "#mountkenya" },
    { name: "Lamu Island", href: "#lamu" },
    { name: "Tsavo Parks", href: "#tsavo" }
  ];

  const company = [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Sustainability", href: "#sustainability" },
    { name: "Safety Guidelines", href: "#safety" },
    { name: "Travel Blog", href: "#blog" },
    { name: "Careers", href: "#careers" }
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
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Information */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4">Tolyns Tours & Travel</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                East Africa's premier travel agency, dedicated to creating unforgettable adventures 
                while preserving Kenya's natural beauty and cultural heritage.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-sm">+254725252412</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-sm">info@tolynstours.co.ke</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent mt-0.5" />
                  <span className="text-sm">Suite 305, Prestige Plaza<br />Ngong Road, Nairobi</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Top Destinations</h4>
              <ul className="space-y-3">
                {destinations.map((destination, index) => (
                  <li key={index}>
                    <a
                      href={destination.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {destination.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Subscribe to our newsletter for travel tips, special offers, and destination updates.
              </p>
              
              <div className="flex gap-2 mb-6">
                <Input
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" size="icon">
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-3">
                {company.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="border-t border-white/10 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                <cert.icon className="w-6 h-6 text-accent" />
                <span className="text-sm text-primary-foreground/80">{cert.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60 text-center md:text-left">
              © 2024 Tolyns Tours and Travel. All rights reserved. Licensed by Tourism Regulatory Authority (TRA) of Kenya.
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/60">
              <a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Emergency Contact Bar */}
        <div className="bg-destructive/20 border border-destructive/30 rounded-lg p-4 mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent" />
              <span className="font-semibold">24/7 Emergency Support:</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <span className="text-accent font-bold">+254725252412</span>
              <span className="text-primary-foreground/60">|</span>
              <span className="text-accent font-bold">WhatsApp: +254725252412</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;