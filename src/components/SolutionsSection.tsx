import { 
  Brain, 
  BarChart3, 
  CloudCog,
  Globe,
  ShieldCheck,
} from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "AI & Automation",
    description: "AI agents, workflow automation, document intelligence, and internal AI assistants that remove bottlenecks from daily operations.",
    features: ["AI agents", "Workflow automation", "Document intelligence", "Internal AI assistants"],
  },
  {
    icon: Globe,
    title: "Web & Mobile App Solutions",
    description: "Modern web apps, mobile apps, SaaS platforms, and business portals designed around how your customers and teams actually work.",
    features: ["Web apps", "Mobile apps", "SaaS platforms", "Business portals"],
  },
  {
    icon: BarChart3,
    title: "Data & Intelligence Systems",
    description: "Dashboards, data pipelines, analytics platforms, and AI-powered reporting that turn scattered information into operational clarity.",
    features: ["Dashboards", "Data pipelines", "Analytics platforms", "AI-powered reporting"],
  },
  {
    icon: CloudCog,
    title: "Custom Software Development",
    description: "Business systems, API integrations, cloud deployment, and scalable backend systems built for real use, growth, and maintainability.",
    features: ["Business systems", "API integrations", "Cloud deployment", "Scalable backend systems"],
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="relative overflow-hidden py-14 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto px-5 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-2xl md:text-5xl font-bold text-foreground mt-3 mb-4 md:mt-4 md:mb-6">
            Intelligent Systems Built Around Your Business
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            We provide app solutions, automation systems, AI tools, and data platforms, but every engagement starts with discovery. We learn your business first, then build around your real operational needs.
          </p>
        </div>

        <div className="grid gap-4 max-w-6xl mx-auto sm:grid-cols-2 md:gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card md:p-8"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors md:w-14 md:h-14 md:mb-6">
                  <solution.icon className="w-5 h-5 text-accent transition-colors group-hover:text-accent-foreground md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 md:text-xl md:mb-3">{solution.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed md:text-base">{solution.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-2 md:mt-6 md:gap-3">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-1.5 text-xs font-medium text-foreground md:gap-2 md:text-sm">
                      <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-accent md:h-4 md:w-4" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
