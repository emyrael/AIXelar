import { 
  FileSpreadsheet, 
  MessageCircle, 
  HardDrive, 
  Mail, 
  Slack, 
  FileText, 
  Zap, 
  Workflow,
  Database,
  Calendar,
  Users,
  BarChart3,
  Cloud,
  Shield,
  Code,
  Globe
} from "lucide-react";

// Tech tools with icons and names
const techTools = [
  { name: "Excel", icon: FileSpreadsheet, color: "text-green-600" },
  { name: "WhatsApp", icon: MessageCircle, color: "text-green-500" },
  { name: "Google Drive", icon: HardDrive, color: "text-blue-500" },
  { name: "Gmail", icon: Mail, color: "text-red-500" },
  { name: "Slack", icon: Slack, color: "text-purple-500" },
  { name: "Notion", icon: FileText, color: "text-gray-800" },
  { name: "Zapier", icon: Zap, color: "text-orange-500" },
  { name: "Make.com", icon: Workflow, color: "text-blue-600" },
  { name: "n8n", icon: Workflow, color: "text-red-600" },
  { name: "Calendly", icon: Calendar, color: "text-blue-500" },
  { name: "CRM Systems", icon: Users, color: "text-indigo-500" },
  { name: "Salesforce", icon: Database, color: "text-blue-400" },
  { name: "HubSpot", icon: BarChart3, color: "text-orange-400" },
  { name: "AWS", icon: Cloud, color: "text-orange-500" },
  { name: "Google Cloud", icon: Cloud, color: "text-blue-500" },
  { name: "Microsoft Azure", icon: Cloud, color: "text-blue-600" },
  { name: "API Integrations", icon: Code, color: "text-purple-600" },
  { name: "Webhooks", icon: Globe, color: "text-cyan-500" },
];

const TechToolsSlider = () => {
  // Duplicate the array for seamless infinite scroll
  const duplicatedTools = [...techTools, ...techTools];

  return (
    <section className="py-10 bg-secondary/20 overflow-hidden md:py-16">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="text-center mb-7 md:mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Integrations</span>
          <h2 className="text-xl md:text-3xl font-bold text-foreground mt-3 mb-2 md:mt-4 md:mb-3">
            Works with Your Existing Tools
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto md:text-base">
            We integrate AI with the tools you already use, so you don't have to change your workflow
          </p>
        </div>

        {/* Infinite Scrolling Slider */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none md:w-32" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none md:w-32" />

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-infinite">
              {duplicatedTools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <div
                    key={`${tool.name}-${index}`}
                    className="flex-shrink-0 mx-2 flex min-w-[118px] flex-col items-center justify-center rounded-xl border border-border/50 bg-card p-4 transition-all duration-300 group hover:border-accent/50 md:mx-4 md:min-w-[160px] md:p-6"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors md:w-12 md:h-12 md:mb-3 ${tool.color}`}>
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span className="text-xs font-medium text-foreground text-center md:text-sm">{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default TechToolsSlider;
