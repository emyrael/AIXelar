import { ArrowUpRight } from "lucide-react";

const useCases = [
  {
    title: "Customer Support Automation",
    industry: "Customer Experience",
    description: "Different businesses struggle with high support volumes and response times. Our AI chatbot handles common inquiries 24/7, routes complex issues to human agents, and reduces support costs while improving customer satisfaction.",
    metric: "60% fewer support tickets",
  },
  {
    title: "Automated Report Summaries",
    industry: "Operations",
    description: "Daily KPIs, sales reports, and alerts delivered automatically to WhatsApp, Slack, or social media chat apps. Teams stay informed without logging into multiple dashboards, enabling faster decision-making.",
    metric: "15 hours saved weekly",
  },
  {
    title: "RAG Knowledge System",
    industry: "Internal Operations",
    description: "Employees waste hours searching for company policies, SOPs, and internal knowledge. Our RAG system makes your entire knowledge base instantly searchable, providing accurate answers to employee questions in seconds.",
    metric: "3x faster information access",
  },
  {
    title: "Retail Forecasting & Optimization",
    industry: "Retail & Logistics",
    description: "Inventory management and demand forecasting challenges lead to stockouts or overstock. AI-powered forecasting predicts demand patterns, optimizes inventory levels, and automates reorder workflows to reduce costs and improve availability.",
    metric: "92% forecast accuracy",
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
