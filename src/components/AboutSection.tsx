import { Linkedin, Twitter, Github } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        {/* About AIXelar */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">About AIXelar</span>
          <div className="space-y-4 text-muted-foreground leading-relaxed mt-6">
            <p>
              AIXelar is an AI automation and intelligence platform built to help small and mid-size businesses optimise their operations and work smarter with AI. The mission is simple: turn complex AI capabilities into practical, accessible, and powerful solutions that deliver real business value.
            </p>
            <p>
              We focus on workflow automation, intelligent system integration, business optimisation, and data-driven insights—helping companies reduce manual work, improve efficiency, and stay competitive in a fast-changing digital world.
            </p>
          </div>
        </div>

        {/* Meet the Founder */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Meet the Founder</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Emmanuel Onwubuya
          </h2>
          <p className="text-xl text-accent font-medium mb-6">
            Data Engineer & AI Solutions Architect
          </p>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            <p>
              Emmanuel brings hands-on engineering experience from Accenture, Airbus, and his current role as an AI Data Engineer at WEFRA Life. With a strong background in data engineering, AI automation, and cloud technologies, he founded AIXelar to make AI adoption simple, impactful, and accessible for businesses of all sizes.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <a
              href="https://linkedin.com/in/Emmanuel-Onwubuya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
