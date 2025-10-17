import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, AlertTriangle, Phone, Heart, Activity, Briefcase, MapPin, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SafetyGuidelines = () => {
  const safetyMeasures = [
    {
      icon: Shield,
      title: "Experienced Guides",
      description: "All our guides are professionally trained, certified, and have extensive knowledge of safety protocols. They undergo regular training in first aid, wildlife behavior, and emergency response."
    },
    {
      icon: Activity,
      title: "Health & Medical",
      description: "We maintain comprehensive first aid kits in all vehicles, partner with medical evacuation services, and have established relationships with hospitals along all our routes."
    },
    {
      icon: Briefcase,
      title: "Quality Equipment",
      description: "Our safari vehicles are regularly maintained and equipped with communication devices, GPS tracking, and safety equipment. All camping gear meets international safety standards."
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Our operations center monitors all tours in real-time. Emergency support is available 24/7, and all guides carry satellite phones for remote areas."
    }
  ];

  const healthGuidelines = [
    {
      title: "Pre-Travel Health Preparations",
      items: [
        "Consult your doctor 6-8 weeks before travel",
        "Ensure routine vaccinations are up-to-date",
        "Consider recommended vaccines: Yellow Fever (mandatory), Hepatitis A & B, Typhoid, and Tetanus",
        "Get malaria prophylaxis prescription for safari areas",
        "Obtain comprehensive travel insurance covering medical evacuation",
        "Pack personal medications in original containers with prescriptions"
      ]
    },
    {
      title: "During Your Safari",
      items: [
        "Take malaria prophylaxis as prescribed throughout your trip",
        "Use insect repellent containing DEET especially at dawn and dusk",
        "Wear long sleeves and pants in the evening",
        "Stay hydrated - drink plenty of bottled water",
        "Apply sunscreen regularly (SPF 50+ recommended)",
        "Avoid tap water - drink only bottled or treated water",
        "Wash hands frequently or use hand sanitizer",
        "Inform your guide immediately if feeling unwell"
      ]
    }
  ];

  const wildlifeSafety = [
    "Always stay inside the vehicle during game drives unless instructed otherwise by your guide",
    "Maintain safe distance from all wildlife - never approach animals",
    "Never feed wildlife or attempt to attract their attention",
    "Keep noise levels low to avoid disturbing animals",
    "Follow your guide's instructions immediately in all situations",
    "Do not walk alone in camps or lodges at night - request escort",
    "Keep tent zippers closed at all times to prevent animal intrusions",
    "Store all food and scented items securely",
    "Report any animal sightings near accommodation to staff immediately"
  ];

  const emergencyContacts = [
    { label: "Emergency Hotline", number: "+254725252412", available: "24/7" },
    { label: "Medical Evacuation", number: "+254725252412", available: "24/7" },
    { label: "Operations Center", number: "+254725252412", available: "24/7" },
    { label: "Kenya Emergency Services", number: "999 / 112", available: "24/7" }
  ];

  const mountainSafety = [
    {
      title: "Altitude Sickness Prevention",
      items: [
        "Ascend gradually - follow recommended acclimatization schedules",
        "Drink 3-4 liters of water daily at high altitude",
        "Avoid alcohol and sleeping pills at altitude",
        "Report symptoms immediately: headache, nausea, dizziness, fatigue",
        "Consider Diamox prophylaxis (consult doctor before trip)",
        "Never ascend with severe altitude sickness symptoms"
      ]
    },
    {
      title: "Mountain Trekking Safety",
      items: [
        "Follow your guide's pace - avoid rushing",
        "Dress in layers for extreme temperature variations",
        "Use proper trekking boots with ankle support",
        "Carry sufficient water and high-energy snacks",
        "Stay with your group at all times",
        "Inform guide of any health concerns before starting",
        "Turn back if weather conditions deteriorate"
      ]
    }
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
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Safety <span className="text-primary">Guidelines</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your safety is our top priority. We maintain the highest safety standards across all our tours 
                and destinations. Please review these guidelines carefully before your journey.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Safety Measures */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Our Safety Commitment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {safetyMeasures.map((measure, index) => (
                <Card key={index} className="hover:shadow-safari transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-safari rounded-full flex items-center justify-center mx-auto mb-4">
                      <measure.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {measure.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {measure.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Health Guidelines */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Health & Medical Guidelines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {healthGuidelines.map((guideline, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">
                        {guideline.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {guideline.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Wildlife Safety */}
          <section className="mb-16">
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Wildlife Safety Rules
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Kenya's wildlife is magnificent but wild and unpredictable. Your safety depends on following these essential rules:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {wildlifeSafety.map((rule, index) => (
                    <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-lg">
                      <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{rule}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Mountain Safety */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Mountain Climbing Safety
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mountainSafety.map((section, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Activity className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">
                        {section.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Emergency Contacts */}
          <section className="mb-16">
            <Card className="bg-destructive/10 border-destructive/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Phone className="w-8 h-8 text-destructive" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Emergency Contact Numbers
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Save these numbers before your trip. Our team is available 24/7 for any emergencies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="bg-background p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-foreground">{contact.label}</p>
                          <p className="text-2xl font-bold text-destructive mt-1">{contact.number}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                            {contact.available}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Insurance Requirement */}
          <section className="mb-16">
            <Card className="border-primary/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Travel Insurance Requirement
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Comprehensive travel insurance is mandatory for all our tours. Your policy must include:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Medical expenses and emergency evacuation coverage (minimum $100,000)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Trip cancellation and interruption coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Coverage for adventure activities (safaris, mountain climbing, water sports)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Personal liability coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Baggage and personal effects coverage</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  We recommend World Nomads, Allianz Global Assistance, or similar providers specializing in adventure travel.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section>
            <Card className="bg-gradient-safari text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Questions About Safety?
                </h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Our team is here to address any safety concerns and ensure you have a safe, 
                  memorable adventure in Kenya.
                </p>
                <Link to="/contact">
                  <Button variant="secondary" size="lg">
                    Contact Our Safety Team
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

export default SafetyGuidelines;
