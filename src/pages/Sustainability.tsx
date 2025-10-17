import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Users, Recycle, TreePine, Droplets, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Sustainability = () => {
  const commitments = [
    {
      icon: Leaf,
      title: "Environmental Conservation",
      description: "We actively participate in wildlife conservation programs and support eco-friendly lodges that minimize environmental impact. Our tours are designed to leave minimal carbon footprints while maximizing positive impact on local ecosystems."
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "We partner with local communities, ensuring tourism benefits reach the people who protect Kenya's natural heritage. We employ local guides, support community-owned businesses, and invest in local education programs."
    },
    {
      icon: Heart,
      title: "Cultural Preservation",
      description: "We promote authentic cultural experiences that respect and preserve traditional ways of life. Our cultural tours are conducted with community consent and support cultural education initiatives."
    },
    {
      icon: Recycle,
      title: "Waste Reduction",
      description: "We implement strict waste management policies, encourage reusable alternatives, and partner with accommodations that practice responsible waste disposal and recycling programs."
    }
  ];

  const initiatives = [
    {
      title: "Carbon Offset Programs",
      items: [
        "Plant trees to offset carbon emissions from safari vehicles",
        "Support renewable energy projects in rural communities",
        "Encourage use of electric and hybrid safari vehicles where available",
        "Calculate and offset flight emissions for international travelers"
      ]
    },
    {
      title: "Wildlife Conservation",
      items: [
        "Donate portion of profits to anti-poaching initiatives",
        "Support wildlife research and monitoring programs",
        "Partner with sanctuaries and rehabilitation centers",
        "Educate travelers on responsible wildlife viewing practices"
      ]
    },
    {
      title: "Community Development",
      items: [
        "Employ local guides and support staff from host communities",
        "Source supplies from local businesses and cooperatives",
        "Support education through scholarship programs",
        "Fund clean water and healthcare projects in rural areas"
      ]
    },
    {
      title: "Sustainable Accommodation",
      items: [
        "Partner with eco-certified lodges and camps",
        "Promote solar-powered and low-impact facilities",
        "Support accommodations using water conservation systems",
        "Encourage waste reduction and composting programs"
      ]
    }
  ];

  const certifications = [
    { name: "Eco-Tourism Kenya Certified", icon: Award },
    { name: "Kenya Tourism Board Approved", icon: Award },
    { name: "KATO Sustainable Tourism Member", icon: Award },
    { name: "Community Tourism Partnership", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="bg-gradient-earth py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-gradient-safari rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Commitment to <span className="text-primary">Sustainability</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At Tolyns Tours & Travel, we believe that tourism should benefit not only travelers but also 
                the environment, wildlife, and local communities. Our sustainable tourism practices ensure 
                Kenya's natural and cultural treasures are preserved for future generations.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Core Commitments */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Our Sustainability Pillars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commitments.map((commitment, index) => (
                <Card key={index} className="hover:shadow-safari transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-safari rounded-full flex items-center justify-center mx-auto mb-4">
                      <commitment.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {commitment.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {commitment.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Sustainability Initiatives */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Our Sustainability Initiatives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {initiative.title}
                    </h3>
                    <ul className="space-y-3">
                      {initiative.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Traveler Responsibility */}
          <section className="mb-16">
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <TreePine className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Responsible Travel Guidelines
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Environmental Practices</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Droplets className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>Conserve water in accommodations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Recycle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>Dispose of waste properly and recycle when possible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Leaf className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>Avoid single-use plastics - bring reusable bottles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TreePine className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>Stay on designated paths to protect vegetation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Wildlife & Cultural Respect</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>Maintain safe distance from wildlife</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>Never feed or touch wild animals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>Respect local customs and traditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>Support local businesses and artisans</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Certifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Our Certifications & Memberships
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <cert.icon className="w-12 h-12 text-accent mx-auto mb-3" />
                    <p className="text-sm font-medium text-foreground">{cert.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section>
            <Card className="bg-gradient-safari text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Travel Responsibly with Us
                </h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Join us in making a positive impact on Kenya's environment and communities. 
                  Together, we can ensure sustainable tourism for generations to come.
                </p>
                <Link to="/contact">
                  <Button variant="secondary" size="lg">
                    Plan Your Sustainable Journey
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sustainability;
