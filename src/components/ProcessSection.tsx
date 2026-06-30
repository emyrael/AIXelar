import { ChartNoAxesCombined, Hammer, Map, Rocket, Search } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "We learn your business, users, workflows, and pain points.",
  },
  {
    number: "02",
    icon: Map,
    title: "Design",
    description: "We map the right solution before writing code.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Build",
    description: "We develop secure, scalable, and modern software systems.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description: "We deploy, test, and support your solution in the real world.",
  },
  {
    number: "05",
    icon: ChartNoAxesCombined,
    title: "Improve",
    description: "We use feedback and data to continuously improve the product.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 node-bg opacity-10" />
      
      {/* Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Approach</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            How We Build
          </h2>
          <p className="text-lg text-primary-foreground/70">
            A practical delivery model for turning operational insight into software that works in the real world.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent/50 to-accent/10" />
              )}
              
              <div
                className="relative h-full rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-primary-foreground/10"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-3xl font-bold text-accent/30">{step.number}</span>
                  <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
