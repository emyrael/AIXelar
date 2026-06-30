import { Zap, Code2, Shield, Headphones, CheckCircle, Boxes, Bot, Cloud, Database } from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Custom-Built AI Solutions",
    description: "Intelligent automation, AI agents, workflow systems, and optimization tools engineered specifically for your business, with no off-the-shelf templates.",
  },
  {
    icon: Zap,
    title: "Fast, Focused Delivery",
    description: "Lean discovery, sharp scope, and rapid iteration help you move from idea to usable product without losing quality or security.",
  },
  {
    icon: CheckCircle,
    title: "Enterprise-Grade Engineering",
    description: "Production-ready AI systems built with modern engineering practices, secure architecture, and maintainable foundations.",
  },
  {
    icon: Shield,
    title: "Secure Cloud Architecture",
    description: "Enterprise-grade security with compliant cloud deployments. Your data and systems protected with industry-standard protocols.",
  },
  {
    icon: Headphones,
    title: "Strategic AI Consulting",
    description: "Beyond implementation, we deliver strategic guidance on automation, competitor analysis, website optimization, and process improvement.",
  },
];

const proofAreas = [
  { icon: Bot, label: "AI Products Built" },
  { icon: Code2, label: "Web & Mobile Solutions" },
  { icon: Boxes, label: "Automation Systems" },
  { icon: Database, label: "Enterprise Data Experience" },
  { icon: Cloud, label: "Cloud & Scalable Architecture" },
  { icon: CheckCircle, label: "Product Thinking + Engineering Execution" },
];

const WhyUsSection = () => {
  return (
    <section className="py-14 bg-secondary/30 md:py-24">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center lg:gap-16">
            {/* Left Content */}
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-2xl md:text-5xl font-bold text-foreground mt-3 mb-4 md:mt-4 md:mb-6">
                Serious AI Solutions Built for Scale
              </h2>
              <p className="text-base text-muted-foreground mb-6 md:text-lg md:mb-8">
                We don't just write code. We discover and learn how your business works, understand your workflows, identify bottlenecks, and build intelligent systems that help you move faster, operate smarter, and scale better.
              </p>
              
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 md:gap-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 rounded-xl border border-border/40 bg-card/60 p-3 sm:bg-transparent sm:border-0 sm:p-0 md:gap-4">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 md:w-10 md:h-10">
                      <reason.icon className="w-4 h-4 text-accent md:w-5 md:h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{reason.title}</h4>
                      <p className="text-sm text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 p-4 sm:p-8">
                <div className="absolute inset-0 tech-grid opacity-30" />
                <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4">
                  {proofAreas.map((area) => (
                    <div
                      key={area.label}
                      className="group flex flex-col justify-between rounded-2xl border border-border/50 bg-card/85 p-4 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card md:p-5"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent md:mb-5 md:h-11 md:w-11">
                        <area.icon className="h-4 w-4 text-accent transition-colors group-hover:text-accent-foreground md:h-5 md:w-5" />
                      </div>
                      <span className="text-xs font-semibold leading-snug text-foreground md:text-sm">{area.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
