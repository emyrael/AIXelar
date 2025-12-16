import { 
  MessageSquare, 
  Brain, 
  Workflow, 
  BarChart3, 
  Plug,
  Shield,
  TrendingUp,
  Globe,
  Search,
  Database
} from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Secure Client Portals",
    description: "Build secure login portals where clients can upload data, monitor KPIs in real-time, download reports, and interact with their business data. Features include role-based access control, encrypted connections, and complete audit logs.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Assistants",
    description: "Intelligent conversational AI that handles customer inquiries, reduces support costs, and improves response times. Deploy 24/7 customer service that scales with your business.",
  },
  {
    icon: Database,
    title: "Data Engineering & Pipelines",
    description: "Build robust data pipelines that connect multiple sources, transform data, and deliver insights. Automated data ingestion, validation, and processing that keeps your systems always up-to-date.",
  },
  {
    icon: BarChart3,
    title: "Automated Reporting & Dashboards",
    description: "Automated reporting systems that generate scheduled reports, real-time dashboards, and KPI visualizations. Export reports in multiple formats and distribute automatically via email, portal, or messaging.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "End-to-end workflow automation that eliminates manual tasks, reduces operational costs, and increases productivity. Streamline operations from lead capture to order fulfillment and everything in between.",
  },
  {
    icon: Brain,
    title: "RAG Knowledge Systems",
    description: "Enterprise knowledge management systems that make your company's data instantly searchable and accessible. Empower teams with intelligent document retrieval and insights from your own documents.",
  },
  {
    icon: TrendingUp,
    title: "Sales & CRM Automation",
    description: "Intelligent sales automation that qualifies leads, nurtures prospects, and optimizes your sales pipeline. Increase conversion rates and accelerate revenue growth with automated follow-ups and workflows.",
  },
  {
    icon: Plug,
    title: "System Integration",
    description: "Seamless integration of your existing systems with intelligent automation. Connect CRM, ERP, e-commerce platforms, and third-party applications to create unified, automated workflows.",
  },
  {
    icon: Search,
    title: "Competitor Analysis & Market Intelligence",
    description: "AI-powered competitor analysis that tracks market trends, monitors competitor strategies, and identifies opportunities. Stay ahead of market changes with intelligent competitive intelligence.",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Enterprise AI Solutions for Businesses of all 
            Sizes
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive AI solutions designed to drive productivity, reduce costs, and accelerate growth for mid-size businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 card-hover overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <solution.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
