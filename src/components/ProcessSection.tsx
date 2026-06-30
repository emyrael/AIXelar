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
    <section id="process" className="py-14 bg-primary text-primary-foreground relative overflow-hidden md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 node-bg opacity-10" />
      
      {/* Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-5 relative z-10 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Approach</span>
          <h2 className="text-2xl md:text-5xl font-bold mt-3 mb-4 md:mt-4 md:mb-6">
            How We Build
          </h2>
          <p className="text-base text-primary-foreground/70 md:text-lg">
            A practical delivery model for turning operational insight into software that works in the real world.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-5 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className={`relative ${index === steps.length - 1 ? "col-span-2 lg:col-span-1" : ""}`}>
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent/50 to-accent/10" />
              )}
              
              <div
                className="relative h-full rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-primary-foreground/10 md:p-5"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="mb-4 flex items-center gap-2 md:mb-5 md:gap-3">
                  <span className="text-2xl font-bold text-accent/30 md:text-3xl">{step.number}</span>
                  <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center md:w-11 md:h-11">
                    <step.icon className="w-5 h-5 text-accent-foreground md:w-6 md:h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 md:text-xl md:mb-3">{step.title}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed md:text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
