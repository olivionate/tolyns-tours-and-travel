import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Destinations", href: "#destinations" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-safari">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Top bar with contact info */}
        <div className="border-b border-border/50 py-2 hidden md:block">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+254725252412</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@tolynstours.co.ke</span>
              </div>
            </div>
            <div className="text-primary font-medium">
              East Africa's Premier Travel Experience
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src="/lovable-uploads/f48fed82-3831-462d-9269-66fb62dffcc1.png" 
              alt="Tolyns Tours & Travel" 
              className="h-12 sm:h-16 md:h-20 w-auto"
            />
            <h1 className="text-sm sm:text-base md:text-xl font-bold bg-gradient-safari bg-clip-text text-transparent leading-tight">
              Tolyns Tours<span className="hidden xs:inline"> & Travel</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-safari transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              Get Quote
            </Button>
            <Button variant="safari" size="sm">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-border/50 shadow-lg">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 py-3 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  Get Quote
                </Button>
                <Button variant="safari" size="sm" className="w-full">
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;