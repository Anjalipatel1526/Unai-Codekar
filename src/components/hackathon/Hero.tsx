import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

import { useEffect } from "react";

export const Hero = ({ onIntroComplete }: { onIntroComplete?: () => void }) => {
  useEffect(() => {
    // Immediately signal intro complete
    if (onIntroComplete) onIntroComplete();
  }, [onIntroComplete]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Effects - Simplified & Reduced Intensity */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[20%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Navbar Contrast Overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/80 to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-4 relative z-20 text-center">

        {/* Category Label */}
        <div className="mb-8 opacity-0 animate-fade-in-up duration-500 ease-out fill-mode-forwards" style={{ animationDelay: '100ms' }}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-medium tracking-widest backdrop-blur-sm">
            HACKATHON
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-8 opacity-0 animate-fade-in-up duration-500 ease-out fill-mode-forwards" style={{ animationDelay: '200ms' }}>
          CodeKar 2026
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up duration-500 ease-out fill-mode-forwards" style={{ animationDelay: '300ms' }}>
          Innovation, Creativity, and Building the Future. <br className="hidden md:block" />
          Join India's premier student hackathon for 48 hours of creation.
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 opacity-0 animate-fade-in-up duration-500 ease-out fill-mode-forwards" style={{ animationDelay: '400ms' }}>
          <div className="flex items-center gap-3 group">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors">
              <Calendar className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-white/90">Feb 15-17</p>
              <p className="text-xs text-white/50">2026</p>
            </div>
          </div>

          <div className="flex items-center gap-3 group">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors">
              <MapPin className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-white/90">Chennai</p>
              <p className="text-xs text-white/50">Tamil Nadu</p>
            </div>
          </div>

          <div className="flex items-center gap-3 group">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors">
              <Users className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-white/90">500+</p>
              <p className="text-xs text-white/50">Hackers</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-up duration-500 ease-out fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <Button
            size="lg"
            className="h-12 px-8 text-base font-medium rounded-full bg-white text-black hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
          >
            Apply Now
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 text-base font-medium rounded-full border-white/10 bg-transparent text-white hover:bg-white/5 transition-all hover:border-white/20"
          >
            Join Community
          </Button>
        </div>

      </div>
    </section>
  );
};
