import { Linkedin, Twitter, Github } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const AboutSection = () => {
  const founderImageSrc = founderImage;
  
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Founder Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border/50 shadow-card relative bg-gradient-to-br from-accent/20 via-primary/10 to-accent/5">
                {founderImageSrc ? (
                  <img
                    src={founderImageSrc}
                    alt="Emmanuel Onwubuya - Data Engineer & AI Solutions Architect"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    fetchPriority="high"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center">
                      <span className="text-6xl font-bold text-accent/50">EO</span>
                    </div>
                  </div>
                )}
                
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
                
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-20 h-20 bg-accent/10 rounded-full blur-xl" />
                <div className="absolute bottom-8 left-8 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-card border border-border/50 shadow-card">
                <span className="text-3xl font-bold text-accent">5+</span>
                <p className="text-sm text-muted-foreground">Years in Data &AI</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Meet the Founder</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Emmanuel Onwubuya
              </h2>
              <p className="text-xl text-accent font-medium mb-6">
                Data Engineer & AI Solutions Architect
              </p>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a Data Engineer with experience at Accenture and engineering projects with Airbus, I founded AIXelar to help businesses harness the transformative power of AI and data solutions.
                </p>
                <p>
                  Currently serving as a Data Engineer at WefraLife, I also founded Ufindar an AI-powered university search platform.
                </p>
                <p>
                  Partnered with Adessi to deliver cutting-edge AI and data solutions, my mission is to make AI accessible, practical, and impactful for businesses of all sizes.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
