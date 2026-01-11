import { Cpu, Box, Leaf, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI for trend forecasting",
    description: "Predict consumer behavior and market trends with machine learning",
  },
  {
    icon: Box,
    title: "3D garments to reduce waste",
    description: "Virtual sampling eliminates physical prototypes and material waste",
  },
  {
    icon: TrendingUp,
    title: "Digital fashion for virtual worlds",
    description: "Create fashion for metaverse, gaming, and digital experiences",
  },
  {
    icon: Leaf,
    title: "Smart fabrics for sustainability",
    description: "Innovative materials that track and reduce environmental impact",
  },
];

const brands = ["Nike", "Zara", "Gucci", "H&M", "Adidas", "Prada"];

const WhyFashionTech = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Why Fashion Needs <span className="text-gradient">Tech</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The global fashion industry is being transformed by{" "}
            <span className="text-foreground">AI</span>,{" "}
            <span className="text-foreground">3D design</span>,{" "}
            <span className="text-foreground">virtual sampling</span>, and{" "}
            <span className="text-foreground">sustainable technology</span>.
          </p>
        </div>

        {/* Brand logos */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {brands.map((brand) => (
            <div
              key={brand}
              className="glass-card rounded-lg px-8 py-4 hover:border-primary/50 transition-colors"
            >
              <span className="font-display font-bold text-lg text-muted-foreground">{brand}</span>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-2xl font-display font-semibold mt-16 text-gradient">
          We train you for THIS new fashion industry.
        </p>
      </div>
    </section>
  );
};

export default WhyFashionTech;
