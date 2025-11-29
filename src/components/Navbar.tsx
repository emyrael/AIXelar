import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    if (isHomePage) {
      // On home page, just scroll to section
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
      window.location.href = `/${hash}`;
    }
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (isHomePage) {
      // Already on home page, scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Navigate to home page
      navigate("/");
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  type NavLink = 
    | { name: string; hash: string; path?: never }
    | { name: string; path: string; hash?: never };

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Solutions", hash: "#solutions" },
    { name: "Process", hash: "#process" },
    { name: "Contact", hash: "#contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-soft py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-bold">
            <span className="text-foreground">AI</span><span className="text-accent">Xelar</span>
          </span>
          {isScrolled && (
            <span className="text-xs text-muted-foreground font-medium mt-0.5">Accelerate With Intelligence</span>
          )}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.name === "Home" ? (
              <button
                key={link.name}
                onClick={handleHomeClick}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </button>
            ) : link.path ? (
              <Link
                key={link.name}
                to={link.path}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.hash!)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </button>
            )
          ))}
          <Button variant="hero" size="default" asChild>
            <a href="https://calendly.com/emyraeleson/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-6 animate-fade-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              link.name === "Home" ? (
                <button
                  key={link.name}
                  onClick={handleHomeClick}
                  className="text-foreground hover:text-accent transition-colors py-2 text-lg font-medium text-left"
                >
                  {link.name}
                </button>
              ) : link.path ? (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-accent transition-colors py-2 text-lg font-medium text-left"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.hash!)}
                  className="text-foreground hover:text-accent transition-colors py-2 text-lg font-medium text-left"
                >
                  {link.name}
                </button>
              )
            ))}
            <Button variant="hero" size="lg" className="mt-4" asChild>
              <a href="https://calendly.com/emyraeleson/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
