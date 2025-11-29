import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Formspree endpoint for sending emails to info@aixelar.io
      const response = await fetch("https://formspree.io/f/mldyqdkl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          company: formData.companyName,
          email: formData.email,
          message: formData.description,
          _subject: `AI Solution Inquiry from ${formData.fullName}`,
          _to: "info@aixelar.io",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          description: "",
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Thank You!
            </h3>
            <p className="text-lg text-muted-foreground">
              We've received your message and will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Let's Build Your AI Solution
          </h2>
          <p className="text-lg text-muted-foreground">
            Tell us about your project and we'll get back to you with a custom proposal.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Or email us directly at{" "}
            <a href="mailto:info@aixelar.io" className="text-accent hover:underline">
              info@aixelar.io
            </a>
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-foreground"
                >
                  Full Name
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="bg-card border-border/50 focus:border-accent"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="companyName"
                  className="text-sm font-medium text-foreground"
                >
                  Company Name
                </label>
                <Input
                  id="companyName"
                  name="companyName"
                  placeholder="Your company name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="bg-card border-border/50 focus:border-accent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-card border-border/50 focus:border-accent"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="description"
                className="text-sm font-medium text-foreground"
              >
                Describe Your AI Solution
              </label>
              <Textarea
                id="description"
                name="description"
                placeholder="Tell us about the AI solution you're looking for, your business challenges, and any specific requirements..."
                value={formData.description}
                onChange={handleChange}
                required
                rows={6}
                className="bg-card border-border/50 focus:border-accent resize-none"
              />
            </div>

            {error && (
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-destructive mb-1">Error</p>
                  <p className="text-sm text-destructive/80">{error}</p>
                </div>
              </div>
            )}

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full group"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground text-center mt-6">
            We typically respond within 24 hours. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
