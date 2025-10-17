import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Binoculars, 
  Waves, 
  Mountain, 
  Users, 
  Plane, 
  Heart, 
  Leaf, 
  GraduationCap,
  Building 
} from "lucide-react";
import wildlifeImage from "@/assets/wildlife-safari.jpg";
import beachImage from "@/assets/beach-diani.jpg";
import mountainImage from "@/assets/mount-kenya.jpg";
import culturalImage from "@/assets/cultural-maasai.jpg";
import corporateImage from "@/assets/corporate-travel.jpg";
import travelLogisticsImage from "@/assets/travel-logistics.jpg";

const Services = () => {
  const services = [
    {
      icon: Binoculars,
      title: "Wildlife Safaris",
      description: "Experience the Big Five and the Great Migration in Kenya's premier national parks and reserves.",
      image: wildlifeImage,
      features: ["Maasai Mara", "Amboseli", "Tsavo", "Samburu"],
      price: "From $1,200",
      link: "/services/wildlife-safaris",
    },
    {
      icon: Waves,
      title: "Beach & Coastal",
      description: "Relax on pristine white sand beaches and explore the rich marine life of the Indian Ocean.",
      image: beachImage,
      features: ["Diani Beach", "Watamu", "Lamu", "Malindi"],
      price: "From $800",
      link: "/services/beach-coastal",
    },
    {
      icon: Mountain,
      title: "Mountain Climbing",
      description: "Conquer Africa's highest peaks with our expert guides and comprehensive support.",
      image: mountainImage,
      features: ["Mount Kenya", "Kilimanjaro", "Mount Longonot", "Aberdares"],
      price: "From $1,500",
      link: "/services/mountain-climbing",
    },
    {
      icon: Users,
      title: "Cultural Tours",
      description: "Immerse yourself in Kenya's rich cultural heritage with authentic community experiences.",
      image: culturalImage,
      features: ["Maasai Villages", "Lamu Culture", "Bomas of Kenya", "Historical Sites"],
      price: "From $600",
      link: "/services/cultural-tours",
    },
    {
      icon: Building,
      title: "Corporate Travel",
      description: "Professional services for business travel, conferences, and corporate team building.",
      image: corporateImage,
      features: ["Team Building", "Conferences", "Incentive Travel", "Group Tours"],
      price: "Custom Quote",
      link: "/services/corporate-travel",
    },
    {
      icon: Plane,
      title: "Travel Logistics",
      description: "Complete travel arrangements including flights, transfers, and documentation.",
      image: travelLogisticsImage,
      features: ["Flight Bookings", "Airport Transfers", "Visa Processing", "Travel Insurance"],
      price: "Service Based",
      link: "/services/travel-logistics",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-safari bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From thrilling wildlife safaris to relaxing beach getaways, we offer comprehensive travel experiences 
            tailored to your dreams and preferences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              id={service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
              className="group hover:shadow-safari transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden scroll-mt-40"
            >
              {service.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
              )}
              
              <CardHeader className="pb-3">
                {!service.image && (
                  <div className="w-12 h-12 bg-gradient-safari rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                )}
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <span className="text-lg font-semibold text-secondary">
                    {service.price}
                  </span>
                  <a href={service.link}>
                    <Button variant="safari" size="sm" className="group">
                      Learn More
                      <service.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sunset max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="flex items-center justify-center gap-3">
                <Heart className="w-8 h-8 text-secondary" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Honeymoon Packages</h3>
                  <p className="text-sm text-muted-foreground">Romantic getaways</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Leaf className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Eco-Tourism</h3>
                  <p className="text-sm text-muted-foreground">Sustainable travel</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <GraduationCap className="w-8 h-8 text-accent" />
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Educational Tours</h3>
                  <p className="text-sm text-muted-foreground">Learning adventures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;