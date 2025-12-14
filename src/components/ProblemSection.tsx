import { Clock, Users, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Losing Time & Efficiency Daily",
    description: "Manual processes drain productivity and cost you competitive advantage. Every day without automation is lost revenue.",
  },
  {
    icon: Users,
    title: "Scaling Without the Right Tools",
    description: "Your business is growing, but manual workflows can't keep up. You're losing opportunities while competitors move faster.",
  },
  {
    icon: HelpCircle,
    title: "AI Feels Too Complex",
    description: "AI adoption seems overwhelming. You need practical solutions, not complexity. Xelar bridges that gap.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Your Business is Losing Competitive Edge
          </h2>
          <p className="text-lg text-muted-foreground">
            Businesses of all different sizes without AI automation are losing time, efficiency, and market position every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border/50 card-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
