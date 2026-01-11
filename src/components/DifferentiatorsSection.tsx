import { Check } from "lucide-react";

const differentiators = [
  "Industry-aligned curriculum",
  "Portfolio-driven learning",
  "AI + Fashion integration",
  "Global sustainability focus",
  "Startup & job readiness",
];

const DifferentiatorsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="hero-glow bottom-0 left-1/4 opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">Our Edge</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            What Makes Us <span className="text-gradient">Different</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {differentiators.map((item, index) => (
            <div
              key={item}
              className="glass-card rounded-full px-8 py-4 flex items-center gap-3 hover:border-primary/50 hover:shadow-glow transition-all duration-300"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
