import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Clock, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-float animation-delay-200" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl animate-float animation-delay-400" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Event badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
          <span className="text-sm font-medium text-muted-foreground">
            National Level Hackathon 2025
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          <span className="text-gradient glow">HACKATHON</span>
          <br />
          <span className="text-foreground">NAME 2025</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-400">
          48 Hours of Innovation, Creativity, and Building the Future
        </p>

        {/* Event details */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-5 h-5 text-primary" />
            <span>March 15-17, 2025</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5 text-primary" />
            <span>48 Hours</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Your City, India</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-5 h-5 text-primary" />
            <span>500+ Hackers</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-600">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 card-glow"
          >
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-8 py-6"
          >
            Join Community
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-muted-foreground hover:text-primary text-lg px-8 py-6"
          >
            High School Track
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};
