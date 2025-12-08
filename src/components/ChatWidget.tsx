import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Calendar, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAIResponse, loadKnowledgeBase } from "@/lib/openai-service";
import { loadKnowledgeBaseFiles } from "@/lib/kb-loader";

const CALENDLY_LINK = "https://calendly.com/emyraeleson/30min";

// Fallback knowledge base (used if API fails)
const FALLBACK_KB = {
  overview: `AIXelar is an AI Automation & Data Engineering consultancy designed to help small and mid-sized businesses modernize their operations using practical, results-driven AI solutions. We focus on automating repetitive workflows, building AI-powered assistants, streamlining business operations through n8n, Zapier, Make, and custom integrations, improving data pipelines, dashboards, and analytics, and creating AI strategy roadmaps tailored to each business.`,
  mission: `AIXelar exists to make AI simple, practical, and impactful. Our goal is to help businesses work smarter, reduce manual workload, increase revenue, and adopt automation without complexity.`,
  services: {
    workflow: `Workflow Automation using n8n, Zapier, Make (Integromat), WhatsApp automation via APIs, Email and SMS automation, Google Sheets, Excel, Notion workflows. Examples: Automatic lead capture → follow-up → reminders, Employee onboarding flows, Supplier order automation, Customer notifications, Calendar and appointment automation.`,
    data: `Data Engineering & Analytics using Databricks (Bronze/Silver/Gold), Snowflake, BigQuery, PostgreSQL & Supabase, Delta Lake, API ingestion & ETL scripts, BI dashboards (PowerBI, Tableau). Capabilities: Building production ETL/ELT pipelines, Merging data from multiple systems, Automating daily/weekly/monthly reports, Creating KPI dashboards for executives.`,
    ai: `AI Assistants & Intelligent Systems: Website chatbots, AI customer support agents, Retrieval-Augmented Generation (RAG) assistants, Internal company copilots, Email drafting and classification agents, Content generation assistance, Document query systems. These integrate with Supabase vector databases, Pinecone, Company documents, Knowledge bases, WhatsApp, Slack, Teams, Email tools.`,
    strategy: `AI Strategy & Roadmap Consulting: We analyze your business processes, identify automation opportunities, recommend workflows, estimate implementation effort, and create a 30–90 day action plan.`
  },
  industries: [
    { 
      name: "Retail & E-Commerce", 
      painPoints: ["Manual order tracking", "Inventory management", "Customer engagement", "Slow reporting"],
      solutions: ["Daily sales reports", "Abandoned cart automation", "WhatsApp order confirmations", "Low-stock alerts", "Supplier reorder workflows", "Customer review follow-up automation"]
    },
    { 
      name: "Car Dealerships", 
      painPoints: ["Manual lead follow-up", "Unorganized inventory", "Missed appointments"],
      solutions: ["Lead → WhatsApp automation", "Test-drive booking flow", "Inventory sync automation", "Reminders for customers and sales staff", "Automated price list formatting & publishing"]
    },
    { 
      name: "Logistics & Transportation", 
      painPoints: ["Communication delays", "Manual scheduling", "Slow shipment updates"],
      solutions: ["Real-time shipment alerting", "Driver scheduling automation", "Email/SMS notifications for clients", "Load forecasting dashboards", "SLA monitoring"]
    },
    { 
      name: "Healthcare Clinics (Non-medical Automation)", 
      painPoints: ["No-shows", "Manual intake forms", "Billing updates", "Staff coordination"],
      solutions: ["Appointment reminders", "Automated intake form processing", "Staff scheduling notifications", "Operational KPI dashboards"]
    },
    { 
      name: "Agencies (Marketing, Digital, Consulting)", 
      painPoints: ["Manual reporting", "High workload", "Client update delays"],
      solutions: ["Automated Google Ads / Meta Ads reports", "Client onboarding workflows", "Social media content pipelines", "Lead scoring & qualification bots"]
    },
    { 
      name: "Real Estate", 
      painPoints: ["Lead routing", "Follow-ups", "Appointment coordination"],
      solutions: ["Auto-routing leads to agents", "WhatsApp follow-up sequences", "Viewing appointment reminders", "CRM enrichment automation"]
    }
  ],
  workflows: [
    { name: "WhatsApp Lead Follow-Up Flow", description: "Capture form data → save to CRM → send WhatsApp welcome → follow-up after 24h → notify owner" },
    { name: "Daily Sales Summary", description: "Pull data from Shopify/WooCommerce → calculate metrics → send summary via WhatsApp/email → save to Drive" },
    { name: "Inventory Low-Stock Alert", description: "Monitor inventory → evaluate threshold → notify purchasing team → auto-generate supplier email" },
    { name: "Marketing Agency Automated Reporting", description: "Fetch Google/Meta/TikTok Ads performance → merge with KPIs → format report → email clients automatically" },
    { name: "Appointment Scheduling Automation", description: "Sync Calendly submissions → send reminders → auto-reschedule conflicts → notify staff" }
  ],
  tools: ["n8n, Zapier, Make", "WhatsApp APIs (Twilio, 360dialog)", "Google Workspace, Microsoft tools", "Shopify, WooCommerce, Stripe", "Databricks, Snowflake, Supabase, PostgreSQL", "CRMs like HubSpot, Pipedrive, Salesforce", "PowerBI, Tableau dashboards", "Any tool with APIs or webhooks"],
  timelines: {
    small: "1–5 days",
    medium: "1–2 weeks",
    ai: "1–3 weeks",
    data: "2–8 weeks"
  },
  calendlyLink: "https://calendly.com/emyraeleson/30min"
};

