import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

// Import destination images
import maasaiMaraImage from "@/assets/maasai-mara.jpg";
import amboseliImage from "@/assets/amboseli-elephants.jpg";
import dianiBeachImage from "@/assets/diani-beach-paradise.jpg";
import mountKenyaImage from "@/assets/mount-kenya-summit.jpg";
import lamuImage from "@/assets/lamu-old-town.jpg";
import tsavoImage from "@/assets/tsavo-red-elephants.jpg";

const Destinations = () => {
  const destinations = [
    {
      name: "Maasai Mara",
      location: "Narok County, Kenya",
      description: "Witness the Great Migration and encounter the Big Five in Kenya's most famous game reserve.",
      highlights: ["Great Migration", "Big Five", "Hot Air Balloon Safaris", "Maasai Culture"],
      duration: "3-5 Days",
      difficulty: "Easy",
      bestTime: "July - October",
      rating: 4.9,
      image: maasaiMaraImage,
      link: "/destinations/maasai-mara"
    },
    {
      name: "Amboseli National Park",
      location: "Kajiado County, Kenya",
      description: "Experience elephant herds against the backdrop of Mount Kilimanjaro's snow-capped peak.",
      highlights: ["Mount Kilimanjaro Views", "Elephant Herds", "Photography", "Maasai Villages"],
      duration: "2-4 Days",
      difficulty: "Easy",
      bestTime: "June - October",
      rating: 4.8,
      image: amboseliImage,
      link: "/destinations/amboseli"
    },
    {
      name: "Diani Beach",
      location: "South Coast, Kenya",
      description: "Relax on pristine white sand beaches with coral reefs perfect for snorkeling and diving.",
      highlights: ["White Sand Beaches", "Coral Reefs", "Water Sports", "Colobus Monkeys"],
      duration: "4-7 Days",
      difficulty: "Relaxing",
      bestTime: "December - March",
      rating: 4.7,
      image: dianiBeachImage,
      link: "/destinations/diani-beach"
    },
    {
      name: "Mount Kenya",
      location: "Central Kenya",
      description: "Challenge yourself to climb Africa's second-highest peak through diverse ecosystems.",
      highlights: ["Point Lenana Summit", "Alpine Scenery", "Unique Flora", "Rock Climbing"],
      duration: "4-6 Days",
      difficulty: "Challenging",
      bestTime: "January - March",
      rating: 4.6,
      image: mountKenyaImage,
      link: "/destinations/mount-kenya"
    },
    {
      name: "Lamu Island",
      location: "Lamu County, Kenya",
      description: "Step back in time in this UNESCO World Heritage Site with Swahili architecture.",
      highlights: ["Old Town", "Dhow Sailing", "Swahili Culture", "Pristine Beaches"],
      duration: "3-5 Days",
      difficulty: "Easy",
      bestTime: "December - March",
      rating: 4.5,
      image: lamuImage,
      link: "/destinations/lamu-island"
    },
    {
      name: "Tsavo National Parks",
      location: "Eastern Kenya",
      description: "Explore Kenya's largest protected area, home to red elephants and diverse wildlife.",
      highlights: ["Red Elephants", "Mzima Springs", "Rock Climbing", "Bird Watching"],
      duration: "2-4 Days",
      difficulty: "Moderate",
      bestTime: "June - October",
      rating: 4.4,
      image: tsavoImage,
      link: "/destinations/tsavo"
    }
  ];

  const regions = [
    { name: "Northern Kenya", parks: "Samburu, Buffalo Springs", specialty: "Rare Wildlife Species" },
    { name: "Central Kenya", parks: "Aberdares, Mount Kenya", specialty: "Mountain Adventures" },
    { name: "Southern Kenya", parks: "Amboseli, Tsavo", specialty: "Classic Safari Experience" },
    { name: "Western Kenya", parks: "Maasai Mara, Nakuru", specialty: "Great Migration" },
    { name: "Coastal Kenya", parks: "Marine Parks, Beaches", specialty: "Ocean Adventures" }
  ];

  return (
    <section id="destinations" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-safari bg-clip-text text-transparent">Destinations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From the rolling savannahs of the Maasai Mara to the pristine beaches of the Indian Ocean, 
            discover Kenya's most breathtaking destinations with expert local guidance.
          </p>
        </div>

        {/* Featured Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {destinations.map((destination, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-safari transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
                  <p className="text-white/80 text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {destination.location}
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="w-3 h-3 text-white" />
                  <span className="text-white text-xs font-medium">{destination.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {destination.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{destination.difficulty}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Best Time:</strong> {destination.bestTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                    <span
                      key={highlightIndex}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {highlight}
                    </span>
                  ))}
                  {destination.highlights.length > 2 && (
                    <span className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full border">
                      +{destination.highlights.length - 2} more
                    </span>
                  )}
                </div>

                <Link to={destination.link}>
                  <Button variant="safari" size="sm" className="w-full group">
                    Explore {destination.name}
                    <MapPin className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regional Overview */}
        <div className="bg-white rounded-2xl p-8 shadow-sunset">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Explore Kenya by <span className="bg-gradient-safari bg-clip-text text-transparent">Region</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-safari rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{region.name}</h4>
                <p className="text-xs text-muted-foreground mb-2">{region.parks}</p>
                <p className="text-xs text-primary font-medium">{region.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Can't Find Your Perfect Destination?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our travel experts can create a custom itinerary combining multiple destinations 
            and experiences tailored to your interests and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="safari" size="lg">
                Create Custom Tour
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              View All Destinations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;