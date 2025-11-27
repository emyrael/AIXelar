import { 
  MessageSquare, 
  Brain, 
  Workflow, 
  BarChart3, 
  Mail, 
  FileCheck 
} from "lucide-react";

const solutions = [
  {
    icon: MessageSquare,
    title: "AI Chatbots & Assistants",
    description: "Custom conversational AI that understands your business and serves your customers 24/7.",
  },
  {
    icon: Brain,
    title: "RAG Knowledge Systems",
    description: "Intelligent document retrieval systems that make your company knowledge instantly accessible.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "End-to-end workflow automation that eliminates manual bottlenecks and scales with you.",
  },
  {
    icon: BarChart3,
    title: "AI Dashboards & Pipelines",
    description: "Real-time data intelligence dashboards powered by machine learning insights.",
  },
  {
    icon: Mail,
    title: "Email → App Sync",
    description: "Seamless integrations that connect your email workflows to your core applications.",
  },
  {
    icon: FileCheck,
    title: "Document Verification AI",
    description: "Automated document processing and verification with high accuracy and compliance.",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            AI Solutions That Drive Results
          </h2>
          <p className="text-lg text-muted-foreground">
            Custom-built AI applications designed specifically for your business needs.
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
