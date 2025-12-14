import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleCompanyClick = (hash: string) => {
    if (hash === "#about") {
      // Navigate to About page
      navigate("/about");
    } else if (isHomePage) {
      // On home page, scroll to section
      const element = document.querySelector(hash);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      // On other pages, navigate to home with hash
      navigate(`/${hash}`);
    }
  };

  const handleLegalClick = (path: string) => {
    navigate(path);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  const footerLinks = {
    services: [
      { name: "AI Chatbots" },
      { name: "RAG Systems" },
      { name: "Process Automation" },
      { name: "AI Dashboards" },
    ],
    company: [
      { name: "About", hash: "#about" },
      { name: "Contact", hash: "#contact" },
      { name: "Process", hash: "#process" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-of-service" },
      { name: "Cookie Policy", path: "/cookie-policy" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold">
              <span className="text-accent">Xelar</span>
            </a>
            <p className="mt-4 text-primary-foreground/60 text-sm leading-relaxed">
              Custom AI solutions for businesses ready to scale. From chatbots to full automation systems.
            </p>
            <div className="mt-4 mb-6">
              <a
                href="mailto:info@aixelar.io"
                className="text-sm text-primary-foreground/60 hover:text-accent transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                info@aixelar.io
              </a>
            </div>
            <div className="flex gap-4">
              <a
                // href="https://linkedin.com/in/Emmanuel-Onwubuya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <span className="text-sm text-primary-foreground/60">
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleCompanyClick(link.hash)}
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLegalClick(link.path)}
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Xelar. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/40 font-medium">
            Accelerate With Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
