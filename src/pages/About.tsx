import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Zap, Code2, Linkedin, Twitter, Github, Lightbulb, Workflow, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 inline-block">
              About AIXelar
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              We Help Businesses{" "}
              <span className="gradient-text">Grow with AI</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Making AI adoption simple, accessible, and impactful. We connect intelligent automation 
              with the tools you already use, helping companies become more competitive through 
              practical AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Why AIXelar Story */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Why AIXelar Exists
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Problem */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">The Problem</h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Many businesses want to use AI but don't know where to start. AI is confusing, 
                        fragmented, and overwhelming.
                      </p>
                      <p>
                        SMEs lack affordable access to AI engineers or consultants. Companies waste time 
                        manually doing tasks AI can automate instantly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Our Solution</h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        AIXelar helps businesses grow by leveraging practical AI solutions. We build 
                        automation systems that integrate with existing tools like Slack, Notion, WhatsApp, 
                        n8n, Zapier, Make.com, Calendly, CRM, and more.
                      </p>
                      <p>
                        We help companies become more competitive using AI-driven processes. We provide 
                        strategy + implementation "Idea to AI Workflow." Built for startups, mid-sized 
                        companies, and enterprise teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What AIXelar Does */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              How We Help Businesses
            </h2>
            <p className="text-lg text-muted-foreground">
              Three core services that transform how your business operates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* AI Strategy & Consulting */}
            <div className="group p-8 rounded-2xl bg-card border border-border/50 card-hover">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Lightbulb className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">AI Strategy & Consulting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Helping businesses understand how to use AI for real impact. Turning business goals 
                into practical workflows that deliver measurable results.
              </p>
            </div>

            {/* Automation & Integration */}
            <div className="group p-8 rounded-2xl bg-card border border-border/50 card-hover">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Workflow className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Automation & Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connecting AI to real-world tools. Automating repetitive tasks. Powering WhatsApp 
                notifications, report summaries, dashboards, CRM updates, and more.
              </p>
            </div>

            {/* Custom AI Solutions */}
            <div className="group p-8 rounded-2xl bg-card border border-border/50 card-hover">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Code2 className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Custom AI Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building AI agents, assistants, dashboards, and workflow engines. Implementing RAG 
                search, document intelligence, and credential verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Meet the Founder</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Emmanuel
              </h2>
              <p className="text-xl text-accent font-medium">
                AI Strategist & Consultant
              </p>
            </div>

            <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-card">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Emmanuel brings hands-on engineering experience from consulting, manufacturing, 
                  healthcare tech, and enterprise environments. He has built real AI solutions and 
                  automation systems used by businesses.
                </p>
                <p>
                  Known for combining data engineering, AI automation, and cloud infrastructure to 
                  deliver end-to-end results. Founder of AIXelar with a mission to make AI adoption 
                  simple, impactful, and accessible for businesses of all sizes.
                </p>
                <p className="text-foreground font-medium">
                  Passionate about real-world solutions, not hype.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center mt-8 pt-8 border-t border-border/50">
                <a
                  href="https://linkedin.com/in/Emmanuel-Onwubuya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 node-bg opacity-10" />
        
        {/* Gradient Accents */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-10">
              Let's discuss how AI can help your business grow and become more competitive.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="accent" size="xl" className="group" asChild>
                <a href="https://calendly.com/emyraeleson/30min" target="_blank" rel="noopener noreferrer">
                  <Zap className="w-5 h-5" />
                  Book Your Free Consultation
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/#contact">Get in Touch</Link>
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/50 mt-6">
              No commitment required. 30-minute strategy call.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

