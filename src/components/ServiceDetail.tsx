import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ServiceDetailProps {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  features: string[];
  price: string;
  fullDescription: string;
  included: string[];
  itinerary?: string[];
}

const ServiceDetail = ({
  icon: Icon,
  title,
  description,
  image,
  features,
  price,
  fullDescription,
  included,
  itinerary,
}: ServiceDetailProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-safari rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {title}
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground mb-6">
                {description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {features.map((feature, index) => (
                  <span
                    key={index}
                    className="text-sm px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-secondary">
                  {price}
                </span>
                <a href="#contact-form">
                  <Button variant="safari" size="lg">
                    Book Now
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-safari h-[400px] lg:h-[500px]">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Full Description */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                About This Service
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {fullDescription}
              </p>
            </CardContent>
          </Card>

          {/* What's Included */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                What's Included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Itinerary (if provided) */}
          {itinerary && itinerary.length > 0 && (
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Sample Itinerary
                </h2>
                <div className="space-y-4">
                  {itinerary.map((day, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-safari rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-muted-foreground">{day}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Contact Form Section */}
          <div id="contact-form" className="scroll-mt-32">
            <Card className="bg-gradient-earth">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Book?
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Contact us today to start planning your {title.toLowerCase()} experience
                </p>
                <Link to="/#contact">
                  <Button variant="safari" size="lg">
                    Contact Us Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
