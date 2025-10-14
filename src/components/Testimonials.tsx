import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "London, UK",
      rating: 5,
      text: "Tolyns Tours & Travel made our Maasai Mara safari absolutely unforgettable! The guides were incredibly knowledgeable, and every detail was perfectly planned. We saw the Big Five and witnessed the Great Migration - truly a once-in-a-lifetime experience.",
      tour: "5-Day Maasai Mara Safari",
      avatar: "SM"
    },
    {
      name: "James Rodriguez",
      location: "New York, USA",
      rating: 5,
      text: "From booking our Kilimanjaro trek to arranging airport transfers, Tolyns was professional and attentive throughout. The mountain guides were exceptional, and the support team made sure we had everything we needed for a successful summit.",
      tour: "6-Day Mount Kenya Climb",
      avatar: "JR"
    },
    {
      name: "Aisha Rahman",
      location: "Dubai, UAE",
      rating: 5,
      text: "The cultural tour to Lamu was a highlight of our Kenya trip. Tolyns' team showed us the authentic heart of Swahili culture, from the traditional dhow sailing to the incredible local cuisine. Their local knowledge is unmatched.",
      tour: "4-Day Lamu Cultural Tour",
      avatar: "AR"
    },
    {
      name: "Michael Thompson",
      location: "Sydney, Australia",
      rating: 5,
      text: "Our family safari with Tolyns was incredible! They perfectly balanced game drives with cultural experiences, and the kids loved every moment. The accommodations were excellent, and our guide made learning about wildlife so engaging.",
      tour: "7-Day Family Safari Package",
      avatar: "MT"
    },
    {
      name: "Emma Johansson",
      location: "Stockholm, Sweden",
      rating: 5,
      text: "As a solo female traveler, I felt completely safe and well-cared for throughout my journey. The beach and safari combination was perfect, and the sustainable tourism practices really aligned with my values. Highly recommend!",
      tour: "Beach & Safari Combo",
      avatar: "EJ"
    },
    {
      name: "David Chen",
      location: "Singapore",
      rating: 5,
      text: "The corporate retreat organized by Tolyns exceeded all expectations. The team-building activities in Naivasha were perfectly planned, and the mix of adventure and relaxation was ideal for our team. Professional service throughout.",
      tour: "Corporate Team Building",
      avatar: "DC"
    }
  ];

  const stats = [
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Recommend Us" },
    { number: "5000+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="bg-gradient-safari bg-clip-text text-transparent">Travelers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our adventurous travelers have to say about 
            their unforgettable experiences with Tolyns Tours & Travel.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-safari bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-safari transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Tour Information */}
                <div className="text-sm text-primary font-medium mb-4 bg-primary/5 rounded-lg px-3 py-2 border border-primary/10">
                  {testimonial.tour}
                </div>

                {/* Author Information */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-safari rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">Trusted by Thousands</h3>
              <p className="text-muted-foreground">
                Join over 5,000 satisfied travelers who have experienced the magic of Kenya with us.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-lg font-bold text-foreground">4.9/5</span>
              </div>
              <p className="text-muted-foreground">Based on 1,200+ reviews</p>
            </div>

            <div className="text-center md:text-right">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 border border-primary/20">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">Licensed & Certified</span>
              </div>
              <p className="text-muted-foreground text-sm mt-2">
                KATO & TRA Registered
              </p>
            </div>
          </div>
        </div>

        {/* Review Platforms */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Find us on</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-bold">TripAdvisor</div>
            <div className="text-lg font-bold">Google Reviews</div>
            <div className="text-lg font-bold">SafariBookings</div>
            <div className="text-lg font-bold">Trustpilot</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;