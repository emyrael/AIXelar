import { Search, Hammer, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Strategy & Discovery",
    description: "We analyze your workflows, identify automation opportunities, and create a tailored AI roadmap.",
  },
  {
    number: "02",
    icon: Hammer,
    title: "Build & Implement",
    description: "Our team develops custom AI solutions with rapid iteration and continuous feedback loops.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy & Support",
    description: "Seamless deployment with ongoing maintenance, monitoring, and optimization support.",
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
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            From Idea to Impact in 3 Steps
          </h2>
          <p className="text-lg text-primary-foreground/70">
            A proven methodology that delivers results fast.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent/50 to-accent/10" />
              )}
              
              <div className="relative p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-bold text-accent/30">{step.number}</span>
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
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
