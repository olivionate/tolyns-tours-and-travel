import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Clock, Users, Star, Calendar, Info } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface DestinationDetailProps {
  name: string;
  location: string;
  description: string;
  heroImage: string;
  gallery: string[];
  highlights: string[];
  duration: string;
  difficulty: string;
  bestTime: string;
  rating: number;
  overview: string;
  wildlife?: string[];
  activities?: string[];
  accommodation?: string[];
  gettingThere: string;
  tips: string[];
}

const DestinationDetail = ({
  name,
  location,
  description,
  heroImage,
  gallery,
  highlights,
  duration,
  difficulty,
  bestTime,
  rating,
  overview,
  wildlife,
  activities,
  accommodation,
  gettingThere,
  tips,
}: DestinationDetailProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src={heroImage}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Link to="/destinations" className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Destinations</span>
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {name}
              </h1>
              <p className="text-white/90 text-xl flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {location}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-16 relative z-10">
          {/* Quick Info Card */}
          <Card className="mb-12 shadow-safari">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Duration</div>
                  <div className="font-semibold text-foreground">{duration}</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Difficulty</div>
                  <div className="font-semibold text-foreground">{difficulty}</div>
                </div>
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Best Time</div>
                  <div className="font-semibold text-foreground">{bestTime}</div>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Rating</div>
                  <div className="font-semibold text-foreground">{rating}/5.0</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {overview}
                </p>
              </section>

              {/* Photo Gallery */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6">Photo Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {gallery.map((image, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                      <img
                        src={image}
                        alt={`${name} ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* Wildlife */}
              {wildlife && wildlife.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Wildlife & Nature</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {wildlife.map((animal, index) => (
                      <div key={index} className="bg-primary/5 border border-primary/20 rounded-lg p-3 text-center">
                        <span className="text-primary font-medium">{animal}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Activities */}
              {activities && activities.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Activities & Experiences</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <span className="text-muted-foreground flex-1">{activity}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Getting There */}
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">Getting There</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed">{gettingThere}</p>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Highlights */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Key Highlights</h3>
                  <div className="space-y-3">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Accommodation */}
              {accommodation && accommodation.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">Accommodation Options</h3>
                    <div className="space-y-2">
                      {accommodation.map((option, index) => (
                        <div key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                          <span>{option}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Travel Tips */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Info className="w-5 h-5 text-accent" />
                    <h3 className="text-xl font-bold text-foreground">Travel Tips</h3>
                  </div>
                  <div className="space-y-2">
                    {tips.map((tip, index) => (
                      <div key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5"></div>
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Book Now CTA */}
              <Card className="bg-gradient-safari text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Ready to Explore?</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Book your {name} adventure today
                  </p>
                  <Link to="/contact">
                    <Button variant="secondary" size="lg" className="w-full">
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DestinationDetail;
