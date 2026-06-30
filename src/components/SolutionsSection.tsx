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
    <section id="solutions" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Intelligent Systems Built Around Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide app solutions, automation systems, AI tools, and data platforms, but every engagement starts with discovery. We learn your business first, then build around your real operational needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <solution.icon className="w-7 h-7 text-accent transition-colors group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <ShieldCheck className="h-4 w-4 shrink-0 text-accent" />
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
