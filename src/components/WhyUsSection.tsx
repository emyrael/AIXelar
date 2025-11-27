import { Zap, Code2, Shield, Headphones, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery (7–21 Days)",
    description: "Rapid development cycles mean you see results in weeks, not months.",
  },
  {
    icon: Code2,
    title: "Custom-Built, No Templates",
    description: "Every solution is tailored to your specific business requirements.",
  },
  {
    icon: CheckCircle,
    title: "Deep AI Expertise",
    description: "Years of experience building production-grade AI systems.",
  },
  {
    icon: Shield,
    title: "Secure Cloud Deployments",
    description: "Enterprise-grade security with compliant cloud infrastructure.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Continuous maintenance and optimization post-launch.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Your Competitive Edge in AI
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just build AI—we build AI that works for your specific business context and scales with your growth.
              </p>
              
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{reason.title}</h4>
                      <p className="text-sm text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 border border-border/50 p-8 relative overflow-hidden">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 h-full">
                  <div className="flex flex-col justify-center items-center p-6 rounded-2xl bg-card border border-border/50">
                    <span className="text-4xl font-bold text-accent">50+</span>
                    <span className="text-sm text-muted-foreground mt-2">Projects Delivered</span>
                  </div>
                  <div className="flex flex-col justify-center items-center p-6 rounded-2xl bg-card border border-border/50">
                    <span className="text-4xl font-bold text-accent">98%</span>
                    <span className="text-sm text-muted-foreground mt-2">Client Satisfaction</span>
                  </div>
                  <div className="flex flex-col justify-center items-center p-6 rounded-2xl bg-card border border-border/50">
                    <span className="text-4xl font-bold text-accent">14</span>
                    <span className="text-sm text-muted-foreground mt-2">Avg. Delivery Days</span>
                  </div>
                  <div className="flex flex-col justify-center items-center p-6 rounded-2xl bg-card border border-border/50">
                    <span className="text-4xl font-bold text-accent">24/7</span>
                    <span className="text-sm text-muted-foreground mt-2">Support Available</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
