import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Eye, Heart, Shield, Star, Leaf } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer-Centricity",
      description: "Prioritizing client needs to deliver tailored, seamless, and memorable travel experiences."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Promoting eco-friendly practices and supporting local communities for responsible tourism."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Operating with transparency, honesty, and reliability in all our dealings."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Striving for the highest standards in service quality, safety, and innovation."
    }
  ];

  const achievements = [
    { number: "15+", label: "Years of Excellence" },
    { number: "5000+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations Covered" },
    { number: "95%", label: "Customer Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="bg-gradient-safari bg-clip-text text-transparent">Tolyns Tours</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading East Africa's travel revolution with passion, expertise, and an unwavering commitment to 
            showcasing Kenya's unparalleled natural beauty and rich cultural heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To deliver innovative, sustainable, and personalized travel experiences that inspire exploration, 
                foster cultural appreciation, and create lifelong memories while contributing to the economic 
                and environmental well-being of the destinations we serve.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-8 rounded-2xl border border-secondary/10">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the premier tours and travel agency in East Africa, renowned for excellence in service delivery, 
                unmatched local expertise, and a steadfast commitment to responsible tourism that preserves the 
                region's natural and cultural treasures for future generations.
              </p>
            </div>
          </div>

          {/* Company Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-safari transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-safari bg-clip-text text-transparent mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sunset">
              <h3 className="text-xl font-bold text-foreground mb-4">Why Choose Tolyns Tours?</h3>
              <div className="space-y-3">
                {[
                  "Unmatched local expertise and authentic experiences",
                  "Personalized itineraries for every budget and preference",
                  "24/7 customer support and professional guidance",
                  "Commitment to sustainable and responsible tourism",
                  "Safety-first approach with certified guides"
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Our <span className="bg-gradient-safari bg-clip-text text-transparent">Core Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-safari transition-all duration-300 transform hover:-translate-y-2 group">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 bg-gradient-safari rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-12 border border-primary/10">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Start Your African Adventure?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experienced team craft the perfect journey for you. From wildlife safaris to cultural 
            immersions, we'll create memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="safari" size="lg">
              Plan My Trip
            </Button>
            <Button variant="outline" size="lg">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;