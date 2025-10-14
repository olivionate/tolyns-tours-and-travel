import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-safari.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="African Safari Landscape at Golden Hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-2 sm:px-4 text-center text-white pt-20 sm:pt-0">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">East Africa's Premier Travel Experience</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-4">
            Discover the
            <span className="block bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
              Heart of Africa
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Experience Kenya's unparalleled natural beauty, rich cultural diversity, and vibrant heritage 
            with our expertly curated safari adventures and travel experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Button variant="hero" size="lg" className="group w-full sm:w-auto text-sm sm:text-base">
              Start Your Adventure
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white/10 w-full sm:w-auto text-sm sm:text-base">
              View Our Safaris
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-1 sm:mb-2">
                <Users className="w-4 h-4 sm:w-6 sm:h-6 text-accent sm:mr-2 mb-1 sm:mb-0" />
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">5000+</span>
              </div>
              <p className="text-white/80 text-xs sm:text-sm md:text-base">Happy Travelers</p>
            </div>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-1 sm:mb-2">
                <Award className="w-4 h-4 sm:w-6 sm:h-6 text-accent sm:mr-2 mb-1 sm:mb-0" />
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">15+</span>
              </div>
              <p className="text-white/80 text-xs sm:text-sm md:text-base">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-1 sm:mb-2">
                <Star className="w-4 h-4 sm:w-6 sm:h-6 text-accent sm:mr-2 mb-1 sm:mb-0" />
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">4.9/5</span>
              </div>
              <p className="text-white/80 text-xs sm:text-sm md:text-base">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;