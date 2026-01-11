import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fashion-tech.jpg";
import { useEffect, useState } from "react";

const CountUp = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeOut = (x: number): number => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

      setCount(Math.floor(easeOut(progress) * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background glow effects */}
      <div className="hero-glow top-20 left-1/4 animate-pulse-glow" />
      <div className="hero-glow bottom-20 right-1/4 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Where Fashion Meets{" "}
                <span className="text-gradient">AI, 3D</span>{" "}
                & Sustainability
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
                Build the future of fashion with industry-ready skills in{" "}
                <span className="text-foreground font-medium">AI Design</span>,{" "}
                <span className="text-foreground font-medium">Digital Fashion</span>,{" "}
                <span className="text-foreground font-medium">Entrepreneurship</span> &{" "}
                <span className="text-foreground font-medium">Sustainable Textiles</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#programs">
                <Button variant="hero" size="xl">
                  Explore Programs
                </Button>
              </a>
              <a href="#contact">
                <Button variant="heroOutline" size="xl">
                  Book Free Counselling
                </Button>
              </a>
            </div>

          </div>

          {/* Right visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Fashion designer creating 3D digital garments with AI"
                className="rounded-2xl shadow-card animate-float"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 glass-card rounded-xl p-4 animate-float-delayed">
                <p className="text-sm font-medium text-primary">AI Design</p>
                <p className="text-xs text-muted-foreground">Real-time creation</p>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card rounded-xl p-4 animate-float">
                <p className="text-sm font-medium text-secondary">3D Virtual</p>
                <p className="text-xs text-muted-foreground">Zero waste sampling</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-40 md:gap-40 pt-14 border-t border-border/50 text-center mt-12">
          <div>
            <p className="text-5xl md:text-6xl font-bold text-gradient mb-2"><CountUp end={500} suffix="+" /></p>
            <p className="text-muted-foreground text-lg md:text-xl">Students Trained</p>
          </div>
          <div>
            <p className="text-5xl md:text-6xl font-bold text-gradient mb-2"><CountUp end={95} suffix="%" /></p>
            <p className="text-muted-foreground text-lg md:text-xl">Placement Rate</p>
          </div>
          <div>
            <p className="text-5xl md:text-6xl font-bold text-gradient mb-2"><CountUp end={4} /></p>
            <p className="text-muted-foreground text-lg md:text-xl">Future-Ready Programs</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      
    </section>
  );
};

export default HeroSection;
