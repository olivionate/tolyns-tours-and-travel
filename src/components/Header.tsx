import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Wildlife Safaris", href: "/services/wildlife-safaris" },
    { name: "Beach & Coastal", href: "/services/beach-coastal" },
    { name: "Mountain Climbing", href: "/services/mountain-climbing" },
    { name: "Cultural Tours", href: "/services/cultural-tours" },
    { name: "Corporate Travel", href: "/services/corporate-travel" },
    { name: "Travel Logistics", href: "/services/travel-logistics" },
  ];

  const destinations = [
    { name: "Maasai Mara", href: "/destinations/maasai-mara" },
    { name: "Amboseli National Park", href: "/destinations/amboseli" },
    { name: "Diani Beach", href: "/destinations/diani-beach" },
    { name: "Mount Kenya", href: "/destinations/mount-kenya" },
    { name: "Lamu Island", href: "/destinations/lamu-island" },
    { name: "Tsavo National Parks", href: "/destinations/tsavo" },
  ];

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-safari will-change-transform">
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
        <div className="flex justify-between items-center py-4 relative">{/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src="/lovable-uploads/f48fed82-3831-462d-9269-66fb62dffcc1.png" 
              alt="Tolyns Tours & Travel" 
              className="h-12 sm:h-16 md:h-20 w-auto"
            />
            <h1 className="text-sm sm:text-base md:text-xl font-bold text-primary leading-tight">
              Tolyns Tours & Travel
            </h1>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center space-x-8">
              <NavigationMenuItem>
                <Link
                  to="/"
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group px-2 py-2"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-safari transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/about-us"
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group px-2 py-2"
                >
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-safari transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors duration-300 font-medium bg-transparent text-base h-auto p-0">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-background">
                    {services.map((service) => (
                      <li key={service.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors duration-300 font-medium bg-transparent text-base h-auto p-0">
                  Destinations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-background">
                    {destinations.map((destination) => (
                      <li key={destination.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={destination.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{destination.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group px-2 py-2"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-safari transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact">
              <Button variant="outline" size="sm">
                Get Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="safari" size="sm">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-primary relative z-[51] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu Backdrop */}
    {isMenuOpen && (
      <div 
        className="md:hidden fixed inset-0 bg-black/50 z-[60]"
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />
    )}

    {/* Mobile Navigation Menu */}
    {isMenuOpen && (
      <div className="md:hidden fixed inset-0 z-[70] pointer-events-none">
        <div className="absolute top-[100px] left-0 right-0 bottom-0 bg-white shadow-2xl overflow-y-auto pointer-events-auto">
          <nav className="py-4 space-y-1">
              <Link
                to="/"
                className="block px-6 py-3 text-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-300 text-base font-medium touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="block px-6 py-3 text-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-300 text-base font-medium touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              
              {/* Services Collapsible Dropdown for Mobile */}
              <Collapsible open={isServicesOpen} onOpenChange={setIsServicesOpen}>
                <CollapsibleTrigger className="w-full flex items-center justify-between px-6 py-3 text-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-300 text-base font-medium touch-manipulation no-select">
                  <span>Services</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-muted/30">
                  <div className="py-2 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block px-10 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-300 touch-manipulation"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Destinations Collapsible Dropdown for Mobile */}
              <Collapsible open={isDestinationsOpen} onOpenChange={setIsDestinationsOpen}>
                <CollapsibleTrigger className="w-full flex items-center justify-between px-6 py-3 text-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-300 text-base font-medium touch-manipulation no-select">
                  <span>Destinations</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${isDestinationsOpen ? 'rotate-180' : ''}`} 
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-muted/30">
                  <div className="py-2 space-y-1">
                    {destinations.map((destination) => (
                      <Link
                        key={destination.name}
                        to={destination.href}
                        className="block px-10 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-300 touch-manipulation"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsDestinationsOpen(false);
                        }}
                      >
                        {destination.name}
                      </Link>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Link
                to="/contact"
                className="block px-6 py-3 text-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-300 text-base font-medium touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="px-6 py-4 space-y-3 border-t border-border/50 mt-4">
                <Link to="/contact" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="lg" className="w-full touch-manipulation">
                    Get Quote
                  </Button>
                </Link>
                <Link to="/contact" className="block" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="safari" size="lg" className="w-full touch-manipulation">
                    Book Now
                  </Button>
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="px-6 py-4 border-t border-border/50 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+254725252412" className="hover:text-primary touch-manipulation">+254725252412</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:info@tolynstours.co.ke" className="hover:text-primary touch-manipulation">info@tolynstours.co.ke</a>
                </div>
            </div>
          </nav>
        </div>
      </div>
    )}
    </>
  );
};

export default Header;