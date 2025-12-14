import { Linkedin, Twitter, Github } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        {/* About Xelar */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Xelar</span>
          <div className="space-y-4 text-muted-foreground leading-relaxed mt-6">
            <p>
              Xelar is an AI automation and intelligence platform built to help businesses of different sizes optimise their operations and work smarter with AI. The mission is simple: turn complex AI capabilities into practical, accessible, and powerful solutions that deliver real business value.
            </p>
            <p>
              We focus on workflow automation, intelligent system integration, business optimisation, and data-driven insights helping companies reduce manual work, improve efficiency, and stay competitive in a fast-changing digital world.
            </p>
          </div>
        </div>

        {/* Meet the Founder */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Meet the Founder</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Emmanuel
          </h2>
          <p className="text-xl text-accent font-medium mb-6">
            Data Engineer & AI Solutions Architect
          </p>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            <p>
            Emmanuel brings more than 5 years hands-on engineering experience across multiple sectors including consulting, manufacturing, and healthcare technology where he has designed and built AI solutions, data platforms, and automation systems that solve real business problems. With a strong foundation in data engineering, AI automation, and cloud technologies, he founded Xelar with a clear mission: to make AI adoption simple, practical, and genuinely transformative for businesses of all sizes.
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
