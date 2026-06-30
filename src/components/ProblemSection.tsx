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
    <section className="py-14 bg-secondary/30 md:py-24">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="text-2xl md:text-5xl font-bold text-foreground mt-3 mb-4 md:mt-4 md:mb-6">
            Your Business is Losing Competitive Edge
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Businesses of all different sizes without AI automation are losing time, efficiency, and market position every day.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 max-w-5xl mx-auto md:grid-cols-3 md:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`relative rounded-2xl bg-card border border-border/50 p-4 card-hover group md:p-8 ${
                index === problems.length - 1 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors md:w-14 md:h-14 md:mb-6">
                <problem.icon className="w-5 h-5 text-destructive md:w-7 md:h-7" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2 md:text-xl md:mb-3">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed md:text-base">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
