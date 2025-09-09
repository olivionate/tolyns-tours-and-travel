import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Calendar,
  Users
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "+254725252412",
      secondary: "+254725252412",
      description: "Available 24/7 for bookings and support"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@tolynstours.co.ke",
      secondary: "bookings@tolynstours.co.ke",
      description: "We respond within 2 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Suite 305, Prestige Plaza",
      secondary: "Ngong Road, Nairobi, Kenya",
      description: "Monday - Friday: 8AM - 6PM"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      primary: "Mon-Fri: 8:00 AM - 6:00 PM",
      secondary: "Saturday: 9:00 AM - 2:00 PM",
      description: "Sunday: By appointment"
    }
  ];

  const services = [
    { icon: MessageCircle, title: "Quick Inquiry", description: "Get instant quotes and information" },
    { icon: Calendar, title: "Book Consultation", description: "Schedule a detailed planning session" },
    { icon: Users, title: "Group Bookings", description: "Special packages for groups of 10+" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="bg-gradient-safari bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to embark on your African adventure? Our travel experts are here to help you 
            create the perfect journey. Contact us today for personalized service and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sunset">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-safari rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-primary font-medium">{info.primary}</p>
                      <p className="text-muted-foreground text-sm">{info.secondary}</p>
                      <p className="text-muted-foreground text-xs mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Services */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-safari transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <service.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-foreground">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-safari border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 2 hours during business hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input placeholder="Your full name" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="your.email@example.com" className="h-12" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input placeholder="+254 xxx xxx xxx" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Travel Dates
                    </label>
                    <Input placeholder="When do you want to travel?" className="h-12" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Number of Travelers
                    </label>
                    <Input placeholder="How many people?" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Service
                    </label>
                    <select className="w-full h-12 px-3 py-2 border border-input rounded-md bg-background text-foreground">
                      <option value="">Select a service</option>
                      <option value="safari">Wildlife Safari</option>
                      <option value="beach">Beach Holiday</option>
                      <option value="mountain">Mountain Climbing</option>
                      <option value="cultural">Cultural Tours</option>
                      <option value="corporate">Corporate Travel</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Tell us about your travel preferences, budget, and any special requirements..."
                    className="min-h-32"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="safari" size="lg" className="flex-1 group">
                    Send Message
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" size="lg" className="sm:w-auto">
                    Call Instead
                  </Button>
                </div>

                <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                  <p className="text-sm text-muted-foreground">
                    <strong>Response Time:</strong> We typically respond to inquiries within 2 hours during 
                    business hours (8 AM - 6 PM EAT). For urgent matters, please call us directly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center bg-gradient-to-r from-destructive/5 to-secondary/5 rounded-2xl p-8 border border-destructive/10">
          <h3 className="text-xl font-bold text-foreground mb-2">24/7 Emergency Support</h3>
          <p className="text-muted-foreground mb-4">
            Already on tour and need immediate assistance? Our emergency hotline is available round the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-destructive font-semibold">
              <Phone className="w-5 h-5" />
              <span>Emergency: +254725252412</span>
            </div>
            <div className="text-muted-foreground">|</div>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp: +254725252412</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;