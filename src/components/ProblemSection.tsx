import { Clock, Users, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Wasting Hours on Manual Tasks",
    description: "Your team spends countless hours on repetitive work that could be automated.",
  },
  {
    icon: Users,
    title: "Your Team is Overwhelmed",
    description: "Growing workload without the tools to scale efficiently leads to burnout.",
  },
  {
    icon: HelpCircle,
    title: "AI Adoption Feels Confusing",
    description: "The AI landscape is complex. You need a guide, not more jargon.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Your Business is Falling Behind
          </h2>
          <p className="text-lg text-muted-foreground">
            Without AI automation, you're leaving efficiency and growth on the table.
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