interface Message {
  id: string;
  text: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm AIXelar's AI Automation Strategist. I'm here to help you understand how AI and automation can improve your business operations. What would you like to know?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    problem: "",
  });
  const [collectingInfo, setCollectingInfo] = useState(false);
  const [knowledgeBase, setKnowledgeBase] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Format message text to remove AI-generated formatting
  const formatMessageText = (text: string): string => {
    return text
      // Remove Calendly links
      .replace(new RegExp(CALENDLY_LINK.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), '')
      .replace(/\[SCHEDULE_CALL_BUTTON\]/g, '')
      .replace(/https:\/\/calendly\.com\/[^\s]+/g, '')
      // Remove bullet points and dashes at start of lines
      .replace(/^[\s]*[-•*]\s+/gm, '')
      // Remove numbered lists formatting
      .replace(/^\d+\.\s+/gm, '')
      // Remove markdown formatting
      .replace(/\*\*(.*?)\*\*/g, '$1') // Bold
      .replace(/\*(.*?)\*/g, '$1') // Italic
      .replace(/`(.*?)`/g, '$1') // Code
      // Clean up multiple spaces
      .replace(/\s{2,}/g, ' ')
      // Clean up multiple newlines
      .replace(/\n{3,}/g, '\n\n')
      // Trim each line
      .split('\n')
      .map(line => line.trim())
      .join('\n')
      .trim();
  };

  // Clear chat state on page refresh/reload
  useEffect(() => {
    // Check if this is a page refresh/reload
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const isPageRefresh = navigation?.type === 'reload';
    
    if (isPageRefresh) {
      // Reset to initial state
      setMessages([
        {
          id: "1",
          text: "Hi! I'm AIXelar's AI Automation Strategist. I'm here to help you understand how AI and automation can improve your business operations. What would you like to know?",
          sender: "assistant",
          timestamp: new Date(),
        },
      ]);
      setInput("");
      setError(null);
      setIsOpen(false);
    }
  }, []);

  // Load knowledge base on mount
  useEffect(() => {
    const loadKB = async () => {
      try {
        // Try loading from files first, fallback to embedded content
        const kb = await loadKnowledgeBaseFiles();
        console.log("✅ Knowledge base loaded:", {
          overview: kb.overview.substring(0, 50) + "...",
          workflows: kb.workflows.substring(0, 50) + "...",
        });
        setKnowledgeBase(kb);
      } catch (err) {
        console.error("❌ Error loading knowledge base:", err);
        // Use fallback
        setKnowledgeBase(FALLBACK_KB);
      }
    };
    loadKB();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const generateResponse = async (userMessage: string): Promise<string> => {
    // If knowledge base is loaded and OpenAI is configured, use AI
    if (knowledgeBase) {
      try {
        const kbContent = await loadKnowledgeBase();
        const conversationHistory = messages
          .slice(-8) // Last 8 messages for better context and memory
          .map((msg) => ({
            role: (msg.sender === "user" ? "user" : "assistant") as "user" | "assistant",
            content: msg.text,
          }));

        const aiResponse = await getAIResponse(conversationHistory, kbContent);
        return aiResponse;
      } catch (err) {
        console.error("OpenAI API error:", err);
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        
        // Show specific error if it's about API key
        if (errorMessage.includes("API key") || errorMessage.includes("not configured")) {
          setError("OpenAI API key not configured. Please check your .env file and restart the dev server.");
        } else {
          // Fallback to rule-based responses
          setError("AI service temporarily unavailable. Using basic responses.");
        }
      }
    }

    // Fallback to rule-based responses
    return generateFallbackResponse(userMessage);
  };

  const generateFallbackResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Greeting responses
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! I'm AIXelar's AI Automation Strategist. I'm here to help you understand how AI and automation can improve your business operations. What industry are you in, or what challenges are you facing?";
    }

    // Industry-specific responses
    if (lowerMessage.includes("retail") || lowerMessage.includes("e-commerce") || lowerMessage.includes("shop")) {
      const industry = FALLBACK_KB.industries[0];
      return `Great! For ${industry.name}, we often see challenges like ${industry.painPoints.slice(0, 2).join(" and ")}.\n\nAIXelar can help with:\n• ${industry.solutions.slice(0, 3).join("\n• ")}\n\nThese automations can reduce manual work and improve customer engagement. What's your biggest operational challenge right now?`;
    }

    if (lowerMessage.includes("car") || lowerMessage.includes("dealership") || lowerMessage.includes("automotive")) {
      const industry = FALLBACK_KB.industries[1];
      return `Perfect! For ${industry.name}, common pain points include ${industry.painPoints.join(", ")}.\n\nWe specialize in:\n• ${industry.solutions.slice(0, 3).join("\n• ")}\n\nThese solutions help streamline lead management and improve customer follow-up. What specific challenge would you like to automate first?`;
    }

    if (lowerMessage.includes("logistics") || lowerMessage.includes("transport") || lowerMessage.includes("shipping")) {
      const industry = FALLBACK_KB.industries[2];
      return `Excellent! For ${industry.name}, AIXelar offers:\n\n• ${industry.solutions.join("\n• ")}\n\nThese automations improve communication and operational efficiency. What specific pain points are you experiencing?`;
    }

    if (lowerMessage.includes("healthcare") || lowerMessage.includes("clinic") || lowerMessage.includes("medical")) {
      const industry = FALLBACK_KB.industries[3];
      return `For ${industry.name}, we focus on non-medical automation:\n\n• ${industry.solutions.join("\n• ")}\n\nThese help reduce no-shows and streamline administrative tasks. What operational challenges are you facing?`;
    }

    if (lowerMessage.includes("agency") || lowerMessage.includes("marketing") || lowerMessage.includes("digital")) {
      const industry = FALLBACK_KB.industries[4];
      return `For ${industry.name}, AIXelar can automate:\n\n• ${industry.solutions.join("\n• ")}\n\nThis frees up time for strategic work. What manual tasks take up most of your team's time?`;
    }

    if (lowerMessage.includes("real estate") || lowerMessage.includes("property")) {
      const industry = FALLBACK_KB.industries[5];
      return `For ${industry.name}, we help with:\n\n• ${industry.solutions.join("\n• ")}\n\nThese automations improve lead conversion and agent coordination. What's your biggest operational challenge?`;
    }

    // Service questions
    if (lowerMessage.includes("what do you do") || lowerMessage.includes("services") || lowerMessage.includes("what can you")) {
      return `AIXelar offers four core services:\n\n1. Workflow Automation (n8n, Zapier, Make, WhatsApp automation)\n2. Data Engineering & Analytics (Databricks, Snowflake, BigQuery, dashboards)\n3. AI Assistants & Intelligent Systems (chatbots, RAG assistants, copilots)\n4. AI Strategy & Roadmap Consulting\n\nWe help businesses automate repetitive tasks, build AI assistants, improve data pipelines, and create strategic roadmaps. What area interests you most?`;
    }

    // Pricing questions - trigger CTA
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("how much") || lowerMessage.includes("pricing")) {
      return `Pricing depends on your specific needs—the type of automation, tools involved, and complexity of workflows. There's no fixed price because every project is unique.\n\nThe cost depends on:\n• The type of automation or AI system\n• The tools involved (n8n, Zapier, APIs, databases, etc.)\n• The number of workflows or pipelines\n• The complexity of your business processes\n\nI can give you a clearer roadmap and estimate if you'd like.`;
    }

    // Implementation questions
    if (lowerMessage.includes("how long") || lowerMessage.includes("timeline") || lowerMessage.includes("when") || lowerMessage.includes("implement")) {
      return `Typical timelines:\n• Small workflows: 1–5 days\n• Medium workflows: 1–2 weeks\n• AI assistants/chatbots: 1–3 weeks\n• Data pipelines/dashboards: 2–8 weeks\n\nFor a personalized timeline based on your specific needs, I'd recommend booking a strategy call.`;
    }

    // Workflow examples
    if (lowerMessage.includes("example") || lowerMessage.includes("workflow") || lowerMessage.includes("automation")) {
      return `Here are some example workflows we build:\n\n• WhatsApp Lead Follow-Up Flow\n• Daily Sales Summary\n• Inventory Low-Stock Alert\n• Marketing Agency Automated Reporting\n• Appointment Scheduling Automation\n\nThese help businesses reduce manual work and improve efficiency. What processes in your business are currently manual?`;
    }

    // Tools integration
    if (lowerMessage.includes("tool") || lowerMessage.includes("integrate") || lowerMessage.includes("zapier") || lowerMessage.includes("whatsapp")) {
      return `We integrate with:\n• n8n, Zapier, Make\n• WhatsApp APIs\n• Google Workspace, Microsoft tools\n• Shopify, WooCommerce, Stripe\n• CRMs (HubSpot, Pipedrive, Salesforce)\n• Data platforms (Databricks, Snowflake, Supabase)\n• And any tool with APIs or webhooks\n\nWhat tools does your business currently use?`;
    }

    // General help
    return `I understand you're interested in AI and automation for your business. To give you the most relevant recommendations, could you tell me:\n\n1. What industry are you in?\n2. What's your biggest operational challenge?\n3. What tools do you currently use?\n\nOr, if you'd prefer, you can book a free 30-minute AI Strategy Call with Emmanuel to get personalized recommendations: ${CALENDLY_LINK}`;
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);
    setError(null);

    try {
      // Generate AI response
      const response = await generateResponse(currentInput);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error("Error generating response:", err);
      setError("Sorry, I'm having trouble processing your request. Please try again or book a call with Emmanuel.");
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm experiencing technical difficulties. Would you like to book a call with Emmanuel to discuss your needs directly?",
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button with Label */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 flex items-center gap-3 z-50 group">
          {/* Text Label */}
          <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 shadow-lg opacity-100 transition-all duration-300 pointer-events-none animate-fade-in">
            <p className="text-sm font-medium text-foreground whitespace-nowrap flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Try our AI Assistant
            </p>
          </div>
          {/* Chat Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-accent text-accent-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center relative"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20"></span>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-card border border-border/50 rounded-2xl shadow-2xl flex flex-col z-50 animate-fade-up">
          {/* Header */}
          <div className="bg-accent text-accent-foreground p-4 rounded-t-2xl flex items-center justify-between">
            <div>
              <h3 className="font-semibold">AIXelar Assistant</h3>
              <p className="text-xs opacity-90">AI Automation Strategist</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-accent-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">
                    {formatMessageText(message.text)}
                  </p>
                  {/* Show button only if AI explicitly includes [SCHEDULE_CALL_BUTTON] in response (after user says yes) */}
                  {message.text.includes('[SCHEDULE_CALL_BUTTON]') && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-3 w-full"
                      asChild
                    >
                      <a
                        href={CALENDLY_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-4 h-4" />
                        Book Strategy Call
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary rounded-lg p-3">
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
            {error && (
              <div className="flex justify-start">
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 max-w-[80%]">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-destructive">{error}</p>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border/50">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-background"
                disabled={isTyping}
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                size="icon"
                variant="accent"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;

