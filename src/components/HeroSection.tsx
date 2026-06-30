import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, DatabaseZap, Layers3, Network, Sparkles, Workflow } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const proofItems = [
  "AI Agents",
  "Web & Mobile Apps",
  "Automation Systems",
  "Decision Dashboards",
];

const signalCards = [
  {
    icon: Workflow,
    label: "Business Discovery",
    value: "Understand workflows, teams, and bottlenecks",
  },
  {
    icon: Network,
    label: "AI & App Architecture",
    value: "Design the right system before building",
  },
  {
    icon: Bot,
    label: "Automation + Intelligence",
    value: "Deploy tools that improve daily operations",
  },
];

const metricItems = ["Workflow mapped", "AI model ready", "System deployed"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Technical motion layer */}
      <div className="absolute inset-0 tech-grid opacity-50" />
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.16),transparent_62%)] animate-gradient" />
      <div className="absolute left-6 top-28 hidden h-44 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent md:block animate-scan-y" />
      <div className="absolute right-8 bottom-28 hidden h-56 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent md:block animate-scan-y-delayed" />

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-4xl text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-5 animate-fade-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">AI PRODUCT STUDIO • AUTOMATION • DATA INTELLIGENCE</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-up">
            Intelligent Software for Businesses Ready to{" "}
            <span className="gradient-text">Move Faster</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up-delayed lg:mx-0">
            AIXELAR designs and builds AI-powered apps, automation systems, dashboards, and business platforms. We start by learning how your company works, then turn your workflows into intelligent software that saves time, improves decisions, and scales with you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delayed lg:justify-start">
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="https://calendly.com/emyraeleson/30min" target="_blank" rel="noopener noreferrer">
                Book a Discovery Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#products">Explore Our Work</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-14 border-t border-border/50 pt-8">
            <p className="text-sm text-muted-foreground mb-5">Built for companies that need practical intelligence, not generic software.</p>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {proofItems.map((item) => (
                <span key={item} className="rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-semibold text-muted-foreground shadow-soft backdrop-blur">
                  {item}
                </span>
              ))}
            </div>
          </div>
          </div>

          {/* Product Mockup */}
          <div className="relative mx-auto w-full max-w-xl animate-fade-up-delayed">
            <div className="hero-interface-card rounded-2xl bg-card/80 p-4 shadow-glow backdrop-blur-xl">
              <div className="hero-interface-surface rounded-xl border border-border/60 bg-gradient-to-br from-background via-card to-secondary/50 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">Intelligent Operations Layer</p>
                    <h2 className="mt-1 text-xl font-bold text-foreground">From discovery to deployed AI systems</h2>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <Layers3 className="h-5 w-5 text-accent" />
                  </div>
                </div>

                <div className="relative space-y-3">
                  <div className="hero-data-flow" aria-hidden="true" />
                  {signalCards.map((card, index) => (
                    <div
                      key={card.label}
                      className="hero-interface-row group flex items-center gap-4 rounded-xl border border-border/60 bg-background/70 p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-card hover:shadow-card"
                      style={{ animationDelay: `${index * 120}ms` }}
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                        <card.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-foreground">{card.label}</p>
                        <p className="text-sm text-muted-foreground">{card.value}</p>
                      </div>
                      <span className="hero-status-dot h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_hsl(var(--accent)/0.8)]" />
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {["Discover", "Design", "Deploy"].map((item) => (
                    <div key={item} className="rounded-lg border border-border/60 bg-card p-3 text-center text-sm font-semibold text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-accent/20 bg-accent/5 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <DatabaseZap className="h-4 w-4 text-accent" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Build signal</span>
                  </div>
                  <div className="hero-metric-cycle relative h-5 min-w-32 overflow-hidden text-right text-sm font-semibold text-foreground">
                    {metricItems.map((item, index) => (
                      <span key={item} style={{ animationDelay: `${index * 2.4}s` }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
