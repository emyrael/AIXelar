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
    <section className="py-14 md:py-24">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Use Cases</span>
          <h2 className="text-2xl md:text-5xl font-bold text-foreground mt-3 mb-4 md:mt-4 md:mb-6">
            Real Results for Real Businesses
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            See how we've transformed operations across industries.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 max-w-5xl mx-auto md:gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-card border border-border/50 p-3 card-hover cursor-pointer sm:p-5 md:p-8"
            >
              <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3 md:mb-4">
                <span className="px-2 py-1 text-[10px] font-semibold bg-accent/10 text-accent rounded-full sm:text-xs sm:px-2.5">
                  {useCase.industry}
                </span>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-accent transition-colors sm:w-5 sm:h-5" />
              </div>
              
              <h3 className="text-sm font-bold text-foreground mb-2 sm:text-lg md:text-xl md:mb-3">{useCase.title}</h3>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-5 sm:text-sm sm:mb-4 sm:line-clamp-none md:text-base md:mb-6">{useCase.description}</p>
              
              <div className="pt-2 border-t border-border/50 sm:pt-3 md:pt-4">
                <span className="text-sm font-bold text-accent sm:text-xl md:text-2xl">{useCase.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
