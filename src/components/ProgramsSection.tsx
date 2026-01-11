import { Clock, BookOpen, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    number: "01",
    title: "AI for Fashion Design & Trend Forecasting",
    duration: "6–8 Weeks",
    description: "Master AI-powered design ideation, trend forecasting, and consumer behavior analysis.",
    skills: [
      "AI-powered mood boards & design ideation",
      "Trend forecasting (colors, silhouettes, fabrics)",
      "Consumer behavior & fashion data",
      "Global fashion case studies",
    ],
    capstone: "AI-assisted seasonal fashion collection + trend forecast report",
    outcomes: [
      "AI-powered fashion designer",
      "Trend forecasting specialist",
      "Industry-ready with portfolio",
    ],
    accent: "from-primary to-secondary",
  },
  {
    number: "02",
    title: "Digital Fashion & 3D Virtual Garments",
    duration: "8–10 Weeks",
    description: "Create stunning 3D garments and virtual fashion for the metaverse.",
    skills: [
      "3D garment design & virtual sampling",
      "Digital fitting & prototyping",
      "Virtual fashion & metaverse basics",
      "Sustainable digital workflows",
    ],
    capstone: "Complete digital fashion collection in a virtual showroom",
    outcomes: [
      "Digital fashion designer",
      "3D garment specialist",
      "Sustainable fashion innovator",
    ],
    accent: "from-secondary to-primary",
  },
  {
    number: "03",
    title: "Fashion Entrepreneurship & Tech-Enabled Brand Building",
    duration: "8 Weeks",
    description: "Build and launch your own digital-first fashion brand from scratch.",
    skills: [
      "Build a digital-first fashion brand",
      "AI-based pricing & demand forecasting",
      "E-commerce & D2C business models",
      "Branding, marketing & funding",
    ],
    capstone: "Startup business plan + investor pitch deck",
    outcomes: [
      "Fashion entrepreneur",
      "Brand founder",
      "Startup-ready professional",
    ],
    accent: "from-primary to-secondary",
  },
  {
    number: "04",
    title: "Sustainable Fashion & Smart Textiles",
    duration: "6 Weeks",
    description: "Lead the sustainable fashion revolution with innovative materials and ethical practices.",
    skills: [
      "Ethical fashion principles",
      "Smart textiles & innovative fabrics",
      "AI for waste reduction & lifecycle analysis",
      "Global sustainability compliance",
    ],
    capstone: "Sustainable capsule collection + impact report",
    outcomes: [
      "Sustainable fashion expert",
      "Ethical fashion designer",
      "ESG & compliance-ready professional",
    ],
    accent: "from-secondary to-primary",
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-24 bg-gradient-card" id="programs">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">Our Curriculum</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Future-Ready Fashion <span className="text-gradient">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Industry-aligned courses designed to make you job-ready for the new fashion economy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="glass-card rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Number badge */}
              <div className={`absolute top-6 right-6 text-6xl font-display font-bold bg-gradient-to-r ${program.accent} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity`}>
                {program.number}
              </div>

              <div className="relative z-10">
                {/* Duration */}
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{program.duration}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6">{program.description}</p>

                {/* Skills */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">What you'll learn:</span>
                  </div>
                  <ul className="space-y-2">
                    {program.skills.map((skill) => (
                      <li key={skill} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Capstone */}
                <div className="bg-muted/50 rounded-xl p-4 mb-6">
                  <p className="text-xs text-primary font-medium mb-1">Capstone Project</p>
                  <p className="text-sm">{program.capstone}</p>
                </div>

                {/* Outcomes */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.outcomes.map((outcome) => (
                    <span
                      key={outcome}
                      className="flex items-center gap-1 text-xs bg-primary/10 text-primary rounded-full px-3 py-1"
                    >
                      <Award className="w-3 h-3" />
                      {outcome}
                    </span>
                  ))}
                </div>

                <Button variant="heroOutline" className="w-full group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
