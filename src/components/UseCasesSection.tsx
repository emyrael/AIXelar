import { ArrowUpRight } from "lucide-react";

const useCases = [
  {
    title: "Customer Support Bot",
    industry: "E-Commerce",
    description: "Reduced support tickets by 60% with an AI chatbot handling 24/7 customer inquiries.",
    metric: "60% fewer tickets",
  },
  {
    title: "Document Processing",
    industry: "Legal",
    description: "Automated contract review and data extraction, saving 100+ hours monthly.",
    metric: "100+ hours saved",
  },
  {
    title: "Sales Intelligence",
    industry: "SaaS",
    description: "AI-powered lead scoring and personalized outreach automation.",
    metric: "3x conversion rate",
  },
  {
    title: "Inventory Forecasting",
    industry: "Retail",
    description: "Machine learning model predicting demand with 95% accuracy.",
    metric: "95% accuracy",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Use Cases</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Real Results for Real Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we've transformed operations across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 card-hover cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full">
                  {useCase.industry}
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{useCase.description}</p>
              
              <div className="pt-4 border-t border-border/50">
                <span className="text-2xl font-bold text-accent">{useCase.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
