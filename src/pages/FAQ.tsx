import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const faqSections = [
    {
      title: "General Questions",
      items: [
        {
          question: "What is Xelar and your mission?",
          answer: "Xelar is an AI Automation & Data Engineering consultancy that helps small and mid-sized businesses modernize their operations using practical, results-driven AI solutions. Our mission is to make AI simple, practical, and impactful. We help businesses work smarter, reduce manual workload, increase revenue, and adopt automation without complexity. We're not just chat—we build connected systems + automation."
        },
        {
          question: "What problems do you solve?",
          answer: "We solve common business challenges: Manual, repetitive tasks → Automated workflows; Disconnected data sources → Unified data pipelines and dashboards; Slow reporting → Automated, scheduled reports; Lack of visibility → Real-time KPIs and monitoring; Security concerns → Secure portals with access control; Team collaboration → Shared dashboards and approval workflows; Data governance → Audit trails and role-based access."
        },
        {
          question: "What industries does Xelar support?",
          answer: "We support a wide range of industries. All we need to know is your challenge, and we can discuss how automation and AI can help solve it. Some examples include: Retail & e-commerce, Car dealerships, Logistics & transportation, Healthcare clinics (non-medical workflows), Marketing & digital agencies, and Real estate. If your industry isn't listed here, that's fine. We work with any business that has manual processes, repetitive tasks, or data challenges that could benefit from automation and AI solutions."
        },
        {
          question: "Do I need technical skills to work with Xelar?",
          answer: "No. Xelar handles all technical implementation, testing, and support. You just describe your business process and what you want to achieve."
        }
      ]
    },
    {
      title: "Security & Portals",
      items: [
        {
          question: "Can you build a secure portal?",
          answer: "Yes! We can build secure client portals that provide a private, controlled interface for accessing automation and data. Portal features include: Private URL access, upload and approve data pulls, trigger workflows on-demand, view real-time KPIs and dashboards, download reports, set custom alerts, and multi-user support with role-based access. Security includes authentication (login/password or SSO), role-based access control (RBAC), optional SSO/MFA, encrypted connections and storage, and complete audit logs. Portals are ideal when you need governance, team collaboration, and controlled access to sensitive business data."
        },
        {
          question: "How do you secure client data (encryption, access control)?",
          answer: "We implement enterprise-grade security: Encryption (HTTPS/TLS for data in transit, database encryption for data at rest, secure API connections); Access Control (Role-based access control (RBAC), optional SSO and MFA, user management and permissions); Audit & Compliance (Complete audit logs, data retention policies controlled by client)."
        },
        {
          question: "Where is the data stored?",
          answer: "Data storage depends on the project and client preferences. Options include: Client Environment (data stored in client's own infrastructure), Secure Hosted Storage (data stored in secure cloud infrastructure with encryption), or Hybrid (some data in client environment, some in secure hosted storage). We discuss storage options during the discovery phase."
        },
        {
          question: "Who can access the portal?",
          answer: "Access is controlled through Role-Based Access Control (RBAC). Access levels include: Admins (full access), Managers (reports, dashboards, workflow triggers), Viewers (read-only access), and Custom Roles (defined based on your business needs). Admin controls who has access and what permissions they have, with optional SSO/MFA support and complete audit logs."
        }
      ]
    },
    {
      title: "Services & Capabilities",
      items: [
        {
          question: "What tools do you integrate with?",
          answer: "We integrate with: n8n, Zapier, Make, WhatsApp APIs (Twilio, 360dialog), Google Workspace, Microsoft tools, Shopify, WooCommerce, Stripe, Databricks, Snowflake, Supabase, PostgreSQL, CRMs like HubSpot, Pipedrive, Salesforce, PowerBI, Tableau dashboards, and any tool that supports APIs or webhooks."
        },
        {
          question: "Can you automate reporting?",
          answer: "Yes. This includes: Daily sales reports, Weekly marketing performance, Inventory status, KPI dashboards, Custom multi-source analytics. Reports can be scheduled, exported in multiple formats (PDF, Excel, CSV), and distributed automatically via email, portal, or WhatsApp."
        },
        {
          question: "Can you build AI chatbots for my website?",
          answer: "Yes — including: Sales bots, Support bots, Internal assistants, Knowledge-base Q&A tools, RAG systems using your own documents. These integrate with your existing tools and knowledge bases."
        }
      ]
    },
    {
      title: "Pricing & Timeline",
      items: [
        {
          question: "How does pricing work?",
          answer: "No fixed price — all pricing is scope-based. Pricing process: 1) Discovery Call (free) - We understand your needs, 2) Roadmap - We create a detailed plan with estimates, 3) Custom Quote - Based on your specific requirements. What affects pricing: Type of automation, tools and integrations, number of workflows, complexity, security requirements. We provide transparent estimates after understanding your specific needs."
        },
        {
          question: "How long does it take to build automations?",
          answer: "Timelines depend on complexity, integrations, and security requirements. Typical timelines: Small workflows (1–5 days), Medium workflows (1–2 weeks), AI assistants/chatbots (1–3 weeks), Data pipelines/dashboards (2–8 weeks), Secure portals with authentication (2–6 weeks MVP), Full system rollout (6–12+ weeks). Factors affecting timeline: Number and complexity of integrations, security requirements, data access availability, number of workflows, client feedback cycles."
        },
        {
          question: "Do you charge for the roadmap call?",
          answer: "No. The AI Strategy Call is currently free, and it helps us understand your business and propose a tailored plan."
        }
      ]
    },
    {
      title: "Support & Maintenance",
      items: [
        {
          question: "What does ongoing support look like?",
          answer: "Ongoing support can include: Monitoring & Maintenance (system health monitoring, workflow execution tracking, error detection and resolution, performance optimization); Enhancements (adding new workflows, expanding features, integrating new data sources, security updates). Support levels: Full documentation & handover (you manage it), Ongoing support retainer (we monitor and maintain), Continuous expansion (we add features over time). Support packages are scope-based and customized to your needs."
        },
        {
          question: "Can we start small?",
          answer: "Absolutely. Many clients begin with a simple automation, see impact, and scale from there. We can start with a single workflow or portal feature and expand over time."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 inline-block">
              Frequently Asked Questions
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Xelar FAQ
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about Xelar's AI automation and data engineering services, secure portals, and how we help businesses modernize their operations.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  {section.title}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {section.items.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`item-${sectionIndex}-${itemIndex}`}>
                      <AccordionTrigger className="text-left font-semibold text-foreground">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Book a free 30-minute AI Strategy & Roadmap Call. We'll discuss your challenges and show you exactly how Xelar can help transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="https://calendly.com/emyraeleson/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5" />
                  Book Your Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/#contact">Get in Touch</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No commitment required. 30-minute strategy call.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;

